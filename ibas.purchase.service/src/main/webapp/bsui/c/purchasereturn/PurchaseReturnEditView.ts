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
import { IPurchaseReturnEditView } from "../../../bsapp/purchasereturn/index";

/**
 * 编辑视图-采购退货
 */
export class PurchaseReturnEditView extends ibas.BOEditView implements IPurchaseReturnEditView {
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购退货-行事件 */
    addPurchaseReturnItemEvent: Function;
    /** 删除采购退货-行事件 */
    removePurchaseReturnItemEvent: Function;
    /** 选择供应商 */
    choosePurchaseReturnSupplierEvent: Function;
    /** 选择物料 */
    choosePurchaseReturnItemMaterialEvent: Function;
    /** 选择仓库 */
    choosePurchaseReturnItemWarehouseEvent: Function;

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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_suppliercode") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.choosePurchaseReturnSupplierEvent);
                    }
                }).bindProperty("value", {
                    path: "/supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_suppliername") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/supplierName"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_contactperson") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/contactPerson"
                }),

                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_date_information")}),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_postingdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/postingDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documentdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/documentDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_deliverydate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "/deliveryDate"
                }),
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_refrence_information")}),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchasereturn_reference1")}),
                new sap.m.Input("",{}).bindProperty("value",{
                    path:"/reference1"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchasereturn_reference2")}),
                new sap.m.Input("",{}).bindProperty("value",{
                    path:"/reference2"
                }),
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_docstatus_information")}),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchasereturn_status")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emBOStatus)
                }).bindProperty("selectedKey", {
                    path: "/status"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchasereturn_documentstatus")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "/documentStatus"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchasereturn_approvalstatus")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emApprovalStatus)
                }).bindProperty("selectedKey", {
                    path: "/approvalStatus"
                }),
            ]
        });
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
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchasereturn_remarks")}),
                new sap.m.TextArea("",{}).bindProperty("value",{
                    path:"/remarks"
                }),
                new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_finance_information")}),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_documenttotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_taxrate") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_taxtotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_discount") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasereturn_discounttotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/discountTotal"
                }),
            ]
        }),
        this.tablePurchaseReturnItem = new sap.ui.table.Table("", {
            extension: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        press: function (): void {
                            that.fireViewEvents(that.addPurchaseReturnItemEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_remove"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://less",
                        press: function (): void {
                            that.fireViewEvents(that.removePurchaseReturnItemEvent,
                                // 获取表格选中的对象
                                utils.getTableSelecteds<bo.PurchaseReturnItem>(that.tablePurchaseReturnItem)
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
                    label: ibas.i18n.prop("bo_purchasereturnitem_itemcode"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        showValueHelp: true,
                        valueHelpRequest: function (): void {
                            that.fireViewEvents(that.choosePurchaseReturnItemMaterialEvent,
                                // 获取当前对象
                                this.getBindingContext().getObject()
                            );
                        }
                    }).bindProperty("value", {
                        path: "itemCode"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_warehouse"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        showValueHelp: true,
                        valueHelpRequest: function (): void {
                            that.fireViewEvents(that.choosePurchaseReturnItemWarehouseEvent,
                                // 获取当前对象
                                this.getBindingContext().getObject()
                            );
                        }
                    }).bindProperty("value", {
                        path: "warehouse"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_quantity"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "quantity"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_price"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "price"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_taxrate"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "taxRate"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_distributionrule1"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "distributionrule1"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_distributionrule2"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "distributionrule2"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_distributionrule3"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "distributionrule3"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_uom"),
                    template: new sap.m.Input("", {
                        width: "100%",
                    }).bindProperty("value", {
                        path: "uom"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_taxtotal"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "taxTotal"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchasereturnitem_linetotal"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "lineTotal"
                    })
                }),
            ]
        });
        this.mainLayout = new sap.ui.layout.VerticalLayout("",{
            content: [
                this.topForm,
                this.tablePurchaseReturnItem,
                this.bottomForm
            ]
        });
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
    private tablePurchaseReturnItem: sap.ui.table.Table;
    private bottomForm: sap.ui.layout.form.SimpleForm;
    private mainLayout: sap.ui.layout.VerticalLayout;
    /** 改变视图状态 */
    private changeViewStatus(data: bo.PurchaseReturn): void {
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
    showPurchaseReturn(data: bo.PurchaseReturn): void {
        this.mainLayout.setModel(new sap.ui.model.json.JSONModel(data));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.mainLayout, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showPurchaseReturnItems(datas: bo.PurchaseReturnItem[]): void {
        this.tablePurchaseReturnItem.setModel(new sap.ui.model.json.JSONModel({rows: datas}));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.tablePurchaseReturnItem, datas);
    }
}
