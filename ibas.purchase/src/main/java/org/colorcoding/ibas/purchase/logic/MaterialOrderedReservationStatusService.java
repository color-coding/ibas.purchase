package org.colorcoding.ibas.purchase.logic;

import java.util.ArrayList;
import java.util.Iterator;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBODocument;
import org.colorcoding.ibas.bobas.bo.IBODocumentLine;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.bo.IBOTagDeleted;
import org.colorcoding.ibas.bobas.bo.IBusinessObject;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessObjectGroup;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialOrderedReservations;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialOrderedReservation;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialOrderedReservations;
import org.colorcoding.ibas.materials.logic.MaterialInventoryBusinessLogic;
import org.colorcoding.ibas.materials.repository.BORepositoryMaterials;

@LogicContract(IMaterialOrderedReservationStatusContract.class)
public class MaterialOrderedReservationStatusService extends
		MaterialInventoryBusinessLogic<IMaterialOrderedReservationStatusContract, IMaterialOrderedReservationGroup> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IBODocument) {
			if (((IBODocument) data).getDocumentStatus() == emDocumentStatus.PLANNED) {
				return true;
			}
		} else if (data instanceof IBODocumentLine) {
			if (((IBODocumentLine) data).getLineStatus() == emDocumentStatus.PLANNED) {
				return true;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IMaterialOrderedReservationGroup fetchBeAffected(IMaterialOrderedReservationStatusContract contract) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTTYPE.getName());
		condition.setValue(contract.getSourceDocumentType());
		condition = criteria.getConditions().create();
		condition.setAlias(MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTENTRY.getName());
		condition.setValue(contract.getSourceDocumentEntry());
		condition = criteria.getConditions().create();
		condition.setAlias(MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTLINEID.getName());
		condition.setValue(contract.getSourceDocumentLineId());
		IMaterialOrderedReservationGroup reservationGroup = this.fetchBeAffected(criteria,
				IMaterialOrderedReservationGroup.class);
		if (reservationGroup == null) {
			BORepositoryMaterials boRepository = new BORepositoryMaterials();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IMaterialOrderedReservation> opRsltInventory = boRepository
					.fetchMaterialOrderedReservation(criteria);
			if (opRsltInventory.getError() != null) {
				throw new BusinessLogicException(opRsltInventory.getError());
			}
			IMaterialOrderedReservation reservation;
			reservationGroup = new MaterialOrderedReservationGroup();
			for (IMaterialOrderedReservation item : opRsltInventory.getResultObjects()) {
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
		}
		return reservationGroup;
	}

	@Override
	protected void impact(IMaterialOrderedReservationStatusContract contract) {
		for (IMaterialOrderedReservation item : this.getBeAffected().getItems()) {
			if (contract.getSourceDocumentStatus() == emDocumentStatus.PLANNED
					|| contract.getSourceDocumentStatus() == emDocumentStatus.RELEASED) {
				item.setSourceDocumentClosed(emYesNo.NO);
				if (item.getTargetDocumentClosed() == emYesNo.YES) {
					item.setStatus(emBOStatus.CLOSED);
				} else {
					if (item.getQuantity().compareTo(item.getClosedQuantity()) > 0) {
						item.setStatus(emBOStatus.OPEN);
					} else {
						item.setStatus(emBOStatus.CLOSED);
					}
				}
			} else {
				item.setSourceDocumentClosed(emYesNo.YES);
				item.setStatus(emBOStatus.CLOSED);
			}
		}
	}

	@Override
	protected void revoke(IMaterialOrderedReservationStatusContract contract) {
		for (IMaterialOrderedReservation item : this.getBeAffected().getItems()) {
			item.setStatus(emBOStatus.CLOSED);
			// 删除的记录状态，否则目标对象编辑时逻辑不对
			if (this.getLogicChain().getTrigger().isDeleted()) {
				item.setSourceDocumentClosed(emYesNo.YES);
			}
			if (this.getLogicChain().getTrigger() instanceof IBOTagCanceled) {
				if (((IBOTagCanceled) this.getLogicChain().getTrigger()).getCanceled() == emYesNo.YES) {
					item.setSourceDocumentClosed(emYesNo.YES);
				}
			}
			if (this.getLogicChain().getTrigger() instanceof IBOTagDeleted) {
				if (((IBOTagDeleted) this.getLogicChain().getTrigger()).getDeleted() == emYesNo.YES) {
					item.setSourceDocumentClosed(emYesNo.YES);
				}
			}
		}
	}

}

interface IMaterialOrderedReservationGroup extends IBusinessObject {

	/**
	 * 获取-源单据类型
	 * 
	 * @return 值
	 */
	String getSourceDocumentType();

	/**
	 * 设置-源单据类型
	 * 
	 * @param value 值
	 */
	void setSourceDocumentType(String value);

	/**
	 * 获取-源单据编号
	 * 
	 * @return 值
	 */
	Integer getSourceDocumentEntry();

	/**
	 * 设置-源单据编号
	 * 
	 * @param value 值
	 */
	void setSourceDocumentEntry(Integer value);

	/**
	 * 获取-源单据行号
	 * 
	 * @return 值
	 */
	Integer getSourceDocumentLineId();

	/**
	 * 设置-源单据行号
	 * 
	 * @param value 值
	 */
	void setSourceDocumentLineId(Integer value);

	/**
	 * 获取-行集合
	 * 
	 * @return 值
	 */
	IMaterialOrderedReservations getItems();

	/**
	 * 设置-行集合
	 * 
	 * @param value 值
	 */
	void setItems(IMaterialOrderedReservations value);

	/**
	 * 获取-原因数据集合
	 * 
	 * @return 值
	 */
	IMaterialOrderedReservations getCausalDatas();

