/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { IPurchaseOrderEditView } from "../../../bsapp/purchaseorder/index";

/**
 * 编辑视图-采购订单
 */
export class PurchaseOrderEditView extends ibas.BOEditView implements IPurchaseOrderEditView {
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购订单-行事件 */
    addPurchaseOrderItemEvent: Function;
    /** 删除采购订单-行事件 */
    removePurchaseOrderItemEvent: Function;
    /** 选择供应商 */
    choosePurchaseOrderSupplierEvent: Function;
    /** 选择物料 */
    choosePurchaseOrderItemMaterialEvent: Function;
    /** 选择仓库 */
    choosePurchaseOrderItemWarehouseEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.topForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_supplier_information")}),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliercode") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.choosePurchaseOrderSupplierEvent);
                    }
                }).bindProperty("value", {
                    path: "/supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliername") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/supplierName"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_contactperson") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/contactPerson"
                }),

                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_date_information")}),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_postingdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/postingDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/documentDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_deliverydate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/deliveryDate"
                }),
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_refrence_information")}),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_reference1")}),
                new sap.m.Input("",{}).bindProperty("value",{
                    path:"/reference1"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_reference2")}),
                new sap.m.Input("",{}).bindProperty("value",{
                    path:"/reference2"
                }),
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_docstatus_information")}),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_status")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emBOStatus)
                }).bindProperty("selectedKey", {
                    path: "/status"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_documentstatus")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "/documentStatus"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_approvalstatus")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emApprovalStatus)
                }).bindProperty("selectedKey", {
                    path: "/approvalStatus"
                }),
            ]
        });
        this.topForm.addContent(new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchaseorderitem") }));
        this.bottomForm = new sap.ui.layout.form.SimpleForm("",{
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_remark_information")}),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_remarks")}),
                new sap.m.TextArea("",{}).bindProperty("value",{
                    path:"/remarks"
                }),
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_finance_information")}),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documenttotal") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_taxrate") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_taxtotal") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discount") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discounttotal") }),
                new sap.m.Input("", {
                    editable: false,
                }).bindProperty("value", {
                    path: "/discountTotal"
                }),
            ]
        }),
        this.tablePurchaseOrderItem = new sap.ui.table.Table("", {
            extension: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        press: function (): void {
                            that.fireViewEvents(that.addPurchaseOrderItemEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_remove"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://less",
                        press: function (): void {
                            that.fireViewEvents(that.removePurchaseOrderItemEvent,
                                // 获取表格选中的对象
                                utils.getTableSelecteds<bo.PurchaseOrderItem>(that.tablePurchaseOrderItem)
                            );
                        }
                    })
                ]
            }),
            enableSelectAll: false,
            visibleRowCount: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            rows: "{/rows}",
            columns: [
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
                        path: "quantity"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_price"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "price"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_taxrate"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "taxRate"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_distributionrule1"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "distributionrule1"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_distributionrule2"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "distributionrule2"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_distributionrule3"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "distributionrule3"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_uom"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "uom"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_taxtotal"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "taxTotal"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_linetotal"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "lineTotal"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_linestatus"),
                    template: new sap.m.Select("", {
                        width: "100%",
                        items: utils.createComboBoxItems(ibas.emDocumentStatus),
                    }).bindProperty("selectedKey", {
                        path: "lineStatus",
                        type: "sap.ui.model.type.Integer",
                    })
                }),
            ]
        });
        this.topForm.addContent(this.tablePurchaseOrderItem);
        this.mainLayout = new sap.ui.layout.VerticalLayout("",{
            content: [
                this.topForm,
                this.tablePurchaseOrderItem,
                this.bottomForm
            ]
        }),
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            that.fireViewEvents(that.deleteDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.i18n.prop("sys_shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        buttonMode: sap.m.MenuButtonMode.Split,
                        defaultAction: function (): void {
                            // 触发新建对象
                            that.fireViewEvents(that.createDataEvent, false);
                        },
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_new"),
                                    icon: "sap-icon://create"
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_clone"),
                                    icon: "sap-icon://copy"
                                }),
                            ],
                            itemSelected: function (event: any): void {
                                let item: any = event.getParameter("item");
                                if (item instanceof sap.m.MenuItem) {
                                    if (item.getIcon() === "sap-icon://copy") {
                                        // 触发克隆对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    } else {
                                        // 触发新建对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }
                            }
                        })
                    }),
                ]
            }),
            content: [this.mainLayout]
        });
        this.id = this.page.getId();
        return this.page;
    }
    private page: sap.m.Page;
    private topForm: sap.ui.layout.form.SimpleForm;
    private tablePurchaseOrderItem: sap.ui.table.Table;
    private bottomForm: sap.ui.layout.form.SimpleForm;
    private mainLayout: sap.ui.layout.VerticalLayout;
    /** 改变视图状态 */
    private changeViewStatus(data: bo.PurchaseOrder): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            utils.changeFormEditable(this.mainLayout, false);
        }
    }

    /** 显示数据 */
    showPurchaseOrder(data: bo.PurchaseOrder): void {
        this.mainLayout.setModel(new sap.ui.model.json.JSONModel(data));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.mainLayout, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void {
        this.tablePurchaseOrderItem.setModel(new sap.ui.model.json.JSONModel({rows: datas}));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.tablePurchaseOrderItem, datas);
    }
}
