/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 列表应用-采购报价项目-额外 */
        export class PurchaseQuoteItemExtraApp extends ibas.Application<IPurchaseQuoteItemExtraView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "86cff8c9-4582-41c6-83bf-34cea47c8835";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasequote_extra_list";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteItemExtraApp.APPLICATION_ID;
                this.name = PurchaseQuoteItemExtraApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.addPurchaseQuoteItemExtraEvent = this.addPurchaseQuoteItemExtra;
                this.view.removePurchaseQuoteItemExtraEvent = this.removePurchaseQuoteItemExtra;
                this.view.deletePurchaseQuoteItemExtraEvent = this.deletePurchaseQuoteItemExtra;
                this.view.viewPurchaseQuoteItemExtraEvent = this.viewPurchaseQuoteItemExtra;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                this.view.showData(this.editData);
                this.view.showExtraDatas(this.editData.purchaseQuoteItemExtras.filterDeleted());
            }
            run(): void;
            run(data: bo.PurchaseQuoteItem): void;
            run(): void {
                let data: bo.PurchaseQuoteItem = arguments[0];
                if (data instanceof bo.PurchaseQuoteItem) {
                    this.editData = data;
                    super.run();
                } else {
                    throw new Error(ibas.i18n.prop("sys_unrecognized_data"));
                }
            }
            private editData: bo.PurchaseQuoteItem;
            /** 添加采购报价-行事件 */
            private addPurchaseQuoteItemExtra(type: string | FormData): void {
                if (type === materials.bo.MaterialSpecification.BUSINESS_OBJECT_CODE) {
                    let that: this = this;
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        message: ibas.i18n.prop("purchase_create_continue", ibas.i18n.prop("bo_materialspecification")),
                        actions: [
                            ibas.emMessageAction.YES,
                            ibas.emMessageAction.NO
                        ],
                        /** 调用完成 */
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                ibas.servicesManager.runApplicationService<materials.app.ISpecificationTreeContract, materials.bo.MaterialSpecification>({
                                    proxy: new materials.app.SpecificationTreeServiceProxy({
                                        target: that.editData.itemCode,
                                    }),
                                    onCompleted(result: materials.bo.MaterialSpecification): void {
                                        let item: bo.PurchaseQuoteItemExtra = that.editData.purchaseQuoteItemExtras.create();
                                        item.extraType = result.objectCode;
                                        item.extraKey = result.objectKey;
                                        item.quantity = that.editData.quantity;
                                        that.view.showExtraDatas(that.editData.purchaseQuoteItemExtras.filterDeleted());
                                    }
                                });
                            } else {
                                ibas.servicesManager.runChooseService<materials.bo.IMaterialSpecification>({
                                    boCode: materials.bo.BO_CODE_MATERIALSPECIFICATION,
                                    criteria: [
                                        new ibas.Condition(materials.bo.MaterialSpecification.PROPERTY_OBJECTKEY_NAME, ibas.emConditionOperation.GRATER_THAN, "0"),
                                    ],
                                    onCompleted(selecteds: ibas.IList<materials.bo.IMaterialSpecification>): void {
                                        for (let selected of selecteds) {
                                            let item: bo.PurchaseQuoteItemExtra = that.editData.purchaseQuoteItemExtras.create();
                                            item.extraType = selected.objectCode;
                                            item.extraKey = selected.objectKey;
                                            item.quantity = that.editData.quantity;
                                        }
                                        that.view.showExtraDatas(that.editData.purchaseQuoteItemExtras.filterDeleted());
                                    }
                                });

                            }
                        }
                    });
                } else if (type instanceof FormData) {
                    let that: this = this;
                    let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                    boRepository.upload({
                        fileData: type,
                        onCompleted(opRslt: ibas.IOperationResult<ibas.FileData>): void {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                that.proceeding(ibas.emMessageType.INFORMATION,
                                    ibas.i18n.prop("shell_upload") + ibas.i18n.prop("shell_sucessful"));
                                let fileData: ibas.FileData = opRslt.resultObjects.firstOrDefault();
                                let item: bo.PurchaseQuoteItemExtra = that.editData.purchaseQuoteItemExtras.create();
                                item.extraType = EXTRA_ATTACHMENT;
                                item.extraKey = -1;
                                item.note = fileData.fileName;
                                item.quantity = 1;
                                that.view.showExtraDatas(that.editData.purchaseQuoteItemExtras.filterDeleted());
                            } catch (error) {
                                that.messages(error);
                            }
                        }
                    });
                } else {
                    this.editData.purchaseQuoteItemExtras.create();
                    // 仅显示没有标记删除的
                    this.view.showExtraDatas(this.editData.purchaseQuoteItemExtras.filterDeleted());
                }
            }
            /** 删除采购报价-行事件 */
            private removePurchaseQuoteItemExtra(items: bo.PurchaseQuoteItemExtra[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.purchaseQuoteItemExtras.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.purchaseQuoteItemExtras.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showExtraDatas(this.editData.purchaseQuoteItemExtras.filterDeleted());
            }
            private deletePurchaseQuoteItemExtra(data: bo.PurchaseQuoteItemExtra): void {
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_delete")
                    ));
                    return;
                }
                if (!ibas.objects.isNull(data.extraKey)) {
                    if (data.extraType === ibas.config.applyVariables(materials.bo.MaterialSpecification.BUSINESS_OBJECT_CODE)) {
                        this.busy(true);
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        criteria.result = 1;
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = materials.bo.MaterialSpecification.PROPERTY_OBJECTKEY_NAME;
                        condition.value = data.extraKey.toString();
                        let that: this = this;
                        let boRepository: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                        boRepository.fetchMaterialSpecification({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<materials.bo.MaterialSpecification>): void {
                                try {
                                    that.busy(false);
                                    if (opRslt.resultCode !== 0) {
                                        throw new Error(opRslt.message);
                                    }
                                    for (let item of opRslt.resultObjects) {
                                        that.messages({
                                            type: ibas.emMessageType.QUESTION,
                                            message: ibas.i18n.prop("purchase_delete_continue",
                                                ibas.i18n.prop("bo_materialspecification"), ibas.strings.isEmpty(item.name) ? item.objectKey : item.name),
                                            actions: [
                                                ibas.emMessageAction.YES,
                                                ibas.emMessageAction.NO
                                            ],
                                            /** 调用完成 */
                                            onCompleted(action: ibas.emMessageAction): void {
                                                if (action !== ibas.emMessageAction.YES) {
                                                    return;
                                                }
                                                item.delete();
                                                boRepository.saveMaterialSpecification({
                                                    beSaved: item,
                                                    onCompleted(opRslt: ibas.IOperationResult<materials.bo.MaterialSpecification>): void {
                                                        try {
                                                            that.busy(false);
                                                            if (opRslt.resultCode !== 0) {
                                                                throw new Error(opRslt.message);
                                                            }
                                                        } catch (error) {
                                                            that.proceeding(error);
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                } catch (error) {
                                    that.proceeding(error);
                                }
                            }
                        });
                    }
                }
                this.removePurchaseQuoteItemExtra([data]);
            }
            private viewPurchaseQuoteItemExtra(data: bo.PurchaseOrderItemExtra): void {
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                if (data.extraType === ibas.config.applyVariables(materials.bo.MaterialSpecification.BUSINESS_OBJECT_CODE)) {
                    ibas.servicesManager.runLinkService({
                        boCode: data.extraType,
                        linkValue: ibas.strings.valueOf(data.extraKey)
                    });
                } else if (data.extraType === EXTRA_ATTACHMENT) {
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = ibas.CRITERIA_CONDITION_ALIAS_FILE_NAME;
                    condition.value = data.note;
                    let that: this = this;
                    let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                    boRepository.download({
                        criteria: criteria,
                        onCompleted(opRslt: ibas.IOperationResult<Blob>): void {
                            try {
                                that.busy(false);
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                let data: Blob = opRslt.resultObjects.firstOrDefault();
                                if (!ibas.objects.isNull(data)) {
                                    ibas.files.save(data, ibas.strings.format("{0}_{1}_{2}_{3}",
                                        ibas.objects.nameOf(that.editData), that.editData.docEntry, that.editData.lineId, condition.value));
                                }
                            } catch (error) {
                                that.messages(error);
                            }
                        }
                    });
                } else {
                    throw new Error(ibas.i18n.prop("purchase_unrecognized_extra_information"));
                }
            }
        }
        /** 视图-采购报价项目-额外 */
        export interface IPurchaseQuoteItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.PurchaseQuoteItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.PurchaseQuoteItemExtra[]): void;
            /** 添加采购报价-行额外 事件 */
            addPurchaseQuoteItemExtraEvent: Function;
            /** 移出采购报价-行额外 事件 */
            removePurchaseQuoteItemExtraEvent: Function;
            /** 删除采购报价-行额外 事件 */
            deletePurchaseQuoteItemExtraEvent: Function;
            /** 查看采购报价-行额外 事件 */
            viewPurchaseQuoteItemExtraEvent: Function;
        }
    }
}