/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 编辑应用-采购申请 */
        export class PurchaseRequestEditApp extends ibas.BOEditService<IPurchaseRequestEditView, bo.PurchaseRequest> {
            /** 应用标识 */
            static APPLICATION_ID: string = "d8ea1e68-c9dd-4ed1-a1e8-28ba1a7c4532";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchaserequest_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseRequest.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseRequestEditApp.APPLICATION_ID;
                this.name = PurchaseRequestEditApp.APPLICATION_NAME;
                this.boCode = PurchaseRequestEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addPurchaseRequestItemEvent = this.addPurchaseRequestItem;
                this.view.removePurchaseRequestItemEvent = this.removePurchaseRequestItem;
                this.view.choosePurchaseRequestPriceListEvent = this.choosePurchaseRequestPriceList;
                this.view.choosePurchaseRequestItemMaterialEvent = this.choosePurchaseRequestItemMaterial;
                this.view.showPurchaseRequestItemExtraEvent = this.showPurchaseRequestItemExtra;
                this.view.choosePurchaseRequestItemUnitEvent = this.choosePurchaseRequestItemUnit;
                this.view.choosePurchaseRequestItemDistributionRuleEvent = this.choosePurchaseRequestItemDistributionRule;
                this.view.choosePurchaseRequestItemMaterialVersionEvent = this.choosePurchaseRequestItemMaterialVersion;
                this.view.chooseSupplierAgreementsEvent = this.chooseSupplierAgreements;
                this.view.reserveMaterialsOrderedEvent = this.reserveMaterialsOrdered;
                this.view.purchaseRequestToEvent = this.purchaseRequestTo;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.PurchaseRequest();
                    this.editData.requester = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_NAME);
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseRequest(this.editData);
                this.view.showPurchaseRequestItems(this.editData.purchaseRequestItems.filterDeleted());
                this.view.showPurchaseRequestTos(ibas.servicesManager.getServices({
                    proxy: new PurchaseRequestToServiceProxy({
                        content: undefined,
                        onDone: undefined,
                    }),
                }));
            }
            run(): void;
            run(data: bo.PurchaseRequest): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseRequest)) {
                    let data: bo.PurchaseRequest = arguments[0];
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
                        boRepository.fetchPurchaseRequest({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseRequest>): void {
                                let data: bo.PurchaseRequest;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.PurchaseRequest)) {
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
                        return; // 退出
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.savePurchaseRequest({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseRequest>): void {
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
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone instanceof Blob) {
                        let formData: FormData = new FormData();
                        formData.append("file", clone);
                        let boRepository: importexport.bo.BORepositoryImportExport = new importexport.bo.BORepositoryImportExport();
                        boRepository.parse<bo.PurchaseRequest>({
                            converter: new bo.DataConverter(),
                            fileData: formData,
                            onCompleted: (opRslt) => {
                                try {
                                    if (opRslt.resultCode !== 0) {
                                        throw new Error(opRslt.message);
                                    }
                                    if (opRslt.resultObjects.length === 0) {
                                        throw new Error(ibas.i18n.prop("sys_unrecognized_data"));
                                    }
                                    that.editData = opRslt.resultObjects.firstOrDefault();
                                    that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_read_new"));
                                    that.viewShowed();
                                } catch (error) {
                                    that.messages(error);
                                }
                            }
                        });
                    } else if (typeof clone === "boolean" && clone === true) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.PurchaseRequest();
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
            /** 添加采购申请-行事件 */
            private addPurchaseRequestItem(items: bo.PurchaseRequestItem[]): void {
                if (items instanceof Array && items.length > 0) {
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    builder.append(ibas.i18n.prop("shell_data_new_line"));
                    builder.append(" [");
                    for (let item of items) {
                        let newItem: bo.PurchaseRequestItem = item.clone();
                        newItem.lineId = undefined;
                        newItem.visOrder = undefined;
                        this.editData.purchaseRequestItems.add(newItem);
                        if (builder.length > 2) {
                            builder.append(", ");
                        }
                        builder.append(newItem.lineId);
                    }
                    builder.append("] ");
                    if (builder.length > 3) {
                        this.proceeding(ibas.emMessageType.WARNING, builder.toString());
                        this.view.showPurchaseRequestItems(this.editData.purchaseRequestItems.filterDeleted());
                    }
                } else {
                    this.choosePurchaseRequestItemMaterial(undefined);
                }
            }
            /** 删除采购申请-行事件 */
            protected removePurchaseRequestItem(items: bo.PurchaseRequestItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseRequestItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseRequestItems.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showPurchaseRequestItems(this.editData.purchaseRequestItems.filterDeleted());
            }
            /** 选择价格清单事件 */
            private choosePurchaseRequestPriceList(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IMaterialPriceList>({
                    boCode: materials.bo.BO_CODE_MATERIALPRICELIST,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.materialpricelist.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IMaterialPriceList>): void {
                        let selected: materials.bo.IMaterialPriceList = selecteds.firstOrDefault();
                        that.editData.priceList = selected.objectKey;
                        that.editData.documentCurrency = selected.currency;
                        that.changePurchaseRequestItemPrice(that.editData.priceList);
                    }
                });
            }
            /** 更改行价格 */
            private changePurchaseRequestItemPrice(priceList: number | ibas.Criteria): void {
                if (typeof priceList === "number" && ibas.numbers.valueOf(priceList) !== 0) {
                    let criteria: ibas.Criteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_PRICELIST;
                    condition.value = priceList.toString();
                    for (let item of this.editData.purchaseRequestItems) {
                        condition = criteria.conditions.create();
                        condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_ITEMCODE;
                        condition.value = item.itemCode;
                        if (criteria.conditions.length > 2) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                    }
                    if (criteria.conditions.length < 2) {
                        return;
                    }
                    if (criteria.conditions.length > 2) {
                        criteria.conditions[2].bracketOpen += 1;
                        criteria.conditions[criteria.conditions.length - 1].bracketClose += 1;
                    }
                    if (config.get(config.CONFIG_ITEM_FORCE_UPDATE_PRICE_FOR_PRICE_LIST_CHANGED, true) === true) {
                        // 强制刷新价格
                        this.changePurchaseRequestItemPrice(criteria);
                    } else {
                        this.messages({
                            type: ibas.emMessageType.QUESTION,
                            message: ibas.i18n.prop("purchase_change_item_price_continue"),
                            actions: [
                                ibas.emMessageAction.YES,
                                ibas.emMessageAction.NO,
                            ],
                            onCompleted: (result) => {
                                if (result === ibas.emMessageAction.YES) {
                                    this.changePurchaseRequestItemPrice(criteria);
                                }
                            }
                        });
                    }
                } else if (priceList instanceof ibas.Criteria) {
                    this.busy(true);
                    let boRepository: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                    boRepository.fetchMaterialPrice({
                        criteria: priceList,
                        onCompleted: (opRslt) => {
                            for (let item of opRslt.resultObjects) {
                                this.editData.purchaseRequestItems.forEach((value) => {
                                    if (item.itemCode === value.itemCode) {
                                        if (item.taxed === ibas.emYesNo.YES) {
                                            value.price = item.price;
                                            value.currency = item.currency;
                                        } else {
                                            value.preTaxPrice = item.price;
                                            value.currency = item.currency;
                                        }
                                    }
                                });
                            }
                            this.busy(false);
                        }
                    });
                }
            }
            private choosePurchaseRequestItemMaterial(caller: bo.PurchaseRequestItem): void {
                let that: this = this;
                let condition: ibas.ICondition;
                let conditions: ibas.IList<ibas.ICondition> = materials.app.conditions.product.create();
                // 添加价格清单条件
                if (ibas.numbers.valueOf(this.editData.priceList) !== 0) {
                    condition = new ibas.Condition();
                    condition.alias = materials.app.conditions.product.CONDITION_ALIAS_PRICELIST;
                    condition.value = this.editData.priceList.toString();
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
                        let index: number = that.editData.purchaseRequestItems.indexOf(caller);
                        let item: bo.PurchaseRequestItem = that.editData.purchaseRequestItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        let beChangeds: ibas.IList<materials.app.IBeChangedUOMSource> = new ibas.ArrayList<materials.app.IBeChangedUOMSource>();
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseRequestItems.create();
                                created = true;
                            }
                            item.baseProduct(selected);
                            item.supplier = selected.preferredVendor;
                            if (!ibas.strings.isEmpty(item.tax)) {
                                accounting.taxrate.assign(item.tax, (rate) => {
                                    if (rate >= 0) {
                                        item.taxRate = rate;
                                        if (selected.taxed === ibas.emYesNo.NO) {
                                            item.preTaxPrice = selected.price;
                                        } else {
                                            item.price = selected.price;
                                        }
                                    }
                                });
                            }
                            beChangeds.add({
                                caller: item,
                                sourceUnit: item.uom,
                                targetUnit: item.inventoryUOM,
                                material: item.itemCode,
                                setUnitRate(this: bo.PurchaseRequestItem, value: number): void {
                                    this.uomRate = value;
                                }
                            });
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseRequestItems(that.editData.purchaseRequestItems.filterDeleted());
                        }
                        if (beChangeds.length > 0) {
                            // 设置单位换算率
                            materials.app.changeMaterialsUnitRate({
                                data: beChangeds,
                                onCompleted: (error) => {
                                    if (error instanceof Error) {
                                        that.messages(error);
                                    }
                                }
                            });
                        }
                    }
                });
            }
            private showPurchaseRequestItemExtra(data: bo.PurchaseRequestItem): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let app: PurchaseRequestItemExtraApp = new PurchaseRequestItemExtraApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data, this.editData);
            }
            private choosePurchaseRequestItemUnit(caller: bo.PurchaseRequestItem): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IUnit>({
                    boCode: materials.bo.BO_CODE_UNIT,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(materials.bo.Unit.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                    ],
                    onCompleted(selecteds: ibas.IList<materials.bo.IUnit>): void {
                        for (let selected of selecteds) {
                            caller.uom = selected.name;
                        }
                        materials.app.changeMaterialsUnitRate({
                            data: {
                                get sourceUnit(): string {
                                    return caller.uom;
                                },
                                get targetUnit(): string {
                                    return caller.inventoryUOM;
                                },
                                get material(): string {
                                    return caller.itemCode;
                                },
                                setUnitRate(rate: number): void {
                                    caller.uomRate = rate;
                                }
                            },
                            onCompleted: (error) => {
                                if (error instanceof Error) {
                                    that.messages(error);
                                }
                            }
                        });
                    }
                });
            }
            /** 预留物料订购 */
            private reserveMaterialsOrdered(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty) {
                    throw new Error(ibas.i18n.prop("shell_data_saved_first"));
                }
                let contract: materials.app.IMaterialOrderedReservationSource = {
                    sourceType: this.editData.objectCode,
                    sourceEntry: this.editData.docEntry,
                    items: []
                };
                for (let item of this.editData.purchaseRequestItems) {
                    contract.items.push({
                        sourceLineId: item.lineId,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        quantity: ibas.numbers.valueOf(item.quantity) - ibas.numbers.valueOf(item.closedQuantity),
                        uom: item.uom,
                        warehouse: undefined, // 不提供仓库信息，不触发占用逻辑
                        deliveryDate: item.requestDate instanceof Date ? item.requestDate : this.editData.deliveryDate,
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialOrderedReservationSource | materials.app.IMaterialOrderedReservationSource[]>({
                    proxy: new materials.app.MaterialOrderedReservationServiceProxy(contract)
                });
            }
            private chooseSupplierAgreements(): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.value = "";
                condition.relationship = ibas.emConditionRelationship.OR;
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.operation = ibas.emConditionOperation.IS_NULL;
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(this.editData.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                ibas.servicesManager.runChooseService<businesspartner.bo.Agreement>({
                    boCode: businesspartner.bo.Agreement.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted: (selecteds) => {
                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                        for (let selected of selecteds) {
                            if (builder.length > 0) {
                                builder.append(ibas.DATA_SEPARATOR);
                                builder.append(" ");
                            }
                            builder.append(selected.code);
                        }
                        this.editData.agreements = builder.toString();
                    }
                });
            }
            private choosePurchaseRequestItemDistributionRule(type: accounting.app.emDimensionType, caller: bo.PurchaseRequestItem): void {
                if (ibas.objects.isNull(type)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("accounting_dimension_invaild", ""));
                    return;
                }
                ibas.servicesManager.runApplicationService<accounting.app.IDimensionDataServiceContract, String>({
                    proxy: new accounting.app.DimensionDataServiceProxy({
                        type: type,
                    }),
                    onCompleted(result: string): void {
                        if (type === accounting.app.emDimensionType.DIMENSION_1) {
                            caller.distributionRule1 = result;
                        } else if (type === accounting.app.emDimensionType.DIMENSION_2) {
                            caller.distributionRule2 = result;
                        } else if (type === accounting.app.emDimensionType.DIMENSION_3) {
                            caller.distributionRule3 = result;
                        } else if (type === accounting.app.emDimensionType.DIMENSION_4) {
                            caller.distributionRule4 = result;
                        } else if (type === accounting.app.emDimensionType.DIMENSION_5) {
                            caller.distributionRule5 = result;
                        }
                    }
                });
            }
            private doneItems: ibas.IList<bo.PurchaseRequestItem> = new ibas.ArrayList<bo.PurchaseRequestItem>();
            private purchaseRequestTo(agent: ibas.IServiceAgent, item: bo.PurchaseRequestItem): void {
                if (ibas.objects.isNull(agent)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_services")
                    )); return;
                }
                if (ibas.objects.isNull(item)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_edit")
                    )); return;
                }
                let that: this = this;
                for (let srvAgent of ibas.servicesManager.getServices({
                    proxy: new PurchaseRequestToServiceProxy({
                        content: item,
                        onDone: (result) => {
                            if (result instanceof Error) {
                                // 报错
                            } else {
                                // 转换数量，行数量减少
                                if (!that.doneItems.contain(item)) {
                                    that.doneItems.add(item);
                                    item.closedQuantity += result.quantity;
                                    let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                                    boRepository.savePurchaseRequest({
                                        beSaved: that.editData,
                                        onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseRequest>): void {
                                            try {
                                                if (opRslt.resultCode !== 0) {
                                                    throw new Error(opRslt.message);
                                                }
                                                if (opRslt.resultObjects.length === 0) {
                                                    // 删除成功，释放当前对象
                                                    that.proceeding(ibas.emMessageType.SUCCESS,
                                                        ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                                    that.editData = undefined;
                                                } else {
                                                    // 替换编辑对象
                                                    that.editData = opRslt.resultObjects.firstOrDefault();
                                                    that.proceeding(ibas.emMessageType.SUCCESS,
                                                        ibas.i18n.prop("bo_purchaserequest") + ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                                                    // 处理预留
                                                    let criteria: ibas.ICriteria = new ibas.Criteria();
                                                    let condition: ibas.ICondition = criteria.conditions.create();
                                                    condition.alias = materials.bo.MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTTYPE_NAME;
                                                    condition.value = item.objectCode;
                                                    condition = criteria.conditions.create();
                                                    condition.alias = materials.bo.MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTENTRY_NAME;
                                                    condition.value = item.docEntry.toString();
                                                    condition = criteria.conditions.create();
                                                    condition.alias = materials.bo.MaterialOrderedReservation.PROPERTY_SOURCEDOCUMENTLINEID_NAME;
                                                    condition.value = item.lineId.toString();
                                                    let boRepository: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                                                    boRepository.fetchMaterialOrderedReservation({
                                                        criteria: criteria,
                                                        onCompleted: (opRslt) => {
                                                            let quantity: number = result.quantity;
                                                            let reservations: ibas.IList<materials.bo.MaterialOrderedReservation> = new ibas.ArrayList<materials.bo.MaterialOrderedReservation>();
                                                            for (let item of opRslt.resultObjects) {
                                                                let nItem: materials.bo.MaterialOrderedReservation = item.clone();
                                                                nItem.sourceDocumentType = result.documentType;
                                                                nItem.sourceDocumentEntry = result.docmentEntry;
                                                                nItem.sourceDocumentLineId = result.documentLineId;
                                                                nItem.warehouse = result.warehouse;
                                                                if (quantity <= item.quantity) {
                                                                    nItem.quantity = quantity;
                                                                } else {
                                                                    nItem.quantity = item.quantity;
                                                                }
                                                                reservations.add(nItem);
                                                                if (quantity <= (item.quantity - item.closedQuantity)) {
                                                                    item.closedQuantity += quantity;
                                                                } else {
                                                                    item.closedQuantity += (item.quantity - item.closedQuantity);
                                                                }
                                                                if (item.closedQuantity >= item.quantity) {
                                                                    item.status = ibas.emBOStatus.CLOSED;
                                                                }
                                                                reservations.add(item);
                                                                quantity = quantity - nItem.quantity;
                                                                if (item.quantity <= 0) {
                                                                    break;
                                                                }
                                                            }
                                                            ibas.queues.execute(reservations, (data, next) => {
                                                                boRepository.saveMaterialOrderedReservation({
                                                                    beSaved: data,
                                                                    onCompleted: (opRslt) => {
                                                                        if (opRslt.resultCode !== 0) {
                                                                            next(new Error(opRslt.message));
                                                                        } else {
                                                                            next();
                                                                        }
                                                                    }
                                                                });
                                                            }, (error) => {
                                                                if (error instanceof Error) {
                                                                    that.messages(error);
                                                                } else {
                                                                    that.proceeding(ibas.emMessageType.SUCCESS,
                                                                        ibas.i18n.prop("bo_materialorderedreservation") + ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                                // 刷新当前视图
                                                that.viewShowed();
                                            } catch (error) {
                                                that.messages(error);
                                            }
                                        }
                                    });
                                    that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
                                } else {
                                    that.messages(ibas.emMessageType.ERROR, ibas.i18n.prop("purchase_app_line_has_been_processed", item.lineId, item.itemCode, item.itemDescription));
                                }
                            }
                        }
                    }),
                })) {
                    if (srvAgent.id === agent.id) {
                        srvAgent.run();
                    }
                }
            }
            private choosePurchaseRequestItemMaterialVersion(caller: bo.PurchaseRequestItem): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = materials.bo.MaterialVersion.PROPERTY_ITEMCODE_NAME;
                condition.value = caller.itemCode;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition = criteria.conditions.create();
                condition.alias = materials.bo.MaterialVersion.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                condition.operation = ibas.emConditionOperation.EQUAL;
                // 调用选择服务
                ibas.servicesManager.runChooseService<materials.bo.MaterialVersion>({
                    criteria: criteria,
                    chooseType: ibas.emChooseType.SINGLE,
                    boCode: materials.bo.MaterialVersion.BUSINESS_OBJECT_CODE,
                    onCompleted: (selecteds) => {
                        for (let selected of selecteds) {
                            caller.itemVersion = selected.name;
                        }
                    }
                });
            }
        }
        /** 视图-采购申请 */
        export interface IPurchaseRequestEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseRequest(data: bo.PurchaseRequest): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购申请-行事件 */
            addPurchaseRequestItemEvent: Function;
            /** 删除采购申请-行事件 */
            removePurchaseRequestItemEvent: Function;
            /** 选择采购申请价格清单信息 */
            choosePurchaseRequestPriceListEvent: Function;
            /** 选择采购申请-行物料主数据 */
            choosePurchaseRequestItemMaterialEvent: Function;
            /** 选择采购申请-行物料单位 */
            choosePurchaseRequestItemUnitEvent: Function;
            /** 选择供应商合同 */
            chooseSupplierAgreementsEvent: Function;
            /** 显示采购申请额外信息事件 */
            showPurchaseRequestItemExtraEvent: Function;
            /** 选择采购申请-行成本中心事件 */
            choosePurchaseRequestItemDistributionRuleEvent: Function;
            /** 选择采购申请-行 物料版本 */
            choosePurchaseRequestItemMaterialVersionEvent: Function;
            /** 显示数据-采购申请-行 */
            showPurchaseRequestItems(datas: bo.PurchaseRequestItem[]): void;
            /** 预留物料订购 */
            reserveMaterialsOrderedEvent: Function;
            /** 显示采购请求目标 */
            showPurchaseRequestTos(datas: ibas.IServiceAgent[]): void;
            /** 采购申请转换事件 */
            purchaseRequestToEvent: Function;
        }
        /** 采购申请编辑服务映射 */
        export class PurchaseRequestEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseRequestEditApp.APPLICATION_ID;
                this.name = PurchaseRequestEditApp.APPLICATION_NAME;
                this.boCode = PurchaseRequestEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.PurchaseRequest>> {
                return new PurchaseRequestEditApp();
            }
        }

        export class MaterialOrderedReservationSourcePurchaseRequestService extends ibas.ServiceApplication<ibas.IView, materials.app.IMaterialOrderedReservationTarget> {
            /** 应用标识 */
            static APPLICATION_ID: string = "06e25259-a3c0-471b-846f-d4a7195e79a6";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_materialorderedreservation_purchaserequest";
            /** 构造函数 */
            constructor() {
                super();
                this.id = MaterialOrderedReservationSourcePurchaseRequestService.APPLICATION_ID;
                this.name = MaterialOrderedReservationSourcePurchaseRequestService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
            }
            protected runService(contract: materials.app.IMaterialOrderedReservationTarget): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = bo.PurchaseRequest.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseRequest.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseRequest.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 物料
                let cCrteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCrteria.propertyPath = bo.PurchaseRequest.PROPERTY_PURCHASEREQUESTITEMS_NAME;
                cCrteria.onlyHasChilds = true;
                condition = cCrteria.conditions.create();
                condition.alias = bo.PurchaseRequestItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                condition = cCrteria.conditions.create();
                condition.alias = bo.PurchaseRequestItem.PROPERTY_CLOSEDQUANTITY_NAME;
                condition.comparedAlias = bo.PurchaseRequestItem.PROPERTY_QUANTITY_NAME;
                condition.operation = ibas.emConditionOperation.LESS_THAN;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseRequest>({
                    boCode: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseRequest>): void {
                        for (let selected of selecteds) {
                            for (let item of selected.purchaseRequestItems) {
                                contract.onReserved(selected.objectCode, selected.docEntry, item.lineId, item.quantity,
                                    item.requestDate instanceof Date ? item.requestDate : selected.deliveryDate
                                );
                            }
                        }
                        that.destroy();
                    }
                });
            }
            protected viewShowed(): void {
            }

        }
        export class MaterialOrderedReservationSourcePurchaseRequestServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = MaterialOrderedReservationSourcePurchaseRequestService.APPLICATION_ID;
                this.name = MaterialOrderedReservationSourcePurchaseRequestService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = materials.app.MaterialOrderedReservationSourceServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new MaterialOrderedReservationSourcePurchaseRequestService();
            }
        }
    }
}
