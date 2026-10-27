package org.colorcoding.ibas.purchase.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.BOUtilities;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.materials.bo.material.IMaterial;
import org.colorcoding.ibas.materials.bo.materialbatch.IMaterialBatchItem;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialInventoryReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialInventoryReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.warehouse.IWarehouse;
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

/**
 * MaterialInventoryReservationStatusService +
 * MaterialOrderedReservationStatusService 真实单据链路回归。
 *
 * <p>
 * 这两个服务由 SalesOrderItem 触发（sales 侧），按 targetDocumentStatus 操作预留状态。
 * </p>
 *
 * <p>
 * 基于源码推导的分支矩阵：
 * </p>
 * <table border="1">
 * <tr>
 * <th>条件</th>
 * <th>InventoryReservation</th>
 * <th>OrderedReservation</th>
 * </tr>
 * <tr>
 * <td>targetDocStatus=PLANNED/RELEASED + qty>closedQty</td>
 * <td>status=OPEN</td>
 * <td>targetClosed=NO + sourceClosed? CLOSED : OPEN</td>
 * </tr>
 * <tr>
 * <td>targetDocStatus=PLANNED/RELEASED + qty≤closedQty</td>
 * <td>status=CLOSED</td>
 * <td>targetClosed=NO + status=CLOSED</td>
 * </tr>
 * <tr>
 * <td>targetDocStatus=其他(CLOSED)</td>
 * <td>status=CLOSED</td>
 * <td>targetClosed=YES + status=CLOSED</td>
 * </tr>
 * <tr>
 * <td>restore=false + 已CLOSED + 非新建</td>
 * <td colspan="2">跳过（不重开）</td>
 * </tr>
 * <tr>
 * <td>revoke + trigger canceled/deleted</td>
 * <td>status=CLOSED</td>
 * <td>targetClosed=YES + status=CLOSED</td>
 * </tr>
 * </table>
 *
 * <p>
 * targetDocumentStatus 来自 SO 行： canceled=YES → CLOSED；deleted=YES → CLOSED；否则 →
 * lineStatus
 * </p>
 *
 * <p>
 * 覆盖：
 * </p>
 * <ul>
 * <li>RS-01：SO 创建后预留 status=OPEN（lineStatus=RELEASED）</li>
 * <li>RS-02：SO canceled → 采购来源 OrderedReservation 的 targetClosed=YES 且 status=CLOSED</li>
 * <li>RS-03：SO 行 lineStatus PLANNED → 预留 status=OPEN（qty>closedQty=0）</li>
 * <li>RS-04：PD 收货后 → InventoryReservation 存在且 status=OPEN</li>
 * <li>RS-05：SD 交货后 → InventoryReservation closedQuantity 满足 →
 * status=CLOSED</li>
 * <li>RS-06：关闭恢复策略时，SO 恢复后既有预留保持 CLOSED</li>
 * <li>RS-07：开启恢复策略时，SO 恢复后未履行预留重新 OPEN</li>
 * </ul>
 */
public class TestReservationStatusService extends AbstractPurchaseQuantityTestCase {

	private ICustomer prepareCustomer(BORepositoryBusinessPartner repository) throws Exception {
		return prepareCustomer(repository, "CUS-RS", "Reservation Status Test Customer");
	}

