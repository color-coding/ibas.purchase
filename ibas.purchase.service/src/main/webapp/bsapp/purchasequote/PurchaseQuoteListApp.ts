/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 列表应用-采购订单 */
        export class PurchaseQuoteListApp extends ibas.BOListApplication<IPurchaseQuoteListView, bo.PurchaseQuote> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c81456fe-cf99-4bda-891a-44a3d78edf8f";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasequote_list";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseQuote.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteListApp.APPLICATION_ID;
                this.name = PurchaseQuoteListApp.APPLICATION_NAME;
                this.boCode = PurchaseQuoteListApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
                this.view.deleteDataEvent = this.deleteData;
                this.view.changeDocumentStatusEvent = this.changeDocumentStatus;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                if (!ibas.objects.isNull(criteria)) {
                    // 默认不查询子项，有条件则查
                    criteria.noChilds = true;
                    if (criteria.childCriterias.length > 0) {
                        criteria.noChilds = false;
                    }
                }
                let that: this = this;
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseQuote({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseQuote>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            that.view.showData(opRslt.resultObjects);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建数据 */
            protected newData(): void {
                let app: PurchaseQuoteEditApp = new PurchaseQuoteEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.PurchaseQuote): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let app: PurchaseQuoteViewApp = new PurchaseQuoteViewApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);

            }
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseQuote): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_edit")
                    ));
                    return;
                }
                let app: PurchaseQuoteEditApp = new PurchaseQuoteEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);
            }
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseQuote | bo.PurchaseQuote[]): void {
                let beDeleteds: ibas.IList<bo.PurchaseQuote> = ibas.arrays.create(data);
                // 没有选择删除的对象
                if (beDeleteds.length === 0) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_delete")
                    ));
                    return;
                }
                // 标记删除对象
                beDeleteds.forEach((value) => {
                    if (value.referenced === ibas.emYesNo.YES) {
                        this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", value.toString()));
                    } else {
                        value.delete();
                    }
                });
                beDeleteds = ibas.arrays.create(beDeleteds.where(c => c.isDeleted === true));
                if (beDeleteds.length === 0) {
                    return;
                }
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_multiple_data_delete_continue", beDeleteds.length),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                        ibas.queues.execute(beDeleteds, (data, next) => {
                            // 处理数据
                            boRepository.savePurchaseQuote({
                                beSaved: data,
                                onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseQuote>): void {
                                    if (opRslt.resultCode !== 0) {
                                        next(new Error(ibas.i18n.prop("shell_data_delete_error", data, opRslt.message)));
                                    } else {
                                        next();
                                    }
                                }
                            });
                            that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_deleting", data));
                        }, (error) => {
                            // 处理完成
                            if (error instanceof Error) {
                                that.messages(ibas.emMessageType.ERROR, error.message);
                            } else {
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                            }
                            that.busy(false);
                        });
                        that.busy(true);
                    }
                });
            }
            private changeDocumentStatus(status: ibas.emDocumentStatus, datas: bo.PurchaseQuote[]): void {
                if (!(datas?.length > 0)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_batch")
                    )); return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                for (let item of datas) {
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.PurchaseQuote.PROPERTY_DOCENTRY_NAME;
                    condition.value = item.docEntry.toString();
                    if (criteria.conditions.length > 0) {
                        condition.relationship = ibas.emConditionRelationship.OR;
                    }
                }
                this.busy(true);
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseQuote({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.messages({
                                type: ibas.emMessageType.QUESTION,
                                title: ibas.i18n.prop(this.name),
                                message: ibas.i18n.prop("purchase_multiple_order_status_change_to", opRslt.resultObjects.length, ibas.enums.describe(ibas.emDocumentStatus, status)),
                                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                                onCompleted: (action) => {
                                    if (action !== ibas.emMessageAction.YES) {
                                        this.busy(false);
                                        return;
                                    }
                                    ibas.queues.execute(opRslt.resultObjects,
                                        (data, next) => {
                                            data.documentStatus = status;
                                            if (data.isDirty === true) {
                                                boRepository.savePurchaseQuote({
                                                    beSaved: data,
                                                    onCompleted: (opRslt) => {
                                                        if (opRslt.resultCode !== 0) {
                                                            next(new Error(opRslt.message));
                                                        } else {
                                                            this.proceeding(ibas.emMessageType.SUCCESS,
                                                                ibas.i18n.prop("purchase_order_status_change_to",
                                                                    data.docEntry, ibas.enums.describe(ibas.emDocumentStatus, data.documentStatus)
                                                                )
                                                            );
                                                            let oData: bo.PurchaseQuote = datas.find(c => !ibas.objects.isNull(c) && c.docEntry === data.docEntry);
                                                            if (!ibas.objects.isNull(oData)) {
                                                                oData.documentStatus = data.documentStatus;
                                                            }
                                                            next();
                                                        }
                                                    }
                                                });
                                            } else {
                                                next();
                                            }
                                        },
                                        (error) => {
                                            this.busy(false);
                                            if (error instanceof Error) {
                                                this.messages(error);
                                            } else {
                                                this.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("shell_sucessful"));
                                            }
                                        }
                                    );
                                }
                            });
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
        }
        /** 视图-采购订单 */
        export interface IPurchaseQuoteListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseQuote[]): void;
            /** 改变订单状态 */
            changeDocumentStatusEvent: Function;
        }
    }
}