	/**
	 * 设置-原因数据集合
	 * 
	 * @param value 值
	 */
	void setCausalDatas(IMaterialOrderedReservations value);
}

class MaterialOrderedReservationGroup extends BusinessObject<IMaterialOrderedReservationGroup>
		implements IMaterialOrderedReservationGroup, IBusinessObjectGroup {

	private static final long serialVersionUID = 4518927200569065618L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = MaterialOrderedReservationGroup.class;

	public MaterialOrderedReservationGroup() {
		this.setSavable(false);
	}

	/**
	 * 属性名称-源单据类型
	 */
	private static final String PROPERTY_SOURCEDOCUMENTTYPE_NAME = "SourceDocumentType";

	/**
	 * 源单据类型 属性
	 */
	@DbField(name = "SourceType", type = DbFieldType.ALPHANUMERIC)
	public static final IPropertyInfo<String> PROPERTY_SOURCEDOCUMENTTYPE = registerProperty(
			PROPERTY_SOURCEDOCUMENTTYPE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-源单据类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SOURCEDOCUMENTTYPE_NAME)
	public final String getSourceDocumentType() {
		return this.getProperty(PROPERTY_SOURCEDOCUMENTTYPE);
	}

	/**
	 * 设置-源单据类型
	 * 
	 * @param value 值
	 */
	public final void setSourceDocumentType(String value) {
		this.setProperty(PROPERTY_SOURCEDOCUMENTTYPE, value);
	}

	/**
	 * 属性名称-源单据编号
	 */
	private static final String PROPERTY_SOURCEDOCUMENTENTRY_NAME = "SourceDocumentEntry";

	/**
	 * 源单据编号 属性
	 */
	@DbField(name = "SourceEntry", type = DbFieldType.NUMERIC)
	public static final IPropertyInfo<Integer> PROPERTY_SOURCEDOCUMENTENTRY = registerProperty(
			PROPERTY_SOURCEDOCUMENTENTRY_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-源单据编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SOURCEDOCUMENTENTRY_NAME)
	public final Integer getSourceDocumentEntry() {
		return this.getProperty(PROPERTY_SOURCEDOCUMENTENTRY);
	}

	/**
	 * 设置-源单据编号
	 * 
	 * @param value 值
	 */
	public final void setSourceDocumentEntry(Integer value) {
		this.setProperty(PROPERTY_SOURCEDOCUMENTENTRY, value);
	}

	/**
	 * 属性名称-源单据行号
	 */
	private static final String PROPERTY_SOURCEDOCUMENTLINEID_NAME = "SourceDocumentLineId";

	/**
	 * 源单据行号 属性
	 */
	@DbField(name = "SourceLine", type = DbFieldType.NUMERIC)
	public static final IPropertyInfo<Integer> PROPERTY_SOURCEDOCUMENTLINEID = registerProperty(
			PROPERTY_SOURCEDOCUMENTLINEID_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-源单据行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SOURCEDOCUMENTLINEID_NAME)
	public final Integer getSourceDocumentLineId() {
		return this.getProperty(PROPERTY_SOURCEDOCUMENTLINEID);
	}

	/**
	 * 设置-源单据行号
	 * 
	 * @param value 值
	 */
	public final void setSourceDocumentLineId(Integer value) {
		this.setProperty(PROPERTY_SOURCEDOCUMENTLINEID, value);
	}

	/**
	 * 属性名称-项目集合
	 */
	private static final String PROPERTY_ITEMS_NAME = "Items";

	/**
	 * 库存收货-行的集合属性
	 * 
	 */
	public static final IPropertyInfo<IMaterialOrderedReservations> PROPERTY_ITEMS = registerProperty(
			PROPERTY_ITEMS_NAME, IMaterialOrderedReservations.class, MY_CLASS);

	/**
	 * 获取-项目集合
	 * 
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_ITEMS_NAME)
	@XmlElement(name = MaterialOrderedReservation.BUSINESS_OBJECT_NAME, type = MaterialOrderedReservation.class)
	public final IMaterialOrderedReservations getItems() {
		return this.getProperty(PROPERTY_ITEMS);
	}

	/**
	 * 设置-项目集合
	 * 
	 * @param value 值
	 */
	public final void setItems(IMaterialOrderedReservations value) {
		this.setProperty(PROPERTY_ITEMS, value);
	}

	/**
	 * 属性名称-项目集合
	 */
	private static final String PROPERTY_CAUSALDATAS_NAME = "CausalDatas";

	/**
	 * 库存收货-行的集合属性
	 * 
	 */
	public static final IPropertyInfo<IMaterialOrderedReservations> PROPERTY_CAUSALDATAS = registerProperty(
			PROPERTY_CAUSALDATAS_NAME, IMaterialOrderedReservations.class, MY_CLASS);

	/**
	 * 获取-项目集合
	 * 
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_CAUSALDATAS_NAME)
	@XmlElement(name = MaterialOrderedReservation.BUSINESS_OBJECT_NAME, type = MaterialOrderedReservation.class)
	public final IMaterialOrderedReservations getCausalDatas() {
		return this.getProperty(PROPERTY_CAUSALDATAS);
	}

	/**
	 * 设置-项目集合
	 * 
	 * @param value 值
	 */
	public final void setCausalDatas(IMaterialOrderedReservations value) {
		this.setProperty(PROPERTY_CAUSALDATAS, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setItems(new MaterialOrderedReservations(this));
		this.setCausalDatas(new MaterialOrderedReservations(this));
	}

	@Override
	public Iterator<IBusinessObject> iterator() {
		ArrayList<IBusinessObject> list = new ArrayList<>();
		list.addAll(this.getItems());
		list.addAll(this.getCausalDatas());
		return list.iterator();
	}
}
