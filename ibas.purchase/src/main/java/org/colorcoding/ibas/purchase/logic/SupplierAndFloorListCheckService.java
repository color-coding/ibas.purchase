package org.colorcoding.ibas.purchase.logic;

import org.colorcoding.ibas.bobas.approval.IApprovalData;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.materials.bo.materialpricelist.IMaterialPriceList;
import org.colorcoding.ibas.materials.bo.materialpricelist.MaterialPriceList;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;

/**
 * 客户检查服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(ISupplierAndFloorListCheckContract.class)
public class SupplierAndFloorListCheckService extends org.colorcoding.ibas.businesspartner.logic.SupplierCheckService {
	@Override
	protected boolean checkDataStatus(Object data) {
		// 审批中也执行
		if (data instanceof IApprovalData) {
			if (((IApprovalData) data).getApprovalStatus() == emApprovalStatus.PROCESSING) {
				return true;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected void impact(org.colorcoding.ibas.businesspartner.logic.ISupplierCheckContract contract) {
		super.impact(contract);
		// 设置默认底价清单
		if (contract instanceof ISupplierAndFloorListCheckContract) {
			ISupplierAndFloorListCheckContract mContract = (ISupplierAndFloorListCheckContract) contract;
			// 获取底价清单
			boolean done = false;
			if (mContract.getPriceList() != null && mContract.getPriceList().compareTo(0) > 0) {
				// 使用价格清单的
				ICriteria criteria = new Criteria();
				criteria.setResultCount(1);
				criteria.setNoChilds(true);
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(MaterialPriceList.PROPERTY_OBJECTKEY.getName());
				condition.setOperation(ConditionOperation.EQUAL);
				condition.setValue(mContract.getPriceList());

				try (BORepositoryMaterials boRepository = new BORepositoryMaterials()) {
					boRepository.setTransaction(this.getTransaction());
					IMaterialPriceList priceList = boRepository.fetchMaterialPriceList(criteria).getResultObjects()
							.firstOrDefault();
					if (priceList != null && priceList.getFloorList() != null
							&& priceList.getFloorList().compareTo(0) > 0) {
						mContract.setFloorList(priceList.getFloorList());
						done = true;
					}
				}
			}
			if (!done && this.getBeAffected().getFloorList() != null
					&& this.getBeAffected().getFloorList().compareTo(0) > 0) {
				// 使用客户的
				mContract.setFloorList(this.getBeAffected().getFloorList());
			}
		}
	}
}
