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
/// <reference path="./blanketagreement/index.ts" />
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
                        view = new m.PurchaseDeliveryListView();
                        break;
                    case app.PurchaseDeliveryChooseApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryChooseView();
                        break;
                    case app.PurchaseDeliveryViewApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryViewView();
                        break;
                    case app.PurchaseDeliveryEditApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryEditView();
                        break;
                    case app.PurchaseOrderListApp.APPLICATION_ID:
                        view = new m.PurchaseOrderListView();
                        break;
                    case app.PurchaseOrderChooseApp.APPLICATION_ID:
                        view = new m.PurchaseOrderChooseView();
                        break;
                    case app.PurchaseOrderViewApp.APPLICATION_ID:
                        view = new m.PurchaseOrderViewView();
                        break;
                    case app.PurchaseOrderEditApp.APPLICATION_ID:
                        view = new m.PurchaseOrderEditView();
                        break;
                    case app.PurchaseOrderItemExtraApp.APPLICATION_ID:
                        view = new m.PurchaseOrderItemExtraView();
                        break;
                    case app.PurchaseQuoteListApp.APPLICATION_ID:
                        view = new m.PurchaseQuoteListView();
                        break;
                    case app.PurchaseQuoteChooseApp.APPLICATION_ID:
                        view = new m.PurchaseQuoteChooseView();
                        break;
                    case app.PurchaseQuoteViewApp.APPLICATION_ID:
                        view = new m.PurchaseQuoteViewView();
                        break;
                    case app.PurchaseQuoteEditApp.APPLICATION_ID:
                        view = new m.PurchaseQuoteEditView();
                        break;
                    case app.PurchaseQuoteItemExtraApp.APPLICATION_ID:
                        view = new m.PurchaseQuoteItemExtraView();
                        break;
                    case app.PurchaseReturnListApp.APPLICATION_ID:
                        view = new m.PurchaseReturnListView();
                        break;
                    case app.PurchaseReturnChooseApp.APPLICATION_ID:
                        view = new m.PurchaseReturnChooseView();
                        break;
                    case app.PurchaseReturnViewApp.APPLICATION_ID:
                        view = new m.PurchaseReturnViewView();
                        break;
                    case app.PurchaseReturnEditApp.APPLICATION_ID:
                        view = new m.PurchaseReturnEditView();
                        break;
                    case app.PurchaseRequestListApp.APPLICATION_ID:
                        view = new m.PurchaseRequestListView();
                        break;
                    case app.PurchaseRequestChooseApp.APPLICATION_ID:
                        view = new m.PurchaseRequestChooseView();
                        break;
                    case app.PurchaseRequestViewApp.APPLICATION_ID:
                        view = new m.PurchaseRequestViewView();
                        break;
                    case app.PurchaseRequestEditApp.APPLICATION_ID:
                        view = new m.PurchaseRequestEditView();
                        break;
                    case app.PurchaseRequestItemExtraApp.APPLICATION_ID:
                        view = new m.PurchaseRequestItemExtraView();
                        break;
                    case app.ShippingAddressesEditApp.APPLICATION_ID:
                        view = new m.ShippingAddressesEditView();
                        break;
                    case app.PurchaseInvoiceListApp.APPLICATION_ID:
                        view = new m.PurchaseInvoiceListView();
                        break;
                    case app.PurchaseInvoiceChooseApp.APPLICATION_ID:
                        view = new m.PurchaseInvoiceChooseView();
                        break;
                    case app.PurchaseInvoiceViewApp.APPLICATION_ID:
                        view = new m.PurchaseInvoiceViewView();
                        break;
                    case app.PurchaseInvoiceEditApp.APPLICATION_ID:
                        view = new m.PurchaseInvoiceEditView();
                        break;
                    case app.PurchaseCreditNoteListApp.APPLICATION_ID:
                        view = new m.PurchaseCreditNoteListView();
                        break;
                    case app.PurchaseCreditNoteChooseApp.APPLICATION_ID:
                        view = new m.PurchaseCreditNoteChooseView();
                        break;
                    case app.PurchaseCreditNoteViewApp.APPLICATION_ID:
                        view = new m.PurchaseCreditNoteViewView();
                        break;
                    case app.PurchaseCreditNoteEditApp.APPLICATION_ID:
                        view = new m.PurchaseCreditNoteEditView();
                        break;
                    case app.BlanketAgreementListApp.APPLICATION_ID:
                        view = new m.BlanketAgreementListView();
                        break;
                    case app.BlanketAgreementChooseApp.APPLICATION_ID:
                        view = new m.BlanketAgreementChooseView();
                        break;
                    case app.BlanketAgreementViewApp.APPLICATION_ID:
                        view = new m.BlanketAgreementViewView();
                        break;
                    case app.BlanketAgreementEditApp.APPLICATION_ID:
                        view = new m.BlanketAgreementEditView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}