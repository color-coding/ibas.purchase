package org.colorcoding.ibas.purchase.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.common.Value;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 价格类型
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
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