	/** 查询 target=SO 的 OrderedReservation */
	private IOperationResult<IMaterialOrderedReservation> fetchOrderedBySO(BORepositoryMaterials repo, ISalesOrder so)
			throws Exception {
		ICriteria criteria = new Criteria();
		ICondition c = criteria.getConditions().create();
		c.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTTYPE);
		c.setValue(so.getObjectCode());
		c = criteria.getConditions().create();
		c.setAlias(MaterialOrderedReservation.PROPERTY_TARGETDOCUMENTENTRY);
		c.setValue(so.getDocEntry());
		IOperationResult<IMaterialOrderedReservation> result = repo.fetchMaterialOrderedReservation(criteria);
		BOUtilities.valueOf(result);
		int matched = 0;
		for (IMaterialOrderedReservation reservation : result.getResultObjects()) {
			if (MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE)
					.equals(reservation.getSourceDocumentType())) {
				matched++;
			}
		}
		assertEquals("Expected exactly one PO-source reservation for this single-line chain.", 1, matched);
		return result;
	}

	/** 查询 target=SO 的 InventoryReservation */
	private IOperationResult<IMaterialInventoryReservation> fetchInventoryBySO(BORepositoryMaterials repo,
			ISalesOrder so) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition c = criteria.getConditions().create();
		c.setAlias(MaterialInventoryReservation.PROPERTY_TARGETDOCUMENTTYPE);
		c.setValue(so.getObjectCode());
		c = criteria.getConditions().create();
		c.setAlias(MaterialInventoryReservation.PROPERTY_TARGETDOCUMENTENTRY);
		c.setValue(so.getDocEntry());
		IOperationResult<IMaterialInventoryReservation> result = repo.fetchMaterialInventoryReservation(criteria);
		BOUtilities.valueOf(result);
		assertFalse("Expected inventory reservation for the sales order.", result.getResultObjects().isEmpty());
		return result;
	}

	// ---------------- 链路构造工具（每阶段独立 repo） ----------------

	private ISalesOrder createSO(BORepositorySales sRepo, ICustomer cu, IMaterial mt, IWarehouse wh, BigDecimal qty)
			throws Exception {
		ISalesOrder so = new SalesOrder();
		so.setCustomerCode(cu.getCode());
		ISalesOrderItem soi = so.getSalesOrderItems().create();
		soi.setItemCode(mt.getCode());
		soi.setQuantity(qty);
		soi.setPrice(Decimals.valueOf(50));
		soi.setWarehouse(wh.getCode());
		soi.setBatchManagement(mt.getBatchManagement());
		soi.setSerialManagement(mt.getSerialManagement());
		return BOUtilities.valueOf(sRepo.saveSalesOrder(so)).firstOrDefault();
	}

	private IPurchaseRequest createPR(BORepositoryPurchase pRepo, IMaterial mt, BigDecimal qty) throws Exception {
		IPurchaseRequest pr = new PurchaseRequest();
		IPurchaseRequestItem pri = pr.getPurchaseRequestItems().create();
		pri.setItemCode(mt.getCode());
		pri.setQuantity(qty);
		return BOUtilities.valueOf(pRepo.savePurchaseRequest(pr)).firstOrDefault();
	}

	private void linkOrderedReservation(BORepositoryMaterials mRepo, ISalesOrder so, IPurchaseRequest pr)
			throws Exception {
		IPurchaseRequestItem pri = pr.getPurchaseRequestItems().firstOrDefault();
		for (ISalesOrderItem soi : so.getSalesOrderItems()) {
			IMaterialOrderedReservation or = new MaterialOrderedReservation();
			or.setSourceDocumentType(pri.getObjectCode());
			or.setSourceDocumentEntry(pri.getDocEntry());
			or.setSourceDocumentLineId(pri.getLineId());
			or.setTargetDocumentType(soi.getObjectCode());
			or.setTargetDocumentEntry(soi.getDocEntry());
			or.setTargetDocumentLineId(soi.getLineId());
			or.setItemCode(soi.getItemCode());
			or.setWarehouse(soi.getWarehouse());
			or.setQuantity(soi.getQuantity());
			BOUtilities.valueOf(mRepo.saveMaterialOrderedReservation(or)).firstOrDefault();
		}
	}

	private IPurchaseOrder createPOFromPR(BORepositoryPurchase pRepo, IPurchaseRequest pr, ISupplier sp, IWarehouse wh,
			IMaterial mt) throws Exception {
		IPurchaseOrder po = new PurchaseOrder();
		po.setSupplierCode(sp.getCode());
		for (IPurchaseRequestItem pri : pr.getPurchaseRequestItems()) {
			IPurchaseOrderItem poi = po.getPurchaseOrderItems().create();
			poi.setItemCode(pri.getItemCode());
			poi.setQuantity(pri.getQuantity());
			poi.setPrice(Decimals.valueOf(20));
			poi.setWarehouse(wh.getCode());
			poi.setBatchManagement(mt.getBatchManagement());
			poi.setSerialManagement(mt.getSerialManagement());
			poi.setBaseDocumentType(pri.getObjectCode());
			poi.setBaseDocumentEntry(pri.getDocEntry());
			poi.setBaseDocumentLineId(pri.getLineId());
		}
		return BOUtilities.valueOf(pRepo.savePurchaseOrder(po)).firstOrDefault();
	}

	private IPurchaseDelivery createPDFromPO(BORepositoryPurchase pRepo, IPurchaseOrder po, MaterialKind kind)
			throws Exception {
		IPurchaseDelivery pd = new PurchaseDelivery();
		pd.setSupplierCode(po.getSupplierCode());
		for (IPurchaseOrderItem poi : po.getPurchaseOrderItems()) {
			IPurchaseDeliveryItem pdi = pd.getPurchaseDeliveryItems().create();
			pdi.setItemCode(poi.getItemCode());
			pdi.setQuantity(poi.getQuantity());
			pdi.setPrice(poi.getPrice());
			pdi.setWarehouse(poi.getWarehouse());
			pdi.setBatchManagement(poi.getBatchManagement());
			pdi.setSerialManagement(poi.getSerialManagement());
			pdi.setBaseDocumentType(poi.getObjectCode());
			pdi.setBaseDocumentEntry(poi.getDocEntry());
			pdi.setBaseDocumentLineId(poi.getLineId());
			pdi.setOriginalDocumentType(poi.getBaseDocumentType());
			pdi.setOriginalDocumentEntry(poi.getBaseDocumentEntry());
			pdi.setOriginalDocumentLineId(poi.getBaseDocumentLineId());
			if (kind == MaterialKind.BATCH) {
				IMaterialBatchItem b = pdi.getMaterialBatches().create();
				b.setBatchCode("B-" + poi.getItemCode());
				b.setQuantity(pdi.getQuantity());
			}
		}
		return BOUtilities.valueOf(pRepo.savePurchaseDelivery(pd)).firstOrDefault();
	}

	private ISalesDelivery createSDFromSO(BORepositorySales sRepo, ISalesOrder so, MaterialKind kind) throws Exception {
		ISalesDelivery sd = new SalesDelivery();
		sd.setCustomerCode(so.getCustomerCode());
		for (ISalesOrderItem soi : so.getSalesOrderItems()) {
			ISalesDeliveryItem sdi = sd.getSalesDeliveryItems().create();
			sdi.setItemCode(soi.getItemCode());
			sdi.setQuantity(soi.getQuantity());
			sdi.setPrice(soi.getPrice());
			sdi.setWarehouse(soi.getWarehouse());
			sdi.setBatchManagement(soi.getBatchManagement());
			sdi.setSerialManagement(soi.getSerialManagement());
			sdi.setBaseDocumentType(soi.getObjectCode());
			sdi.setBaseDocumentEntry(soi.getDocEntry());
			sdi.setBaseDocumentLineId(soi.getLineId());
			if (kind == MaterialKind.BATCH) {
				IMaterialBatchItem b = sdi.getMaterialBatches().create();
				b.setBatchCode("B-" + soi.getItemCode());
				b.setQuantity(sdi.getQuantity());
			}
		}
		return BOUtilities.valueOf(sRepo.saveSalesDelivery(sd)).firstOrDefault();
	}

	// ==================================================================
	// RS-01：SO 创建后 OrderedReservation status=OPEN
	// 推导依据：SO lineStatus=RELEASED → targetDocStatus=RELEASED
	// impact: targetDocStatus=RELEASED + qty(10)>closedQty(0) → status=OPEN
	// ==================================================================

	public void testRS_01_SOCreate_OrderedReservationOpen() throws Exception {
		BigDecimal QTY = Decimals.valueOf(10);
		IWarehouse wh;
		ISupplier sp;
		ICustomer cu;
		IMaterial mt;
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository()) {
			wh = prepareWarehouse(mRepo);
			sp = prepareSupplier(bRepo);
			cu = prepareCustomer(bRepo);
			mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "RS01I");
		}

		ISalesOrder so;
		try (BORepositorySales sRepo = createSalesRepository()) {
			so = createSO(sRepo, cu, mt, wh, QTY);
		}

		IPurchaseRequest pr;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			pr = createPR(pRepo, mt, QTY);
		}
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			linkOrderedReservation(mRepo, so, pr);
		}

		// 创建 PO 基于 PR → 触发 PurchaseOrderReservationCreateService 转移预留
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			createPOFromPR(pRepo, pr, sp, wh, mt);
		}

		// 验证：SO 的 OrderedReservation（source=PO 的）status=OPEN
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			IOperationResult<IMaterialOrderedReservation> rslt = fetchOrderedBySO(mRepo, so);
			assertTrue("OrderedReservation should exist.", rslt.getResultObjects().size() > 0);
			for (IMaterialOrderedReservation r : rslt.getResultObjects()) {
				// source=PO 的应该 status=OPEN
				if (r.getSourceDocumentType()
						.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE))) {
					assertEquals("OrderedReservation(source=PO).status = OPEN.", emBOStatus.OPEN, r.getStatus());
					assertEquals("OrderedReservation(source=PO).targetDocumentClosed = NO.", emYesNo.NO,
							r.getTargetDocumentClosed());
				}
			}
		}
	}

	// ==================================================================
	// RS-02：SO canceled → OrderedReservation targetClosed=YES + status=CLOSED
	// 推导依据：SO canceled=YES → targetDocStatus=CLOSED
	// impact: targetDocStatus=其他 → targetClosed=YES + status=CLOSED
	// revoke 触发时 targetClosed=YES + status=CLOSED
	// ==================================================================

	/** RS-02：销售订单关联一笔采购来源预留；取消订单；必须找到该目标预留并验证关闭状态及目标关闭标记。 */
	public void testRS_02_SOCancel_ReservationClosed() throws Exception {
		BigDecimal QTY = Decimals.valueOf(10);
		IWarehouse wh;
		ISupplier sp;
		ICustomer cu;
		IMaterial mt;
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository()) {
			wh = prepareWarehouse(mRepo);
			sp = prepareSupplier(bRepo);
			cu = prepareCustomer(bRepo);
			mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "RS02I");
		}

		ISalesOrder so;
		try (BORepositorySales sRepo = createSalesRepository()) {
			so = createSO(sRepo, cu, mt, wh, QTY);
		}
		IPurchaseRequest pr;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			pr = createPR(pRepo, mt, QTY);
		}
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			linkOrderedReservation(mRepo, so, pr);
		}
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			createPOFromPR(pRepo, pr, sp, wh, mt);
		}

		// 取消 SO
		try (BORepositorySales sRepo = createSalesRepository()) {
			so.setCanceled(emYesNo.YES);
			so = BOUtilities.valueOf(sRepo.saveSalesOrder(so)).firstOrDefault();
		}

		// 验证：OrderedReservation targetClosed=YES + status=CLOSED
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			IOperationResult<IMaterialOrderedReservation> rslt = fetchOrderedBySO(mRepo, so);
			for (IMaterialOrderedReservation r : rslt.getResultObjects()) {
				if (r.getSourceDocumentType()
						.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE))) {
					assertEquals("OrderedReservation.targetDocumentClosed = YES after SO cancel.", emYesNo.YES,
							r.getTargetDocumentClosed());
					assertEquals("OrderedReservation.status = CLOSED after SO cancel.", emBOStatus.CLOSED,
							r.getStatus());
				}
			}
		}
	}

	// ==================================================================
	// RS-03：SO 行 lineStatus=PLANNED → 预留 status=OPEN（qty>closedQty=0）
	// 推导依据：lineStatus=PLANNED → targetDocStatus=PLANNED
	// impact: PLANNED + qty(10)>closedQty(0) → status=OPEN
	// ==================================================================

	/** RS-03：有效采购来源预留；销售订单行改为计划；必须找到该预留，未消耗数量保留且目标关闭标记为 NO。 */
	public void testRS_03_SOLinePlanned_ReservationOpen() throws Exception {
		BigDecimal QTY = Decimals.valueOf(10);
		IWarehouse wh;
		ISupplier sp;
		ICustomer cu;
		IMaterial mt;
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository()) {
			wh = prepareWarehouse(mRepo);
			sp = prepareSupplier(bRepo);
			cu = prepareCustomer(bRepo);
			mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "RS03I");
		}

		ISalesOrder so;
		try (BORepositorySales sRepo = createSalesRepository()) {
			so = createSO(sRepo, cu, mt, wh, QTY);
		}
		IPurchaseRequest pr;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			pr = createPR(pRepo, mt, QTY);
		}
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			linkOrderedReservation(mRepo, so, pr);
		}
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			createPOFromPR(pRepo, pr, sp, wh, mt);
		}

		// SO 行 lineStatus → PLANNED
		try (BORepositorySales sRepo = createSalesRepository()) {
			so.getSalesOrderItems().firstOrDefault().setLineStatus(emDocumentStatus.PLANNED);
			so = BOUtilities.valueOf(sRepo.saveSalesOrder(so)).firstOrDefault();
		}

		// 验证：OrderedReservation 仍为 OPEN（PLANNED → OPEN，因为 qty>closedQty）
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			IOperationResult<IMaterialOrderedReservation> rslt = fetchOrderedBySO(mRepo, so);
			for (IMaterialOrderedReservation r : rslt.getResultObjects()) {
				if (r.getSourceDocumentType()
						.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE))) {
					assertEquals("OrderedReservation.status = OPEN (PLANNED + qty>closedQty).", emBOStatus.OPEN,
							r.getStatus());
					assertEquals("OrderedReservation.targetDocumentClosed = NO.", emYesNo.NO,
							r.getTargetDocumentClosed());
				}
			}
		}
	}

	// ==================================================================
	// RS-04：PD 收货后 → InventoryReservation 存在且 status=OPEN
	// 推导依据：PD 保存触发 MaterialInventoryReservationCreateService
	// 创建 InventoryReservation(target=SO, status=OPEN)
	// ==================================================================

	public void testRS_04_PDCreated_InventoryReservationOpen() throws Exception {
		BigDecimal QTY = Decimals.valueOf(10);
		IWarehouse wh;
		ISupplier sp;
		ICustomer cu;
		IMaterial mt;
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository()) {
			wh = prepareWarehouse(mRepo);
			sp = prepareSupplier(bRepo);
			cu = prepareCustomer(bRepo);
			mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "RS04I");
		}

		ISalesOrder so;
		try (BORepositorySales sRepo = createSalesRepository()) {
			so = createSO(sRepo, cu, mt, wh, QTY);
		}
		IPurchaseRequest pr;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			pr = createPR(pRepo, mt, QTY);
		}
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			linkOrderedReservation(mRepo, so, pr);
		}
		IPurchaseOrder po;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			po = createPOFromPR(pRepo, pr, sp, wh, mt);
		}
		// PD 收货
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			createPDFromPO(pRepo, po, MaterialKind.INVENTORY);
		}

		// 验证：InventoryReservation 存在且 status=OPEN
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			IOperationResult<IMaterialInventoryReservation> rslt = fetchInventoryBySO(mRepo, so);
			assertTrue("InventoryReservation should exist after PD.", rslt.getResultObjects().size() > 0);
			for (IMaterialInventoryReservation r : rslt.getResultObjects()) {
				assertEquals("InventoryReservation.status = OPEN.", emBOStatus.OPEN, r.getStatus());
				assertEqualsBD("InventoryReservation.quantity = QTY.", QTY, r.getQuantity());
			}
		}
	}

	// ==================================================================
	// RS-05：SD 交货后 → InventoryReservation closedQuantity 满足 → status=CLOSED
	// 推导依据：SD 保存触发 MaterialInventoryReservationReleaseService
	// 释放 closedQuantity；SO 再次保存触发 ReservationStatusService
	// 此时 qty=closedQty → status=CLOSED
	// ==================================================================

	public void testRS_05_SDDelivery_InventoryReservationClosed() throws Exception {
		BigDecimal QTY = Decimals.valueOf(10);
		IWarehouse wh;
		ISupplier sp;
		ICustomer cu;
		IMaterial mt;
		try (BORepositoryMaterials mRepo = createMaterialsRepository();
				BORepositoryBusinessPartner bRepo = createBPRepository()) {
			wh = prepareWarehouse(mRepo);
			sp = prepareSupplier(bRepo);
			cu = prepareCustomer(bRepo);
			mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, "RS05I");
		}

		ISalesOrder so;
		try (BORepositorySales sRepo = createSalesRepository()) {
			so = createSO(sRepo, cu, mt, wh, QTY);
		}
		IPurchaseRequest pr;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			pr = createPR(pRepo, mt, QTY);
		}
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			linkOrderedReservation(mRepo, so, pr);
		}
		IPurchaseOrder po;
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			po = createPOFromPR(pRepo, pr, sp, wh, mt);
		}
		try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
			createPDFromPO(pRepo, po, MaterialKind.INVENTORY);
		}
		// SD 交货
		try (BORepositorySales sRepo = createSalesRepository()) {
			createSDFromSO(sRepo, so, MaterialKind.INVENTORY);
		}

		// 验证：InventoryReservation closedQuantity=quantity → status=CLOSED
		try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
			IOperationResult<IMaterialInventoryReservation> rslt = fetchInventoryBySO(mRepo, so);
			for (IMaterialInventoryReservation r : rslt.getResultObjects()) {
				assertEqualsBD("InventoryReservation.closedQuantity = quantity (fully closed).", r.getQuantity(),
						r.getClosedQuantity());
				assertEquals("InventoryReservation.status = CLOSED (fully closed).", emBOStatus.CLOSED, r.getStatus());
			}
		}
	}

	/** RS-06：已有采购来源预留；取消再恢复销售订单；关闭恢复策略时预留保持关闭。 */
	public void testRS_06_SOCancelThenRestore_ReservationRemainsClosed() throws Exception {
		runSalesOrderReservationRestore(false);
	}

	/** RS-07：与 RS-06 相同链路；开启恢复策略；仅未履行的预留重新打开，数量不重复累计。 */
	public void testRS_07_SOCancelThenRestore_ReservationReopensWhenEnabled() throws Exception {
		runSalesOrderReservationRestore(true);
	}

	private void runSalesOrderReservationRestore(boolean restore) throws Exception {
		String previous = org.colorcoding.ibas.sales.MyConfiguration.getConfigValue(
				org.colorcoding.ibas.sales.MyConfiguration.CONFIG_ITEM_ENABLE_RESTORE_RESERVATION_STATUS);
		org.colorcoding.ibas.sales.MyConfiguration.create().addConfigValue(
				org.colorcoding.ibas.sales.MyConfiguration.CONFIG_ITEM_ENABLE_RESTORE_RESERVATION_STATUS, String.valueOf(restore));
		try {
			BigDecimal QTY = Decimals.valueOf(10);
			IWarehouse wh;
			ISupplier sp;
			ICustomer cu;
			IMaterial mt;
			try (BORepositoryMaterials mRepo = createMaterialsRepository();
					BORepositoryBusinessPartner bRepo = createBPRepository()) {
				wh = prepareWarehouse(mRepo);
				sp = prepareSupplier(bRepo);
				cu = prepareCustomer(bRepo);
				mt = prepareMaterial(mRepo, MaterialKind.INVENTORY, restore ? "RS07I" : "RS06I");
			}

			ISalesOrder so;
			try (BORepositorySales sRepo = createSalesRepository()) {
				so = createSO(sRepo, cu, mt, wh, QTY);
			}
			IPurchaseRequest pr;
			try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
				pr = createPR(pRepo, mt, QTY);
			}
			try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
				linkOrderedReservation(mRepo, so, pr);
			}
			try (BORepositoryPurchase pRepo = createPurchaseRepository()) {
				createPOFromPR(pRepo, pr, sp, wh, mt);
			}

			// 取消 SO
			try (BORepositorySales sRepo = createSalesRepository()) {
				so.setCanceled(emYesNo.YES);
				so = BOUtilities.valueOf(sRepo.saveSalesOrder(so)).firstOrDefault();
			}

			// 恢复 SO
			try (BORepositorySales sRepo = createSalesRepository()) {
				so.setCanceled(emYesNo.NO);
				so = BOUtilities.valueOf(sRepo.saveSalesOrder(so)).firstOrDefault();
			}

			// 恢复策略只决定既有关闭预留是否重开，不能依赖外部配置的默认值。
			try (BORepositoryMaterials mRepo = createMaterialsRepository()) {
				IOperationResult<IMaterialOrderedReservation> rslt = fetchOrderedBySO(mRepo, so);
				for (IMaterialOrderedReservation r : rslt.getResultObjects()) {
					if (r.getSourceDocumentType()
							.equals(MyConfiguration.applyVariables(PurchaseOrder.BUSINESS_OBJECT_CODE))) {
						assertEquals("Reservation state must follow the configured restore policy.",
								restore ? emBOStatus.OPEN : emBOStatus.CLOSED, r.getStatus());
						assertEquals("Source purchase order remains active.", emYesNo.NO, r.getSourceDocumentClosed());
						assertEquals("Target close flag must follow the same restore policy.",
								restore ? emYesNo.NO : emYesNo.YES, r.getTargetDocumentClosed());
						assertEqualsBD("Restoring must not consume any reservation quantity.", BigDecimal.ZERO, r.getClosedQuantity());
					}
				}
			}
		} finally {
			org.colorcoding.ibas.sales.MyConfiguration.create().addConfigValue(
					org.colorcoding.ibas.sales.MyConfiguration.CONFIG_ITEM_ENABLE_RESTORE_RESERVATION_STATUS,
					previous == null ? "" : previous);
		}
	}
}
