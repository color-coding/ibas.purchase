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
             * 编辑视图-采购订单
             */
            export class PurchaseOrderEditView extends ibas.BOEditView implements app.IPurchaseOrderEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加采购订单-行事件 */
                addPurchaseOrderItemEvent: Function;
                /** 删除采购订单-行事件 */
                removePurchaseOrderItemEvent: Function;
                /** 选择采购订单供应商信息 */
                choosePurchaseOrderSupplierEvent: Function;
                /** 选择采购订单价格清单信息 */
                choosePurchaseOrderPriceListEvent: Function;
                /** 选择采购订单-行物料主数据 */
                choosePurchaseOrderItemMaterialEvent: Function;
                /** 选择采购订单-行 仓库 */
                choosePurchaseOrderItemWarehouseEvent: Function;
                /** 选择采购订单-行 物料序列事件 */
                choosePurchaseOrderItemMaterialSerialEvent: Function;
                /** 选择采购订单-行 物料批次事件 */
                choosePurchaseOrderItemMaterialBatchEvent: Function;
                /** 选择采购订单-采购报价事件 */
                choosePurchaseOrderPurchaseQuoteEvent: Function;
                /** 付款采购订单 */
                paymentPurchaseOrderEvent: Function;
                /** 编辑地址事件 */
                editShippingAddressesEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.textAddress = new sap.m.TextArea("", {
                        rows: 3,
                        editable: false,
                    });
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliercode") }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.choosePurchaseOrderSupplierEvent);
                                }
                            }).bindProperty("value", {
                                path: "supplierCode"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliername") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "supplierName"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_contactperson") }),
                            new sap.m.ex.BOChooseInput("", {
                                boText: "name",
                                boKey: "objectKey",
                                boCode: ibas.config.applyVariables(businesspartner.bo.BO_CODE_CONTACTPERSON),
                                repositoryName: businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER,
                                criteria: businesspartner.app.conditions.contactperson.create(businesspartner.bo.emBusinessPartnerType.SUPPLIER, "{supplierCode}"),
                                bindingValue: {
                                    path: "contactPerson"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_pricelist") }),
                            new sap.m.ex.BOInput("", {
                                boText: "name",
                                boKey: "objectKey",
                                boCode: ibas.config.applyVariables(materials.bo.BO_CODE_MATERIALPRICELIST),
                                repositoryName: materials.bo.BO_REPOSITORY_MATERIALS,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.choosePurchaseOrderPriceListEvent);
                                },
                                bindingValue: {
                                    path: "priceList"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_reference1") }),
                            new sap.m.Input("", {}).bindProperty("value", {
                                path: "reference1"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_reference2") }),
                            new sap.m.Input("", {}).bindProperty("value", {
                                path: "reference2"
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_docentry") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "docEntry"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documentstatus") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                            }).bindProperty("selectedKey", {
                                path: "documentStatus",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_canceled") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emYesNo),
                            }).bindProperty("selectedKey", {
                                path: "canceled",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documentdate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "documentDate",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_deliverydate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "deliveryDate",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_consumer") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "consumer"
                            }),
                        ]
                    });
                    this.tablePurchaseOrderItem = new sap.ui.table.Table("", {
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.MenuButton("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_add_line"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.addPurchaseOrderItemEvent);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_purchasequote"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePurchaseOrderPurchaseQuoteEvent);
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
                                        that.fireViewEvents(that.removePurchaseOrderItemEvent,
                                            // 获取表格选中的对象
                                            openui5.utils.getSelecteds<bo.PurchaseOrderItem>(that.tablePurchaseOrderItem)
                                        );
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("purchase_material_batch"), ibas.i18n.prop("purchase_material_serial")),
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("purchase_material_batch"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePurchaseOrderItemMaterialBatchEvent);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("purchase_material_serial"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePurchaseOrderItemMaterialSerialEvent);
                                                }
                                            }),
                                        ]
                                    })
                                })
                            ]
                        }),
                        enableSelectAll: false,
                        selectionBehavior: sap.ui.table.SelectionBehavior.Row,
                        visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 8),
                        rows: "{/rows}",
                        columns: [
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_lineid"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "lineId",
                                }),
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_linestatus"),
                                template: new sap.m.Select("", {
                                    width: "100%",
                                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                                }).bindProperty("selectedKey", {
                                    path: "lineStatus",
                                    type: "sap.ui.model.type.Integer",
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_itemcode"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    showValueHelp: true,
                                    valueHelpRequest: function (): void {
                                        that.fireViewEvents(that.choosePurchaseOrderItemMaterialEvent,
                                            // 获取当前对象
                                            this.getBindingContext().getObject()
                                        );
                                    }
                                }).bindProperty("value", {
                                    path: "itemCode"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_itemdescription"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "itemDescription"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_warehouse"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    showValueHelp: true,
                                    valueHelpRequest: function (): void {
                                        that.fireViewEvents(that.choosePurchaseOrderItemWarehouseEvent,
                                            // 获取当前对象
                                            this.getBindingContext().getObject()
                                        );
                                    }
                                }).bindProperty("value", {
                                    path: "warehouse"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_quantity"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    type: sap.m.InputType.Number
                                }).bindProperty("value", {
                                    path: "quantity",
                                    type: new openui5.datatype.Quantity(),
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_uom"),
                                template: new sap.m.Text("", {
                                    width: "100%",
                                    wrapping: false
                                }).bindProperty("text", {
                                    path: "uom"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_price"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    type: sap.m.InputType.Number
                                }).bindProperty("value", {
                                    path: "price",
                                    type: new openui5.datatype.Price(),
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_purchaseorderitem_linetotal"),
                                template: new sap.m.Text("", {
                                    width: "100%",
                                    wrapping: false
                                }).bindProperty("text", {
                                    path: "lineTotal",
                                    type: new openui5.datatype.Sum(),
                                })
                            }),
                        ]
                    });
                    let formMiddle: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchaseorderitem") }),
                            this.tablePurchaseOrderItem,
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_dataowner") }),
                            new sap.m.ex.DataOwnerInput("", {
                                bindingValue: {
                                    path: "dataOwner"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress") }),
                            new sap.m.HBox("", {
                                width: "100%",
                                items: [
                                    new sap.m.Select("", {
                                        width: "100%",
                                        layoutData: new sap.m.FlexItemData("", {
                                            growFactor: 12
                                        }),
                                        change(oControlEvent: sap.ui.base.Event): void {
                                            let item: sap.ui.core.Item = oControlEvent.getParameters().selectedItem;
                                            let index: number = (<any>oControlEvent.getSource()).indexOfItem(item);
                                            let data: bo.ShippingAddress = (<any>item.getModel()).getData().shippingAddresss[index];
                                            if (!ibas.objects.isNull(data)) {
                                                // 显示摘要
                                                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                                builder.valueUndefined = "";
                                                builder.valueNull = "";
                                                builder.append(ibas.i18n.prop("bo_shippingaddress_consignee") + ": ");
                                                builder.append(data.consignee);
                                                builder.append(" ");
                                                builder.append(data.mobilePhone);
                                                builder.append("\n");
                                                builder.append(ibas.i18n.prop("bo_shippingaddress") + ": ");
                                                builder.append(data.country);
                                                builder.append(data.province);
                                                builder.append(data.city);
                                                builder.append(data.district);
                                                builder.append(data.street);
                                                builder.append("\n");
                                                builder.append(ibas.i18n.prop("bo_shippingaddress_trackingnumber") + ": ");
                                                builder.append(data.trackingNumber);
                                                builder.append(" ");
                                                builder.append(ibas.i18n.prop("bo_shippingaddress_expense") + ": ");
                                                builder.append(data.expense);
                                                builder.append(" ");
                                                builder.append(data.currency);
                                                that.textAddress.setValue(builder.toString());
                                            } else {
                                                that.textAddress.setValue(null);
                                            }
                                        }
                                    }).bindItems({
                                        path: "shippingAddresss",
                                        template: new sap.ui.core.ListItem("", {
                                            key: {
                                                path: "objectKey"
                                            },
                                            text: {
                                                path: "name"
                                            }
                                        })
                                    }),
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://value-help",
                                        layoutData: new sap.m.FlexItemData("", {
                                            maxWidth: "32px"
                                        }),
                                        press: function (): void {
                                            that.fireViewEvents(that.editShippingAddressesEvent);
                                        }
                                    }),
                                ]
                            }),
                            new sap.m.Label("", {}),
                            this.textAddress,
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_remarks") }),
                            new sap.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("value", {
                                path: "remarks",
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_total") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discount") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "discount",
                                type: new openui5.datatype.Percentage(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discounttotal") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "discountTotal",
                                type: new openui5.datatype.Sum(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_shippingsexpensetotal") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "shippingsExpenseTotal",
                                type: new openui5.datatype.Sum(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documenttotal") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "documentTotal",
                                type: new openui5.datatype.Sum(),
                            }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "documentCurrency"
                            }),
                        ]
                    });
                    this.layoutMain = new sap.ui.layout.VerticalLayout("", {
                        content: [
                            formTop,
                            formMiddle,
                            formBottom,
                        ]
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                            ]
                        }),
                        content: [this.layoutMain]
                    });
                    return this.page;
                }
                private page: sap.m.Page;
                private tablePurchaseOrderItem: sap.ui.table.Table;
                private layoutMain: sap.ui.layout.VerticalLayout;
                private textAddress: sap.m.TextArea;
                /** 改变视图状态 */
                private changeViewStatus(data: bo.PurchaseOrder): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                    }
                    // 不可编辑：已批准，
                    if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                        openui5.utils.changeFormEditable(this.layoutMain, false);
                    }
                }

                /** 显示数据 */
                showPurchaseOrder(data: bo.PurchaseOrder): void {
                    this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.layoutMain, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
                /** 显示数据 */
                showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void {
                    this.tablePurchaseOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.tablePurchaseOrderItem, datas);
                }
            }
        }
    }
}