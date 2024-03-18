package org.colorcoding.ibas.purchase.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.logic.ISupplierCheckContract;

/**
 * 客户检查契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface ISupplierAndFloorListCheckContract extends IBusinessLogicContract, ISupplierCheckContract {

	/**
	 * 获取-价格清单
	 * 
	 * @return 值
	 */
	Integer getPriceList();

	/**
	 * 设置-底价清单
	 * 
	 * @param value 值
	 */
	void setFloorList(Integer value);
}
