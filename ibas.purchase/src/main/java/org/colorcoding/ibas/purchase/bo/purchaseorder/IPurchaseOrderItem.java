package org.colorcoding.ibas.purchase.bo.purchaseorder;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocumentLine;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.document.IDocumentClosingAmountItem;
import org.colorcoding.ibas.document.IDocumentClosingQuantityItem;
import org.colorcoding.ibas.materials.bo.materialbatch.IMaterialBatchItemParent;
import org.colorcoding.ibas.materials.bo.materialserial.IMaterialSerialItemParent;

/**
 * 采购订单-行 接口
 * 
 */
public interface IPurchaseOrderItem extends IBODocumentLine, IMaterialBatchItemParent, IMaterialSerialItemParent,
		IDocumentClosingQuantityItem, IDocumentClosingAmountItem {

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
	 * 获取-基于行号
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentLineId();

	/**
	 * 设置-基于行号
	 * 
	 * @param value 值
	 */
	void setBaseDocumentLineId(Integer value);

	/**
	 * 获取-原始类型
	 * 
	 * @return 值
	 */
	String getOriginalDocumentType();

	/**
	 * 设置-原始类型
	 * 
	 * @param value 值
	 */
	void setOriginalDocumentType(String value);

	/**
	 * 获取-原始标识
	 * 
	 * @return 值
	 */
	Integer getOriginalDocumentEntry();

	/**
	 * 设置-原始标识
	 * 
	 * @param value 值
	 */
	void setOriginalDocumentEntry(Integer value);

	/**
	 * 获取-原始行号
	 * 
	 * @return 值
	 */
	Integer getOriginalDocumentLineId();

	/**
	 * 设置-原始行号
	 * 
	 * @param value 值
	 */
	void setOriginalDocumentLineId(Integer value);

	/**
	 * 获取-物料编码
	 * 
	 * @return 值
	 */
	String getItemCode();

	/**
	 * 设置-物料编码
	 * 
	 * @param value 值
	 */
	void setItemCode(String value);

	/**
	 * 获取-物料/服务描述
	 * 
	 * @return 值
	 */
	String getItemDescription();

	/**
	 * 设置-物料/服务描述
	 * 
	 * @param value 值
	 */
	void setItemDescription(String value);

	/**
	 * 获取-物料标识
	 * 
	 * @return 值
	 */
	String getItemSign();

	/**
	 * 设置-物料标识
	 * 
	 * @param value 值
	 */
	void setItemSign(String value);

	/**
	* 获取-目录编码
	* 
	* @return 值
	*/
	String getCatalogCode();

	/**
	* 设置-目录编码
	* 
	* @param value 值
	*/
	void setCatalogCode(String value);

	/**
	 * 获取-物料版本
	 * 
	 * @return 值
	 */
	String getItemVersion();

	/**
	 * 设置-物料版本
	 * 
	 * @param value 值
	 */
	void setItemVersion(String value);

	/**
	 * 获取-序号管理
	 * 
	 * @return 值
	 */
	emYesNo getSerialManagement();

	/**
	 * 设置-序号管理
	 * 
	 * @param value 值
	 */
	void setSerialManagement(emYesNo value);

	/**
	 * 获取-批号管理
	 * 
	 * @return 值
	 */
	emYesNo getBatchManagement();

	/**
	 * 设置-批号管理
	 * 
	 * @param value 值
	 */
	void setBatchManagement(emYesNo value);

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
	 * 获取-单位
	 * 
	 * @return 值
	 */
	String getUOM();

	/**
	 * 设置-单位
	 * 
	 * @param value 值
	 */
	void setUOM(String value);

	/**
	 * 获取-库存单位
	 * 
	 * @return 值
	 */
	String getInventoryUOM();

	/**
	 * 设置-库存单位
	 * 
	 * @param value 值
	 */
	void setInventoryUOM(String value);

	/**
	 * 获取-单位换算率
	 * 
	 * @return 值
	 */
	BigDecimal getUOMRate();

	/**
	 * 设置-单位换算率
	 * 
	 * @param value 值
	 */
	void setUOMRate(BigDecimal value);

	/**
	 * 获取-库存数量
	 * 
	 * @return 值
	 */
	BigDecimal getInventoryQuantity();

	/**
	 * 设置-库存数量
	 * 
	 * @param value 值
	 */
	void setInventoryQuantity(BigDecimal value);

	/**
	 * 获取-仓库
	 * 
	 * @return 值
	 */
	String getWarehouse();

	/**
	 * 设置-仓库
	 * 
	 * @param value 值
	 */
	void setWarehouse(String value);

	/**
	 * 获取-价格
	 * 
	 * @return 值
	 */
	BigDecimal getPrice();

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(BigDecimal value);

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(String value);

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(int value);

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(double value);

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
	 * 获取-行总计
	 * 
	 * @return 值
	 */
	BigDecimal getLineTotal();

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(BigDecimal value);

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(String value);

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(int value);

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(double value);

	/**
	 * 获取-行交货日期
	 * 
	 * @return 值
	 */
	DateTime getDeliveryDate();

	/**
	 * 设置-行交货日期
	 * 
	 * @param value 值
	 */
	void setDeliveryDate(DateTime value);

	/**
	 * 获取-已清数量
	 * 
	 * @return 值
	 */
	BigDecimal getClosedQuantity();

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(BigDecimal value);

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(String value);

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(int value);

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(double value);

	/**
	 * 获取-行折扣
	 * 
	 * @return 值
	 */
	BigDecimal getDiscount();

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	void setDiscount(BigDecimal value);

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	void setDiscount(String value);

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	void setDiscount(int value);

	/**
	 * 设置-行折扣
	 * 
	 * @param value 值
	 */
	void setDiscount(double value);

	/**
	 * 获取-已清金额
	 * 
	 * @return 值
	 */
	BigDecimal getClosedAmount();

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	void setClosedAmount(BigDecimal value);

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	void setClosedAmount(String value);

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	void setClosedAmount(int value);

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	void setClosedAmount(double value);

	/**
	 * 获取-折扣前价格
	 * 
	 * @return 值
	 */
	BigDecimal getUnitPrice();

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	void setUnitPrice(BigDecimal value);

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	void setUnitPrice(String value);

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	void setUnitPrice(int value);

	/**
	 * 设置-折扣前价格
	 * 
	 * @param value 值
	 */
	void setUnitPrice(double value);

	/**
	 * 获取-折扣前行总计
	 * 
	 * @return 值
	 */
	BigDecimal getUnitLineTotal();

	/**
	 * 设置-折扣前行总计
	 * 
	 * @param value 值
	 */
	void setUnitLineTotal(BigDecimal value);

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
	 * 获取-税前价格
	 * 
	 * @return 值
	 */
	BigDecimal getPreTaxPrice();

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(BigDecimal value);

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(String value);

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(int value);

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(double value);

	/**
	 * 获取-税前行总计
	 * 
	 * @return 值
	 */
	BigDecimal getPreTaxLineTotal();

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(BigDecimal value);

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(String value);

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(int value);

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(double value);

	/**
	 * 获取-成本中心1
	 * 
	 * @return 值
	 */
	String getDistributionRule1();

	/**
	 * 设置-成本中心1
	 * 
	 * @param value 值
	 */
	void setDistributionRule1(String value);

	/**
	 * 获取-成本中心2
	 * 
	 * @return 值
	 */
	String getDistributionRule2();

	/**
	 * 设置-成本中心2
	 * 
	 * @param value 值
	 */
	void setDistributionRule2(String value);

	/**
	 * 获取-成本中心3
	 * 
	 * @return 值
	 */
	String getDistributionRule3();

	/**
	 * 设置-成本中心3
	 * 
	 * @param value 值
	 */
	void setDistributionRule3(String value);

	/**
	 * 获取-成本中心4
	 * 
	 * @return 值
	 */
	String getDistributionRule4();

	/**
	 * 设置-成本中心4
	 * 
	 * @param value 值
	 */
	void setDistributionRule4(String value);

	/**
	 * 获取-成本中心5
	 * 
	 * @return 值
	 */
	String getDistributionRule5();

	/**
	 * 设置-成本中心5
	 * 
	 * @param value 值
	 */
	void setDistributionRule5(String value);

	/**
	 * 获取-合同/协议
	 * 
	 * @return 值
	 */
	String getAgreements();

	/**
	 * 设置-合同/协议
	 * 
	 * @param value 值
	 */
	void setAgreements(String value);

	/**
	 * 获取-采购订单-行-额外信息集合
	 * 
	 * @return 值
	 */
	IPurchaseOrderItemExtras getPurchaseOrderItemExtras();

	/**
	 * 设置-采购订单-行-额外信息集合
	 * 
	 * @param value 值
	 */
	void setPurchaseOrderItemExtras(IPurchaseOrderItemExtras value);
}
