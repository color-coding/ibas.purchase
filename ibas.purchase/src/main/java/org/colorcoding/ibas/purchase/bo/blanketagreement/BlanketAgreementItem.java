package org.colorcoding.ibas.purchase.bo.blanketagreement;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

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
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleMinValue;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequired;
import org.colorcoding.ibas.materials.rules.BusinessRuleCalculateInventoryQuantity;
import org.colorcoding.ibas.materials.rules.BusinessRulePreventCancelDocument;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionPriceTaxTotal;

/**
 * 一揽子协议-项目
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = BlanketAgreementItem.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
public class BlanketAgreementItem extends BusinessObject<BlanketAgreementItem>
		implements IBlanketAgreementItem, IBOTagDeleted, IBOTagCanceled, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -6494537817093930922L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = BlanketAgreementItem.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_PH_BKA1";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_PH_BLANKETAGT";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "BlanketAgreementItem";

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
	 * 属性名称-产品编号
	 */
	private static final String PROPERTY_ITEMCODE_NAME = "ItemCode";

	/**
	 * 产品编号 属性
	 */
	@DbField(name = "ItemCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "Dscription", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "ItemSign", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	* 属性名称-目录编码
	*/
	private static final String PROPERTY_CATALOGCODE_NAME = "CatalogCode";

	/**
	* 目录编码 属性
	*/
	@DbField(name = "CatalogCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_CATALOGCODE = registerProperty(PROPERTY_CATALOGCODE_NAME,
			String.class, MY_CLASS);

	/**
	* 获取-目录编码
	* 
	* @return 值
	*/
	@XmlElement(name = PROPERTY_CATALOGCODE_NAME)
	public final String getCatalogCode() {
		return this.getProperty(PROPERTY_CATALOGCODE);
	}

	/**
	* 设置-目录编码
	* 
	* @param value 值
	*/
	public final void setCatalogCode(String value) {
		this.setProperty(PROPERTY_CATALOGCODE, value);
	}

	/**
	 * 属性名称-数量
	 */
	private static final String PROPERTY_QUANTITY_NAME = "Quantity";

	/**
	 * 数量 属性
	 */
	@DbField(name = "Quantity", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
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
	 * 属性名称-单位
	 */
	private static final String PROPERTY_UOM_NAME = "UOM";

	/**
	 * 单位 属性
	 */
	@DbField(name = "UOM", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	 * 属性名称-价格
	 */
	private static final String PROPERTY_PRICE_NAME = "Price";

	/**
	 * 价格 属性
	 */
	@DbField(name = "Price", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
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
	 * 属性名称-货币
	 */
	private static final String PROPERTY_CURRENCY_NAME = "Currency";

	/**
	 * 货币 属性
	 */
	@DbField(name = "Currency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
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
	@DbField(name = "Rate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
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
	 * 属性名称-行总计
	 */
	private static final String PROPERTY_LINETOTAL_NAME = "LineTotal";

	/**
	 * 行总计 属性
	 */
	@DbField(name = "LineTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
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
	 * 属性名称-已清数量
	 */
	private static final String PROPERTY_CLOSEDQUANTITY_NAME = "ClosedQuantity";

	/**
	 * 已清数量 属性
	 */
	@DbField(name = "ClosedQty", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
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
	 * 属性名称-已清金额
	 */
	private static final String PROPERTY_CLOSEDAMOUNT_NAME = "ClosedAmount";

	/**
	 * 已清金额 属性
	 */
	@DbField(name = "ClosedAmt", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME)
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
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setUOMRate(Decimal.ONE);

	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] {
				// 注册的业务规则
				new BusinessRuleRequired(PROPERTY_ITEMCODE), // 要求有值
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_CLOSEDQUANTITY), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_CLOSEDAMOUNT), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_QUANTITY), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_PRICE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_RATE), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_LINETOTAL), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_TAXRATE), // 不能低于0
				new BusinessRulePreventCancelDocument(PROPERTY_CANCELED, PROPERTY_LINESTATUS), // 阻止取消单据
				// 库存数量 = 数量 * 单位换算率
				new BusinessRuleCalculateInventoryQuantity(PROPERTY_INVENTORYQUANTITY, PROPERTY_QUANTITY,
						PROPERTY_UOMRATE),
				// 计算 行总计 = 税前总计（折扣后） + 税总计；行总计 = 价格（税后） * 数量；税总计 = 税前总计（折扣后） * 税率
				new BusinessRuleDeductionPriceTaxTotal(PROPERTY_LINETOTAL, PROPERTY_PRICE,
						MyConfiguration.isInventoryUnitLinePrice() ? PROPERTY_INVENTORYQUANTITY : PROPERTY_QUANTITY,
						PROPERTY_TAXRATE, PROPERTY_TAXTOTAL, PROPERTY_PRETAXLINETOTAL, PROPERTY_PRETAXPRICE),
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_LINETOTAL), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_PRETAXLINETOTAL), // 不能低于0
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_TAXTOTAL), // 不能低于0
		};
	}
}
