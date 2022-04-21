/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace ui {
        export namespace data {
            /**
             * 百分比类型，自从初始为1
             */
            export class Percentage extends sap.extension.data.Percentage {
                /**
                 * 格式化值到模型
                 * @param oValue 值
                 * @param sInternalType 视图类型
                 */
                parseValue(oValue: any, sInternalType: string): any {
                    if (ibas.objects.isNull(oValue) || ibas.strings.isEmpty(oValue)) {
                        oValue = 1;
                    }
                    return super.parseValue(oValue, sInternalType);
                }
                /** 验证数据 */
                protected validate(oValue: any): void {
                }
            }
        }
        export namespace component {
            /**
             * 仓库选择-选择框
             */
            sap.extension.m.RepositorySelect.extend("purchase.ui.component.WarehouseSelect", {
                metadata: {
                    properties: {
                    },
                    events: {
                    },
                },
                renderer: {
                },
                /** 重构设置 */
                applySettings(this: WarehouseSelect): WarehouseSelect {
                    let boRepository: ibas.BORepositoryApplication = this.getRepository();
                    if (ibas.objects.isNull(boRepository)) {
                        boRepository = sap.extension.variables.get(WarehouseSelect, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = new materials.bo.BORepositoryMaterials;
                            sap.extension.variables.set(boRepository, WarehouseSelect, "repository");
                        }
                        this.setRepository(boRepository);
                    }
                    let dataInfo: sap.extension.repository.IDataInfo = this.getDataInfo();
                    if (ibas.objects.isNull(dataInfo)) {
                        dataInfo = sap.extension.variables.get(WarehouseSelect, "dataInfo");
                        if (ibas.objects.isNull(dataInfo)) {
                            dataInfo = {
                                type: materials.bo.Warehouse,
                                key: "Code",
                                text: "Name",
                            };
                            sap.extension.variables.set(dataInfo, WarehouseSelect, "dataInfo");
                        }
                        this.setDataInfo(dataInfo);
                    } else {
                        if (!dataInfo.type) {
                            dataInfo.type = materials.bo.Warehouse;
                        } else if (!dataInfo.key) {
                            dataInfo.key = "Code";
                        } else if (!dataInfo.text) {
                            dataInfo.text = "Name";
                        }
                    }
                    let criteria: ibas.ICriteria | ibas.ICondition[] = this.getCriteria();
                    if (ibas.objects.isNull(criteria)) {
                        criteria = sap.extension.variables.get(WarehouseSelect, "criteria");
                        if (ibas.objects.isNull(criteria)) {
                            criteria = new ibas.Criteria();
                            let condition: ibas.ICondition = criteria.conditions.create();
                            condition.alias = "Activated";
                            condition.value = ibas.emYesNo.YES.toString();
                            let sort: ibas.ISort = criteria.sorts.create();
                            sort.alias = "DocEntry";
                            sort.sortType = ibas.emSortType.DESCENDING;
                            sap.extension.variables.set(criteria, WarehouseSelect, "criteria");
                        }
                        this.setCriteria(criteria);
                    }
                    if (WAREHOUSE_ITEM_CACHE.size > 0) {
                        WAREHOUSE_ITEM_CACHE.forEach((value, key) => {
                            sap.extension.m.RepositorySelect.prototype.addItem.call(this,
                                new sap.ui.core.ListItem("", {
                                    key: key,
                                    text: value
                                })
                            );
                        });
                    }
                    sap.extension.m.RepositorySelect.prototype.applySettings.apply(this, arguments);
                    return this;
                },
                addItem(this: WarehouseSelect, oItem: sap.ui.core.Item): WarehouseSelect {
                    if (!WAREHOUSE_ITEM_CACHE.has(oItem.getKey())) {
                        WAREHOUSE_ITEM_CACHE.set(oItem.getKey(), oItem.getText());
                    }
                    sap.extension.m.RepositorySelect.prototype.addItem.apply(this, arguments);
                    return this;
                }
            });
            const WAREHOUSE_ITEM_CACHE: Map<string, string> = new Map<string, string>();
            /**
             * 送货地址-选择框
             */
            sap.extension.core.EditableControl.extend("purchase.ui.component.ShippingAddressSelect", {
                metadata: {
                    properties: {
                        /** 地址集合数据 */
                        bindingValue: { type: "any" },
                        /** 选中的数据 */
                        selectedValue: { type: "any" },
                    },
                    aggregations: {
                        "_select": { type: "sap.m.Select", multiple: false },
                        "_button": { type: "sap.m.Button", multiple: false },
                        "_textarea": { type: "sap.m.TextArea", multiple: false },
                    },
                    events: {
                        "editSelected": {
                            parameters: {
                                address: {
                                    type: "object",
                                }
                            }
                        },
                        "selectionChange": {
                            parameters: {
                                address: {
                                    type: "object",
                                }
                            }
                        },
                    },
                },
                renderer: function (this: ShippingAddressSelect, oRm: sap.ui.core.RenderManager, oControl: ShippingAddressSelect): void {
                    oRm.write("<div");
                    oRm.writeControlData(oControl);
                    oRm.write(">");
                    oRm.write("<div");
                    oRm.addClass("sapMInputBaseContentWrapper sapMInputBaseHasEndIcons");
                    oRm.writeClasses();
                    oRm.addStyle("display", "inline-flex");
                    oRm.addStyle("width", "100%");
                    oRm.addStyle("height", "100%");
                    oRm.addStyle("border", "0");
                    oRm.addStyle("background-color", "transparent");
                    oRm.writeStyles();
                    oRm.write(">");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_select", undefined));
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_button", undefined));
                    oRm.write("</div>");
                    oRm.write("<div>");
                    oRm.renderControl(<sap.ui.core.Control>oControl.getAggregation("_textarea", undefined));
                    oRm.write("</div>");
                    oRm.write("</div>");
                },
                init(this: ShippingAddressSelect): void {
                    (<any>sap.ui.core.Control.prototype).init.apply(this, arguments);
                    this.setAggregation("_select", new sap.m.Select("", {
                        width: "100%",
                        change: (event: sap.ui.base.Event) => {
                            let select: any = this.getAggregation("_select", undefined);
                            if (select instanceof sap.m.Select) {
                                let index: number = select.indexOfItem(select.getSelectedItem());
                                if (index >= 0) {
                                    let address: bo.ShippingAddress = this.getBindingValue()[index];
                                    this.setSelectedValue(address);
                                }
                            }
                        }
                    }));
                    this.setAggregation("_button", new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://contacts",
                        press: (event: sap.ui.base.Event) => {
                            let select: any = this.getAggregation("_select", undefined);
                            if (select instanceof sap.m.Select) {
                                let index: number = ibas.numbers.toInt(
                                    select.getSelectedItem() ? select.getSelectedItem().getKey() : null);
                                if (index >= 0) {
                                    let address: bo.ShippingAddress = this.getBindingValue()[index];
                                    this.fireEditSelected({ address: address });
                                } else {
                                    this.fireEditSelected({ address: undefined });
                                }
                            }
                        }
                    }));
                    this.setAggregation("_textarea", new sap.m.TextArea("", {
                        editable: false,
                        rows: 3,
                        width: "100%",
                    }));
                },
                /** 是否可编辑 */
                setEditable(this: ShippingAddressSelect, value: boolean): ShippingAddressSelect {
                    this.setProperty("editable", value);
                    (<sap.m.Button>this.getAggregation("_button", undefined)).setEnabled(value);
                    return this;
                },
                /**
                 * 获取绑定值
                 */
                getBindingValue(this: ShippingAddressSelect): bo.ShippingAddresss {
                    return this.getProperty("bindingValue");
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: ShippingAddressSelect, value: bo.ShippingAddress | bo.ShippingAddresss): ShippingAddressSelect {
                    let values: bo.ShippingAddresss;
                    if (value instanceof bo.ShippingAddresss) {
                        values = value;
                    } else if (value instanceof bo.ShippingAddress) {
                        values = new bo.ShippingAddresss(undefined);
                        values.add(value);
                    } else if (!ibas.objects.isNull(value)) {
                        throw new TypeError("bindingValue");
                    }
                    let bValue: any = this.getProperty("bindingValue");
                    if (bValue instanceof ibas.BusinessObjects) {
                        bValue.removeListener(this.getId());
                    }
                    this.setProperty("bindingValue", values);
                    if (values instanceof ibas.BusinessObjects) {
                        values.registerListener({
                            id: this.getId(),
                            propertyChanged: (property: string) => {
                                if (property === "length") {
                                    this.loadItems(values);
                                }
                            }
                        });
                    }
                    this.loadItems(values);
                    return this;
                },
                exit(): void {
                    (<any>sap.ui.core.Control.prototype).exit.apply(this, arguments);
                    let bValue: any = this.getProperty("bindingValue");
                    if (bValue instanceof ibas.BusinessObjects) {
                        bValue.removeListener(this.getId());
                    }
                },
                /** 加载可选项目 */
                loadItems(this: ShippingAddressSelect, values: bo.ShippingAddresss): ShippingAddressSelect {
                    let select: any = this.getAggregation("_select", undefined);
                    if (select instanceof sap.m.Select) {
                        select.destroyItems();
                        let textArea: any = this.getAggregation("_textarea", undefined);
                        if (textArea instanceof sap.m.TextArea) {
                            textArea.setValue(null);
                        }
                        if (values instanceof Array) {
                            for (let i: number = 0; i < values.length; i++) {
                                let item: bo.ShippingAddress = values[i];
                                if (item.isDeleted === true) {
                                    continue;
                                }
                                select.addItem(new sap.ui.core.ListItem("", {
                                    key: i,
                                    text: ibas.strings.format("{0} ({1}/{2})",
                                        ibas.strings.isEmpty(item.name) ? item.objectKey : item.name, i + 1, values.length),
                                }));
                            }
                        }
                        if (select.getItems().length > 0) {
                            select.setSelectedItem(select.getFirstItem());
                            this.setSelectedValue(values.firstOrDefault(c => c.isDeleted !== true));
                        }
                    }
                    return this;
                },
                /**
                 * 获取选中值
                 */
                getSelectedValue(this: ShippingAddressSelect): bo.ShippingAddress {
                    return this.getProperty("selectedValue");
                },
                /**
                 * 设置选中值
                 * @param value 值
                 */
                setSelectedValue(this: ShippingAddressSelect, value: bo.ShippingAddress): ShippingAddressSelect {
                    this.setProperty("selectedValue", value);
                    this.fireSelectionChange({ address: value });
                    let textArea: any = this.getAggregation("_textarea", undefined);
                    if (textArea instanceof sap.m.TextArea) {
                        if (ibas.objects.isNull(value)) {
                            textArea.setValue(null);
                        } else {
                            let builder: ibas.StringBuilder = new ibas.StringBuilder();
                            builder.map(undefined, "");
                            builder.map(null, "");
                            builder.append(ibas.i18n.prop("bo_shippingaddress_consignee") + ": ");
                            builder.append(value.consignee);
                            builder.append(" ");
                            builder.append(value.mobilePhone);
                            builder.append("\n");
                            builder.append(ibas.i18n.prop("bo_shippingaddress") + ": ");
                            builder.append(value.country);
                            builder.append(value.province);
                            builder.append(value.city);
                            builder.append(value.district);
                            builder.append(value.street);
                            builder.append("\n");
                            builder.append(ibas.i18n.prop("bo_shippingaddress_trackingnumber") + ": ");
                            builder.append(value.trackingNumber);
                            builder.append(" ");
                            builder.append(ibas.i18n.prop("bo_shippingaddress_expense") + ": ");
                            builder.append(new sap.extension.data.Sum().formatValue(value.expense, "string"));
                            builder.append(" ");
                            builder.append(value.currency);
                            textArea.setValue(builder.toString());
                        }
                    }
                    return this;
                },
            });
            /**
             * 税选择-选择框
             */
            sap.extension.m.Select.extend("purchase.ui.component.TaxGroupSelect", {
                metadata: {
                    properties: {
                        rate: { type: "float" },
                    },
                    events: {
                    },
                },
                renderer: {
                },
                /** 重构设置 */
                applySettings(this: TaxGroupSelect): TaxGroupSelect {
                    sap.extension.m.Select.prototype.applySettings.apply(this, arguments);
                    this.attachChange(undefined, function (event: sap.ui.base.Event): void {
                        let source: any = event.getSource();
                        if (source instanceof purchase.ui.component.TaxGroupSelect) {
                            let select: any = source.getSelectedItem();
                            if (select instanceof purchase.ui.component.TaxGroupItem) {
                                if (source.getRate() !== select.getRate()) {
                                    source.setRate(select.getRate());
                                }
                            }
                        }
                    });
                    return this;
                },
                /**
                 * 设置绑定值
                 * @param value 值
                 */
                setBindingValue(this: TaxGroupSelect, value: string): TaxGroupSelect {
                    sap.extension.m.Select.prototype.setBindingValue.apply(this, arguments);
                    let select: any = this.getSelectedItem();
                    if (select instanceof purchase.ui.component.TaxGroupItem) {
                        if (ibas.numbers.valueOf(this.getRate()) !== select.getRate()
                            && value !== undefined && !ibas.strings.isEmpty(select.getKey())) {
                            setTimeout(() => {
                                this.setRate(select.getRate());
                            }, 50);
                        }
                    }
                    return this;
                },
                /**
                 * 加载可选值
                 */
                loadItems(this: TaxGroupSelect): TaxGroupSelect {
                    this.destroyItems();
                    accounting.taxrate.gain(accounting.bo.emTaxGroupCategory.INPUT, (results) => {
                        this.addItem({
                            code: "",
                            name: ibas.i18n.prop("openui5_please_select_data"),
                            rate: 0.0,
                        });
                        for (let item of results) {
                            this.addItem(item);
                        }
                    });
                    return this;
                },
                addItem(this: TaxGroupSelect, oItem: sap.ui.core.Item | { code: string, name: string, rate: number }): TaxGroupSelect {
                    if (oItem instanceof sap.ui.core.Item) {
                        sap.extension.m.Select.prototype.addItem.apply(this, arguments);
                    } else {
                        this.addItem(new purchase.ui.component.TaxGroupItem("", {
                            key: oItem.code,
                            text: oItem.name,
                            rate: oItem.rate
                        }));
                    }
                    return this;
                }
            });
            sap.ui.core.Item.extend("purchase.ui.component.TaxGroupItem", {
                metadata: {
                    properties: {
                        /** 率 */
                        rate: { type: "float", defalultValue: 0 },
                    },
                    events: {}
                },
            });
        }
    }
}