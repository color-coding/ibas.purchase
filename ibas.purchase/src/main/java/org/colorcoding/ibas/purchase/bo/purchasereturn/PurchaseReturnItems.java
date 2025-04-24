package org.colorcoding.ibas.purchase.bo.purchasereturn;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购退货-行 集合
 */
@XmlType(name = PurchaseReturnItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseReturnItem.class })
public class PurchaseReturnItems extends BusinessObjects<IPurchaseReturnItem, IPurchaseReturn>
		implements IPurchaseReturnItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseReturnItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 924952939694211469L;

	/**
	 * 构造方法
	 */
	public PurchaseReturnItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseReturnItems(IPurchaseReturn parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseReturnItem.class;
	}

	/**
	 * 创建采购退货-行
	 * 
	 * @return 采购退货-行
	 */
	public IPurchaseReturnItem create() {
		IPurchaseReturnItem item = new PurchaseReturnItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseReturnItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseReturnItem) {
			((PurchaseReturnItem) item).parent = this.getParent();
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
		if (PurchaseReturn.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseReturn.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
