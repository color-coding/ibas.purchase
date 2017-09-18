package org.colorcoding.ibas.purchase.bo.purchasereturn;

import java.beans.PropertyChangeEvent;
import javax.xml.bind.annotation.*;
import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
* 采购退货-行 集合
*/
@XmlType(name = PurchaseReturnItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseReturnItem.class })
public class PurchaseReturnItems extends BusinessObjects<IPurchaseReturnItem, IPurchaseReturn> implements IPurchaseReturnItems {

    /**
    * 业务对象名称
    */
    public static final String BUSINESS_OBJECT_NAME = "PurchaseReturnItems";

    /**
     * 序列化版本标记
     */
    private static final long serialVersionUID = 924952939694211469L;

    /**
     * 构造方法
     */
    public PurchaseReturnItems() {
        super();
    }

    /**
     * 构造方法
     * @param parent 父项对象
     */
    public PurchaseReturnItems(IPurchaseReturn parent) {
        super(parent);
    }

    /**
     * 元素类型
     */
    public Class<?> getElementType() {
        return PurchaseReturnItem.class;
    }

    /**
    * 创建采购退货-行
    * 
    * @return 采购退货-行
    */
    public IPurchaseReturnItem create() {
        IPurchaseReturnItem item = new PurchaseReturnItem();
        if (this.add(item)) {
            return item;
        }
        return null;
    }

    @Override
    protected void afterAddItem(IPurchaseReturnItem item) {
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
