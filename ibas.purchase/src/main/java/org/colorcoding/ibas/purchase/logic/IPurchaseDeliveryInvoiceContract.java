package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 采购交货，开票契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPurchaseDeliveryInvoiceContract extends IBusinessLogicContract, IPurchaseBaseDocumentItem {

	/**
	 * 数量
	 * 
	 * @return
	 */
	BigDecimal getQuantity();

}
