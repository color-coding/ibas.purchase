package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOFactory;
import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.DateTimes;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.bobas.configuration.Configuration;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.MyConfiguration;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.material.Material;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialInventory;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialInventory;
import org.colorcoding.ibas.materials.bo.materialpricelist.MaterialPriceItem;
import org.colorcoding.ibas.materials.bo.materialpricelist.MaterialPriceList;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
import org.colorcoding.ibas.materials.bo.warehouse.Warehouse;
import org.colorcoding.ibas.materials.data.emItemType;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;

import junit.framework.TestCase;

/**
 * 采购数量逻辑测试基类。
 */
public abstract class AbstractPurchaseQuantityTestCase extends TestCase {

	static {
		Configuration.addConfigValue(MyConfiguration.CONFIG_ITEM_ENABLE_MATERIAL_COST_PRICE_RECORDING, false);
		BOFactory.propertyInfos(MaterialPriceItem.class);
		BOFactory.propertyInfos(MaterialPriceList.class);
	}

	protected enum MaterialKind { INVENTORY, SERVICE, BATCH, SERIAL }

	protected static class QuantitySnapshot {
		public final BigDecimal onHand;
		public final BigDecimal onCommited;
		public final BigDecimal onOrdered;

		public QuantitySnapshot(BigDecimal a, BigDecimal b, BigDecimal c) {
			this.onHand = a == null ? Decimals.VALUE_ZERO : a;
			this.onCommited = b == null ? Decimals.VALUE_ZERO : b;
			this.onOrdered = c == null ? Decimals.VALUE_ZERO : c;
		}

		@Override
		public String toString() {
			return Strings.format("OnHand=%s, OnCommited=%s, OnOrdered=%s", onHand, onCommited, onOrdered);
		}
	}

	protected IWarehouse prepareWarehouse(BORepositoryMaterials repo) throws Exception {
		IWarehouse wh = new Warehouse();
		wh.setCode("WHS-PUQ");
		wh.setName("Purchase Quantity Test Warehouse");
		if (repo.fetchWarehouse(wh.getCriteria()).getResultObjects().isEmpty()) {
			wh = BOUtilities.valueOf(repo.saveWarehouse(wh)).firstOrDefault();
		} else {
			wh = BOUtilities.valueOf(repo.fetchWarehouse(wh.getCriteria())).firstOrDefault();
		}
		return wh;
	}

	protected ISupplier prepareSupplier(BORepositoryBusinessPartner repo) throws Exception {
		ISupplier sp = new Supplier();
		sp.setCode("SUP-PUQ");
		sp.setName("Purchase Quantity Test Supplier");
		if (repo.fetchSupplier(sp.getCriteria()).getResultObjects().isEmpty()) {
			sp = BOUtilities.valueOf(repo.saveSupplier(sp)).firstOrDefault();
		} else {
			sp = BOUtilities.valueOf(repo.fetchSupplier(sp.getCriteria())).firstOrDefault();
		}
		return sp;
	}

	protected IMaterial prepareMaterial(BORepositoryMaterials repo, MaterialKind kind, String tag) throws Exception {
		IMaterial m = new Material();
		m.setCode(Strings.format("%s-%s-%s", kind.name().charAt(0), tag,
				DateTimes.now().toString("yyyyMMddHHmmss")));
		m.setName(Strings.format("PU-Qty-%s-%s", kind, tag));
		switch (kind) {
			case SERVICE:
				m.setItemType(emItemType.SERVICES);
				m.setInventoryItem(emYesNo.NO);
				m.setBatchManagement(emYesNo.NO);
				m.setSerialManagement(emYesNo.NO);
				break;
			case BATCH:
				m.setItemType(emItemType.ITEM);
				m.setInventoryItem(emYesNo.YES);
				m.setBatchManagement(emYesNo.YES);
				m.setSerialManagement(emYesNo.NO);
				break;
			case SERIAL:
				m.setItemType(emItemType.ITEM);
				m.setInventoryItem(emYesNo.YES);
				m.setBatchManagement(emYesNo.NO);
				m.setSerialManagement(emYesNo.YES);
				break;
			case INVENTORY:
			default:
				m.setItemType(emItemType.ITEM);
				m.setInventoryItem(emYesNo.YES);
				m.setBatchManagement(emYesNo.NO);
				m.setSerialManagement(emYesNo.NO);
				break;
		}
		return BOUtilities.valueOf(repo.saveMaterial(m)).firstOrDefault();
	}

	protected IMaterial reload(BORepositoryMaterials repo, IMaterial m) throws Exception {
		return BOUtilities.valueOf(repo.fetchMaterial(m.getCriteria())).firstOrDefault();
	}

	protected QuantitySnapshot snapshotMaterial(BORepositoryMaterials repo, IMaterial m) throws Exception {
		IMaterial x = reload(repo, m);
		if (x == null) {
			return new QuantitySnapshot(Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
		return new QuantitySnapshot(x.getOnHand(), x.getOnCommited(), x.getOnOrdered());
	}

	protected QuantitySnapshot snapshotWarehouse(BORepositoryMaterials repo, String itemCode, String warehouseCode)
			throws Exception {
		ICriteria criteria = new Criteria();
		ICondition c = criteria.getConditions().create();
		c.setAlias(MaterialInventory.PROPERTY_ITEMCODE);
		c.setValue(itemCode);
		c = criteria.getConditions().create();
		c.setAlias(MaterialInventory.PROPERTY_WAREHOUSE);
		c.setValue(warehouseCode);
		IMaterialInventory inv = BOUtilities.valueOf(repo.fetchMaterialInventory(criteria)).firstOrDefault();
		if (inv == null) {
			return new QuantitySnapshot(Decimals.VALUE_ZERO, Decimals.VALUE_ZERO, Decimals.VALUE_ZERO);
		}
		return new QuantitySnapshot(inv.getOnHand(), inv.getOnCommited(), inv.getOnOrdered());
	}

	protected void assertQuantities(BORepositoryMaterials repo, IMaterial material, String warehouseCode,
			BigDecimal expOnHand, BigDecimal expOnCommited, BigDecimal expOnOrdered) throws Exception {
		QuantitySnapshot m = snapshotMaterial(repo, material);
		QuantitySnapshot w = snapshotWarehouse(repo, material.getCode(), warehouseCode);

		assertEqualsBD("[Material] OnHand mismatch.", expOnHand, m.onHand);
		assertEqualsBD("[Material] OnCommited mismatch.", expOnCommited, m.onCommited);
		assertEqualsBD("[Material] OnOrdered mismatch.", expOnOrdered, m.onOrdered);

		assertEqualsBD("[Warehouse] OnHand mismatch.", expOnHand, w.onHand);
		assertEqualsBD("[Warehouse] OnCommited mismatch.", expOnCommited, w.onCommited);
		assertEqualsBD("[Warehouse] OnOrdered mismatch.", expOnOrdered, w.onOrdered);
	}

	protected void assertEqualsBD(String msg, BigDecimal expected, BigDecimal actual) {
		BigDecimal e = expected == null ? Decimals.VALUE_ZERO : expected;
		BigDecimal a = actual == null ? Decimals.VALUE_ZERO : actual;
		assertEquals(msg + " expected=" + e + ", actual=" + a, 0, e.compareTo(a));
	}

	protected BORepositoryMaterials createMaterialsRepository() throws Exception {
		BORepositoryMaterials repo = new BORepositoryMaterials();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	protected BORepositoryBusinessPartner createBPRepository() throws Exception {
		BORepositoryBusinessPartner repo = new BORepositoryBusinessPartner();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}
}
