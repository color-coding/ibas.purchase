package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequestItem;

/**
 * 采购请求-关闭服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IPurchaseRequestClosingContract.class)
public class PurchaseRequestClosingService extends PurchaseRequestService<IPurchaseRequestClosingContract> {

	@Override
	protected IPurchaseRequest fetchBeAffected(IPurchaseRequestClosingContract contract) {
		return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
	}

	@Override
	protected void impact(IPurchaseRequestClosingContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IPurchaseRequestItem orderItem = this.getBeAffected().getPurchaseRequestItems()
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
		if (orderItem.getClosedQuantity().compareTo(Decimal.ZERO) > 0) {
			orderItem.setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(IPurchaseRequestClosingContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IPurchaseRequestItem orderItem = this.getBeAffected().getPurchaseRequestItems()
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
		if (orderItem.getClosedQuantity().compareTo(Decimal.ZERO) <= 0) {
			orderItem.setReferenced(emYesNo.NO);
		}
	}

}