package org.colorcoding.ibas.purchase.bo.purchaseorder;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购订单-行-额外信息 集合
 */
@XmlType(name = PurchaseOrderItemExtras.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseOrderItemExtra.class })
public class PurchaseOrderItemExtras extends BusinessObjects<IPurchaseOrderItemExtra, IPurchaseOrderItem>
		implements IPurchaseOrderItemExtras {
	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -2736774767068447435L;
	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseOrderItemExtras";

	/**
	 * 构造方法
	 */
	public PurchaseOrderItemExtras() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseOrderItemExtras(IPurchaseOrderItem parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseOrderItemExtra.class;
	}

	/**
	 * 创建采购订单-行-额外信息
	 * 
	 * @return 采购订单-行-额外信息
	 */
	public IPurchaseOrderItemExtra create() {
		IPurchaseOrderItemExtra item = new PurchaseOrderItemExtra();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseOrderItemExtra item) {
		super.afterAddItem(item);
		item.setItemId(this.getParent().getLineId());
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseOrderItemExtra.PROPERTY_DOCENTRY.getName());
		condition.setValue(this.getParent().getDocEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(PurchaseOrderItemExtra.PROPERTY_ITEMID.getName());
		condition.setValue(this.getParent().getLineId());
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (evt.getPropertyName().equals(PurchaseOrderItem.PROPERTY_LINEID.getName())) {
			for (IPurchaseOrderItemExtra item : this) {
				item.setItemId(this.getParent().getLineId());
			}
		} else if (evt.getPropertyName().equals(PurchaseOrderItem.PROPERTY_DOCENTRY.getName())) {
			for (IPurchaseOrderItemExtra item : this) {
				item.setDocEntry(this.getParent().getDocEntry());
			}
		}
	}
}
