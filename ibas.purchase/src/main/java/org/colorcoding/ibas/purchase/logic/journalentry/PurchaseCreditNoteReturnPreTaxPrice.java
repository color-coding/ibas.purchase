package org.colorcoding.ibas.purchase.logic.journalentry;

import org.colorcoding.ibas.accounting.logic.JournalEntrySmartContent;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.IPurchaseCreditNoteItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturnItem;
import org.colorcoding.ibas.purchase.data.DataConvert;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 计算基于交货的发票的税前价格差异
 */
public class PurchaseCreditNoteReturnPreTaxPrice extends JournalEntrySmartContent {

	public PurchaseCreditNoteReturnPreTaxPrice(Object sourceData) {
		super(sourceData);
	}

	@Override
	public void caculate() {
		if (this.getSourceData() instanceof IPurchaseCreditNoteItem) {
			IPurchaseCreditNoteItem item = (IPurchaseCreditNoteItem) this.getSourceData();
			if (!DataConvert.isNullOrEmpty(item.getBaseDocumentType()) && item.getBaseDocumentEntry() > 0
					&& item.getBaseDocumentLineId() > 0) {
				Criteria criteria = new Criteria();
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(PurchaseDelivery.PROPERTY_DOCENTRY.getName());
				condition.setValue(item.getBaseDocumentEntry());
				BORepositoryPurchase boRepository = new BORepositoryPurchase();
				boRepository.setRepository(this.getService().getRepository());
				IOperationResult<IPurchaseReturn> operationResult = boRepository.fetchPurchaseReturn(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				for (IPurchaseReturn baseDocument : operationResult.getResultObjects()) {
					if (!item.getBaseDocumentType().equals(baseDocument.getObjectCode())) {
						continue;
					}
					if (item.getBaseDocumentEntry().compareTo(baseDocument.getDocEntry()) != 0) {
						continue;
					}
					for (IPurchaseReturnItem baseLine : baseDocument.getPurchaseReturnItems()) {
						if (item.getBaseDocumentLineId().compareTo(baseLine.getLineId()) != 0) {
							continue;
						}
						this.setAmount(Decimal.multiply(item.getQuantity(), item.getPreTaxPrice()).negate());
						// 计算完成，退出
						return;
					}
				}
			}
		}
		throw new RuntimeException("no result.");
	}

}
