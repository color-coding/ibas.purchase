/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 查看应用-预付款申请 */
        export class DownPaymentRequestViewApp extends ibas.BOViewService<IDownPaymentRequestViewView, bo.DownPaymentRequest> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c3bb981a-ca04-4396-a173-1265def8f091";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_downpaymentrequest_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.DownPaymentRequest.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = DownPaymentRequestViewApp.APPLICATION_ID;
                this.name = DownPaymentRequestViewApp.APPLICATION_NAME;
                this.boCode = DownPaymentRequestViewApp.BUSINESS_OBJECT_CODE;
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
                    this.viewData = new bo.DownPaymentRequest();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showDownPaymentRequest(this.viewData);
                this.view.showDownPaymentRequestItems(this.viewData.downPaymentRequestItems.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: DownPaymentRequestEditApp = new DownPaymentRequestEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.DownPaymentRequest): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.DownPaymentRequest)) {
                    let data: bo.DownPaymentRequest = arguments[0];
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
                        boRepository.fetchDownPaymentRequest({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.DownPaymentRequest>): void {
                                let data: bo.DownPaymentRequest;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.DownPaymentRequest)) {
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
                    condition.alias = bo.DownPaymentRequest.PROPERTY_DOCENTRY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchDownPaymentRequest({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.DownPaymentRequest>): void {
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
        /** 视图-预付款申请 */
        export interface IDownPaymentRequestViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showDownPaymentRequest(data: bo.DownPaymentRequest): void;
            /** 显示数据-预付款申请-行 */
            showDownPaymentRequestItems(datas: bo.DownPaymentRequestItem[]): void;
        }
        /** 预付款申请连接服务映射 */
        export class DownPaymentRequestLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = DownPaymentRequestViewApp.APPLICATION_ID;
                this.name = DownPaymentRequestViewApp.APPLICATION_NAME;
                this.boCode = DownPaymentRequestViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new DownPaymentRequestViewApp();
            }
        }
    }
}