package org.colorcoding.ibas.purchase.rules;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleCommon;

public class BusinessRuleDeductionLineTotal extends BusinessRuleCommon {

	protected BusinessRuleDeductionLineTotal() {
		this.setName(I18N.prop("msg_ph_business_rule_deduction_line_total"));
	}

	/**
	 * 构造方法
	 * 
	 * @param total    属性-行总计
	 * @param preTotal 属性-税前行总计
	 * @param taxTotal 属性-税总计
	 */
	public BusinessRuleDeductionLineTotal(IPropertyInfo<BigDecimal> total, IPropertyInfo<BigDecimal> preTotal,
			IPropertyInfo<BigDecimal> taxTotal) {
		this();
		this.setTotal(total);
		this.setPreTotal(preTotal);
		this.setTaxTotal(taxTotal);
		// 要输入的参数
		this.getInputProperties().add(this.getTaxTotal());
		this.getInputProperties().add(this.getPreTotal());
		this.getInputProperties().add(this.getTotal());
		// 要输出的参数
		this.getAffectedProperties().add(this.getTotal());
		this.getAffectedProperties().add(this.getPreTotal());
	}

	private IPropertyInfo<BigDecimal> total;

	public final IPropertyInfo<BigDecimal> getTotal() {
		return total;
	}

	public final void setTotal(IPropertyInfo<BigDecimal> total) {
		this.total = total;
	}

	private IPropertyInfo<BigDecimal> preTotal;

	public final IPropertyInfo<BigDecimal> getPreTotal() {
		return preTotal;
	}

	public final void setPreTotal(IPropertyInfo<BigDecimal> preTotal) {
		this.preTotal = preTotal;
	}

	private IPropertyInfo<BigDecimal> taxTotal;

	public final IPropertyInfo<BigDecimal> getTaxTotal() {
		return taxTotal;
	}

	public final void setTaxTotal(IPropertyInfo<BigDecimal> taxTotal) {
		this.taxTotal = taxTotal;
	}

	@Override
	protected void execute(BusinessRuleContext context) throws Exception {
		BigDecimal total = (BigDecimal) context.getInputValues().get(this.getTotal());
		if (total == null) {
			total = Decimal.ZERO;
		}
		BigDecimal preTotal = (BigDecimal) context.getInputValues().get(this.getPreTotal());
		if (preTotal == null) {
			preTotal = Decimal.ZERO;
		}
		BigDecimal taxTotal = (BigDecimal) context.getInputValues().get(this.getTaxTotal());
		if (taxTotal == null) {
			taxTotal = Decimal.ZERO;
		}
		if (this.getTotal().getName().equalsIgnoreCase(context.getTrigger())) {
			context.getOutputValues().put(this.getPreTotal(), total.subtract(taxTotal));
		} else {
			context.getOutputValues().put(this.getTotal(), preTotal.add(taxTotal));
		}
	}

}
