package org.colorcoding.ibas.purchase.bo.blanketagreement;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocument;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.purchase.data.emAgreementMethod;
import org.colorcoding.ibas.purchase.data.emAgreementType;
import org.colorcoding.ibas.purchase.data.emPriceMode;

/**
 * 一揽子协议 接口
 * 
 */
public interface IBlanketAgreement extends IBODocument {

	/**
	 * 获取-凭证编号
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-凭证编号
	 * 
	 * @param value 值
	 */
	void setDocEntry(Integer value);

	/**
	 * 获取-期间编号
	 * 
	 * @return 值
	 */
	Integer getDocNum();

	/**
	 * 设置-期间编号
	 * 
	 * @param value 值
	 */
	void setDocNum(Integer value);

	/**
	 * 获取-期间
	 * 
	 * @return 值
	 */
	Integer getPeriod();

	/**
	 * 设置-期间
	 * 
	 * @param value 值
	 */
	void setPeriod(Integer value);

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
	 * 获取-审批状态
	 * 
	 * @return 值
	 */
	emApprovalStatus getApprovalStatus();

	/**
	 * 设置-审批状态
	 * 
	 * @param value 值
	 */
	void setApprovalStatus(emApprovalStatus value);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	emDocumentStatus getDocumentStatus();

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	void setDocumentStatus(emDocumentStatus value);

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
	 * 获取-版本
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-版本
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
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	Integer getDataOwner();

	/**
	 * 设置-数据所有者
	 * 
	 * @param value 值
	 */
	void setDataOwner(Integer value);

	/**
	 * 获取-团队成员
	 * 
	 * @return 值
	 */
	String getTeamMembers();

	/**
	 * 设置-团队成员
	 * 
	 * @param value 值
	 */
	void setTeamMembers(String value);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	String getOrganization();

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value 值
	 */
	void setOrganization(String value);

	/**
	 * 获取-过账日期
	 * 
	 * @return 值
	 */
	DateTime getPostingDate();

	/**
	 * 设置-过账日期
	 * 
	 * @param value 值
	 */
	void setPostingDate(DateTime value);

	/**
	 * 获取-到期日
	 * 
	 * @return 值
	 */
	DateTime getDeliveryDate();

	/**
	 * 设置-到期日
	 * 
	 * @param value 值
	 */
	void setDeliveryDate(DateTime value);

	/**
	 * 获取-凭证日期
	 * 
	 * @return 值
	 */
	DateTime getDocumentDate();

	/**
	 * 设置-凭证日期
	 * 
	 * @param value 值
	 */
	void setDocumentDate(DateTime value);

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
	 * 获取-备注
	 * 
	 * @return 值
	 */
	String getRemarks();

	/**
	 * 设置-备注
	 * 
	 * @param value 值
	 */
	void setRemarks(String value);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	void setReferenced(emYesNo value);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	emYesNo getDeleted();

	/**
	 * 设置-已删除
	 * 
	 * @param value 值
	 */
	void setDeleted(emYesNo value);

	/**
	 * 获取-供应商代码
	 * 
	 * @return 值
	 */
	String getSupplierCode();

	/**
	 * 设置-供应商代码
	 * 
	 * @param value 值
	 */
	void setSupplierCode(String value);

	/**
	 * 获取-供应商名称
	 * 
	 * @return 值
	 */
	String getSupplierName();

	/**
	 * 设置-供应商名称
	 * 
	 * @param value 值
	 */
	void setSupplierName(String value);

	/**
	 * 获取-联系人
	 * 
	 * @return 值
	 */
	Integer getContactPerson();

	/**
	 * 设置-联系人
	 * 
	 * @param value 值
	 */
	void setContactPerson(Integer value);

	/**
	 * 获取-付款条款代码
	 * 
	 * @return 值
	 */
	String getPaymentCode();

	/**
	 * 设置-付款条款代码
	 * 
	 * @param value 值
	 */
	void setPaymentCode(String value);

	/**
	 * 获取-项目代码
	 * 
	 * @return 值
	 */
	String getProject();

	/**
	 * 设置-项目代码
	 * 
	 * @param value 值
	 */
	void setProject(String value);

	/**
	 * 获取-单据类型
	 * 
	 * @return 值
	 */
	String getOrderType();

	/**
	 * 设置-单据类型
	 * 
	 * @param value 值
	 */
	void setOrderType(String value);

	/**
	 * 获取-描述
	 * 
	 * @return 值
	 */
	String getDescription();

	/**
	 * 设置-描述
	 * 
	 * @param value 值
	 */
	void setDescription(String value);

	/**
	 * 获取-开始日期
	 * 
	 * @return 值
	 */
	DateTime getStartDate();

	/**
	 * 设置-开始日期
	 * 
	 * @param value 值
	 */
	void setStartDate(DateTime value);

	/**
	 * 获取-结束日期
	 * 
	 * @return 值
	 */
	DateTime getEndDate();

	/**
	 * 设置-结束日期
	 * 
	 * @param value 值
	 */
	void setEndDate(DateTime value);

	/**
	 * 获取-签署日期
	 * 
	 * @return 值
	 */
	DateTime getSignDate();

	/**
	 * 设置-签署日期
	 * 
	 * @param value 值
	 */
	void setSignDate(DateTime value);

	/**
	 * 获取-终止日期
	 * 
	 * @return 值
	 */
	DateTime getTerminationDate();

	/**
	 * 设置-终止日期
	 * 
	 * @param value 值
	 */
	void setTerminationDate(DateTime value);

	/**
	 * 获取-协议方法
	 * 
	 * @return 值
	 */
	emAgreementMethod getAgreementMethod();

	/**
	 * 设置-协议方法
	 * 
	 * @param value 值
	 */
	void setAgreementMethod(emAgreementMethod value);

	/**
	 * 获取-协议类型
	 * 
	 * @return 值
	 */
	emAgreementType getAgreementType();

	/**
	 * 设置-协议类型
	 * 
	 * @param value 值
	 */
	void setAgreementType(emAgreementType value);

	/**
	 * 获取-价格方式
	 * 
	 * @return 值
	 */
	emPriceMode getPriceMode();

	/**
	 * 设置-价格方式
	 * 
	 * @param value 值
	 */
	void setPriceMode(emPriceMode value);

	/**
	 * 获取-结算概率
	 * 
	 * @return 值
	 */
	BigDecimal getSettlementProbability();

	/**
	 * 设置-结算概率
	 * 
	 * @param value 值
	 */
	void setSettlementProbability(BigDecimal value);

	/**
	 * 获取-一揽子协议-项目集合
	 * 
	 * @return 值
	 */
	IBlanketAgreementItems getBlanketAgreementItems();

	/**
	 * 设置-一揽子协议-项目集合
	 * 
	 * @param value 值
	 */
	void setBlanketAgreementItems(IBlanketAgreementItems value);

}
