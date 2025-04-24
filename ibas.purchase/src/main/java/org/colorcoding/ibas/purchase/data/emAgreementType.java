package org.colorcoding.ibas.purchase.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.common.Value;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 协议类型
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
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
