package org.colorcoding.ibas.purchase.bo.downpaymentrequest;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.materials.data.DataConvert;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;

/**
 * 预付款申请-行 集合
 */
@XmlType(name = DownPaymentRequestItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ DownPaymentRequestItem.class })
public class DownPaymentRequestItems extends BusinessObjects<IDownPaymentRequestItem, IDownPaymentRequest>
		implements IDownPaymentRequestItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "DownPaymentRequestItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -8065794217449007436L;

	/**
	 * 构造方法
	 */
	public DownPaymentRequestItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public DownPaymentRequestItems(IDownPaymentRequest parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return DownPaymentRequestItem.class;
	}

	/**
	 * 创建预付款申请-行
	 * 
	 * @return 预付款申请-行
	 */
	public IDownPaymentRequestItem create() {
		IDownPaymentRequestItem item = new DownPaymentRequestItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IDownPaymentRequestItem item) {
		super.afterAddItem(item);
		if (item instanceof DownPaymentRequestItem) {
			((DownPaymentRequestItem) item).parent = this.getParent();
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
		if (PurchaseOrder.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseOrder.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
