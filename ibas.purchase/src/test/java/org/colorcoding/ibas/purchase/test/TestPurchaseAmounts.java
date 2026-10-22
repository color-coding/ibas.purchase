package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBusinessObject;
import org.colorcoding.ibas.bobas.core.IFieldedObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.rule.BusinessRulesManager;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.DownPaymentRequest;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.PurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.PurchaseReserveInvoice;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionDiscount;
import org.colorcoding.ibas.sales.rules.BusinessRuleDeductionPriceTaxTotal;

/** 金额回归：执行实际业务对象注册的业务规则，不使用测试公式代替实现。 */
public class TestPurchaseAmounts extends AbstractBusinessTestCase {

	private void calculate(IBusinessObject object) throws Exception {
		BusinessRulesManager.create().getRules(object.getClass()).execute(object);
	}

	private void executeRule(IBusinessObject object, Class<? extends IBusinessRule> type) throws Exception {
		for (IBusinessRule rule : BusinessRulesManager.create().getRules(object.getClass())) {
			if (type.isInstance(rule)) {
				rule.execute(object);
				return;
			}
		}
		fail(object.getClass().getSimpleName() + " must register " + type.getSimpleName());
	}

	private void calculatePrice(IBusinessObject object) throws Exception {
		executeRule(object, BusinessRuleDeductionPriceTaxTotal.class);
	}

	public void testPU_A01_TaxInclusivePrice() throws Exception {
		PurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode("AMOUNT-PARTNER");
		IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
		line.setItemCode("AMOUNT-TEST");
		line.setQuantity(new BigDecimal("3"));
		line.setTaxRate(new BigDecimal("0.13"));
		line.setPrice(new BigDecimal("113"));
		calculate(line);
		calculate(order);
		assertAmount("339", line.getLineTotal());
		assertAmount("300", line.getPreTaxLineTotal());
		assertAmount("39", line.getTaxTotal());
		assertAmount("100", line.getPreTaxPrice());
		assertAmount("339", order.getDocumentTotal());
	}

	public void testPU_A02_TaxExclusivePriceAndQuantityChange() throws Exception {
		PurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode("AMOUNT-PARTNER");
		IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
		line.setItemCode("AMOUNT-TEST");
		line.setQuantity(new BigDecimal("2"));
		line.setTaxRate(new BigDecimal("0.13"));
		line.setPreTaxPrice(new BigDecimal("100"));
		calculate(line);
		calculate(order);
		assertAmount("226", line.getLineTotal());
		assertAmount("26", line.getTaxTotal());
		// 数量与库存数量均为本次业务输入；只验证已注册的价格规则重算。
		line.setQuantity(new BigDecimal("5"));
		line.setInventoryQuantity(new BigDecimal("5"));
		calculatePrice(line);
		assertAmount("565", line.getLineTotal());
		assertAmount("500", line.getPreTaxLineTotal());
		assertAmount("65", line.getTaxTotal());
	}

	public void testPU_A03_LineAndDocumentDiscountShippingAndRounding() throws Exception {
		PurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode("AMOUNT-PARTNER");
		IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
		line.setItemCode("AMOUNT-TEST");
		line.setQuantity(new BigDecimal("2"));
		line.setUnitPrice(new BigDecimal("100"));
		line.setUnitLineTotal(new BigDecimal("200"));
		line.setDiscount(new BigDecimal("0.8"));
		executeRule(line, BusinessRuleDeductionDiscount.class);
		calculate(line);
		calculate(order);
		assertAmount("160", line.getPreTaxLineTotal());
		order.setDiscount(new BigDecimal("0.9"));
		order.setDiscountTotal(BigDecimal.ZERO);
		order.setDocumentTotal(BigDecimal.ZERO);
		order.getShippingAddresss().create().setExpense(new BigDecimal("10"));
		order.setDiffAmount(new BigDecimal("-0.01"));
		calculate(line);
		calculate(order);
		assertAmount("144", order.getDiscountTotal());
		assertAmount("153.99", order.getDocumentTotal());
	}

	public void testPU_A04_CurrencyConversionAndRateChange() throws Exception {
		PurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode("AMOUNT-PARTNER");
		IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
		line.setItemCode("AMOUNT-TEST");
		line.setQuantity(BigDecimal.ONE);
		line.setRate(new BigDecimal("0.2"));
		line.setPrice(new BigDecimal("20"));
		calculate(line);
		calculate(order);
		assertAmount("100", line.getPriceLC());
		line.setRate(new BigDecimal("0.25"));
		calculate(line);
		calculate(order);
		assertAmount("80", line.getPriceLC());
	}

	public void testPU_A05_ZeroQuantityClearsAmounts() throws Exception {
		PurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode("AMOUNT-PARTNER");
		IPurchaseOrderItem line = order.getPurchaseOrderItems().create();
		line.setItemCode("AMOUNT-TEST");
		line.setQuantity(new BigDecimal("2"));
		line.setTaxRate(new BigDecimal("0.13"));
		line.setPrice(new BigDecimal("113"));
		calculate(line);
		calculate(order);
		line.setQuantity(BigDecimal.ZERO);
		line.setInventoryQuantity(BigDecimal.ZERO);
		calculatePrice(line);
		assertAmount("0", line.getLineTotal());
		assertAmount("0", line.getPreTaxLineTotal());
		assertAmount("0", line.getTaxTotal());
	}

	public void testPU_A06_OtherDocumentAmountRules() throws Exception {
		PurchaseInvoice invoice = new PurchaseInvoice();
		invoice.setSupplierCode("AMOUNT-PARTNER");
		assertDocumentAmounts(invoice, invoice.getPurchaseInvoiceItems().create());
		PurchaseCreditNote creditNote = new PurchaseCreditNote();
		creditNote.setSupplierCode("AMOUNT-PARTNER");
		assertDocumentAmounts(creditNote, creditNote.getPurchaseCreditNoteItems().create());
		PurchaseReserveInvoice reserveInvoice = new PurchaseReserveInvoice();
		reserveInvoice.setSupplierCode("AMOUNT-PARTNER");
		assertDocumentAmounts(reserveInvoice, reserveInvoice.getPurchaseReserveInvoiceItems().create());
		DownPaymentRequest downPayment = new DownPaymentRequest();
		downPayment.setSupplierCode("AMOUNT-PARTNER");
		assertDocumentAmounts(downPayment, downPayment.getDownPaymentRequestItems().create());
	}

	private void assertDocumentAmounts(IBusinessObject document, IBusinessObject line) throws Exception {
		set(line, "ItemCode", "AMOUNT-TEST");
		set(line, "Quantity", new BigDecimal("2"));
		set(line, "TaxRate", new BigDecimal("0.13"));
		set(line, "Price", new BigDecimal("113"));
		calculate(line);
		calculate(document);
		assertAmount("226", ((IFieldedObject) line).getProperty(property(line, "LineTotal")));
		assertAmount("26", ((IFieldedObject) line).getProperty(property(line, "TaxTotal")));
		assertAmount("226", ((IFieldedObject) document).getProperty(property(document, "DocumentTotal")));
	}

	private IPropertyInfo<?> property(IBusinessObject object, String name) {
		for (IPropertyInfo<?> property : ((IFieldedObject) object).properties()) {
			if (property.getName().equals(name)) {
				return property;
			}
		}
		throw new AssertionError(object.getClass().getSimpleName() + " must register property " + name);
	}

	private void set(IBusinessObject object, String name, Object value) {
		((IFieldedObject) object).setProperty(property(object, name), value);
	}

}
