package org.colorcoding.ibas.purchase.bo.purchaserequest;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购申请-行 集合
 */
@XmlType(name = PurchaseRequestItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseRequestItem.class })
public class PurchaseRequestItems extends BusinessObjects<IPurchaseRequestItem, IPurchaseRequest>
		implements IPurchaseRequestItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseRequestItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 6951418529597205406L;

	/**
	 * 构造方法
	 */
	public PurchaseRequestItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseRequestItems(IPurchaseRequest parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseRequestItem.class;
	}

	/**
	 * 创建采购申请-行
	 * 
	 * @return 采购申请-行
	 */
	public IPurchaseRequestItem create() {
		IPurchaseRequestItem item = new PurchaseRequestItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseRequestItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseRequestItem) {
			((PurchaseRequestItem) item).parent = this.getParent();
		}
		// 记录父项的值
		if (!this.getParent().isLoading()) {
			if (item.isNew() && Strings.isNullOrEmpty(item.getBaseDocumentType())) {
				item.setRate(this.getParent().getDocumentRate());
				item.setCurrency(this.getParent().getDocumentCurrency());
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
		if (PurchaseRequest.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseRequest.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> Strings.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
