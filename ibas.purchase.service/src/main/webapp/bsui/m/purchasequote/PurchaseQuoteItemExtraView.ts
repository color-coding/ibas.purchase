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
                    this.list = new sap.extension.m.List("", {
                        inset: false,
                        growing: false,
                        mode: sap.m.ListMode.None,
                        swipeDirection: sap.m.SwipeDirection.RightToLeft,
                        swipeContent: new sap.m.FlexBox("", {
                            height: "100%",
                            alignItems: sap.m.FlexAlignItems.Start,
                            justifyContent: sap.m.FlexJustifyContent.End,
                            items: [
                                new sap.m.SegmentedButton("", {
                                    width: "3rem",
                                    items: [
                                        new sap.m.SegmentedButtonItem("", {
                                            width: "3rem",
                                            icon: "sap-icon://delete",
                                            press(oEvent: any): void {
                                                that.fireViewEvents(that.removePurchaseQuoteItemExtraEvent, that.list.getSelecteds());
                                            }
                                        }),
                                    ]
                                }),
                            ]
                        }).addStyleClass("sapUiSmallMarginTop"),
                        swipe: function (event: sap.ui.base.Event): void {
                        },
                        headerToolbar: new sap.m.Toolbar("", {
                            content: [
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
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.MenuButton("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("purchase_extra_attachment"),
                                                press: function (): void {
                                                    document.getElementById(that.uploader.getId() + "-fu").click();
                                                }
                                            }),
                                        ]
                                    })
                                }),
                            ]
                        }),
                        items: {
                            path: "/rows",
                            template: new sap.m.ObjectListItem("", {
                                title: {
                                    path: "extraType",
                                    formatter(data: any): any {
                                        if (data === app.EXTRA_ATTACHMENT) {
                                            return ibas.i18n.prop("purchase_extra_attachment");
                                        }
                                        return ibas.businessobjects.describe(data);
                                    }
                                },
                                number: {
                                    path: "quantity",
                                    type: new sap.extension.data.Quantity(),
                                },
                                attributes: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasequoteitemextra_extrakey"),
                                        bindingValue: {
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
                                        }
                                    }),
                                ]
                            })
                        },
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: true,
                        verticalScrolling: true,
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
                            this.list
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
                private list: sap.extension.m.List;
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
                    this.list.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}