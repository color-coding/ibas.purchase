package org.colorcoding.ibas.purchase.rules;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleCommon;

public class BusinessRuleDeductionPriceTaxTotal extends BusinessRuleCommon {

	protected BusinessRuleDeductionPriceTaxTotal() {
		this.setName(I18N.prop("msg_ph_business_rule_deduction_price_tax_total"));
	}

	/**
	 * 构造方法
	 * 
	 * @param total    属性-总计
	 * @param price    属性-价格
	 * @param quantity 属性-数量
	 * @param taxRate  属性-税率
	 * @param taxTotal 属性-税总计
	 * @param preTotal 属性-税前总计
	 */
	public BusinessRuleDeductionPriceTaxTotal(IPropertyInfo<BigDecimal> total, IPropertyInfo<BigDecimal> price,
			IPropertyInfo<BigDecimal> quantity, IPropertyInfo<BigDecimal> taxRate, IPropertyInfo<BigDecimal> taxTotal,
			IPropertyInfo<BigDecimal> preTotal) {
		this();
		this.setTotal(total);
		this.setPrice(price);
		this.setQuantity(quantity);
		this.setTaxRate(taxRate);
		this.setTaxTotal(taxTotal);
		this.setPreTotal(preTotal);
		// 要输入的参数
		this.getInputProperties().add(this.getTotal());
		this.getInputProperties().add(this.getPrice());
		this.getInputProperties().add(this.getQuantity());
		this.getInputProperties().add(this.getTaxRate());
		this.getInputProperties().add(this.getTaxTotal());
		this.getInputProperties().add(this.getPreTotal());
		// 要输出的参数
		this.getAffectedProperties().add(this.getTotal());
		this.getAffectedProperties().add(this.getPrice());
		this.getAffectedProperties().add(this.getTaxTotal());
		this.getAffectedProperties().add(this.getPreTotal());
	}

	/** 价格 */
	private IPropertyInfo<BigDecimal> price;

	protected final IPropertyInfo<BigDecimal> getPrice() {
		return price;
	}

	protected final void setPrice(IPropertyInfo<BigDecimal> price) {
		this.price = price;
	}

	/** 数量 */
	private IPropertyInfo<BigDecimal> quantity;

	protected final IPropertyInfo<BigDecimal> getQuantity() {
		return quantity;
	}

	protected final void setQuantity(IPropertyInfo<BigDecimal> quantity) {
		this.quantity = quantity;
	}

	/** 总计 */
	private IPropertyInfo<BigDecimal> total;

	protected final IPropertyInfo<BigDecimal> getTotal() {
		return total;
	}

	protected final void setTotal(IPropertyInfo<BigDecimal> total) {
		this.total = total;
	}

	/** 税率 */
	private IPropertyInfo<BigDecimal> taxRate;

	protected final IPropertyInfo<BigDecimal> getTaxRate() {
		return taxRate;
	}

	protected final void setTaxRate(IPropertyInfo<BigDecimal> taxRate) {
		this.taxRate = taxRate;
	}

	/** 税总计 */
	private IPropertyInfo<BigDecimal> taxTotal;

	protected final IPropertyInfo<BigDecimal> getTaxTotal() {
		return taxTotal;
	}

	protected final void setTaxTotal(IPropertyInfo<BigDecimal> taxTotal) {
		this.taxTotal = taxTotal;
	}

	/** 税前总计 */
	private IPropertyInfo<BigDecimal> preTotal;

	protected final IPropertyInfo<BigDecimal> getPreTotal() {
		return preTotal;
	}

	protected final void setPreTotal(IPropertyInfo<BigDecimal> preTotal) {
		this.preTotal = preTotal;
	}

