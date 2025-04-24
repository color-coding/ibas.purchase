package org.colorcoding.ibas.purchase.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.common.Value;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 协议方式
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
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
