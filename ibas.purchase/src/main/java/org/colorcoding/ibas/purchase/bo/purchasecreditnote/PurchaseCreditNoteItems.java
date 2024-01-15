package org.colorcoding.ibas.purchase.bo.purchasecreditnote;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.materials.data.DataConvert;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购贷项-行 集合
 */
@XmlType(name = PurchaseCreditNoteItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseCreditNoteItem.class })
public class PurchaseCreditNoteItems extends BusinessObjects<IPurchaseCreditNoteItem, IPurchaseCreditNote>
		implements IPurchaseCreditNoteItems {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -3803627063802678898L;

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseCreditNoteItems";

	/**
	 * 构造方法
	 */
	public PurchaseCreditNoteItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseCreditNoteItems(IPurchaseCreditNote parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseCreditNoteItem.class;
	}

	/**
	 * 创建采购贷项-行
	 * 
	 * @return 采购贷项-行
	 */
	public IPurchaseCreditNoteItem create() {
		IPurchaseCreditNoteItem item = new PurchaseCreditNoteItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseCreditNoteItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseCreditNoteItem) {
			((PurchaseCreditNoteItem) item).parent = this.getParent();
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
	protected void afterRemoveItem(IPurchaseCreditNoteItem item) {
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
		if (PurchaseCreditNote.PROPERTY_DOCUMENTCURRENCY.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (PurchaseCreditNote.PROPERTY_DOCUMENTRATE.getName().equals(evt.getPropertyName())) {
			this.where(c -> DataConvert.isNullOrEmpty(c.getBaseDocumentType()))
					.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
