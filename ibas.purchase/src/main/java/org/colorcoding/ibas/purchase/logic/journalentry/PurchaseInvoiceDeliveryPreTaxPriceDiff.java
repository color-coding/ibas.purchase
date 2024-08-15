package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

public class PurchaseInvoiceDeliveryPreTaxPriceDiff extends PurchaseInvoiceDeliveryPreTaxPrice {

	public PurchaseInvoiceDeliveryPreTaxPriceDiff(Object sourceData, BigDecimal quantity) {
		super(sourceData, quantity);
		this.setNegate(false);
	}

	public PurchaseInvoiceDeliveryPreTaxPriceDiff(Object sourceData, BigDecimal quantity, boolean negate) {
		this(sourceData, quantity);
		this.setNegate(negate);
	}

	@Override
	protected boolean caculate(String itemCode, String warehouse) {
		BigDecimal amount = this.getAmount();
		if (super.caculate(itemCode, warehouse)) {
			this.setAmount(amount.subtract(this.getAmount()));
			return true;
		} else {
			return false;
		}
	}

}
