package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;

@BusinessObjectUnit(code = PurchaseRequest.BUSINESS_OBJECT_CODE)
public class PurchaseRequestFetcher extends PurchaseFetcher<PurchaseRequest> {

	@Override
	public PurchaseRequest fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseRequest.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<PurchaseRequest> operationResult = this.getRepository().fetchPurchaseRequest(criteria,
				this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
