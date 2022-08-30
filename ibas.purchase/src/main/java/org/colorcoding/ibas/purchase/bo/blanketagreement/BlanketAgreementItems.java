package org.colorcoding.ibas.purchase.bo.blanketagreement;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 一揽子协议-项目 集合
 */
@XmlType(name = BlanketAgreementItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ BlanketAgreementItem.class })
public class BlanketAgreementItems extends BusinessObjects<IBlanketAgreementItem, IBlanketAgreement>
		implements IBlanketAgreementItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "BlanketAgreementItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -8230588634523330184L;

	/**
	 * 构造方法
	 */
	public BlanketAgreementItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public BlanketAgreementItems(IBlanketAgreement parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return BlanketAgreementItem.class;
	}

	/**
	 * 创建一揽子协议-项目
	 * 
	 * @return 一揽子协议-项目
	 */
	public IBlanketAgreementItem create() {
		IBlanketAgreementItem item = new BlanketAgreementItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IBlanketAgreementItem item) {
		super.afterAddItem(item);
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
	}
}
