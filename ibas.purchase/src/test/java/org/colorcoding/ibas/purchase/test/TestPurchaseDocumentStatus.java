package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
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
 * 采购单据 头级 documentStatus 维度 测试。
 *
 * <p>覆盖：PU-D28（PO documentStatus）/ PU-D33b（PD documentStatus）</p>
 */
public class TestPurchaseDocumentStatus extends AbstractPurchaseQuantityTestCase {

	private static final BigDecimal QTY = Decimals.valueOf(10);

	private BORepositoryPurchase createPurchaseRepository() throws Exception {
		BORepositoryPurchase repo = new BORepositoryPurchase();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	// ==================================================================
	// PU-D28: PO 头 documentStatus=PLANNED -> OnOrdered 回滚
	// ==================================================================

	public void testPU_D28_PO_DocumentStatusPlanned_Rollback() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D28I");

			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(mt.getCode());
			poi.setQuantity(QTY);
			poi.setPrice(Decimals.valueOf(20));
			poi.setWarehouse(wh.getCode());
			poi.setBatchManagement(mt.getBatchManagement());
			poi.setSerialManagement(mt.getSerialManagement());
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			po.setDocumentStatus(emDocumentStatus.PLANNED);
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
	}

	// ==================================================================
	// PU-D33b: PD 头 documentStatus=PLANNED -> OnHand 回退 + OnOrdered 回补 + PO.closedQuantity 回退
	// ==================================================================

	public void testPU_D33b_PD_DocumentStatusPlanned_Rollback() throws Exception {
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "D33bI");

			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(mt.getCode());
			poi.setQuantity(QTY);
			poi.setPrice(Decimals.valueOf(20));
			poi.setWarehouse(wh.getCode());
			poi.setBatchManagement(mt.getBatchManagement());
			poi.setSerialManagement(mt.getSerialManagement());
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();

			IPurchaseOrderItem poiSaved = po.getPurchaseOrderItems().firstOrDefault();
			IPurchaseDelivery pd = new PurchaseDelivery();
			pd.setSupplierCode(po.getSupplierCode());
			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().create();
			pdi.setItemCode(poiSaved.getItemCode());
			pdi.setQuantity(poiSaved.getQuantity());
			pdi.setPrice(poiSaved.getPrice());
			pdi.setWarehouse(poiSaved.getWarehouse());
			pdi.setBatchManagement(poiSaved.getBatchManagement());
			pdi.setSerialManagement(poiSaved.getSerialManagement());
			pdi.setBaseDocumentType(poiSaved.getObjectCode());
			pdi.setBaseDocumentEntry(poiSaved.getDocEntry());
			pdi.setBaseDocumentLineId(poiSaved.getLineId());
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();
			assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);

			pd.setDocumentStatus(emDocumentStatus.PLANNED);
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			// OnHand 回退, OnOrdered 重新增加
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			// PO.closedQuantity 回退
			IPurchaseOrder poReload = BOUtilities.valueOf(pRepo.fetchPurchaseOrder(po.getCriteria()))
					.firstOrDefault();
			assertEqualsBD("PO.closedQuantity rollback.", Decimals.VALUE_ZERO,
					poReload.getPurchaseOrderItems().sum(c -> c.getClosedQuantity()));
		}
	}
}
