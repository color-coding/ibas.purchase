package org.colorcoding.ibas.purchase.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositorySmartService;
import org.colorcoding.ibas.purchase.bo.blanketagreement.BlanketAgreement;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.DownPaymentRequest;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.PurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.PurchaseReserveInvoice;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturnrequest.PurchaseReturnRequest;

/**
 * Purchase仓库服务
 */
public interface IBORepositoryPurchaseSvc extends IBORepositorySmartService {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购贷项
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseCreditNote> fetchPurchaseCreditNote(ICriteria criteria, String token);

	/**
	 * 保存-采购贷项
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseCreditNote> savePurchaseCreditNote(PurchaseCreditNote bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购发票
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseInvoice> fetchPurchaseInvoice(ICriteria criteria, String token);

	/**
	 * 保存-采购发票
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseInvoice> savePurchaseInvoice(PurchaseInvoice bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购收货
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria, String token);

	/**
	 * 保存-采购收货
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购订单
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseOrder> fetchPurchaseOrder(ICriteria criteria, String token);

	/**
	 * 保存-采购订单
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReturn> fetchPurchaseReturn(ICriteria criteria, String token);

	/**
	 * 保存-采购退货
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购报价
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseQuote> fetchPurchaseQuote(ICriteria criteria, String token);

	/**
	 * 保存-采购报价
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseQuote> savePurchaseQuote(PurchaseQuote bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购申请
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseRequest> fetchPurchaseRequest(ICriteria criteria, String token);

	/**
	 * 保存-采购申请
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseRequest> savePurchaseRequest(PurchaseRequest bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-一揽子协议
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<BlanketAgreement> fetchBlanketAgreement(ICriteria criteria, String token);

	/**
	 * 保存-一揽子协议
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<BlanketAgreement> saveBlanketAgreement(BlanketAgreement bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-预付款申请
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<DownPaymentRequest> fetchDownPaymentRequest(ICriteria criteria, String token);

	/**
	 * 保存-预付款申请
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<DownPaymentRequest> saveDownPaymentRequest(DownPaymentRequest bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购预留发票
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReserveInvoice> fetchPurchaseReserveInvoice(ICriteria criteria, String token);

	/**
	 * 保存-采购预留发票
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReserveInvoice> savePurchaseReserveInvoice(PurchaseReserveInvoice bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货请求
	 * @param criteria 查询
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReturnRequest> fetchPurchaseReturnRequest(ICriteria criteria, String token);

	/**
	 * 保存-采购退货请求
	 * @param bo 对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReturnRequest> savePurchaseReturnRequest(PurchaseReturnRequest bo, String token);

	// --------------------------------------------------------------------------------------------//

}
