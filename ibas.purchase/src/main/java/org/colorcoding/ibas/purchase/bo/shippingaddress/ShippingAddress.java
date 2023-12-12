package org.colorcoding.ibas.purchase.bo.shippingaddress;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleMinValue;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleSubtraction;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.data.emShippingStatus;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionTaxPrice;

/**
 * 送货地址
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = ShippingAddress.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = ShippingAddress.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = ShippingAddress.BUSINESS_OBJECT_CODE)
public class ShippingAddress extends BusinessObject<ShippingAddress> implements IShippingAddress, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -5086004743874250648L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = ShippingAddress.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_PH_OSAD";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_PH_SHIPADDRESS";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "ShippingAddress";

	/**
	 * 属性名称-基于类型
	 */
	private static final String PROPERTY_BASEDOCUMENTTYPE_NAME = "BaseDocumentType";

	/**
	 * 基于类型 属性
	 */
	@DbField(name = "BaseType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BASEDOCUMENTTYPE = registerProperty(
			PROPERTY_BASEDOCUMENTTYPE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-基于类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASEDOCUMENTTYPE_NAME)
	public final String getBaseDocumentType() {
		return this.getProperty(PROPERTY_BASEDOCUMENTTYPE);
	}

	/**
	 * 设置-基于类型
	 * 
	 * @param value 值
	 */
	public final void setBaseDocumentType(String value) {
		this.setProperty(PROPERTY_BASEDOCUMENTTYPE, value);
	}

	/**
	 * 属性名称-基于标识
	 */
	private static final String PROPERTY_BASEDOCUMENTENTRY_NAME = "BaseDocumentEntry";

	/**
	 * 基于标识 属性
	 */
	@DbField(name = "BaseEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_BASEDOCUMENTENTRY = registerProperty(
			PROPERTY_BASEDOCUMENTENTRY_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-基于标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASEDOCUMENTENTRY_NAME)
	public final Integer getBaseDocumentEntry() {
		return this.getProperty(PROPERTY_BASEDOCUMENTENTRY);
	}

	/**
	 * 设置-基于标识
	 * 
	 * @param value 值
	 */
	public final void setBaseDocumentEntry(Integer value) {
		this.setProperty(PROPERTY_BASEDOCUMENTENTRY, value);
	}

	/**
	 * 属性名称-名称
	 */
	private static final String PROPERTY_NAME_NAME = "Name";

	/**
	 * 名称 属性
	 */
	@DbField(name = "Name", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_NAME = registerProperty(PROPERTY_NAME_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_NAME_NAME)
	public final String getName() {
		return this.getProperty(PROPERTY_NAME);
	}

	/**
	 * 设置-名称
	 * 
	 * @param value 值
	 */
	public final void setName(String value) {
		this.setProperty(PROPERTY_NAME, value);
	}

	/**
	 * 属性名称-顺序
	 */
	private static final String PROPERTY_ORDER_NAME = "Order";

	/**
	 * 顺序 属性
	 */
	@DbField(name = "Order", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_ORDER = registerProperty(PROPERTY_ORDER_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-顺序
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORDER_NAME)
	public final Integer getOrder() {
		return this.getProperty(PROPERTY_ORDER);
	}

	/**
	 * 设置-顺序
	 * 
	 * @param value 值
	 */
	public final void setOrder(Integer value) {
		this.setProperty(PROPERTY_ORDER, value);
	}

	/**
	 * 属性名称-送货状态
	 */
	private static final String PROPERTY_SHIPPINGSTATUS_NAME = "ShippingStatus";

	/**
	 * 送货状态 属性
	 */
	@DbField(name = "Status", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emShippingStatus> PROPERTY_SHIPPINGSTATUS = registerProperty(
			PROPERTY_SHIPPINGSTATUS_NAME, emShippingStatus.class, MY_CLASS);

	/**
	 * 获取-送货状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SHIPPINGSTATUS_NAME)
	public final emShippingStatus getShippingStatus() {
		return this.getProperty(PROPERTY_SHIPPINGSTATUS);
	}

	/**
	 * 设置-送货状态
	 * 
	 * @param value 值
	 */
	public final void setShippingStatus(emShippingStatus value) {
		this.setProperty(PROPERTY_SHIPPINGSTATUS, value);
	}

	/**
	 * 属性名称-收货人
	 */
	private static final String PROPERTY_CONSIGNEE_NAME = "Consignee";

	/**
	 * 收货人 属性
	 */
	@DbField(name = "Consignee", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CONSIGNEE = registerProperty(PROPERTY_CONSIGNEE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-收货人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CONSIGNEE_NAME)
	public final String getConsignee() {
		return this.getProperty(PROPERTY_CONSIGNEE);
	}

	/**
	 * 设置-收货人
	 * 
	 * @param value 值
	 */
	public final void setConsignee(String value) {
		this.setProperty(PROPERTY_CONSIGNEE, value);
	}

	/**
	 * 属性名称-街道
	 */
	private static final String PROPERTY_STREET_NAME = "Street";

	/**
	 * 街道 属性
	 */
	@DbField(name = "Street", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_STREET = registerProperty(PROPERTY_STREET_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-街道
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STREET_NAME)
	public final String getStreet() {
		return this.getProperty(PROPERTY_STREET);
	}

	/**
	 * 设置-街道
	 * 
	 * @param value 值
	 */
	public final void setStreet(String value) {
		this.setProperty(PROPERTY_STREET, value);
	}

	/**
	 * 属性名称-县/区
	 */
	private static final String PROPERTY_DISTRICT_NAME = "District";

	/**
	 * 县/区 属性
	 */
	@DbField(name = "District", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRICT = registerProperty(PROPERTY_DISTRICT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-县/区
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRICT_NAME)
	public final String getDistrict() {
		return this.getProperty(PROPERTY_DISTRICT);
	}

	/**
	 * 设置-县/区
	 * 
	 * @param value 值
	 */
	public final void setDistrict(String value) {
		this.setProperty(PROPERTY_DISTRICT, value);
	}

	/**
	 * 属性名称-市
	 */
	private static final String PROPERTY_CITY_NAME = "City";

	/**
	 * 市 属性
	 */
	@DbField(name = "City", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CITY = registerProperty(PROPERTY_CITY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-市
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CITY_NAME)
	public final String getCity() {
		return this.getProperty(PROPERTY_CITY);
	}

	/**
	 * 设置-市
	 * 
	 * @param value 值
	 */
	public final void setCity(String value) {
		this.setProperty(PROPERTY_CITY, value);
	}

	/**
	 * 属性名称-省
	 */
	private static final String PROPERTY_PROVINCE_NAME = "Province";

	/**
	 * 省 属性
	 */
	@DbField(name = "Province", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_PROVINCE = registerProperty(PROPERTY_PROVINCE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-省
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PROVINCE_NAME)
	public final String getProvince() {
		return this.getProperty(PROPERTY_PROVINCE);
	}

	/**
	 * 设置-省
	 * 
	 * @param value 值
	 */
	public final void setProvince(String value) {
		this.setProperty(PROPERTY_PROVINCE, value);
	}

	/**
	 * 属性名称-国
	 */
	private static final String PROPERTY_COUNTRY_NAME = "Country";

	/**
	 * 国 属性
	 */
	@DbField(name = "Country", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_COUNTRY = registerProperty(PROPERTY_COUNTRY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-国
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_COUNTRY_NAME)
	public final String getCountry() {
		return this.getProperty(PROPERTY_COUNTRY);
	}

	/**
	 * 设置-国
	 * 
	 * @param value 值
	 */
	public final void setCountry(String value) {
		this.setProperty(PROPERTY_COUNTRY, value);
	}

	/**
	 * 属性名称-邮编
	 */
	private static final String PROPERTY_ZIPCODE_NAME = "ZipCode";

	/**
	 * 邮编 属性
	 */
	@DbField(name = "ZipCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ZIPCODE = registerProperty(PROPERTY_ZIPCODE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-邮编
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ZIPCODE_NAME)
	public final String getZipCode() {
		return this.getProperty(PROPERTY_ZIPCODE);
	}

	/**
	 * 设置-邮编
	 * 
	 * @param value 值
	 */
	public final void setZipCode(String value) {
		this.setProperty(PROPERTY_ZIPCODE, value);
	}

	/**
	 * 属性名称-联系电话
	 */
	private static final String PROPERTY_MOBILEPHONE_NAME = "MobilePhone";

	/**
	 * 联系电话 属性
	 */
	@DbField(name = "Phone", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_MOBILEPHONE = registerProperty(PROPERTY_MOBILEPHONE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-联系电话
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_MOBILEPHONE_NAME)
	public final String getMobilePhone() {
		return this.getProperty(PROPERTY_MOBILEPHONE);
	}

	/**
	 * 设置-联系电话
	 * 
	 * @param value 值
	 */
	public final void setMobilePhone(String value) {
		this.setProperty(PROPERTY_MOBILEPHONE, value);
	}

	/**
	 * 属性名称-电话
	 */
	private static final String PROPERTY_TELEPHONE_NAME = "Telephone";

	/**
	 * 电话 属性
	 */
	@DbField(name = "Telephone", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TELEPHONE = registerProperty(PROPERTY_TELEPHONE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-电话
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TELEPHONE_NAME)
	public final String getTelephone() {
		return this.getProperty(PROPERTY_TELEPHONE);
	}

	/**
	 * 设置-电话
	 * 
	 * @param value 值
	 */
	public final void setTelephone(String value) {
		this.setProperty(PROPERTY_TELEPHONE, value);
	}

	/**
	 * 属性名称-备注 1
	 */
	private static final String PROPERTY_REMARK1_NAME = "Remark1";

	/**
	 * 备注 1 属性
	 */
	@DbField(name = "Notes1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REMARK1 = registerProperty(PROPERTY_REMARK1_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注 1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARK1_NAME)
	public final String getRemark1() {
		return this.getProperty(PROPERTY_REMARK1);
	}

	/**
	 * 设置-备注 1
	 * 
	 * @param value 值
	 */
	public final void setRemark1(String value) {
		this.setProperty(PROPERTY_REMARK1, value);
	}

	/**
	 * 属性名称-备注 2
	 */
	private static final String PROPERTY_REMARK2_NAME = "Remark2";

	/**
	 * 备注 2 属性
	 */
	@DbField(name = "Notes2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REMARK2 = registerProperty(PROPERTY_REMARK2_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注 2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARK2_NAME)
	public final String getRemark2() {
		return this.getProperty(PROPERTY_REMARK2);
	}

	/**
	 * 设置-备注 2
	 * 
	 * @param value 值
	 */
	public final void setRemark2(String value) {
		this.setProperty(PROPERTY_REMARK2, value);
	}

	/**
	 * 属性名称-费用
	 */
	private static final String PROPERTY_EXPENSE_NAME = "Expense";

	/**
	 * 费用 属性
	 */
	@DbField(name = "Expense", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_EXPENSE = registerProperty(PROPERTY_EXPENSE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-费用
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_EXPENSE_NAME)
	public final BigDecimal getExpense() {
		return this.getProperty(PROPERTY_EXPENSE);
	}

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	public final void setExpense(BigDecimal value) {
		this.setProperty(PROPERTY_EXPENSE, value);
	}

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	public final void setExpense(String value) {
		this.setExpense(Decimal.valueOf(value));
	}

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	public final void setExpense(int value) {
		this.setExpense(Decimal.valueOf(value));
	}

	/**
	 * 设置-费用
	 * 
	 * @param value 值
	 */
	public final void setExpense(double value) {
		this.setExpense(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-货币
	 */
	private static final String PROPERTY_CURRENCY_NAME = "Currency";

	/**
	 * 货币 属性
	 */
	@DbField(name = "Currency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CURRENCY = registerProperty(PROPERTY_CURRENCY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CURRENCY_NAME)
	public final String getCurrency() {
		return this.getProperty(PROPERTY_CURRENCY);
	}

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	public final void setCurrency(String value) {
		this.setProperty(PROPERTY_CURRENCY, value);
	}

	/**
	 * 属性名称-汇率
	 */
	private static final String PROPERTY_RATE_NAME = "Rate";

	/**
	 * 汇率 属性
	 */
	@DbField(name = "Rate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_RATE = registerProperty(PROPERTY_RATE_NAME, BigDecimal.class,
			MY_CLASS);

	/**
	 * 获取-汇率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_RATE_NAME)
	public final BigDecimal getRate() {
		return this.getProperty(PROPERTY_RATE);
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	public final void setRate(BigDecimal value) {
		this.setProperty(PROPERTY_RATE, value);
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	public final void setRate(String value) {
		this.setRate(Decimal.valueOf(value));
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	public final void setRate(int value) {
		this.setRate(Decimal.valueOf(value));
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	public final void setRate(double value) {
		this.setRate(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-快递单号
	 */
	private static final String PROPERTY_TRACKINGNUMBER_NAME = "TrackingNumber";

	/**
	 * 快递单号 属性
	 */
	@DbField(name = "Tracking", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TRACKINGNUMBER = registerProperty(PROPERTY_TRACKINGNUMBER_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-快递单号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TRACKINGNUMBER_NAME)
	public final String getTrackingNumber() {
		return this.getProperty(PROPERTY_TRACKINGNUMBER);
	}

	/**
	 * 设置-快递单号
	 * 
	 * @param value 值
	 */
	public final void setTrackingNumber(String value) {
		this.setProperty(PROPERTY_TRACKINGNUMBER, value);
	}

	/**
	 * 属性名称-税定义
	 */
	private static final String PROPERTY_TAX_NAME = "Tax";

	/**
	 * 税定义 属性
	 */
	@DbField(name = "Tax", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TAX = registerProperty(PROPERTY_TAX_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-税定义
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAX_NAME)
	public final String getTax() {
		return this.getProperty(PROPERTY_TAX);
	}

	/**
	 * 设置-税定义
	 * 
	 * @param value 值
	 */
	public final void setTax(String value) {
		this.setProperty(PROPERTY_TAX, value);
	}

	/**
	 * 属性名称-税率
	 */
	private static final String PROPERTY_TAXRATE_NAME = "TaxRate";

	/**
	 * 税率 属性
	 */
	@DbField(name = "TaxRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_TAXRATE = registerProperty(PROPERTY_TAXRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-税率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAXRATE_NAME)
	public final BigDecimal getTaxRate() {
		return this.getProperty(PROPERTY_TAXRATE);
	}

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	public final void setTaxRate(BigDecimal value) {
		this.setProperty(PROPERTY_TAXRATE, value);
	}

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	public final void setTaxRate(String value) {
		this.setTaxRate(Decimal.valueOf(value));
	}

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	public final void setTaxRate(int value) {
		this.setTaxRate(Decimal.valueOf(value));
	}

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	public final void setTaxRate(double value) {
		this.setTaxRate(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-税总额
	 */
	private static final String PROPERTY_TAXTOTAL_NAME = "TaxTotal";

	/**
	 * 税总额 属性
	 */
	@DbField(name = "TaxTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_TAXTOTAL = registerProperty(PROPERTY_TAXTOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-税总额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAXTOTAL_NAME)
	public final BigDecimal getTaxTotal() {
		return this.getProperty(PROPERTY_TAXTOTAL);
	}

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	public final void setTaxTotal(BigDecimal value) {
		this.setProperty(PROPERTY_TAXTOTAL, value);
	}

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	public final void setTaxTotal(String value) {
		this.setTaxTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	public final void setTaxTotal(int value) {
		this.setTaxTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	public final void setTaxTotal(double value) {
		this.setTaxTotal(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-税前费用
	 */
	private static final String PROPERTY_PRETAXEXPENSE_NAME = "PreTaxExpense";

	/**
	 * 税前费用 属性
	 */
	@DbField(name = "PreTaxExpense", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_PRETAXEXPENSE = registerProperty(PROPERTY_PRETAXEXPENSE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-税前费用
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PRETAXEXPENSE_NAME)
	public final BigDecimal getPreTaxExpense() {
		return this.getProperty(PROPERTY_PRETAXEXPENSE);
	}

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	public final void setPreTaxExpense(BigDecimal value) {
		this.setProperty(PROPERTY_PRETAXEXPENSE, value);
	}

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	public final void setPreTaxExpense(String value) {
		this.setPreTaxExpense(Decimal.valueOf(value));
	}

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	public final void setPreTaxExpense(int value) {
		this.setPreTaxExpense(Decimal.valueOf(value));
	}

	/**
	 * 设置-税前费用
	 * 
	 * @param value 值
	 */
	public final void setPreTaxExpense(double value) {
		this.setPreTaxExpense(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-对象编号
	 */
	private static final String PROPERTY_OBJECTKEY_NAME = "ObjectKey";

	/**
	 * 对象编号 属性
	 */
	@DbField(name = "ObjectKey", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_OBJECTKEY = registerProperty(PROPERTY_OBJECTKEY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTKEY_NAME)
	public final Integer getObjectKey() {
		return this.getProperty(PROPERTY_OBJECTKEY);
	}

	/**
	 * 设置-对象编号
	 * 
	 * @param value 值
	 */
	public final void setObjectKey(Integer value) {
		this.setProperty(PROPERTY_OBJECTKEY, value);
	}

	/**
	 * 属性名称-对象类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 对象类型 属性
	 */
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	 * 设置-对象类型
	 * 
	 * @param value 值
	 */
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	 * 属性名称-创建日期
	 */
	private static final String PROPERTY_CREATEDATE_NAME = "CreateDate";

	/**
	 * 创建日期 属性
	 */
	@DbField(name = "CreateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_CREATEDATE = registerProperty(PROPERTY_CREATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEDATE_NAME)
	public final DateTime getCreateDate() {
		return this.getProperty(PROPERTY_CREATEDATE);
	}

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	public final void setCreateDate(DateTime value) {
		this.setProperty(PROPERTY_CREATEDATE, value);
	}

	/**
	 * 属性名称-创建时间
	 */
	private static final String PROPERTY_CREATETIME_NAME = "CreateTime";

	/**
	 * 创建时间 属性
	 */
	@DbField(name = "CreateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_CREATETIME = registerProperty(PROPERTY_CREATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATETIME_NAME)
	public final Short getCreateTime() {
		return this.getProperty(PROPERTY_CREATETIME);
	}

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	public final void setCreateTime(Short value) {
		this.setProperty(PROPERTY_CREATETIME, value);
	}

	/**
	 * 属性名称-修改日期
	 */
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	 * 修改日期 属性
	 */
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	 * 属性名称-修改时间
	 */
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	 * 修改时间 属性
	 */
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
	}

	/**
	 * 属性名称-实例号（版本）
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 实例号（版本） 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-实例号（版本）
	 * 
	 * @param value 值
	 */
	public final void setLogInst(Integer value) {
		this.setProperty(PROPERTY_LOGINST, value);
	}

	/**
	 * 属性名称-服务系列
	 */
	private static final String PROPERTY_SERIES_NAME = "Series";

	/**
	 * 服务系列 属性
	 */
	@DbField(name = "Series", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_SERIES = registerProperty(PROPERTY_SERIES_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SERIES_NAME)
	public final Integer getSeries() {
		return this.getProperty(PROPERTY_SERIES);
	}

	/**
	 * 设置-服务系列
	 * 
	 * @param value 值
	 */
	public final void setSeries(Integer value) {
		this.setProperty(PROPERTY_SERIES, value);
	}

	/**
	 * 属性名称-数据源
	 */
	private static final String PROPERTY_DATASOURCE_NAME = "DataSource";

	/**
	 * 数据源 属性
	 */
	@DbField(name = "DataSource", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DATASOURCE = registerProperty(PROPERTY_DATASOURCE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATASOURCE_NAME)
	public final String getDataSource() {
		return this.getProperty(PROPERTY_DATASOURCE);
	}

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	public final void setDataSource(String value) {
		this.setProperty(PROPERTY_DATASOURCE, value);
	}

	/**
	 * 属性名称-创建用户
	 */
	private static final String PROPERTY_CREATEUSERSIGN_NAME = "CreateUserSign";

	/**
	 * 创建用户 属性
	 */
	@DbField(name = "Creator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_CREATEUSERSIGN = registerProperty(PROPERTY_CREATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEUSERSIGN_NAME)
	public final Integer getCreateUserSign() {
		return this.getProperty(PROPERTY_CREATEUSERSIGN);
	}

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	public final void setCreateUserSign(Integer value) {
		this.setProperty(PROPERTY_CREATEUSERSIGN, value);
	}

	/**
	 * 属性名称-修改用户
	 */
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	 * 修改用户 属性
	 */
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	 * 设置-修改用户
	 * 
	 * @param value 值
	 */
	public final void setUpdateUserSign(Integer value) {
		this.setProperty(PROPERTY_UPDATEUSERSIGN, value);
	}

	/**
	 * 属性名称-创建动作标识
	 */
	private static final String PROPERTY_CREATEACTIONID_NAME = "CreateActionId";

	/**
	 * 创建动作标识 属性
	 */
	@DbField(name = "CreateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CREATEACTIONID = registerProperty(PROPERTY_CREATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEACTIONID_NAME)
	public final String getCreateActionId() {
		return this.getProperty(PROPERTY_CREATEACTIONID);
	}

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	public final void setCreateActionId(String value) {
		this.setProperty(PROPERTY_CREATEACTIONID, value);
	}

	/**
	 * 属性名称-更新动作标识
	 */
	private static final String PROPERTY_UPDATEACTIONID_NAME = "UpdateActionId";

	/**
	 * 更新动作标识 属性
	 */
	@DbField(name = "UpdateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_UPDATEACTIONID = registerProperty(PROPERTY_UPDATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEACTIONID_NAME)
	public final String getUpdateActionId() {
		return this.getProperty(PROPERTY_UPDATEACTIONID);
	}

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	public final void setUpdateActionId(String value) {
		this.setProperty(PROPERTY_UPDATEACTIONID, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setShippingStatus(emShippingStatus.WAITING);
		this.setName("--");
	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] { // 注册的业务规则
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_TAXRATE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_EXPENSE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_PRETAXEXPENSE), // 不能低于0
				// 计算税前费用 = 税后费用 * 税率
				new BusinessRuleDeductionTaxPrice(PROPERTY_TAXRATE, PROPERTY_PRETAXEXPENSE, PROPERTY_EXPENSE),
				// 计算税总额 = 税后费用 - 税前费用
				new BusinessRuleSubtraction(PROPERTY_TAXTOTAL, PROPERTY_EXPENSE, PROPERTY_PRETAXEXPENSE),
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_TAXTOTAL), // 不能低于0

		};
	}

}
