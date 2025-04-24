package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;

@BusinessObjectUnit(code = PurchaseCreditNote.BUSINESS_OBJECT_CODE)
public class PurchaseCreditNoteFetcher extends PurchaseFetcher<PurchaseCreditNote> {

	@Override
	public PurchaseCreditNote fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseCreditNote.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<PurchaseCreditNote> operationResult = this.getRepository().fetchPurchaseCreditNote(criteria,
				this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}
