/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 编辑应用-采购发票 */
        export class PurchaseInvoiceEditApp extends ibas.BOEditService<IPurchaseInvoiceEditView, bo.PurchaseInvoice> {
            /** 应用标识 */
            static APPLICATION_ID: string = "2dfedc56-d987-4988-af35-6e4bab24a79e";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchaseinvoice_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseInvoice.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseInvoiceEditApp.APPLICATION_ID;
                this.name = PurchaseInvoiceEditApp.APPLICATION_NAME;
                this.boCode = PurchaseInvoiceEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addPurchaseInvoiceItemEvent = this.addPurchaseInvoiceItem;
                this.view.removePurchaseInvoiceItemEvent = this.removePurchaseInvoiceItem;
                this.view.choosePurchaseInvoiceSupplierEvent = this.choosePurchaseInvoiceSupplier;
                this.view.choosePurchaseInvoiceContactPersonEvent = this.choosePurchaseInvoiceContactPerson;
                this.view.choosePurchaseInvoicePriceListEvent = this.choosePurchaseInvoicePriceList;
                this.view.choosePurchaseInvoiceItemMaterialEvent = this.choosePurchaseInvoiceItemMaterial;
                this.view.choosePurchaseInvoiceItemMaterialBatchEvent = this.choosePurchaseInvoiceLineMaterialBatch;
                this.view.choosePurchaseInvoiceItemMaterialSerialEvent = this.choosePurchaseInvoiceLineMaterialSerial;
                this.view.choosePurchaseInvoiceItemWarehouseEvent = this.choosePurchaseInvoiceItemWarehouse;
                this.view.choosePurchaseInvoiceItemUnitEvent = this.choosePurchaseInvoiceItemUnit;
                this.view.choosePurchaseInvoicePurchaseOrderEvent = this.choosePurchaseInvoicePurchaseOrder;
                this.view.choosePurchaseInvoicePurchaseDeliveryEvent = this.choosePurchaseInvoicePurchaseDelivery;
                this.view.choosePurchaseInvoiceBlanketAgreementEvent = this.choosePurchaseInvoiceBlanketAgreement;
                this.view.choosePurchaseInvoiceItemDistributionRuleEvent = this.choosePurchaseInvoiceItemDistributionRule;
                this.view.choosePurchaseInvoiceItemMaterialVersionEvent = this.choosePurchaseInvoiceItemMaterialVersion;
                this.view.choosePurchaseInvoiceItemMaterialCatalogEvent = this.choosePurchaseInvoiceItemMaterialCatalog;
                this.view.chooseSupplierAgreementsEvent = this.chooseSupplierAgreements;
                this.view.receiptPurchaseInvoiceEvent = this.receiptPurchaseInvoice;
                this.view.editShippingAddressesEvent = this.editShippingAddresses;
                this.view.turnToPurchaseCreditNoteEvent = this.turnToPurchaseCreditNote;
                this.view.addPurchaseInvoiceDownPaymentEvent = this.addPurchaseInvoiceDownPayment;
                this.view.removePurchaseInvoiceDownPaymentEvent = this.removePurchaseInvoiceDownPayment;
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
                    this.editData = new bo.PurchaseInvoice();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseInvoice(this.editData);
                this.view.showPurchaseInvoiceItems(this.editData.purchaseInvoiceItems.filterDeleted());
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
                // 计算到期日
                if (this.editData.isNew === true && !ibas.strings.isEmpty(this.editData.paymentCode)) {
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME;
                    condition.value = this.editData.paymentCode;
                    condition = criteria.conditions.create();
                    condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_ACTIVATED_NAME;
                    condition.value = ibas.emYesNo.YES.toString();
                    this.choosePaymentTerm(criteria);
                }
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseInvoice): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseInvoice)) {
                    let data: bo.PurchaseInvoice = arguments[0];
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
                        boRepository.fetchPurchaseInvoice({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseInvoice>): void {
                                let data: bo.PurchaseInvoice;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.PurchaseInvoice)) {
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
                boRepository.savePurchaseInvoice({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseInvoice>): void {
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
                        boRepository.parse<bo.PurchaseInvoice>({
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
                        that.editData = new bo.PurchaseInvoice();
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
            /** 选择采购发票客户事件 */
            private choosePurchaseInvoiceSupplier(filterConditions?: ibas.ICondition[]): void {
                let items: bo.PurchaseInvoiceItem[] = this.editData.purchaseInvoiceItems.where(c =>
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
                                this.removePurchaseInvoiceItem(items);
                                this.choosePurchaseInvoiceSupplier(filterConditions);
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
                        if (!ibas.strings.isEmpty(selected.taxGroup)) {
                            that.view.defaultTaxGroup = selected.taxGroup;
                        }
                        // 计算到期日
                        if (!ibas.strings.isEmpty(that.editData.paymentCode)) {
                            let criteria: ibas.ICriteria = new ibas.Criteria();
                            let condition: ibas.ICondition = criteria.conditions.create();
                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME;
                            condition.value = that.editData.paymentCode;
                            condition = criteria.conditions.create();
                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_ACTIVATED_NAME;
                            condition.value = ibas.emYesNo.YES.toString();
                            that.choosePaymentTerm(criteria);
                        }
                        // 客户改变，清除旧地址
                        that.editData.shippingAddresss.clear();
                        that.changePurchaseInvoiceItemPrice(that.editData.priceList);
                    }
                });
            }
            /** 选择采购发票价格清单事件 */
            private choosePurchaseInvoicePriceList(): void {
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
                        that.changePurchaseInvoiceItemPrice(that.editData.priceList);
                    }
                });
            }
            /** 更改行价格 */
            private changePurchaseInvoiceItemPrice(priceList: number | ibas.ICriteria, items?: bo.PurchaseInvoiceItem[]): void {
                if (ibas.objects.isNull(items)) {
                    items = this.editData.purchaseInvoiceItems.filterDeleted();
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
                        this.changePurchaseInvoiceItemPrice(criteria, items);
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
                                    this.changePurchaseInvoiceItemPrice(criteria, items);
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
            /** 选择采购发票行物料事件 */
            private choosePurchaseInvoiceItemMaterial(caller: bo.PurchaseInvoiceItem, filterConditions?: ibas.ICondition[]): void {
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
                // 调用选择服务
                ibas.servicesManager.runChooseService<materials.bo.IProduct>({
                    boCode: materials.bo.BO_CODE_PRODUCT,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<materials.bo.IProduct>): void {
                        let index: number = that.editData.purchaseInvoiceItems.indexOf(caller);
                        let item: bo.PurchaseInvoiceItem = that.editData.purchaseInvoiceItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        let beChangeds: ibas.IList<materials.app.IBeChangedUOMSource> = new ibas.ArrayList<materials.app.IBeChangedUOMSource>();
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseInvoiceItems.create();
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
                                            item.unitPrice = 0;
                                            if (selected.taxed === ibas.emYesNo.NO) {
                                                item.preTaxPrice = selected.price;
                                            } else {
                                                item.price = selected.price;
                                            }
                                        }
                                    });
                                }
                            }
                            beChangeds.add({
                                caller: item,
                                sourceUnit: item.uom,
                                targetUnit: item.inventoryUOM,
                                material: item.itemCode,
                                setUnitRate(this: bo.PurchaseInvoiceItem, value: number): void {
                                    this.uomRate = value;
                                }
                            });
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
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
            /** 选择采购发票行仓库事件 */
            private choosePurchaseInvoiceItemWarehouse(caller: bo.PurchaseInvoiceItem, filterConditions?: ibas.ICondition[]): void {
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
                        let index: number = that.editData.purchaseInvoiceItems.indexOf(caller);
                        let item: bo.PurchaseInvoiceItem = that.editData.purchaseInvoiceItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.purchaseInvoiceItems.create();
                                created = true;
                            }
                            item.warehouse = selected.code;
                            that.view.defaultWarehouse = item.warehouse;
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
                        }
                    }
                });
            }
            /** 添加采购发票-行事件 */
            private addPurchaseInvoiceItem(items: bo.PurchaseInvoiceItem[] | number): void {
                if (items instanceof Array && items.length > 0) {
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    builder.append(ibas.i18n.prop("shell_data_new_line"));
                    builder.append(" [");
                    for (let item of items) {
                        let newItem: bo.PurchaseInvoiceItem = item.clone();
                        newItem.lineId = undefined;
                        newItem.visOrder = undefined;
                        // 序列号清除
                        newItem.materialSerials.clear();
                        this.editData.purchaseInvoiceItems.add(newItem);
                        if (builder.length > 2) {
                            builder.append(", ");
                        }
                        builder.append(newItem.lineId);
                    }
                    builder.append("] ");
                    if (builder.length > 3) {
                        this.proceeding(ibas.emMessageType.WARNING, builder.toString());
                        this.view.showPurchaseInvoiceItems(this.editData.purchaseInvoiceItems.filterDeleted());
                    }
                } else if (typeof items === "number" && items > 0) {
                    for (let i: number = 0; i < items; i++) {
                        this.editData.purchaseInvoiceItems.create();
                    }
                    this.view.showPurchaseInvoiceItems(this.editData.purchaseInvoiceItems.filterDeleted());
                } else {
                    this.choosePurchaseInvoiceItemMaterial(undefined);
                }
            }
            /** 删除采购发票-行事件 */
            private removePurchaseInvoiceItem(items: bo.PurchaseInvoiceItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseInvoiceItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseInvoiceItems.remove(item);
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
                this.view.showPurchaseInvoiceItems(this.editData.purchaseInvoiceItems.filterDeleted());
            }

            /** 选择采购发票行批次事件 */
            private choosePurchaseInvoiceLineMaterialBatch(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialBatchContract> = new ibas.ArrayList<materials.app.IMaterialBatchContract>();
                for (let item of this.editData.purchaseInvoiceItems) {
                    contracts.add({
                        batchManagement: item.batchManagement,
                        itemCode: item.itemCode,
                        itemDescription: item.itemDescription,
                        itemVersion: item.itemVersion,
                        warehouse: item.warehouse,
                        quantity: item.inventoryQuantity,
                        uom: item.inventoryUOM,
                        materialBatches: item.materialBatches,
                        agreements: item.agreements
                    });
                }
                ibas.servicesManager.runApplicationService<materials.app.IMaterialBatchContract[]>({
                    proxy: new materials.app.MaterialBatchReceiptServiceProxy(contracts)
                });
            }
            /** 选择采购发票序列事件 */
            private choosePurchaseInvoiceLineMaterialSerial(): void {
                let contracts: ibas.ArrayList<materials.app.IMaterialSerialContract> = new ibas.ArrayList<materials.app.IMaterialSerialContract>();
                for (let item of this.editData.purchaseInvoiceItems) {
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
                    proxy: new materials.app.MaterialSerialReceiptServiceProxy(contracts)
                });
            }
            /** 选择采购发票-采购订单事件 */
            private choosePurchaseInvoicePurchaseOrder(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseinvoice_suppliercode")
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
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
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
                // 是否指定分支
                if (!ibas.strings.isEmpty(this.editData.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 当前客户的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_SUPPLIERCODE_NAME;
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
                        condition.alias = bo.PurchaseOrder.PROPERTY_AGREEMENTS_NAME;
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
                cCriteria.propertyPath = bo.PurchaseOrder.PROPERTY_PURCHASEORDERITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                cCriteria.noChilds = false;
                // 未取消的
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseOrderItem.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 数量大于已清数量
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseOrderItem.PROPERTY_QUANTITY_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = bo.PurchaseOrderItem.PROPERTY_CLOSEDQUANTITY_NAME;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseOrder>({
                    boCode: bo.PurchaseOrder.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseOrder>): void {
                        criteria = new ibas.Criteria();
                        let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                        cCriteria.propertyPath = receiptpayment.bo.Payment.PROPERTY_PAYMENTITEMS_NAME;
                        cCriteria.onlyHasChilds = true;
                        for (let selected of selecteds) {
                            if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                continue;
                            }
                            if (!ibas.strings.isEmpty(selected.paymentCode) && that.editData.paymentCode !== selected.paymentCode) {
                                that.messages({
                                    type: ibas.emMessageType.QUESTION,
                                    title: ibas.i18n.prop(that.name),
                                    message: ibas.i18n.prop("purchase_change_item_paymentcode_continue"),
                                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                                    onCompleted(action: ibas.emMessageAction): void {
                                        if (action === ibas.emMessageAction.YES) {
                                            that.editData.paymentCode = selected.paymentCode;
                                            let criteria: ibas.ICriteria = new ibas.Criteria();
                                            let condition: ibas.ICondition = criteria.conditions.create();
                                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME;
                                            condition.value = that.editData.paymentCode;
                                            condition = criteria.conditions.create();
                                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_ACTIVATED_NAME;
                                            condition.value = ibas.emYesNo.YES.toString();
                                            that.choosePaymentTerm(criteria);
                                        }
                                    }
                                });
                            }
                            that.editData.baseDocument(selected);
                            // 预付款查询
                            // 基于单据为订单
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                            condition.value = selected.objectCode;
                            condition.bracketOpen = 1;
                            if (cCriteria.conditions.length > 2) {
                                condition.relationship = ibas.emConditionRelationship.OR;
                            }
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTENTRY_NAME;
                            condition.value = selected.docEntry.toString();
                            condition.bracketClose = 1;
                            // 原始单据为订单
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME;
                            condition.value = selected.objectCode;
                            condition.bracketOpen = 1;
                            if (cCriteria.conditions.length > 2) {
                                condition.relationship = ibas.emConditionRelationship.OR;
                            }
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_ORIGINALDOCUMENTENTRY_NAME;
                            condition.value = selected.docEntry.toString();
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                            condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                            condition.value = that.editData.objectCode;
                            condition.bracketClose = 1;
                        }
                        if (cCriteria.conditions.length > 0) {
                            that.addPurchaseInvoiceDownPayment(criteria);
                        }
                        that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
                    }
                });
            }
            /** 选择采购发票-采购交货事件 */
            private choosePurchaseInvoicePurchaseDelivery(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseinvoice_suppliercode")
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
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseDelivery.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
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
                // 当前客户的
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
                // 已清金额小于总计
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseOrderItem.PROPERTY_CLOSEDAMOUNT_NAME;
                condition.operation = ibas.emConditionOperation.LESS_THAN;
                condition.comparedAlias = bo.PurchaseOrderItem.PROPERTY_LINETOTAL_NAME;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.PurchaseDelivery>({
                    boCode: bo.PurchaseDelivery.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.PurchaseDelivery>): void {
                        criteria = new ibas.Criteria();
                        let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                        cCriteria.propertyPath = receiptpayment.bo.Payment.PROPERTY_PAYMENTITEMS_NAME;
                        cCriteria.onlyHasChilds = true;
                        for (let selected of selecteds) {
                            if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                continue;
                            }
                            if (!ibas.strings.isEmpty(selected.paymentCode) && that.editData.paymentCode !== selected.paymentCode) {
                                that.messages({
                                    type: ibas.emMessageType.QUESTION,
                                    title: ibas.i18n.prop(that.name),
                                    message: ibas.i18n.prop("purchase_change_item_paymentcode_continue"),
                                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                                    onCompleted(action: ibas.emMessageAction): void {
                                        if (action === ibas.emMessageAction.YES) {
                                            that.editData.paymentCode = selected.paymentCode;
                                            let criteria: ibas.ICriteria = new ibas.Criteria();
                                            let condition: ibas.ICondition = criteria.conditions.create();
                                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME;
                                            condition.value = that.editData.paymentCode;
                                            condition = criteria.conditions.create();
                                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_ACTIVATED_NAME;
                                            condition.value = ibas.emYesNo.YES.toString();
                                            that.choosePaymentTerm(criteria);
                                        }
                                    }
                                });
                            }
                            that.editData.baseDocument(selected);
                            // 预付款查询
                            // 基于单据为订单
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                            condition.value = selected.objectCode;
                            condition.bracketOpen = 1;
                            if (cCriteria.conditions.length > 2) {
                                condition.relationship = ibas.emConditionRelationship.OR;
                            }
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTENTRY_NAME;
                            condition.value = selected.docEntry.toString();
                            condition.bracketClose = 1;
                        }
                        if (cCriteria.conditions.length > 0) {
                            that.addPurchaseInvoiceDownPayment(criteria);
                        }
                        that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
                    }
                });
            }
            private receiptPurchaseInvoice(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty) {
                    throw new Error(ibas.i18n.prop("shell_data_saved_first"));
                }
                let amount: number = this.editData.documentTotal - this.editData.paidTotal;
                if (amount < 0 || (amount === 0 && this.editData.documentTotal !== 0)) {
                    throw new Error(ibas.i18n.prop("purchase_receipted"));
                }
                ibas.servicesManager.runApplicationService<businesspartner.app.IPaymentContract>({
                    proxy: new businesspartner.app.PaymentServiceProxy({
                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                        businessPartnerCode: this.editData.supplierCode,
                        documentType: this.editData.objectCode,
                        documentEntry: this.editData.docEntry,
                        documentCurrency: this.editData.documentCurrency,
                        branch: this.editData.branch,
                        documentTotal: amount,
                    })
                });
            }
            /** 选择联系人 */
            private choosePurchaseInvoiceContactPerson(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseinvoice_suppliercode")
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
            protected turnToPurchaseCreditNote(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty === true) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_saved_first"));
                    return;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseInvoice({
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
                            this.view.showPurchaseInvoice(this.editData);
                            this.view.showPurchaseInvoiceItems(this.editData.purchaseInvoiceItems.filterDeleted());
                            if ((this.editData.approvalStatus !== ibas.emApprovalStatus.APPROVED && this.editData.approvalStatus !== ibas.emApprovalStatus.UNAFFECTED)
                                || this.editData.deleted === ibas.emYesNo.YES
                                || this.editData.canceled === ibas.emYesNo.YES
                                || this.editData.documentStatus === ibas.emDocumentStatus.PLANNED
                            ) {
                                throw new Error(ibas.i18n.prop("purchase_invaild_status_not_support_turn_to_operation"));
                            }
                            let target: bo.PurchaseCreditNote = new bo.PurchaseCreditNote();
                            target.supplierCode = this.editData.supplierCode;
                            target.supplierName = this.editData.supplierName;
                            target.baseDocument(this.editData);
                            // 整单基于，则赋折扣、总计
                            if (ibas.numbers.valueOf(target.itemsLineTotal) === this.editData.itemsLineTotal
                                && ibas.numbers.valueOf(target.shippingsExpenseTotal) === this.editData.shippingsExpenseTotal) {
                                target.rounding = this.editData.rounding;
                                target.diffAmount = this.editData.diffAmount;
                                target.discount = this.editData.discount;
                                target.inverseDiscount = this.editData.inverseDiscount;
                                target.documentTotal = this.editData.documentTotal;
                            }
                            // 设置单据类型
                            bo.baseDocument_OrderType(target, this.editData);

                            let app: PurchaseCreditNoteEditApp = new PurchaseCreditNoteEditApp();
                            app.navigation = this.navigation;
                            app.viewShower = this.viewShower;
                            app.run(target);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });

            }
            /** 选择一揽子协议事件 */
            private choosePurchaseInvoiceBlanketAgreement(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseinvoice_suppliercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = bo.BlanketAgreement.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = bo.BlanketAgreement.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = bo.BlanketAgreement.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = bo.BlanketAgreement.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = bo.BlanketAgreement.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(this.editData.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = bo.BlanketAgreement.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = bo.BlanketAgreement.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.BlanketAgreement.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = bo.BlanketAgreement.PROPERTY_SUPPLIERCODE_NAME;
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
                        condition.alias = bo.BlanketAgreement.PROPERTY_AGREEMENTS_NAME;
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
                // 未过期的
                condition = criteria.conditions.create();
                condition.bracketOpen = 1;
                condition.alias = bo.BlanketAgreement.PROPERTY_ENDDATE_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                condition.value = ibas.dates.toString(ibas.dates.today());
                condition = criteria.conditions.create();
                condition.bracketClose = 1;
                condition.alias = bo.BlanketAgreement.PROPERTY_ENDDATE_NAME;
                condition.operation = ibas.emConditionOperation.IS_NULL;
                condition.relationship = ibas.emConditionRelationship.OR;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.BlanketAgreement>({
                    boCode: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<bo.BlanketAgreement>): void {
                        criteria = new ibas.Criteria();
                        for (let selected of selecteds) {
                            if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                continue;
                            }
                            that.editData.paymentCode = selected.paymentCode;
                            for (let item of selected.blanketAgreementItems) {
                                condition = criteria.conditions.create();
                                condition.alias = materials.bo.Material.PROPERTY_CODE_NAME;
                                condition.value = item.itemCode;
                                if (criteria.conditions.length > 0) {
                                    condition.relationship = ibas.emConditionRelationship.OR;
                                }
                            }
                        }
                        if (criteria.conditions.length > 0) {
                            let boRepository: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                            boRepository.fetchProduct({
                                criteria: criteria,
                                onCompleted: (opRsltPRD) => {
                                    let beChangeds: ibas.IList<materials.app.IBeChangedUOMSource> = new ibas.ArrayList<materials.app.IBeChangedUOMSource>();
                                    for (let selected of selecteds) {
                                        if (!ibas.strings.equals(that.editData.supplierCode, selected.supplierCode)) {
                                            continue;
                                        }
                                        for (let baItem of selected.blanketAgreementItems) {
                                            if (baItem.canceled === ibas.emYesNo.YES) {
                                                continue;
                                            }
                                            if (baItem.lineStatus !== ibas.emDocumentStatus.RELEASED) {
                                                continue;
                                            }
                                            if (that.editData.purchaseInvoiceItems.firstOrDefault(
                                                c => c.baseDocumentType === baItem.objectCode
                                                    && c.baseDocumentEntry === baItem.docEntry
                                                    && c.baseDocumentLineId === baItem.lineId) !== null) {
                                                continue;
                                            }
                                            let item: bo.PurchaseInvoiceItem = that.editData.purchaseInvoiceItems.create();
                                            item.itemCode = baItem.itemCode;
                                            item.itemDescription = baItem.itemDescription;
                                            item.itemSign = baItem.itemSign;
                                            item.baseDocumentType = baItem.objectCode;
                                            item.baseDocumentEntry = baItem.docEntry;
                                            item.baseDocumentLineId = baItem.lineId;
                                            for (let mmItem of opRsltPRD.resultObjects.where(c => ibas.strings.equalsIgnoreCase(c.code, item.itemCode))) {
                                                item.baseProduct(mmItem);
                                            }
                                            if (!ibas.strings.isEmpty(baItem.uom)) {
                                                item.uom = baItem.uom;
                                            }
                                            item.tax = baItem.tax;
                                            item.taxRate = baItem.taxRate;
                                            item.price = baItem.price;
                                            item.currency = baItem.currency;
                                            item.quantity = baItem.quantity - baItem.closedQuantity;
                                            item.reference1 = baItem.reference1;
                                            item.reference2 = baItem.reference2;
                                            if (!ibas.strings.isEmpty(baItem.inventoryUOM)) {
                                                item.inventoryUOM = baItem.inventoryUOM;
                                                item.uomRate = baItem.uomRate;
                                            } else {
                                                beChangeds.add({
                                                    caller: item,
                                                    sourceUnit: item.uom,
                                                    targetUnit: item.inventoryUOM,
                                                    material: item.itemCode,
                                                    setUnitRate(this: bo.PurchaseInvoiceItem, value: number): void {
                                                        this.uomRate = value;
                                                    }
                                                });
                                            }
                                        }
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
                                    that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
                                }
                            });
                        }
                    }
                });
            }
            private choosePurchaseInvoiceItemUnit(caller: bo.PurchaseInvoiceItem, filterConditions?: ibas.ICondition[]): void {
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
                        that.changePurchaseInvoiceItemPrice(that.editData.priceList, [caller]);
                    }
                });
            }
            private chooseSupplierAgreements(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_purchaseinvoice_suppliercode")
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
                    condition.alias = bo.PurchaseInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.PurchaseInvoice.PROPERTY_BRANCH_NAME;
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
            private choosePurchaseInvoiceItemDistributionRule(type: accounting.app.emDimensionType, caller: bo.PurchaseInvoiceItem): void {
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
            private choosePurchaseInvoiceItemMaterialVersion(caller: bo.PurchaseInvoiceItem): void {
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
            /** 添加销售发票-预收款事件 */
            public addPurchaseInvoiceDownPayment(criteria?: ibas.ICriteria): void {
                let condition: ibas.ICondition;
                let boRepository: receiptpayment.bo.BORepositoryReceiptPayment;
                if (ibas.objects.isNull(criteria)) {
                    criteria = new ibas.Criteria();
                    let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                    cCriteria.propertyPath = receiptpayment.bo.Payment.PROPERTY_PAYMENTITEMS_NAME;
                    cCriteria.onlyHasChilds = true;
                    // 不基于单据
                    condition = cCriteria.conditions.create();
                    condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = cCriteria.conditions.create();
                    condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                    let orderType: string = ibas.config.applyVariables(bo.PurchaseOrder.BUSINESS_OBJECT_CODE);
                    let deliveryType: string = ibas.config.applyVariables(bo.PurchaseDelivery.BUSINESS_OBJECT_CODE);
                    let requestType: string = ibas.config.applyVariables(bo.DownPaymentRequest.BUSINESS_OBJECT_CODE);
                    for (let item of this.editData.purchaseInvoiceItems) {
                        if (!(item.baseDocumentEntry > 0)) {
                            continue;
                        }
                        if (ibas.strings.equals(item.baseDocumentType, orderType) || ibas.strings.equals(item.baseDocumentType, deliveryType)) {
                            // 基于订单、交货（零售业务）
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                            condition.value = item.baseDocumentType;
                            condition.bracketOpen = 1;
                            if (cCriteria.conditions.length > 2) {
                                condition.relationship = ibas.emConditionRelationship.OR;
                            }
                            condition = cCriteria.conditions.create();
                            condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTENTRY_NAME;
                            condition.value = item.baseDocumentEntry.toString();
                            condition.bracketClose = 1;
                        }
                        // 基于预付款申请
                        condition = cCriteria.conditions.create();
                        condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_BASEDOCUMENTTYPE_NAME;
                        condition.value = requestType;
                        condition.bracketOpen = 1;
                        if (cCriteria.conditions.length > 2) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                        condition = cCriteria.conditions.create();
                        condition.bracketOpen = 2;
                        condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME;
                        condition.value = "";
                        condition = cCriteria.conditions.create();
                        condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME;
                        condition.operation = ibas.emConditionOperation.IS_NULL;
                        condition.relationship = ibas.emConditionRelationship.OR;
                        condition.bracketClose = 1;
                        condition = cCriteria.conditions.create();
                        condition.bracketOpen = 1;
                        condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME;
                        condition.value = item.baseDocumentType;
                        condition.relationship = ibas.emConditionRelationship.OR;
                        condition = cCriteria.conditions.create();
                        condition.alias = receiptpayment.bo.PaymentItem.PROPERTY_ORIGINALDOCUMENTENTRY_NAME;
                        condition.value = item.baseDocumentEntry.toString();
                        condition.bracketClose = 3;
                    }
                } else if (criteria.childCriterias.length > 0) {
                    boRepository = new receiptpayment.bo.BORepositoryReceiptPayment();
                }
                // 未取消的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(this.editData.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = receiptpayment.bo.Payment.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = receiptpayment.bo.Payment.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = receiptpayment.bo.Payment.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.value = this.editData.supplierCode;
                // 存在已清金额
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_DOCUMENTTOTAL_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = receiptpayment.bo.Payment.PROPERTY_CLOSEDAMOUNT_NAME;
                if (ibas.objects.isNull(boRepository)) {
                    let that: this = this;
                    ibas.servicesManager.runChooseService<receiptpayment.bo.Payment>({
                        boCode: receiptpayment.bo.Payment.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.MULTIPLE,
                        criteria: criteria,
                        onCompleted(selecteds: ibas.IList<receiptpayment.bo.Payment>): void {
                            let amount: number = ibas.numbers.valueOf(that.editData.documentTotal)
                                - ibas.numbers.valueOf(that.editData.paidTotal) - ibas.numbers.valueOf(that.editData.downPaymentTotal);
                            for (let item of selecteds) {
                                for (let sItem of item.paymentItems) {
                                    if (!ibas.objects.isNull(that.editData.purchaseInvoiceDownPayments.firstOrDefault(
                                        c => c.paymentType === sItem.objectCode && c.paymentEntry === sItem.docEntry && c.paymentLineId === sItem.lineId
                                    ))) {
                                        continue;
                                    }
                                    let item: bo.PurchaseInvoiceDownPayment = that.editData.purchaseInvoiceDownPayments.create();
                                    item.baseDocument(sItem);
                                    if (amount > sItem.amount) {
                                        item.drawnTotal = sItem.amount;
                                    } else {
                                        item.drawnTotal = amount;
                                    }
                                    amount -= item.drawnTotal;
                                    if (amount <= 0) {
                                        break;
                                    }
                                }
                                if (amount <= 0) {
                                    that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("purchase_documents_no_amount_to_be_paid"));
                                    break;
                                }
                            }
                            that.view.showPurchaseInvoiceDownPayments(that.editData.purchaseInvoiceDownPayments.filterDeleted());
                        }
                    });
                } else {
                    boRepository.fetchPayment({
                        criteria: criteria,
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                let amount: number = ibas.numbers.valueOf(this.editData.documentTotal)
                                    - ibas.numbers.valueOf(this.editData.paidTotal) - ibas.numbers.valueOf(this.editData.downPaymentTotal);
                                for (let item of opRslt.resultObjects) {
                                    for (let sItem of item.paymentItems) {
                                        if (!ibas.objects.isNull(this.editData.purchaseInvoiceDownPayments.firstOrDefault(
                                            c => c.paymentType === sItem.objectCode && c.paymentEntry === sItem.docEntry && c.paymentLineId === sItem.lineId
                                        ))) {
                                            continue;
                                        }
                                        let item: bo.PurchaseInvoiceDownPayment = this.editData.purchaseInvoiceDownPayments.create();
                                        item.baseDocument(sItem);
                                        if (amount > sItem.amount) {
                                            item.drawnTotal = sItem.amount;
                                        } else {
                                            item.drawnTotal = amount;
                                        }
                                        amount -= item.drawnTotal;
                                    }
                                    if (amount <= 0) {
                                        break;
                                    }
                                }
                                this.view.showPurchaseInvoiceDownPayments(this.editData.purchaseInvoiceDownPayments.filterDeleted());
                            } catch (error) {
                                this.messages(error);
                            }
                        }
                    });
                }
            }
            /** 删除销售发票-预收款事件 */
            protected removePurchaseInvoiceDownPayment(items: bo.PurchaseInvoiceDownPayment[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseInvoiceDownPayments.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseInvoiceDownPayments.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showPurchaseInvoiceDownPayments(this.editData.purchaseInvoiceDownPayments.filterDeleted());
            }
            /** 添加销售发票-预收款事件 */
            protected choosePurchaseInvoiceDownPayment(): void {
                let condition: ibas.ICondition;
                let criteria: ibas.Criteria = new ibas.Criteria();
                // 未取消的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 仅下达的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emDocumentStatus.RELEASED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(this.editData.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = receiptpayment.bo.Payment.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = this.editData.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = receiptpayment.bo.Payment.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = receiptpayment.bo.Payment.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.value = this.editData.supplierCode;
                // 存在已清金额
                condition = criteria.conditions.create();
                condition.alias = receiptpayment.bo.Payment.PROPERTY_DOCUMENTTOTAL_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.value = "0";

                ibas.servicesManager.runChooseService<receiptpayment.bo.Payment>({
                    boCode: receiptpayment.bo.Payment.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted: (selecteds) => {
                        let amount: number = ibas.numbers.valueOf(this.editData.documentTotal)
                            - ibas.numbers.valueOf(this.editData.paidTotal) - ibas.numbers.valueOf(this.editData.downPaymentTotal);
                        for (let selected of selecteds) {
                            for (let sItem of selected.paymentItems) {
                                if (!ibas.objects.isNull(this.editData.purchaseInvoiceDownPayments.firstOrDefault(
                                    c => c.paymentType === sItem.objectCode && c.paymentEntry === sItem.docEntry && c.paymentLineId === sItem.lineId
                                ))) {
                                    continue;
                                }
                                let item: bo.PurchaseInvoiceDownPayment = this.editData.purchaseInvoiceDownPayments.create();
                                item.baseDocument(sItem);
                                if (amount > sItem.amount) {
                                    item.drawnTotal = sItem.amount;
                                } else {
                                    item.drawnTotal = amount;
                                }
                                amount -= item.drawnTotal;
                            }
                        }
                        this.view.showPurchaseInvoiceDownPayments(this.editData.purchaseInvoiceDownPayments.filterDeleted());
                    }
                });
            }
            protected measuringMaterials(): void {
                let lines: ibas.ArrayList<materials.app.IMaterialMeasurementContractLine> = new ibas.ArrayList<materials.app.IMaterialMeasurementContractLine>();
                for (let item of this.editData.purchaseInvoiceItems) {
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
            protected choosePurchaseInvoiceItemMaterialCatalog(caller: bo.PurchaseInvoiceItem, filterConditions?: ibas.ICondition[]): void {
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
                        let count: number = this.editData.purchaseInvoiceItems.length;
                        for (let selected of selecteds) {
                            if (ibas.strings.isEmpty(selected.itemCode)) {
                                continue;
                            }
                            if (ibas.objects.isNull(caller)) {
                                caller = this.editData.purchaseInvoiceItems.create();
                            }
                            caller.catalogCode = selected.catalogCode;
                            condition = new ibas.Condition();
                            condition.alias = materials.bo.Material.PROPERTY_CODE_NAME;
                            condition.value = selected.itemCode;
                            this.choosePurchaseInvoiceItemMaterial(caller, [condition]);
                            caller = null;
                        }
                        if (this.editData.purchaseInvoiceItems.length > count) {
                            this.view.showPurchaseInvoiceItems(this.editData.purchaseInvoiceItems.filterDeleted());
                        }
                    }
                });
            }
            protected viewHistoricalPrices(caller: bo.PurchaseInvoiceItem): void {
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
                        applyPrice: (type, price, currency) => {
                            if (type === "PRICE") {
                                caller.price = 0;
                                caller.price = price;
                                caller.currency = currency;
                            } else if (type === "PRETAXPRICE") {
                                caller.preTaxPrice = 0;
                                caller.preTaxPrice = price;
                                caller.currency = currency;
                            } else if (type === "UNITPRICE") {
                                caller.unitPrice = 0;
                                caller.unitPrice = price;
                                caller.currency = currency;
                            }
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
        /** 视图-采购发票 */
        export interface IPurchaseInvoiceEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseInvoice(data: bo.PurchaseInvoice): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购发票-行事件 */
            addPurchaseInvoiceItemEvent: Function;
            /** 删除采购发票-行事件 */
            removePurchaseInvoiceItemEvent: Function;
            /** 显示数据 */
            showPurchaseInvoiceItems(datas: bo.PurchaseInvoiceItem[]): void;
            /** 选择采购发票客户事件 */
            choosePurchaseInvoiceSupplierEvent: Function;
            /** 选择采购发票联系人信息 */
            choosePurchaseInvoiceContactPersonEvent: Function;
            /** 选择采购发票价格清单事件 */
            choosePurchaseInvoicePriceListEvent: Function;
            /** 选择采购发票物料事件 */
            choosePurchaseInvoiceItemMaterialEvent: Function;
            /** 选择采购发票仓库事件 */
            choosePurchaseInvoiceItemWarehouseEvent: Function;
            /** 选择采购发票单位事件 */
            choosePurchaseInvoiceItemUnitEvent: Function;
            /** 选择采购发票单行物料批次事件 */
            choosePurchaseInvoiceItemMaterialBatchEvent: Function;
            /** 选择采购发票行物料序列事件 */
            choosePurchaseInvoiceItemMaterialSerialEvent: Function;
            /** 选择采购发票-采购订单事件 */
            choosePurchaseInvoicePurchaseOrderEvent: Function;
            /** 选择采购发票-采购交货事件 */
            choosePurchaseInvoicePurchaseDeliveryEvent: Function;
            /** 选择采购发票-一揽子协议事件 */
            choosePurchaseInvoiceBlanketAgreementEvent: Function;
            /** 选择采购发票-行成本中心事件 */
            choosePurchaseInvoiceItemDistributionRuleEvent: Function;
            /** 选择采购发票-行 物料版本 */
            choosePurchaseInvoiceItemMaterialVersionEvent: Function;
            /** 选择一业务伙伴目录事件 */
            choosePurchaseInvoiceItemMaterialCatalogEvent: Function;
            /** 选择供应商合同 */
            chooseSupplierAgreementsEvent: Function;
            /** 采购发票收款事件 */
            receiptPurchaseInvoiceEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为采购交货事件 */
            turnToPurchaseCreditNoteEvent: Function;
            /** 添加采购发票-预付款事件 */
            addPurchaseInvoiceDownPaymentEvent: Function;
            /** 删除采购发票-预付款事件 */
            removePurchaseInvoiceDownPaymentEvent: Function;
            /** 显示数据-采购发票-预付款 */
            showPurchaseInvoiceDownPayments(datas: bo.PurchaseInvoiceDownPayment[]): void;
            /** 测量物料事件 */
            measuringMaterialsEvent: Function;
            /** 查看物料历史价格事件 */
            viewHistoricalPricesEvent: Function;
            /** 选择付款条款事件 */
            choosePaymentTermEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 采购发票编辑服务映射 */
        export class PurchaseInvoiceEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseInvoiceEditApp.APPLICATION_ID;
                this.name = PurchaseInvoiceEditApp.APPLICATION_NAME;
                this.boCode = PurchaseInvoiceEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.PurchaseInvoice>> {
                return new PurchaseInvoiceEditApp();
            }
        }
    }
}