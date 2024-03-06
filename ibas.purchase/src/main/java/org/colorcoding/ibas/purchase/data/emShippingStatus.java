package org.colorcoding.ibas.purchase.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.mapping.Value;
import org.colorcoding.ibas.purchase.MyConfiguration;

@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emShippingStatus {

	/**
	 * 等待
	 */
	@Value("W")
	WAITING,
	/**
	 * 运输中
	 */
	@Value("I")
	SHIPPING,
	/**
	 * 已送达
	 */
	@Value("D")
	SHIPPED,
}
