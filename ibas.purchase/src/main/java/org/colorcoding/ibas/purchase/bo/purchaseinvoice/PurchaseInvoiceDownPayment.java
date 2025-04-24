package org.colorcoding.ibas.purchase.bo.purchaseinvoice;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicsHost;
import org.colorcoding.ibas.bobas.db.DbField;
import org.colorcoding.ibas.bobas.db.DbFieldType;
import org.colorcoding.ibas.businesspartner.logic.IDocumentPaidTotalContract;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购发票-预付款
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = PurchaseInvoiceDownPayment.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
public class PurchaseInvoiceDownPayment extends BusinessObject<PurchaseInvoiceDownPayment>
		implements IPurchaseInvoiceDownPayment, IBusinessLogicsHost, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 7212611461007694631L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = PurchaseInvoiceDownPayment.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_PH_INV9";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_PH_PURCHINVOICE";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseInvoiceDownPayment";

	/**
	 * 属性名称-凭证编号
	 */
	private static final String PROPERTY_DOCENTRY_NAME = "DocEntry";

	/**
	 * 凭证编号 属性
	 */
	@DbField(name = "DocEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_DOCENTRY = registerProperty(PROPERTY_DOCENTRY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-凭证编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCENTRY_NAME)
	public final Integer getDocEntry() {
		return this.getProperty(PROPERTY_DOCENTRY);
	}

	/**
	 * 设置-凭证编号
	 * 
	 * @param value 值
	 */
	public final void setDocEntry(Integer value) {
		this.setProperty(PROPERTY_DOCENTRY, value);
	}

	/**
	 * 属性名称-行号
	 */
	private static final String PROPERTY_LINEID_NAME = "LineId";

	/**
	 * 行号 属性
	 */
	@DbField(name = "LineId", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_LINEID = registerProperty(PROPERTY_LINEID_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LINEID_NAME)
	public final Integer getLineId() {
		return this.getProperty(PROPERTY_LINEID);
	}

	/**
	 * 设置-行号
	 * 
	 * @param value 值
	 */
	public final void setLineId(Integer value) {
		this.setProperty(PROPERTY_LINEID, value);
	}

	/**
	 * 属性名称-显示顺序
	 */
	private static final String PROPERTY_VISORDER_NAME = "VisOrder";

	/**
	 * 显示顺序 属性
	 */
	@DbField(name = "VisOrder", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_VISORDER = registerProperty(PROPERTY_VISORDER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-显示顺序
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_VISORDER_NAME)
	public final Integer getVisOrder() {
		return this.getProperty(PROPERTY_VISORDER);
	}

	/**
	 * 设置-显示顺序
	 * 
	 * @param value 值
	 */
	public final void setVisOrder(Integer value) {
		this.setProperty(PROPERTY_VISORDER, value);
	}

	/**
	 * 属性名称-类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 类型 属性
	 */
	@DbField(name = "Object", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	 * 设置-类型
	 * 
	 * @param value 值
	 */
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	 * 属性名称-实例号（版本）
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 实例号（版本） 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-数据源
	 */
	private static final String PROPERTY_DATASOURCE_NAME = "DataSource";

	/**
	 * 数据源 属性
	 */
	@DbField(name = "DataSource", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-状态
	 */
	private static final String PROPERTY_STATUS_NAME = "Status";

	/**
	 * 状态 属性
	 */
	@DbField(name = "Status", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emBOStatus> PROPERTY_STATUS = registerProperty(PROPERTY_STATUS_NAME,
			emBOStatus.class, MY_CLASS);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STATUS_NAME)
	public final emBOStatus getStatus() {
		return this.getProperty(PROPERTY_STATUS);
	}

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	public final void setStatus(emBOStatus value) {
		this.setProperty(PROPERTY_STATUS, value);
	}

	/**
	 * 属性名称-单据状态
	 */
	private static final String PROPERTY_LINESTATUS_NAME = "LineStatus";

	/**
	 * 单据状态 属性
	 */
	@DbField(name = "LineStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emDocumentStatus> PROPERTY_LINESTATUS = registerProperty(PROPERTY_LINESTATUS_NAME,
			emDocumentStatus.class, MY_CLASS);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LINESTATUS_NAME)
	public final emDocumentStatus getLineStatus() {
		return this.getProperty(PROPERTY_LINESTATUS);
	}

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	public final void setLineStatus(emDocumentStatus value) {
		this.setProperty(PROPERTY_LINESTATUS, value);
	}

	/**
	 * 属性名称-创建日期
	 */
	private static final String PROPERTY_CREATEDATE_NAME = "CreateDate";

	/**
	 * 创建日期 属性
	 */
	@DbField(name = "CreateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
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
	@DbField(name = "CreateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
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
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-创建用户
	 */
	private static final String PROPERTY_CREATEUSERSIGN_NAME = "CreateUserSign";

	/**
	 * 创建用户 属性
	 */
	@DbField(name = "Creator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "CreateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "UpdateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-参考1
	 */
	private static final String PROPERTY_REFERENCE1_NAME = "Reference1";

	/**
	 * 参考1 属性
	 */
	@DbField(name = "Ref1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE1 = registerProperty(PROPERTY_REFERENCE1_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE1_NAME)
	public final String getReference1() {
		return this.getProperty(PROPERTY_REFERENCE1);
	}

	/**
	 * 设置-参考1
	 * 
	 * @param value 值
	 */
	public final void setReference1(String value) {
		this.setProperty(PROPERTY_REFERENCE1, value);
	}

	/**
	 * 属性名称-参考2
	 */
	private static final String PROPERTY_REFERENCE2_NAME = "Reference2";

	/**
	 * 参考2 属性
	 */
	@DbField(name = "Ref2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE2 = registerProperty(PROPERTY_REFERENCE2_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE2_NAME)
	public final String getReference2() {
		return this.getProperty(PROPERTY_REFERENCE2);
	}

	/**
	 * 设置-参考2
	 * 
	 * @param value 值
	 */
	public final void setReference2(String value) {
		this.setProperty(PROPERTY_REFERENCE2, value);
	}

	/**
	 * 属性名称-预付款类型
	 */
	private static final String PROPERTY_PAYMENTTYPE_NAME = "PaymentType";

	/**
	 * 预付款类型 属性
	 */
	@DbField(name = "PayType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_PAYMENTTYPE = registerProperty(PROPERTY_PAYMENTTYPE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-预付款类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTTYPE_NAME)
	public final String getPaymentType() {
		return this.getProperty(PROPERTY_PAYMENTTYPE);
	}

	/**
	 * 设置-预付款类型
	 * 
	 * @param value 值
	 */
	public final void setPaymentType(String value) {
		this.setProperty(PROPERTY_PAYMENTTYPE, value);
	}

	/**
	 * 属性名称-预付款编号
	 */
	private static final String PROPERTY_PAYMENTENTRY_NAME = "PaymentEntry";

	/**
	 * 预付款编号 属性
	 */
	@DbField(name = "PayEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_PAYMENTENTRY = registerProperty(PROPERTY_PAYMENTENTRY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-预付款编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTENTRY_NAME)
	public final Integer getPaymentEntry() {
		return this.getProperty(PROPERTY_PAYMENTENTRY);
	}

	/**
	 * 设置-预付款编号
	 * 
	 * @param value 值
	 */
	public final void setPaymentEntry(Integer value) {
		this.setProperty(PROPERTY_PAYMENTENTRY, value);
	}

	/**
	 * 属性名称-预付款行号
	 */
	private static final String PROPERTY_PAYMENTLINEID_NAME = "PaymentLineId";

	/**
	 * 预付款行号 属性
	 */
	@DbField(name = "PayLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_PAYMENTLINEID = registerProperty(PROPERTY_PAYMENTLINEID_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-预付款行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTLINEID_NAME)
	public final Integer getPaymentLineId() {
		return this.getProperty(PROPERTY_PAYMENTLINEID);
	}

	/**
	 * 设置-预付款行号
	 * 
	 * @param value 值
	 */
	public final void setPaymentLineId(Integer value) {
		this.setProperty(PROPERTY_PAYMENTLINEID, value);
	}

	/**
	 * 属性名称-预付款总计
	 */
	private static final String PROPERTY_PAYMENTTOTAL_NAME = "PaymentTotal";

	/**
	 * 预付款总计 属性
	 */
	@DbField(name = "PayTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_PAYMENTTOTAL = registerProperty(PROPERTY_PAYMENTTOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-预付款总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTTOTAL_NAME)
	public final BigDecimal getPaymentTotal() {
		return this.getProperty(PROPERTY_PAYMENTTOTAL);
	}

	/**
	 * 设置-预付款总计
	 * 
	 * @param value 值
	 */
	public final void setPaymentTotal(BigDecimal value) {
		this.setProperty(PROPERTY_PAYMENTTOTAL, value);
	}

	/**
	 * 属性名称-预付款货币
	 */
	private static final String PROPERTY_PAYMENTCURRENCY_NAME = "PaymentCurrency";

	/**
	 * 预付款货币 属性
	 */
	@DbField(name = "PayCur", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_PAYMENTCURRENCY = registerProperty(PROPERTY_PAYMENTCURRENCY_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-预付款货币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTCURRENCY_NAME)
	public final String getPaymentCurrency() {
		return this.getProperty(PROPERTY_PAYMENTCURRENCY);
	}

	/**
	 * 设置-预付款货币
	 * 
	 * @param value 值
	 */
	public final void setPaymentCurrency(String value) {
		this.setProperty(PROPERTY_PAYMENTCURRENCY, value);
	}

	/**
	 * 属性名称-预付款汇率
	 */
	private static final String PROPERTY_PAYMENTRATE_NAME = "PaymentRate";

	/**
	 * 预付款汇率 属性
	 */
	@DbField(name = "PayRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_PAYMENTRATE = registerProperty(PROPERTY_PAYMENTRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-预付款汇率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTRATE_NAME)
	public final BigDecimal getPaymentRate() {
		return this.getProperty(PROPERTY_PAYMENTRATE);
	}

	/**
	 * 设置-预付款汇率
	 * 
	 * @param value 值
	 */
	public final void setPaymentRate(BigDecimal value) {
		this.setProperty(PROPERTY_PAYMENTRATE, value);
	}

	/**
	 * 属性名称-提取金额
	 */
	private static final String PROPERTY_DRAWNTOTAL_NAME = "DrawnTotal";

	/**
	 * 提取金额 属性
	 */
	@DbField(name = "DrawnTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_DRAWNTOTAL = registerProperty(PROPERTY_DRAWNTOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-提取金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DRAWNTOTAL_NAME)
	public final BigDecimal getDrawnTotal() {
		return this.getProperty(PROPERTY_DRAWNTOTAL);
	}

	/**
	 * 设置-提取金额
	 * 
	 * @param value 值
	 */
	public final void setDrawnTotal(BigDecimal value) {
		this.setProperty(PROPERTY_DRAWNTOTAL, value);
	}

	/**
	 * 属性名称-基于类型
	 */
	private static final String PROPERTY_BASEDOCUMENTTYPE_NAME = "BaseDocumentType";

	/**
	 * 基于类型 属性
	 */
	@DbField(name = "BaseType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "BaseEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-基于行号
	 */
	private static final String PROPERTY_BASEDOCUMENTLINEID_NAME = "BaseDocumentLineId";

	/**
	 * 基于行号 属性
	 */
	@DbField(name = "BaseLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_BASEDOCUMENTLINEID = registerProperty(
			PROPERTY_BASEDOCUMENTLINEID_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-基于行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASEDOCUMENTLINEID_NAME)
	public final Integer getBaseDocumentLineId() {
		return this.getProperty(PROPERTY_BASEDOCUMENTLINEID);
	}

	/**
	 * 设置-基于行号
	 * 
	 * @param value 值
	 */
	public final void setBaseDocumentLineId(Integer value) {
		this.setProperty(PROPERTY_BASEDOCUMENTLINEID, value);
	}

	/**
	 * 属性名称-原始类型
	 */
	private static final String PROPERTY_ORIGINALDOCUMENTTYPE_NAME = "OriginalDocumentType";

	/**
	 * 原始类型 属性
	 */
	@DbField(name = "OrgnlType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ORIGINALDOCUMENTTYPE = registerProperty(
			PROPERTY_ORIGINALDOCUMENTTYPE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-原始类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORIGINALDOCUMENTTYPE_NAME)
	public final String getOriginalDocumentType() {
		return this.getProperty(PROPERTY_ORIGINALDOCUMENTTYPE);
	}

	/**
	 * 设置-原始类型
	 * 
	 * @param value 值
	 */
	public final void setOriginalDocumentType(String value) {
		this.setProperty(PROPERTY_ORIGINALDOCUMENTTYPE, value);
	}

	/**
	 * 属性名称-原始标识
	 */
	private static final String PROPERTY_ORIGINALDOCUMENTENTRY_NAME = "OriginalDocumentEntry";

	/**
	 * 原始标识 属性
	 */
	@DbField(name = "OrgnlEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_ORIGINALDOCUMENTENTRY = registerProperty(
			PROPERTY_ORIGINALDOCUMENTENTRY_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-原始标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORIGINALDOCUMENTENTRY_NAME)
	public final Integer getOriginalDocumentEntry() {
		return this.getProperty(PROPERTY_ORIGINALDOCUMENTENTRY);
	}

	/**
	 * 设置-原始标识
	 * 
	 * @param value 值
	 */
	public final void setOriginalDocumentEntry(Integer value) {
		this.setProperty(PROPERTY_ORIGINALDOCUMENTENTRY, value);
	}

	/**
	 * 属性名称-原始行号
	 */
	private static final String PROPERTY_ORIGINALDOCUMENTLINEID_NAME = "OriginalDocumentLineId";

	/**
	 * 原始行号 属性
	 */
	@DbField(name = "OrgnlLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_ORIGINALDOCUMENTLINEID = registerProperty(
			PROPERTY_ORIGINALDOCUMENTLINEID_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-原始行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORIGINALDOCUMENTLINEID_NAME)
	public final Integer getOriginalDocumentLineId() {
		return this.getProperty(PROPERTY_ORIGINALDOCUMENTLINEID);
	}

	/**
	 * 设置-原始行号
	 * 
	 * @param value 值
	 */
	public final void setOriginalDocumentLineId(Integer value) {
		this.setProperty(PROPERTY_ORIGINALDOCUMENTLINEID, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
	}

	@Override
	public IBusinessLogicContract[] getContracts() {
		return new IBusinessLogicContract[] {
				// 单据金额关闭
				new IDocumentPaidTotalContract() {

					@Override
					public String getIdentifiers() {
						return PurchaseInvoiceDownPayment.this.getIdentifiers();
					}

					@Override
					public String getBaseDocumentType() {
						return PurchaseInvoiceDownPayment.this.getPaymentType();
					}

					@Override
					public Integer getBaseDocumentEntry() {
						return PurchaseInvoiceDownPayment.this.getPaymentEntry();
					}

					@Override
					public BigDecimal getAmount() {
						return PurchaseInvoiceDownPayment.this.getDrawnTotal();
					}

					@Override
					public String getCurrency() {
						return PurchaseInvoiceDownPayment.this.getPaymentCurrency();
					}

					@Override
					public BigDecimal getRate() {
						return PurchaseInvoiceDownPayment.this.getPaymentRate();
					}
				}

		};
	}
}
