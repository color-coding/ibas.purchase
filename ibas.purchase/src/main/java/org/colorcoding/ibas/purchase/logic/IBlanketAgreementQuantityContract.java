package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 一揽子协议数量契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IBlanketAgreementQuantityContract extends IBusinessLogicContract {
	/**
	 * 基于单据类型
	 * 
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 基于单据编号
	 * 
	 * @return
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 基于单据行号
	 * 
	 * @return
	 */
	Integer getBaseDocumentLineId();

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
