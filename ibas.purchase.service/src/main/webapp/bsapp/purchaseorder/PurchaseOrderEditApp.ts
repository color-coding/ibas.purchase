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

/** 编辑应用-采购订单 */
export class PurchaseOrderEditApp extends ibas.BOEditApplication<IPurchaseOrderEditView, bo.PurchaseOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "91733b83-5360-4703-83c9-6e4a038808f4";
    /** 应用名称 */
    static APPLICATION_NAME: string = "purchase_app_purchaseorder_edit";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.PurchaseOrder.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseOrderEditApp.APPLICATION_ID;
        this.name = PurchaseOrderEditApp.APPLICATION_NAME;
        this.boCode = PurchaseOrderEditApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.deleteDataEvent = this.deleteData;
        this.view.createDataEvent = this.createData;
        this.view.addPurchaseOrderItemEvent = this.addPurchaseOrderItem;
        this.view.removePurchaseOrderItemEvent = this.removePurchaseOrderItem;
        this.view.choosePurchaseOrderItemMaterialEvent = this.choosePurchaseOrderItemMaterial;
        this.view.choosePurchaseOrderItemWarehouseEvent = this.choosePurchaseOrderItemWarehouse;
        this.view.choosePurchaseOrderSupplierEvent = this.choosePurchaseOrderSupplier;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.editData)) {
            // 创建编辑对象实例
            this.editData = new bo.PurchaseOrder();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
        }
        this.view.showPurchaseOrder(this.editData);
        this.view.showPurchaseOrderItems(this.editData.purchaseOrderItems.filterDeleted());
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let that: this = this;
        if (ibas.objects.instanceOf(arguments[0], bo.PurchaseOrder)) {
            // 尝试重新查询编辑对象
            let criteria: ibas.ICriteria = arguments[0].criteria();
            if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                // 有效的查询对象查询
                let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
                boRepository.fetchPurchaseOrder({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseOrder>): void {
                        let data: bo.PurchaseOrder;
                        if (opRslt.resultCode === 0) {
                            data = opRslt.resultObjects.firstOrDefault();
                        }
                        if (ibas.objects.instanceOf(data, bo.PurchaseOrder)) {
                            // 查询到了有效数据
                            that.editData = data;
                            that.show();
                        } else {
                            // 数据重新检索无效
                            that.messages({
                                type: ibas.emMessageType.WARNING,
                                message: ibas.i18n.prop("sys_shell_data_deleted_and_created"),
                                onCompleted(): void {
                                    that.show();
                                }
                            });
                        }
                    }
                });
                // 开始查询数据
                return;
            }
        }
        super.run();
    }
    /** 待编辑的数据 */
    protected editData: bo.PurchaseOrder;
    /** 保存数据 */
    protected saveData(): void {
        let that: this = this;
        let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
        boRepository.savePurchaseOrder({
            beSaved: this.editData,
            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseOrder>): void {
                try {
                    that.busy(false);
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 0) {
                        // 删除成功，释放当前对象
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_delete") + ibas.i18n.prop("sys_shell_sucessful"));
                        that.editData = undefined;
                    } else {
                        // 替换编辑对象
                        that.editData = opRslt.resultObjects.firstOrDefault();
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("sys_shell_data_save") + ibas.i18n.prop("sys_shell_sucessful"));
                    }
                    // 刷新当前视图
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.busy(true);
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_saving_data"));
    }
    /** 删除数据 */
    protected deleteData(): void {
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("sys_whether_to_delete"),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    that.editData.delete();
                    that.saveData();
                }
            }
        });
    }
    /** 新建数据，参数1：是否克隆 */
    protected createData(clone: boolean): void {
        let that: this = this;
        let createData: Function = function (): void {
            if (clone) {
                // 克隆对象
                that.editData = that.editData.clone();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_cloned_new"));
                that.viewShowed();
            } else {
                // 新建对象
                that.editData = new bo.PurchaseOrder();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
                that.viewShowed();
            }
        };
        if (that.editData.isDirty) {
            this.messages({
                type: ibas.emMessageType.QUESTION,
                title: ibas.i18n.prop(this.name),
                message: ibas.i18n.prop("sys_data_not_saved_whether_to_continue"),
                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                onCompleted(action: ibas.emMessageAction): void {
                    if (action === ibas.emMessageAction.YES) {
                        createData();
                    }
                }
            });
        } else {
            createData();
        }
    }
    protected choosePurchaseOrderSupplier(): void {
        //
    }
    protected choosePurchaseOrderItemWarehouse(): void {
        //
    }
    protected choosePurchaseOrderItemMaterial(): void {
        //
    }
    /** 添加采购订单-行事件 */
    addPurchaseOrderItem(): void {
        this.editData.purchaseOrderItems.create();
        // 仅显示没有标记删除的
        this.view.showPurchaseOrderItems(this.editData.purchaseOrderItems.filterDeleted());
    }
    /** 删除采购订单-行事件 */
    removePurchaseOrderItem(items: bo.PurchaseOrderItem[]): void {
        // 非数组，转为数组
        if (!(items instanceof Array)) {
            items = [items];
        }
        if (items.length === 0) {
            return;
        }
        // 移除项目
        for (let item of items) {
            if (this.editData.purchaseOrderItems.indexOf(item) >= 0) {
                if (item.isNew) {
                    // 新建的移除集合
                    this.editData.purchaseOrderItems.remove(item);
                } else {
                    // 非新建标记删除
                    item.delete();
                }
            }
        }
        // 仅显示没有标记删除的
        this.view.showPurchaseOrderItems(this.editData.purchaseOrderItems.filterDeleted());
    }

}
/** 视图-采购订单 */
export interface IPurchaseOrderEditView extends ibas.IBOEditView {
    /** 显示数据 */
    showPurchaseOrder(data: bo.PurchaseOrder): void;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购订单-行事件 */
    addPurchaseOrderItemEvent: Function;
    /** 删除采购订单-行事件 */
    removePurchaseOrderItemEvent: Function;
    /** 选择供应商信息 */
    choosePurchaseOrderSupplierEvent: Function;
    /** 选择物料主数据 */
    choosePurchaseOrderItemMaterialEvent: Function;
    /** 选择采购订单-行 仓库 */
    choosePurchaseOrderItemWarehouseEvent: Function;
    /** 显示数据 */
    showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void;
}
