package org.colorcoding.ibas.purchase.bo.purchasedelivery;

import java.beans.PropertyChangeEvent;
import javax.xml.bind.annotation.*;
import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
* 采购交货-行 集合
*/
@XmlType(name = PurchaseDeliveryItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseDeliveryItem.class })
public class PurchaseDeliveryItems extends BusinessObjects<IPurchaseDeliveryItem, IPurchaseDelivery> implements IPurchaseDeliveryItems {

    /**
    * 业务对象名称
    */
    public static final String BUSINESS_OBJECT_NAME = "PurchaseDeliveryItems";

    /**
     * 序列化版本标记
     */
    private static final long serialVersionUID = -1087422868584385129L;

    /**
     * 构造方法
     */
    public PurchaseDeliveryItems() {
        super();
    }

    /**
     * 构造方法
     * @param parent 父项对象
     */
    public PurchaseDeliveryItems(IPurchaseDelivery parent) {
        super(parent);
    }

    /**
     * 元素类型
     */
    public Class<?> getElementType() {
        return PurchaseDeliveryItem.class;
    }

    /**
    * 创建采购交货-行
    * 
    * @return 采购交货-行
    */
    public IPurchaseDeliveryItem create() {
        IPurchaseDeliveryItem item = new PurchaseDeliveryItem();
        if (this.add(item)) {
            return item;
        }
        return null;
    }

    @Override
    protected void afterAddItem(IPurchaseDeliveryItem item) {
        super.afterAddItem(item);
        // TODO 设置关联值
    }

    @Override
    public ICriteria getElementCriteria() {
        ICriteria criteria = super.getElementCriteria();
        // TODO 添加关联查询条件
        return criteria;
    }

    @Override
    public void onParentPropertyChanged(PropertyChangeEvent evt) {
        super.onParentPropertyChanged(evt);
        // TODO 设置关联值
    }
}
