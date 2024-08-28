/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    export namespace ui {
        namespace component {
            /**
             * 仓库选择-选择框
             */
            class WarehouseSelect extends sap.extension.m.ComboBox {
                /** 设置分支 */
                setBranch(data: string): WarehouseSelect;
                /** 获取分支 */
                getBranch(): string;
            }
            /**
             * 送货地址-选择框
             */
            class ShippingAddressSelect extends sap.extension.core.EditableControl {
                /**
                 * 获取地址项目
                 */
                getBindingValue(): bo.ShippingAddresss;
                /**
                 * 设置地址项目
                 * @param value 地址项目实例或集合
                 */
                setBindingValue(value: bo.ShippingAddress | bo.ShippingAddresss): this;
                /** 加载可选项目 */
                loadItems(values: bo.ShippingAddresss): this;
                /** 设置监听地址编辑事件 */
                attachEditSelected(oData: any, fnFunction: Function, oListener?: any): this;
                /** 取消监听地址编辑事件 */
                detachEditSelected(fnFunction: Function, oListener?: any): this;
                /** 触发地址编辑事件 */
                protected fireEditSelected(param: { address: object }): this;
                /** 获取选中的地址 */
                getSelectedValue(): bo.ShippingAddress;
                /** 设置选中的地址 */
                setSelectedValue(value: bo.ShippingAddress): this;
                /** 设置监听地址改变事件 */
                attachSelectionChange(oData: any, fnFunction: Function, oListener?: any): this;
                /** 取消监听地址改变事件 */
                detachSelectionChange(fnFunction: Function, oListener?: any): this;
                /** 触发地址改变事件 */
                protected fireSelectionChange(param: { address: object }): this;
            }
            /**
             * 税收组选择-选择框
             */
            class TaxGroupSelect extends sap.extension.m.Select {
                addItem(oItem: sap.ui.core.Item): this;
                addItem(oItem: { code: string, name: string, rate: number }): this;
                getRate(): number;
                setRate(rate: number): this;
                getTaxCategory(): accounting.bo.emTaxGroupCategory;
                setTaxCategory(value: accounting.bo.emTaxGroupCategory): this;
            }
            class TaxGroupItem extends sap.ui.core.Item {
                getRate(): number;
                setRate(rate: number): this;
            }
            class InventoryQuantityText extends sap.m.Text {
                /** 获取-产品编号 */
                getItemCode(): string;
                /** 设置-产品编号 */
                setItemCode(value: string): InventoryQuantityText;
                /** 获取-仓库 */
                getWarehouse(): string;
                /** 设置-仓库 */
                setWarehouse(value: string): InventoryQuantityText;
                /** 获取-单位换算率 */
                getRate(): number;
                /** 设置-单位换算率 */
                setRate(value: number): InventoryQuantityText;
                /** 获取-左数量 */
                getLeftQuantity(): number;
                /** 设置-左数量 */
                setLeftQuantity(value: number): InventoryQuantityText;
                /** 获取-右数量 */
                getLeftQuantity(): number;
                /** 设置-右数量 */
                setLeftQuantity(value: number): InventoryQuantityText;
                /** 触发库存内容变化事件 */
                protected fireInventoryChange(param: { itemCode: string, warehouse: string }): void;
                /** 更新文本内容 */
                protected updateText(): void;
                /** 获取-库存任务ID */
                getInventoryTaskId(): number;
                /** 设置-库存任务ID */
                setInventoryTaskId(value: number): InventoryQuantityText;
            }
        }
    }
}