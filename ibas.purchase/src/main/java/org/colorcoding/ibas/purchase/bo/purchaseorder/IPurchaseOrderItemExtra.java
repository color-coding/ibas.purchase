package org.colorcoding.ibas.purchase.bo.purchaseorder;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocumentLine;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 采购订单-行-额外信息 接口
 * 
 */
public interface IPurchaseOrderItemExtra extends IBODocumentLine {

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-编码
	 * 
	 * @param value 值
	 */
	void setDocEntry(Integer value);

	/**
	 * 获取-行号
	 * 
	 * @return 值
	 */
	Integer getLineId();

	/**
	 * 设置-行号
	 * 
	 * @param value 值
	 */
	void setLineId(Integer value);

	/**
	 * 获取-显示顺序
	 * 
	 * @return 值
	 */
	Integer getVisOrder();

	/**
	 * 设置-显示顺序
	 * 
	 * @param value 值
	 */
	void setVisOrder(Integer value);

	/**
	 * 获取-类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-类型
	 * 
	 * @param value 值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号（版本）
	 * 
	 * @param value 值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	void setDataSource(String value);

	/**
	 * 获取-取消
	 * 
	 * @return 值
	 */
	emYesNo getCanceled();

	/**
	 * 设置-取消
	 * 
	 * @param value 值
	 */
	void setCanceled(emYesNo value);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	emBOStatus getStatus();

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	void setStatus(emBOStatus value);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	emDocumentStatus getLineStatus();

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	void setLineStatus(emDocumentStatus value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-修改用户
	 * 
	 * @param value 值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-参考1
	 * 
	 * @return 值
	 */
	String getReference1();

	/**
	 * 设置-参考1
	 * 
	 * @param value 值
	 */
	void setReference1(String value);

	/**
	 * 获取-参考2
	 * 
	 * @return 值
	 */
	String getReference2();

	/**
	 * 设置-参考2
	 * 
	 * @param value 值
	 */
	void setReference2(String value);

	/**
	 * 获取-项目行号
	 * 
	 * @return 值
	 */
	Integer getItemId();

	/**
	 * 设置-项目行号
	 * 
	 * @param value 值
	 */
	void setItemId(Integer value);

	/**
	 * 获取-额外类型
	 * 
	 * @return 值
	 */
	String getExtraType();

	/**
	 * 设置-额外类型
	 * 
	 * @param value 值
	 */
	void setExtraType(String value);

	/**
	 * 获取-额外标识
	 * 
	 * @return 值
	 */
	Integer getExtraKey();

	/**
	 * 设置-额外标识
	 * 
	 * @param value 值
	 */
	void setExtraKey(Integer value);

	/**
	 * 获取-数量
	 * 
	 * @return 值
	 */
	BigDecimal getQuantity();

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(BigDecimal value);

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(String value);

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(int value);

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(double value);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	String getNote();

	/**
	 * 设置-备注
	 * 
	 * @param value 值
	 */
	void setNote(String value);

}
