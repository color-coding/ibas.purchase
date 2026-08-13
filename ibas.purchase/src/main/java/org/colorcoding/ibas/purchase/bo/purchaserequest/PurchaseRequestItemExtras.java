package org.colorcoding.ibas.purchase.bo.purchaserequest;

import java.beans.PropertyChangeEvent;

import jakarta.xml.bind.annotation.XmlSeeAlso;
import jakarta.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购申请-行-额外信息 集合
 */
@XmlType(name = PurchaseRequestItemExtras.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseRequestItemExtra.class })
public class PurchaseRequestItemExtras extends BusinessObjects<IPurchaseRequestItemExtra, IPurchaseRequestItem>
		implements IPurchaseRequestItemExtras {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseRequestItemExtras";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -2123180355404913070L;

	/**
	 * 构造方法
	 */
	public PurchaseRequestItemExtras() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public PurchaseRequestItemExtras(IPurchaseRequestItem parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseRequestItemExtra.class;
	}

	/**
	 * 创建采购申请-行-额外信息
	 * 
	 * @return 采购申请-行-额外信息
	 */
	public IPurchaseRequestItemExtra create() {
		IPurchaseRequestItemExtra item = new PurchaseRequestItemExtra();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseRequestItemExtra item) {
		super.afterAddItem(item);
		item.setItemId(this.getParent().getLineId());
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseRequestItemExtra.PROPERTY_DOCENTRY.getName());
		condition.setValue(this.getParent().getDocEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(PurchaseRequestItemExtra.PROPERTY_ITEMID.getName());
		condition.setValue(this.getParent().getLineId());
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (evt.getPropertyName().equals(PurchaseRequestItem.PROPERTY_LINEID.getName())) {
			for (IPurchaseRequestItemExtra item : this) {
				item.setItemId(this.getParent().getLineId());
			}
		} else if (evt.getPropertyName().equals(PurchaseRequestItem.PROPERTY_DOCENTRY.getName())) {
			for (IPurchaseRequestItemExtra item : this) {
				item.setDocEntry(this.getParent().getDocEntry());
			}
		}
	}
}
