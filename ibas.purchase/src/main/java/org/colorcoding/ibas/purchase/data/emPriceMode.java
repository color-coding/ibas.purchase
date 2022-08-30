package org.colorcoding.ibas.purchase.data;

import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 价格类型
 * 
 * @author Niuren.Zhu
 *
 */
public enum emPriceMode {
	/**
	 * 未税
	 */
	@Value("N")
	NET,
	/**
	 * 含税
	 */
	@Value("G")
	GROSS

}
