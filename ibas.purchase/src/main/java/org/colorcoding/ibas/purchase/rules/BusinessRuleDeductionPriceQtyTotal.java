package org.colorcoding.ibas.purchase.rules;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleCommon;

public class BusinessRuleDeductionPriceQtyTotal extends BusinessRuleCommon {

	protected BusinessRuleDeductionPriceQtyTotal() {
		this.setName(I18N.prop("msg_ph_business_rule_deduction_price_qty_total"));
	}

	/**
	 * 构造方法
	 * 
	 * @param total    属性-总计
	 * @param price    属性-价格
	 * @param quantity 属性-数量
	 */
	public BusinessRuleDeductionPriceQtyTotal(IPropertyInfo<BigDecimal> total, IPropertyInfo<BigDecimal> price,
			IPropertyInfo<BigDecimal> quantity) {
		this();
		this.setTotal(total);
		this.setPrice(price);
		this.setQuantity(quantity);
		// 要输入的参数
		this.getInputProperties().add(this.getTotal());
		this.getInputProperties().add(this.getPrice());
		this.getInputProperties().add(this.getQuantity());
		// 要输出的参数
		this.getAffectedProperties().add(this.getTotal());
		this.getAffectedProperties().add(this.getPrice());
	}

	private IPropertyInfo<BigDecimal> total;

	public final IPropertyInfo<BigDecimal> getTotal() {
		return total;
	}

	public final void setTotal(IPropertyInfo<BigDecimal> total) {
		this.total = total;
	}

	private IPropertyInfo<BigDecimal> price;

	public final IPropertyInfo<BigDecimal> getPrice() {
		return price;
	}

	public final void setPrice(IPropertyInfo<BigDecimal> price) {
		this.price = price;
	}

	private IPropertyInfo<BigDecimal> quantity;

	public final IPropertyInfo<BigDecimal> getQuantity() {
		return quantity;
	}

	public final void setQuantity(IPropertyInfo<BigDecimal> quantity) {
		this.quantity = quantity;
	}

	@Override
	protected void execute(BusinessRuleContext context) throws Exception {
		BigDecimal total = (BigDecimal) context.getInputValues().get(this.getTotal());
		if (total == null) {
			total = Decimal.ZERO;
		}
		BigDecimal price = (BigDecimal) context.getInputValues().get(this.getPrice());
		if (price == null) {
			price = Decimal.ZERO;
		}
		BigDecimal quantity = (BigDecimal) context.getInputValues().get(this.getQuantity());
		if (quantity == null) {
			quantity = Decimal.ZERO;
		}
		if (this.getTotal().getName().equalsIgnoreCase(context.getTrigger())) {
			if (Decimal.ZERO.compareTo(quantity) == 0) {
				context.getOutputValues().put(this.getPrice(), Decimal.ZERO);
			} else {
				BigDecimal result = Decimal.divide(total, quantity);
				context.getOutputValues().put(this.getPrice(), Decimal.round(result, Decimal.DECIMAL_PLACES_RUNNING));
			}
		} else {
			BigDecimal result = Decimal.multiply(price, quantity);
			context.getOutputValues().put(this.getTotal(), Decimal.round(result, Decimal.DECIMAL_PLACES_RUNNING));
		}
	}

}
