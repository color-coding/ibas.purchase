package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Decimals;
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
import org.colorcoding.ibas.purchase.bo.purchasequote.IPurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchasequote.IPurchaseQuoteItem;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequestItem;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 采购申请 / 采购报价 → 采购订单 链路 测试。
 *
 * <p>覆盖：PU-D01 / D02 / D10 / D11 / D12 / D13</p>
 */
public class TestPurchaseRequestToOrder extends AbstractPurchaseQuantityTestCase {

	private static final BigDecimal QTY = Decimals.valueOf(10);

	private BORepositoryPurchase createPurchaseRepository() throws Exception {
		BORepositoryPurchase repo = new BORepositoryPurchase();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	// ==================================================================
	// PU-D01: PR 保存 -> 三量不变
	// ==================================================================

	public void testPU_D01_RequestSave_NoEffect() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D01I");

			IPurchaseRequest pr = new PurchaseRequest();
			IPurchaseRequestItem pri = pr.getPurchaseRequestItems().create();
			pri.setItemCode(mt.getCode());
			pri.setQuantity(QTY);
			pr = BOUtilities.valueOf(pRepo.savePurchaseRequest(pr)).firstOrDefault();
			assertTrue("PR DocEntry assigned.", pr.getDocEntry() > 0);

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}

	// ==================================================================
	// PU-D02: PR 取消 -> 三量不变
	// ==================================================================

	public void testPU_D02_RequestCancel_NoEffect() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D02I");

			IPurchaseRequest pr = new PurchaseRequest();
			IPurchaseRequestItem pri = pr.getPurchaseRequestItems().create();
			pri.setItemCode(mt.getCode());
			pri.setQuantity(QTY);
			pr = BOUtilities.valueOf(pRepo.savePurchaseRequest(pr)).firstOrDefault();

			pr.setCanceled(emYesNo.YES);
			pr = BOUtilities.valueOf(pRepo.savePurchaseRequest(pr)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}

	// ==================================================================
	// PU-D10: PQ 保存 -> 三量不变
	// ==================================================================

	public void testPU_D10_QuoteSave_NoEffect() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D10I");

