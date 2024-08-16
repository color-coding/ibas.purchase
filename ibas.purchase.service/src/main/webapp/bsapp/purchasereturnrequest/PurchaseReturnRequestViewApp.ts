/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 查看应用-采购退货请求 */
        export class PurchaseReturnRequestViewApp extends ibas.BOViewService<IPurchaseReturnRequestViewView, bo.PurchaseReturnRequest> {
            /** 应用标识 */
            static APPLICATION_ID: string = "e6ae3ad8-9687-44bf-a8c4-99da6313e3f7";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasereturnrequest_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseReturnRequest.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestViewApp.APPLICATION_ID;
                this.name = PurchaseReturnRequestViewApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnRequestViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.PurchaseReturnRequest();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseReturnRequest(this.viewData);
                this.view.showPurchaseReturnRequestItems(this.viewData.purchaseReturnRequestItems.filterDeleted());
                this.view.showShippingAddresses(this.viewData.shippingAddresss.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: PurchaseReturnRequestEditApp = new PurchaseReturnRequestEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
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
                        that.viewData = data;
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
                                    that.viewData = data;
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.PurchaseReturnRequest.PROPERTY_DOCENTRY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReturnRequest({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturnRequest>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                that.show();
                            } else {
                                that.viewShowed();
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
        }
        /** 视图-采购退货请求 */
        export interface IPurchaseReturnRequestViewView extends ibas.IBOViewView {
            showPurchaseReturnRequest(data: bo.PurchaseReturnRequest): void;
            showPurchaseReturnRequestItems(data: bo.PurchaseReturnRequestItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 采购退货请求连接服务映射 */
        export class PurchaseReturnRequestLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestViewApp.APPLICATION_ID;
                this.name = PurchaseReturnRequestViewApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnRequestViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new PurchaseReturnRequestViewApp();
            }
        }
    }
}