/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../borep/index.ts" />
/// <reference path="./purchasedelivery/index.ts" />
/// <reference path="./purchaseorder/index.ts" />
/// <reference path="./purchasereturn/index.ts" />
/// <reference path="./purchasequote/index.ts" />
/// <reference path="./purchaserequest/index.ts" />
/// <reference path="./purchaseinvoice/index.ts" />
/// <reference path="./purchasecreditnote/index.ts" />
/// <reference path="./shippingaddress/index.ts" />
/// <reference path="./blanketagreement/index.ts" />
/// <reference path="./downpaymentrequest/index.ts" />
/// <reference path="./others/index.ts" />
namespace purchase {
    export namespace app {
        /** 属性-导航 */
        const PROPERTY_NAVIGATION: symbol = Symbol("navigation");
        /** 附件信息-文档附件 */
        export const EXTRA_ATTACHMENT: string = "__ATTACHMENT__";
        /** 模块控制台 */
        export class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CONSOLE_ID;
                this.name = CONSOLE_NAME;
                this.version = CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation {
                return this[PROPERTY_NAVIGATION];
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new BlanketAgreementFunc());
                this.register(new PurchaseRequestFunc());
                this.register(new PurchaseQuoteFunc());
                this.register(new PurchaseOrderFunc());
                this.register(new PurchaseDeliveryFunc());
                this.register(new PurchaseReturnFunc());
                this.register(new PurchaseInvoiceFunc());
                this.register(new PurchaseCreditNoteFunc());
                this.register(new DownPaymentRequestFunc());
                this.register(new PurchasingAssistantFunc());
                // 注册服务应用
                this.register(new PurchaseDeliveryChooseServiceMapping());
                this.register(new PurchaseDeliveryLinkServiceMapping());
                this.register(new PurchaseDeliveryEditServiceMapping());
                this.register(new PurchaseOrderChooseServiceMapping());
                this.register(new PurchaseOrderLinkServiceMapping());
                this.register(new PurchaseOrderEditServiceMapping());
                this.register(new PurchaseQuoteChooseServiceMapping());
                this.register(new PurchaseQuoteLinkServiceMapping());
                this.register(new PurchaseQuoteEditServiceMapping());
                this.register(new PurchaseReturnChooseServiceMapping());
                this.register(new PurchaseReturnLinkServiceMapping());
                this.register(new PurchaseReturnEditServiceMapping());
                this.register(new PurchaseRequestChooseServiceMapping());
                this.register(new PurchaseRequestLinkServiceMapping());
                this.register(new PurchaseRequestEditServiceMapping());
                this.register(new PurchaseInvoiceChooseServiceMapping());
                this.register(new PurchaseInvoiceLinkServiceMapping());
                this.register(new PurchaseInvoiceEditServiceMapping());
                this.register(new PurchaseCreditNoteChooseServiceMapping());
                this.register(new PurchaseCreditNoteLinkServiceMapping());
                this.register(new PurchaseCreditNoteEditServiceMapping());
                this.register(new BlanketAgreementChooseServiceMapping());
                this.register(new BlanketAgreementLinkServiceMapping());
                this.register(new BlanketAgreementEditServiceMapping());
                this.register(new DownPaymentRequestChooseServiceMapping());
                this.register(new DownPaymentRequestLinkServiceMapping());
                // 注册常驻应用
                // 收付款服务
                // this.register(new PurchaseReturnReceiptServiceMapping()); 没这种情况
                this.register(new PurchaseCreditNoteReceiptServiceMapping());
                // this.register(new PurchaseDeliveryPaymentServiceMapping()); 没这种情况
                this.register(new PurchaseOrderPaymentServiceMapping());
                this.register(new PurchaseInvoicePaymentServiceMapping());
                this.register(new DownPaymentRequestPaymentServiceMapping());
                // 订购服务
                this.register(new MaterialOrderedReservationSourcePurchaseOrderServiceMapping());
                this.register(new MaterialOrderedReservationSourcePurchaseRequestServiceMapping());
                // 权限元素
                this.register(ELEMENT_PURCHASE_ORDER_EXTRA);
                this.register(ELEMENT_PURCHASE_QUOTE_EXTRA);
                this.register(ELEMENT_SHIPPING_ADDRESSES);
            }
            /** 运行 */
            run(): void {
                // 加载语言-框架默认
                ibas.i18n.load([
                    this.rootUrl + "resources/languages/purchase.json",
                    this.rootUrl + "resources/languages/bos.json"
                ], () => {
                    // 设置资源属性
                    this.description = ibas.i18n.prop(this.name.toLowerCase());
                    this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
                    // 先加载ui导航
                    let uiModules: string[] = [];
                    if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)) {
                        if (this.plantform === ibas.emPlantform.PHONE) {
                            // 使用m类型视图
                            uiModules.push("index.ui.m");
                        }
                    }
                    // 默认使用视图
                    if (uiModules.length === 0) {
                        // 使用c类型视图
                        uiModules.push("index.ui.c");
                    }
                    // 加载视图库
                    this.loadUI(uiModules, (ui) => {
                        // 设置导航
                        this[PROPERTY_NAVIGATION] = new ui.Navigation();
                        // 调用初始化
                        this.initialize();
                    });
                    // 保留基类方法
                    super.run();
                });
            }
        }
        /** 模块控制台，手机端 */
        export class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void {
                super.registers();
            }
        }
    }
}