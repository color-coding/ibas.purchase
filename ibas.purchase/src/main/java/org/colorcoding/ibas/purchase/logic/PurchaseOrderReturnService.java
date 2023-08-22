package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;

/**
 * 采购订单-退货服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IPurchaseOrderReturnContract.class)
public class PurchaseOrderReturnService extends PurchaseOrderService<IPurchaseOrderReturnContract> {

	@Override
	protected IPurchaseOrder fetchBeAffected(IPurchaseOrderReturnContract contract) {
		return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
	}

	@Override
	protected void impact(IPurchaseOrderReturnContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IPurchaseOrderItem orderItem = this.getBeAffected().getPurchaseOrderItems()
				.firstOrDefault(c -> c.getLineId().compareTo(contract.getBaseDocumentLineId()) == 0);
		if (orderItem == null) {
			throw new BusinessLogicException(I18N.prop("msg_ph_not_found_order_item", contract.getBaseDocumentType(),
					contract.getBaseDocumentEntry(), contract.getBaseDocumentLineId()));
		}
		BigDecimal closedQuantity = orderItem.getClosedQuantity();
		if (closedQuantity == null) {
			closedQuantity = Decimal.ZERO;
		}
		closedQuantity = closedQuantity.subtract(contract.getQuantity());
		orderItem.setClosedQuantity(closedQuantity);
		if (orderItem.getClosedQuantity().compareTo(Decimal.ZERO) > 0) {
			orderItem.setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(IPurchaseOrderReturnContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IPurchaseOrderItem orderItem = this.getBeAffected().getPurchaseOrderItems()
				.firstOrDefault(c -> c.getLineId().compareTo(contract.getBaseDocumentLineId()) == 0);
		if (orderItem == null) {
			throw new BusinessLogicException(I18N.prop("msg_ph_not_found_order_item", contract.getBaseDocumentType(),
					contract.getBaseDocumentEntry(), contract.getBaseDocumentLineId()));
		}
		BigDecimal closedQuantity = orderItem.getClosedQuantity();
		if (closedQuantity == null) {
			closedQuantity = Decimal.ZERO;
		}
		closedQuantity = closedQuantity.add(contract.getQuantity());
		orderItem.setClosedQuantity(closedQuantity);
		if (orderItem.getClosedQuantity().compareTo(Decimal.ZERO) <= 0) {
			orderItem.setReferenced(emYesNo.NO);
		}
	}

}