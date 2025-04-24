package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;

@BusinessObjectUnit(code = PurchaseDelivery.BUSINESS_OBJECT_CODE)
public class PurchaseDeliveryrFetcher extends PurchaseFetcher<PurchaseDelivery> {

	@Override
	public PurchaseDelivery fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseDelivery.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<PurchaseDelivery> operationResult = this.getRepository().fetchPurchaseDelivery(criteria,
				this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
