/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 查看应用-采购预留发票 */
        export class PurchaseReserveInvoiceViewApp extends ibas.BOViewService<IPurchaseReserveInvoiceViewView, bo.PurchaseReserveInvoice> {

            /** 应用标识 */
            static APPLICATION_ID: string = "4741a003-7452-487c-8f2a-09df10942a6a";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasereserveinvoice_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseReserveInvoice.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReserveInvoiceViewApp.APPLICATION_ID;
                this.name = PurchaseReserveInvoiceViewApp.APPLICATION_NAME;
                this.boCode = PurchaseReserveInvoiceViewApp.BUSINESS_OBJECT_CODE;
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
                    this.viewData = new bo.PurchaseReserveInvoice();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseReserveInvoice(this.viewData);
                this.view.showPurchaseReserveInvoiceItems(this.viewData.purchaseReserveInvoiceItems.filterDeleted());
                this.view.showShippingAddresses(this.viewData.shippingAddresss.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: PurchaseReserveInvoiceEditApp = new PurchaseReserveInvoiceEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseReserveInvoice): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseReserveInvoice)) {
                    let data: bo.PurchaseReserveInvoice = arguments[0];
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
                        boRepository.fetchPurchaseReserveInvoice({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReserveInvoice>): void {
                                let data: bo.PurchaseReserveInvoice;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.PurchaseReserveInvoice)) {
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
                    condition.alias = bo.PurchaseReserveInvoice.PROPERTY_DOCENTRY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReserveInvoice({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReserveInvoice>): void {
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
        /** 视图-采购预留发票 */
        export interface IPurchaseReserveInvoiceViewView extends ibas.IBOViewView {
            showPurchaseReserveInvoice(viewData: bo.PurchaseReserveInvoice): void;
            showPurchaseReserveInvoiceItems(purchaseReserveInvoiceItem: bo.PurchaseReserveInvoiceItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 采购预留发票连接服务映射 */
        export class PurchaseReserveInvoiceLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReserveInvoiceViewApp.APPLICATION_ID;
                this.name = PurchaseReserveInvoiceViewApp.APPLICATION_NAME;
                this.boCode = PurchaseReserveInvoiceViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new PurchaseReserveInvoiceViewApp();
            }
        }
    }
}