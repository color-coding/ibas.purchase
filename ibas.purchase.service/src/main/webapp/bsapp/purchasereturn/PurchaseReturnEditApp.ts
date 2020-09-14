/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 编辑应用-采购退货 */
        export class PurchaseReturnEditApp extends ibas.BOEditService<IPurchaseReturnEditView, bo.PurchaseReturn> {
            /** 应用标识 */
            static APPLICATION_ID: string = "ead5bd17-e0b9-4787-adb8-4bd50b2a1a8f";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasereturn_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseReturn.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnEditApp.APPLICATION_ID;
                this.name = PurchaseReturnEditApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addPurchaseReturnItemEvent = this.addPurchaseReturnItem;
                this.view.removePurchaseReturnItemEvent = this.removePurchaseReturnItem;
                this.view.choosePurchaseReturnSupplierEvent = this.choosePurchaseReturnSupplier;
                this.view.choosePurchaseReturnContactPersonEvent = this.choosePurchaseReturnContactPerson;
                this.view.choosePurchaseReturnPriceListEvent = this.choosePurchaseReturnPriceList;
                this.view.choosePurchaseReturnItemMaterialEvent = this.choosePurchaseReturnItemMaterial;
                this.view.choosePurchaseReturnItemWarehouseEvent = this.choosePurchaseReturnItemWarehouse;
                this.view.choosePurchaseReturnItemMaterialBatchEvent = this.choosePurchaseReturnItemMaterialBatch;
                this.view.choosePurchaseReturnItemMaterialSerialEvent = this.choosePurchaseReturnItemMaterialSerial;
                this.view.choosePurchaseReturnPurchaseOrderEvent = this.choosePurchaseReturnPurchaseOrder;
                this.view.choosePurchaseReturnPurchaseDeliveryEvent = this.choosePurchaseReturnPurchaseDelivery;
                this.view.editShippingAddressesEvent = this.editShippingAddresses;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.PurchaseReturn();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseReturn(this.editData);
                this.view.showPurchaseReturnItems(this.editData.purchaseReturnItems.filterDeleted());
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseReturn): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseReturn)) {
                    let data: bo.PurchaseReturn = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.editData = data;
                        that.show();
                        return;
                    }
                    // 尝试重新查询编辑对象
                    let criteria: ibas.ICriteria = data.criteria();
                    if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                        // 有效的查询对象查询
                        let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                        boRepository.fetchPurchaseReturn({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturn>): void {
                                let data: bo.PurchaseReturn;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.PurchaseReturn)) {
                                    // 查询到了有效数据
                                    that.editData = data;
                                    that.show();
                                } else {
                                    // 数据重新检索无效
                                    that.messages({
                                        type: ibas.emMessageType.WARNING,
                                        message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                        onCompleted(): void {
                                            that.show();
                                        }
                                    });
                                }
                            }
                        });
                        // 开始查询数据
                        return;
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.savePurchaseReturn({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturn>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                // 删除成功，释放当前对象
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                that.editData = undefined;
                            } else {
                                // 替换编辑对象
                                that.editData = opRslt.resultObjects.firstOrDefault();
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                            // 刷新当前视图
                            that.viewShowed();
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            that.editData.delete();
                            that.saveData();
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.PurchaseReturn();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                        that.viewShowed();
                    }
                };
                if (that.editData.isDirty) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("shell_data_not_saved_continue"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                createData();
                            }
                        }
                    });
                } else {
                    createData();
                }
            }
            private choosePurchaseReturnSupplier(): void {
                let items: bo.PurchaseReturnItem[] = this.editData.purchaseReturnItems.where(c => !ibas.strings.isEmpty(c.baseDocumentType));
                if (items.length > 0) {
                    this.messages({
                        type: ibas.emMessageType.WARNING,
                        message: ibas.i18n.prop("purchase_remove_base_items_continue"),
                        actions: [
                            ibas.emMessageAction.YES,
                            ibas.emMessageAction.NO,
                        ],
                        onCompleted: (action) => {
                            if (action === ibas.emMessageAction.YES) {
                                this.removePurchaseReturnItem(items);
                                this.choosePurchaseReturnSupplier();
                            }
                        }
                    });
                    return;
                }
                let that: this = this;
                ibas.servicesManager.runChooseService<businesspartner.bo.ISupplier>({
                    boCode: businesspartner.bo.BO_CODE_SUPPLIER,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: businesspartner.app.conditions.supplier.create(),
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.ISupplier>): void {
                        let selected: businesspartner.bo.ISupplier = selecteds.firstOrDefault();
                        that.editData.supplierCode = selected.code;
                        that.editData.supplierName = selected.name;
                        that.editData.priceList = selected.priceList;
                        that.editData.contactPerson = selected.contactPerson;
                        that.editData.documentCurrency = selected.currency;
                        that.view.defaultWarehouse = selected.warehouse;
                    }
                });
            }
            /** 选择价格清单事件 */
            private choosePurchaseReturnPriceList(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IMaterialPriceList>({
                    boCode: materials.bo.BO_CODE_MATERIALPRICELIST,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.materialpricelist.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IMaterialPriceList>): void {
                        let selected: materials.bo.IMaterialPriceList = selecteds.firstOrDefault();
                        that.editData.priceList = selected.objectKey;
                        that.editData.documentCurrency = selected.currency;
                    }
                });
            }
            private choosePurchaseReturnItemWarehouse(caller: bo.PurchaseReturnItem): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IWarehouse>({
                    boCode: materials.bo.BO_CODE_WAREHOUSE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.warehouse.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IWarehouse>): void {
                        let index: number = that.editData.purchaseReturnItems.indexOf(caller);
                        let item: bo.PurchaseReturnItem = that.editData.purchaseReturnItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseReturnItems.create();
                                created = true;
                            }
                            item.warehouse = selected.code;
                            that.view.defaultWarehouse = item.warehouse;
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseReturnItems(that.editData.purchaseReturnItems.filterDeleted());
                        }
                    }
                });
            }
            private choosePurchaseReturnItemMaterial(caller: bo.PurchaseReturnItem): void {
                let that: this = this;
                let condition: ibas.ICondition;
                let conditions: ibas.IList<ibas.ICondition> = materials.app.conditions.product.create();
                // 添加价格清单条件
                if (this.editData.priceList > 0) {
                    condition = new ibas.Condition();
                    condition.alias = materials.app.conditions.product.CONDITION_ALIAS_PRICELIST;
                    condition.value = this.editData.priceList.toString();
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.relationship = ibas.emConditionRelationship.AND;
                    conditions.add(condition);
                }
                // 添加仓库条件
                if (!ibas.objects.isNull(caller) && !ibas.strings.isEmpty(caller.warehouse)) {
                    condition = new ibas.Condition();
                    condition.alias = materials.app.conditions.product.CONDITION_ALIAS_WAREHOUSE;
                    condition.value = caller.warehouse;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.relationship = ibas.emConditionRelationship.AND;
                    conditions.add(condition);
                } else if (!ibas.strings.isEmpty(this.view.defaultWarehouse)) {
                    condition = new ibas.Condition();
                    condition.alias = materials.app.conditions.product.CONDITION_ALIAS_WAREHOUSE;
                    condition.value = this.view.defaultWarehouse;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.relationship = ibas.emConditionRelationship.AND;
                    conditions.add(condition);
                }
                // 采购物料
                condition = new ibas.Condition();
                condition.alias = materials.app.conditions.product.CONDITION_ALIAS_PURCHASE_ITEM;
                condition.value = ibas.emYesNo.YES.toString();
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.relationship = ibas.emConditionRelationship.AND;
                conditions.add(condition);
                // 调用选择服务
                ibas.servicesManager.runChooseService<materials.bo.IProduct>({
                    boCode: materials.bo.BO_CODE_PRODUCT,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<materials.bo.IProduct>): void {
                        let index: number = that.editData.purchaseReturnItems.indexOf(caller);
                        let item: bo.PurchaseReturnItem = that.editData.purchaseReturnItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseReturnItems.create();
                                created = true;
                            }
                            item.baseProduct(selected);
                            if (!ibas.strings.isEmpty(that.view.defaultWarehouse)) {
                                item.warehouse = that.view.defaultWarehouse;
                            }
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseReturnItems(that.editData.purchaseReturnItems.filterDeleted());
                        }
                    }
                });
            }
            /** 添加采购退货-行事件 */
            private addPurchaseReturnItem(): void {
                this.choosePurchaseReturnItemMaterial(undefined);
            }
            /** 删除采购退货-行事件 */
            private removePurchaseReturnItem(items: bo.PurchaseReturnItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseReturnItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseReturnItems.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showPurchaseReturnItems(this.editData.purchaseReturnItems.filterDeleted());
            }
            /** 选择物料批次事件 */
            private choosePurchaseReturnItemMaterialBatch(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialBatchContract> = new ibas.ArrayList<materials.app.IMaterialBatchContract>();
                for (let item of this.editData.purchaseReturnItems) {
                    contracts.add({
                        batchManagement: item.batchManagement,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        warehouse: item.warehouse,
                        quantity: item.quantity,
                        uom: item.uom,
                        materialBatches: item.materialBatches,
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialBatchContract[]>({
                    proxy: new materials.app.MaterialBatchIssueServiceProxy(contracts)
                });
            }
            /** 选择物料序列事件 */
            private choosePurchaseReturnItemMaterialSerial(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialSerialContract> = new ibas.ArrayList<materials.app.IMaterialSerialContract>();
                for (let item of this.editData.purchaseReturnItems) {
                    contracts.add({
                        serialManagement: item.serialManagement,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        warehouse: item.warehouse,
                        quantity: item.quantity,
                        uom: item.uom,
                        materialSerials: item.materialSerials
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialSerialContract[]>({
                    proxy: new materials.app.MaterialSerialIssueServiceProxy(contracts)
                });
            }
            /** 选择采购退货项目-采购订单事件 */
            private choosePurchaseReturnPurchaseOrder(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchasereturn_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = bo.PurchaseOrder.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 非计划的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = ibas.emDocumentStatus.PLANNED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = this.editData.supplierCode;
                // 已清数量大于0
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseOrder.PROPERTY_PURCHASEORDERITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                cCriteria.noChilds = false;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseOrderItem.PROPERTY_CLOSEDQUANTITY_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.value = "0";
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseOrder>({
                    boCode: bo.PurchaseOrder.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseOrder>): void {
                        for (let selected of selecteds) {
                            if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                continue;
                            }
                            that.editData.baseDocument(selected);
                        }
                        that.view.showPurchaseReturnItems(that.editData.purchaseReturnItems.filterDeleted());
                    }
                });
            }
            /** 选择采购退货项目-采购收货事件 */
            private choosePurchaseReturnPurchaseDelivery(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchasereturn_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = bo.PurchaseDelivery.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 非计划的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = ibas.emDocumentStatus.PLANNED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = this.editData.supplierCode;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseDelivery>({
                    boCode: bo.PurchaseDelivery.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseDelivery>): void {
                        for (let selected of selecteds) {
                            if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                continue;
                            }
                            that.editData.baseDocument(selected);
                        }
                        that.view.showPurchaseReturnItems(that.editData.purchaseReturnItems.filterDeleted());
                    }
                });
            }
            /** 选择联系人 */
            private choosePurchaseReturnContactPerson(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchasereturn_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = businesspartner.bo.ContactPerson.PROPERTY_OWNERTYPE_NAME;
                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.ContactPerson.PROPERTY_BUSINESSPARTNER_NAME;
                condition.value = this.editData.supplierCode;
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.ContactPerson.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<businesspartner.bo.IContactPerson>({
                    boCode: businesspartner.bo.BO_CODE_CONTACTPERSON,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.IContactPerson>): void {
                        let selected: businesspartner.bo.IContactPerson = selecteds.firstOrDefault();
                        that.editData.contactPerson = selected.objectKey;
                    }
                });
            }

            private editShippingAddresses(): void {
                let app: ShippingAddressesEditApp = new ShippingAddressesEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.editData.shippingAddresss);
            }

        }
        /** 视图-采购退货 */
        export interface IPurchaseReturnEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseReturn(data: bo.PurchaseReturn): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购退货-行事件 */
            addPurchaseReturnItemEvent: Function;
            /** 删除采购退货-行事件 */
            removePurchaseReturnItemEvent: Function;
            /** 选择采购退货供应商信息 */
            choosePurchaseReturnSupplierEvent: Function;
            /** 选择采购退货联系人信息 */
            choosePurchaseReturnContactPersonEvent: Function;
            /** 选择采购退货价格清单信息 */
            choosePurchaseReturnPriceListEvent: Function;
            /** 选择采购退货-行物料主数据 */
            choosePurchaseReturnItemMaterialEvent: Function;
            /** 选择采购退货-行 仓库 */
            choosePurchaseReturnItemWarehouseEvent: Function;
            /** 选择采购退货-行 物料序列事件 */
            choosePurchaseReturnItemMaterialSerialEvent: Function;
            /** 选择采购退货-行 物料批次事件 */
            choosePurchaseReturnItemMaterialBatchEvent: Function;
            /** 显示数据 */
            showPurchaseReturnItems(datas: bo.PurchaseReturnItem[]): void;
            /** 选择采购退货项目-采购订单事件 */
            choosePurchaseReturnPurchaseOrderEvent: Function;
            /** 选择采购退货项目-采购交货事件 */
            choosePurchaseReturnPurchaseDeliveryEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 采购退货编辑服务映射 */
        export class PurchaseReturnEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnEditApp.APPLICATION_ID;
                this.name = PurchaseReturnEditApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.PurchaseReturn>> {
                return new PurchaseReturnEditApp();
            }
        }
    }
}