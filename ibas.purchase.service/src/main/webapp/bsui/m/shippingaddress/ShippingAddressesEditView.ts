/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace ui {
        export namespace m {
            /** 编辑视图-送货地址 */
            export class ShippingAddressesEditView extends ibas.DialogView implements app.IShippingAddressesEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 复制从数据事件 */
                copyFromEvent: Function;
                /** 编辑数据事件 */
                editDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.formTop = new sap.extension.layout.DataSimpleForm("", {
                        editable: true,
                        userFieldsTitle: "",
                        userFieldsMode: "input",
                        dataInfo: {
                            code: bo.ShippingAddress.BUSINESS_OBJECT_CODE,
                        },
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 30
                                })
                            }),
                            this.buttonAddress = new sap.m.MenuButton("", {
                                type: sap.m.ButtonType.Accept,
                                text: ibas.i18n.prop("shell_data_new"),
                                buttonMode: sap.m.MenuButtonMode.Split,
                                useDefaultActionOnly: true,
                                menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                menu: new sap.m.Menu("", {}),
                                defaultAction(): void {
                                    that.fireViewEvents(that.createDataEvent);
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_shippingstatus") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emShippingStatus
                            }).bindProperty("bindingValue", {
                                path: "shippingStatus",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emShippingStatus
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_consignee") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "consignee",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 50
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_mobilephone") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "mobilePhone",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress") }),
                            new sap.extension.m.AddressArea("", {
                                countryVisible: true,
                                zipCodeVisible: true,
                            }).bindProperty("country", {
                                path: "country",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("province", {
                                path: "province",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("city", {
                                path: "city",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("district", {
                                path: "district",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("street", {
                                path: "street",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("zipCode", {
                                path: "zipCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 10
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_trackingnumber") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "trackingNumber",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 60
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_expense") }),
                            new sap.extension.m.Input("", {

                                fieldWidth: "70%",
                            }).bindProperty("bindingValue", {
                                path: "expense",
                                type: new sap.extension.data.Sum()
                            }).bindProperty("description", {
                                path: "currency",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_tax") }),
                            new component.TaxGroupSelect("", {
                                taxCategory: accounting.bo.emTaxGroupCategory.FREIGHT,
                            }).bindProperty("bindingValue", {
                                path: "tax",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }).bindProperty("rate", {
                                path: "taxRate",
                                type: new sap.extension.data.Rate()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_remark1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "remark1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress_remark2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "remark2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            this.formTop
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("sales_copy_from"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.copyFromEvent, (<any>that.formTop.getModel())?.getData());
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_delete"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.deleteDataEvent, (<any>that.formTop.getModel())?.getData());
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private formTop: sap.ui.layout.form.SimpleForm;
                private buttonAddress: sap.m.MenuButton;

                /** 显示数据 */
                showShippingAddresses(datas: bo.ShippingAddress[]): void {
                    let that: this = this;
                    this.buttonAddress.getMenu().destroyItems();
                    for (let item of datas) {
                        let sItem: sap.m.MenuItem = new sap.m.MenuItem("", {
                            text: item.name,
                            press: function (): void {
                                // 创建新的对象
                                that.fireViewEvents(that.editDataEvent, item);
                            }
                        });
                        this.buttonAddress.getMenu().addItem(sItem);
                    }
                }
                /** 显示数据 */
                showShippingAddress(data: bo.ShippingAddress): void {
                    if (ibas.objects.isNull(data)) {
                        this.formTop.setModel(null);
                        setTimeout(() => {
                            for (let item of this.formTop.getContent()) {
                                if (item instanceof sap.m.InputBase) {
                                    item.setEditable(false);
                                } else if (item instanceof sap.extension.core.EditableControl) {
                                    item.setEditable(false);
                                } else if (item instanceof sap.m.Select) {
                                    item.setEnabled(false);
                                } else if (item instanceof sap.m.ComboBoxBase) {
                                    item.setEnabled(false);
                                }
                            }
                        }, 200);
                    } else {
                        this.formTop.setModel(new sap.ui.model.json.JSONModel(data));
                        setTimeout(() => {
                            for (let item of this.formTop.getContent()) {
                                if (item instanceof sap.m.InputBase) {
                                    item.setEditable(true);
                                } else if (item instanceof sap.extension.core.EditableControl) {
                                    item.setEditable(true);
                                } else if (item instanceof sap.m.Select) {
                                    item.setEnabled(true);
                                } else if (item instanceof sap.m.ComboBoxBase) {
                                    item.setEnabled(true);
                                }
                            }
                        }, 200);
                    }
                }
            }
        }
    }
}
