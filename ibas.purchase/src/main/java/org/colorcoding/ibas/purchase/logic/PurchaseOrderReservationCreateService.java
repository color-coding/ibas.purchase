package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialOrderedReservation;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;
import org.colorcoding.ibas.purchase.MyConfiguration;
import org.colorcoding.ibas.purchase.bo.purchaserequest.PurchaseRequest;

@LogicContract(IPurchaseOrderReservationCreateContract.class)
public class PurchaseOrderReservationCreateService
		extends BusinessLogic<IPurchaseOrderReservationCreateContract, IMaterialOrderedReservationGroup> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IPurchaseOrderReservationCreateContract) {
			IPurchaseOrderReservationCreateContract contract = (IPurchaseOrderReservationCreateContract) data;
			if (!MyConfiguration.applyVariables(PurchaseRequest.BUSINESS_OBJECT_CODE)
					.equals(contract.getBaseDocumentType())) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"BaseDocumentType", contract.getBaseDocumentType());
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IMaterialOrderedReservationGroup fetchBeAffected(IPurchaseOrderReservationCreateContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(MaterialOrderedReservationGroup.PROPERTY_SOURCEDOCUMENTTYPE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getDocumentType());
		condition = criteria.getConditions().create();
		condition.setAlias(MaterialOrderedReservationGroup.PROPERTY_SOURCEDOCUMENTENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getDocumentEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(MaterialOrderedReservationGroup.PROPERTY_SOURCEDOCUMENTLINEID.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getDocumentLineId());

		IMaterialOrderedReservationGroup reservationGroup = this.fetchBeAffected(criteria,
				IMaterialOrderedReservationGroup.class);
		if (reservationGroup == null) {
			BORepositoryMaterials boRepository = new BORepositoryMaterials();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IMaterialOrderedReservation> operationResult = boRepository
					.fetchMaterialOrderedReservation(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			IMaterialOrderedReservation reservation;
			reservationGroup = new MaterialOrderedReservationGroup();
			reservationGroup.setSourceDocumentType(contract.getDocumentType());
			reservationGroup.setSourceDocumentEntry(contract.getDocumentEntry());
			reservationGroup.setSourceDocumentLineId(contract.getDocumentLineId());
			for (IMaterialOrderedReservation item : operationResult.getResultObjects()) {
				// 判断内存中是否已有
				reservation = this.fetchBeAffected(item.getCriteria(), IMaterialOrderedReservation.class);
				if (reservation == null) {
					// 使用数据库的
					reservationGroup.getItems().add(item);
				} else {
					// 使用内存的
					reservationGroup.getItems().add(reservation);
				}
			}
			// 加载原因数据
			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setAlias(MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTTYPE.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentType());
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.AND);
			condition.setAlias(MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTENTRY.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentEntry());
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.AND);
			condition.setAlias(MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTLINEID.getName());
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentLineId());
			operationResult = boRepository.fetchMaterialOrderedReservation(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			for (IMaterialOrderedReservation item : operationResult.getResultObjects()) {
				// 判断内存中是否已有
				reservation = this.fetchBeAffected(item.getCriteria(), IMaterialOrderedReservation.class);
				if (reservation == null) {
					// 使用数据库的
					reservationGroup.getCausalDatas().add(item);
				} else {
					// 使用内存的
					reservationGroup.getCausalDatas().add(reservation);
				}
			}
		}
		return reservationGroup;
	}

	@Override
	protected void impact(IPurchaseOrderReservationCreateContract contract) {
		IMaterialOrderedReservationGroup reservationGroup = this.getBeAffected();
		String causes = String.format("FROM:%s-%s-%s", contract.getBaseDocumentType(), contract.getBaseDocumentEntry(),
				contract.getBaseDocumentLineId());
		IMaterialOrderedReservation gItem;
		BigDecimal remQuantity, avaQuantity = contract.getQuantity();
		for (IMaterialOrderedReservation item : reservationGroup.getCausalDatas()) {
			if (avaQuantity.compareTo(Decimal.ZERO) <= 0) {
				break;
			}
			if (item.getTargetDocumentType() == null) {
				continue;
			}
			remQuantity = item.getQuantity().subtract(item.getClosedQuantity());
			if (remQuantity.compareTo(Decimal.ZERO) <= 0) {
				continue;
			}
			gItem = reservationGroup.getItems()
					.firstOrDefault(c -> causes.equals(c.getCauses())
							&& c.getTargetDocumentType().equals(item.getTargetDocumentType())
							&& c.getTargetDocumentEntry().compareTo(item.getTargetDocumentEntry()) == 0
							&& c.getTargetDocumentLineId().compareTo(item.getTargetDocumentLineId()) == 0);
			if (gItem == null) {
				gItem = new MaterialOrderedReservation();
				gItem.setTargetDocumentType(item.getTargetDocumentType());
				gItem.setTargetDocumentEntry(item.getTargetDocumentEntry());
				gItem.setTargetDocumentLineId(item.getTargetDocumentLineId());
				gItem.setTargetDocumentClosed(item.getTargetDocumentClosed());
				gItem.setSourceDocumentClosed(item.getSourceDocumentClosed());
				gItem.setStatus(item.getStatus());
				gItem.setQuantity(Decimal.ZERO);
				gItem.setCauses(causes);
				reservationGroup.getItems().add(gItem);
			} else {
				if (gItem.isDeleted()) {
					gItem.undelete();
				}
			}
			gItem.setSourceDocumentType(contract.getDocumentType());
			gItem.setSourceDocumentEntry(contract.getDocumentEntry());
			gItem.setSourceDocumentLineId(contract.getDocumentLineId());
			gItem.setItemCode(item.getItemCode());
			gItem.setWarehouse(contract.getWarehouse());
			gItem.setDeliveryDate(item.getDeliveryDate());
			gItem.setInvalidDate(item.getInvalidDate());
			gItem.setInvalidTime(item.getInvalidTime());
			gItem.setRemarks(item.getRemarks());
			if (remQuantity.compareTo(avaQuantity) >= 0) {
				gItem.setQuantity(gItem.getQuantity().add(avaQuantity));
				item.setClosedQuantity(item.getClosedQuantity().add(avaQuantity));
				avaQuantity = avaQuantity.subtract(avaQuantity);
			} else {
				gItem.setQuantity(gItem.getQuantity().add(remQuantity));
				item.setClosedQuantity(item.getClosedQuantity().add(remQuantity));
				avaQuantity = avaQuantity.subtract(remQuantity);
			}
			if (avaQuantity.compareTo(Decimal.ZERO) <= 0) {
				// 无可用量
				break;
			}
		}
	}

	@Override
	protected void revoke(IPurchaseOrderReservationCreateContract contract) {
		IMaterialOrderedReservation item;
		BigDecimal remQuantity, avaQuantity = contract.getQuantity();
		IMaterialOrderedReservationGroup reservationGroup = this.getBeAffected();
		for (int i = reservationGroup.getItems().size() - 1; i >= 0; i--) {
			item = reservationGroup.getItems().get(i);
			if (item.getQuantity().compareTo(avaQuantity) >= 0) {
				remQuantity = Decimal.ZERO.add(avaQuantity);
				item.setQuantity(item.getQuantity().subtract(avaQuantity));
				avaQuantity = Decimal.ZERO;
			} else {
				remQuantity = Decimal.ZERO.add(item.getQuantity());
				avaQuantity = avaQuantity.subtract(item.getQuantity());
				item.setQuantity(Decimal.ZERO);
			}
			for (IMaterialOrderedReservation oItem : reservationGroup.getCausalDatas()) {
				if (!String.format("FROM:%s-%s-%s", oItem.getSourceDocumentType(), oItem.getSourceDocumentEntry(),
						oItem.getSourceDocumentLineId()).equals(item.getCauses())) {
					continue;
				}
				if (!oItem.getTargetDocumentType().equals(item.getTargetDocumentType())) {
					continue;
				}
				if (oItem.getTargetDocumentEntry().compareTo(item.getTargetDocumentEntry()) != 0) {
					continue;
				}
				if (oItem.getTargetDocumentLineId().compareTo(item.getTargetDocumentLineId()) != 0) {
					continue;
				}
				if (oItem.getClosedQuantity().compareTo(Decimal.ZERO) <= 0) {
					continue;
				}
				if (oItem.getClosedQuantity().compareTo(remQuantity) >= 0) {
					oItem.setClosedQuantity(oItem.getClosedQuantity().subtract(remQuantity));
					remQuantity = Decimal.ZERO;
				} else {
					remQuantity = remQuantity.subtract(oItem.getClosedQuantity());
					oItem.setClosedQuantity(Decimal.ZERO);
				}
				if (remQuantity.compareTo(Decimal.ZERO) <= 0) {
					break;
				}
			}
			if (item.getQuantity().compareTo(Decimal.ZERO) <= 0
					&& item.getClosedQuantity().compareTo(Decimal.ZERO) <= 0) {
				item.delete();
			}
			if (avaQuantity.compareTo(Decimal.ZERO) <= 0) {
				break;
			}
		}

	}

}
