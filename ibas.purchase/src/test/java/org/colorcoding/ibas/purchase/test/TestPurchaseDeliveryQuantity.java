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
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 采购收货 数量逻辑 测试（基于采购订单）。
 *
 * <p>覆盖：PU-D30 ~ PU-D39</p>
 * <p>核心 logic：MaterialInventoryService（OnHand+）、MaterialOrderedService（OnOrdered-）、
 * DocumentQuantityClosingService（PO.closedQuantity / lineStatus 推进）</p>
 */
public class TestPurchaseDeliveryQuantity extends AbstractPurchaseQuantityTestCase {

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

	private IPurchaseDelivery buildDeliveryFromOrder(IPurchaseOrder po, MaterialKind kind, BigDecimal qty) {
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
			b.setBatchCode("BPD-" + DateTimes.now().toString("yyyyMMddHHmmss"));
			b.setQuantity(qty);
		} else if (kind == MaterialKind.SERIAL) {
			int n = qty.intValue();
			for (int i = 0; i < n; i++) {
				IMaterialSerialItem s = pdi.getMaterialSerials().create();
				s.setSerialCode("SPD-" + DateTimes.now().toString("yyyyMMddHHmmss") + "-" + i);
			}
		}
		return pd;
	}

	private IPurchaseOrder reloadPO(BORepositoryPurchase pRepo, IPurchaseOrder po) throws Exception {
		return BOUtilities.valueOf(pRepo.fetchPurchaseOrder(po.getCriteria())).firstOrDefault();
	}

	// ==================================================================
	// PU-D30: PD 基于 PO -> OnHand+Q, OnOrdered-Q, PO.closedQuantity+Q
	// ==================================================================

	public void testPU_D30_DeliveryFromOrder_Inventory() throws Exception {
		runDeliveryFromOrder(MaterialKind.INVENTORY, "D30I");
	}

	public void testPU_D30_DeliveryFromOrder_Batch() throws Exception {
		runDeliveryFromOrder(MaterialKind.BATCH, "D30B");
	}

	public void testPU_D30_DeliveryFromOrder_Serial() throws Exception {
		runDeliveryFromOrder(MaterialKind.SERIAL, "D30N");
	}

	private void runDeliveryFromOrder(MaterialKind kind, String tag) throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, kind, tag);

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			IPurchaseDelivery pd = buildDeliveryFromOrder(po, kind, QTY);
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();
			assertTrue("PD DocEntry assigned.", pd.getDocEntry() > 0);

			// OnHand+10, OnOrdered-10
			assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			IPurchaseOrder poReload = reloadPO(pRepo, po);
			IPurchaseOrderItem poiReload = poReload.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("PO.closedQuantity = QTY.", QTY, poiReload.getClosedQuantity());
			assertEquals("PO line should be FINISHED.", emDocumentStatus.FINISHED, poiReload.getLineStatus());
		}
	}

	// ==================================================================
	// PU-D31: PD 头取消 -> 全反向
	// ==================================================================

	public void testPU_D31_DeliveryCancel_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D31I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = buildDeliveryFromOrder(po, MaterialKind.INVENTORY, QTY);
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			pd.setCanceled(emYesNo.YES);
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			// 反向：OnHand-10, OnOrdered+10 回到 PO 状态
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			IPurchaseOrder poReload = reloadPO(pRepo, po);
			IPurchaseOrderItem poiReload = poReload.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("PO.closedQuantity should rollback.", Decimals.VALUE_ZERO, poiReload.getClosedQuantity());
			assertEquals("PO line should be RELEASED.", emDocumentStatus.RELEASED, poiReload.getLineStatus());
		}
	}

	// ==================================================================
	// PU-D32: PD 头删除 -> 同 D31
	// ==================================================================

	public void testPU_D32_DeliveryDelete_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D32I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = buildDeliveryFromOrder(po, MaterialKind.INVENTORY, QTY);
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			pd.delete();
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);
			IPurchaseOrder poReload = reloadPO(pRepo, po);
			IPurchaseOrderItem poiReload = poReload.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("PO.closedQuantity should rollback.", Decimals.VALUE_ZERO, poiReload.getClosedQuantity());
		}
	}

	// ==================================================================
	// PU-D34: 部分收货 -> PO.lineStatus=PROCESSING, closedQuantity=部分
	// ==================================================================

	public void testPU_D34_PartialDelivery_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D34I");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = buildDeliveryFromOrder(po, MaterialKind.INVENTORY, Decimals.valueOf(6));
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			// OnHand=6, OnOrdered=4
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.valueOf(6), Decimals.VALUE_ZERO, Decimals.valueOf(4));
			IPurchaseOrder poReload = reloadPO(pRepo, po);
			IPurchaseOrderItem poiReload = poReload.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("PO.closedQuantity = 6.", Decimals.valueOf(6), poiReload.getClosedQuantity());
		}
	}

	// ==================================================================
	// PU-D38: 服务物料 PD -> 不影响 OnHand，仅 closedQuantity 推进
	// ==================================================================

	public void testPU_D38_ServiceDelivery_NoOnHand() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.SERVICE, "D38S");

			IPurchaseOrder po = createOrder(pRepo, sp, mt, wh, QTY);
			IPurchaseDelivery pd = buildDeliveryFromOrder(po, MaterialKind.SERVICE, QTY);
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();
			assertTrue("Service PD saved.", pd.getDocEntry() > 0);

			IMaterial m = BOUtilities.valueOf(mRepo.fetchMaterial(mt.getCriteria())).firstOrDefault();
			assertEqualsBD("Service OnHand=0.", Decimals.VALUE_ZERO, m.getOnHand());

			IPurchaseOrder poReload = reloadPO(pRepo, po);
			IPurchaseOrderItem poiReload = poReload.getPurchaseOrderItems().firstOrDefault();
			assertEqualsBD("Service PO.closedQuantity=QTY.", QTY, poiReload.getClosedQuantity());
		}
	}

	// ==================================================================
	// PU-D39: 独立 PD（不基于 PO）-> 仅 OnHand+Q
	// ==================================================================

	public void testPU_D39_IndependentDelivery_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D39I");

			IPurchaseDelivery pd = new PurchaseDelivery();
			pd.setSupplierCode(sp.getCode());
			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().create();
			pdi.setItemCode(mt.getCode());
			pdi.setQuantity(QTY);
			pdi.setPrice(Decimals.valueOf(20));
			pdi.setWarehouse(wh.getCode());
			pdi.setBatchManagement(mt.getBatchManagement());
			pdi.setSerialManagement(mt.getSerialManagement());
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			// 仅 OnHand 增加
			assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}
}
