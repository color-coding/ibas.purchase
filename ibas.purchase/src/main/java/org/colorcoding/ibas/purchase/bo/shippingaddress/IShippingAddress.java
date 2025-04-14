package org.colorcoding.ibas.purchase.bo.shippingaddress;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.purchase.data.emShippingStatus;

/**
 * 送货地址 接口
 * 
 */
public interface IShippingAddress extends IBOSimple {

	/**
	 * 获取-基于类型
	 * 
	 * @return 值
	 */
	String getBaseDocumentType();

	/**
	 * 设置-基于类型
	 * 
	 * @param value 值
	 */
	void setBaseDocumentType(String value);

	/**
	 * 获取-基于标识
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 设置-基于标识
	 * 
	 * @param value 值
	 */
	void setBaseDocumentEntry(Integer value);

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	String getName();

	/**
	 * 设置-名称
	 * 
	 * @param value 值
	 */
	void setName(String value);

	/**
	 * 获取-顺序
	 * 
	 * @return 值
	 */
	Integer getOrder();

	/**
	 * 设置-顺序
	 * 
	 * @param value 值
	 */
	void setOrder(Integer value);

	/**
	 * 获取-送货状态
	 * 
	 * @return 值
	 */
	emShippingStatus getShippingStatus();

	/**
	 * 设置-送货状态
	 * 
	 * @param value 值
	 */
	void setShippingStatus(emShippingStatus value);

	/**
	 * 获取-收货人
	 * 
	 * @return 值
	 */
	String getConsignee();

	/**
	 * 设置-收货人
	 * 
	 * @param value 值
	 */
	void setConsignee(String value);

	/**
	 * 获取-街道
	 * 
	 * @return 值
	 */
	String getStreet();

	/**
	 * 设置-街道
	 * 
	 * @param value 值
	 */
	void setStreet(String value);

	/**
	 * 获取-县/区
	 * 
	 * @return 值
	 */
	String getDistrict();

	/**
	 * 设置-县/区
	 * 
	 * @param value 值
	 */
	void setDistrict(String value);

	/**
	 * 获取-市
	 * 
	 * @return 值
	 */
	String getCity();

	/**
	 * 设置-市
	 * 
	 * @param value 值
	 */
	void setCity(String value);

	/**
	 * 获取-省
	 * 
	 * @return 值
	 */
	String getProvince();

	/**
	 * 设置-省
	 * 
	 * @param value 值
	 */
	void setProvince(String value);

	/**
	 * 获取-国
	 * 
	 * @return 值
	 */
	String getCountry();

	/**
	 * 设置-国
	 * 
	 * @param value 值
	 */
	void setCountry(String value);

	/**
	 * 获取-邮编
	 * 
	 * @return 值
	 */
	String getZipCode();

	/**
	 * 设置-邮编
	 * 
	 * @param value 值
	 */
	void setZipCode(String value);

	/**
	 * 获取-联系电话
	 * 
	 * @return 值
	 */
	String getMobilePhone();

	/**
	 * 设置-联系电话
	 * 
	 * @param value 值
	 */
	void setMobilePhone(String value);

	/**
	 * 获取-电话
	 * 
	 * @return 值
	 */
	String getTelephone();

	/**
	 * 设置-电话
	 * 
	 * @param value 值
	 */
	void setTelephone(String value);

	/**
	 * 获取-备注 1
	 * 
	 * @return 值
	 */
	String getRemark1();

	/**
	 * 设置-备注 1
	 * 
	 * @param value 值
	 */
	void setRemark1(String value);

	/**
	 * 获取-备注 2
	 * 
	 * @return 值
	 */
	String getRemark2();

	/**
	 * 设置-备注 2
	 * 
	 * @param value 值
	 */
	void setRemark2(String value);

	/**
	 * 获取-费用
	 * 
	 * @return 值
	 */
	BigDecimal getExpense();

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	void setExpense(BigDecimal value);

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	void setExpense(String value);

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	void setExpense(int value);

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	void setExpense(double value);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	void setCurrency(String value);

	/**
	 * 获取-汇率
	 * 
	 * @return 值
	 */
	BigDecimal getRate();

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(BigDecimal value);

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(String value);

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(int value);

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(double value);

	/**
	 * 获取-快递单号
	 * 
	 * @return 值
	 */
	String getTrackingNumber();

	/**
	 * 设置-快递单号
	 * 
	 * @param value 值
	 */
	void setTrackingNumber(String value);

	/**
	 * 获取-税定义
	 * 
	 * @return 值
	 */
	String getTax();

	/**
	 * 设置-税定义
	 * 
	 * @param value 值
	 */
	void setTax(String value);

	/**
	 * 获取-税率
	 * 
	 * @return 值
	 */
	BigDecimal getTaxRate();

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(BigDecimal value);

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(String value);

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(int value);

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(double value);

	/**
	 * 获取-税总额
	 * 
	 * @return 值
	 */
	BigDecimal getTaxTotal();

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(BigDecimal value);

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(String value);

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(int value);

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(double value);

	/**
	 * 获取-税前费用
	 * 
	 * @return 值
	 */
	BigDecimal getPreTaxExpense();

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	void setPreTaxExpense(BigDecimal value);

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	void setPreTaxExpense(String value);

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	void setPreTaxExpense(int value);

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	void setPreTaxExpense(double value);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getObjectKey();

	/**
	 * 设置-对象编号
	 * 
	 * @param value 值
	 */
	void setObjectKey(Integer value);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-对象类型
	 * 
	 * @param value 值
	 */
	void setObjectCode(String value);

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
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	Integer getSeries();

	/**
	 * 设置-服务系列
	 * 
	 * @param value 值
	 */
	void setSeries(Integer value);

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
	* 获取-来源编号
	* 
	* @return 值
	*/
	Integer getSourceKey();

	/**
	* 设置-来源编号
	* 
	* @param value 值
	*/
	void setSourceKey(Integer value);

}
