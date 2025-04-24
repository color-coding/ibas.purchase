package org.colorcoding.ibas.purchase.bo.purchaseinvoice;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购发票-行 集合
 */
@XmlType(name = PurchaseInvoiceItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseInvoiceItem.class })
public class PurchaseInvoiceItems extends BusinessObjects<IPurchaseInvoiceItem, IPurchaseInvoice>
		implements IPurchaseInvoiceItems {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 3590106369286048756L;
	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseInvoiceItems";

	/**
	 * 构造方法
	 */
	public PurchaseInvoiceItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseInvoiceItems(IPurchaseInvoice parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseInvoiceItem.class;
	}

	/**
	 * 创建采购发票-行
	 * 
	 * @return 采购发票-行
	 */
	public IPurchaseInvoiceItem create() {
		IPurchaseInvoiceItem item = new PurchaseInvoiceItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseInvoiceItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseInvoiceItem) {
			((PurchaseInvoiceItem) item).parent = this.getParent();
		}
		// 记录父项的值
		if (!this.getParent().isLoading()) {
			if (item.isNew() && Strings.isNullOrEmpty(item.getBaseDocumentType())) {
				item.setRate(this.getParent().getDocumentRate());
				item.setCurrency(this.getParent().getDocumentCurrency());
				item.setDeliveryDate(this.getParent().getDeliveryDate());
			}
		}
	}

	@Override
	protected void afterRemoveItem(IPurchaseInvoiceItem item) {
		super.afterRemoveItem(item);
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (PurchaseInvoice.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseInvoice.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
