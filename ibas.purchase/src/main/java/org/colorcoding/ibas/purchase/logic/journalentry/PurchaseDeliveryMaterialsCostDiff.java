package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

public class PurchaseDeliveryMaterialsCostDiff extends PurchaseDeliveryMaterialsCost {

	public PurchaseDeliveryMaterialsCostDiff(Object sourceData) {
		super(sourceData);
	}

	@Override
	public void caculate() {
		BigDecimal amount = this.getAmount().abs();
		super.caculate();
		this.setAmount(amount.subtract(this.getAmount().abs()).negate());
	}
}
