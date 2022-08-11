/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseInvoiceFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "11e194d5-254f-4a9c-92cd-ca45e258ca13";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchaseinvoice";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseInvoiceFunc.FUNCTION_ID;
                this.name = PurchaseInvoiceFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseInvoiceListApp = new PurchaseInvoiceListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}