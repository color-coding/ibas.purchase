package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import junit.framework.TestCase;

/** 业务测试统一的金额与数量断言，忽略精度差异但拒绝空值。 */
public abstract class AbstractBusinessTestCase extends TestCase {

	protected void assertEqualsBD(String message, BigDecimal expected, BigDecimal actual) {
		assertNotNull(message + " Expected value must not be null.", expected);
		assertNotNull(message + " Actual value must not be null.", actual);
		assertEquals(message + " expected=" + expected + ", actual=" + actual, 0, expected.compareTo(actual));
	}

	protected void assertAmount(String expected, BigDecimal actual) {
		assertEqualsBD("Calculated amount mismatch.", new BigDecimal(expected), actual);
	}
}
