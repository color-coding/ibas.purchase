package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.sales.bo.salesorder.ISalesOrder;
import org.colorcoding.ibas.sales.bo.salesorder.ISalesOrderItem;
import org.colorcoding.ibas.sales.bo.salesorder.SalesOrder;
import org.colorcoding.ibas.sales.repository.BORepositorySales;

/**
 * PO 基于 SO 创建 → 推进 SO.orderedQuantity 测试。
 *
 * <p>覆盖矩阵 §1.7 sales/SalesOrderOrderService：</p>
 * <p>触发条件：PurchaseOrderItem.baseDocumentType == SalesOrder.BUSINESS_OBJECT_CODE</p>
 * <p>效应：SalesOrderItem.orderedQuantity += PO.quantity</p>
 */
public class TestSalesOrderOrderedQuantity extends AbstractPurchaseQuantityTestCase {

	private static final BigDecimal QTY = Decimals.valueOf(10);

	private BORepositoryPurchase createPurchaseRepository() throws Exception {
		BORepositoryPurchase repo = new BORepositoryPurchase();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	private BORepositorySales createSalesRepository() throws Exception {
		BORepositorySales repo = new BORepositorySales();
		repo.setUserToken(OrganizationFactory.SYSTEM_USER);
		return repo;
	}

	private ICustomer prepareCustomer(BORepositoryBusinessPartner repo) throws Exception {
		ICustomer cu = new Customer();
		cu.setCode("CUS-PUQ");
		cu.setName("PU Test Customer");
		if (repo.fetchCustomer(cu.getCriteria()).getResultObjects().isEmpty()) {
			cu = BOUtilities.valueOf(repo.saveCustomer(cu)).firstOrDefault();
		} else {
			cu = BOUtilities.valueOf(repo.fetchCustomer(cu.getCriteria())).firstOrDefault();
		}
		return cu;
	}

	// ==================================================================
	// SL-C50: PO 基于 SO 创建 → SO.orderedQuantity += PO.qty
	// ==================================================================

	public void testSL_C50_POBasedOnSO_AdvancesSOOrderedQuantity() throws Exception {
		// 基础数据
		IWarehouse wh;
		ISupplier sp;
		ICustomer cu;
		IMaterial mt;
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository()) {
			wh = prepareWarehouse(mRepo);
			sp = prepareSupplier(bRepo);
			cu = prepareCustomer(bRepo);
			mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "C50I");
		}

		// 创建 SO
		ISalesOrder so;
		try (BORepositorySales sRepo = createSalesRepository()) {
			so = new SalesOrder();
			so.setCustomerCode(cu.getCode());
			ISalesOrderItem soi = so.getSalesOrderItems().create();
			soi.setItemCode(mt.getCode());
			soi.setQuantity(QTY);
			soi.setPrice(Decimals.valueOf(50));
			soi.setWarehouse(wh.getCode());
			soi.setBatchManagement(mt.getBatchManagement());
			soi.setSerialManagement(mt.getSerialManagement());
			so = BOUtilities.valueOf(sRepo.saveSalesOrder(so)).firstOrDefault();

			// 初始 orderedQuantity = 0
			ISalesOrderItem soiSaved = so.getSalesOrderItems().firstOrDefault();
			assertEqualsBD("SO.orderedQuantity initially 0.", Decimals.VALUE_ZERO, soiSaved.getOrderedQuantity());
		}

		// 创建 PO 基于 SO
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			ISalesOrderItem soi = so.getSalesOrderItems().firstOrDefault();
			IPurchaseOrder po = new PurchaseOrder();
			po.setSupplierCode(sp.getCode());
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(soi.getItemCode());
			poi.setQuantity(QTY);
			poi.setPrice(Decimals.valueOf(20));
			poi.setWarehouse(soi.getWarehouse());
			poi.setBatchManagement(mt.getBatchManagement());
			poi.setSerialManagement(mt.getSerialManagement());
			// 关键：baseDocumentType = SalesOrder
			poi.setBaseDocumentType(soi.getObjectCode());
			poi.setBaseDocumentEntry(soi.getDocEntry());
			poi.setBaseDocumentLineId(soi.getLineId());
			po = BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
			assertTrue("PO saved.", po.getDocEntry() > 0);
		}

		// 验证 SO.orderedQuantity += QTY
		try (BORepositorySales sRepo = createSalesRepository()) {
			ISalesOrder soReload = BOUtilities.valueOf(sRepo.fetchSalesOrder(so.getCriteria())).firstOrDefault();
			ISalesOrderItem soiReload = soReload.getSalesOrderItems().firstOrDefault();
			assertEqualsBD("SO.orderedQuantity = QTY after PO based on SO.", QTY, soiReload.getOrderedQuantity());
		}
	}
}
