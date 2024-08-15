package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.IChildCriteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.materials.logic.journalentry.MaterialsInventoryCost;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.IPurchaseInvoiceItem;
import org.colorcoding.ibas.purchase.data.DataConvert;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

public class PurchaseInvoiceDeliveryPreTaxPrice extends MaterialsInventoryCost {

	public PurchaseInvoiceDeliveryPreTaxPrice(Object sourceData, BigDecimal quantity) {
		super(sourceData, quantity);
		this.setNegate(false);
	}

	public PurchaseInvoiceDeliveryPreTaxPrice(Object sourceData, BigDecimal quantity, boolean negate) {
		this(sourceData, quantity);
		this.setNegate(negate);
	}

	@Override
	protected boolean caculate(String itemCode, String warehouse) {
		if (this.getSourceData() instanceof IPurchaseInvoiceItem) {
			IPurchaseInvoiceItem item = (IPurchaseInvoiceItem) this.getSourceData();
			if (!DataConvert.isNullOrEmpty(item.getBaseDocumentType()) && item.getBaseDocumentEntry() > 0
					&& item.getBaseDocumentLineId() > 0) {
				Criteria criteria = new Criteria();
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(PurchaseDelivery.PROPERTY_DOCENTRY.getName());
				condition.setValue(item.getBaseDocumentEntry());
				IChildCriteria childCriteria = criteria.getChildCriterias().create();
				childCriteria.setPropertyPath(PurchaseDelivery.PROPERTY_PURCHASEDELIVERYITEMS.getName());
				childCriteria.setOnlyHasChilds(true);
				condition = childCriteria.getConditions().create();
				condition.setAlias(PurchaseDeliveryItem.PROPERTY_LINEID.getName());
				condition.setValue(item.getBaseDocumentLineId());
				BORepositoryPurchase boRepository = new BORepositoryPurchase();
				boRepository.setRepository(this.getService().getRepository());
				IOperationResult<IPurchaseDelivery> operationResult = boRepository.fetchPurchaseDelivery(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				for (IPurchaseDelivery baseDocument : operationResult.getResultObjects()) {
					if (!item.getBaseDocumentType().equals(baseDocument.getObjectCode())) {
						continue;
					}
					if (item.getBaseDocumentEntry().compareTo(baseDocument.getDocEntry()) != 0) {
						continue;
					}
					for (IPurchaseDeliveryItem baseLine : baseDocument.getPurchaseDeliveryItems()) {
						if (item.getBaseDocumentLineId().compareTo(baseLine.getLineId()) != 0) {
							continue;
						}
						// 金额 = 数量 * 入库税前价格
						BigDecimal amount = Decimal.multiply(this.getQuantity(), baseLine.getPreTaxPrice());
						if (this.getAmount() != null && this.getAmount().scale() > 0) {
							amount.setScale(this.getAmount().scale(), Decimal.ROUNDING_MODE_DEFAULT);
						}
						this.setAmount(amount);
						// 计算完成，退出
						return true;
					}
				}
			}
		}
		return false;
	}

}
