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
import { IPurchaseReturnViewView } from "../../../bsapp/purchasereturn/index";

/**
 * 查看视图-采购退货
 */
export class PurchaseReturnViewView extends ibas.BOViewView implements IPurchaseReturnViewView {

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
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_supplier_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_suppliercode") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/supplierCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_suppliername") }),
                new sap.m.Text("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("text", {
                    path: "/supplierName"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_contactperson") }),
                new sap.m.Text("", {
                    showValueHelp: true,
                    editable: false,
                }).bindProperty("text", {
                    path: "/contactPerson"
                }),

                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_date_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_postingdate") }),
                new sap.m.Text("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("text", {
                    path: "/postingDate",
                    type: "sap.ui.model.type.Date",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documentdate") }),
                new sap.m.Text("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("text", {
                    path: "/documentDate",
                    type: "sap.ui.model.type.Date",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_deliverydate") }),
                new sap.m.Text("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat:ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("text", {
                    path: "/deliveryDate",
                    type: "sap.ui.model.type.Date",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_finance_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documenttotal") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/documentTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_taxrate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/taxRate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_taxtotal") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/taxTotal"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_discount") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/discount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_discounttotal") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/discountTotal"
                }),

                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_docstatus_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_status") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/status",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emBOStatus, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_documentstatus") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/documentStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_approvalstatus") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "/approvalStatus",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emDocumentStatus, data);
                    }
                }),

            ]
        });
        this.bottomForm = new sap.ui.layout.form.SimpleForm("", {
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
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_refrence_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_reference1") }),
                new sap.m.Text("", {}).bindProperty("text", {
                    path: "/reference1"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_reference2") }),
                new sap.m.Text("", {}).bindProperty("text", {
                    path: "/reference2"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_remark_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_purchasedelivery_remarks") }),
                new sap.m.Text("", {}).bindProperty("text", {
                    path: "/remarks"
                }),

            ]
        });
        this.tablePurchaseReturnItem = new sap.ui.table.Table("", {
            enableSelectAll: false,
            visibleRowCount: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 5),
            rows: "{/rows}",
            columns: [
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_itemcode"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "itemCode"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_warehouse"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "warehouse"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_quantity"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "quantity"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_distributionrule1"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "distributionrule1"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_distributionrule2"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "distributionrule2"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_distributionrule3"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "distributionrule3"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_price"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "price"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_uom"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "uom"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_taxrate"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "taxRate"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_taxtotal"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "taxTotal"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_purchaseorderitem_linetotal"),
                    template: new sap.m.Text("", {
                        width: "100%",
                    }).bindProperty("text", {
                        path: "lineTotal"
                    })
                }),
            ]
        });
        this.mainLayout = new sap.ui.layout.VerticalLayout("", {
            content: [
                this.topForm,
                this.tablePurchaseReturnItem,
                this.bottomForm
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
                            that.fireViewEvents(that.callServicesEvent, {
                                displayServices(services: ibas.IServiceAgent[]): void {
                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                        return;
                                    }
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                    });
                                    for (let service of services) {
                                        popover.addContent(new sap.m.Button({
                                            text: ibas.i18n.prop(service.name),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: service.icon,
                                            press: function (): void {
                                                service.run();
                                                popover.close();
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
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

    /** 显示数据 */
    showPurchaseReturn(data: bo.PurchaseReturn): void {
        this.mainLayout.setModel(new sap.ui.model.json.JSONModel(data));
    }
    /** 显示数据 */
    showPurchaseReturnItems(datas: bo.PurchaseReturnItem[]): void {
        this.tablePurchaseReturnItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }
}
