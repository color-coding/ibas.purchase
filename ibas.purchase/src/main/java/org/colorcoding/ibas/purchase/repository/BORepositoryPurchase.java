package org.colorcoding.ibas.purchase.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;

/**
 * Purchase仓库
 */
public class BORepositoryPurchase extends BORepositoryServiceApplication
		implements IBORepositoryPurchaseSvc, IBORepositoryPurchaseApp {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购交货
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseDelivery.class);
	}

	/**
	 * 查询-采购交货（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria) {
		return new OperationResult<IPurchaseDelivery>(this.fetchPurchaseDelivery(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购交货
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购交货（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
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
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseOrder> fetchPurchaseOrder(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseOrder.class);
	}

	/**
	 * 查询-采购订单（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseOrder> fetchPurchaseOrder(ICriteria criteria) {
		return new OperationResult<IPurchaseOrder>(this.fetchPurchaseOrder(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购订单
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购订单（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseOrder> savePurchaseOrder(IPurchaseOrder bo) {
		return new OperationResult<IPurchaseOrder>(this.savePurchaseOrder((PurchaseOrder) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseReturn> fetchPurchaseReturn(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PurchaseReturn.class);
	}

	/**
	 * 查询-采购退货（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseReturn> fetchPurchaseReturn(ICriteria criteria) {
		return new OperationResult<IPurchaseReturn>(this.fetchPurchaseReturn(criteria, this.getUserToken()));
	}

	/**
	 * 保存-采购退货
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	public OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-采购退货（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPurchaseReturn> savePurchaseReturn(IPurchaseReturn bo) {
		return new OperationResult<IPurchaseReturn>(this.savePurchaseReturn((PurchaseReturn) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

}
