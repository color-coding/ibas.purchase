package org.colorcoding.ibas.purchase.logic.journalentry;

import java.math.BigDecimal;

/**
 * 采购发票（基于交货）库存价格差异。
 *
 * <p>差额 = 发票税前总计 − 交货行成本基础。
 * 由父类模板根据 {@link #isDiffMode()} 自动处理；非库存/服务物料的差额恒为 0。</p>
 */
public class PurchaseInvoiceDeliveryPreTaxPriceDiff extends PurchaseInvoiceDeliveryPreTaxPrice {

    public PurchaseInvoiceDeliveryPreTaxPriceDiff(Object sourceData, BigDecimal quantity) {
        super(sourceData, quantity);
        this.setNegate(false);
    }

    public PurchaseInvoiceDeliveryPreTaxPriceDiff(Object sourceData, BigDecimal quantity, boolean negate) {
        this(sourceData, quantity);
        this.setNegate(negate);
    }

    @Override
    protected boolean isDiffMode() {
        return true;
    }
}
