package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 采购订单预留创建（复制从采购申请）
 */
public interface IPurchaseOrderReservationCreateContract extends IBusinessLogicContract, IPurchaseBaseDocumentItem {

	/**
	 * 单据类型
	 *
	 * @return
	 */
	String getDocumentType();

	/**
	 * 单据号
	 *
	 * @return
	 */
	Integer getDocumentEntry();

	/**
	 * 单据行号
	 *
	 * @return
	 */
	Integer getDocumentLineId();

	/**
	 * 获取-数量
	 * 
	 * @return 值
	 */
	BigDecimal getQuantity();

	/**
	 * 获取-仓库编码
	 * 
	 * @return 值
	 */
	String getWarehouse();
}
