package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.materials.logic.journalentry.MaterialsCost;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturnItem;

public class PurchaseReturnMaterialsCost extends MaterialsCost {

	public PurchaseReturnMaterialsCost(Object sourceData) {
		super(sourceData);
	}

	@Override
	public void caculate() throws Exception {
		if (this.getSourceData() instanceof IPurchaseReturnItem) {
			IPurchaseReturnItem item = (IPurchaseReturnItem) this.getSourceData();
			BigDecimal avaPrice = null;
			if (item.isNew()) {
				// 新建的取物料上的
				avaPrice = this.getAvgPrice(item.getItemCode(), item.getWarehouse());
			} else {
				avaPrice = this.getAvgPrice(item.getObjectCode(), item.getDocEntry(), item.getLineId(),
						item.getItemCode(), item.getWarehouse());
				if (avaPrice == null) {
					// 库存记录没有
					avaPrice = this.getAvgPrice(item.getItemCode(), item.getWarehouse());
				}
			}
			if (avaPrice != null) {
				this.setAmount(Decimal.multiply(item.getQuantity(), avaPrice).negate());
				return;
			}
		}
		this.setAmount(Decimal.ZERO);
	}

}
