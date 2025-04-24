package org.colorcoding.ibas.purchase.bo.purchasequote;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购报价-行 集合
 */
@XmlType(name = PurchaseQuoteItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseQuoteItem.class })
public class PurchaseQuoteItems extends BusinessObjects<IPurchaseQuoteItem, IPurchaseQuote>
		implements IPurchaseQuoteItems {

	private static final long serialVersionUID = -7361078750076384409L;
	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseQuoteItems";

	/**
	 * 构造方法
	 */
	public PurchaseQuoteItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseQuoteItems(IPurchaseQuote parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseQuoteItem.class;
	}

	/**
	 * 创建采购报价-行
	 * 
	 * @return 采购报价-行
	 */
	public IPurchaseQuoteItem create() {
		IPurchaseQuoteItem item = new PurchaseQuoteItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseQuoteItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseQuoteItem) {
			((PurchaseQuoteItem) item).parent = this.getParent();
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
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (PurchaseQuote.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseQuote.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
