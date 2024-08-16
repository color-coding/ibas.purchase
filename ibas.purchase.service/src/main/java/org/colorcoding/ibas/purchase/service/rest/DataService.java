package org.colorcoding.ibas.purchase.service.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.purchase.MyConfiguration;
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
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * Purchase 数据服务JSON
 */
@Path("data")
public class DataService extends BORepositoryPurchase {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购贷项
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseCreditNote")
	public OperationResult<PurchaseCreditNote> fetchPurchaseCreditNote(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseCreditNote(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购贷项
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseCreditNote")
	public OperationResult<PurchaseCreditNote> savePurchaseCreditNote(PurchaseCreditNote bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseCreditNote(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购发票
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseInvoice")
	public OperationResult<PurchaseInvoice> fetchPurchaseInvoice(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseInvoice(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购发票
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseInvoice")
	public OperationResult<PurchaseInvoice> savePurchaseInvoice(PurchaseInvoice bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseInvoice(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购收货
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseDelivery")
	public OperationResult<PurchaseDelivery> fetchPurchaseDelivery(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseDelivery(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购收货
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseDelivery")
	public OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseDelivery(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购订单
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseOrder")
	public OperationResult<PurchaseOrder> fetchPurchaseOrder(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseOrder(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购订单
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseOrder")
	public OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseOrder(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseReturn")
	public OperationResult<PurchaseReturn> fetchPurchaseReturn(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseReturn(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购退货
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseReturn")
	public OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseReturn(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购报价
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseQuote")
	public OperationResult<PurchaseQuote> fetchPurchaseQuote(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseQuote(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购报价
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseQuote")
	public OperationResult<PurchaseQuote> savePurchaseQuote(PurchaseQuote bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseQuote(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购申请
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseRequest")
	public OperationResult<PurchaseRequest> fetchPurchaseRequest(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseRequest(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购申请
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseRequest")
	public OperationResult<PurchaseRequest> savePurchaseRequest(PurchaseRequest bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseRequest(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-一揽子协议
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBlanketAgreement")
	public OperationResult<BlanketAgreement> fetchBlanketAgreement(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchBlanketAgreement(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-一揽子协议
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBlanketAgreement")
	public OperationResult<BlanketAgreement> saveBlanketAgreement(BlanketAgreement bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveBlanketAgreement(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-预付款申请
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchDownPaymentRequest")
	public OperationResult<DownPaymentRequest> fetchDownPaymentRequest(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchDownPaymentRequest(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-预付款申请
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveDownPaymentRequest")
	public OperationResult<DownPaymentRequest> saveDownPaymentRequest(DownPaymentRequest bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveDownPaymentRequest(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购预留发票
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseReserveInvoice")
	public OperationResult<PurchaseReserveInvoice> fetchPurchaseReserveInvoice(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseReserveInvoice(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购预留发票
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseReserveInvoice")
	public OperationResult<PurchaseReserveInvoice> savePurchaseReserveInvoice(PurchaseReserveInvoice bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseReserveInvoice(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货请求
	 * @param criteria 查询
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPurchaseReturnRequest")
	public OperationResult<PurchaseReturnRequest> fetchPurchaseReturnRequest(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPurchaseReturnRequest(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-采购退货请求
	 * @param bo 对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePurchaseReturnRequest")
	public OperationResult<PurchaseReturnRequest> savePurchaseReturnRequest(PurchaseReturnRequest bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePurchaseReturnRequest(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//

}
