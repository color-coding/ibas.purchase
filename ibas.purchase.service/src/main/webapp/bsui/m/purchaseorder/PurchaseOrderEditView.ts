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
export class PurchaseOrderEditView extends ibas.BOEditView implements IPurchaseOrderEditView {
    private page: sap.m.Page;
    private mainLayout: sap.ui.layout.VerticalLayout;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;
    private tablePurchaseOrderItem: sap.m.List;
    private childEditForm: sap.ui.layout.form.SimpleForm;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加采购订单-行事件 */
    addPurchaseOrderItemEvent: Function;
    /** 删除采购订单-行事件 */
    removePurchaseOrderItemEvent: Function;
    /** 选择采购订单客户事件 */
    choosePurchaseOrderSupplierEvent: Function;
    /** 选择采购订单行物料事件 */
    choosePurchaseOrderItemMaterialEvent: Function;
    /** 选择采购订单行仓库事件 */
    choosePurchaseOrderItemWarehouseEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
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
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("trainingtesting_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliercode") }),
                new sap.m.Input("", {
                    placeholder: ibas.i18n.prop("bo_purchaseorder_suppliercode"),
                    tooltip: ibas.i18n.prop("bo_purchaseorder_suppliercode"),
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.choosePurchaseOrderSupplierEvent);
                    }
                }).bindProperty("value", {
                    path: "supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliername") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("value", {
                    path: "/supplierName"
                }),
                // new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_date_information")}),
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
                // new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_docstatus_information")}),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_status")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emBOStatus)
                }).bindProperty("selectedKey", {
                    path: "/status",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_documentstatus")}),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "/documentStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("",{text: ibas.i18n.prop("bo_purchaseorder_approvalstatus")}),
                new sap.m.Select("", {
                    items: utils.createComboBoxItems(ibas.emApprovalStatus)
                }).bindProperty("selectedKey", {
                    path: "/approvalStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_canceled") }),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "canceled",
                    type: "sap.ui.model.type.Integer"
                })
            ]
        });
        this.viewBottomForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                // new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchaseorder_remarks") }),
                new sap.m.TextArea("", {
                    rows: 3,
                }).bindProperty("value", {
                    path: "/remarks"
                }),
                // new sap.ui.core.Title("",{text: ibas.i18n.prop("purchase_finance_information")}),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documenttotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_taxrate") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_taxtotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discount") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discounttotal") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "/discountTotal"
                }),
            ]
        });
        // 子对象列表
        this.tablePurchaseOrderItem = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.None,
            selectionMode: sap.ui.table.SelectionMode.None,
            headerToolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Title("", {
                        text: "单据行",
                        level: "H2"
                    }),
                    // 添加子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        visible: true,
                        press: function (): void {
                            // 重写添加行事件。以适应移动端操作
                            that.addPurchaseOrderItemEvent = function (): void {
                                that.childEditForm.setModel(new sap.ui.model.json.JSONModel(this.editData.PurchaseOrderItems.create()));
                                that.childEditForm.bindObject("/");
                                this.view.showPurchaseOrderItems(this.editData.PurchaseOrderItems.filterDeleted());
                            };
                            that.fireViewEvents(that.addPurchaseOrderItemEvent);
                            that.tablePurchaseOrderItem.swipeOut(null);
                            mainSplit.setShowSecondaryContent(false);
                        }
                    })
                ]
            }),
            swipeContent: new sap.m.Toolbar("", {
                content: [
                    // 编辑子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Accept,
                        icon: "sap-icon://edit",
                        press(oEvent: any): void {
                            let parentControl: any = oEvent.getSource().getParent().getParent();
                            var editBo: bo.PurchaseOrderItem = parentControl.getSwipedItem().getBindingContext().getObject();
                            that.childEditForm.setModel(new sap.ui.model.json.JSONModel(editBo));
                            that.childEditForm.bindObject("/");
                            mainSplit.setShowSecondaryContent(false);
                            that.tablePurchaseOrderItem.swipeOut(null);
                        }
                    }),
                    // 删除子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Reject,
                        icon: "sap-icon://delete",
                        press(oEvent: any): void {
                            let parentControl: any = oEvent.getSource().getParent().getParent();
                            var deleteBo: bo.PurchaseOrderItem = parentControl.getSwipedItem().getBindingContext().getObject();
                            that.fireViewEvents(that.removePurchaseOrderItemEvent,
                                deleteBo
                            );
                            that.tablePurchaseOrderItem.swipeOut(null);
                        }
                    }),
                ]
            }),
        });
        let list_child_customer: sap.m.ObjectListItem = new sap.m.ObjectListItem("", {
            title: "{itemCode}",
            type: "Active",
            attributes: [
                new sap.m.ObjectAttribute("", {
                    text: "{price} * {quantity}",
                    type: sap.ui.model.type.Integer,
                })
            ]
        });
        list_child_customer.bindProperty("number", {
            parts: [{ path: "lineTotal" }],
            type: sap.ui.model.type.Currency,
            formatOptions: { showMeasure: false }
        });
        that.tablePurchaseOrderItem.bindItems({
            path: "/rows",
            template: list_child_customer,
        });
        this.mainLayout = new sap.ui.layout.VerticalLayout("", {
            height: "100%",
            content: [
                this.viewTopForm,
                this.tablePurchaseOrderItem,
                this.viewBottomForm,
            ]
        });
        let screencontainer: sap.m.ScrollContainer = new sap.m.ScrollContainer("", {
            vertical: true,
            horizontal: false,
            height: "100%",
            content: [
                this.mainLayout
            ]
        });
        // 子对象编辑页
        this.childEditForm = new sap.ui.layout.form.SimpleForm("", {
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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_linestatus") }),
                new sap.m.SegmentedButton("", {
                    width: "100%",
                    items: utils.createSegmentedButtonItems(ibas.emDocumentStatus)
                }).bindProperty("selectedKey", {
                    path: "lineStatus",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_itemcode") }),
                new sap.m.Input("", {
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
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_price") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "price"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_quantity") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number
                }).bindProperty("value", {
                    path: "quantity"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_linetotal") }),
                new sap.m.Input("", {
                    width: "100%",
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "lineTotal"
                }),
            ]
        });
        let childPage: sap.m.Page = new sap.m.Page("", {
            showHeader: false,
            footer: new sap.m.Toolbar("", {
                content: [
                    new sap.m.ToolbarSpacer(""),
                    // 删除子对象
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            let deleteBo: bo.PurchaseOrderItem = that.childEditForm.getBindingContext().getObject();
                            that.fireViewEvents(that.removePurchaseOrderItemEvent,
                                deleteBo
                            );
                            mainSplit.setShowSecondaryContent(true);
                        }
                    }),
                    // 编辑子对象完成
                    new sap.m.Button("", {
                        text: "完成",
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            mainSplit.setShowSecondaryContent(true);
                        }
                    })
                ]
            }),
            content: [this.childEditForm]
        });
        let mainSplit: sap.ui.unified.SplitContainer = new sap.ui.unified.SplitContainer("", {
            showSecondaryContent: true,
            orientation: sap.ui.core.Orientation.Horizontal,
            secondaryContentWidth: "100%",
        });
        mainSplit.addSecondaryContent(screencontainer);
        mainSplit.addContent(childPage);
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
            content: [mainSplit]
        });
        this.id = this.page.getId();
        return this.page;
    }
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
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED
            || data.documentStatus === ibas.emDocumentStatus.CLOSED
            || data.canceled === ibas.emYesNo.YES) {
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
        this.mainLayout.bindObject("/");
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.mainLayout, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
    /** 显示数据 */
    showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void {
        this.tablePurchaseOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.tablePurchaseOrderItem, datas);
    }
}