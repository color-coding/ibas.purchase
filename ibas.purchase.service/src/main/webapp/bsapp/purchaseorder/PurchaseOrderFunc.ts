/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseOrderFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "7cdd0938-8d7a-42d9-be44-749ac85109a0";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchaseorder";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderFunc.FUNCTION_ID;
                this.name = PurchaseOrderFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseOrderListApp = new PurchaseOrderListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
        export class PurchasingAssistantFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "c3314387-d1ee-4ace-80d3-53c5d77efd6c";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchasingassistant";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchasingAssistantFunc.FUNCTION_ID;
                this.name = PurchasingAssistantFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchasingAssistantApp = new PurchasingAssistantApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}