/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 编辑应用-一揽子协议 */
        export class BlanketAgreementEditApp extends ibas.BOEditService<IBlanketAgreementEditView, bo.BlanketAgreement> {
            /** 应用标识 */
            static APPLICATION_ID: string = "41d8e88c-4b51-4a7f-8fc2-70fc257d336a";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_blanketagreement_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BlanketAgreement.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BlanketAgreementEditApp.APPLICATION_ID;
                this.name = BlanketAgreementEditApp.APPLICATION_NAME;
                this.boCode = BlanketAgreementEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addBlanketAgreementItemEvent = this.addBlanketAgreementItem;
                this.view.removeBlanketAgreementItemEvent = this.removeBlanketAgreementItem;
                this.view.chooseBlanketAgreementContactPersonEvent = this.chooseBlanketAgreementContactPerson;
                this.view.chooseBlanketAgreementSupplierEvent = this.chooseBlanketAgreementSupplier;
                this.view.chooseBlanketAgreementItemMaterialEvent = this.chooseBlanketAgreementItemMaterial;
                this.view.chooseBlanketAgreementItemUnitEvent = this.chooseBlanketAgreementItemUnit;
                this.view.chooseSupplierAgreementsEvent = this.chooseSupplierAgreements;
                this.view.measuringMaterialsEvent = this.measuringMaterials;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.BlanketAgreement();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showBlanketAgreement(this.editData);
                this.view.showBlanketAgreementItems(this.editData.blanketAgreementItems.filterDeleted());
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
                                this.supplier = supplier;
                                if (!ibas.strings.isEmpty(supplier.taxGroup)) {
                                    this.view.defaultTaxGroup = supplier.taxGroup;
                                }
                            }
                        }
                    });
                }
            }
            run(): void;
            run(data: bo.BlanketAgreement): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.BlanketAgreement)) {
                    let data: bo.BlanketAgreement = arguments[0];
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
                        boRepository.fetchBlanketAgreement({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.BlanketAgreement>): void {
                                let data: bo.BlanketAgreement;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.BlanketAgreement)) {
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
                boRepository.saveBlanketAgreement({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BlanketAgreement>): void {
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
                        that.editData = new bo.BlanketAgreement();
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
            /** 添加一揽子协议-项目事件 */
            protected addBlanketAgreementItem(): void {
                if (this.editData.agreementMethod === bo.emAgreementMethod.ITEM) {
                    this.chooseBlanketAgreementItemMaterial(null);
                } else {
                    let item: bo.IBlanketAgreementItem = this.editData.blanketAgreementItems.create();
                    if (!ibas.objects.isNull(this.supplier)) {
                        item.currency = this.supplier.currency;
                    }
                    // 仅显示没有标记删除的
                    this.view.showBlanketAgreementItems(this.editData.blanketAgreementItems.filterDeleted());
                }
            }
            /** 删除一揽子协议-项目事件 */
            protected removeBlanketAgreementItem(items: bo.BlanketAgreementItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.blanketAgreementItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.blanketAgreementItems.remove(item);
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
                this.view.showBlanketAgreementItems(this.editData.blanketAgreementItems.filterDeleted());
            }
            private supplier: businesspartner.bo.Supplier;
            /** 选择一揽子协议供应商事件 */
            private chooseBlanketAgreementSupplier(filterConditions?: ibas.ICondition[]): void {
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
                ibas.servicesManager.runChooseService<businesspartner.bo.Supplier>({
                    boCode: businesspartner.bo.BO_CODE_SUPPLIER,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.Supplier>): void {
                        let selected: businesspartner.bo.Supplier = selecteds.firstOrDefault();
                        that.editData.supplierCode = selected.code;
                        that.editData.supplierName = selected.name;
                        that.editData.contactPerson = selected.contactPerson;
                        that.editData.paymentCode = selected.paymentCode;
                        if (!ibas.strings.isEmpty(selected.taxGroup)) {
                            that.view.defaultTaxGroup = selected.taxGroup;
                        }
                        that.supplier = selected;
                    }
                });
            }
            /** 选择联系人 */
            private chooseBlanketAgreementContactPerson(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_blanketagreement_suppliercode")
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
            /** 选择一揽子协议物料事件 */
            private chooseBlanketAgreementItemMaterial(caller: bo.BlanketAgreementItem, filterConditions?: ibas.ICondition[]): void {
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
                        let index: number = that.editData.blanketAgreementItems.indexOf(caller);
                        let item: bo.BlanketAgreementItem = that.editData.blanketAgreementItems[index];
                        // 选择返回数量多余触发数量时,自动创建新的项目
                        let created: boolean = false;
                        for (let selected of selecteds) {
                            if (ibas.objects.isNull(item)) {
                                item = that.editData.blanketAgreementItems.create();
                                created = true;
                            }
                            item.itemCode = selected.code;
                            item.itemDescription = selected.name;
                            item.itemSign = selected.sign;
                            item.uom = selected.purchaseUOM;
                            if (ibas.strings.isEmpty(item.uom)) {
                                item.uom = selected.inventoryUOM;
                            }
                            if (!ibas.strings.isEmpty(that.view.defaultTaxGroup)) {
                                item.tax = that.view.defaultTaxGroup;
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
                            }
                            if (!ibas.objects.isNull(that.supplier)) {
                                item.currency = that.supplier.currency;
                            }
                            item = null;
                        }
                        if (created) {
                            // 创建了新的行项目
                            that.view.showBlanketAgreementItems(that.editData.blanketAgreementItems.filterDeleted());
                        }
                    }
                });
            }
            private chooseBlanketAgreementItemUnit(caller: bo.BlanketAgreementItem, filterConditions?: ibas.ICondition[]): void {
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
                ibas.servicesManager.runChooseService<materials.bo.IUnit>({
                    boCode: materials.bo.BO_CODE_UNIT,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: conditions,
                    onCompleted(selecteds: ibas.IList<materials.bo.IUnit>): void {
                        for (let selected of selecteds) {
                            caller.uom = selected.name;
                        }
                    }
                });
            }
            private chooseSupplierAgreements(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.supplierCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_blanketagreement_suppliercode")
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
            protected measuringMaterials(): void {
                let lines: ibas.ArrayList<materials.app.IMaterialMeasurementContractLine> = new ibas.ArrayList<materials.app.IMaterialMeasurementContractLine>();
                for (let item of this.editData.blanketAgreementItems) {
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
        }
        /** 视图-一揽子协议 */
        export interface IBlanketAgreementEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBlanketAgreement(data: bo.BlanketAgreement): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加一揽子协议-项目事件 */
            addBlanketAgreementItemEvent: Function;
            /** 删除一揽子协议-项目事件 */
            removeBlanketAgreementItemEvent: Function;
            /** 显示数据-一揽子协议-项目 */
            showBlanketAgreementItems(datas: bo.BlanketAgreementItem[]): void;
            /** 选择一揽子协议供应商事件 */
            chooseBlanketAgreementSupplierEvent: Function;
            /** 选择一揽子协议联系人信息 */
            chooseBlanketAgreementContactPersonEvent: Function;
            /** 选择一揽子协议行物料事件 */
            chooseBlanketAgreementItemMaterialEvent: Function;
            /** 选择一揽子协议行单位事件 */
            chooseBlanketAgreementItemUnitEvent: Function;
            /** 选择供应商合同 */
            chooseSupplierAgreementsEvent: Function;
            /** 测量物料 */
            measuringMaterialsEvent: Function;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 一揽子协议辑服务映射 */
        export class BlanketAgreementEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = BlanketAgreementEditApp.APPLICATION_ID;
                this.name = BlanketAgreementEditApp.APPLICATION_NAME;
                this.boCode = BlanketAgreementEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.BlanketAgreement>> {
                return new BlanketAgreementEditApp();
            }
        }
    }
}
