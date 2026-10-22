package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;
import java.util.function.Function;

import org.colorcoding.ibas.bobas.bo.BOIdentifierBuilder;
import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.bo.IBODocument;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleException;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.goodsreceipt.GoodsReceipt;
import org.colorcoding.ibas.materials.bo.goodsreceipt.IGoodsReceiptLine;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.materialbatch.IMaterialBatchItem;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;
import org.colorcoding.ibas.purchase.bo.blanketagreement.BlanketAgreement;
import org.colorcoding.ibas.purchase.bo.blanketagreement.IBlanketAgreement;
import org.colorcoding.ibas.purchase.bo.blanketagreement.IBlanketAgreementItem;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.DownPaymentRequest;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.IDownPaymentRequest;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.IDownPaymentRequestItem;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.IPurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.IPurchaseCreditNoteItem;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.IPurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.IPurchaseInvoiceItem;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.PurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.IPurchaseReserveInvoice;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.IPurchaseReserveInvoiceItem;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.PurchaseReserveInvoice;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturnItem;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturnrequest.IPurchaseReturnRequest;
import org.colorcoding.ibas.purchase.bo.purchasereturnrequest.IPurchaseReturnRequestItem;
import org.colorcoding.ibas.purchase.bo.purchasereturnrequest.PurchaseReturnRequest;
import org.colorcoding.ibas.purchase.data.emAgreementMethod;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 单行订单的状态往返及上下游保护。库存初始量：采购 0；订单量 10。
 * 每次保存后重新查询单据头、行、关闭数量、引用标记及物料/仓库库存。
 * 关闭会计分录及成本服务以验证允许的库存往返；成本冲销、已有分录的拒绝路径分别验证。
 */
public class TestDocumentStateTransitions extends AbstractPurchaseQuantityTestCase {

	private String previousJournalService;
	private String previousMaterialCosts;

	@Override
	protected void setUp() throws Exception {
		super.setUp();
		previousMaterialCosts = org.colorcoding.ibas.materials.MyConfiguration.getConfigValue(
				org.colorcoding.ibas.materials.MyConfiguration.CONFIG_ITEM_ENABLE_MATERIAL_COSTS);
		org.colorcoding.ibas.materials.MyConfiguration.create().addConfigValue(
				org.colorcoding.ibas.materials.MyConfiguration.CONFIG_ITEM_ENABLE_MATERIAL_COSTS, "false");
		previousJournalService = org.colorcoding.ibas.accounting.MyConfiguration.getConfigValue(
				org.colorcoding.ibas.accounting.MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE);
		org.colorcoding.ibas.accounting.MyConfiguration.create().addConfigValue(
				org.colorcoding.ibas.accounting.MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE, "false");
	}

	@Override
	protected void tearDown() throws Exception {
		org.colorcoding.ibas.accounting.MyConfiguration.create().addConfigValue(
				org.colorcoding.ibas.accounting.MyConfiguration.CONFIG_ITEM_ENABLE_JOURNAL_ENTRY_SERVICE,
				previousJournalService == null ? "" : previousJournalService);
		org.colorcoding.ibas.materials.MyConfiguration.create().addConfigValue(
				org.colorcoding.ibas.materials.MyConfiguration.CONFIG_ITEM_ENABLE_MATERIAL_COSTS,
				previousMaterialCosts == null ? "" : previousMaterialCosts);
		super.tearDown();
	}

	private class Scenario implements AutoCloseable {
		private final BORepositoryMaterials materials = createMaterialsRepository();
		private final BORepositoryBusinessPartner partners = createBPRepository();
		private final BORepositoryPurchase repository = createPurchaseRepository();
		private final IWarehouse warehouse;
		private final IMaterial material;
		private IPurchaseOrder order;

