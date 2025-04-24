package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;

@BusinessObjectUnit(code = PurchaseOrder.BUSINESS_OBJECT_CODE)
public class PurchaseOrderFetcher extends PurchaseFetcher<PurchaseOrder> {

	@Override
	public PurchaseOrder fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseOrder.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<PurchaseOrder> operationResult = this.getRepository().fetchPurchaseOrder(criteria,
				this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
