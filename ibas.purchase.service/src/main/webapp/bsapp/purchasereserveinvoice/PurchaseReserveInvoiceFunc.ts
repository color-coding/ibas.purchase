/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseReserveInvoiceFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "4a4ebf90-4f54-4504-a250-d7381aa4b5f5";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchasereserveinvoice";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReserveInvoiceFunc.FUNCTION_ID;
                this.name = PurchaseReserveInvoiceFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseReserveInvoiceListApp = new PurchaseReserveInvoiceListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}