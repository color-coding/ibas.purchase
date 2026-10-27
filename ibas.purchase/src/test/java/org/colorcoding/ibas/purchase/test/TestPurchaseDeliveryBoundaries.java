package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOIdentifierBuilder;
import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.MyConfiguration;
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

/** 超量限制、多行事务回滚及重复保存的业务边界。 */
public class TestPurchaseDeliveryBoundaries extends AbstractPurchaseQuantityTestCase {

	private IPurchaseOrder createOrder(BORepositoryPurchase repo, ISupplier partner, IMaterial material, IWarehouse warehouse) {
		IPurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode(partner.getCode());
		IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
		line.setItemCode(material.getCode());
		line.setWarehouse(warehouse.getCode());
		line.setQuantity(Decimals.valueOf(10));
		line.setPrice(Decimals.valueOf(20));
		return BOUtilities.valueOf(repo.savePurchaseOrder(order)).firstOrDefault();
	}

	private IPurchaseDelivery delivery(IPurchaseOrder order, int... quantities) {
		IPurchaseDelivery delivery = new PurchaseDelivery();
		delivery.setSupplierCode(order.getSupplierCode());
		IPurchaseOrderItem source = order.getPurchaseOrderItems().firstOrDefault();
		for (int quantity : quantities) {
			IPurchaseDeliveryItem line = delivery.getPurchaseDeliveryItems().create();
			line.setItemCode(source.getItemCode());
			line.setWarehouse(source.getWarehouse());
			line.setPrice(source.getPrice());
			line.setQuantity(Decimals.valueOf(quantity));
			line.setBaseDocumentType(source.getObjectCode());
			line.setBaseDocumentEntry(source.getDocEntry());
			line.setBaseDocumentLineId(source.getLineId());
		}
		return delivery;
	}

	public void testPU_D59_ExcessSecondLineRollsBackWholeDelivery() throws Exception {
		String previous = MyConfiguration.getConfigValue(MyConfiguration.CONFIG_ITEM_LIMIT_CLOSED_QUANTIT_DOCUMENTS);
		try (BORepositoryMaterials materials = createMaterialsRepository();
				BORepositoryBusinessPartner partners = createBPRepository();
				BORepositoryPurchase repo = createPurchaseRepository()) {
			IWarehouse warehouse = prepareWarehouse(materials);
			IMaterial material = prepareMaterial(materials, MaterialKind.INVENTORY, "PuLIMIT");
			ISupplier partner = prepareSupplier(partners);

			IPurchaseOrder order = createOrder(repo, partner, material, warehouse);
			MyConfiguration.create().addConfigValue(MyConfiguration.CONFIG_ITEM_LIMIT_CLOSED_QUANTIT_DOCUMENTS, order.getObjectCode() + ";");
			IPurchaseDelivery document = delivery(order, 6, 6);
			document.setReference1(material.getCode());
			IOperationResult<IPurchaseDelivery> result = repo.savePurchaseDelivery(document);
			assertTrue("Second line must be rejected for exceeding source quantity.", result.getError() instanceof BusinessLogicException);
			assertEquals(I18N.prop("msg_mm_document_closed_quantity_exceeds_quantity",
					BOIdentifierBuilder.document(order.getObjectCode(), order.getDocEntry(),
							order.getPurchaseOrderItems().firstOrDefault().getLineId()).build()), result.getError().getMessage());
			IPurchaseOrder savedOrder = BOUtilities.valueOf(repo.fetchPurchaseOrder(order.getCriteria())).firstOrDefault();
			assertEqualsBD("Failed delivery must not close its source.", BigDecimal.ZERO,
					savedOrder.getPurchaseOrderItems().firstOrDefault().getClosedQuantity());
			assertQuantities(materials, material, warehouse.getCode(), Decimals.valueOf(0),
					Decimals.valueOf(0), Decimals.valueOf(10));
			ICriteria failedCriteria = new Criteria();
			failedCriteria.getConditions().create().setAlias("Reference1");
			failedCriteria.getConditions().get(0).setValue(material.getCode());
			assertTrue("Failed document must not persist.", BOUtilities.valueOf(repo.fetchPurchaseDelivery(failedCriteria)).isEmpty());
		} finally {
			MyConfiguration.create().addConfigValue(MyConfiguration.CONFIG_ITEM_LIMIT_CLOSED_QUANTIT_DOCUMENTS, previous == null ? "" : previous);
		}
	}

	public void testPU_D60_RepeatedDeliverySaveDoesNotDuplicateSourceQuantity() throws Exception {
		try (BORepositoryMaterials materials = createMaterialsRepository();
				BORepositoryBusinessPartner partners = createBPRepository();
				BORepositoryPurchase repo = createPurchaseRepository()) {
			IWarehouse warehouse = prepareWarehouse(materials);
			IMaterial material = prepareMaterial(materials, MaterialKind.INVENTORY, "PuDSAVE");
			ISupplier partner = prepareSupplier(partners);

			IPurchaseOrder order = createOrder(repo, partner, material, warehouse);
			IPurchaseDelivery document = BOUtilities.valueOf(repo.savePurchaseDelivery(delivery(order, 4))).firstOrDefault();
			document = BOUtilities.valueOf(repo.savePurchaseDelivery(document)).firstOrDefault();
			IPurchaseOrder savedOrder = BOUtilities.valueOf(repo.fetchPurchaseOrder(order.getCriteria())).firstOrDefault();
			assertEqualsBD("Repeated save must close source only once.", Decimals.valueOf(4),
					savedOrder.getPurchaseOrderItems().firstOrDefault().getClosedQuantity());
			assertQuantities(materials, material, warehouse.getCode(), Decimals.valueOf(4),
					Decimals.valueOf(0), Decimals.valueOf(6));
			document.setCanceled(emYesNo.YES);
			document = BOUtilities.valueOf(repo.savePurchaseDelivery(document)).firstOrDefault();
			BOUtilities.valueOf(repo.savePurchaseDelivery(document));
			savedOrder = BOUtilities.valueOf(repo.fetchPurchaseOrder(order.getCriteria())).firstOrDefault();
			assertEqualsBD("Repeated cancellation must reopen source only once.", BigDecimal.ZERO,
					savedOrder.getPurchaseOrderItems().firstOrDefault().getClosedQuantity());
			assertQuantities(materials, material, warehouse.getCode(), Decimals.valueOf(0),
					Decimals.valueOf(0), Decimals.valueOf(10));
		}
	}
}
