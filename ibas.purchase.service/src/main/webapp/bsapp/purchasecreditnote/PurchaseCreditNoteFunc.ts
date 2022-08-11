/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseCreditNoteFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "06e4f9d8-4ba1-44e4-9d60-01926702d6de";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchasecreditnote";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseCreditNoteFunc.FUNCTION_ID;
                this.name = PurchaseCreditNoteFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseCreditNoteListApp = new PurchaseCreditNoteListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}