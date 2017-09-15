/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import * as material from "../../3rdparty/materials/index";
import { BORepositoryPurchase } from "../../borep/BORepositories";

/** 编辑应用-采购交货 */
export class PurchaseDeliveryEditApp extends ibas.BOEditApplication<IPurchaseDeliveryEditView, bo.PurchaseDelivery> {

    /** 应用标识 */
    static APPLICATION_ID: string = "ed53a313-bf87-4ca9-b9f5-b2b8ace28e21";
    /** 应用名称 */
    static APPLICATION_NAME: string = "purchase_app_purchasedelivery_edit";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.PurchaseDelivery.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseDeliveryEditApp.APPLICATION_ID;
        this.name = PurchaseDeliveryEditApp.APPLICATION_NAME;
        this.boCode = PurchaseDeliveryEditApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.deleteDataEvent = this.deleteData;
        this.view.createDataEvent = this.createData;
        this.view.addPurchaseDeliveryItemEvent = this.addPurchaseDeliveryItem;
        this.view.removePurchaseDeliveryItemEvent = this.removePurchaseDeliveryItem;
        this.view.choosePurchaseDeliverySupplierEvent = this.choosePurchaseDeliverySupplier;
        this.view.choosePurchaseDeliveryItemMaterialEvent = this.choosePurchaseDeliveryItemMaterial;
        this.view.choosePurchaseDeliveryItemWarehouseEvent = this.choosePurchaseDeliveryItemWarehouse;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.editData)) {
            // 创建编辑对象实例
            this.editData = new bo.PurchaseDelivery();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
        }
        this.view.showPurchaseDelivery(this.editData);
        this.view.showPurchaseDeliveryItems(this.editData.purchaseDeliveryItems.filterDeleted());
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let that: this = this;
        if (ibas.objects.instanceOf(arguments[0], bo.PurchaseDelivery)) {
            // 尝试重新查询编辑对象
            let criteria: ibas.ICriteria = arguments[0].criteria();
            if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                // 有效的查询对象查询
                let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
                boRepository.fetchPurchaseDelivery({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseDelivery>): void {
                        let data: bo.PurchaseDelivery;
                        if (opRslt.resultCode === 0) {
                            data = opRslt.resultObjects.firstOrDefault();
                        }
                        if (ibas.objects.instanceOf(data, bo.PurchaseDelivery)) {
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
    protected editData: bo.PurchaseDelivery;
    /** 保存数据 */
    protected saveData(): void {
        let that: this = this;
        let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
        boRepository.savePurchaseDelivery({
            beSaved: this.editData,
            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseDelivery>): void {
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
                that.editData = new bo.PurchaseDelivery();
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
    /** 选择供应商信息 */
    protected choosePurchaseDeliverySupplier(): void {
        // let that: this = this;
        // ibas.servicesManager.runChooseService<bo.>({
        //     boCode: bo.Customer.BUSINESS_OBJECT_CODE,
        //     chooseType: ibas.emChooseType.single,
        //     criteria: [
        //         new ibas.Condition(bo.Customer.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
        //     ],
        //     onCompleted(selecteds: ibas.List<bo.Customer>): void {
        //         that.editData.supplierCode = selecteds.firstOrDefault().code;
        //         that.editData.supplierName = selecteds.firstOrDefault().name;
        //     }
        // });
    }
    /** 选择物料主数据 */
    protected choosePurchaseDeliveryItemMaterial(caller: bo.PurchaseDeliveryItem): void {
        // let that: this = this;
        // ibas.servicesManager.runChooseService<material.IMaterial>({
        //     caller: caller,
        //     boCode: bo.Material.BUSINESS_OBJECT_CODE,
        //     criteria: [
        //         new ibas.Condition(material.IMaterial.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, "Y")
        //     ],
        //     onCompleted(selecteds: ibas.List<material.IMaterial>): void {
        //         // 获取触发的对象
        //         let index: number = that.editData.purchaseDeliveryItems.indexOf(caller);
        //         let item: bo.PurchaseDeliveryItem = that.editData.purchaseDeliveryItems[index];
        //         // 选择返回数量多余触发数量时,自动创建新的项目
        //         let created: boolean = false;
        //         for (let selected of selecteds) {
        //             if (ibas.objects.isNull(item)) {
        //                 item = that.editData.purchaseDeliveryItems.create();
        //                 created = true;
        //             }
        //             item.itemCode = selected.code;
        //             item.itemDescription = selected.name;
        //             item = null;
        //         }
        //         if (created) {
        //             // 创建了新的行项目
        //             that.view.showPurchaseDeliveryItems(that.editData.purchaseDeliveryItems.filterDeleted());
        //         }
        //     }
        // });
    }
    /** 采购交货-行 选择仓库主数据 */
    protected choosePurchaseDeliveryItemWarehouse(): void {
        //
    }
    /** 添加采购交货-行事件 */
    addPurchaseDeliveryItem(): void {
        this.editData.purchaseDeliveryItems.create();
        // 仅显示没有标记删除的
        this.view.showPurchaseDeliveryItems(this.editData.purchaseDeliveryItems.filterDeleted());
    }
    /** 删除采购交货-行事件 */
    removePurchaseDeliveryItem(items: bo.PurchaseDeliveryItem[]): void {
        // 非数组，转为数组
        if (!(items instanceof Array)) {
            items = [items];
        }
        if (items.length === 0) {
            return;
        }
        // 移除项目
        for (let item of items) {
            if (this.editData.purchaseDeliveryItems.indexOf(item) >= 0) {
                if (item.isNew) {
                    // 新建的移除集合
                    this.editData.purchaseDeliveryItems.remove(item);
                } else {
                    // 非新建标记删除
                    item.delete();
                }
            }
        }
        // 仅显示没有标记删除的
        this.view.showPurchaseDeliveryItems(this.editData.purchaseDeliveryItems.filterDeleted());
    }

}
/** 视图-采购交货 */
export interface IPurchaseDeliveryEditView extends ibas.IBOEditView {
    /** 显示数据 */
    showPurchaseDelivery(data: bo.PurchaseDelivery): void;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购交货-行事件 */
    addPurchaseDeliveryItemEvent: Function;
    /** 删除采购交货-行事件 */
    removePurchaseDeliveryItemEvent: Function;
    /** 选择供应商信息 */
    choosePurchaseDeliverySupplierEvent: Function;
    /** 选择物料主数据 */
    choosePurchaseDeliveryItemMaterialEvent: Function;
    /** 选择采购交货-行 仓库 */
    choosePurchaseDeliveryItemWarehouseEvent: Function;
    /** 显示数据 */
    showPurchaseDeliveryItems(datas: bo.PurchaseDeliveryItem[]): void;
}
