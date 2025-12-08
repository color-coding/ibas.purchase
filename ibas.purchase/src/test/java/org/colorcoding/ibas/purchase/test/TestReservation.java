package org.colorcoding.ibas.purchase.test;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.DateTimes;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.organization.InvalidAuthorizationException;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.material.Material;
import org.colorcoding.ibas.materials.bo.materialbatch.IMaterialBatchItem;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialInventory;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialInventoryReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialInventory;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialInventoryReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
import org.colorcoding.ibas.materials.bo.warehouse.Warehouse;
import org.colorcoding.ibas.materials.data.emValuationMethod;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequestItem;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.sales.bo.salesdelivery.ISalesDelivery;
import org.colorcoding.ibas.sales.bo.salesdelivery.ISalesDeliveryItem;
import org.colorcoding.ibas.sales.bo.salesdelivery.SalesDelivery;
import org.colorcoding.ibas.sales.bo.salesorder.ISalesOrder;
import org.colorcoding.ibas.sales.bo.salesorder.ISalesOrderItem;
import org.colorcoding.ibas.sales.bo.salesorder.SalesOrder;
import org.colorcoding.ibas.sales.repository.BORepositorySales;

import junit.framework.TestCase;

public class TestReservation extends TestCase {

	/**
	 * 过程：销售订单 > 采购申请（预留）> 采购订单（预留转移）> 采购收货（库存预留）> 销售交货（预留关闭）
	 * 
	 * @throws InvalidAuthorizationException
	 */
	public void testOrderToDelivery() throws InvalidAuthorizationException {
		// 新建仓库
		IWarehouse warehouse = new Warehouse();
		warehouse.setCode("WHS-TEST");
		warehouse.setName("Test");
		// 新建物料
		IMaterial material = new Material();
		material.setCode(Strings.format("A-%s", DateTimes.now().toString("yyyyMMddhhmm")));
		material.setName("Test for cost");
		material.setBatchManagement(emYesNo.YES);
		material.setValuationMethod(emValuationMethod.BATCH_MOVING_AVERAGE);

		try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);
			if (boRepository.fetchWarehouse(warehouse.getCriteria()).getResultObjects().isEmpty()) {
				warehouse = BOUtilities.valueOf(boRepository.saveWarehouse(warehouse)).firstOrDefault();
			}
			if (boRepository.fetchMaterial(material.getCriteria()).getResultObjects().isEmpty()) {
				material = BOUtilities.valueOf(boRepository.saveMaterial(material)).firstOrDefault();
			}
		}

		// 新建客户
		ICustomer customer = new Customer();
		customer.setCode("CUS-TEST");
		customer.setName("Test");
		// 新建客户
		ISupplier supplier = new Supplier();
		supplier.setCode("CUS-TEST");
		supplier.setName("Test");

		try (BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);
			if (boRepository.fetchCustomer(customer.getCriteria()).getResultObjects().isEmpty()) {
				customer = BOUtilities.valueOf(boRepository.saveCustomer(customer)).firstOrDefault();
			}
			if (boRepository.fetchSupplier(supplier.getCriteria()).getResultObjects().isEmpty()) {
				supplier = BOUtilities.valueOf(boRepository.saveSupplier(supplier)).firstOrDefault();
			}
		}
		ICriteria criteria;
		ICondition condition;
		// 创建销售订单
		ISalesOrder salesOrder = new SalesOrder();
		salesOrder.setCustomerCode(customer.getCode());
		ISalesOrderItem salesOrderItem = salesOrder.getSalesOrderItems().create();
		salesOrderItem.setItemCode(material.getCode());
		salesOrderItem.setWarehouse(warehouse.getCode());
		salesOrderItem.setQuantity(10);
		salesOrderItem.setBatchManagement(material.getBatchManagement());
		salesOrderItem.setSerialManagement(material.getSerialManagement());
		salesOrderItem = salesOrder.getSalesOrderItems().create();
		salesOrderItem.setItemCode(material.getCode());
		salesOrderItem.setWarehouse(warehouse.getCode());
		salesOrderItem.setQuantity(20);
		salesOrderItem.setBatchManagement(material.getBatchManagement());
		salesOrderItem.setSerialManagement(material.getSerialManagement());

		try (BORepositorySales boRepository = new BORepositorySales()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			salesOrder = BOUtilities.valueOf(boRepository.saveSalesOrder(salesOrder)).firstOrDefault();
		}
		// 检查承诺量
		try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			material = BOUtilities.valueOf(boRepository.fetchMaterial(material.getCriteria())).firstOrDefault();

			assertEquals("material OnCommited not equest.",
					salesOrder.getSalesOrderItems().sum(c -> c.getInventoryQuantity()), material.getOnCommited());
			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialInventory.PROPERTY_ITEMCODE);
			condition.setValue(material.getCode());
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialInventory.PROPERTY_WAREHOUSE);
			condition.setValue(warehouse.getCode());
			IMaterialInventory materialInventory = BOUtilities.valueOf(boRepository.fetchMaterialInventory(criteria))
					.firstOrDefault();
			assertEquals("warehouse OnCommited not equest.",
					salesOrder.getSalesOrderItems().sum(c -> c.getInventoryQuantity()),
					materialInventory.getOnCommited());
		}
		// 创建采购申请
		IPurchaseRequest purchaseRequest = new PurchaseRequest();
		IPurchaseRequestItem purchaseRequestItem = purchaseRequest.getPurchaseRequestItems().create();
		purchaseRequestItem.setItemCode(material.getCode());
		purchaseRequestItem.setQuantity(50);
		try (BORepositoryPurchase boRepository = new BORepositoryPurchase()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			purchaseRequest = BOUtilities.valueOf(boRepository.savePurchaseRequest(purchaseRequest)).firstOrDefault();
		}
		// 采购申请占用
		try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			for (ISalesOrderItem item : salesOrder.getSalesOrderItems()) {
				IMaterialOrderedReservation orderedReservation = new MaterialOrderedReservation();
				orderedReservation.setSourceDocumentType(purchaseRequestItem.getObjectCode());
				orderedReservation.setSourceDocumentEntry(purchaseRequestItem.getDocEntry());
				orderedReservation.setSourceDocumentLineId(purchaseRequestItem.getLineId());
				orderedReservation.setTargetDocumentType(item.getObjectCode());
				orderedReservation.setTargetDocumentEntry(item.getDocEntry());
				orderedReservation.setTargetDocumentLineId(item.getLineId());
				orderedReservation.setItemCode(item.getItemCode());
				orderedReservation.setWarehouse(item.getWarehouse());
				orderedReservation.setQuantity(item.getQuantity());

				orderedReservation = BOUtilities
						.valueOf(boRepository.saveMaterialOrderedReservation(orderedReservation)).firstOrDefault();
			}
		}
		// 创建采购订单
		IPurchaseOrder purchaseOrder = new PurchaseOrder();
		purchaseOrder.setSupplierCode(supplier.getCode());
		for (IPurchaseRequestItem item : purchaseRequest.getPurchaseRequestItems()) {
			IPurchaseOrderItem purchaseOrderItem = purchaseOrder.getPurchaseOrderItems().create();
			purchaseOrderItem.setItemCode(item.getItemCode());
			purchaseOrderItem.setQuantity(item.getQuantity());
			purchaseOrderItem.setWarehouse(warehouse.getCode());
			purchaseOrderItem.setBatchManagement(material.getBatchManagement());
			purchaseOrderItem.setSerialManagement(material.getSerialManagement());
			purchaseOrderItem.setBaseDocumentType(item.getObjectCode());
			purchaseOrderItem.setBaseDocumentEntry(item.getDocEntry());
			purchaseOrderItem.setBaseDocumentLineId(item.getLineId());
		}

		try (BORepositoryPurchase boRepository = new BORepositoryPurchase()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			purchaseOrder = BOUtilities.valueOf(boRepository.savePurchaseOrder(purchaseOrder)).firstOrDefault();

			purchaseRequest = BOUtilities.valueOf(boRepository.fetchPurchaseRequest(purchaseRequest.getCriteria()))
					.firstOrDefault();

			assertEquals("purchaseRequest ClosedQuantity not equest.",
					purchaseOrder.getPurchaseOrderItems().sum(c -> c.getQuantity()),
					purchaseRequest.getPurchaseRequestItems().sum(c -> c.getClosedQuantity()));

		}
		// 检查申请预留是否转为订单预留
		try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTENTRY);
			condition.setValue(salesOrder.getDocEntry());
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTTYPE);
			condition.setValue(salesOrder.getObjectCode());

			IOperationResult<IMaterialOrderedReservation> operationResult = boRepository
					.fetchMaterialOrderedReservation(criteria);

			assertEquals("orderedReservation ClosedQuantity not equest.",
					operationResult.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseRequest.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getClosedQuantity()),
					operationResult.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getQuantity()));
		}
		// 采购订单转采购收货
		IPurchaseDelivery purchaseDelivery = new PurchaseDelivery();
		purchaseDelivery.setSupplierCode(purchaseOrder.getSupplierCode());
		for (IPurchaseOrderItem item : purchaseOrder.getPurchaseOrderItems()) {
			IPurchaseDeliveryItem purchaseDeliveryItem = purchaseDelivery.getPurchaseDeliveryItems().create();
			purchaseDeliveryItem.setItemCode(item.getItemCode());
			purchaseDeliveryItem.setQuantity(item.getQuantity());
			purchaseDeliveryItem.setWarehouse(item.getWarehouse());
			purchaseDeliveryItem.setBatchManagement(item.getBatchManagement());
			purchaseDeliveryItem.setSerialManagement(item.getSerialManagement());
			purchaseDeliveryItem.setBaseDocumentType(item.getObjectCode());
			purchaseDeliveryItem.setBaseDocumentEntry(item.getDocEntry());
			purchaseDeliveryItem.setBaseDocumentLineId(item.getLineId());
			purchaseDeliveryItem.setOriginalDocumentType(item.getBaseDocumentType());
			purchaseDeliveryItem.setOriginalDocumentEntry(item.getBaseDocumentEntry());
			purchaseDeliveryItem.setOriginalDocumentLineId(item.getBaseDocumentLineId());
			IMaterialBatchItem batchItem = purchaseDeliveryItem.getMaterialBatches().create();
			batchItem.setBatchCode(DateTimes.now().toString("yyyyMMdd"));
			batchItem.setQuantity(purchaseDeliveryItem.getQuantity());
		}
		try (BORepositoryPurchase boRepository = new BORepositoryPurchase()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			purchaseDelivery = BOUtilities.valueOf(boRepository.savePurchaseDelivery(purchaseDelivery))
					.firstOrDefault();

			purchaseOrder = BOUtilities.valueOf(boRepository.fetchPurchaseOrder(purchaseOrder.getCriteria()))
					.firstOrDefault();
			purchaseRequest = BOUtilities.valueOf(boRepository.fetchPurchaseRequest(purchaseRequest.getCriteria()))
					.firstOrDefault();

			assertEquals("purchaseDelivery ClosedQuantity not equest.",
					purchaseDelivery.getPurchaseDeliveryItems().sum(c -> c.getQuantity()),
					purchaseOrder.getPurchaseOrderItems().sum(c -> c.getClosedQuantity()));
		}
		// 检查订单预留是否转为库存预留
		try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTENTRY);
			condition.setValue(salesOrder.getDocEntry());
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTTYPE);
			condition.setValue(salesOrder.getObjectCode());

			IOperationResult<IMaterialOrderedReservation> opRsltOrderReservation = boRepository
					.fetchMaterialOrderedReservation(criteria);

			assertEquals("orderedReservation ClosedQuantity not equest.",
					opRsltOrderReservation.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseRequest.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getClosedQuantity()),
					opRsltOrderReservation.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getQuantity()));

			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialInventoryReservation.PROPERTY_TARGETDOCUMENTENTRY);
			condition.setValue(salesOrder.getDocEntry());
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialInventoryReservation.PROPERTY_TARGETDOCUMENTTYPE);
			condition.setValue(salesOrder.getObjectCode());

			IOperationResult<IMaterialInventoryReservation> opRsltInventoryReservation = boRepository
					.fetchMaterialInventoryReservation(criteria);

			int salesOrderEntry = salesOrder.getDocEntry();
			assertEquals("orderedReservation ClosedQuantity not equest.",
					opRsltOrderReservation.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getClosedQuantity()),
					opRsltInventoryReservation.getResultObjects()
							.where(c -> c.getTargetDocumentType()
									.equals(MyConfiguration.applyVariables(SalesOrder.BUSINESS_OBJECT_CODE))
									&& c.getTargetDocumentEntry().equals(salesOrderEntry))
							.sum(c -> c.getQuantity()));
		}
		// 销售交货
		ISalesDelivery salesDelivery = new SalesDelivery();
		salesDelivery.setCustomerCode(salesOrder.getCustomerCode());
		for (ISalesOrderItem item : salesOrder.getSalesOrderItems()) {
			ISalesDeliveryItem salesDeliveryItem = salesDelivery.getSalesDeliveryItems().create();
			salesDeliveryItem.setItemCode(item.getItemCode());
			salesDeliveryItem.setQuantity(item.getQuantity());
			salesDeliveryItem.setWarehouse(item.getWarehouse());
			salesDeliveryItem.setBatchManagement(item.getBatchManagement());
			salesDeliveryItem.setSerialManagement(item.getSerialManagement());
			salesDeliveryItem.setBaseDocumentType(item.getObjectCode());
			salesDeliveryItem.setBaseDocumentEntry(item.getDocEntry());
			salesDeliveryItem.setBaseDocumentLineId(item.getLineId());
			salesDeliveryItem.setOriginalDocumentType(item.getBaseDocumentType());
			salesDeliveryItem.setOriginalDocumentEntry(item.getBaseDocumentEntry());
			salesDeliveryItem.setOriginalDocumentLineId(item.getBaseDocumentLineId());
			IMaterialBatchItem batchItem = salesDeliveryItem.getMaterialBatches().create();
			batchItem.setBatchCode(DateTimes.now().toString("yyyyMMdd"));
			batchItem.setQuantity(item.getQuantity());
		}
		try (BORepositorySales boRepository = new BORepositorySales()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			salesDelivery = BOUtilities.valueOf(boRepository.saveSalesDelivery(salesDelivery)).firstOrDefault();
		}
		// 检查订单预留是否转为库存预留
		try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
			boRepository.setUserToken(OrganizationFactory.SYSTEM_USER);

			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTENTRY);
			condition.setValue(salesOrder.getDocEntry());
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTTYPE);
			condition.setValue(salesOrder.getObjectCode());

			IOperationResult<IMaterialOrderedReservation> opRsltOrderReservation = boRepository
					.fetchMaterialOrderedReservation(criteria);

			assertEquals("orderedReservation ClosedQuantity not equest.",
					opRsltOrderReservation.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseRequest.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getClosedQuantity()),
					opRsltOrderReservation.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getQuantity()));

			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialInventoryReservation.PROPERTY_TARGETDOCUMENTENTRY);
			condition.setValue(salesOrder.getDocEntry());
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialInventoryReservation.PROPERTY_TARGETDOCUMENTTYPE);
			condition.setValue(salesOrder.getObjectCode());

			IOperationResult<IMaterialInventoryReservation> opRsltInventoryReservation = boRepository
					.fetchMaterialInventoryReservation(criteria);

			int salesOrderEntry = salesOrder.getDocEntry();
			assertEquals("orderedReservation ClosedQuantity not equest.",
					opRsltOrderReservation.getResultObjects()
							.where(c -> c.getSourceDocumentType()
									.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE)))
							.sum(c -> c.getClosedQuantity()),
					opRsltInventoryReservation.getResultObjects()
							.where(c -> c.getTargetDocumentType()
									.equals(MyConfiguration.applyVariables(SalesOrder.BUSINESS_OBJECT_CODE))
									&& c.getTargetDocumentEntry().equals(salesOrderEntry))
							.sum(c -> c.getQuantity()));
			assertEquals("inventoryReservation ClosedQuantity not equest.",
					opRsltInventoryReservation.getResultObjects()
							.where(c -> c.getTargetDocumentType()
									.equals(MyConfiguration.applyVariables(SalesOrder.BUSINESS_OBJECT_CODE))
									&& c.getTargetDocumentEntry().equals(salesOrderEntry))
							.sum(c -> c.getQuantity()),
					opRsltInventoryReservation.getResultObjects()
							.where(c -> c.getTargetDocumentType()
									.equals(MyConfiguration.applyVariables(SalesOrder.BUSINESS_OBJECT_CODE))
									&& c.getTargetDocumentEntry().equals(salesOrderEntry))
							.sum(c -> c.getClosedQuantity()));
		}
	}
}
