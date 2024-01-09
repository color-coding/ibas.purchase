package org.colorcoding.ibas.purchase.bo.shippingaddress;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.bo.IBODocument;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.ISort;
import org.colorcoding.ibas.bobas.common.SortType;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 送货地址 集合
 */
@XmlType(name = ShippingAddresss.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ ShippingAddress.class })
public class ShippingAddresss extends BusinessObjects<IShippingAddress, IShippingAddressParent>
		implements IShippingAddresss {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "ShippingAddresss";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -1658374673342790176L;

	/**
	 * 构造方法
	 */
	public ShippingAddresss() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public ShippingAddresss(IShippingAddressParent parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return ShippingAddress.class;
	}

	public IShippingAddress create() {
		IShippingAddress item = new ShippingAddress();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IShippingAddress item) {
		super.afterAddItem(item);
		item.setBaseDocumentType(this.getParent().getObjectCode());
		item.setBaseDocumentEntry(this.getParent().getDocEntry());
		if (item.isNew()) {
			item.setRate(this.getParent().getDocumentRate());
			item.setCurrency(this.getParent().getDocumentCurrency());
		}

	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(ShippingAddress.PROPERTY_BASEDOCUMENTTYPE.getName());
		condition.setValue(this.getParent().getObjectCode());
		condition = criteria.getConditions().create();
		condition.setAlias(ShippingAddress.PROPERTY_BASEDOCUMENTENTRY.getName());
		condition.setValue(this.getParent().getDocEntry());
		ISort sort = criteria.getSorts().create();
		sort.setAlias(ShippingAddress.PROPERTY_ORDER.getName());
		sort.setSortType(SortType.ASCENDING);
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
		if (evt.getPropertyName().equals(IBODocument.MASTER_PRIMARY_KEY_NAME)) {
			this.forEach(c -> c.setBaseDocumentEntry(this.getParent().getDocEntry()));
		} else if (evt.getPropertyName().equals("ObjectCode")) {
			this.forEach(c -> c.setBaseDocumentType(this.getParent().getObjectCode()));
		} else if (evt.getPropertyName().equals("DocumentCurrency")) {
			this.forEach(c -> c.setCurrency(this.getParent().getDocumentCurrency()));
		} else if (evt.getPropertyName().equals("DocumentRate")) {
			this.forEach(c -> c.setRate(this.getParent().getDocumentRate()));
		}
	}
}
