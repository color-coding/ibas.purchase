package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.accounting.MyConfiguration;
import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
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
 * 采购单据头级计划态回退：订单撤回订购量；收货无分录时回退库存及源关闭量，有分录时拒绝且持久化数据不变。
 *
 * <p>覆盖：PU-D28（PO documentStatus）/ PU-D33b（PD documentStatus）</p>
 */
public class TestPurchaseDocumentStatus extends AbstractPurchaseQuantityTestCase {

	private static final BigDecimal QTY = Decimals.valueOf(10);

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
	// PU-D33b: PD 头 documentStatus=PLANNED -> 无分录时回滚，有分录时拒绝并保持原数量
	// ==================================================================

	public void testPU_D33b_PD_DocumentStatusPlanned_Rollback() throws Exception {
		runPU_D33b_PD_DocumentStatusPlanned(false);
	}

	public void testPU_D33b_PD_DocumentStatusPlanned_WithJournalEntry() throws Exception {
		runPU_D33b_PD_DocumentStatusPlanned(true);
	}

	private void runPU_D33b_PD_DocumentStatusPlanned(boolean journalEntryEnabled) throws Exception {
		boolean previous = MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE, false);
		MyConfiguration.create().addConfigValue(MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE,
				String.valueOf(journalEntryEnabled));
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository();
				BORepositoryPurchase pRepo = createPurchaseRepository()) {
			IWarehouse wh = prepareWarehouse(mRepo);
			ISupplier sp = prepareSupplier(bRepo);
			IMaterial mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, journalEntryEnabled ? "D33bIJ" : "D33bI");

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
			if (journalEntryEnabled) {
				try {
					BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd));
					fail("Document with journal entries must reject status change.");
				} catch (BusinessLogicException e) {
					assertEquals(I18N.prop("msg_ac_document_has_journalentry_not_allowed_change_status", pd.toString()),
							e.getMessage());
				}
				IPurchaseDelivery deliveryReload = BOUtilities.valueOf(pRepo.fetchPurchaseDelivery(pd.getCriteria()))
						.firstOrDefault();
				assertEquals(emDocumentStatus.RELEASED, deliveryReload.getDocumentStatus());
				assertQuantities(mRepo, mt, wh.getCode(), QTY, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
				IPurchaseOrder orderReload = BOUtilities.valueOf(pRepo.fetchPurchaseOrder(po.getCriteria())).firstOrDefault();
				assertEqualsBD("Order.closedQuantity must remain unchanged.", QTY,
						orderReload.getPurchaseOrderItems().sum(c -> c.getClosedQuantity()));
				return;
			}
			pd = BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();

			// OnHand 回退, OnOrdered 重新增加
			assertQuantities(mRepo, mt, wh.getCode(), Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, QTY);

			// PO.closedQuantity 回退
			IPurchaseOrder poReload = BOUtilities.valueOf(pRepo.fetchPurchaseOrder(po.getCriteria()))
					.firstOrDefault();
			assertEqualsBD("PO.closedQuantity rollback.", Decimals.VALUE_ZERO,
					poReload.getPurchaseOrderItems().sum(c -> c.getClosedQuantity()));
		} finally {
			MyConfiguration.create().addConfigValue(MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE,
					String.valueOf(previous));
		}
	}
}
