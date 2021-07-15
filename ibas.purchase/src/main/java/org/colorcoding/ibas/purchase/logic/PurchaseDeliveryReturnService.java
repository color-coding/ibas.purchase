package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;

/**
 * 采购交货-退货服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IPurchaseDeliveryReturnContract.class)
public class PurchaseDeliveryReturnService extends PurchaseDeliveryService<IPurchaseDeliveryReturnContract> {

	@Override
	protected IPurchaseDelivery fetchBeAffected(IPurchaseDeliveryReturnContract contract) {
		return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
	}

	@Override
	protected void impact(IPurchaseDeliveryReturnContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IPurchaseDeliveryItem orderItem = this.getBeAffected().getPurchaseDeliveryItems()
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
		if (orderItem.getLineStatus() == emDocumentStatus.RELEASED
				&& closedQuantity.compareTo(orderItem.getQuantity()) >= 0) {
			orderItem.setLineStatus(emDocumentStatus.FINISHED);
		}
	}

	@Override
	protected void revoke(IPurchaseDeliveryReturnContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IPurchaseDeliveryItem orderItem = this.getBeAffected().getPurchaseDeliveryItems()
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
		if (orderItem.getLineStatus() == emDocumentStatus.FINISHED
				&& closedQuantity.compareTo(orderItem.getQuantity()) < 0) {
			orderItem.setLineStatus(emDocumentStatus.RELEASED);
		}
	}

}