package org.colorcoding.ibas.purchase.bo.purchasecreditnote;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.logic.IJECPropertyValueGetter;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.bo.IBOTagDeleted;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicsHost;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.rule.BusinessRuleException;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleMinValue;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequired;
import org.colorcoding.ibas.materials.bo.materialbatch.IMaterialBatchItems;
import org.colorcoding.ibas.materials.bo.materialbatch.MaterialBatchItem;
import org.colorcoding.ibas.materials.bo.materialbatch.MaterialBatchItems;
import org.colorcoding.ibas.materials.bo.materialserial.IMaterialSerialItems;
import org.colorcoding.ibas.materials.bo.materialserial.MaterialSerialItem;
import org.colorcoding.ibas.materials.bo.materialserial.MaterialSerialItems;
import org.colorcoding.ibas.materials.data.Ledgers;
import org.colorcoding.ibas.materials.logic.IMaterialIssueContract;
import org.colorcoding.ibas.materials.rules.BusinessRuleCalculateInventoryQuantity;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.logic.IPurchaseOrderReturnContract;
import org.colorcoding.ibas.purchase.logic.IPurchaseReturnCreditNoteContract;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionDiscount;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionPriceQtyTotal;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionPriceTaxTotal;

/**
 * 获取-采购贷项-行
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = PurchaseCreditNoteItem.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
public class PurchaseCreditNoteItem extends BusinessObject<PurchaseCreditNoteItem> implements IPurchaseCreditNoteItem,
		IBusinessLogicsHost, IBOTagDeleted, IBOTagCanceled, IBOUserFields, IJECPropertyValueGetter {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -2914081509271315413L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = PurchaseCreditNoteItem.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_PH_RIN1";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_PH_PURCHCREDIT";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseCreditNoteItem";

	/**
	 * 属性名称-编码
	 */
	private static final String PROPERTY_DOCENTRY_NAME = "DocEntry";

	/**
	 * 编码 属性
	 */
	@DbField(name = "DocEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_DOCENTRY = registerProperty(PROPERTY_DOCENTRY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCENTRY_NAME)
	public final Integer getDocEntry() {
		return this.getProperty(PROPERTY_DOCENTRY);
	}

	/**
	 * 设置-编码
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
	@DbField(name = "VisOrder", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "Object", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * 属性名称-取消
	 */
	private static final String PROPERTY_CANCELED_NAME = "Canceled";

	/**
	 * 取消 属性
	 */
	@DbField(name = "Canceled", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "Status", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "LineStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * 属性名称-参考1
	 */
	private static final String PROPERTY_REFERENCE1_NAME = "Reference1";

	/**
	 * 参考1 属性
	 */
	@DbField(name = "Ref1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "Ref2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * 属性名称-已引用
	 */
	private static final String PROPERTY_REFERENCED_NAME = "Referenced";

	/**
	 * 已引用 属性
	 */
	@DbField(name = "Refed", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "Deleted", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * 属性名称-基于行号
	 */
	private static final String PROPERTY_BASEDOCUMENTLINEID_NAME = "BaseDocumentLineId";

	/**
	 * 基于行号 属性
	 */
	@DbField(name = "BaseLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "OrgnlType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "OrgnlEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	@DbField(name = "OrgnlLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * 属性名称-产品编号
	 */
	private static final String PROPERTY_ITEMCODE_NAME = "ItemCode";

	/**
	 * 产品编号 属性
	 */
	@DbField(name = "ItemCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ITEMCODE = registerProperty(PROPERTY_ITEMCODE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-产品编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ITEMCODE_NAME)
	public final String getItemCode() {
		return this.getProperty(PROPERTY_ITEMCODE);
	}

	/**
	 * 设置-产品编号
	 * 
	 * @param value 值
	 */
	public final void setItemCode(String value) {
		this.setProperty(PROPERTY_ITEMCODE, value);
	}

	/**
	 * 属性名称-产品/服务描述
	 */
	private static final String PROPERTY_ITEMDESCRIPTION_NAME = "ItemDescription";

	/**
	 * 产品/服务描述 属性
	 */
	@DbField(name = "Dscription", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ITEMDESCRIPTION = registerProperty(PROPERTY_ITEMDESCRIPTION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-产品/服务描述
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ITEMDESCRIPTION_NAME)
	public final String getItemDescription() {
		return this.getProperty(PROPERTY_ITEMDESCRIPTION);
	}

	/**
	 * 设置-产品/服务描述
	 * 
	 * @param value 值
	 */
	public final void setItemDescription(String value) {
		this.setProperty(PROPERTY_ITEMDESCRIPTION, value);
	}

	/**
	 * 属性名称-产品标识
	 */
	private static final String PROPERTY_ITEMSIGN_NAME = "ItemSign";

	/**
	 * 产品标识 属性
	 */
	@DbField(name = "ItemSign", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ITEMSIGN = registerProperty(PROPERTY_ITEMSIGN_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-产品标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ITEMSIGN_NAME)
	public final String getItemSign() {
		return this.getProperty(PROPERTY_ITEMSIGN);
	}

	/**
	 * 设置-产品标识
	 * 
	 * @param value 值
	 */
	public final void setItemSign(String value) {
		this.setProperty(PROPERTY_ITEMSIGN, value);
	}

	/**
	 * 属性名称-物料版本
	 */
	private static final String PROPERTY_ITEMVERSION_NAME = "ItemVersion";

	/**
	 * 物料版本 属性
	 */
	@DbField(name = "ItemVer", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_ITEMVERSION = registerProperty(PROPERTY_ITEMVERSION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-物料版本
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ITEMVERSION_NAME)
	public final String getItemVersion() {
		return this.getProperty(PROPERTY_ITEMVERSION);
	}

	/**
	 * 设置-物料版本
	 * 
	 * @param value 值
	 */
	public final void setItemVersion(String value) {
		this.setProperty(PROPERTY_ITEMVERSION, value);
	}

	/**
	 * 属性名称-序号管理
	 */
	private static final String PROPERTY_SERIALMANAGEMENT_NAME = "SerialManagement";

	/**
	 * 序号管理 属性
	 */
	@DbField(name = "SerialMgment", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_SERIALMANAGEMENT = registerProperty(
			PROPERTY_SERIALMANAGEMENT_NAME, emYesNo.class, MY_CLASS);

	/**
	 * 获取-序号管理
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SERIALMANAGEMENT_NAME)
	public final emYesNo getSerialManagement() {
		return this.getProperty(PROPERTY_SERIALMANAGEMENT);
	}

	/**
	 * 设置-序号管理
	 * 
	 * @param value 值
	 */
	public final void setSerialManagement(emYesNo value) {
		this.setProperty(PROPERTY_SERIALMANAGEMENT, value);
	}

	/**
	 * 属性名称-批号管理
	 */
	private static final String PROPERTY_BATCHMANAGEMENT_NAME = "BatchManagement";

	/**
	 * 批号管理 属性
	 */
	@DbField(name = "BatchMgment", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_BATCHMANAGEMENT = registerProperty(
			PROPERTY_BATCHMANAGEMENT_NAME, emYesNo.class, MY_CLASS);

	/**
	 * 获取-批号管理
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BATCHMANAGEMENT_NAME)
	public final emYesNo getBatchManagement() {
		return this.getProperty(PROPERTY_BATCHMANAGEMENT);
	}

	/**
	 * 设置-批号管理
	 * 
	 * @param value 值
	 */
	public final void setBatchManagement(emYesNo value) {
		this.setProperty(PROPERTY_BATCHMANAGEMENT, value);
	}

	/**
	 * 属性名称-数量
	 */
	private static final String PROPERTY_QUANTITY_NAME = "Quantity";

	/**
	 * 数量 属性
	 */
	@DbField(name = "Quantity", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_QUANTITY = registerProperty(PROPERTY_QUANTITY_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-数量
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_QUANTITY_NAME)
	public final BigDecimal getQuantity() {
		return this.getProperty(PROPERTY_QUANTITY);
	}

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	public final void setQuantity(BigDecimal value) {
		this.setProperty(PROPERTY_QUANTITY, value);
	}

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	public final void setQuantity(String value) {
		this.setQuantity(Decimal.valueOf(value));
	}

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	public final void setQuantity(int value) {
		this.setQuantity(Decimal.valueOf(value));
	}

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	public final void setQuantity(double value) {
		this.setQuantity(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-单位
	 */
	private static final String PROPERTY_UOM_NAME = "UOM";

	/**
	 * 单位 属性
	 */
	@DbField(name = "UOM", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_UOM = registerProperty(PROPERTY_UOM_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-单位
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UOM_NAME)
	public final String getUOM() {
		return this.getProperty(PROPERTY_UOM);
	}

	/**
	 * 设置-单位
	 * 
	 * @param value 值
	 */
	public final void setUOM(String value) {
		this.setProperty(PROPERTY_UOM, value);
	}

	/**
	 * 属性名称-库存单位
	 */
	private static final String PROPERTY_INVENTORYUOM_NAME = "InventoryUOM";

	/**
	 * 库存单位 属性
	 */
	@DbField(name = "InvUOM", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_INVENTORYUOM = registerProperty(PROPERTY_INVENTORYUOM_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-库存单位
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_INVENTORYUOM_NAME)
	public final String getInventoryUOM() {
		return this.getProperty(PROPERTY_INVENTORYUOM);
	}

	/**
	 * 设置-库存单位
	 * 
	 * @param value 值
	 */
	public final void setInventoryUOM(String value) {
		this.setProperty(PROPERTY_INVENTORYUOM, value);
	}

	/**
	 * 属性名称-单位换算率
	 */
	private static final String PROPERTY_UOMRATE_NAME = "UOMRate";

	/**
	 * 单位换算率 属性
	 */
	@DbField(name = "UOMRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_UOMRATE = registerProperty(PROPERTY_UOMRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-单位换算率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UOMRATE_NAME)
	public final BigDecimal getUOMRate() {
		return this.getProperty(PROPERTY_UOMRATE);
	}

	/**
	 * 设置-单位换算率
	 * 
	 * @param value 值
	 */
	public final void setUOMRate(BigDecimal value) {
		this.setProperty(PROPERTY_UOMRATE, value);
	}

	/**
	 * 属性名称-库存数量
	 */
	private static final String PROPERTY_INVENTORYQUANTITY_NAME = "InventoryQuantity";

	/**
	 * 库存数量 属性
	 */
	@DbField(name = "InvQty", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_INVENTORYQUANTITY = registerProperty(
			PROPERTY_INVENTORYQUANTITY_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-库存数量
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_INVENTORYQUANTITY_NAME)
	public final BigDecimal getInventoryQuantity() {
		return this.getProperty(PROPERTY_INVENTORYQUANTITY);
	}

	/**
	 * 设置-库存数量
	 * 
	 * @param value 值
	 */
	public final void setInventoryQuantity(BigDecimal value) {
		this.setProperty(PROPERTY_INVENTORYQUANTITY, value);
	}

	/**
	 * 属性名称-仓库
	 */
	private static final String PROPERTY_WAREHOUSE_NAME = "Warehouse";

	/**
	 * 仓库 属性
	 */
	@DbField(name = "WhsCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_WAREHOUSE = registerProperty(PROPERTY_WAREHOUSE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-仓库
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_WAREHOUSE_NAME)
	public final String getWarehouse() {
		return this.getProperty(PROPERTY_WAREHOUSE);
	}

	/**
	 * 设置-仓库
	 * 
	 * @param value 值
	 */
	public final void setWarehouse(String value) {
		this.setProperty(PROPERTY_WAREHOUSE, value);
	}

	/**
	 * 属性名称-价格
	 */
	private static final String PROPERTY_PRICE_NAME = "Price";

	/**
	 * 价格 属性
	 */
	@DbField(name = "Price", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_PRICE = registerProperty(PROPERTY_PRICE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-价格
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PRICE_NAME)
	public final BigDecimal getPrice() {
		return this.getProperty(PROPERTY_PRICE);
	}

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	public final void setPrice(BigDecimal value) {
		this.setProperty(PROPERTY_PRICE, value);
	}

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	public final void setPrice(String value) {
		this.setPrice(Decimal.valueOf(value));
	}

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	public final void setPrice(int value) {
		this.setPrice(Decimal.valueOf(value));
	}

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	public final void setPrice(double value) {
		this.setPrice(Decimal.valueOf(value));
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
	 * 属性名称-行总计
	 */
	private static final String PROPERTY_LINETOTAL_NAME = "LineTotal";

	/**
	 * 行总计 属性
	 */
	@DbField(name = "LineTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_LINETOTAL = registerProperty(PROPERTY_LINETOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-行总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LINETOTAL_NAME)
	public final BigDecimal getLineTotal() {
		return this.getProperty(PROPERTY_LINETOTAL);
	}

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	public final void setLineTotal(BigDecimal value) {
		this.setProperty(PROPERTY_LINETOTAL, value);
	}

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	public final void setLineTotal(String value) {
		this.setLineTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	public final void setLineTotal(int value) {
		this.setLineTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	public final void setLineTotal(double value) {
		this.setLineTotal(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-行交货日期
	 */
	private static final String PROPERTY_DELIVERYDATE_NAME = "DeliveryDate";

	/**
	 * 行交货日期 属性
	 */
	@DbField(name = "ShipDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_DELIVERYDATE = registerProperty(PROPERTY_DELIVERYDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-行交货日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DELIVERYDATE_NAME)
	public final DateTime getDeliveryDate() {
		return this.getProperty(PROPERTY_DELIVERYDATE);
	}

	/**
	 * 设置-行交货日期
	 * 
	 * @param value 值
	 */
	public final void setDeliveryDate(DateTime value) {
		this.setProperty(PROPERTY_DELIVERYDATE, value);
	}

	/**
	 * 属性名称-已清数量
	 */
	private static final String PROPERTY_CLOSEDQUANTITY_NAME = "ClosedQuantity";

	/**
	 * 已清数量 属性
	 */
	@DbField(name = "ClosedQty", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_CLOSEDQUANTITY = registerProperty(
			PROPERTY_CLOSEDQUANTITY_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已清数量
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CLOSEDQUANTITY_NAME)
	public final BigDecimal getClosedQuantity() {
		return this.getProperty(PROPERTY_CLOSEDQUANTITY);
	}

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	public final void setClosedQuantity(BigDecimal value) {
		this.setProperty(PROPERTY_CLOSEDQUANTITY, value);
	}

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	public final void setClosedQuantity(String value) {
		this.setClosedQuantity(Decimal.valueOf(value));
	}

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	public final void setClosedQuantity(int value) {
		this.setClosedQuantity(Decimal.valueOf(value));
	}

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	public final void setClosedQuantity(double value) {
		this.setClosedQuantity(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-行折扣
	 */
	private static final String PROPERTY_DISCOUNT_NAME = "Discount";

	/**
	 * 行折扣 属性
	 */
	@DbField(name = "DiscPrcnt", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_DISCOUNT = registerProperty(PROPERTY_DISCOUNT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-行折扣
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISCOUNT_NAME)
	public final BigDecimal getDiscount() {
		return this.getProperty(PROPERTY_DISCOUNT);
	}

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	public final void setDiscount(BigDecimal value) {
		this.setProperty(PROPERTY_DISCOUNT, value);
	}

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	public final void setDiscount(String value) {
		this.setDiscount(Decimal.valueOf(value));
	}

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	public final void setDiscount(int value) {
		this.setDiscount(Decimal.valueOf(value));
	}

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	public final void setDiscount(double value) {
		this.setDiscount(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-已清金额
	 */
	private static final String PROPERTY_CLOSEDAMOUNT_NAME = "ClosedAmount";

	/**
	 * 已清金额 属性
	 */
	@DbField(name = "ClosedAmt", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_CLOSEDAMOUNT = registerProperty(PROPERTY_CLOSEDAMOUNT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已清金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CLOSEDAMOUNT_NAME)
	public final BigDecimal getClosedAmount() {
		return this.getProperty(PROPERTY_CLOSEDAMOUNT);
	}

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	public final void setClosedAmount(BigDecimal value) {
		this.setProperty(PROPERTY_CLOSEDAMOUNT, value);
	}

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	public final void setClosedAmount(String value) {
		this.setClosedAmount(Decimal.valueOf(value));
	}

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	public final void setClosedAmount(int value) {
		this.setClosedAmount(Decimal.valueOf(value));
	}

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	public final void setClosedAmount(double value) {
		this.setClosedAmount(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-折扣前价格
	 */
	private static final String PROPERTY_UNITPRICE_NAME = "UnitPrice";

	/**
	 * 折扣前价格 属性
	 */
	@DbField(name = "UnitPrice", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_UNITPRICE = registerProperty(PROPERTY_UNITPRICE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-折扣前价格
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UNITPRICE_NAME)
	public final BigDecimal getUnitPrice() {
		return this.getProperty(PROPERTY_UNITPRICE);
	}

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	public final void setUnitPrice(BigDecimal value) {
		this.setProperty(PROPERTY_UNITPRICE, value);
	}

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	public final void setUnitPrice(String value) {
		this.setUnitPrice(Decimal.valueOf(value));
	}

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	public final void setUnitPrice(int value) {
		this.setUnitPrice(Decimal.valueOf(value));
	}

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	public final void setUnitPrice(double value) {
		this.setUnitPrice(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-折扣前行总计
	 */
	private static final String PROPERTY_UNITLINETOTAL_NAME = "UnitLineTotal";

	/**
	 * 折扣前行总计 属性
	 */
	@DbField(name = "UnitTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
	public static final IPropertyInfo<BigDecimal> PROPERTY_UNITLINETOTAL = registerProperty(PROPERTY_UNITLINETOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-折扣前行总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UNITLINETOTAL_NAME)
	public final BigDecimal getUnitLineTotal() {
		return this.getProperty(PROPERTY_UNITLINETOTAL);
	}

	/**
	 * 设置-折扣前行总计
	 * 
	 * @param value 值
	 */
	public final void setUnitLineTotal(BigDecimal value) {
		this.setProperty(PROPERTY_UNITLINETOTAL, value);
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
	 * 属性名称-税前价格
	 */
	private static final String PROPERTY_PRETAXPRICE_NAME = "PreTaxPrice";

	/**
	 * 税前价格 属性
	 */
	@DbField(name = "PreTaxPrice", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_PRETAXPRICE = registerProperty(PROPERTY_PRETAXPRICE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-税前价格
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PRETAXPRICE_NAME)
	public final BigDecimal getPreTaxPrice() {
		return this.getProperty(PROPERTY_PRETAXPRICE);
	}

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	public final void setPreTaxPrice(BigDecimal value) {
		this.setProperty(PROPERTY_PRETAXPRICE, value);
	}

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	public final void setPreTaxPrice(String value) {
		this.setPreTaxPrice(Decimal.valueOf(value));
	}

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	public final void setPreTaxPrice(int value) {
		this.setPreTaxPrice(Decimal.valueOf(value));
	}

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	public final void setPreTaxPrice(double value) {
		this.setPreTaxPrice(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-税前行总计
	 */
	private static final String PROPERTY_PRETAXLINETOTAL_NAME = "PreTaxLineTotal";

	/**
	 * 税前行总计 属性
	 */
	@DbField(name = "PreTaxTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_PRETAXLINETOTAL = registerProperty(
			PROPERTY_PRETAXLINETOTAL_NAME, BigDecimal.class, MY_CLASS);

	/**
	 * 获取-税前行总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PRETAXLINETOTAL_NAME)
	public final BigDecimal getPreTaxLineTotal() {
		return this.getProperty(PROPERTY_PRETAXLINETOTAL);
	}

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	public final void setPreTaxLineTotal(BigDecimal value) {
		this.setProperty(PROPERTY_PRETAXLINETOTAL, value);
	}

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	public final void setPreTaxLineTotal(String value) {
		this.setPreTaxLineTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	public final void setPreTaxLineTotal(int value) {
		this.setPreTaxLineTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	public final void setPreTaxLineTotal(double value) {
		this.setPreTaxLineTotal(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-成本中心1
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE1_NAME = "DistributionRule1";

	/**
	 * 成本中心1 属性
	 */
	@DbField(name = "OcrCode1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE1 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE1_NAME, String.class, MY_CLASS);

	/**
	 * 获取-成本中心1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE1_NAME)
	public final String getDistributionRule1() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE1);
	}

	/**
	 * 设置-成本中心1
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule1(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE1, value);
	}

	/**
	 * 属性名称-成本中心2
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE2_NAME = "DistributionRule2";

	/**
	 * 成本中心2 属性
	 */
	@DbField(name = "OcrCode2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE2 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE2_NAME, String.class, MY_CLASS);

	/**
	 * 获取-成本中心2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE2_NAME)
	public final String getDistributionRule2() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE2);
	}

	/**
	 * 设置-成本中心2
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule2(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE2, value);
	}

	/**
	 * 属性名称-成本中心3
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE3_NAME = "DistributionRule3";

	/**
	 * 成本中心3 属性
	 */
	@DbField(name = "OcrCode3", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE3 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE3_NAME, String.class, MY_CLASS);

	/**
	 * 获取-成本中心3
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE3_NAME)
	public final String getDistributionRule3() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE3);
	}

	/**
	 * 设置-成本中心3
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule3(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE3, value);
	}

	/**
	 * 属性名称-成本中心4
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE4_NAME = "DistributionRule4";

	/**
	 * 成本中心4 属性
	 */
	@DbField(name = "OcrCode4", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE4 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE4_NAME, String.class, MY_CLASS);

	/**
	 * 获取-成本中心4
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE4_NAME)
	public final String getDistributionRule4() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE4);
	}

	/**
	 * 设置-成本中心4
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule4(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE4, value);
	}

	/**
	 * 属性名称-成本中心5
	 */
	private static final String PROPERTY_DISTRIBUTIONRULE5_NAME = "DistributionRule5";

	/**
	 * 成本中心5 属性
	 */
	@DbField(name = "OcrCode5", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRIBUTIONRULE5 = registerProperty(
			PROPERTY_DISTRIBUTIONRULE5_NAME, String.class, MY_CLASS);

	/**
	 * 获取-成本中心5
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRIBUTIONRULE5_NAME)
	public final String getDistributionRule5() {
		return this.getProperty(PROPERTY_DISTRIBUTIONRULE5);
	}

	/**
	 * 设置-成本中心5
	 * 
	 * @param value 值
	 */
	public final void setDistributionRule5(String value) {
		this.setProperty(PROPERTY_DISTRIBUTIONRULE5, value);
	}

	/**
	 * 属性名称-合同/协议
	 */
	private static final String PROPERTY_AGREEMENTS_NAME = "Agreements";

	/**
	 * 合同 属性
	 */
	@DbField(name = "Agreements", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_AGREEMENTS = registerProperty(PROPERTY_AGREEMENTS_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-合同/协议
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_AGREEMENTS_NAME)
	public final String getAgreements() {
		return this.getProperty(PROPERTY_AGREEMENTS);
	}

	/**
	 * 设置-合同/协议
	 * 
	 * @param value 值
	 */
	public final void setAgreements(String value) {
		this.setProperty(PROPERTY_AGREEMENTS, value);
	}

	/**
	 * 属性名称-物料批次
	 */
	private static final String PROPERTY_MATERIALBATCHES_NAME = "MaterialBatches";

	/**
	 * 物料批次的集合属性
	 *
	 */
	public static final IPropertyInfo<IMaterialBatchItems> PROPERTY_MATERIALBATCHES = registerProperty(
			PROPERTY_MATERIALBATCHES_NAME, IMaterialBatchItems.class, MY_CLASS);

	/**
	 * 获取-物料批次集合
	 *
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_MATERIALBATCHES_NAME)
	@XmlElement(name = MaterialBatchItem.BUSINESS_OBJECT_NAME, type = MaterialBatchItem.class)
	public final IMaterialBatchItems getMaterialBatches() {
		return this.getProperty(PROPERTY_MATERIALBATCHES);
	}

	/**
	 * 设置-物料批次集合
	 *
	 * @param value 值
	 */
	public final void setMaterialBatches(IMaterialBatchItems value) {
		this.setProperty(PROPERTY_MATERIALBATCHES, value);
	}

	/**
	 * 属性名称-物料序列
	 */
	private static final String PROPERTY_MATERIALSERIALS_NAME = "MaterialSerials";

	/**
	 * 物料序列的集合属性
	 *
	 */
	public static final IPropertyInfo<IMaterialSerialItems> PROPERTY_MATERIALSERIALS = registerProperty(
			PROPERTY_MATERIALSERIALS_NAME, IMaterialSerialItems.class, MY_CLASS);

	/**
	 * 获取-物料序列集合
	 *
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_MATERIALSERIALS_NAME)
	@XmlElement(name = MaterialSerialItem.BUSINESS_OBJECT_NAME, type = MaterialSerialItem.class)
	public final IMaterialSerialItems getMaterialSerials() {
		return this.getProperty(PROPERTY_MATERIALSERIALS);
	}

	/**
	 * 设置-物料序列集合
	 *
	 * @param value 值
	 */
	public final void setMaterialSerials(IMaterialSerialItems value) {
		this.setProperty(PROPERTY_MATERIALSERIALS, value);
	}

	@Override
	public BigDecimal getTargetQuantity() {
		return this.getInventoryQuantity();
	}

	@Override
	public String getTargetUOM() {
		return this.getInventoryUOM();
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setMaterialBatches(new MaterialBatchItems(this));
		this.setMaterialSerials(new MaterialSerialItems(this));
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setDiscount(Decimal.ONE);
		this.setTaxRate(Decimal.ZERO);
		this.setUOMRate(Decimal.ONE);
	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] {
				// 注册的业务规则
				new BusinessRuleRequired(PROPERTY_ITEMCODE), // 要求有值
				new BusinessRuleRequired(PROPERTY_WAREHOUSE), // 要求有值
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_CLOSEDQUANTITY), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_CLOSEDAMOUNT), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_QUANTITY), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_PRICE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_UNITPRICE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_DISCOUNT), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_PRETAXPRICE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_RATE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_TAXRATE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_UOMRATE), // 不能低于0
				// 库存数量 = 数量 * 单位换算率
				new BusinessRuleCalculateInventoryQuantity(PROPERTY_INVENTORYQUANTITY, PROPERTY_QUANTITY,
						PROPERTY_UOMRATE),
				// 计算折扣前总计 = 数量 * 折扣前价格
				new BusinessRuleDeductionPriceQtyTotal(PROPERTY_UNITLINETOTAL, PROPERTY_UNITPRICE,
						PROPERTY_INVENTORYQUANTITY),
				// 计算折扣后总计（税前） = 数量 * 折扣后价格（税前）
				new BusinessRuleDeductionPriceQtyTotal(PROPERTY_PRETAXLINETOTAL, PROPERTY_PRETAXPRICE,
						PROPERTY_INVENTORYQUANTITY),
				// 计算折扣后总计 = 折扣前总计 * 折扣
				new BusinessRuleDeductionDiscount(PROPERTY_DISCOUNT, PROPERTY_UNITLINETOTAL, PROPERTY_PRETAXLINETOTAL),
				// 计算 行总计 = 税前总计（折扣后） + 税总计；行总计 = 价格（税后） * 数量；税总计 = 税前总计（折扣后） * 税率
				new BusinessRuleDeductionPriceTaxTotal(PROPERTY_LINETOTAL, PROPERTY_PRICE, PROPERTY_INVENTORYQUANTITY,
						PROPERTY_TAXRATE, PROPERTY_TAXTOTAL, PROPERTY_PRETAXLINETOTAL),
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_INVENTORYQUANTITY), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_LINETOTAL), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_PRETAXLINETOTAL), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_TAXTOTAL), // 不能低于0
		};
	}

	@Override
	public void check() throws BusinessRuleException {
		// 基于采购退货不执行库存逻辑
		if (MyConfiguration.applyVariables(PurchaseReturn.BUSINESS_OBJECT_CODE)
				.equalsIgnoreCase(this.getBaseDocumentType())) {
			return;
		}
		// 原始基于采购退货不执行库存逻辑
		if (MyConfiguration.applyVariables(PurchaseReturn.BUSINESS_OBJECT_CODE)
				.equalsIgnoreCase(this.getOriginalDocumentType())) {
			return;
		}
		// 批次检查
		this.getMaterialBatches().check();
		// 序列检查
		this.getMaterialSerials().check();
	}

	@Override
	public void reset() {
		super.reset();
		this.setClosedAmount(Decimal.ZERO);
		this.setClosedQuantity(Decimal.ZERO);
	}

	/**
	 * 父项
	 */
	IPurchaseCreditNote parent;

	@Override
	public IBusinessLogicContract[] getContracts() {
		// 基于采购退货不执行库存逻辑
		if (MyConfiguration.applyVariables(PurchaseReturn.BUSINESS_OBJECT_CODE)
				.equalsIgnoreCase(this.getBaseDocumentType())) {
			return new IBusinessLogicContract[] {
					// 采购退货贷项
					new IPurchaseReturnCreditNoteContract() {

						@Override
						public String getIdentifiers() {
							return PurchaseCreditNoteItem.this.getIdentifiers();
						}

						@Override
						public BigDecimal getQuantity() {
							return PurchaseCreditNoteItem.this.getQuantity();
						}

						@Override
						public String getBaseDocumentType() {
							return PurchaseCreditNoteItem.this.getBaseDocumentType();
						}

						@Override
						public Integer getBaseDocumentEntry() {
							return PurchaseCreditNoteItem.this.getBaseDocumentEntry();
						}

						@Override
						public Integer getBaseDocumentLineId() {
							return PurchaseCreditNoteItem.this.getBaseDocumentLineId();
						}

					}

			};
		}
		return new IBusinessLogicContract[] {
				// 物料发货
				new IMaterialIssueContract() {

					@Override
					public String getIdentifiers() {
						return PurchaseCreditNoteItem.this.getIdentifiers();
					}

					@Override
					public String getItemCode() {
						return PurchaseCreditNoteItem.this.getItemCode();
					}

					@Override
					public String getItemName() {
						return PurchaseCreditNoteItem.this.getItemDescription();
					}

					@Override
					public String getWarehouse() {
						return PurchaseCreditNoteItem.this.getWarehouse();
					}

					@Override
					public String getDocumentType() {
						return PurchaseCreditNoteItem.this.getObjectCode();
					}

					@Override
					public Integer getDocumentEntry() {
						return PurchaseCreditNoteItem.this.getDocEntry();
					}

					@Override
					public Integer getDocumentLineId() {
						return PurchaseCreditNoteItem.this.getLineId();
					}

					@Override
					public BigDecimal getQuantity() {
						return PurchaseCreditNoteItem.this.getInventoryQuantity();
					}

					@Override
					public String getUOM() {
						return PurchaseCreditNoteItem.this.getInventoryUOM();
					}

					@Override
					public DateTime getPostingDate() {
						return PurchaseCreditNoteItem.this.parent.getPostingDate();
					}

					@Override
					public DateTime getDeliveryDate() {
						return PurchaseCreditNoteItem.this.parent.getDeliveryDate();
					}

					@Override
					public DateTime getDocumentDate() {
						return PurchaseCreditNoteItem.this.parent.getDocumentDate();
					}

					@Override
					public emYesNo getBatchManagement() {
						return PurchaseCreditNoteItem.this.getBatchManagement();
					}

					@Override
					public emYesNo getSerialManagement() {
						return PurchaseCreditNoteItem.this.getSerialManagement();
					}

					@Override
					public String getBaseDocumentType() {
						return PurchaseCreditNoteItem.this.getBaseDocumentType();
					}

					@Override
					public Integer getBaseDocumentEntry() {
						return PurchaseCreditNoteItem.this.getBaseDocumentEntry();
					}

					@Override
					public Integer getBaseDocumentLineId() {
						return PurchaseCreditNoteItem.this.getBaseDocumentLineId();
					}

					@Override
					public BigDecimal getPrice() {
						return PurchaseCreditNoteItem.this.getPrice();
					}

					@Override
					public String getCurrency() {
						return PurchaseCreditNoteItem.this.getCurrency();
					}

					@Override
					public BigDecimal getRate() {
						return PurchaseCreditNoteItem.this.getRate();
					}

				},
				// 基础单据为采购订单
				new IPurchaseOrderReturnContract() {

					@Override
					public String getIdentifiers() {
						return PurchaseCreditNoteItem.this.getIdentifiers();
					}

					@Override
					public BigDecimal getQuantity() {
						return PurchaseCreditNoteItem.this.getQuantity();
					}

					@Override
					public String getBaseDocumentType() {
						return PurchaseCreditNoteItem.this.getBaseDocumentType();
					}

					@Override
					public Integer getBaseDocumentEntry() {
						return PurchaseCreditNoteItem.this.getBaseDocumentEntry();
					}

					@Override
					public Integer getBaseDocumentLineId() {
						return PurchaseCreditNoteItem.this.getBaseDocumentLineId();
					}

				},

		};
	}

	@Override
	public Object getValue(String property) {
		switch (property) {
		case Ledgers.CONDITION_PROPERTY_OBJECTCODE:
			return this.parent.getObjectCode();
		case Ledgers.CONDITION_PROPERTY_DATAOWNER:
			return this.parent.getDataOwner();
		case Ledgers.CONDITION_PROPERTY_ORGANIZATION:
			return this.parent.getOrganization();
		case Ledgers.CONDITION_PROPERTY_ORDERTYPE:
			return this.parent.getOrderType();
		case Ledgers.CONDITION_PROPERTY_PROJECT:
			return this.parent.getProject();
		case Ledgers.CONDITION_PROPERTY_BRANCH:
			return this.parent.getBranch();
		case Ledgers.CONDITION_PROPERTY_SUPPLIER:
			return this.parent.getSupplierCode();
		case Ledgers.CONDITION_PROPERTY_MATERIAL:
			return this.getItemCode();
		case Ledgers.CONDITION_PROPERTY_WAREHOUSE:
			return this.getWarehouse();
		case Ledgers.CONDITION_PROPERTY_TAX:
			return this.getTax();
		default:
			return null;
		}
	}
}
