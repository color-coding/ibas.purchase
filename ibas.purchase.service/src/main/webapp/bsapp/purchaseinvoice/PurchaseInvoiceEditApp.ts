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
                this.view.choosePurchaseInvoicePurchaseOrderEvent = this.choosePurchaseInvoicePurchaseOrder;
                this.view.choosePurchaseInvoicePurchaseDeliveryEvent = this.choosePurchaseInvoicePurchaseDelivery;
                this.view.choosePurchaseInvoiceBlanketAgreementEvent = this.choosePurchaseInvoiceBlanketAgreement;
                this.view.receiptPurchaseInvoiceEvent = this.receiptPurchaseInvoice;
                this.view.editShippingAddressesEvent = this.editShippingAddresses;
                this.view.turnToPurchaseCreditNoteEvent = this.turnToPurchaseCreditNote;
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
            private choosePurchaseInvoiceSupplier(): void {
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
                                this.choosePurchaseInvoiceSupplier();
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
                        that.editData.documentCurrency = selected.currency;
                        that.changePurchaseInvoiceItemPrice(that.editData.priceList);
                    }
                });
            }
            /** 更改行价格 */
            private changePurchaseInvoiceItemPrice(priceList: number | ibas.Criteria): void {
                if (typeof priceList === "number" && priceList > 0) {
                    let criteria: ibas.Criteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_PRICELIST;
                    condition.value = priceList.toString();
                    for (let item of this.editData.purchaseInvoiceItems) {
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
                        this.changePurchaseInvoiceItemPrice(criteria);
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
                                    this.changePurchaseInvoiceItemPrice(criteria);
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
                                this.editData.purchaseInvoiceItems.forEach((value) => {
                                    if (item.taxed === ibas.emYesNo.YES) {
                                        // 含税价格
                                        value.isLoading = true;
                                        value.discount = 1;
                                        value.unitPrice = 0;
                                        value.preTaxPrice = 0;
                                        value.price = 0;
                                        value.isLoading = false;
                                        // 税后价格
                                        value.price = item.price;
                                        value.currency = item.currency;
                                    } else {
                                        // 不含税价格
                                        value.isLoading = true;
                                        value.discount = 1;
                                        value.unitPrice = 0;
                                        value.preTaxPrice = 0;
                                        value.price = 0;
                                        value.isLoading = false;
                                        // 税前价格
                                        value.preTaxPrice = item.price;
                                        value.currency = item.currency;
                                    }
                                });
                            }
                            this.busy(false);
                        }
                    });
                }
            }
            /** 选择采购发票行物料事件 */
            private choosePurchaseInvoiceItemMaterial(caller: bo.PurchaseInvoiceItem): void {
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
                        let index: number = that.editData.purchaseInvoiceItems.indexOf(caller);
                        let item: bo.PurchaseInvoiceItem = that.editData.purchaseInvoiceItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
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
                            that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
                        }
                    }
                });
            }
            /** 选择采购发票行仓库事件 */
            private choosePurchaseInvoiceItemWarehouse(caller: bo.PurchaseInvoiceItem): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IWarehouse>({
                    boCode: materials.bo.BO_CODE_WAREHOUSE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.warehouse.create(),
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
            private addPurchaseInvoiceItem(items: bo.PurchaseInvoiceItem[]): void {
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
                            item.delete();
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
                        warehouse: item.warehouse,
                        quantity: item.quantity,
                        uom: item.uom,
                        materialBatches: item.materialBatches,
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
                        warehouse: item.warehouse,
                        quantity: item.quantity,
                        uom: item.uom,
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
                // 当前客户的
                condition = criteria.conditions.create();
                condition.alias = bo.PurchaseOrder.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = this.editData.supplierCode;
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
                // 当前客户的
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
                ibas.servicesManager.runApplicationService<businesspartner.app.IReceiptContract>({
                    proxy: new businesspartner.app.ReceiptServiceProxy({
                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                        businessPartnerCode: this.editData.supplierCode,
                        documentType: this.editData.objectCode,
                        documentEntry: this.editData.docEntry,
                        documentCurrency: this.editData.documentCurrency,
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
                if ((this.editData.approvalStatus !== ibas.emApprovalStatus.APPROVED && this.editData.approvalStatus !== ibas.emApprovalStatus.UNAFFECTED)
                    || this.editData.deleted === ibas.emYesNo.YES
                    || this.editData.canceled === ibas.emYesNo.YES
                    || this.editData.documentStatus === ibas.emDocumentStatus.PLANNED
                ) {
                    this.messages(ibas.emMessageType.ERROR, ibas.i18n.prop("purchase_invaild_status_not_support_turn_to_operation"));
                    return;
                }
                let target: bo.PurchaseCreditNote = new bo.PurchaseCreditNote();
                target.supplierCode = this.editData.supplierCode;
                target.supplierName = this.editData.supplierName;
                target.baseDocument(this.editData);

                let app: PurchaseCreditNoteEditApp = new PurchaseCreditNoteEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(target);

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
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = bo.BlanketAgreement.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = this.editData.supplierCode;
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
                                            item.uom = baItem.uom;
                                            for (let mmItem of opRsltPRD.resultObjects.where(c => ibas.strings.equalsIgnoreCase(c.code, item.itemCode))) {
                                                item.baseProduct(mmItem);
                                            }
                                            item.quantity = baItem.quantity - baItem.closedQuantity;
                                            if (selected.priceMode === bo.emPriceMode.NET) {
                                                item.unitPrice = baItem.price;
                                            } else if (selected.priceMode === bo.emPriceMode.GROSS) {
                                                item.price = baItem.price;
                                            }
                                            item.reference1 = baItem.reference1;
                                            item.reference2 = baItem.reference2;
                                        }
                                    }
                                    that.view.showPurchaseInvoiceItems(that.editData.purchaseInvoiceItems.filterDeleted());
                                }
                            });
                        }
                    }
                });
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
            /** 采购发票收款事件 */
            receiptPurchaseInvoiceEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为采购交货事件 */
            turnToPurchaseCreditNoteEvent: Function;
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