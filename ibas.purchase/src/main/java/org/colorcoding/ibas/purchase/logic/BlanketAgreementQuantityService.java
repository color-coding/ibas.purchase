package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.bo.blanketagreement.BlanketAgreement;
import org.colorcoding.ibas.purchase.bo.blanketagreement.IBlanketAgreement;
import org.colorcoding.ibas.purchase.bo.blanketagreement.IBlanketAgreementItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.data.emAgreementMethod;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 一揽子协议数量服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IBlanketAgreementQuantityContract.class)
public class BlanketAgreementQuantityService
		extends BusinessLogic<IBlanketAgreementQuantityContract, IBlanketAgreement> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IBlanketAgreementQuantityContract) {
			IBlanketAgreementQuantityContract contract = (IBlanketAgreementQuantityContract) data;
			if (!MyConfiguration.applyVariables(BlanketAgreement.BUSINESS_OBJECT_CODE)
					.equals(contract.getBaseDocumentType())) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"BaseDocumentType", contract.getBaseDocumentType());
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IBlanketAgreement fetchBeAffected(IBlanketAgreementQuantityContract contract) {
		// 必须要差完整对象，不然业务逻辑会出错
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseOrder.PROPERTY_OBJECTCODE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentType());
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(PurchaseOrder.PROPERTY_DOCENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentEntry());

		IBlanketAgreement order = this.fetchBeAffected(criteria, IBlanketAgreement.class);
		if (order == null) {
			BORepositoryPurchase boRepository = new BORepositoryPurchase();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IBlanketAgreement> operationResult = boRepository.fetchBlanketAgreement(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			order = operationResult.getResultObjects().firstOrDefault();
		}
		if (order == null) {
			throw new BusinessLogicException(I18N.prop("msg_sl_not_found_order", contract.getBaseDocumentType(),
					contract.getBaseDocumentEntry()));
		}
		return order;
	}

	@Override
	protected void impact(IBlanketAgreementQuantityContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IBlanketAgreementItem orderItem = this.getBeAffected().getBlanketAgreementItems()
				.firstOrDefault(c -> c.getLineId().compareTo(contract.getBaseDocumentLineId()) == 0);
		if (orderItem == null) {
			throw new BusinessLogicException(I18N.prop("msg_sl_not_found_order_item", contract.getBaseDocumentType(),
					contract.getBaseDocumentEntry(), contract.getBaseDocumentLineId()));
		}
		if (this.getBeAffected().getAgreementMethod() == emAgreementMethod.ITEM) {
			// 物料协议
			BigDecimal quantity = orderItem.getClosedQuantity();
			if (quantity == null) {
				quantity = Decimal.ZERO;
			}
			quantity = quantity.add(contract.getQuantity());
			orderItem.setClosedQuantity(quantity);
		} else if (this.getBeAffected().getAgreementMethod() == emAgreementMethod.MONETARY) {
			// 货币协议
			BigDecimal amount = orderItem.getClosedAmount();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.add(contract.getAmount());
			orderItem.setClosedAmount(amount);
		}
		if (orderItem.getClosedQuantity().compareTo(Decimal.ZERO) > 0) {
			orderItem.setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(IBlanketAgreementQuantityContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		IBlanketAgreementItem orderItem = this.getBeAffected().getBlanketAgreementItems()
				.firstOrDefault(c -> c.getLineId().compareTo(contract.getBaseDocumentLineId()) == 0);
		if (orderItem == null) {
			throw new BusinessLogicException(I18N.prop("msg_sl_not_found_order_item", contract.getBaseDocumentType(),
					contract.getBaseDocumentEntry(), contract.getBaseDocumentLineId()));
		}
		if (this.getBeAffected().getAgreementMethod() == emAgreementMethod.ITEM) {
			// 物料协议
			BigDecimal quantity = orderItem.getClosedQuantity();
			if (quantity == null) {
				quantity = Decimal.ZERO;
			}
			quantity = quantity.subtract(contract.getQuantity());
			orderItem.setClosedQuantity(quantity);
		} else if (this.getBeAffected().getAgreementMethod() == emAgreementMethod.MONETARY) {
			// 货币协议
			BigDecimal amount = orderItem.getClosedAmount();
			if (amount == null) {
				amount = Decimal.ZERO;
			}
			amount = amount.subtract(contract.getAmount());
			orderItem.setClosedAmount(amount);
		}
		if (orderItem.getClosedQuantity().compareTo(Decimal.ZERO) <= 0) {
			orderItem.setReferenced(emYesNo.NO);
		}
	}

}