			IPurchaseQuote pq = new PurchaseQuote();
			pq.setSupplierCode(sp.getCode());
			IPurchaseQuoteItem pqi = pq.getPurchaseQuoteItems().create();
			pqi.setItemCode(mt.getCode());
			pqi.setQuantity(QTY);
			pqi.setPrice(Decimals.valueOf(20));
			pqi.setWarehouse(wh.getCode());
			pqi.setBatchManagement(mt.getBatchManagement());
			pqi.setSerialManagement(mt.getSerialManagement());
			pq = BOUtilities.valueOf(pRepo.savePurchaseQuote(pq)).firstOrDefault();
			assertTrue("PQ DocEntry assigned.", pq.getDocEntry() > 0);

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}

	// ==================================================================
	// PU-D11: PO 基于 PR -> PR.closedQuantity++, OnOrdered+
	// ==================================================================

	public void testPU_D11_OrderFromRequest_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D11I");

			IPurchaseRequest pr = new PurchaseRequest();
			IPurchaseRequestItem pri = pr.getPurchaseRequestItems().create();
			pri.setItemCode(mt.getCode());
			pri.setQuantity(QTY);
			pr = BOUtilities.valueOf(pRepo.savePurchaseRequest(pr)).firstOrDefault();

			IPurchaseRequestItem priSaved = pr.getPurchaseRequestItems().firstOrDefault();
			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(priSaved.getItemCode());
			poi.setQuantity(priSaved.getQuantity());
			poi.setPrice(Decimals.valueOf(20));
			poi.setWarehouse(wh.getCode());
			poi.setBatchManagement(mt.getBatchManagement());
			poi.setSerialManagement(mt.getSerialManagement());
			poi.setBaseDocumentType(priSaved.getObjectCode());
			poi.setBaseDocumentEntry(priSaved.getDocEntry());
			poi.setBaseDocumentLineId(priSaved.getLineId());
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			IPurchaseRequest prReload = BOUtilities.valueOf(pRepo.fetchPurchaseRequest(pr.getCriteria()))
					.firstOrDefault();
			assertEqualsBD("PR.closedQuantity = QTY.", QTY,
					prReload.getPurchaseRequestItems().sum(c -> c.getClosedQuantity()));
		}
	}

	// ==================================================================
	// PU-D12: PO 基于 PQ -> PQ.closedQuantity++, OnOrdered+
	// ==================================================================

	public void testPU_D12_OrderFromQuote_Inventory() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D12I");

			IPurchaseQuote pq = new PurchaseQuote();
			pq.setSupplierCode(sp.getCode());
			IPurchaseQuoteItem pqi = pq.getPurchaseQuoteItems().create();
			pqi.setItemCode(mt.getCode());
			pqi.setQuantity(QTY);
			pqi.setPrice(Decimals.valueOf(20));
			pqi.setWarehouse(wh.getCode());
			pqi.setBatchManagement(mt.getBatchManagement());
			pqi.setSerialManagement(mt.getSerialManagement());
			pq = BOUtilities.valueOf(pRepo.savePurchaseQuote(pq)).firstOrDefault();

			IPurchaseQuoteItem pqiSaved = pq.getPurchaseQuoteItems().firstOrDefault();
			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(pqiSaved.getItemCode());
			poi.setQuantity(pqiSaved.getQuantity());
			poi.setPrice(pqiSaved.getPrice());
			poi.setWarehouse(pqiSaved.getWarehouse());
			poi.setBatchManagement(pqiSaved.getBatchManagement());
			poi.setSerialManagement(pqiSaved.getSerialManagement());
			poi.setBaseDocumentType(pqiSaved.getObjectCode());
			poi.setBaseDocumentEntry(pqiSaved.getDocEntry());
			poi.setBaseDocumentLineId(pqiSaved.getLineId());
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			IPurchaseQuote pqReload = BOUtilities.valueOf(pRepo.fetchPurchaseQuote(pq.getCriteria())).firstOrDefault();
			assertEqualsBD("PQ.closedQuantity = QTY.", QTY,
					pqReload.getPurchaseQuoteItems().sum(c -> c.getClosedQuantity()));
		}
	}

	// ==================================================================
	// PU-D13: PO 取消 -> PR.closedQuantity 回退, OnOrdered 回退
	// ==================================================================

	public void testPU_D13_OrderCancel_PRClosedQuantityRollback() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D13I");

			IPurchaseRequest pr = new PurchaseRequest();
			IPurchaseRequestItem pri = pr.getPurchaseRequestItems().create();
			pri.setItemCode(mt.getCode());
			pri.setQuantity(QTY);
			pr = BOUtilities.valueOf(pRepo.savePurchaseRequest(pr)).firstOrDefault();
			IPurchaseRequestItem priSaved = pr.getPurchaseRequestItems().firstOrDefault();

			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(priSaved.getItemCode());
			poi.setQuantity(priSaved.getQuantity());
			poi.setPrice(Decimals.valueOf(20));
			poi.setWarehouse(wh.getCode());
			poi.setBatchManagement(mt.getBatchManagement());
			poi.setSerialManagement(mt.getSerialManagement());
			poi.setBaseDocumentType(priSaved.getObjectCode());
			poi.setBaseDocumentEntry(priSaved.getDocEntry());
			poi.setBaseDocumentLineId(priSaved.getLineId());
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			po.setCanceled(emYesNo.YES);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			IPurchaseRequest prReload = BOUtilities.valueOf(pRepo.fetchPurchaseRequest(pr.getCriteria()))
					.firstOrDefault();
			assertEqualsBD("PR.closedQuantity rollback.", Decimals.VALUE_ZERO,
					prReload.getPurchaseRequestItems().sum(c -> c.getClosedQuantity()));
		}
	}
}
