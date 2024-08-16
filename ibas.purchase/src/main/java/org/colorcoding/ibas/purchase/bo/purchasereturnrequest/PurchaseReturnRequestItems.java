package org.colorcoding.ibas.purchase.bo.purchasereturnrequest;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.materials.data.DataConvert;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购退货请求-行 集合
 */
@XmlType(name = PurchaseReturnRequestItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseReturnRequestItem.class })
public class PurchaseReturnRequestItems extends BusinessObjects<IPurchaseReturnRequestItem, IPurchaseReturnRequest>
		implements IPurchaseReturnRequestItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseReturnRequestItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 924952939694211469L;

	/**
	 * 构造方法
	 */
	public PurchaseReturnRequestItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseReturnRequestItems(IPurchaseReturnRequest parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseReturnRequestItem.class;
	}

	/**
	 * 创建采购退货请求-行
	 * 
	 * @return 采购退货请求-行
	 */
	public IPurchaseReturnRequestItem create() {
		IPurchaseReturnRequestItem item = new PurchaseReturnRequestItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseReturnRequestItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseReturnRequestItem) {
			((PurchaseReturnRequestItem) item).parent = this.getParent();
		}
		// 记录父项的值
		if (!this.getParent().isLoading()) {
			if (item.isNew() && DataConvert.isNullOrEmpty(item.getBaseDocumentType())) {
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
		if (PurchaseReturnRequest.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseReturnRequest.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