		Scenario(String tag, MaterialKind kind) throws Exception {
			warehouse = prepareWarehouse(materials);
			material = prepareMaterial(materials, kind, tag);
			ISupplier partner = prepareSupplier(partners);
			order = new PurchaseOrder();
			order.setSupplierCode(partner.getCode());
			IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
			line.setItemCode(material.getCode());
			line.setWarehouse(warehouse.getCode());
			line.setQuantity(Decimals.valueOf(10));
			line.setPrice(Decimals.valueOf(20));
			line.setBatchManagement(material.getBatchManagement());
			if (kind == MaterialKind.BATCH) {
				for (int i = 0; i < 2; i++) {
					IMaterialBatchItem batch = line.getMaterialBatches().create();
					batch.setBatchCode(material.getCode() + (i == 0 ? "B1" : "B2"));
					batch.setQuantity(Decimals.valueOf(i == 0 ? 4 : 6));
				}
			}
			saveOrder();
		}

		private void saveOrder() {
			order = BOUtilities.valueOf(repository.savePurchaseOrder(order)).firstOrDefault();
			order = BOUtilities.valueOf(repository.fetchPurchaseOrder(order.getCriteria())).firstOrDefault();
		}

		private void assertOrder(int closed, emDocumentStatus status) throws Exception {
			order = BOUtilities.valueOf(repository.fetchPurchaseOrder(order.getCriteria())).firstOrDefault();
			assertNotNull("Order must persist through state changes.", order);
			IPurchaseOrderItem line = order.getPurchaseOrderItems().firstOrDefault();
			assertEquals("Order header status mismatch for this scenario.", status, order.getDocumentStatus());
			assertEquals("Source line state mismatch.", status, line.getLineStatus());
			assertEqualsBD("Source closed quantity mismatch.", Decimals.valueOf(closed), line.getClosedQuantity());
			assertEquals("Reference flag must reflect active downstream quantity.",
					closed == 0 ? emYesNo.NO : emYesNo.YES, line.getReferenced());
		}

		private void assertStock(int onHand, int remaining) throws Exception {
			assertQuantities(materials, material, warehouse.getCode(), Decimals.valueOf(onHand),
					BigDecimal.ZERO, Decimals.valueOf(remaining));
		}

		private IPurchaseDelivery delivery(int quantity, boolean batches) {
			IPurchaseDelivery document = new PurchaseDelivery();
			document.setSupplierCode(order.getSupplierCode());
			IPurchaseOrderItem source = order.getPurchaseOrderItems().firstOrDefault();
			IPurchaseDeliveryItem line = document.getPurchaseDeliveryItems().create();
			line.setItemCode(source.getItemCode());
			line.setWarehouse(source.getWarehouse());
			line.setQuantity(Decimals.valueOf(quantity));
			line.setPrice(source.getPrice());
			line.setBatchManagement(source.getBatchManagement());
			line.setBaseDocumentType(source.getObjectCode());
			line.setBaseDocumentEntry(source.getDocEntry());
			line.setBaseDocumentLineId(source.getLineId());
			if (batches) {
				for (IMaterialBatchItem sourceBatch : source.getMaterialBatches()) {
					IMaterialBatchItem batch = line.getMaterialBatches().create();
					batch.setBatchCode(sourceBatch.getBatchCode());
					batch.setQuantity(sourceBatch.getQuantity());
				}
			}
			return BOUtilities.valueOf(repository.savePurchaseDelivery(document)).firstOrDefault();
		}

		@Override
		public void close() throws Exception {
			repository.close();
			partners.close();
			materials.close();
		}
	}

	/** PU_D61：无下游订单；头级计划/下达往返两次；三量不累计，头行状态均落库。 */
	public void testPU_D61_OrderDocumentStatusRoundTrip() throws Exception {
		try (Scenario scenario = new Scenario("PU_D61", MaterialKind.INVENTORY)) {
			for (int cycle = 0; cycle < 2; cycle++) {
				scenario.order.setDocumentStatus(emDocumentStatus.PLANNED);
				scenario.saveOrder();
				scenario.assertOrder(0, emDocumentStatus.PLANNED);
				scenario.assertStock(0, 0);
				scenario.order.setDocumentStatus(emDocumentStatus.RELEASED);
				scenario.saveOrder();
				scenario.assertOrder(0, emDocumentStatus.RELEASED);
				scenario.assertStock(0, 10);
			}
		}
	}