	@Override
	protected void execute(BusinessRuleContext context) throws Exception {
		BigDecimal price = (BigDecimal) context.getInputValues().get(this.getPrice());
		if (price == null) {
			price = Decimal.ZERO;
		}
		BigDecimal quantity = (BigDecimal) context.getInputValues().get(this.getQuantity());
		if (quantity == null) {
			quantity = Decimal.ZERO;
		}
		BigDecimal total = (BigDecimal) context.getInputValues().get(this.getTotal());
		if (total == null) {
			total = Decimal.ZERO;
		}
		BigDecimal taxRate = (BigDecimal) context.getInputValues().get(this.getTaxRate());
		if (taxRate == null) {
			taxRate = Decimal.ZERO;
		}
		BigDecimal taxTotal = (BigDecimal) context.getInputValues().get(this.getTaxTotal());
		if (taxTotal == null) {
			taxTotal = Decimal.ZERO;
		}
		BigDecimal preTotal = (BigDecimal) context.getInputValues().get(this.getPreTotal());
		if (preTotal == null) {
			preTotal = Decimal.ZERO;
		}
		if (this.getTotal().getName().equalsIgnoreCase(context.getTrigger())) {
			if (Decimal.ZERO.compareTo(quantity) >= 0) {
				return;
			}
			BigDecimal rPrice = total.divide(quantity);
			BigDecimal rPreTotal = total.divide(Decimal.ONE.add(taxRate));
			BigDecimal rTaxTotal = total.subtract(rPreTotal);
			context.getOutputValues().put(this.getPrice(), Decimal.round(rPrice, Decimal.DECIMAL_PLACES_RUNNING));
			if (Decimal.ONE.compareTo(rPreTotal.subtract(preTotal).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				context.getOutputValues().put(this.getPreTotal(),
						Decimal.round(rPreTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
			if (Decimal.ONE.compareTo(rTaxTotal.subtract(taxTotal).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				context.getOutputValues().put(this.getTaxTotal(),
						Decimal.round(rTaxTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
		} else if (this.getTaxTotal().getName().equalsIgnoreCase(context.getTrigger())) {
			BigDecimal rTotal = preTotal.add(taxTotal);
			context.getOutputValues().put(this.getTotal(), Decimal.round(rTotal, Decimal.DECIMAL_PLACES_RUNNING));
		} else if (this.getPrice().getName().equalsIgnoreCase(context.getTrigger())
				|| this.getQuantity().getName().equalsIgnoreCase(context.getTrigger())) {
			BigDecimal rTotal = price.multiply(quantity);
			BigDecimal rPreTotal = rTotal.divide(Decimal.ONE.add(taxRate));
			BigDecimal rTaxTotal = rTotal.subtract(rPreTotal);
			if (Decimal.ONE.compareTo(rTotal.subtract(total).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				// 与原总计差值，小于0.5就忽略
				context.getOutputValues().put(this.getTotal(), Decimal.round(rTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
			if (Decimal.ONE.compareTo(rPreTotal.subtract(preTotal).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				// 与原总计差值，小于0.5就忽略
				context.getOutputValues().put(this.getPreTotal(),
						Decimal.round(rPreTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
			if (Decimal.ONE.compareTo(rTaxTotal.subtract(taxTotal).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				// 与原总计差值，小于0.5就忽略
				context.getOutputValues().put(this.getTaxTotal(),
						Decimal.round(rTaxTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
		} else if (this.getTaxRate().getName().equalsIgnoreCase(context.getTrigger())
				|| this.getPreTotal().getName().equalsIgnoreCase(context.getTrigger())) {
			BigDecimal rTaxTotal = preTotal.multiply(taxRate);
			BigDecimal rTotal = preTotal.add(rTaxTotal);
			if (Decimal.ONE.compareTo(rTaxTotal.subtract(taxTotal).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				context.getOutputValues().put(this.getTaxTotal(),
						Decimal.round(rTaxTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
			if (Decimal.ONE.compareTo(rTotal.subtract(total).abs().multiply(Decimal.ONE.add(Decimal.ONE))) <= 0) {
				context.getOutputValues().put(this.getTotal(), Decimal.round(rTotal, Decimal.DECIMAL_PLACES_RUNNING));
			}
		}
	}

}
