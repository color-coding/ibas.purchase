/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryPurchase } from "../../borep/BORepositories";
import { PurchaseDeliveryEditApp } from "./PurchaseDeliveryEditApp";

/** 查看应用-采购交货 */
export class PurchaseDeliveryViewApp extends ibas.BOViewService<IPurchaseDeliveryViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "696e3551-8edf-4028-8dc9-1d999372db51";
    /** 应用名称 */
    static APPLICATION_NAME: string = "purchase_app_purchasedelivery_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.PurchaseDelivery.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseDeliveryViewApp.APPLICATION_ID;
        this.name = PurchaseDeliveryViewApp.APPLICATION_NAME;
        this.boCode = PurchaseDeliveryViewApp.BUSINESS_OBJECT_CODE;
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
        if (ibas.objects.isNull(this.viewData)) {
            // 创建编辑对象实例
            this.viewData = new bo.PurchaseDelivery();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
        }
        this.view.showPurchaseDelivery(this.viewData);
        this.view.showPurchaseDeliveryItems(this.viewData.purchaseDeliveryItems.filterDeleted());
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app: PurchaseDeliveryEditApp = new PurchaseDeliveryEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        if (arguments[0] instanceof bo.PurchaseDelivery) {
            this.viewData = arguments[0];
            this.show();
        } else {
            super.run();
        }
    }
    private viewData: bo.PurchaseDelivery;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件

        }
        let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
        boRepository.fetchPurchaseDelivery({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseDelivery>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.viewData = opRslt.resultObjects.firstOrDefault();
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-采购交货 */
export interface IPurchaseDeliveryViewView extends ibas.IBOViewView {
    showPurchaseDelivery(data: bo.PurchaseDelivery): void;
    showPurchaseDeliveryItems(data: bo.PurchaseDeliveryItem[]): void;
}
/** 采购交货连接服务映射 */
export class PurchaseDeliveryLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseDeliveryViewApp.APPLICATION_ID;
        this.name = PurchaseDeliveryViewApp.APPLICATION_NAME;
        this.boCode = PurchaseDeliveryViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new PurchaseDeliveryViewApp();
    }
}
