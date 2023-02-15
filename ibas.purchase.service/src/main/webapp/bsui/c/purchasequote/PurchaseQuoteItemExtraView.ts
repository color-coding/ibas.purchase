/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace ui {
        export namespace c {
            /**
             * 列表视图-采购报价-行额外
             */
            export class PurchaseQuoteItemExtraView extends ibas.DialogView implements app.IPurchaseQuoteItemExtraView {
                /** 添加采购报价-行额外 事件 */
                addPurchaseQuoteItemExtraEvent: Function;
                /** 移出采购报价-行额外 事件 */
                removePurchaseQuoteItemExtraEvent: Function;
                /** 删除采购报价-行额外 事件 */
                deletePurchaseQuoteItemExtraEvent: Function;
                /** 查看采购报价-行额外 事件 */
                viewPurchaseQuoteItemExtraEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.table = new sap.extension.table.DataTable("", {
                        enableSelectAll: false,
                        visibleRowCount: sap.extension.table.visibleRowCount(6),
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.MenuButton("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_materialspecification"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.addPurchaseQuoteItemExtraEvent, materials.bo.MaterialSpecification.BUSINESS_OBJECT_CODE);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("purchase_extra_attachment"),
                                                press: function (): void {
                                                    document.getElementById(that.uploader.getId() + "-fu").click();
                                                }
                                            }),
                                        ]
                                    })
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://less",
                                    press: function (): void {
                                        that.fireViewEvents(that.removePurchaseQuoteItemExtraEvent, that.table.getSelecteds());
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deletePurchaseQuoteItemExtraEvent, that.table.getSelecteds().firstOrDefault());
                                    }
                                }),
                                new sap.m.ToolbarSpacer(""),
                                this.uploader = new sap.ui.unified.FileUploader("", {
                                    buttonOnly: true,
                                    iconOnly: true,
                                    multiple: false,
                                    uploadOnChange: false,
                                    width: "auto",
                                    style: "Transparent",
                                    change: function (oEvent: sap.ui.base.Event): void {
                                        let files: File[] = oEvent.getParameter("files");
                                        if (ibas.objects.isNull(files) || files.length === 0) {
                                            return;
                                        }
                                        let fileData: FormData = new FormData();
                                        fileData.append("file", files[0], encodeURI(files[0].name));
                                        that.fireViewEvents(that.addPurchaseQuoteItemExtraEvent, fileData);
                                    },
                                }),
                            ]
                        }),
                        rowActionCount: 1,
                        rowActionTemplate: new sap.ui.table.RowAction("", {
                            items: [
                                new sap.ui.table.RowActionItem("", {
                                    icon: "sap-icon://display",
                                    press: function (oEvent: any): void {
                                        that.fireViewEvents(that.viewPurchaseQuoteItemExtraEvent,
                                            // 获取当前对象
                                            this.getBindingContext().getObject()
                                        );
                                    },
                                }),
                            ]
                        }),
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitemextra_extratype"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "extraType",
                                    formatter(data: any): any {
                                        if (data === app.EXTRA_ATTACHMENT) {
                                            return ibas.i18n.prop("purchase_extra_attachment");
                                        }
                                        return ibas.businessobjects.describe(data);
                                    }
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitemextra_extrakey"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "extraKey",
                                    formatter(data: any): any {
                                        if (ibas.objects.isNull(this.getBindingContext())) {
                                            return data;
                                        }
                                        let bindingdata: bo.PurchaseQuoteItemExtra = this.getBindingContext().getObject();
                                        if (ibas.objects.isNull(bindingdata)) {
                                            return data;
                                        }
                                        if (bindingdata.extraType === app.EXTRA_ATTACHMENT) {
                                            return bindingdata.note;
                                        }
                                        return data;
                                    }
                                }),
                                width: "100%",
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitemextra_quantity"),
                                template: new sap.extension.m.Input("", {

                                }).bindProperty("bindingValue", {
                                    path: "quantity",
                                    type: new sap.extension.data.Quantity(),
                                })
                            }),
                        ],
                        sortProperty: "visOrder",
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        contentWidth: "60%",
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Label("", {
                                    text: ibas.i18n.prop("purchase_summary"),
                                }).addStyleClass("sapUiSmallMarginBegin"),
                                this.input = new sap.m.Input("", {
                                    editable: false,
                                }).addStyleClass("sapUiSmallMarginBegin"),
                            ]
                        }),
                        content: [
                            this.table
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_confirm"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private table: sap.extension.table.Table;
                private input: sap.m.Input;
                private uploader: sap.ui.unified.FileUploader;
                /** 显示数据 */
                showData(data: bo.PurchaseQuoteItem): void {
                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                    builder.map(null, "");
                    builder.map(undefined, "");
                    builder.append("#");
                    builder.append(data.lineId);
                    builder.append(", ");
                    builder.append(data.itemCode);
                    builder.append("-");
                    builder.append(data.itemDescription);
                    builder.append(" * ");
                    builder.append(data.quantity ? data.quantity : 0);
                    builder.append(data.uom);
                    this.input.setValue(builder.toString());
                }
                /** 显示额外数据 */
                showExtraDatas(datas: bo.PurchaseQuoteItemExtra[]): void {
                    this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}