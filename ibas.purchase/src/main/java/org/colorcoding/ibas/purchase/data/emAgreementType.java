package org.colorcoding.ibas.purchase.data;

import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 协议类型
 * 
 * @author Niuren.Zhu
 *
 */
public enum emAgreementType {
	/**
	 * 常规
	 */
	@Value("G")
	GENERAL,
	/**
	 * 特殊
	 */
	@Value("S")
	SPECIFIC
}
