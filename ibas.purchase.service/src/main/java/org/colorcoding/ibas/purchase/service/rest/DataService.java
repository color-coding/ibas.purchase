package org.colorcoding.ibas.purchase.service.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.purchase.bo.blanketagreement.BlanketAgreement;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.PurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
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
			@QueryParam("token") String token) {
		return super.fetchPurchaseCreditNote(criteria, token);
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
			@QueryParam("token") String token) {
		return super.savePurchaseCreditNote(bo, token);
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
	public OperationResult<PurchaseInvoice> fetchPurchaseInvoice(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchPurchaseInvoice(criteria, token);
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
	public OperationResult<PurchaseInvoice> savePurchaseInvoice(PurchaseInvoice bo, @QueryParam("token") String token) {
		return super.savePurchaseInvoice(bo, token);
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
			@QueryParam("token") String token) {
		return super.fetchPurchaseDelivery(criteria, token);
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
			@QueryParam("token") String token) {
		return super.savePurchaseDelivery(bo, token);
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
	public OperationResult<PurchaseOrder> fetchPurchaseOrder(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchPurchaseOrder(criteria, token);
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
	public OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, @QueryParam("token") String token) {
		return super.savePurchaseOrder(bo, token);
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
	public OperationResult<PurchaseReturn> fetchPurchaseReturn(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchPurchaseReturn(criteria, token);
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
	public OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, @QueryParam("token") String token) {
		return super.savePurchaseReturn(bo, token);
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
	public OperationResult<PurchaseQuote> fetchPurchaseQuote(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchPurchaseQuote(criteria, token);
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
	public OperationResult<PurchaseQuote> savePurchaseQuote(PurchaseQuote bo, @QueryParam("token") String token) {
		return super.savePurchaseQuote(bo, token);
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
	public OperationResult<PurchaseRequest> fetchPurchaseRequest(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchPurchaseRequest(criteria, token);
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
	public OperationResult<PurchaseRequest> savePurchaseRequest(PurchaseRequest bo, @QueryParam("token") String token) {
		return super.savePurchaseRequest(bo, token);
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
			@QueryParam("token") String token) {
		return super.fetchBlanketAgreement(criteria, token);
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
			@QueryParam("token") String token) {
		return super.saveBlanketAgreement(bo, token);
	}

	// --------------------------------------------------------------------------------------------//

}
