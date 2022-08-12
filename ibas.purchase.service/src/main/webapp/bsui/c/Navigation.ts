/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="../Component.d.ts" />
/// <reference path="../Component.ts" />
/// <reference path="./purchasedelivery/index.ts" />
/// <reference path="./purchaseorder/index.ts" />
/// <reference path="./purchasereturn/index.ts" />
/// <reference path="./purchasequote/index.ts" />
/// <reference path="./purchaserequest/index.ts" />
/// <reference path="./purchasecreditnote/index.ts" />
/// <reference path="./purchaseinvoice/index.ts" />
/// <reference path="./shippingaddress/index.ts" />
namespace purchase {
    export namespace ui {
        /**
         * 视图导航
         */
        export class Navigation extends ibas.ViewNavigation {

            /**
             * 创建实例
             * @param id 应用id
             */
            protected newView(id: string): ibas.IView {
                let view: ibas.IView = null;
                switch (id) {
                    case app.PurchaseDeliveryListApp.APPLICATION_ID:
                        view = new c.PurchaseDeliveryListView();
                        break;
                    case app.PurchaseDeliveryChooseApp.APPLICATION_ID:
                        view = new c.PurchaseDeliveryChooseView();
                        break;
                    case app.PurchaseDeliveryViewApp.APPLICATION_ID:
                        view = new c.PurchaseDeliveryViewView();
                        break;
                    case app.PurchaseDeliveryEditApp.APPLICATION_ID:
                        view = new c.PurchaseDeliveryEditView();
                        break;
                    case app.PurchaseOrderListApp.APPLICATION_ID:
                        view = new c.PurchaseOrderListView();
                        break;
                    case app.PurchaseOrderChooseApp.APPLICATION_ID:
                        view = new c.PurchaseOrderChooseView();
                        break;
                    case app.PurchaseOrderViewApp.APPLICATION_ID:
                        view = new c.PurchaseOrderViewView();
                        break;
                    case app.PurchasingAssistantApp.APPLICATION_ID:
                        view = new c.PurchasingAssistantView();
                        break;
                    case app.PurchaseOrderEditApp.APPLICATION_ID:
                        view = new c.PurchaseOrderEditView();
                        break;
                    case app.PurchaseOrderItemExtraApp.APPLICATION_ID:
                        view = new c.PurchaseOrderItemExtraView();
                        break;
                    case app.PurchaseQuoteListApp.APPLICATION_ID:
                        view = new c.PurchaseQuoteListView();
                        break;
                    case app.PurchaseQuoteChooseApp.APPLICATION_ID:
                        view = new c.PurchaseQuoteChooseView();
                        break;
                    case app.PurchaseQuoteViewApp.APPLICATION_ID:
                        view = new c.PurchaseQuoteViewView();
                        break;
                    case app.PurchaseQuoteEditApp.APPLICATION_ID:
                        view = new c.PurchaseQuoteEditView();
                        break;
                    case app.PurchaseQuoteItemExtraApp.APPLICATION_ID:
                        view = new c.PurchaseQuoteItemExtraView();
                        break;
                    case app.PurchaseReturnListApp.APPLICATION_ID:
                        view = new c.PurchaseReturnListView();
                        break;
                    case app.PurchaseReturnChooseApp.APPLICATION_ID:
                        view = new c.PurchaseReturnChooseView();
                        break;
                    case app.PurchaseReturnViewApp.APPLICATION_ID:
                        view = new c.PurchaseReturnViewView();
                        break;
                    case app.PurchaseReturnEditApp.APPLICATION_ID:
                        view = new c.PurchaseReturnEditView();
                        break;
                    case app.ShippingAddressesEditApp.APPLICATION_ID:
                        view = new c.ShippingAddressesEditView();
                        break;
                    case app.PurchaseRequestListApp.APPLICATION_ID:
                        view = new c.PurchaseRequestListView();
                        break;
                    case app.PurchaseRequestChooseApp.APPLICATION_ID:
                        view = new c.PurchaseRequestChooseView();
                        break;
                    case app.PurchaseRequestViewApp.APPLICATION_ID:
                        view = new c.PurchaseRequestViewView();
                        break;
                    case app.PurchaseRequestEditApp.APPLICATION_ID:
                        view = new c.PurchaseRequestEditView();
                        break;
                    case app.PurchaseRequestItemExtraApp.APPLICATION_ID:
                        view = new c.PurchaseRequestItemExtraView();
                        break;
                    case app.PurchaseInvoiceListApp.APPLICATION_ID:
                        view = new c.PurchaseInvoiceListView();
                        break;
                    case app.PurchaseInvoiceChooseApp.APPLICATION_ID:
                        view = new c.PurchaseInvoiceChooseView();
                        break;
                    case app.PurchaseInvoiceViewApp.APPLICATION_ID:
                        view = new c.PurchaseInvoiceViewView();
                        break;
                    case app.PurchaseInvoiceEditApp.APPLICATION_ID:
                        view = new c.PurchaseInvoiceEditView();
                        break;
                    case app.PurchaseCreditNoteListApp.APPLICATION_ID:
                        view = new c.PurchaseCreditNoteListView();
                        break;
                    case app.PurchaseCreditNoteChooseApp.APPLICATION_ID:
                        view = new c.PurchaseCreditNoteChooseView();
                        break;
                    case app.PurchaseCreditNoteViewApp.APPLICATION_ID:
                        view = new c.PurchaseCreditNoteViewView();
                        break;
                    case app.PurchaseCreditNoteEditApp.APPLICATION_ID:
                        view = new c.PurchaseCreditNoteEditView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}