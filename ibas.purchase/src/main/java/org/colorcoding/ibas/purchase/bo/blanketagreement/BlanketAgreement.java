package org.colorcoding.ibas.purchase.bo.blanketagreement;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.data.IProjectData;
import org.colorcoding.ibas.bobas.approval.IApprovalData;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOSeriesKey;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.bo.IBOTagDeleted;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.ownership.IDataOwnership;
import org.colorcoding.ibas.bobas.period.IPeriodData;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleDocumentStatus;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequired;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.data.emAgreementMethod;
import org.colorcoding.ibas.purchase.data.emAgreementType;
import org.colorcoding.ibas.purchase.data.emPriceMode;

/**
 * 一揽子协议
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = BlanketAgreement.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = BlanketAgreement.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = BlanketAgreement.BUSINESS_OBJECT_CODE)
public class BlanketAgreement extends BusinessObject<BlanketAgreement> implements IBlanketAgreement, IDataOwnership,
		IApprovalData, IPeriodData, IProjectData, IBOTagDeleted, IBOTagCanceled, IBOSeriesKey, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -1082872931019989045L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = BlanketAgreement.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_PH_OBKA";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_PH_BLANKETAGT";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "BlanketAgreement";

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
	 * 属性名称-单据编码
	 */
	private static final String PROPERTY_DOCNUM_NAME = "DocNum";

	/**
	 * 期间编号 属性
	 */
	@DbField(name = "DocNum", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DOCNUM = registerProperty(PROPERTY_DOCNUM_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-单据编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCNUM_NAME)
	public final String getDocNum() {
		return this.getProperty(PROPERTY_DOCNUM);
	}

	/**
	 * 设置-单据编码
	 * 
	 * @param value 值
	 */
	public final void setDocNum(String value) {
		this.setProperty(PROPERTY_DOCNUM, value);
	}

	/**
	 * 属性名称-期间
	 */
	private static final String PROPERTY_PERIOD_NAME = "Period";

	/**
	 * 期间 属性
	 */
	@DbField(name = "Period", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_PERIOD = registerProperty(PROPERTY_PERIOD_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-期间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PERIOD_NAME)
	public final Integer getPeriod() {
		return this.getProperty(PROPERTY_PERIOD);
	}

	/**
	 * 设置-期间
	 * 
	 * @param value 值
	 */
	public final void setPeriod(Integer value) {
		this.setProperty(PROPERTY_PERIOD, value);
	}

	/**
	 * 属性名称-取消
	 */
	private static final String PROPERTY_CANCELED_NAME = "Canceled";

	/**
	 * 取消 属性
	 */
	@DbField(name = "Canceled", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_CANCELED = registerProperty(PROPERTY_CANCELED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-取消
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CANCELED_NAME)
	public final emYesNo getCanceled() {
		return this.getProperty(PROPERTY_CANCELED);
	}

	/**
	 * 设置-取消
	 * 
	 * @param value 值
	 */
	public final void setCanceled(emYesNo value) {
		this.setProperty(PROPERTY_CANCELED, value);
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
	 * 属性名称-审批状态
	 */
	private static final String PROPERTY_APPROVALSTATUS_NAME = "ApprovalStatus";

	/**
	 * 审批状态 属性
	 */
	@DbField(name = "ApvlStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emApprovalStatus> PROPERTY_APPROVALSTATUS = registerProperty(
			PROPERTY_APPROVALSTATUS_NAME, emApprovalStatus.class, MY_CLASS);

	/**
	 * 获取-审批状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_APPROVALSTATUS_NAME)
	public final emApprovalStatus getApprovalStatus() {
		return this.getProperty(PROPERTY_APPROVALSTATUS);
	}

	/**
	 * 设置-审批状态
	 * 
	 * @param value 值
	 */
	public final void setApprovalStatus(emApprovalStatus value) {
		this.setProperty(PROPERTY_APPROVALSTATUS, value);
	}

	/**
	 * 属性名称-单据状态
	 */
	private static final String PROPERTY_DOCUMENTSTATUS_NAME = "DocumentStatus";

	/**
	 * 单据状态 属性
	 */
	@DbField(name = "DocStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emDocumentStatus> PROPERTY_DOCUMENTSTATUS = registerProperty(
			PROPERTY_DOCUMENTSTATUS_NAME, emDocumentStatus.class, MY_CLASS);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTSTATUS_NAME)
	public final emDocumentStatus getDocumentStatus() {
		return this.getProperty(PROPERTY_DOCUMENTSTATUS);
	}

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	public final void setDocumentStatus(emDocumentStatus value) {
		this.setProperty(PROPERTY_DOCUMENTSTATUS, value);
	}

	/**
	 * 属性名称-对象类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 对象类型 属性
	 */
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-版本
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 版本 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-版本
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
	@DbField(name = "Series", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-数据所有者
	 */
	private static final String PROPERTY_DATAOWNER_NAME = "DataOwner";

	/**
	 * 数据所有者 属性
	 */
	@DbField(name = "DataOwner", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_DATAOWNER = registerProperty(PROPERTY_DATAOWNER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATAOWNER_NAME)
	public final Integer getDataOwner() {
		return this.getProperty(PROPERTY_DATAOWNER);
	}

	/**
	 * 设置-数据所有者
	 * 
	 * @param value 值
	 */
	public final void setDataOwner(Integer value) {
		this.setProperty(PROPERTY_DATAOWNER, value);
	}

	/**
	 * 属性名称-团队成员
	 */
	private static final String PROPERTY_TEAMMEMBERS_NAME = "TeamMembers";

	/**
	 * 团队成员 属性
	 */
	@DbField(name = "TeamMembers", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_TEAMMEMBERS = registerProperty(PROPERTY_TEAMMEMBERS_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-团队成员
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TEAMMEMBERS_NAME)
	public final String getTeamMembers() {
		return this.getProperty(PROPERTY_TEAMMEMBERS);
	}

	/**
	 * 设置-团队成员
	 * 
	 * @param value 值
	 */
	public final void setTeamMembers(String value) {
		this.setProperty(PROPERTY_TEAMMEMBERS, value);
	}

	/**
	 * 属性名称-数据所属组织
	 */
	private static final String PROPERTY_ORGANIZATION_NAME = "Organization";

	/**
	 * 数据所属组织 属性
	 */
	@DbField(name = "OrgCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ORGANIZATION = registerProperty(PROPERTY_ORGANIZATION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORGANIZATION_NAME)
	public final String getOrganization() {
		return this.getProperty(PROPERTY_ORGANIZATION);
	}

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value 值
	 */
	public final void setOrganization(String value) {
		this.setProperty(PROPERTY_ORGANIZATION, value);
	}

	/**
	 * 属性名称-过账日期
	 */
	private static final String PROPERTY_POSTINGDATE_NAME = "PostingDate";

	/**
	 * 过账日期 属性
	 */
	@DbField(name = "DocDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_POSTINGDATE = registerProperty(PROPERTY_POSTINGDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-过账日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_POSTINGDATE_NAME)
	public final DateTime getPostingDate() {
		return this.getProperty(PROPERTY_POSTINGDATE);
	}

	/**
	 * 设置-过账日期
	 * 
	 * @param value 值
	 */
	public final void setPostingDate(DateTime value) {
		this.setProperty(PROPERTY_POSTINGDATE, value);
	}

	/**
	 * 属性名称-到期日
	 */
	private static final String PROPERTY_DELIVERYDATE_NAME = "DeliveryDate";

	/**
	 * 到期日 属性
	 */
	@DbField(name = "DocDueDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_DELIVERYDATE = registerProperty(PROPERTY_DELIVERYDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-到期日
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DELIVERYDATE_NAME)
	public final DateTime getDeliveryDate() {
		return this.getProperty(PROPERTY_DELIVERYDATE);
	}

	/**
	 * 设置-到期日
	 * 
	 * @param value 值
	 */
	public final void setDeliveryDate(DateTime value) {
		this.setProperty(PROPERTY_DELIVERYDATE, value);
	}

	/**
	 * 属性名称-凭证日期
	 */
	private static final String PROPERTY_DOCUMENTDATE_NAME = "DocumentDate";

	/**
	 * 凭证日期 属性
	 */
	@DbField(name = "TaxDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_DOCUMENTDATE = registerProperty(PROPERTY_DOCUMENTDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-凭证日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTDATE_NAME)
	public final DateTime getDocumentDate() {
		return this.getProperty(PROPERTY_DOCUMENTDATE);
	}

	/**
	 * 设置-凭证日期
	 * 
	 * @param value 值
	 */
	public final void setDocumentDate(DateTime value) {
		this.setProperty(PROPERTY_DOCUMENTDATE, value);
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
	 * 属性名称-备注
	 */
	private static final String PROPERTY_REMARKS_NAME = "Remarks";

	/**
	 * 备注 属性
	 */
	@DbField(name = "Remarks", type = DbFieldType.MEMO, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_REMARKS = registerProperty(PROPERTY_REMARKS_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARKS_NAME)
	public final String getRemarks() {
		return this.getProperty(PROPERTY_REMARKS);
	}

	/**
	 * 设置-备注
	 * 
	 * @param value 值
	 */
	public final void setRemarks(String value) {
		this.setProperty(PROPERTY_REMARKS, value);
	}

	/**
	 * 属性名称-已引用
	 */
	private static final String PROPERTY_REFERENCED_NAME = "Referenced";

	/**
	 * 已引用 属性
	 */
	@DbField(name = "Refed", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_REFERENCED = registerProperty(PROPERTY_REFERENCED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCED_NAME)
	public final emYesNo getReferenced() {
		return this.getProperty(PROPERTY_REFERENCED);
	}

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	public final void setReferenced(emYesNo value) {
		this.setProperty(PROPERTY_REFERENCED, value);
	}

	/**
	 * 属性名称-已删除
	 */
	private static final String PROPERTY_DELETED_NAME = "Deleted";

	/**
	 * 已删除 属性
	 */
	@DbField(name = "Deleted", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_DELETED = registerProperty(PROPERTY_DELETED_NAME, emYesNo.class,
			MY_CLASS);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DELETED_NAME)
	public final emYesNo getDeleted() {
		return this.getProperty(PROPERTY_DELETED);
	}

	/**
	 * 设置-已删除
	 * 
	 * @param value 值
	 */
	public final void setDeleted(emYesNo value) {
		this.setProperty(PROPERTY_DELETED, value);
	}

	/**
	 * 属性名称-供应商代码
	 */
	private static final String PROPERTY_SUPPLIERCODE_NAME = "SupplierCode";

	/**
	 * 供应商代码 属性
	 */
	@DbField(name = "CardCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_SUPPLIERCODE = registerProperty(PROPERTY_SUPPLIERCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-供应商代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SUPPLIERCODE_NAME)
	public final String getSupplierCode() {
		return this.getProperty(PROPERTY_SUPPLIERCODE);
	}

	/**
	 * 设置-供应商代码
	 * 
	 * @param value 值
	 */
	public final void setSupplierCode(String value) {
		this.setProperty(PROPERTY_SUPPLIERCODE, value);
	}

	/**
	 * 属性名称-供应商名称
	 */
	private static final String PROPERTY_SUPPLIERNAME_NAME = "SupplierName";

	/**
	 * 供应商名称 属性
	 */
	@DbField(name = "CardName", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_SUPPLIERNAME = registerProperty(PROPERTY_SUPPLIERNAME_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-供应商名称
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SUPPLIERNAME_NAME)
	public final String getSupplierName() {
		return this.getProperty(PROPERTY_SUPPLIERNAME);
	}

	/**
	 * 设置-供应商名称
	 * 
	 * @param value 值
	 */
	public final void setSupplierName(String value) {
		this.setProperty(PROPERTY_SUPPLIERNAME, value);
	}

	/**
	 * 属性名称-联系人
	 */
	private static final String PROPERTY_CONTACTPERSON_NAME = "ContactPerson";

	/**
	 * 联系人 属性
	 */
	@DbField(name = "CntctCode", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<Integer> PROPERTY_CONTACTPERSON = registerProperty(PROPERTY_CONTACTPERSON_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-联系人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CONTACTPERSON_NAME)
	public final Integer getContactPerson() {
		return this.getProperty(PROPERTY_CONTACTPERSON);
	}

	/**
	 * 设置-联系人
	 * 
	 * @param value 值
	 */
	public final void setContactPerson(Integer value) {
		this.setProperty(PROPERTY_CONTACTPERSON, value);
	}

	/**
	 * 属性名称-付款条款代码
	 */
	private static final String PROPERTY_PAYMENTCODE_NAME = "PaymentCode";

	/**
	 * 付款条款代码 属性
	 */
	@DbField(name = "PaymentCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_PAYMENTCODE = registerProperty(PROPERTY_PAYMENTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-付款条款代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PAYMENTCODE_NAME)
	public final String getPaymentCode() {
		return this.getProperty(PROPERTY_PAYMENTCODE);
	}

	/**
	 * 设置-付款条款代码
	 * 
	 * @param value 值
	 */
	public final void setPaymentCode(String value) {
		this.setProperty(PROPERTY_PAYMENTCODE, value);
	}

	/**
	 * 属性名称-项目代码
	 */
	private static final String PROPERTY_PROJECT_NAME = "Project";

	/**
	 * 项目代码 属性
	 */
	@DbField(name = "Project", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_PROJECT = registerProperty(PROPERTY_PROJECT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-项目代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PROJECT_NAME)
	public final String getProject() {
		return this.getProperty(PROPERTY_PROJECT);
	}

	/**
	 * 设置-项目代码
	 * 
	 * @param value 值
	 */
	public final void setProject(String value) {
		this.setProperty(PROPERTY_PROJECT, value);
	}

	/**
	 * 属性名称-单据类型
	 */
	private static final String PROPERTY_ORDERTYPE_NAME = "OrderType";

	/**
	 * 单据类型 属性
	 */
	@DbField(name = "OrderType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ORDERTYPE = registerProperty(PROPERTY_ORDERTYPE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-单据类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORDERTYPE_NAME)
	public final String getOrderType() {
		return this.getProperty(PROPERTY_ORDERTYPE);
	}

	/**
	 * 设置-单据类型
	 * 
	 * @param value 值
	 */
	public final void setOrderType(String value) {
		this.setProperty(PROPERTY_ORDERTYPE, value);
	}

	/**
	 * 属性名称-描述
	 */
	private static final String PROPERTY_DESCRIPTION_NAME = "Description";

	/**
	 * 描述 属性
	 */
	@DbField(name = "Description", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_DESCRIPTION = registerProperty(PROPERTY_DESCRIPTION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-描述
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DESCRIPTION_NAME)
	public final String getDescription() {
		return this.getProperty(PROPERTY_DESCRIPTION);
	}

	/**
	 * 设置-描述
	 * 
	 * @param value 值
	 */
	public final void setDescription(String value) {
		this.setProperty(PROPERTY_DESCRIPTION, value);
	}

	/**
	 * 属性名称-开始日期
	 */
	private static final String PROPERTY_STARTDATE_NAME = "StartDate";

	/**
	 * 开始日期 属性
	 */
	@DbField(name = "StartDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_STARTDATE = registerProperty(PROPERTY_STARTDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-开始日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STARTDATE_NAME)
	public final DateTime getStartDate() {
		return this.getProperty(PROPERTY_STARTDATE);
	}

	/**
	 * 设置-开始日期
	 * 
	 * @param value 值
	 */
	public final void setStartDate(DateTime value) {
		this.setProperty(PROPERTY_STARTDATE, value);
	}

	/**
	 * 属性名称-结束日期
	 */
	private static final String PROPERTY_ENDDATE_NAME = "EndDate";

	/**
	 * 结束日期 属性
	 */
	@DbField(name = "EndDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_ENDDATE = registerProperty(PROPERTY_ENDDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-结束日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ENDDATE_NAME)
	public final DateTime getEndDate() {
		return this.getProperty(PROPERTY_ENDDATE);
	}

	/**
	 * 设置-结束日期
	 * 
	 * @param value 值
	 */
	public final void setEndDate(DateTime value) {
		this.setProperty(PROPERTY_ENDDATE, value);
	}

	/**
	 * 属性名称-签署日期
	 */
	private static final String PROPERTY_SIGNDATE_NAME = "SignDate";

	/**
	 * 签署日期 属性
	 */
	@DbField(name = "SignDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_SIGNDATE = registerProperty(PROPERTY_SIGNDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-签署日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SIGNDATE_NAME)
	public final DateTime getSignDate() {
		return this.getProperty(PROPERTY_SIGNDATE);
	}

	/**
	 * 设置-签署日期
	 * 
	 * @param value 值
	 */
	public final void setSignDate(DateTime value) {
		this.setProperty(PROPERTY_SIGNDATE, value);
	}

	/**
	 * 属性名称-终止日期
	 */
	private static final String PROPERTY_TERMINATIONDATE_NAME = "TerminationDate";

	/**
	 * 终止日期 属性
	 */
	@DbField(name = "TermDate", type = DbFieldType.DATE, table = DB_TABLE_NAME)
	public static final IPropertyInfo<DateTime> PROPERTY_TERMINATIONDATE = registerProperty(
			PROPERTY_TERMINATIONDATE_NAME, DateTime.class, MY_CLASS);

	/**
	 * 获取-终止日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TERMINATIONDATE_NAME)
	public final DateTime getTerminationDate() {
		return this.getProperty(PROPERTY_TERMINATIONDATE);
	}

	/**
	 * 设置-终止日期
	 * 
	 * @param value 值
	 */
	public final void setTerminationDate(DateTime value) {
		this.setProperty(PROPERTY_TERMINATIONDATE, value);
	}

	/**
	 * 属性名称-协议方法
	 */
	private static final String PROPERTY_AGREEMENTMETHOD_NAME = "AgreementMethod";

	/**
	 * 协议方法 属性
	 */
	@DbField(name = "AgrtMethod", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emAgreementMethod> PROPERTY_AGREEMENTMETHOD = registerProperty(
			PROPERTY_AGREEMENTMETHOD_NAME, emAgreementMethod.class, MY_CLASS);

	/**
	 * 获取-协议方法
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_AGREEMENTMETHOD_NAME)
	public final emAgreementMethod getAgreementMethod() {
		return this.getProperty(PROPERTY_AGREEMENTMETHOD);
	}

	/**
	 * 设置-协议方法
	 * 
	 * @param value 值
	 */
	public final void setAgreementMethod(emAgreementMethod value) {
		this.setProperty(PROPERTY_AGREEMENTMETHOD, value);
	}

	/**
	 * 属性名称-协议类型
	 */
	private static final String PROPERTY_AGREEMENTTYPE_NAME = "AgreementType";

	/**
	 * 协议类型 属性
	 */
	@DbField(name = "AgrtType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emAgreementType> PROPERTY_AGREEMENTTYPE = registerProperty(
			PROPERTY_AGREEMENTTYPE_NAME, emAgreementType.class, MY_CLASS);

	/**
	 * 获取-协议类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_AGREEMENTTYPE_NAME)
	public final emAgreementType getAgreementType() {
		return this.getProperty(PROPERTY_AGREEMENTTYPE);
	}

	/**
	 * 设置-协议类型
	 * 
	 * @param value 值
	 */
	public final void setAgreementType(emAgreementType value) {
		this.setProperty(PROPERTY_AGREEMENTTYPE, value);
	}

	/**
	 * 属性名称-价格方式
	 */
	private static final String PROPERTY_PRICEMODE_NAME = "PriceMode";

	/**
	 * 价格方式 属性
	 */
	@DbField(name = "PriceMode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emPriceMode> PROPERTY_PRICEMODE = registerProperty(PROPERTY_PRICEMODE_NAME,
			emPriceMode.class, MY_CLASS);

	/**
	 * 获取-价格方式
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PRICEMODE_NAME)
	public final emPriceMode getPriceMode() {
		return this.getProperty(PROPERTY_PRICEMODE);
	}

	/**
	 * 设置-价格方式
	 * 
	 * @param value 值
	 */
	public final void setPriceMode(emPriceMode value) {
		this.setProperty(PROPERTY_PRICEMODE, value);
	}

	/**
	 * 属性名称-结算概率
	 */
	private static final String PROPERTY_SETTLEMENTPROBABILITY_NAME = "SettlementProbability";

	/**
	 * 结算概率 属性
	 */
	@DbField(name = "SettPrbly", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_SETTLEMENTPROBABILITY = registerProperty(
			PROPERTY_SETTLEMENTPROBABILITY_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-结算概率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SETTLEMENTPROBABILITY_NAME)
	public final BigDecimal getSettlementProbability() {
		return this.getProperty(PROPERTY_SETTLEMENTPROBABILITY);
	}

	/**
	 * 设置-结算概率
	 * 
	 * @param value 值
	 */
	public final void setSettlementProbability(BigDecimal value) {
		this.setProperty(PROPERTY_SETTLEMENTPROBABILITY, value);
	}

	/**
	 * 属性名称-合同
	 */
	private static final String PROPERTY_AGREEMENTS_NAME = "Agreements";

	/**
	 * 合同 属性
	 */
	@DbField(name = "Agreements", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_AGREEMENTS = registerProperty(PROPERTY_AGREEMENTS_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-合同
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_AGREEMENTS_NAME)
	public final String getAgreements() {
		return this.getProperty(PROPERTY_AGREEMENTS);
	}

	/**
	 * 设置-合同
	 * 
	 * @param value 值
	 */
	public final void setAgreements(String value) {
		this.setProperty(PROPERTY_AGREEMENTS, value);
	}

	/**
	 * 属性名称-一揽子协议-项目
	 */
	private static final String PROPERTY_BLANKETAGREEMENTITEMS_NAME = "BlanketAgreementItems";

	/**
	 * 一揽子协议-项目的集合属性
	 * 
	 */
	public static final IPropertyInfo<IBlanketAgreementItems> PROPERTY_BLANKETAGREEMENTITEMS = registerProperty(
			PROPERTY_BLANKETAGREEMENTITEMS_NAME, IBlanketAgreementItems.class, MY_CLASS);

	/**
	 * 获取-一揽子协议-项目集合
	 * 
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_BLANKETAGREEMENTITEMS_NAME)
	@XmlElement(name = BlanketAgreementItem.BUSINESS_OBJECT_NAME, type = BlanketAgreementItem.class)
	public final IBlanketAgreementItems getBlanketAgreementItems() {
		return this.getProperty(PROPERTY_BLANKETAGREEMENTITEMS);
	}

	/**
	 * 设置-一揽子协议-项目集合
	 * 
	 * @param value 值
	 */
	public final void setBlanketAgreementItems(IBlanketAgreementItems value) {
		this.setProperty(PROPERTY_BLANKETAGREEMENTITEMS, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setBlanketAgreementItems(new BlanketAgreementItems(this));
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setPostingDate(DateTime.getToday());
		this.setDocumentDate(DateTime.getToday());
		this.setDeliveryDate(DateTime.getToday());
		this.setSignDate(DateTime.getToday());
		this.setStartDate(DateTime.getToday());
		this.setDocumentStatus(emDocumentStatus.RELEASED);
		this.setAgreementMethod(emAgreementMethod.ITEM);
		this.setAgreementType(emAgreementType.GENERAL);
		this.setPriceMode(emPriceMode.GROSS);
	}

	@Override
	public void reset() {
		super.reset();
		this.setDocumentStatus(emDocumentStatus.RELEASED);
		this.getBlanketAgreementItems().forEach(c -> c.setLineStatus(emDocumentStatus.RELEASED));
	}

	@Override
	public void setSeriesValue(Object value) {
		this.setDocNum(String.valueOf(value));
	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] {
				// 注册的业务规则
				new BusinessRuleRequired(PROPERTY_SUPPLIERCODE), // 要求有值
				new BusinessRuleDocumentStatus(PROPERTY_DOCUMENTSTATUS, PROPERTY_BLANKETAGREEMENTITEMS,
						BlanketAgreementItem.PROPERTY_LINESTATUS), // 使用集合元素状态
		};
	}

}
