/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export namespace conditions {
            export namespace customer {
                export function create(): ibas.ICondition[] {
                    let condition: ibas.ICondition;
                    let conditions: ibas.ICondition[] = new ibas.ArrayList<ibas.ICondition>();
                    // 未删除的
                    condition = new ibas.Condition();
                    condition.alias = businesspartner.bo.Customer.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.push(condition);
                    // 激活的
                    condition = new ibas.Condition();
                    condition.alias = businesspartner.bo.Customer.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.push(condition);

                    return conditions;
                }
            }
            export namespace salesorder {
                export function create(branch?: string): ibas.ICondition[] {
                    let condition: ibas.ICondition;
                    let conditions: ibas.ICondition[] = new ibas.ArrayList<ibas.ICondition>();
                    // 未取消的
                    condition = new ibas.Condition();
                    condition.alias = sales.bo.SalesOrder.PROPERTY_CANCELED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.push(condition);
                    // 未删除的
                    condition = new ibas.Condition();
                    condition.alias = sales.bo.SalesOrder.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.push(condition);
                    // 仅下达的
                    condition = new ibas.Condition();
                    condition.alias = sales.bo.SalesOrder.PROPERTY_DOCUMENTSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emDocumentStatus.RELEASED.toString();
                    conditions.push(condition);
                    // 审批通过的或未进审批
                    condition = new ibas.Condition();
                    condition.alias = sales.bo.SalesOrder.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.APPROVED.toString();
                    condition.bracketOpen = 1;
                    conditions.push(condition);
                    condition = new ibas.Condition();
                    condition.alias = sales.bo.SalesOrder.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                    conditions.push(condition);
                    // 是否指定分支
                    if (!ibas.strings.isEmpty(branch)) {
                        condition = new ibas.Condition();
                        condition.alias = sales.bo.SalesOrder.PROPERTY_BRANCH_NAME;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = branch;
                        conditions.push(condition);
                    } else {
                        condition = new ibas.Condition();
                        condition.alias = sales.bo.SalesOrder.PROPERTY_BRANCH_NAME;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = "";
                        condition.bracketOpen = 1;
                        conditions.push(condition);
                        condition = new ibas.Condition();
                        condition.alias = sales.bo.SalesOrder.PROPERTY_BRANCH_NAME;
                        condition.operation = ibas.emConditionOperation.IS_NULL;
                        condition.relationship = ibas.emConditionRelationship.OR;
                        condition.bracketClose = 1;
                        conditions.push(condition);
                    }
                    return conditions;
                }
            }
            export namespace material {
                /** 默认查询条件 */
                export function create(supplier?: string): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 激活的
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = materials.bo.Material.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 没删除
                    condition = new ibas.Condition();
                    condition.alias = materials.bo.Material.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.add(condition);
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = materials.bo.Material.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = materials.bo.Material.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = materials.bo.Material.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 失效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = materials.bo.Material.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = materials.bo.Material.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 3;
                    condition.alias = materials.bo.Material.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 首选供应商
                    if (!ibas.strings.isEmpty(supplier)) {
                        if (conditions.length > 1) {
                            conditions.firstOrDefault().bracketOpen += 1;
                            conditions.lastOrDefault().bracketClose += 1;
                        }
                        condition = new ibas.Condition();
                        condition.alias = materials.bo.Material.PROPERTY_PREFERREDVENDOR_NAME;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = supplier;
                        conditions.add(condition);
                    }
                    return conditions;
                }
            }
        }
        /** 应用-采购助手 */
        export class PurchasingAssistantApp extends ibas.Application<IPurchasingAssistantView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "307d2d67-d96a-464a-af07-11a208b4903c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasing_assistant";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchasingAssistantApp.APPLICATION_ID;
                this.name = PurchasingAssistantApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.fetchSalesOrderEvent = this.fetchSalesOrder;
                this.view.choosePurchaseOrderPriceListEvent = this.choosePurchaseOrderPriceList;
                this.view.choosePurchaseOrderSupplierEvent = this.choosePurchaseOrderSupplier;
                this.view.chooseSalesOrderItemEvent = this.chooseSalesOrderItem;
                this.view.editPurchaseOrderEvent = this.editPurchaseOrder;
                this.view.removePurchaseOrderItemEvent = this.removePurchaseOrderItem;
                this.view.savePurchaseOrderEvent = this.savePurchaseOrder;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                if (ibas.objects.isNull(this.purchaseOrder)) {
                    this.purchaseOrder = new bo.PurchaseOrder();
                    if (accounting.config.isEnableBranch()) {
                        this.purchaseOrder.branch = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_BRANCH);
                    }
                }
                this.view.showPurchaseOrder(this.purchaseOrder);
                this.view.showPurchaseOrderItems(this.purchaseOrder.purchaseOrderItems.filterDeleted());
            }
            run(): void {
                this.show();
            }
            private fetchSalesOrder(criteria: ibas.ICriteria): void {
                if (!(criteria instanceof ibas.Criteria)) {
                    criteria = new ibas.Criteria();
                }
                if (criteria.conditions.length > 1) {
                    criteria.conditions.firstOrDefault().bracketOpen += 1;
                    criteria.conditions.lastOrDefault().bracketClose += 1;
                }
                criteria.conditions.add(conditions.salesorder.create(this.purchaseOrder.branch));
                this.busy(true);
                let boRepository: sales.bo.BORepositorySales = new sales.bo.BORepositorySales();
                boRepository.fetchSalesOrder({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            this.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            this.view.showSalesOrders(opRslt.resultObjects);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
            private purchaseOrder: bo.PurchaseOrder;
            private choosePurchaseOrderSupplier(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<businesspartner.bo.ISupplier>({
                    boCode: businesspartner.bo.BO_CODE_SUPPLIER,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: businesspartner.app.conditions.supplier.create(),
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.ISupplier>): void {
                        let selected: businesspartner.bo.ISupplier = selecteds.firstOrDefault();
                        that.purchaseOrder.supplierCode = selected.code;
                        that.purchaseOrder.supplierName = selected.name;
                        that.purchaseOrder.priceList = selected.priceList;
                        that.purchaseOrder.contactPerson = selected.contactPerson;
                        that.purchaseOrder.documentCurrency = selected.currency;
                        if (!ibas.strings.isEmpty(selected.warehouse)) {
                            that.view.defaultWarehouse = selected.warehouse;
                        }
                        if (!ibas.strings.isEmpty(selected.taxGroup)) {
                            that.view.defaultTaxGroup = selected.taxGroup;
                        }
                        // 供应商改变，清除旧地址
                        that.purchaseOrder.shippingAddresss.clear();
                        that.changePurchaseOrderItemPrice(that.purchaseOrder.priceList, that.purchaseOrder.purchaseOrderItems);
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
                        that.purchaseOrder.priceList = selected.objectKey;
                        that.purchaseOrder.documentCurrency = selected.currency;
                        that.changePurchaseOrderItemPrice(that.purchaseOrder.priceList, that.purchaseOrder.purchaseOrderItems);
                    }
                });
            }
            /** 更改行价格 */
            private changePurchaseOrderItemPrice(priceList: number | ibas.Criteria, orderItems: ibas.IList<bo.PurchaseOrderItem>): void {
                if (typeof priceList === "number" && priceList > 0) {
                    let criteria: ibas.Criteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = materials.app.conditions.materialprice.CONDITION_ALIAS_PRICELIST;
                    condition.value = priceList.toString();
                    for (let item of orderItems) {
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
                        this.changePurchaseOrderItemPrice(criteria, orderItems);
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
                                    this.changePurchaseOrderItemPrice(criteria, orderItems);
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
                                orderItems.forEach((value) => {
                                    if (value.itemCode === item.itemCode) {
                                        if (item.taxed === ibas.emYesNo.YES) {
                                            value.unitPrice = 0;
                                            value.price = item.price;
                                            value.currency = item.currency;
                                        } else {
                                            value.unitPrice = 0;
                                            value.preTaxPrice = item.price;
                                            value.currency = item.currency;
                                        }
                                        if (!ibas.strings.isEmpty(value.tax)) {
                                            accounting.taxrate.assign(value.tax, (rate) => {
                                                if (rate >= 0) {
                                                    value.taxRate = rate;
                                                    value.unitPrice = 0;
                                                    if (item.taxed === ibas.emYesNo.NO) {
                                                        value.preTaxPrice = item.price;
                                                    } else {
                                                        value.price = item.price;
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                            this.busy(false);
                        }
                    });
                }
            }
            /** 选择销售订单行事件 */
            private chooseSalesOrderItem(orderItem: sales.bo.SalesOrderItem[] | sales.bo.SalesOrderItem, merge: boolean): void {
                let orderItems: ibas.IList<sales.bo.SalesOrderItem> = ibas.arrays.create(orderItem);
                if (orderItems.length === 0) {
                    return;
                }
                let purchaseItems: ibas.IList<bo.PurchaseOrderItem> = new ibas.ArrayList<bo.PurchaseOrderItem>();
                let purchaseItem: bo.PurchaseOrderItem = null;
                for (let item of orderItems) {
                    if (item.orderedQuantity >= item.quantity) {
                        continue;
                    }
                    if (merge === true) {
                        purchaseItem = this.purchaseOrder.purchaseOrderItems.firstOrDefault(c => ibas.strings.equals(c.itemCode, item.itemCode));
                    } else {
                        purchaseItem = this.purchaseOrder.purchaseOrderItems.firstOrDefault(
                            c => ibas.strings.equals(c.baseDocumentType, item.objectCode)
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId
                        );
                    }
                    if (ibas.objects.isNull(purchaseItem)) {
                        purchaseItem = this.purchaseOrder.purchaseOrderItems.create();
                        purchaseItem.itemCode = item.itemCode;
                        purchaseItem.itemDescription = item.itemDescription;
                        purchaseItem.tax = this.view.defaultTaxGroup;
                        if (merge !== true) {
                            purchaseItem.baseDocumentType = item.objectCode;
                            purchaseItem.baseDocumentEntry = item.docEntry;
                            purchaseItem.baseDocumentLineId = item.lineId;
                            purchaseItem.originalDocumentType = item.baseDocumentType;
                            purchaseItem.originalDocumentEntry = item.baseDocumentEntry;
                            purchaseItem.originalDocumentLineId = item.baseDocumentLineId;
                        }
                        purchaseItem.batchManagement = item.batchManagement;
                        purchaseItem.serialManagement = item.serialManagement;
                        purchaseItem.reference1 = item.reference1;
                        purchaseItem.reference2 = item.reference2;
                        if (!ibas.strings.isEmpty(item.agreements)) {
                            purchaseItem.agreements = ibas.strings.isEmpty(purchaseItem.agreements) ? "" : purchaseItem.agreements + ","
                                + item.agreements;
                        }
                        purchaseItems.add(purchaseItem);
                    }
                    // 统一到库存单位
                    purchaseItem.quantity = purchaseItem.quantity > 0 ?
                        purchaseItem.quantity + (item.inventoryQuantity - item.orderedQuantity) : (item.inventoryQuantity - item.orderedQuantity);
                    purchaseItem.uom = item.inventoryUOM;
                    purchaseItem.inventoryUOM = item.inventoryUOM;
                    purchaseItem.uomRate = 1;
                    purchaseItem.warehouse = item.warehouse;
                    if (ibas.strings.isEmpty(purchaseItem.warehouse)) {
                        purchaseItem.warehouse = this.view.defaultWarehouse;
                    }
                    item.orderedQuantity += purchaseItem.quantity;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                for (let item of orderItems) {
                    if (!ibas.strings.isEmpty(item.tax)) {
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = materials.bo.Material.PROPERTY_CODE_NAME;
                        condition.value = item.itemCode;
                        if (criteria.conditions.length > 0) {
                            condition.relationship = ibas.emConditionRelationship.OR;
                        }
                    }
                }
                if (criteria.conditions.length > 0) {
                    let boRepository: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                    boRepository.fetchMaterial({
                        criteria: criteria,
                        onCompleted: (opRslt) => {
                            for (let item of opRslt.resultObjects) {
                                if (!ibas.strings.isEmpty(item.purchaseTaxGroup)) {
                                    purchaseItems.forEach((c) => {
                                        if (ibas.strings.isEmpty(c.tax) && ibas.strings.equalsIgnoreCase(c.itemCode, item.code)) {
                                            c.tax = item.purchaseTaxGroup;
                                        }
                                    });
                                }
                            }
                            if (this.purchaseOrder.priceList > 0 && purchaseItems.length > 0) {
                                this.changePurchaseOrderItemPrice(this.purchaseOrder.priceList, purchaseItems);
                            }
                            this.view.showPurchaseOrderItems(this.purchaseOrder.purchaseOrderItems.filterDeleted());
                        }
                    });
                } else {
                    if (this.purchaseOrder.priceList > 0 && purchaseItems.length > 0) {
                        this.changePurchaseOrderItemPrice(this.purchaseOrder.priceList, purchaseItems);
                    }
                    this.view.showPurchaseOrderItems(this.purchaseOrder.purchaseOrderItems.filterDeleted());
                }
            }
            /** 编辑采购订单 */
            private editPurchaseOrder(data?: bo.PurchaseOrder): void {
                if (ibas.objects.isNull(data)) {
                    data = this.purchaseOrder;
                }
                let app: PurchaseOrderEditApp = new PurchaseOrderEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);
            }
            /** 删除-行事件 */
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
                    if (this.purchaseOrder.purchaseOrderItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.purchaseOrder.purchaseOrderItems.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showPurchaseOrderItems(this.purchaseOrder.purchaseOrderItems.filterDeleted());
            }
            /** 保存采购订单 */
            protected savePurchaseOrder(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.savePurchaseOrder({
                    beSaved: this.purchaseOrder,
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
                                that.purchaseOrder = undefined;
                            } else {
                                // 替换编辑对象
                                that.purchaseOrder = opRslt.resultObjects.firstOrDefault();
                                that.view.addPurchaseOrderEditLink(that.purchaseOrder);
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("purchase_assistant_order_saved", that.purchaseOrder.docEntry));
                                that.purchaseOrder = undefined;
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
        }
        /** 视图-采购助手 */
        export interface IPurchasingAssistantView extends ibas.IView {
            /** 查询销售订单 */
            fetchSalesOrderEvent: Function;
            /** 显示销售订单 */
            showSalesOrders(datas: sales.bo.SalesOrder[]): void;
            /** 选择采购订单供应商信息 */
            choosePurchaseOrderSupplierEvent: Function;
            /** 选择采购订单价格清单信息 */
            choosePurchaseOrderPriceListEvent: Function;
            /** 显示采购订单 */
            showPurchaseOrder(data: bo.PurchaseOrder): void;
            /** 编辑采购订单 */
            editPurchaseOrderEvent: Function;
            /** 显示采购订单 */
            showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void;
            /** 选择销售订单行事件 */
            chooseSalesOrderItemEvent: Function;
            /** 删除采购订单-行事件 */
            removePurchaseOrderItemEvent: Function;
            /** 保存采购订单 */
            savePurchaseOrderEvent: Function;
            /** 添加采购订单编辑链接 */
            addPurchaseOrderEditLink(data: bo.PurchaseOrder): void;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
    }
}