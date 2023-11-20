package org.colorcoding.ibas.purchase.logic.journalentry;

import org.colorcoding.ibas.accounting.logic.JournalEntrySmartContent;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.IChildCriteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.IPurchaseInvoiceItem;
import org.colorcoding.ibas.purchase.data.DataConvert;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

public class PurchaseInvoiceDeliveryPreTaxPriceDiff extends JournalEntrySmartContent {

	public PurchaseInvoiceDeliveryPreTaxPriceDiff(Object sourceData) {
		super(sourceData);
	}

	@Override
	public void caculate() {
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
						// 金额 = 数量 * （税前价格 - 入库税前价格）
						this.setAmount(Decimal.multiply(item.getQuantity(),
								item.getPreTaxPrice().subtract(baseLine.getPreTaxPrice())));
						// 计算完成，退出
						return;
					}
				}
			}
		}
		throw new RuntimeException("no result.");
	}

}