	/** PU_D62：无下游订单；行设计划并显式撤回单头，再下达行；验证单头聚合恢复下达及有效数量往返，不假定全计划行自动撤回单头。 */
	public void testPU_D62_OrderLineStatusRoundTrip() throws Exception {
		try (Scenario scenario = new Scenario("PU_D62", MaterialKind.INVENTORY)) {
			for (int cycle = 0; cycle < 2; cycle++) {
				scenario.order.getPurchaseOrderItems().firstOrDefault().setLineStatus(emDocumentStatus.PLANNED);
				scenario.order.setDocumentStatus(emDocumentStatus.PLANNED);
				scenario.saveOrder();
				scenario.assertOrder(0, emDocumentStatus.PLANNED);
				scenario.assertStock(0, 0);
				scenario.order.getPurchaseOrderItems().firstOrDefault().setLineStatus(emDocumentStatus.RELEASED);
				scenario.saveOrder();
				scenario.assertOrder(0, emDocumentStatus.RELEASED);
				scenario.assertStock(0, 10);
			}
		}
	}

	/** PU_D63：部分交货 4；订单取消/删除应被拒绝；撤销、恢复交货后数量及引用标记往返。 */
	public void testPU_D63_PartialDeliveryProtectsSourceAndRestoresOnce() throws Exception {
		try (Scenario scenario = new Scenario("PU_D63", MaterialKind.INVENTORY)) {
			IPurchaseDelivery delivery = scenario.delivery(4, false);
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			scenario.assertStock(4, 6);
			IPurchaseOrder rejected = ((PurchaseOrder) scenario.order).clone();
			rejected.setCanceled(emYesNo.YES);
			IOperationResult<IPurchaseOrder> result = scenario.repository.savePurchaseOrder(rejected);
			assertNotNull("Referenced order cancellation must be rejected.", result.getError());
			assertEquals(I18N.prop("msg_mm_document_closed_quantity_not_allowed_canceled",
					BOIdentifierBuilder.document(scenario.order.getObjectCode(), scenario.order.getDocEntry(),
							scenario.order.getPurchaseOrderItems().firstOrDefault().getLineId()).build()), result.getError().getMessage());
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			assertEquals(emYesNo.NO, scenario.order.getCanceled());
			rejected = ((PurchaseOrder) scenario.order).clone();
			rejected.delete();
			result = scenario.repository.savePurchaseOrder(rejected);
			assertNotNull("Referenced order deletion must be rejected.", result.getError());
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			scenario.assertStock(4, 6);
			for (emYesNo canceled : new emYesNo[] { emYesNo.YES, emYesNo.NO }) {
				delivery.setCanceled(canceled);
				delivery = BOUtilities.valueOf(scenario.repository.savePurchaseDelivery(delivery)).firstOrDefault();
				BOUtilities.valueOf(scenario.repository.savePurchaseDelivery(delivery));
				assertEquals(canceled, BOUtilities.valueOf(scenario.repository.fetchPurchaseDelivery(delivery.getCriteria()))
						.firstOrDefault().getCanceled());
				scenario.assertOrder(canceled == emYesNo.YES ? 0 : 4, emDocumentStatus.RELEASED);
				scenario.assertStock(canceled == emYesNo.YES ? 0 : 4, canceled == emYesNo.YES ? 10 : 6);
			}
		}
	}

