package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;

@BusinessObjectUnit(code = PurchaseQuote.BUSINESS_OBJECT_CODE)
public class PurchaseQuoteFetcher extends PurchaseFetcher<PurchaseQuote> {

	@Override
	public PurchaseQuote fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseQuote.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<PurchaseQuote> operationResult = this.getRepository().fetchPurchaseQuote(criteria,
				this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
