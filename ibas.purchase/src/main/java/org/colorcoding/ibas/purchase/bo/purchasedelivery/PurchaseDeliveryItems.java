package org.colorcoding.ibas.purchase.bo.purchasedelivery;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.materials.data.DataConvert;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购收货-行 集合
 */
@XmlType(name = PurchaseDeliveryItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseDeliveryItem.class })
public class PurchaseDeliveryItems extends BusinessObjects<IPurchaseDeliveryItem, IPurchaseDelivery>
		implements IPurchaseDeliveryItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseDeliveryItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -1087422868584385129L;

	/**
	 * 构造方法
	 */
	public PurchaseDeliveryItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseDeliveryItems(IPurchaseDelivery parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseDeliveryItem.class;
	}

	/**
	 * 创建采购收货-行
	 * 
	 * @return 采购收货-行
	 */
	public IPurchaseDeliveryItem create() {
		IPurchaseDeliveryItem item = new PurchaseDeliveryItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseDeliveryItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseDeliveryItem) {
			((PurchaseDeliveryItem) item).parent = this.getParent();
		}
		// 记录父项的值
		if (item.isNew() && DataConvert.isNullOrEmpty(item.getBaseDocumentType())) {
			item.setRate(this.getParent().getDocumentRate());
			item.setCurrency(this.getParent().getDocumentCurrency());
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
		if (PurchaseDelivery.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseDelivery.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
