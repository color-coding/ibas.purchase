package org.colorcoding.ibas.purchase.logic;

import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 物料订购预留关闭状态契约（基于源单据）
 */
public interface IMaterialOrderedReservationStatusContract extends IBusinessLogicContract {

	/**
	 * 获取-源单据类型
	 * 
	 * @return 值
	 */
	String getSourceDocumentType();

	/**
	 * 获取-源单据编号
	 * 
	 * @return 值
	 */
	Integer getSourceDocumentEntry();

	/**
	 * 获取-源单据行号
	 * 
	 * @return 值
	 */
	Integer getSourceDocumentLineId();

	/**
	 * 获取-源单据状态
	 * 
	 * @return
	 */
	emDocumentStatus getSourceDocumentStatus();
}
