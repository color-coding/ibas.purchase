/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 列表应用-采购退货请求 */
        export class PurchaseReturnRequestListApp extends ibas.BOListApplication<IPurchaseReturnRequestListView, bo.PurchaseReturnRequest> {
            /** 应用标识 */
            static APPLICATION_ID: string = "d13c2957-5113-4a62-827a-ed94ddde52c8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasereturnrequest_list";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseReturnRequest.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestListApp.APPLICATION_ID;
                this.name = PurchaseReturnRequestListApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnRequestListApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
                this.view.deleteDataEvent = this.deleteData;
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
                boRepository.fetchPurchaseReturnRequest({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturnRequest>): void {
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
                let app: PurchaseReturnRequestEditApp = new PurchaseReturnRequestEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.PurchaseReturnRequest): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let app: PurchaseReturnRequestViewApp = new PurchaseReturnRequestViewApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);

            }
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseReturnRequest): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_edit")
                    ));
                    return;
                }
                let app: PurchaseReturnRequestEditApp = new PurchaseReturnRequestEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);
            }
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseReturnRequest | bo.PurchaseReturnRequest[]): void {
                let beDeleteds: ibas.IList<bo.PurchaseReturnRequest> = ibas.arrays.create(data);
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
                            boRepository.savePurchaseReturnRequest({
                                beSaved: data,
                                onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturnRequest>): void {
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
        }
        /** 视图-采购退货请求 */
        export interface IPurchaseReturnRequestListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseReturnRequest[]): void;
        }
    }
}