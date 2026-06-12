package org.colorcoding.ibas.purchase.bo.shippingaddress;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocument;

/**
 * 送货地址父项 接口
 * 
 */
public interface IShippingAddressParent extends IBODocument {

	/**
	 * 获取-单据货币
	 * 
	 * @return 值
	 */
	String getDocumentCurrency();

	/**
	 * 获取-单据汇率
	 * 
	 * @return 值
	 */
	BigDecimal getDocumentRate();

}
