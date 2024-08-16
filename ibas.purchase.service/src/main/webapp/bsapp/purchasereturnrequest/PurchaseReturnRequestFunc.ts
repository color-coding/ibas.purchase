/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseReturnRequestFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "3a76a15f-9920-4974-a3cd-103cff3e41e2";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchasereturnrequest";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestFunc.FUNCTION_ID;
                this.name = PurchaseReturnRequestFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseReturnRequestListApp = new PurchaseReturnRequestListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}