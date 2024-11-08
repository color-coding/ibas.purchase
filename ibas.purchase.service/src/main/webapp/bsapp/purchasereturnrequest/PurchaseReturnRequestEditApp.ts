/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 编辑应用-采购退货请求 */
        export class PurchaseReturnRequestEditApp extends ibas.BOEditService<IPurchaseReturnRequestEditView, bo.PurchaseReturnRequest> {
            /** 应用标识 */
            static APPLICATION_ID: string = "e9ad8d87-bb4d-4c5e-8027-c7ae39b4b7b4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasereturnrequest_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseReturnRequest.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestEditApp.APPLICATION_ID;
                this.name = PurchaseReturnRequestEditApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnRequestEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addPurchaseReturnRequestItemEvent = this.addPurchaseReturnRequestItem;
                this.view.removePurchaseReturnRequestItemEvent = this.removePurchaseReturnRequestItem;
                this.view.choosePurchaseReturnRequestSupplierEvent = this.choosePurchaseReturnRequestSupplier;
                this.view.choosePurchaseReturnRequestContactPersonEvent = this.choosePurchaseReturnRequestContactPerson;
                this.view.choosePurchaseReturnRequestPriceListEvent = this.choosePurchaseReturnRequestPriceList;
                this.view.choosePurchaseReturnRequestItemMaterialEvent = this.choosePurchaseReturnRequestItemMaterial;
                this.view.choosePurchaseReturnRequestItemWarehouseEvent = this.choosePurchaseReturnRequestItemWarehouse;
                this.view.choosePurchaseReturnRequestItemUnitEvent = this.choosePurchaseReturnRequestItemUnit;
                this.view.choosePurchaseReturnRequestItemMaterialBatchEvent = this.choosePurchaseReturnRequestItemMaterialBatch;
                this.view.choosePurchaseReturnRequestItemMaterialSerialEvent = this.choosePurchaseReturnRequestItemMaterialSerial;
                this.view.choosePurchaseReturnRequestPurchaseDeliveryEvent = this.choosePurchaseReturnRequestPurchaseDelivery;
                this.view.choosePurchaseReturnRequestItemDistributionRuleEvent = this.choosePurchaseReturnRequestItemDistributionRule;
                this.view.choosePurchaseReturnRequestItemMaterialVersionEvent = this.choosePurchaseReturnRequestItemMaterialVersion;
                this.view.choosePurchaseReturnRequestItemMaterialCatalogEvent = this.choosePurchaseReturnRequestItemMaterialCatalog;
                this.view.chooseSupplierAgreementsEvent = this.chooseSupplierAgreements;
                this.view.editShippingAddressesEvent = this.editShippingAddresses;
                this.view.turnToPurchaseReturnEvent = this.turnToPurchaseReturn;
                this.view.reserveMaterialsInventoryEvent = this.reserveMaterialsInventory;
                this.view.measuringMaterialsEvent = this.measuringMaterials;
                this.view.viewHistoricalPricesEvent = this.viewHistoricalPrices;
                this.view.choosePaymentTermEvent = this.choosePaymentTerm;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.PurchaseReturnRequest();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseReturnRequest(this.editData);
                this.view.showPurchaseReturnRequestItems(this.editData.purchaseReturnRequestItems.filterDeleted());
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseReturnRequest): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseReturnRequest)) {
                    let data: bo.PurchaseReturnRequest = arguments[0];
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
                        boRepository.fetchPurchaseReturnRequest({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturnRequest>): void {
                                let data: bo.PurchaseReturnRequest;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.PurchaseReturnRequest)) {
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
                boRepository.savePurchaseReturnRequest({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturnRequest>): void {
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
                            if (that.editData.referenced === ibas.emYesNo.YES) {
                                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", that.editData.toString()));
                            } else {
                                that.editData.delete();
                                that.saveData();
                            }
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
                        boRepository.parse<bo.PurchaseReturnRequest>({
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
                        that.editData = new bo.PurchaseReturnRequest();
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
            private choosePurchaseReturnRequestSupplier(filterConditions?: ibas.ICondition[]): void {
                let items: bo.PurchaseReturnRequestItem[] = this.editData.purchaseReturnRequestItems.where(c =>
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
                                this.removePurchaseReturnRequestItem(items);
                                this.choosePurchaseReturnRequestSupplier(filterConditions);
                            }
                        }
                    });
                    return;
                }
                let conditions: ibas.IList<ibas.ICondition> = businesspartner.app.conditions.supplier.create();
                // 添加输入条件
                if (filterConditions instanceof Array && filterConditions.length > 0) {
                    if (conditions.length > 1) {
                        conditions.firstOrDefault().bracketOpen++;
                        conditions.lastOrDefault().bracketClose++;
                    }
                    conditions.add(filterConditions);
                }
                let that: this = this;
                ibas.servicesManager.runChooseService<businesspartner.bo.ISupplier>({
                    boCode: businesspartner.bo.BO_CODE_SUPPLIER,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.ISupplier>): void {
                        let selected: businesspartner.bo.ISupplier = selecteds.firstOrDefault();
                        that.editData.supplierCode = selected.code;
                        that.editData.supplierName = selected.name;
                        that.editData.priceList = selected.priceList;
                        that.editData.contactPerson = selected.contactPerson;
                        that.editData.documentCurrency = selected.currency;
                        that.editData.paymentCode = selected.paymentCode;
                        if (!ibas.strings.isEmpty(selected.warehouse)) {
                            that.view.defaultWarehouse = selected.warehouse;
                        }
                        // 供应商改变，清除旧地址
                        that.editData.shippingAddresss.clear();
                        that.changePurchaseReturnRequestItemPrice(that.editData.priceList);
                    }
                });
            }
            /** 选择价格清单事件 */
            private choosePurchaseReturnRequestPriceList(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IMaterialPriceList>({
                    boCode: materials.bo.BO_CODE_MATERIALPRICELIST,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.materialpricelist.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IMaterialPriceList>): void {
                        let selected: materials.bo.IMaterialPriceList = selecteds.firstOrDefault();
                        that.editData.priceList = selected.objectKey;
                        if (ibas.strings.isEmpty(that.editData.documentCurrency)) {
                            that.editData.documentCurrency = selected.currency;
                        }
                        that.changePurchaseReturnRequestItemPrice(that.editData.priceList);
                    }
                });
            }
            /** 更改行价格 */
            private changePurchaseReturnRequestItemPrice(priceList: number | ibas.ICriteria, items?: bo.PurchaseReturnRequestItem[]): void {
                if (ibas.objects.isNull(items)) {
                    items = this.editData.purchaseReturnRequestItems.filterDeleted();
                }
                if (typeof priceList === "number" && ibas.numbers.valueOf(priceList) !== 0) {
                    let criteria: ibas.ICriteria = materials.app.conditions.materialprice.create(this.editData.documentDate);
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_PRICELIST;
                    condition.value = priceList.toString();
                    if (!ibas.strings.isEmpty(this.editData.documentCurrency)) {
                        condition = criteria.conditions.create();
                        condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_CURRENCY;
                        condition.value = this.editData.documentCurrency;
                    }
                    let count: number = criteria.conditions.length;
                    for (let item of items) {
                        condition = criteria.conditions.create();
                        condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_ITEMCODE;
                        condition.value = item.itemCode;
                        condition.bracketOpen = 1;
                        if (criteria.conditions.length > count + 1) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                        condition = criteria.conditions.create();
                        condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_UOM;
                        condition.value = item.uom;
                        condition.bracketClose = 1;
                    }
                    if (criteria.conditions.length < count + 1) {
                        return;
                    }
                    if (criteria.conditions.length > count + 1) {
                        criteria.conditions[count].bracketOpen += 1;
                        criteria.conditions[criteria.conditions.length - 1].bracketClose += 1;
                    }
                    if (config.get(config.CONFIG_ITEM_FORCE_UPDATE_PRICE_FOR_PRICE_LIST_CHANGED, true) === true) {
                        // 强制刷新价格
                        this.changePurchaseReturnRequestItemPrice(criteria, items);
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
                                    this.changePurchaseReturnRequestItemPrice(criteria, items);
                                }
                            }
                        });
                    }
                } else if (priceList instanceof ibas.Criteria) {
                    this.busy(true);
                    // 增加业务伙伴条件
                    if (materials.config.isEnableMaterialSpecialPrices() && !ibas.strings.isEmpty(this.editData.supplierCode)) {
                        if (priceList.conditions.length > 1) {
                            priceList.conditions.firstOrDefault().bracketOpen += 1;
                            priceList.conditions.lastOrDefault().bracketClose += 1;
                        }
                        let condition: ibas.ICondition = priceList.conditions.create();
                        condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_SUPPLIER;
                        condition.value = this.editData.supplierCode;
                    }
                    let boRepository: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                    boRepository.fetchMaterialPrice({
                        criteria: priceList,
                        onCompleted: (opRslt) => {
                            for (let item of opRslt.resultObjects) {
                                items.forEach((value) => {
                                    if (item.itemCode === value.itemCode
                                        && (ibas.strings.isEmpty(value.uom)
                                            || (config.isInventoryUnitLinePrice() ? item.uom === value.inventoryUOM : item.uom === value.uom))) {
                                        if (item.taxed === ibas.emYesNo.YES) {
                                            value.unitPrice = 0;
                                            value.price = item.price;
                                            value.currency = item.currency;
                                        } else {
                                            value.unitPrice = 0;
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
            private choosePurchaseReturnRequestItemWarehouse(caller: bo.PurchaseReturnRequestItem, filterConditions?: ibas.ICondition[]): void {
                let conditions: ibas.IList<ibas.ICondition> = materials.app.conditions.warehouse.create(this.editData.branch);
                // 添加输入条件
                if (filterConditions instanceof Array && filterConditions.length > 0) {
                    if (conditions.length > 1) {
                        conditions.firstOrDefault().bracketOpen++;
                        conditions.lastOrDefault().bracketClose++;
                    }
                    conditions.add(filterConditions);
                }
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.Warehouse>({
                    boCode: materials.bo.Warehouse.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<materials.bo.IWarehouse>): void {
                        let index: number = that.editData.purchaseReturnRequestItems.indexOf(caller);
                        let item: bo.PurchaseReturnRequestItem = that.editData.purchaseReturnRequestItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseReturnRequestItems.create();
                                created = true;
                            }
                            item.warehouse = selected.code;
                            that.view.defaultWarehouse = item.warehouse;
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseReturnRequestItems(that.editData.purchaseReturnRequestItems.filterDeleted());
                        }
                    }
                });
            }
            private choosePurchaseReturnRequestItemMaterial(caller: bo.PurchaseReturnRequestItem, type?: string, filterConditions?: ibas.ICondition[]): void {
                let that: this = this;
                let condition: ibas.ICondition;
                let conditions: ibas.IList<ibas.ICondition> = materials.app.conditions.product.create(this.editData.documentDate);
                // 添加输入条件
                if (filterConditions instanceof Array && filterConditions.length > 0) {
                    if (conditions.length > 1) {
                        conditions.firstOrDefault().bracketOpen++;
                        conditions.lastOrDefault().bracketClose++;
                    }
                    conditions.add(filterConditions);
                }
                // 添加价格清单条件
                if (ibas.numbers.valueOf(this.editData.priceList) !== 0) {
                    condition = new ibas.Condition();
                    condition.alias = materials.app.conditions.product.CONDITION_ALIAS_PRICELIST;
                    condition.value = this.editData.priceList.toString();
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.relationship = ibas.emConditionRelationship.AND;
                    conditions.add(condition);
                    if (!ibas.strings.isEmpty(this.editData.documentCurrency)) {
                        condition = new ibas.Condition();
                        condition.alias = materials.app.conditions.product.CONDITION_ALIAS_CURRENCY;
                        condition.value = this.editData.documentCurrency;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        conditions.add(condition);
                    }
                    // 增加业务伙伴条件
                    if (materials.config.isEnableMaterialSpecialPrices() && !ibas.strings.isEmpty(this.editData.supplierCode)) {
                        condition = new ibas.Condition();
                        condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_SUPPLIER;
                        condition.value = this.editData.supplierCode;
                        conditions.add(condition);
                    }
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
                // 产品库存时
                if (materials.bo.BO_CODE_PRODUCT_INVENTORY === type) {
                    // 有库存的
                    condition = new ibas.Condition();
                    condition.alias = materials.bo.Product.PROPERTY_ONHAND_NAME;
                    condition.value = "0";
                    condition.operation = ibas.emConditionOperation.GRATER_THAN;
                    conditions.add(condition);
                }
                // 调用选择服务
                ibas.servicesManager.runChooseService<materials.bo.IProduct>({
                    boCode: type ? materials.bo.BO_CODE_PRODUCT_INVENTORY : materials.bo.BO_CODE_PRODUCT,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<materials.bo.IProduct>): void {
                        let index: number = that.editData.purchaseReturnRequestItems.indexOf(caller);
                        let item: bo.PurchaseReturnRequestItem = that.editData.purchaseReturnRequestItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        let beChangeds: ibas.IList<materials.app.IBeChangedUOMSource> = new ibas.ArrayList<materials.app.IBeChangedUOMSource>();
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseReturnRequestItems.create();
                                created = true;
                            }
                            item.baseProduct(selected);
                            if (!ibas.strings.isEmpty(that.view.defaultWarehouse)) {
                                item.warehouse = that.view.defaultWarehouse;
                            }
                            beChangeds.add({
                                caller: item,
                                sourceUnit: item.uom,
                                targetUnit: item.inventoryUOM,
                                material: item.itemCode,
                                setUnitRate(this: bo.PurchaseReturnRequestItem, value: number): void {
                                    this.uomRate = value;
                                }
                            });
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseReturnRequestItems(that.editData.purchaseReturnRequestItems.filterDeleted());
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
            /** 添加采购退货请求-行事件 */
            private addPurchaseReturnRequestItem(items: bo.PurchaseReturnRequestItem[] | number): void {
                if (items instanceof Array && items.length > 0) {
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    builder.append(ibas.i18n.prop("shell_data_new_line"));
                    builder.append(" [");
                    for (let item of items) {
                        let newItem: bo.PurchaseReturnRequestItem = item.clone();
                        newItem.lineId = undefined;
                        newItem.visOrder = undefined;
                        // 序列号清除
                        newItem.materialSerials.clear();
                        this.editData.purchaseReturnRequestItems.add(newItem);
                        if (builder.length > 2) {
                            builder.append(", ");
                        }
                        builder.append(newItem.lineId);
                    }
                    builder.append("] ");
                    if (builder.length > 3) {
                        this.proceeding(ibas.emMessageType.WARNING, builder.toString());
                        this.view.showPurchaseReturnRequestItems(this.editData.purchaseReturnRequestItems.filterDeleted());
                    }
                } else if (typeof items === "number" && items > 0) {
                    for (let i: number = 0; i < items; i++) {
                        this.editData.purchaseReturnRequestItems.create();
                    }
                    this.view.showPurchaseReturnRequestItems(this.editData.purchaseReturnRequestItems.filterDeleted());
                } else {
                    this.choosePurchaseReturnRequestItemMaterial(undefined);
                }
            }
            /** 删除采购退货请求-行事件 */
            private removePurchaseReturnRequestItem(items: bo.PurchaseReturnRequestItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseReturnRequestItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseReturnRequestItems.remove(item);
                        } else {
                            // 非新建标记删除
                            if (item.referenced === ibas.emYesNo.YES) {
                                this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", item.toString()));
                            } else {
                                item.delete();
                            }
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showPurchaseReturnRequestItems(this.editData.purchaseReturnRequestItems.filterDeleted());
            }
            /** 选择物料批次事件 */
            private choosePurchaseReturnRequestItemMaterialBatch(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialBatchContract> = new ibas.ArrayList<materials.app.IMaterialBatchContract>();
                for (let item of this.editData.purchaseReturnRequestItems) {
                    contracts.add({
                        batchManagement: item.batchManagement,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        itemVersion: item.itemVersion,
                        warehouse: item.warehouse,
                        quantity: item.inventoryQuantity,
                        uom: item.inventoryUOM,
                        materialBatches: item.materialBatches,
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialBatchContract[]>({
                    proxy: new materials.app.MaterialBatchIssueServiceProxy(contracts)
                });
            }
            /** 选择物料序列事件 */
            private choosePurchaseReturnRequestItemMaterialSerial(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialSerialContract> = new ibas.ArrayList<materials.app.IMaterialSerialContract>();
                for (let item of this.editData.purchaseReturnRequestItems) {
                    contracts.add({
                        serialManagement: item.serialManagement,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        itemVersion: item.itemVersion,
                        warehouse: item.warehouse,
                        quantity: item.inventoryQuantity,
                        uom: item.inventoryUOM,
                        materialSerials: item.materialSerials
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialSerialContract[]>({
                    proxy: new materials.app.MaterialSerialIssueServiceProxy(contracts)
                });
            }
            /** 选择采购退货请求项目-采购收货事件 */
            private choosePurchaseReturnRequestPurchaseDelivery(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchasereturnrequest_suppliercode")
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
                // 是否指定分支
                if (!ibas.strings.isEmpty(this.editData.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseDelivery.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseDelivery.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseDelivery.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = this.editData.supplierCode;
                // 指定了合同/协议
                if (!ibas.strings.isEmpty(this.editData.agreements)) {
                    let index: number = criteria.conditions.length;
                    for (let item of this.editData.agreements.split(ibas.DATA_SEPARATOR)) {
                        if (ibas.strings.isEmpty(item)) {
                            continue;
                        }
                        condition = criteria.conditions.create();
                        condition.alias = bo.PurchaseDelivery.PROPERTY_AGREEMENTS_NAME;
                        condition.operation = ibas.emConditionOperation.CONTAIN;
                        condition.value = item;
                        if (criteria.conditions.length > (index + 1)) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                    }
                    if (criteria.conditions.length > (index + 2)) {
                        criteria.conditions[index].bracketOpen += 1;
                        criteria.conditions[criteria.conditions.length - 1].bracketClose += 1;
                    }
                }
                // 子项查询
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseDelivery.PROPERTY_PURCHASEDELIVERYITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                cCriteria.noChilds = false;
                // 未取消的
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseDeliveryItem.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 数量大于已清数量
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseDeliveryItem.PROPERTY_QUANTITY_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = bo.PurchaseDeliveryItem.PROPERTY_CLOSEDQUANTITY_NAME;
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
                        that.view.showPurchaseReturnRequestItems(that.editData.purchaseReturnRequestItems.filterDeleted());
                    }
                });
            }
            /** 选择联系人 */
            private choosePurchaseReturnRequestContactPerson(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchasereturnrequest_suppliercode")
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
            protected turnToPurchaseReturn(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty === true) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_saved_first"));
                    return;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReturnRequest({
                    criteria: this.editData.criteria(),
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                throw new Error(ibas.i18n.prop("shell_data_deleted"));
                            }
                            this.editData = opRslt.resultObjects.firstOrDefault();
                            this.view.showPurchaseReturnRequest(this.editData);
                            this.view.showPurchaseReturnRequestItems(this.editData.purchaseReturnRequestItems.filterDeleted());
                            if ((this.editData.approvalStatus !== ibas.emApprovalStatus.APPROVED && this.editData.approvalStatus !== ibas.emApprovalStatus.UNAFFECTED)
                                || this.editData.deleted === ibas.emYesNo.YES
                                || this.editData.canceled === ibas.emYesNo.YES
                                || this.editData.documentStatus === ibas.emDocumentStatus.PLANNED
                            ) {
                                throw new Error(ibas.i18n.prop("purchase_invaild_status_not_support_turn_to_operation"));
                            }
                            let target: bo.PurchaseReturn = new bo.PurchaseReturn();
                            target.supplierCode = this.editData.supplierCode;
                            target.supplierName = this.editData.supplierName;
                            target.baseDocument(this.editData);
                            // 整单基于，则赋折扣、总计
                            if (target.itemsLineTotal === this.editData.itemsLineTotal
                                && target.shippingsExpenseTotal === this.editData.shippingsExpenseTotal) {
                                target.discount = this.editData.discount;
                                target.documentTotal = this.editData.documentTotal;
                            }
                            // 使用预留库存
                            materials.app.useReservedMaterialsInventory({
                                targetType: this.editData.objectCode,
                                targetEntries: this.editData.docEntry,
                                onCompleted: (results) => {
                                    if (results instanceof Error) {
                                        // 错误
                                        this.messages(results);
                                    } else if (results.length > 0) {
                                        // 出库数预置为0，包括基于来的批次数量
                                        let qtyMap: Map<any, number> = new Map<any, number>();
                                        for (let item of target.purchaseReturnItems) {
                                            if (this.editData.objectCode === item.baseDocumentType
                                                && this.editData.docEntry === item.baseDocumentEntry) {
                                                // 不激活逻辑计算
                                                qtyMap.set(item, item.quantity);
                                                item.isLoading = true;
                                                item.quantity = 0;
                                                item.materialBatches.forEach(d => d.quantity = 0);
                                            }
                                        }
                                        // 使用预留库存
                                        for (let result of results) {
                                            if (result.status === ibas.emBOStatus.CLOSED) {
                                                continue;
                                            }
                                            if (result.closedQuantity >= result.quantity) {
                                                continue;
                                            }
                                            let wItems: bo.PurchaseReturnItem[] = target.purchaseReturnItems.where(c =>
                                                result.targetDocumentType === c.baseDocumentType
                                                && result.targetDocumentEntry === c.baseDocumentEntry
                                                && result.targetDocumentLineId === c.baseDocumentLineId
                                                && result.itemCode === c.itemCode
                                            );
                                            if (wItems.length === 0) {
                                                continue;
                                            }
                                            let wItem: bo.PurchaseReturnItem = wItems.find(c => c.warehouse === result.warehouse);
                                            if (ibas.objects.isNull(wItem)) {
                                                // 没有同仓库的，则新建行
                                                if (wItems[0].quantity === 0) {
                                                    wItem = wItems[0];
                                                } else {
                                                    wItem = wItems[0].clone();
                                                    target.purchaseReturnItems.add(wItem);
                                                }
                                                wItem.warehouse = result.warehouse;
                                            }
                                            // 应用库存
                                            wItem.quantity = ibas.numbers.round(wItem.quantity + result.quantity - result.closedQuantity);
                                            // 处理明细项
                                            if (!ibas.strings.isEmpty(result.batchCode)) {
                                                // 批次管理
                                                let bItem: materials.bo.IMaterialBatchItem = wItem.materialBatches.find(c => c.batchCode === result.batchCode);
                                                if (ibas.objects.isNull(bItem)) {
                                                    // 没有同批次的，则新建行
                                                    bItem = wItem.materialBatches.create();
                                                    bItem.batchCode = result.batchCode;
                                                    bItem.quantity = 0;
                                                }
                                                bItem.quantity = ibas.numbers.round(bItem.quantity + result.quantity - result.closedQuantity);
                                            } else if (!ibas.strings.isEmpty(result.serialCode)) {
                                                // 序列管理
                                                let sItem: materials.bo.IMaterialSerialItem = wItem.materialSerials.find(c => c.serialCode === result.serialCode);
                                                if (ibas.objects.isNull(sItem)) {
                                                    sItem = wItem.materialSerials.create();
                                                    sItem.serialCode = result.serialCode;
                                                }
                                            }
                                        }
                                        // 数量被修改的行激活逻辑计算
                                        for (let item of target.purchaseReturnItems) {
                                            if (item.isLoading !== true) {
                                                continue;
                                            }
                                            item.isLoading = false;
                                            if (qtyMap.get(item) !== item.quantity) {
                                                (<any>item).firePropertyChanged(bo.PurchaseReturnItem.PROPERTY_QUANTITY_NAME);
                                            }
                                        }
                                        this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("purchase_used_reserved_materials_inventory"));
                                    }
                                    let app: PurchaseReturnEditApp = new PurchaseReturnEditApp();
                                    app.navigation = this.navigation;
                                    app.viewShower = this.viewShower;
                                    app.run(target);
                                }
                            });
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });

            }

            private choosePurchaseReturnRequestItemUnit(caller: bo.PurchaseReturnRequestItem, filterConditions?: ibas.ICondition[]): void {
                let conditions: ibas.IList<ibas.ICondition> = ibas.arrays.create(
                    new ibas.Condition(materials.bo.Unit.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                );
                // 添加输入条件
                if (filterConditions instanceof Array && filterConditions.length > 0) {
                    if (conditions.length > 1) {
                        conditions.firstOrDefault().bracketOpen++;
                        conditions.lastOrDefault().bracketClose++;
                    }
                    conditions.add(filterConditions);
                }
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IUnit>({
                    boCode: materials.bo.BO_CODE_UNIT,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: conditions,
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
                        that.changePurchaseReturnRequestItemPrice(that.editData.priceList, [caller]);
                    }
                });
            }
            private chooseSupplierAgreements(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchasereturnrequest_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                condition.bracketOpen = 2;
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.Agreement.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.value = this.editData.supplierCode;
                condition.bracketClose = 1;
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
                    condition.alias = bo.PurchaseReturnRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseReturnRequest.PROPERTY_BRANCH_NAME;
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
            private choosePurchaseReturnRequestItemDistributionRule(type: accounting.app.emDimensionType, caller: bo.PurchaseReturnRequestItem): void {
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
            private choosePurchaseReturnRequestItemMaterialVersion(caller: bo.PurchaseReturnRequestItem): void {
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
            /** 预留物料库存 */
            private reserveMaterialsInventory(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty) {
                    throw new Error(ibas.i18n.prop("shell_data_saved_first"));
                }
                let contract: materials.app.IMaterialInventoryReservationTarget = {
                    targetType: this.editData.objectCode,
                    targetEntry: this.editData.docEntry,
                    items: []
                };
                for (let item of this.editData.purchaseReturnRequestItems) {
                    contract.items.push({
                        targetLineId: item.lineId,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        itemVersion: item.itemVersion,
                        warehouse: item.warehouse,
                        quantity: ibas.numbers.valueOf(item.quantity) - ibas.numbers.valueOf(item.closedQuantity),
                        uom: item.uom,
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialInventoryReservationTarget | materials.app.IMaterialInventoryReservationTarget[]>({
                    proxy: new materials.app.MaterialInventoryReservationServiceProxy(contract)
                });
            }
            protected measuringMaterials(): void {
                let lines: ibas.ArrayList<materials.app.IMaterialMeasurementContractLine> = new ibas.ArrayList<materials.app.IMaterialMeasurementContractLine>();
                for (let item of this.editData.purchaseReturnRequestItems) {
                    lines.add({
                        lineId: item.lineId,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        quantity: item.quantity,
                        uom: item.uom,
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialMeasurementContract>({
                    proxy: new materials.app.MaterialMeasurementServiceProxy({
                        mode: "PURCHASE",
                        documentType: this.editData.objectCode,
                        documentEntry: this.editData.docEntry,
                        lines: lines,
                    })
                });
            }
            protected choosePurchaseReturnRequestItemMaterialCatalog(caller: bo.PurchaseReturnRequestItem, filterConditions?: ibas.ICondition[]): void {
                if (ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(
                        ibas.emMessageType.WARNING, ibas.i18n.prop("purchase_please_choose_supplier_first")
                    ); return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                condition = criteria.conditions.create();
                condition.alias = materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.value = this.editData.supplierCode;
                condition = criteria.conditions.create();
                condition.alias = materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_ITEMCODE_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = "";
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_ITEMCODE_NAME;
                condition.operation = ibas.emConditionOperation.NOT_NULL;
                condition.bracketClose = 1;
                // 添加输入条件
                if (filterConditions instanceof Array && filterConditions.length > 0) {
                    if (criteria.conditions.length > 1) {
                        criteria.conditions.firstOrDefault().bracketOpen++;
                        criteria.conditions.lastOrDefault().bracketClose++;
                    }
                    criteria.conditions.add(filterConditions);
                }
                // 调用选择服务
                ibas.servicesManager.runChooseService<materials.bo.BusinessPartnerMaterialCatalog>({
                    criteria: criteria,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    boCode: materials.bo.BusinessPartnerMaterialCatalog.BUSINESS_OBJECT_CODE,
                    onCompleted: (selecteds) => {
                        let count: number = this.editData.purchaseReturnRequestItems.length;
                        for (let selected of selecteds) {
                            if (ibas.strings.isEmpty(selected.itemCode)) {
                                continue;
                            }
                            if (ibas.objects.isNull(caller)) {
                                caller = this.editData.purchaseReturnRequestItems.create();
                            }
                            caller.catalogCode = selected.catalogCode;
                            condition = new ibas.Condition();
                            condition.alias = materials.bo.Material.PROPERTY_CODE_NAME;
                            condition.value = selected.itemCode;
                            this.choosePurchaseReturnRequestItemMaterial(caller, null, [condition]);
                            caller = null;
                        }
                        if (this.editData.purchaseReturnRequestItems.length > count) {
                            this.view.showPurchaseReturnRequestItems(this.editData.purchaseReturnRequestItems.filterDeleted());
                        }
                    }
                });
            }
            protected viewHistoricalPrices(caller: bo.PurchaseReturnRequestItem): void {
                if (ibas.objects.isNull(caller)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    )); return;
                }
                if (ibas.strings.isEmpty(caller.itemCode)) {
                    this.messages(
                        ibas.emMessageType.WARNING, ibas.i18n.prop("purchase_please_choose_material_first")
                    ); return;
                }
                if (ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(
                        ibas.emMessageType.WARNING, ibas.i18n.prop("purchase_please_choose_supplier_first")
                    ); return;
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialHistoricalPricesContract>({
                    proxy: new materials.app.MaterialHistoricalPricesServiceProxy({
                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                        businessPartnerCode: this.editData.supplierCode,
                        businessPartnerName: this.editData.supplierName,
                        documentType: this.editData.objectCode,
                        documentEntry: this.editData.docEntry,
                        documentLineId: caller.lineId,
                        documentDate: this.editData.documentDate,
                        itemCode: caller.itemCode,
                        itemDescription: caller.itemDescription,
                        quantity: caller.quantity,
                        uom: caller.uom,
                        applyPrice: (price, currency) => {
                            caller.preTaxPrice = price;
                            caller.currency = currency;
                        }
                    })
                });
            }
            protected choosePaymentTerm(criteria?: ibas.ICriteria): void {
                if (ibas.objects.isNull(criteria) || criteria.conditions.length === 0) {
                    criteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_ACTIVATED_NAME;
                    condition.value = ibas.emYesNo.YES.toString();
                    ibas.servicesManager.runChooseService<businesspartner.bo.PaymentTerm>({
                        criteria: criteria,
                        chooseType: ibas.emChooseType.SINGLE,
                        boCode: businesspartner.bo.PaymentTerm.BUSINESS_OBJECT_CODE,
                        onCompleted: (selecteds) => {
                            for (let selected of selecteds) {
                                this.editData.paymentCode = selected.code;
                            }
                        }
                    });
                } else {
                    let boReposiorty: businesspartner.bo.BORepositoryBusinessPartner = new businesspartner.bo.BORepositoryBusinessPartner();
                    boReposiorty.fetchPaymentTerm({
                        criteria: criteria,
                        onCompleted: (opRslt) => {
                            for (let selected of opRslt.resultObjects) {
                                if (selected.dueDateBaseOn === businesspartner.bo.emDueDateBaseOn.DOCUMENT_DATE) {
                                    this.editData.deliveryDate = selected.calculateTermDate(this.editData.documentDate);
                                } else if (selected.dueDateBaseOn === businesspartner.bo.emDueDateBaseOn.POSTING_DATE) {
                                    this.editData.deliveryDate = selected.calculateTermDate(this.editData.postingDate);
                                } else if (selected.dueDateBaseOn === businesspartner.bo.emDueDateBaseOn.SYSTEM_DATE) {
                                    this.editData.deliveryDate = selected.calculateTermDate(ibas.dates.today());
                                }
                            }
                        }
                    });
                }
            }
        }
        /** 视图-采购退货请求 */
        export interface IPurchaseReturnRequestEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseReturnRequest(data: bo.PurchaseReturnRequest): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购退货请求-行事件 */
            addPurchaseReturnRequestItemEvent: Function;
            /** 删除采购退货请求-行事件 */
            removePurchaseReturnRequestItemEvent: Function;
            /** 选择采购退货请求供应商信息 */
            choosePurchaseReturnRequestSupplierEvent: Function;
            /** 选择采购退货请求联系人信息 */
            choosePurchaseReturnRequestContactPersonEvent: Function;
            /** 选择采购退货请求价格清单信息 */
            choosePurchaseReturnRequestPriceListEvent: Function;
            /** 选择采购退货请求-行物料主数据 */
            choosePurchaseReturnRequestItemMaterialEvent: Function;
            /** 选择采购退货请求-行 仓库 */
            choosePurchaseReturnRequestItemWarehouseEvent: Function;
            /** 选择采购退货请求-行 单位 */
            choosePurchaseReturnRequestItemUnitEvent: Function;
            /** 选择采购退货请求-行 物料序列事件 */
            choosePurchaseReturnRequestItemMaterialSerialEvent: Function;
            /** 选择采购退货请求-行 物料批次事件 */
            choosePurchaseReturnRequestItemMaterialBatchEvent: Function;
            /** 显示数据 */
            showPurchaseReturnRequestItems(datas: bo.PurchaseReturnRequestItem[]): void;
            /** 选择采购退货请求项目-采购交货事件 */
            choosePurchaseReturnRequestPurchaseDeliveryEvent: Function;
            /** 选择供应商合同 */
            chooseSupplierAgreementsEvent: Function;
            /** 选择采购退货请求-行 成本中心事件 */
            choosePurchaseReturnRequestItemDistributionRuleEvent: Function;
            /** 选择采购退货请求-行 物料版本 */
            choosePurchaseReturnRequestItemMaterialVersionEvent: Function;
            /** 选择一业务伙伴目录事件 */
            choosePurchaseReturnRequestItemMaterialCatalogEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为采购贷项事件 */
            turnToPurchaseReturnEvent: Function;
            /** 预留物料库存 */
            reserveMaterialsInventoryEvent: Function;
            /** 测量物料事件 */
            measuringMaterialsEvent: Function;
            /** 查看物料历史价格事件 */
            viewHistoricalPricesEvent: Function;
            /** 选择付款条款事件 */
            choosePaymentTermEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 采购退货请求编辑服务映射 */
        export class PurchaseReturnRequestEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestEditApp.APPLICATION_ID;
                this.name = PurchaseReturnRequestEditApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnRequestEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.PurchaseReturnRequest>> {
                return new PurchaseReturnRequestEditApp();
            }
        }
    }
}