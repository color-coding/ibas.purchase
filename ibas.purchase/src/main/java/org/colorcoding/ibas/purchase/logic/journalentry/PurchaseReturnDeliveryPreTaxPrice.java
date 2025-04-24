package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.common.IChildCriteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.materials.logic.journalentry.MaterialsInventoryCost;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturnItem;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.sales.MyConfiguration;

public class PurchaseReturnDeliveryPreTaxPrice extends MaterialsInventoryCost {

	public PurchaseReturnDeliveryPreTaxPrice(Object sourceData, BigDecimal quantity) {
		super(sourceData, quantity);
		this.setNegate(true);
	}

	@Override
	protected boolean caculate(String itemCode, String warehouse) {
		String docType, deliveryCode = MyConfiguration.applyVariables(PurchaseDelivery.BUSINESS_OBJECT_CODE);
		Integer docEntry, docLine;
		if (this.getSourceData() instanceof IPurchaseReturnItem) {
			IPurchaseReturnItem item = (IPurchaseReturnItem) this.getSourceData();
			docType = item.getBaseDocumentType();
			docEntry = item.getBaseDocumentEntry();
			docLine = item.getBaseDocumentLineId();
			if (!deliveryCode.equals(docType)) {
				docType = item.getOriginalDocumentType();
				docEntry = item.getOriginalDocumentEntry();
				docLine = item.getOriginalDocumentLineId();
			}
			if (deliveryCode.equals(docType) && docEntry > 0 && docLine > 0) {
				Criteria criteria = new Criteria();
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(PurchaseDelivery.PROPERTY_DOCENTRY.getName());
				condition.setValue(docEntry);
				IChildCriteria childCriteria = criteria.getChildCriterias().create();
				childCriteria.setPropertyPath(PurchaseDelivery.PROPERTY_PURCHASEDELIVERYITEMS.getName());
				childCriteria.setOnlyHasChilds(true);
				condition = childCriteria.getConditions().create();
				condition.setAlias(PurchaseDeliveryItem.PROPERTY_LINEID.getName());
				condition.setValue(docLine);
				try (BORepositoryPurchase boRepository = new BORepositoryPurchase()) {
					boRepository.setTransaction(this.getService().getTransaction());
					IOperationResult<IPurchaseDelivery> operationResult = boRepository.fetchPurchaseDelivery(criteria);
					if (operationResult.getError() != null) {
						throw new BusinessLogicException(operationResult.getError());
					}
					for (IPurchaseDelivery baseDocument : operationResult.getResultObjects()) {
						if (!docType.equals(baseDocument.getObjectCode())) {
							continue;
						}
						if (docEntry.compareTo(baseDocument.getDocEntry()) != 0) {
							continue;
						}
						for (IPurchaseDeliveryItem baseLine : baseDocument.getPurchaseDeliveryItems()) {
							if (docLine.compareTo(baseLine.getLineId()) != 0) {
								continue;
							}
							this.setAmount(Decimals.multiply(this.getQuantity(), item.getPreTaxPrice()));
							// 计算完成，退出
							return true;
						}
					}
				}
			}
		}
		return false;
	}

}
