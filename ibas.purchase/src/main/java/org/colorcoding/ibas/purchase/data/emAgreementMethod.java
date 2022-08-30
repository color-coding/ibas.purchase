package org.colorcoding.ibas.purchase.data;

import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 协议方式
 * 
 * @author Niuren.Zhu
 *
 */
public enum emAgreementMethod {
	/**
	 * 物料
	 */
	@Value("I")
	ITEM,
	/**
	 * 货币
	 */
	@Value("M")
	MONETARY
}
