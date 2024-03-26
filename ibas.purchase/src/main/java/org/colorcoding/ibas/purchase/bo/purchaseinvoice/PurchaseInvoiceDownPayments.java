package org.colorcoding.ibas.purchase.bo.purchaseinvoice;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购发票-预付款 集合
 */
@XmlType(name = PurchaseInvoiceDownPayments.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseInvoiceDownPayment.class })
public class PurchaseInvoiceDownPayments extends BusinessObjects<IPurchaseInvoiceDownPayment, IPurchaseInvoice>
		implements IPurchaseInvoiceDownPayments {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseInvoiceDownPayments";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -5381680541881875132L;

	/**
	 * 构造方法
	 */
	public PurchaseInvoiceDownPayments() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseInvoiceDownPayments(IPurchaseInvoice parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseInvoiceDownPayment.class;
	}

	/**
	 * 创建采购发票-预付款
	 * 
	 * @return 采购发票-预付款
	 */
	public IPurchaseInvoiceDownPayment create() {
		IPurchaseInvoiceDownPayment item = new PurchaseInvoiceDownPayment();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseInvoiceDownPayment item) {
		super.afterAddItem(item);
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
	}
}
