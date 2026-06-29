package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.DateTimes;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.materialbatch.IMaterialBatchItem;
import org.colorcoding.ibas.materials.bo.materialserial.IMaterialSerialItem;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturnItem;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 采购退货 数量逻辑 测试。
 *
 * <p>覆盖：PU-D50 ~ PU-D55</p>
 * <p>核心 logic：MaterialInventoryService（OnHand-）、DocumentQuantityReturnService（PD/PO.closedQuantity 回退）</p>
 */
public class TestPurchaseReturnQuantity extends AbstractPurchaseQuantityTestCase {

	private static final BigDecimal QTY = Decimals.valueOf(10);

	private BORepositoryPurchase createPurchaseRepository() throws Exception {
		BORepositoryPurchase repo = new BORepositoryPurchase();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	private IPurchaseOrder createOrder(BORepositoryPurchase pRepo, ISupplier sp, IMaterial mt, IWarehouse wh,
			BigDecimal qty) throws Exception {
		IPurchaseOrder po = new PurchaseOrder();
		po.setSupplierCode(sp.getCode());
		IPurchaseOrderItem it = po.getPurchaseOrderItems().create();
		it.setItemCode(mt.getCode());
		it.setQuantity(qty);
		it.setPrice(Decimals.valueOf(20));
		it.setWarehouse(wh.getCode());
		it.setBatchManagement(mt.getBatchManagement());
		it.setSerialManagement(mt.getSerialManagement());
		return BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
	}

	private IPurchaseDelivery createDelivery(BORepositoryPurchase pRepo, IPurchaseOrder po, MaterialKind kind,
			BigDecimal qty) throws Exception {
		IPurchaseOrderItem poi = po.getPurchaseOrderItems().firstOrDefault();
		IPurchaseDelivery pd = new PurchaseDelivery();
		pd.setSupplierCode(po.getSupplierCode());
		IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().create();
		pdi.setItemCode(poi.getItemCode());
		pdi.setQuantity(qty);
		pdi.setPrice(poi.getPrice());
		pdi.setWarehouse(poi.getWarehouse());
		pdi.setBatchManagement(poi.getBatchManagement());
		pdi.setSerialManagement(poi.getSerialManagement());
		pdi.setBaseDocumentType(poi.getObjectCode());
		pdi.setBaseDocumentEntry(poi.getDocEntry());
		pdi.setBaseDocumentLineId(poi.getLineId());
		if (kind == MaterialKind.BATCH) {
			IMaterialBatchItem b = pdi.getMaterialBatches().create();
			b.setBatchCode("BPR-" + DateTimes.now().toString("yyyyMMddHHmmss"));
			b.setQuantity(qty);
		} else if (kind == MaterialKind.SERIAL) {
			int n = qty.intValue();
			for (int i = 0; i < n; i++) {
				IMaterialSerialItem s = pdi.getMaterialSerials().create();
				s.setSerialCode("SPR-" + DateTimes.now().toString("yyyyMMddHHmmss") + "-" + i);
			}
		}
		return BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();
	}

	private IPurchaseOrder reloadPO(BORepositoryPurchase pRepo, IPurchaseOrder po) throws Exception {
		return BOUtilities.valueOf(pRepo.fetchPurchaseOrder(po.getCriteria())).firstOrDefault();
	}

	private IPurchaseDelivery reloadPD(BORepositoryPurchase pRepo, IPurchaseDelivery pd) throws Exception {
		return BOUtilities.valueOf(pRepo.fetchPurchaseDelivery(pd.getCriteria())).firstOrDefault();
	}

	// ==================================================================
	// PU-D50: PRet 基于 PD -> OnHand-Q（退给供应商），PD.closedQuantity 回退
	// ==================================================================

	public void testPU_D50_ReturnFromDelivery_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D50I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = createDelivery(pRepo, po, MaterialKind.INVENTORY, QTY);
			// 收货后 OnHand=10, OnOrdered=0
			assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().firstOrDefault();
			IPurchaseReturn pr = new PurchaseReturn();
			pr.setSupplierCode(pd.getSupplierCode());
			IPurchaseReturnItem pri = pr.getPurchaseReturnItems().create();
			pri.setItemCode(pdi.getItemCode());
			pri.setQuantity(QTY);
			pri.setPrice(pdi.getPrice());
			pri.setWarehouse(pdi.getWarehouse());
			pri.setBatchManagement(pdi.getBatchManagement());
			pri.setSerialManagement(pdi.getSerialManagement());
			pri.setBaseDocumentType(pdi.getObjectCode());
			pri.setBaseDocumentEntry(pdi.getDocEntry());
			pri.setBaseDocumentLineId(pdi.getLineId());
			pr = BOUtilities.valueOf(pRepo.savePurchaseReturn(pr)).firstOrDefault();
			assertTrue("PRet DocEntry assigned.", pr.getDocEntry() > 0);

			// OnHand 退到 0
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			IPurchaseDelivery pdReload = reloadPD(pRepo, pd);
			IPurchaseDeliveryItem pdiReload = pdReload.getPurchaseDeliveryItems().firstOrDefault();
			assertEqualsBD("PD.closedQuantity advance by PRet.qty.", QTY, pdiReload.getClosedQuantity());
		}
	}

	// ==================================================================
	// PU-D51: PRet 基于 PO -> PO.closedQuantity 回退, lineStatus 回 RELEASED
	// ==================================================================

	public void testPU_D51_ReturnFromOrder_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D51I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			createDelivery(pRepo, po, MaterialKind.INVENTORY, QTY);

			IPurchaseOrder poReload = reloadPO(pRepo, po);
			IPurchaseOrderItem poi = poReload.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("PO.closedQuantity = QTY before return.", QTY, poi.getClosedQuantity());

			IPurchaseReturn pr = new PurchaseReturn();
			pr.setSupplierCode(poReload.getSupplierCode());
			IPurchaseReturnItem pri = pr.getPurchaseReturnItems().create();
			pri.setItemCode(poi.getItemCode());
			pri.setQuantity(QTY);
			pri.setPrice(poi.getPrice());
			pri.setWarehouse(poi.getWarehouse());
			pri.setBatchManagement(poi.getBatchManagement());
			pri.setSerialManagement(poi.getSerialManagement());
			pri.setBaseDocumentType(poi.getObjectCode());
			pri.setBaseDocumentEntry(poi.getDocEntry());
			pri.setBaseDocumentLineId(poi.getLineId());
			pr = BOUtilities.valueOf(pRepo.savePurchaseReturn(pr)).firstOrDefault();

			IPurchaseOrder poReload2 = reloadPO(pRepo, po);
			IPurchaseOrderItem poi2 = poReload2.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("PO.closedQuantity rollback.", Decimals.VALUE_ZERO, poi2.getClosedQuantity());
			assertEquals("PO.lineStatus should be RELEASED.", emDocumentStatus.RELEASED, poi2.getLineStatus());
		}
	}

	// ==================================================================
	// PU-D52: PRet 取消 -> 反向，OnHand 回加，PD.closedQuantity 推回
	// ==================================================================

	public void testPU_D52_ReturnCancel_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D52I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = createDelivery(pRepo, po, MaterialKind.INVENTORY, QTY);

			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().firstOrDefault();
			IPurchaseReturn pr = new PurchaseReturn();
			pr.setSupplierCode(pd.getSupplierCode());
			IPurchaseReturnItem pri = pr.getPurchaseReturnItems().create();
			pri.setItemCode(pdi.getItemCode());
			pri.setQuantity(QTY);
			pri.setPrice(pdi.getPrice());
			pri.setWarehouse(pdi.getWarehouse());
			pri.setBatchManagement(pdi.getBatchManagement());
			pri.setSerialManagement(pdi.getSerialManagement());
			pri.setBaseDocumentType(pdi.getObjectCode());
			pri.setBaseDocumentEntry(pdi.getDocEntry());
			pri.setBaseDocumentLineId(pdi.getLineId());
			pr = BOUtilities.valueOf(pRepo.savePurchaseReturn(pr)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			pr.setCanceled(emYesNo.YES);
			pr = BOUtilities.valueOf(pRepo.savePurchaseReturn(pr)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
			IPurchaseDelivery pdReload = reloadPD(pRepo, pd);
			IPurchaseDeliveryItem pdiReload = pdReload.getPurchaseDeliveryItems().firstOrDefault();
			assertEqualsBD("PD.closedQuantity rollback after PRet cancel.", Decimals.VALUE_ZERO,
					pdiReload.getClosedQuantity());
		}
	}

	// ==================================================================
	// PU-D53: 部分退货 -> 关闭量差额
	// ==================================================================

	public void testPU_D53_PartialReturn_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D53I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = createDelivery(pRepo, po, MaterialKind.INVENTORY, QTY);

			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().firstOrDefault();
			IPurchaseReturn pr = new PurchaseReturn();
			pr.setSupplierCode(pd.getSupplierCode());
			IPurchaseReturnItem pri = pr.getPurchaseReturnItems().create();
			pri.setItemCode(pdi.getItemCode());
			pri.setQuantity(Decimals.valueOf(3));
			pri.setPrice(pdi.getPrice());
			pri.setWarehouse(pdi.getWarehouse());
			pri.setBatchManagement(pdi.getBatchManagement());
			pri.setSerialManagement(pdi.getSerialManagement());
			pri.setBaseDocumentType(pdi.getObjectCode());
			pri.setBaseDocumentEntry(pdi.getDocEntry());
			pri.setBaseDocumentLineId(pdi.getLineId());
			pr = BOUtilities.valueOf(pRepo.savePurchaseReturn(pr)).firstOrDefault();

			// OnHand = 10 - 3 = 7
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.valueOf(7), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
			IPurchaseDelivery pdReload = reloadPD(pRepo, pd);
			IPurchaseDeliveryItem pdiReload = pdReload.getPurchaseDeliveryItems().firstOrDefault();
			assertEqualsBD("PD.closedQuantity = 3 (advance by partial PRet).", Decimals.valueOf(3),
					pdiReload.getClosedQuantity());
		}
	}

	// ==================================================================
	// PU-D55: 服务物料 PRet -> 仅 closedQuantity 回退，不影响 OnHand
	// ==================================================================

	public void testPU_D55_ServiceReturn_NoOnHand() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.SERVICE, "D55S");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = createDelivery(pRepo, po, MaterialKind.SERVICE, QTY);

			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().firstOrDefault();
			IPurchaseReturn pr = new PurchaseReturn();
			pr.setSupplierCode(pd.getSupplierCode());
			IPurchaseReturnItem pri = pr.getPurchaseReturnItems().create();
			pri.setItemCode(pdi.getItemCode());
			pri.setQuantity(QTY);
			pri.setPrice(pdi.getPrice());
			pri.setWarehouse(pdi.getWarehouse());
			pri.setBatchManagement(pdi.getBatchManagement());
			pri.setSerialManagement(pdi.getSerialManagement());
			pri.setBaseDocumentType(pdi.getObjectCode());
			pri.setBaseDocumentEntry(pdi.getDocEntry());
			pri.setBaseDocumentLineId(pdi.getLineId());
			pr = BOUtilities.valueOf(pRepo.savePurchaseReturn(pr)).firstOrDefault();
			assertTrue("Service PRet saved.", pr.getDocEntry() > 0);

			IMaterial m = BOUtilities.valueOf(mRepo.fetchMaterial(mt.getCriteria())).firstOrDefault();
			assertEqualsBD("Service OnHand=0.", Decimals.VALUE_ZERO, m.getOnHand());

			IPurchaseDelivery pdReload = reloadPD(pRepo, pd);
			IPurchaseDeliveryItem pdiReload = pdReload.getPurchaseDeliveryItems().firstOrDefault();
			assertEqualsBD("Service PD.closedQuantity advance by PRet.qty.", QTY, pdiReload.getClosedQuantity());
		}
	}
}
