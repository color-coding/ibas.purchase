package org.colorcoding.ibas.purchase.test;

import java.lang.reflect.Field;
import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.purchase.bo.blanketagreement.BlanketAgreement;
import org.colorcoding.ibas.purchase.bo.blanketagreement.IBlanketAgreementItem;
import org.colorcoding.ibas.purchase.data.emAgreementMethod;
import org.colorcoding.ibas.purchase.logic.BlanketAgreementQuantityService;
import org.colorcoding.ibas.purchase.logic.IBlanketAgreementQuantityContract;

/** 协议服务契约测试：真实服务验证数量/金额占用、部分与完整撤销、无效来源行；不等同整单保存生命周期。 */
public class TestBlanketAgreementConsumption extends AbstractBusinessTestCase {

	private static class Service extends BlanketAgreementQuantityService {
		void apply(IBlanketAgreementQuantityContract contract) {
			super.impact(contract);
		}

		void undo(IBlanketAgreementQuantityContract contract) {
			super.revoke(contract);
		}
	}

	private IBlanketAgreementQuantityContract contract(int line, int quantity, int amount) {
		return new IBlanketAgreementQuantityContract() {
			@Override
			public String getIdentifiers() {
				return "AGREEMENT-1-" + line;
			}

			@Override
			public String getBaseDocumentType() {
				return "AGREEMENT";
			}

			@Override
			public Integer getBaseDocumentEntry() {
				return 1;
			}

			@Override
			public Integer getBaseDocumentLineId() {
				return line;
			}

			@Override
			public BigDecimal getQuantity() {
				return BigDecimal.valueOf(quantity);
			}

			@Override
			public BigDecimal getAmount() {
				return BigDecimal.valueOf(amount);
			}
		};
	}

	private Service service(BlanketAgreement agreement) throws Exception {
		Service service = new Service();
		Field affected = BusinessLogic.class.getDeclaredField("beAffected");
		affected.setAccessible(true);
		affected.set(service, agreement);
		return service;
	}

	public void testPU_B01_ItemAgreementPartialAndFullReversal() throws Exception {
		BlanketAgreement agreement = new BlanketAgreement();
		agreement.setAgreementMethod(emAgreementMethod.ITEM);
		IBlanketAgreementItem line = agreement.getBlanketAgreementItems().create();
		line.setLineId(1);
		Service service = service(agreement);
		service.apply(contract(1, 4, 400));
		service.apply(contract(1, 6, 600));
		assertAmount("10", line.getClosedQuantity());
		assertAmount("0", line.getClosedAmount());
		assertEquals(emYesNo.YES, line.getReferenced());
		service.undo(contract(1, 4, 400));
		assertAmount("6", line.getClosedQuantity());
		assertEquals(emYesNo.YES, line.getReferenced());
		service.undo(contract(1, 6, 600));
		assertAmount("0", line.getClosedQuantity());
		assertEquals(emYesNo.NO, line.getReferenced());
	}

	public void testPU_B02_MonetaryAgreementDoesNotConsumeQuantity() throws Exception {
		BlanketAgreement agreement = new BlanketAgreement();
		agreement.setAgreementMethod(emAgreementMethod.MONETARY);
		IBlanketAgreementItem line = agreement.getBlanketAgreementItems().create();
		line.setLineId(1);
		Service service = service(agreement);
		service.apply(contract(1, 4, 400));
		service.apply(contract(1, 6, 600));
		assertAmount("1000", line.getClosedAmount());
		assertAmount("0", line.getClosedQuantity());
		assertEquals(emYesNo.YES, line.getReferenced());
		service.undo(contract(1, 4, 400));
		assertAmount("600", line.getClosedAmount());
		assertEquals(emYesNo.YES, line.getReferenced());
		service.undo(contract(1, 6, 600));
		assertAmount("0", line.getClosedAmount());
		assertEquals(emYesNo.NO, line.getReferenced());
	}

	public void testPU_B03_MissingSourceLineIsRejectedWithoutChangingOtherLines() throws Exception {
		BlanketAgreement agreement = new BlanketAgreement();
		agreement.setAgreementMethod(emAgreementMethod.ITEM);
		IBlanketAgreementItem line = agreement.getBlanketAgreementItems().create();
		line.setLineId(1);
		Service service = service(agreement);
		try {
			service.apply(contract(2, 4, 400));
			fail("Unknown source line must be rejected.");
		} catch (BusinessLogicException expected) {
			assertNotNull(expected.getMessage());
		}
		assertAmount("0", line.getClosedQuantity());
		assertAmount("0", line.getClosedAmount());
		assertEquals(emYesNo.NO, line.getReferenced());
	}
}
