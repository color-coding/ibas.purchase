package org.colorcoding.ibas.purchase.bo.purchasequote;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购报价-行-额外信息 集合
 */
@XmlType(name = PurchaseQuoteItemExtras.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseQuoteItemExtra.class })
public class PurchaseQuoteItemExtras extends BusinessObjects<IPurchaseQuoteItemExtra, IPurchaseQuoteItem>
		implements IPurchaseQuoteItemExtras {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -4267261286640701242L;
	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseQuoteItemExtras";

	/**
	 * 构造方法
	 */
	public PurchaseQuoteItemExtras() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseQuoteItemExtras(IPurchaseQuoteItem parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseQuoteItemExtra.class;
	}

	/**
	 * 创建采购报价-行-额外信息
	 * 
	 * @return 采购报价-行-额外信息
	 */
	public IPurchaseQuoteItemExtra create() {
		IPurchaseQuoteItemExtra item = new PurchaseQuoteItemExtra();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseQuoteItemExtra item) {
		super.afterAddItem(item);
		item.setItemId(this.getParent().getLineId());
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseQuoteItemExtra.PROPERTY_DOCENTRY.getName());
		condition.setValue(this.getParent().getDocEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(PurchaseQuoteItemExtra.PROPERTY_ITEMID.getName());
		condition.setValue(this.getParent().getLineId());
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (evt.getPropertyName().equals(PurchaseQuoteItem.PROPERTY_LINEID.getName())) {
			for (IPurchaseQuoteItemExtra item : this) {
				item.setItemId(this.getParent().getLineId());
			}
		} else if (evt.getPropertyName().equals(PurchaseQuoteItem.PROPERTY_DOCENTRY.getName())) {
			for (IPurchaseQuoteItemExtra item : this) {
				item.setDocEntry(this.getParent().getDocEntry());
			}
		}
	}
}
