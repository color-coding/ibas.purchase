package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.purchasereturnrequest.PurchaseReturnRequest;

@BusinessObjectUnit(code = PurchaseReturnRequest.BUSINESS_OBJECT_CODE)
public class PurchaseReturnRequestFetcher extends PurchaseFetcher<PurchaseReturnRequest> {

	@Override
	public PurchaseReturnRequest fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseReturnRequest.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<PurchaseReturnRequest> operationResult = this.getRepository()
				.fetchPurchaseReturnRequest(criteria, this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