	/** PU_D64：直接基于订单开票；取消/恢复发票；源订单关闭数量、完成状态、库存均只生效一次。 */
	public void testPU_D64_DirectInvoiceCancelRestoreUpdatesSourceState() throws Exception {
		try (Scenario scenario = new Scenario("PU_D64", MaterialKind.INVENTORY)) {
			IPurchaseInvoice invoice = new PurchaseInvoice();
			invoice.setSupplierCode(scenario.order.getSupplierCode());
			IPurchaseOrderItem source = scenario.order.getPurchaseOrderItems().firstOrDefault();
			IPurchaseInvoiceItem line = invoice.getPurchaseInvoiceItems().create();
			line.setItemCode(source.getItemCode());
			line.setWarehouse(source.getWarehouse());
			line.setQuantity(source.getQuantity());
			line.setPrice(source.getPrice());
			line.setBaseDocumentType(source.getObjectCode());
			line.setBaseDocumentEntry(source.getDocEntry());
			line.setBaseDocumentLineId(source.getLineId());
			invoice = BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice)).firstOrDefault();
			scenario.assertOrder(10, emDocumentStatus.FINISHED);
			scenario.assertStock(10, 0);
			for (emYesNo canceled : new emYesNo[] { emYesNo.YES, emYesNo.NO }) {
				invoice.setCanceled(canceled);
				invoice = BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice)).firstOrDefault();
				BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice));
				assertEquals(canceled, BOUtilities.valueOf(scenario.repository.fetchPurchaseInvoice(invoice.getCriteria()))
						.firstOrDefault().getCanceled());
				scenario.assertOrder(canceled == emYesNo.YES ? 0 : 10,
						canceled == emYesNo.YES ? emDocumentStatus.RELEASED : emDocumentStatus.FINISHED);
				scenario.assertStock(canceled == emYesNo.YES ? 0 : 10, canceled == emYesNo.YES ? 10 : 0);
			}
		}
	}

	/** PU_D65：源订单预分配两个批次 4+6；全量交货、撤销、恢复；按行总量判断完成，逐批回写关闭数量。 */
	public void testPU_D65_MultipleBatchesFinishAndReopenSource() throws Exception {
		try (Scenario scenario = new Scenario("PU_D65", MaterialKind.BATCH)) {
			IPurchaseDelivery delivery = scenario.delivery(10, true);
			for (emYesNo canceled : new emYesNo[] { emYesNo.NO, emYesNo.YES, emYesNo.NO }) {
				delivery.setCanceled(canceled);
				delivery = BOUtilities.valueOf(scenario.repository.savePurchaseDelivery(delivery)).firstOrDefault();
				scenario.assertOrder(canceled == emYesNo.YES ? 0 : 10,
						canceled == emYesNo.YES ? emDocumentStatus.RELEASED : emDocumentStatus.FINISHED);
				scenario.assertStock(canceled == emYesNo.YES ? 0 : 10, canceled == emYesNo.YES ? 10 : 0);
				for (IMaterialBatchItem batch : scenario.order.getPurchaseOrderItems().firstOrDefault().getMaterialBatches()) {
					assertEqualsBD("Each assigned source batch must close or reopen independently.",
							canceled == emYesNo.YES ? BigDecimal.ZERO : batch.getQuantity(), batch.getClosedQuantity());
				}
			}
		}
	}

	/** PU_D66：全量交货后基于订单退回 2；取消、恢复退货；订单在完成/下达间往返，余量及库存一致。 */
	public void testPU_D66_PartialReturnCancelRestoreReopensSource() throws Exception {
		try (Scenario scenario = new Scenario("PU_D66", MaterialKind.INVENTORY)) {
			scenario.delivery(10, false);
			scenario.assertOrder(10, emDocumentStatus.FINISHED);
			IPurchaseReturn document = new PurchaseReturn();
			document.setSupplierCode(scenario.order.getSupplierCode());
			IPurchaseOrderItem source = scenario.order.getPurchaseOrderItems().firstOrDefault();
			IPurchaseReturnItem line = document.getPurchaseReturnItems().create();
			line.setItemCode(source.getItemCode());
			line.setWarehouse(source.getWarehouse());
			line.setQuantity(Decimals.valueOf(2));
			line.setPrice(source.getPrice());
			line.setBaseDocumentType(source.getObjectCode());
			line.setBaseDocumentEntry(source.getDocEntry());
			line.setBaseDocumentLineId(source.getLineId());
			document = BOUtilities.valueOf(scenario.repository.savePurchaseReturn(document)).firstOrDefault();
			for (emYesNo canceled : new emYesNo[] { emYesNo.NO, emYesNo.YES, emYesNo.NO }) {
				document.setCanceled(canceled);
				document = BOUtilities.valueOf(scenario.repository.savePurchaseReturn(document)).firstOrDefault();
				BOUtilities.valueOf(scenario.repository.savePurchaseReturn(document));
				scenario.assertOrder(canceled == emYesNo.YES ? 10 : 8,
						canceled == emYesNo.YES ? emDocumentStatus.FINISHED : emDocumentStatus.RELEASED);
				scenario.assertStock(canceled == emYesNo.YES ? 10 : 8, canceled == emYesNo.YES ? 0 : 2);
			}
		}
	}
	/** 无来源单据的基础生命周期：重复保存、取消、恢复；验证本单持久化及对既有订单、库存没有意外影响。 */
	private <T extends IBODocument> void assertStandaloneCycle(Scenario scenario, T document,
			Function<T, IOperationResult<T>> save, Function<ICriteria, IOperationResult<T>> fetch,
			int baselineStock, int effectiveStock) throws Exception {
		document = BOUtilities.valueOf(save.apply(document)).firstOrDefault();
		for (emYesNo canceled : new emYesNo[] { emYesNo.NO, emYesNo.YES, emYesNo.NO }) {
			((IBOTagCanceled) document).setCanceled(canceled);
			document = BOUtilities.valueOf(save.apply(document)).firstOrDefault();
			BOUtilities.valueOf(save.apply(document));
			document = BOUtilities.valueOf(fetch.apply(document.getCriteria())).firstOrDefault();
			assertNotNull("Lifecycle document must remain persisted.", document);
			assertEquals("Cancellation flag must persist through the complete round trip.", canceled,
					((IBOTagCanceled) document).getCanceled());
			scenario.assertOrder(0, emDocumentStatus.RELEASED);
			scenario.assertStock(canceled == emYesNo.YES ? baselineStock : effectiveStock, 10);
		}
	}

	/** PU_D67：无来源PurchaseReserveInvoice，数量 2；取消/恢复及重复保存，库存不变化且既有订单不被关闭。 */
	public void testPU_D67_PurchaseReserveInvoiceStandaloneCancelRestore() throws Exception {
		try (Scenario scenario = new Scenario("PU_D67", MaterialKind.INVENTORY)) {
			IPurchaseReserveInvoice document = new PurchaseReserveInvoice();
			document.setSupplierCode(scenario.order.getSupplierCode());
			IPurchaseReserveInvoiceItem line = document.getPurchaseReserveInvoiceItems().create();
			line.setItemCode(scenario.material.getCode());
			line.setQuantity(Decimals.valueOf(2));
			line.setPrice(Decimals.valueOf(20));
			line.setWarehouse(scenario.warehouse.getCode());
			assertStandaloneCycle(scenario, document, scenario.repository::savePurchaseReserveInvoice,
					scenario.repository::fetchPurchaseReserveInvoice, 0, 0);
		}
	}

	/** PU_D68：无来源PurchaseCreditNote，数量 2；取消/恢复及重复保存，库存反向变化 2且既有订单不被关闭。 */
	public void testPU_D68_PurchaseCreditNoteStandaloneCancelRestore() throws Exception {
		try (Scenario scenario = new Scenario("PU_D68", MaterialKind.INVENTORY)) {
			GoodsReceipt receipt = new GoodsReceipt();
			IGoodsReceiptLine receiptLine = receipt.getGoodsReceiptLines().create();
			receiptLine.setItemCode(scenario.material.getCode());
			receiptLine.setWarehouse(scenario.warehouse.getCode());
			receiptLine.setQuantity(Decimals.valueOf(20));
			receiptLine.setPrice(Decimals.valueOf(20));
			BOUtilities.valueOf(scenario.materials.saveGoodsReceipt(receipt));
			IPurchaseCreditNote document = new PurchaseCreditNote();
			document.setSupplierCode(scenario.order.getSupplierCode());
			IPurchaseCreditNoteItem line = document.getPurchaseCreditNoteItems().create();
			line.setItemCode(scenario.material.getCode());
			line.setQuantity(Decimals.valueOf(2));
			line.setPrice(Decimals.valueOf(20));
			line.setWarehouse(scenario.warehouse.getCode());
			assertStandaloneCycle(scenario, document, scenario.repository::savePurchaseCreditNote,
					scenario.repository::fetchPurchaseCreditNote, 20, 18);
		}
	}

	/** PU_D69：无来源PurchaseReturnRequest，数量 2；取消/恢复及重复保存，库存不变化且既有订单不被关闭。 */
	public void testPU_D69_PurchaseReturnRequestStandaloneCancelRestore() throws Exception {
		try (Scenario scenario = new Scenario("PU_D69", MaterialKind.INVENTORY)) {
			IPurchaseReturnRequest document = new PurchaseReturnRequest();
			document.setSupplierCode(scenario.order.getSupplierCode());
			IPurchaseReturnRequestItem line = document.getPurchaseReturnRequestItems().create();
			line.setItemCode(scenario.material.getCode());
			line.setQuantity(Decimals.valueOf(2));
			line.setPrice(Decimals.valueOf(20));
			line.setWarehouse(scenario.warehouse.getCode());
			assertStandaloneCycle(scenario, document, scenario.repository::savePurchaseReturnRequest,
					scenario.repository::fetchPurchaseReturnRequest, 0, 0);
		}
	}

	/** PU_D70：无来源DownPaymentRequest，数量 2；取消/恢复及重复保存，库存不变化且既有订单不被关闭。 */
	public void testPU_D70_DownPaymentRequestStandaloneCancelRestore() throws Exception {
		try (Scenario scenario = new Scenario("PU_D70", MaterialKind.INVENTORY)) {
			IDownPaymentRequest document = new DownPaymentRequest();
			document.setSupplierCode(scenario.order.getSupplierCode());
			IDownPaymentRequestItem line = document.getDownPaymentRequestItems().create();
			line.setItemCode(scenario.material.getCode());
			line.setQuantity(Decimals.valueOf(2));
			line.setPrice(Decimals.valueOf(20));
			line.setWarehouse(scenario.warehouse.getCode());
			assertStandaloneCycle(scenario, document, scenario.repository::saveDownPaymentRequest,
					scenario.repository::fetchDownPaymentRequest, 0, 0);
		}
	}

	/** PU_D71：无来源BlanketAgreement，数量 2；取消/恢复及重复保存，库存不变化且既有订单不被关闭。 */
	public void testPU_D71_BlanketAgreementStandaloneCancelRestore() throws Exception {
		try (Scenario scenario = new Scenario("PU_D71", MaterialKind.INVENTORY)) {
			IBlanketAgreement document = new BlanketAgreement();
			document.setSupplierCode(scenario.order.getSupplierCode());
			document.setAgreementMethod(emAgreementMethod.ITEM);
			IBlanketAgreementItem line = document.getBlanketAgreementItems().create();
			line.setItemCode(scenario.material.getCode());
			line.setQuantity(Decimals.valueOf(2));
			line.setPrice(Decimals.valueOf(20));
			assertStandaloneCycle(scenario, document, scenario.repository::saveBlanketAgreement,
					scenario.repository::fetchBlanketAgreement, 0, 0);
		}
	}

	/** PU_D72：启用成本后交货 4 并取消；旧成本已冲销的单据恢复必须拒绝，本单及源单据和库存保持取消后结果。 */
	public void testPU_D72_CostOffsettingRejectsReactivationAtomically() throws Exception {
		org.colorcoding.ibas.materials.MyConfiguration.create().addConfigValue(
				org.colorcoding.ibas.materials.MyConfiguration.CONFIG_ITEM_ENABLE_MATERIAL_COSTS, "true");
		try (Scenario scenario = new Scenario("PU_D72", MaterialKind.INVENTORY)) {
			IPurchaseDelivery delivery = scenario.delivery(4, false);
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			scenario.assertStock(4, 6);
			delivery.setCanceled(emYesNo.YES);
			delivery = BOUtilities.valueOf(scenario.repository.savePurchaseDelivery(delivery)).firstOrDefault();
			scenario.assertOrder(0, emDocumentStatus.RELEASED);
			scenario.assertStock(0, 10);
			delivery.setCanceled(emYesNo.NO);
			IOperationResult<IPurchaseDelivery> rejected = scenario.repository.savePurchaseDelivery(delivery);
			assertNotNull("Costed document with an offsetting journal cannot be reactivated.", rejected.getError());
			assertEquals(I18N.prop("msg_mm_costed_document_not_support_reactivation",
					BOIdentifierBuilder.document(delivery.getObjectCode(), delivery.getDocEntry(),
							delivery.getPurchaseDeliveryItems().firstOrDefault().getLineId()).build()), rejected.getError().getMessage());
			assertEquals("Rejected restoration must retain the canceled document.", emYesNo.YES,
					BOUtilities.valueOf(scenario.repository.fetchPurchaseDelivery(delivery.getCriteria())).firstOrDefault().getCanceled());
			scenario.assertOrder(0, emDocumentStatus.RELEASED);
			scenario.assertStock(0, 10);
		}
	}

	/** PU_D73：交货 4 后全量开票；拒绝撤销已开票交货；按发票→交货逆序撤销，再正序恢复，三层状态与库存一致。 */
	public void testPU_D73_InvoicedDeliveryRequiresReverseDependencyOrder() throws Exception {
		try (Scenario scenario = new Scenario("PU_D73", MaterialKind.INVENTORY)) {
			IPurchaseDelivery delivery = scenario.delivery(4, false);
			IPurchaseDeliveryItem source = delivery.getPurchaseDeliveryItems().firstOrDefault();
			IPurchaseInvoice invoice = new PurchaseInvoice();
			invoice.setSupplierCode(scenario.order.getSupplierCode());
			IPurchaseInvoiceItem line = invoice.getPurchaseInvoiceItems().create();
			line.setItemCode(source.getItemCode());
			line.setWarehouse(source.getWarehouse());
			line.setPrice(source.getPrice());
			line.setQuantity(source.getQuantity());
			line.setBaseDocumentType(source.getObjectCode());
			line.setBaseDocumentEntry(source.getDocEntry());
			line.setBaseDocumentLineId(source.getLineId());
			invoice = BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice)).firstOrDefault();
			delivery = BOUtilities.valueOf(scenario.repository.fetchPurchaseDelivery(delivery.getCriteria())).firstOrDefault();
			assertEquals("Invoicing finishes the delivery.", emDocumentStatus.FINISHED, delivery.getDocumentStatus());
			assertEqualsBD("Invoice closes its immediate source.", Decimals.valueOf(4),
					delivery.getPurchaseDeliveryItems().firstOrDefault().getClosedQuantity());
			delivery.setCanceled(emYesNo.YES);
			IOperationResult<IPurchaseDelivery> rejected = scenario.repository.savePurchaseDelivery(delivery);
			assertNotNull("Delivery with an active invoice must reject cancellation.", rejected.getError());
			assertEquals(I18N.prop("msg_mm_document_closed_amount_not_allowed_canceled",
					BOIdentifierBuilder.document(delivery.getObjectCode(), delivery.getDocEntry(), source.getLineId()).build()),
					rejected.getError().getMessage());
			delivery = BOUtilities.valueOf(scenario.repository.fetchPurchaseDelivery(delivery.getCriteria())).firstOrDefault();
			assertEquals(emYesNo.NO, delivery.getCanceled());
			assertEquals(emDocumentStatus.FINISHED, delivery.getDocumentStatus());
			assertEqualsBD("Rejected cancellation must preserve its invoice-closed quantity.", Decimals.valueOf(4),
					delivery.getPurchaseDeliveryItems().firstOrDefault().getClosedQuantity());
			assertEquals("Dependent invoice must remain active.", emYesNo.NO,
					BOUtilities.valueOf(scenario.repository.fetchPurchaseInvoice(invoice.getCriteria())).firstOrDefault().getCanceled());
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			scenario.assertStock(4, 6);
			invoice.setCanceled(emYesNo.YES);
			invoice = BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice)).firstOrDefault();
			delivery = BOUtilities.valueOf(scenario.repository.fetchPurchaseDelivery(delivery.getCriteria())).firstOrDefault();
			assertEquals(emDocumentStatus.RELEASED, delivery.getDocumentStatus());
			assertEqualsBD("Canceling invoice reopens its delivery.", BigDecimal.ZERO,
					delivery.getPurchaseDeliveryItems().firstOrDefault().getClosedQuantity());
			delivery.setCanceled(emYesNo.YES);
			delivery = BOUtilities.valueOf(scenario.repository.savePurchaseDelivery(delivery)).firstOrDefault();
			scenario.assertOrder(0, emDocumentStatus.RELEASED);
			scenario.assertStock(0, 10);
			delivery.setCanceled(emYesNo.NO);
			delivery = BOUtilities.valueOf(scenario.repository.savePurchaseDelivery(delivery)).firstOrDefault();
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			scenario.assertStock(4, 6);
			invoice.setCanceled(emYesNo.NO);
			invoice = BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice)).firstOrDefault();
			BOUtilities.valueOf(scenario.repository.savePurchaseInvoice(invoice));
			delivery = BOUtilities.valueOf(scenario.repository.fetchPurchaseDelivery(delivery.getCriteria())).firstOrDefault();
			assertEquals(emDocumentStatus.FINISHED, delivery.getDocumentStatus());
			assertEqualsBD("Restoring invoice must close delivery only once.", Decimals.valueOf(4),
					delivery.getPurchaseDeliveryItems().firstOrDefault().getClosedQuantity());
			scenario.assertOrder(4, emDocumentStatus.RELEASED);
			scenario.assertStock(4, 6);
		}
	}

	/** PU_D74：有已履行数量的源订单；分别物理删除、单头标记删除、行标记删除，三条入口均必须拒绝。 */
	public void testPU_D74_FulfilledClosedQuantityRejectsPhysicalAndTaggedDeletion() {
		assertFulfilledDeletionRejected(false);
	}

	/** PU_D75：有已履行金额的源订单；分别物理删除、单头标记删除、行标记删除，三条入口均必须拒绝。 */
	public void testPU_D75_FulfilledClosedAmountRejectsPhysicalAndTaggedDeletion() {
		assertFulfilledDeletionRejected(true);
	}

	/** 直接验证自定义删除保护，不保存对象；必填字段及事务行为由上面的真实链路场景验证。 */
	private void assertFulfilledDeletionRejected(boolean amount) {
		for (int path = 0; path < 3; path++) {
			PurchaseOrder order = new PurchaseOrder();
			order.setDocEntry(1);
			IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
			line.setLineId(1);
			line.setQuantity(Decimals.valueOf(10));
			if (amount) {
				line.setClosedAmount(Decimals.valueOf(40));
			} else {
				line.setClosedQuantity(Decimals.valueOf(4));
			}
			if (path == 0) {
				order.delete();
			} else if (path == 1) {
				order.setDeleted(emYesNo.YES);
			} else {
				line.setDeleted(emYesNo.YES);
			}
			try {
				order.check();
				fail("Fulfilled document must protect deletion path " + path);
			} catch (BusinessRuleException expected) {
				assertEquals(I18N.prop("msg_mm_document_closed_" + (amount ? "amount" : "quantity") + "_not_allowed_deleted",
						BOIdentifierBuilder.document(order.getObjectCode(), order.getDocEntry(), line.getLineId()).build()),
						expected.getMessage());
			}
		}
	}
}
