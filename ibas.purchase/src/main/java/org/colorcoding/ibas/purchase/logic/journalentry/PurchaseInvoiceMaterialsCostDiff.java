package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

public class PurchaseInvoiceMaterialsCostDiff extends PurchaseInvoiceMaterialsCost {

	public PurchaseInvoiceMaterialsCostDiff(Object sourceData) {
		super(sourceData);
	}

	@Override
	public void caculate() {
		BigDecimal amount = this.getAmount().abs();
		super.caculate();
		this.setAmount(amount.subtract(this.getAmount().abs()).negate());
	}
}
