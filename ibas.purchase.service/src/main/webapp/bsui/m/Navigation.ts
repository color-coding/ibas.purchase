/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as purchasedeliveryApps from "../../bsapp/purchasedelivery/index";
import * as purchaseorderApps from "../../bsapp/purchaseorder/index";
import * as purchasereturnApps from "../../bsapp/purchasereturn/index";
import * as purchasedeliveryViews from "./purchasedelivery/index";
import * as purchaseorderViews from "./purchaseorder/index";
import * as purchasereturnViews from "./purchasereturn/index";
/**
 * 视图导航
 */
export default class Navigation extends ibas.ViewNavigation {

    /**
     * 创建实例
     * @param id 应用id
     */
    protected newView(id: string): ibas.IView {
        let view: ibas.IView = null;
        switch (id) {
            case purchasedeliveryApps.PurchaseDeliveryListApp.APPLICATION_ID:
                view = new purchasedeliveryViews.PurchaseDeliveryListView();
                break;
            case purchasedeliveryApps.PurchaseDeliveryChooseApp.APPLICATION_ID:
                view = new purchasedeliveryViews.PurchaseDeliveryChooseView();
                break;
            case purchasedeliveryApps.PurchaseDeliveryViewApp.APPLICATION_ID:
                view = new purchasedeliveryViews.PurchaseDeliveryViewView();
                break;
            case purchasedeliveryApps.PurchaseDeliveryEditApp.APPLICATION_ID:
                view = new purchasedeliveryViews.PurchaseDeliveryEditView();
                break;
            case purchaseorderApps.PurchaseOrderListApp.APPLICATION_ID:
                view = new purchaseorderViews.PurchaseOrderListView();
                break;
            case purchaseorderApps.PurchaseOrderChooseApp.APPLICATION_ID:
                view = new purchaseorderViews.PurchaseOrderChooseView();
                break;
            case purchaseorderApps.PurchaseOrderViewApp.APPLICATION_ID:
                view = new purchaseorderViews.PurchaseOrderViewView();
                break;
            case purchaseorderApps.PurchaseOrderEditApp.APPLICATION_ID:
                view = new purchaseorderViews.PurchaseOrderEditView();
                break;
            case purchasereturnApps.PurchaseReturnListApp.APPLICATION_ID:
                view = new purchasereturnViews.PurchaseReturnListView();
                break;
            case purchasereturnApps.PurchaseReturnChooseApp.APPLICATION_ID:
                view = new purchasereturnViews.PurchaseReturnChooseView();
                break;
            case purchasereturnApps.PurchaseReturnViewApp.APPLICATION_ID:
                view = new purchasereturnViews.PurchaseReturnViewView();
                break;
            case purchasereturnApps.PurchaseReturnEditApp.APPLICATION_ID:
                view = new purchasereturnViews.PurchaseReturnEditView();
                break;
            default:
                break;
        }
        return view;
    }
}
