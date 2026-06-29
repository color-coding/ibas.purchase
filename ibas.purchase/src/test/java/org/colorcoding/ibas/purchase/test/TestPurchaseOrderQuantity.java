package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 采购订单 数量逻辑 测试。
 *
 * <p>覆盖：PU-D20 ~ PU-D27</p>
 * <p>核心 logic：MaterialOrderedService（OnOrdered）</p>
 */
public class TestPurchaseOrderQuantity extends AbstractPurchaseQuantityTestCase {

	private static final BigDecimal QTY = Decimals.valueOf(10);

	private BORepositoryPurchase createPurchaseRepository() throws Exception {
		BORepositoryPurchase repo = new BORepositoryPurchase();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	private IPurchaseOrder buildOrder(ISupplier supplier, IMaterial material, IWarehouse warehouse, BigDecimal qty) {
		IPurchaseOrder po = new PurchaseOrder();
		po.setSupplierCode(supplier.getCode());
		IPurchaseOrderItem it = po.getPurchaseOrderItems().create();
		it.setItemCode(material.getCode());
		it.setQuantity(qty);
		it.setPrice(Decimals.valueOf(20));
		it.setWarehouse(warehouse.getCode());
		it.setBatchManagement(material.getBatchManagement());
		it.setSerialManagement(material.getSerialManagement());
		return po;
	}

	// ==================================================================
	// PU-D20: 新建 PO -> OnOrdered+Q
	// ==================================================================

	public void testPU_D20_Create_Inventory() throws Exception { runCreate(MaterialKind.INVENTORY, "D20I"); }
	public void testPU_D20_Create_Batch()     throws Exception { runCreate(MaterialKind.BATCH,     "D20B"); }
	public void testPU_D20_Create_Serial()    throws Exception { runCreate(MaterialKind.SERIAL,    "D20N"); }

	private void runCreate(MaterialKind kind, String tag) throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, kind, tag);

			IPurchaseOrder po = buildOrder(sp, mt, wh, QTY);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertTrue("PO DocEntry assigned.", po.getDocEntry() > 0);

			// 仅 OnOrdered+
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);
		}
	}

	// ==================================================================
	// PU-D21: 头取消 -> OnOrdered 回滚
	// ==================================================================

	public void testPU_D21_HeaderCancel_Inventory() throws Exception { runHeaderCancel(MaterialKind.INVENTORY, "D21I"); }
	public void testPU_D21_HeaderCancel_Batch()     throws Exception { runHeaderCancel(MaterialKind.BATCH,     "D21B"); }
	public void testPU_D21_HeaderCancel_Serial()    throws Exception { runHeaderCancel(MaterialKind.SERIAL,    "D21N"); }

	private void runHeaderCancel(MaterialKind kind, String tag) throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, kind, tag);

			IPurchaseOrder po = buildOrder(sp, mt, wh, QTY);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			po.setCanceled(emYesNo.YES);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}

	// ==================================================================
	// PU-D22: 头删除 -> OnOrdered 回滚
	// ==================================================================

	public void testPU_D22_HeaderDelete_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D22I");

			IPurchaseOrder po = buildOrder(sp, mt, wh, QTY);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			po.delete();
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}

	// ==================================================================
	// PU-D23: 行删除（多行）-> 仅回滚被删行的 OnOrdered
	// ==================================================================

	public void testPU_D23_LineDelete_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D23I");

			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem l1 = po.getPurchaseOrderItems().create();
			l1.setItemCode(mt.getCode()); l1.setQuantity(Decimals.valueOf(6));
			l1.setPrice(Decimals.valueOf(20)); l1.setWarehouse(wh.getCode());
			l1.setBatchManagement(mt.getBatchManagement());
			l1.setSerialManagement(mt.getSerialManagement());
			IPurchaseOrderItem l2 = po.getPurchaseOrderItems().create();
			l2.setItemCode(mt.getCode()); l2.setQuantity(Decimals.valueOf(4));
			l2.setPrice(Decimals.valueOf(20)); l2.setWarehouse(wh.getCode());
			l2.setBatchManagement(mt.getBatchManagement());
			l2.setSerialManagement(mt.getSerialManagement());

			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.valueOf(10));

			po.getPurchaseOrderItems().get(1).delete();
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.valueOf(6));
		}
	}

	// ==================================================================
	// PU-D24: status=CLOSED -> OnOrdered 保持（CLOSED 仅"跳过"逻辑，不主动回滚）
	//   说明：MaterialOrderedService 在 status==CLOSED 时 checkDataStatus 返回 false，
	//        框架仅"跳过"此次 impact，不会主动 revoke 之前已生效的订购
	//        要回滚 OnOrdered 应使用 canceled=YES 或 documentStatus=PLANNED
	// ==================================================================

	public void testPU_D24_StatusClosed_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D24I");

			IPurchaseOrder po = buildOrder(sp, mt, wh, QTY);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			po.setStatus(emBOStatus.CLOSED);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			// CLOSED 不主动回滚，OnOrdered 仍 = QTY
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);
		}
	}

	// ==================================================================
	// PU-D25: 数量修改 -> OnOrdered 同步
	// ==================================================================

	public void testPU_D25_QtyModify_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D25I");

			IPurchaseOrder po = buildOrder(sp, mt, wh, Decimals.valueOf(10));
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.valueOf(10));

			po.getPurchaseOrderItems().firstOrDefault().setQuantity(Decimals.valueOf(15));
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.valueOf(15));

			po.getPurchaseOrderItems().firstOrDefault().setQuantity(Decimals.valueOf(7));
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.valueOf(7));
		}
	}

	// ==================================================================
	// PU-D26: 服务物料 PO -> OnOrdered 不变（logic 跳过）
	// ==================================================================

	public void testPU_D26_ServiceMaterial_NoEffect() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.SERVICE, "D26S");

			IPurchaseOrder po = buildOrder(sp, mt, wh, QTY);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertTrue("PO saved for service.", po.getDocEntry() > 0);

			IMaterial m = BOUtilities.valueOf(mRepo.fetchMaterial(mt.getCriteria())).firstOrDefault();
			assertEqualsBD("Service OnHand=0.", Decimals.VALUE_ZERO, m.getOnHand());
			assertEqualsBD("Service OnCommited=0.", Decimals.VALUE_ZERO, m.getOnCommited());
			assertEqualsBD("Service OnOrdered=0.", Decimals.VALUE_ZERO, m.getOnOrdered());
		}
	}

	// ==================================================================
	// PU-D27: 行 PLANNED -> 不计入；切 RELEASED -> 计入
	// ==================================================================

	public void testPU_D27_LineStatus_PlannedReleased() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D27I");

			IPurchaseOrder po = buildOrder(sp, mt, wh, QTY);
			po.getPurchaseOrderItems().firstOrDefault().setLineStatus(emDocumentStatus.PLANNED);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			po.getPurchaseOrderItems().firstOrDefault().setLineStatus(emDocumentStatus.RELEASED);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);
		}
	}
}
