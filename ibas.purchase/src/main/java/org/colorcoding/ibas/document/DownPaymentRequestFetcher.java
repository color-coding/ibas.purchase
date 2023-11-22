package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.DownPaymentRequest;

@BusinessObjectUnit(code = DownPaymentRequest.BUSINESS_OBJECT_CODE)
public class DownPaymentRequestFetcher extends PurchaseFetcher<DownPaymentRequest> {

	@Override
	public DownPaymentRequest fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(DownPaymentRequest.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<DownPaymentRequest> operationResult = this.getRepository().fetchDownPaymentRequest(criteria,
				this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
