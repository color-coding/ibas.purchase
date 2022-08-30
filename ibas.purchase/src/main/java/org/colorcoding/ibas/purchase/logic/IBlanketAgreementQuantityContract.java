package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 一揽子协议数量契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IBlanketAgreementQuantityContract extends IBusinessLogicContract, IPurchaseBaseDocumentItem {

	/**
	 * 数量
	 * 
	 * @return
	 */
	BigDecimal getQuantity();

	/**
	 * 金额
	 * 
	 * @return
	 */
	BigDecimal getAmount();
}
