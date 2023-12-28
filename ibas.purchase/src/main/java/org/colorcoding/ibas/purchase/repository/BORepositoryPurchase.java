package org.colorcoding.ibas.purchase.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;
import org.colorcoding.ibas.purchase.bo.blanketagreement.BlanketAgreement;
import org.colorcoding.ibas.purchase.bo.blanketagreement.IBlanketAgreement;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.DownPaymentRequest;
import org.colorcoding.ibas.purchase.bo.downpaymentrequest.IDownPaymentRequest;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.IPurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.IPurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.PurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasequote.IPurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.IPurchaseReserveInvoice;
import org.colorcoding.ibas.purchase.bo.purchasereserveinvoice.PurchaseReserveInvoice;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;

/**
 * Purchase仓库
 */
public class BORepositoryPurchase extends BORepositoryServiceApplication
		implements IBORepositoryPurchaseSvc, IBORepositoryPurchaseApp {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购贷项
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseCreditNote> fetchPurchaseCreditNote(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseCreditNote.class);
	}

	/**
	 * 查询-采购贷项（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseCreditNote> fetchPurchaseCreditNote(ICriteria criteria) {
		return new OperationResult<IPurchaseCreditNote>(this.fetchPurchaseCreditNote(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购贷项
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseCreditNote> savePurchaseCreditNote(PurchaseCreditNote bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购贷项（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseCreditNote> savePurchaseCreditNote(IPurchaseCreditNote bo) {
		return new OperationResult<IPurchaseCreditNote>(
				this.savePurchaseCreditNote((PurchaseCreditNote) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购发票
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseInvoice> fetchPurchaseInvoice(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseInvoice.class);
	}

	/**
	 * 查询-采购发票（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseInvoice> fetchPurchaseInvoice(ICriteria criteria) {
		return new OperationResult<IPurchaseInvoice>(this.fetchPurchaseInvoice(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购发票
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseInvoice> savePurchaseInvoice(PurchaseInvoice bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购发票（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseInvoice> savePurchaseInvoice(IPurchaseInvoice bo) {
		return new OperationResult<IPurchaseInvoice>(
				this.savePurchaseInvoice((PurchaseInvoice) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购收货
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseDelivery.class);
	}

	/**
	 * 查询-采购收货（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria) {
		return new OperationResult<IPurchaseDelivery>(this.fetchPurchaseDelivery(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购收货
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购收货（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseDelivery> savePurchaseDelivery(IPurchaseDelivery bo) {
		return new OperationResult<IPurchaseDelivery>(
				this.savePurchaseDelivery((PurchaseDelivery) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购订单
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseOrder> fetchPurchaseOrder(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseOrder.class);
	}

	/**
	 * 查询-采购订单（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseOrder> fetchPurchaseOrder(ICriteria criteria) {
		return new OperationResult<IPurchaseOrder>(this.fetchPurchaseOrder(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购订单
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购订单（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseOrder> savePurchaseOrder(IPurchaseOrder bo) {
		return new OperationResult<IPurchaseOrder>(this.savePurchaseOrder((PurchaseOrder) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseReturn> fetchPurchaseReturn(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseReturn.class);
	}

	/**
	 * 查询-采购退货（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseReturn> fetchPurchaseReturn(ICriteria criteria) {
		return new OperationResult<IPurchaseReturn>(this.fetchPurchaseReturn(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购退货
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购退货（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseReturn> savePurchaseReturn(IPurchaseReturn bo) {
		return new OperationResult<IPurchaseReturn>(this.savePurchaseReturn((PurchaseReturn) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购报价
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseQuote> fetchPurchaseQuote(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseQuote.class);
	}

	/**
	 * 查询-采购报价（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseQuote> fetchPurchaseQuote(ICriteria criteria) {
		return new OperationResult<IPurchaseQuote>(this.fetchPurchaseQuote(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购报价
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseQuote> savePurchaseQuote(PurchaseQuote bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购报价（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseQuote> savePurchaseQuote(IPurchaseQuote bo) {
		return new OperationResult<IPurchaseQuote>(this.savePurchaseQuote((PurchaseQuote) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购申请
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseRequest> fetchPurchaseRequest(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseRequest.class);
	}

	/**
	 * 查询-采购申请（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseRequest> fetchPurchaseRequest(ICriteria criteria) {
		return new OperationResult<IPurchaseRequest>(this.fetchPurchaseRequest(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购申请
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseRequest> savePurchaseRequest(PurchaseRequest bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购申请（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseRequest> savePurchaseRequest(IPurchaseRequest bo) {
		return new OperationResult<IPurchaseRequest>(
				this.savePurchaseRequest((PurchaseRequest) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-一揽子协议
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<BlanketAgreement> fetchBlanketAgreement(ICriteria criteria, String token) {
		return super.fetch(criteria, token, BlanketAgreement.class);
	}

	/**
	 * 查询-一揽子协议（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBlanketAgreement> fetchBlanketAgreement(ICriteria criteria) {
		return new OperationResult<IBlanketAgreement>(this.fetchBlanketAgreement(criteria, this.getUserToken()));
	}

	/**
	 * 保存-一揽子协议
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<BlanketAgreement> saveBlanketAgreement(BlanketAgreement bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-一揽子协议（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBlanketAgreement> saveBlanketAgreement(IBlanketAgreement bo) {
		return new OperationResult<IBlanketAgreement>(
				this.saveBlanketAgreement((BlanketAgreement) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-预付款申请
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<DownPaymentRequest> fetchDownPaymentRequest(ICriteria criteria, String token) {
		return super.fetch(criteria, token, DownPaymentRequest.class);
	}

	/**
	 * 查询-预付款申请（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IDownPaymentRequest> fetchDownPaymentRequest(ICriteria criteria) {
		return new OperationResult<IDownPaymentRequest>(this.fetchDownPaymentRequest(criteria, this.getUserToken()));
	}

	/**
	 * 保存-预付款申请
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<DownPaymentRequest> saveDownPaymentRequest(DownPaymentRequest bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-预付款申请（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IDownPaymentRequest> saveDownPaymentRequest(IDownPaymentRequest bo) {
		return new OperationResult<IDownPaymentRequest>(
				this.saveDownPaymentRequest((DownPaymentRequest) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购预留发票
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseReserveInvoice> fetchPurchaseReserveInvoice(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseReserveInvoice.class);
	}

	/**
	 * 查询-采购预留发票（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseReserveInvoice> fetchPurchaseReserveInvoice(ICriteria criteria) {
		return new OperationResult<IPurchaseReserveInvoice>(
				this.fetchPurchaseReserveInvoice(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购预留发票
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseReserveInvoice> savePurchaseReserveInvoice(PurchaseReserveInvoice bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购预留发票（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseReserveInvoice> savePurchaseReserveInvoice(IPurchaseReserveInvoice bo) {
		return new OperationResult<IPurchaseReserveInvoice>(
				this.savePurchaseReserveInvoice((PurchaseReserveInvoice) bo, this.getUserToken()));
	}
	// --------------------------------------------------------------------------------------------//

}
