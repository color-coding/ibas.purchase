/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 编辑应用-采购订单 */
        export class PurchaseOrderEditApp extends ibas.BOEditService<IPurchaseOrderEditView, bo.PurchaseOrder> {
            /** 应用标识 */
            static APPLICATION_ID: string = "91733b83-5360-4703-83c9-6e4a038808f4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchaseorder_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseOrder.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderEditApp.APPLICATION_ID;
                this.name = PurchaseOrderEditApp.APPLICATION_NAME;
                this.boCode = PurchaseOrderEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addPurchaseOrderItemEvent = this.addPurchaseOrderItem;
                this.view.removePurchaseOrderItemEvent = this.removePurchaseOrderItem;
                this.view.choosePurchaseOrderSupplierEvent = this.choosePurchaseOrderSupplier;
                this.view.choosePurchaseOrderContactPersonEvent = this.choosePurchaseOrderContactPerson;
                this.view.choosePurchaseOrderPriceListEvent = this.choosePurchaseOrderPriceList;
                this.view.choosePurchaseOrderItemMaterialEvent = this.choosePurchaseOrderItemMaterial;
                this.view.choosePurchaseOrderItemWarehouseEvent = this.choosePurchaseOrderItemWarehouse;
                this.view.choosePurchaseOrderItemMaterialBatchEvent = this.choosePurchaseOrderItemMaterialBatch;
                this.view.choosePurchaseOrderItemMaterialSerialEvent = this.choosePurchaseOrderItemMaterialSerial;
                this.view.choosePurchaseOrderPurchaseQuoteEvent = this.choosePurchaseOrderPurchaseQuote;
                this.view.choosePurchaseOrderPurchaseRequestEvent = this.choosePurchaseOrderPurchaseRequest;
                this.view.editShippingAddressesEvent = this.editShippingAddresses;
                this.view.showPurchaseOrderItemExtraEvent = this.showSaleOrderItemExtra;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.PurchaseOrder();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseOrder(this.editData);
                this.view.showPurchaseOrderItems(this.editData.purchaseOrderItems.filterDeleted());
                // 查询额外信息
                if (!ibas.strings.isEmpty(this.editData.supplierCode)) {
                    let boRepository: businesspartner.bo.BORepositoryBusinessPartner = new businesspartner.bo.BORepositoryBusinessPartner();
                    boRepository.fetchSupplier({
                        criteria: [
                            new ibas.Condition(businesspartner.bo.Supplier.PROPERTY_CODE_NAME, ibas.emConditionOperation.EQUAL, this.editData.supplierCode)
                        ],
                        onCompleted: (opRslt) => {
                            let supplier: businesspartner.bo.Supplier = opRslt.resultObjects.firstOrDefault();
                            if (!ibas.objects.isNull(supplier)) {
                                if (!ibas.strings.isEmpty(supplier.warehouse)) {
                                    this.view.defaultWarehouse = supplier.warehouse;
                                }
                                if (!ibas.strings.isEmpty(supplier.taxGroup)) {
                                    this.view.defaultTaxGroup = supplier.taxGroup;
                                }
                            }
                        }
                    });
                }
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseOrder): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseOrder)) {
                    let data: bo.PurchaseOrder = arguments[0];
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
                        boRepository.fetchPurchaseOrder({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseOrder>): void {
                                let data: bo.PurchaseOrder;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.PurchaseOrder)) {
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
                boRepository.savePurchaseOrder({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseOrder>): void {
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
                                // 保存序列号信息
                                if (!ibas.objects.isNull(that.serials) && that.serials.save instanceof Function) {
                                    that.serials.save(
                                        (error) => {
                                            if (error instanceof Error) {
                                                that.messages(error);
                                            }
                                        }
                                    );
                                }
                                // 保存批次号信息
                                if (!ibas.objects.isNull(that.batches) && that.batches.save instanceof Function) {
                                    that.batches.save(
                                        (error) => {
                                            if (error instanceof Error) {
                                                that.messages(error);
                                            }
                                        }
                                    );
                                }
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
            private deleteData(): void {
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
            private createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.PurchaseOrder();
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
            private choosePurchaseOrderSupplier(): void {
                let items: bo.PurchaseOrderItem[] = this.editData.purchaseOrderItems.where(c =>
                    !ibas.strings.isEmpty(c.baseDocumentType) && c.isDeleted !== true
                );
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
                                this.removePurchaseOrderItem(items);
                                this.choosePurchaseOrderSupplier();
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
                        if (!ibas.strings.isEmpty(selected.warehouse)) {
                            that.view.defaultWarehouse = selected.warehouse;
                        }
                        if (!ibas.strings.isEmpty(selected.taxGroup)) {
                            that.view.defaultTaxGroup = selected.taxGroup;
                        }
                    }
                });
            }
            /** 选择价格清单事件 */
            private choosePurchaseOrderPriceList(): void {
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
            private choosePurchaseOrderItemWarehouse(caller: bo.PurchaseOrderItem): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IWarehouse>({
                    boCode: materials.bo.BO_CODE_WAREHOUSE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.warehouse.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IWarehouse>): void {
                        let index: number = that.editData.purchaseOrderItems.indexOf(caller);
                        let item: bo.PurchaseOrderItem = that.editData.purchaseOrderItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseOrderItems.create();
                                created = true;
                            }
                            item.warehouse = selected.code;
                            that.view.defaultWarehouse = item.warehouse;
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseOrderItems(that.editData.purchaseOrderItems.filterDeleted());
                        }
                    }
                });
            }
            private choosePurchaseOrderItemMaterial(caller: bo.PurchaseOrderItem): void {
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
                        let index: number = that.editData.purchaseOrderItems.indexOf(caller);
                        let item: bo.PurchaseOrderItem = that.editData.purchaseOrderItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseOrderItems.create();
                                created = true;
                            }
                            item.baseProduct(selected);
                            if (!ibas.strings.isEmpty(that.view.defaultWarehouse)) {
                                item.warehouse = that.view.defaultWarehouse;
                            }
                            if (!ibas.strings.isEmpty(that.view.defaultTaxGroup)) {
                                item.tax = that.view.defaultTaxGroup;
                                if (!ibas.strings.isEmpty(item.tax)) {
                                    accounting.taxrate.assign(item.tax, (rate) => {
                                        if (rate >= 0) {
                                            item.taxRate = rate;
                                            if (selected.taxed === ibas.emYesNo.NO) {
                                                item.preTaxPrice = selected.price;
                                            }
                                        }
                                    });
                                }
                            }
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseOrderItems(that.editData.purchaseOrderItems.filterDeleted());
                        }
                    }
                });
            }
            /** 添加采购订单-行事件 */
            private addPurchaseOrderItem(): void {
                this.choosePurchaseOrderItemMaterial(undefined);
            }
            /** 删除采购订单-行事件 */
            private removePurchaseOrderItem(items: bo.PurchaseOrderItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseOrderItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseOrderItems.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showPurchaseOrderItems(this.editData.purchaseOrderItems.filterDeleted());
            }
            private batches: materials.app.IServiceExtraBatches;
            /** 选择物料批次事件 */
            private choosePurchaseOrderItemMaterialBatch(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialBatchContract> = new ibas.ArrayList<materials.app.IMaterialBatchContract>();
                for (let item of this.editData.purchaseOrderItems) {
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
                ibas.servicesManager.runApplicationService<materials.app.IMaterialBatchContract[], materials.app.IServiceExtraBatches>({
                    proxy: new materials.app.MaterialBatchReceiptServiceProxy(contracts),
                    onCompleted: (results) => {
                        this.batches = results;
                    }
                });
            }
            private serials: materials.app.IServiceExtraSerials;
            /** 选择物料序列事件 */
            private choosePurchaseOrderItemMaterialSerial(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialSerialContract> = new ibas.ArrayList<materials.app.IMaterialSerialContract>();
                for (let item of this.editData.purchaseOrderItems) {
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
                ibas.servicesManager.runApplicationService<materials.app.IMaterialSerialContract[], materials.app.IServiceExtraSerials>({
                    proxy: new materials.app.MaterialSerialReceiptServiceProxy(contracts),
                    onCompleted: (results) => {
                        this.serials = results;
                    }
                });
            }
            /** 选择采购订单-采购报价事件 */
            private choosePurchaseOrderPurchaseQuote(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseorder_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = bo.PurchaseQuote.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = this.editData.supplierCode;
                // 未过期的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_DELIVERYDATE_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                condition.value = ibas.dates.toString(ibas.dates.today());
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseQuote>({
                    boCode: bo.PurchaseQuote.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseQuote>): void {
                        for (let selected of selecteds) {
                            if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                continue;
                            }
                            that.editData.baseDocument(selected);
                        }
                        that.view.showPurchaseOrderItems(that.editData.purchaseOrderItems.filterDeleted());
                    }
                });
            }
            /** 选择采购订单-采购请求事件 */
            private choosePurchaseOrderPurchaseRequest(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseorder_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = bo.PurchaseQuote.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseQuote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseRequest>({
                    boCode: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseRequest>): void {
                        for (let selected of selecteds) {
                            that.editData.baseDocument(selected);
                        }
                        if (!ibas.strings.isEmpty(that.view.defaultWarehouse)) {
                            that.editData.purchaseOrderItems.forEach(c =>
                                ibas.strings.isEmpty(c.warehouse) ? c.warehouse = that.view.defaultWarehouse : c.warehouse = null);
                        }
                        that.view.showPurchaseOrderItems(that.editData.purchaseOrderItems.filterDeleted());
                    }
                });
            }

            /** 选择联系人 */
            private choosePurchaseOrderContactPerson(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseorder_suppliercode")
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
            private showSaleOrderItemExtra(data: bo.PurchaseOrderItem): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let app: PurchaseOrderItemExtraApp = new PurchaseOrderItemExtraApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data, this.editData);
            }

        }
        /** 视图-采购订单 */
        export interface IPurchaseOrderEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseOrder(data: bo.PurchaseOrder): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购订单-行事件 */
            addPurchaseOrderItemEvent: Function;
            /** 删除采购订单-行事件 */
            removePurchaseOrderItemEvent: Function;
            /** 选择采购订单供应商信息 */
            choosePurchaseOrderSupplierEvent: Function;
            /** 选择采购订单联系人信息 */
            choosePurchaseOrderContactPersonEvent: Function;
            /** 选择采购订单价格清单信息 */
            choosePurchaseOrderPriceListEvent: Function;
            /** 选择采购订单-行物料主数据 */
            choosePurchaseOrderItemMaterialEvent: Function;
            /** 选择采购订单-行 仓库 */
            choosePurchaseOrderItemWarehouseEvent: Function;
            /** 选择采购订单-行 物料序列事件 */
            choosePurchaseOrderItemMaterialSerialEvent: Function;
            /** 选择采购订单-行 物料批次事件 */
            choosePurchaseOrderItemMaterialBatchEvent: Function;
            /** 显示采购订单行额外信息事件 */
            showPurchaseOrderItemExtraEvent: Function;
            /** 显示数据 */
            showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void;
            /** 选择采购订单-采购报价事件 */
            choosePurchaseOrderPurchaseQuoteEvent: Function;
            /** 选择采购订单-采购申请事件 */
            choosePurchaseOrderPurchaseRequestEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 采购订单编辑服务映射 */
        export class PurchaseOrderEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderEditApp.APPLICATION_ID;
                this.name = PurchaseOrderEditApp.APPLICATION_NAME;
                this.boCode = PurchaseOrderEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.PurchaseOrder>> {
                return new PurchaseOrderEditApp();
            }
        }
    }
}