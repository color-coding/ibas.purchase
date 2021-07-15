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
            /** 编辑视图-采购订单 */
            export class PurchaseOrderEditView extends ibas.BOEditView implements app.IPurchaseOrderEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加采购订单-行事件 */
                addPurchaseOrderItemEvent: Function;
                /** 删除采购订单-行事件 */
                removePurchaseOrderItemEvent: Function;
                choosePurchaseOrderSupplierEvent: Function;
                choosePurchaseOrderContactPersonEvent: Function;
                choosePurchaseOrderPriceListEvent: Function;
                choosePurchaseOrderItemMaterialEvent: Function;
                choosePurchaseOrderItemWarehouseEvent: Function;
                choosePurchaseOrderItemMaterialSerialEvent: Function;
                choosePurchaseOrderItemMaterialBatchEvent: Function;
                showPurchaseOrderItemExtraEvent: Function;
                choosePurchaseOrderPurchaseQuoteEvent: Function;
                choosePurchaseOrderPurchaseRequestEvent: Function;
                receiptPurchaseOrderEvent: Function;
                editShippingAddressesEvent: Function;
                defaultWarehouse: string;
                defaultTaxGroup: string;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.PurchaseOrder.BUSINESS_OBJECT_CODE,
                        },
                        userFieldsMode: "input",
                        showFooter: sap.ui.getCore().getConfiguration().getVersion().getMajor() >= 1
                            && sap.ui.getCore().getConfiguration().getVersion().getMinor() >= 73 ? false : true,
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.MenuButton("", {
                                    icon: "sap-icon://tags",
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
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.ToolbarSpacer(""),
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
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_purchaserequest"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePurchaseOrderPurchaseRequestEvent);
                                                }
                                            }),
                                        ]
                                    })
                                }),
                            ]
                        }),
                        sectionChange(event: sap.ui.base.Event): void {
                            let section: any = event.getParameter("section");
                            if (section instanceof sap.uxap.ObjectPageSection) {
                                if (section.getTitle() === ibas.i18n.prop("bo_purchaseorderitem")) {
                                    that.page.setShowFooter(true);
                                } else {
                                    that.page.setShowFooter(false);
                                }
                            }
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data ? data : "0");
                                }
                            },
                            objectSubtitle: {
                                parts: [
                                    {
                                        path: "supplierName",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "supplierCode",
                                        type: new sap.extension.data.Alphanumeric(),
                                        formatter(data: string): any {
                                            if (ibas.strings.isEmpty(data)) {
                                                return "";
                                            }
                                            return ibas.strings.format("({0})", data);
                                        }
                                    }
                                ],
                            },
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    hideText: true,
                                    importance: sap.uxap.Importance.High,
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://copy",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    press: function (): void {
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Low,
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    text: ibas.i18n.prop("shell_data_services"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press(event: sap.ui.base.Event): void {
                                        ibas.servicesManager.showServices({
                                            proxy: new ibas.BOServiceProxy({
                                                data: that.page.getModel().getData(),
                                                converter: new bo.DataConverter(),
                                            }),
                                            displayServices(services: ibas.IServiceAgent[]): void {
                                                if (ibas.objects.isNull(services) || services.length === 0) {
                                                    return;
                                                }
                                                let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                    placement: sap.m.PlacementType.Bottom,
                                                    buttons: {
                                                        path: "/",
                                                        template: new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            text: {
                                                                path: "name",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? ibas.i18n.prop(data) : "";
                                                                }
                                                            },
                                                            icon: {
                                                                path: "icon",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? data : "sap-icon://e-care";
                                                                }
                                                            },
                                                            press(this: sap.m.Button): void {
                                                                let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                if (service) {
                                                                    service.run();
                                                                }
                                                            }
                                                        })
                                                    }
                                                });
                                                actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                actionSheet.openBy(event.getSource());
                                            }
                                        });
                                    }
                                }),
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                            new sap.extension.m.ObjectDocumentStatus("", {
                                title: ibas.i18n.prop("bo_purchaseorder_documentstatus"),
                                text: {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(true),
                                },
                            }),
                            new sap.extension.m.ObjectYesNoStatus("", {
                                title: ibas.i18n.prop("bo_purchaseorder_canceled"),
                                negative: true,
                                text: {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(true),
                                },
                                visible: {
                                    path: "canceled",
                                    formatter(data: ibas.emYesNo): boolean {
                                        return data === ibas.emYesNo.YES ? true : false;
                                    }
                                }
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_purchaseorder_deliverydate"),
                                bindingValue: {
                                    path: "deliveryDate",
                                    type: new sap.extension.data.Date(),
                                },
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_purchaseorder_documenttotal"),
                                bindingValue: {
                                    parts: [
                                        {
                                            path: "documentTotal",
                                            type: new sap.extension.data.Sum(),
                                        },
                                        {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    ]
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("purchase_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliercode") }),
                                                    new sap.extension.m.Input("", {
                                                        showValueHelp: true,
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseOrderSupplierEvent);
                                                        }
                                                    }).bindProperty("bindingValue", {
                                                        path: "supplierCode",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_suppliername") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "supplierName",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_contactperson") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                                        dataInfo: {
                                                            type: businesspartner.bo.ContactPerson,
                                                            key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                                            text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseOrderContactPersonEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "contactPerson",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_pricelist") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: materials.bo.BORepositoryMaterials,
                                                        dataInfo: {
                                                            type: materials.bo.MaterialPriceList,
                                                            key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                                            text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseOrderPriceListEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "priceList",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_reference1") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference1",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_reference2") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference2",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        })
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("purchase_title_status"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documentstatus") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emDocumentStatus
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentStatus",
                                                        type: new sap.extension.data.DocumentStatus()
                                                    }),
                                                    new sap.extension.m.TipsCheckBox("", {
                                                        text: ibas.i18n.prop("bo_purchaseorder_canceled"),
                                                        tipsOnSelection: ibas.i18n.prop(["shell_data_cancel", "shell_data_status"]),
                                                    }).bindProperty("bindingValue", {
                                                        path: "canceled",
                                                        type: new sap.extension.data.YesNo()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documentdate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_deliverydate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "deliveryDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_ordertype") }),
                                                    new sap.extension.m.PropertySelect("", {
                                                        dataInfo: {
                                                            code: bo.PurchaseOrder.BUSINESS_OBJECT_CODE,
                                                        },
                                                        propertyName: "orderType",
                                                    }).bindProperty("bindingValue", {
                                                        path: "orderType",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_consumer") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "consumer",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_purchaseorderitem"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.listPurchaseOrderItem = new sap.extension.m.List("", {
                                                inset: false,
                                                growing: false,
                                                width: "auto",
                                                mode: sap.m.ListMode.None,
                                                swipeDirection: sap.m.SwipeDirection.RightToLeft,
                                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                                showNoData: true,
                                                swipeContent: new sap.m.FlexBox("", {
                                                    height: "100%",
                                                    alignItems: sap.m.FlexAlignItems.Start,
                                                    justifyContent: sap.m.FlexJustifyContent.End,
                                                    items: [
                                                        new sap.m.SegmentedButton("", {
                                                            items: [
                                                                new sap.m.SegmentedButtonItem("", {
                                                                    width: "3rem",
                                                                    icon: "sap-icon://sap-box",
                                                                    press(oEvent: any): void {
                                                                        that.fireViewEvents(that.showPurchaseOrderItemExtraEvent,
                                                                            that.listPurchaseOrderItem.getSelecteds().firstOrDefault());
                                                                    }
                                                                }),
                                                                new sap.m.SegmentedButtonItem("", {
                                                                    width: "3rem",
                                                                    icon: "sap-icon://delete",
                                                                    press(oEvent: any): void {
                                                                        that.fireViewEvents(that.removePurchaseOrderItemEvent, that.listPurchaseOrderItem.getSelecteds());
                                                                    }
                                                                }),
                                                            ]
                                                        }),
                                                    ]
                                                }).addStyleClass("sapUiSmallMarginTop"),
                                                items: {
                                                    path: "/rows",
                                                    template: new sap.m.ObjectListItem("", {
                                                        title: "# {lineId}",
                                                        number: {
                                                            path: "lineStatus",
                                                            type: new sap.extension.data.DocumentStatus(true),
                                                        },
                                                        attributes: [
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_material"),
                                                                bindingValue: "{itemDescription} ({itemCode})"
                                                            }),
                                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_warehouse"),
                                                                bindingValue: {
                                                                    path: "warehouse",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                },
                                                                repository: materials.bo.BORepositoryMaterials,
                                                                dataInfo: {
                                                                    type: materials.bo.Warehouse,
                                                                    key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                                                    text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                                                },
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_purchaseorderitem_quantity"),
                                                                bindingValue: {
                                                                    parts: [
                                                                        {
                                                                            path: "quantity",
                                                                            type: new sap.extension.data.Quantity(),
                                                                        },
                                                                        {
                                                                            path: "uom",
                                                                            type: new sap.extension.data.Alphanumeric()
                                                                        },
                                                                    ]
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_purchaseorderitem_price"),
                                                                bindingValue: {
                                                                    parts: [
                                                                        {
                                                                            path: "price",
                                                                            type: new sap.extension.data.Price(),
                                                                        },
                                                                        {
                                                                            path: "currency",
                                                                            type: new sap.extension.data.Alphanumeric(),
                                                                        },
                                                                    ]
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_purchaseorderitem_linetotal"),
                                                                bindingValue: {
                                                                    parts: [
                                                                        {
                                                                            path: "lineTotal",
                                                                            type: new sap.extension.data.Sum(),
                                                                        },
                                                                        {
                                                                            path: "currency",
                                                                            type: new sap.extension.data.Alphanumeric(),
                                                                        },
                                                                    ]
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_purchaseorderitem_tax"),
                                                                bindingValue: {
                                                                    path: "taxRate",
                                                                    type: new sap.extension.data.Percentage(),
                                                                },
                                                                visible: {
                                                                    path: "taxRate",
                                                                    formatter(data: number): boolean {
                                                                        return data > 0 ? true : false;
                                                                    }
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                bindingValue: {
                                                                    path: "reference1",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                bindingValue: {
                                                                    path: "reference2",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                        ],
                                                        type: sap.m.ListType.Active,
                                                        press: function (oEvent: sap.ui.base.Event): void {
                                                            that.editPurchaseOrderItem(this.getBindingContext().getObject());
                                                        },
                                                    })
                                                },
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_discounttotal") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                        type: sap.m.InputType.Number
                                                    }).bindProperty("bindingValue", {
                                                        path: "discountTotal",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                        type: sap.m.InputType.Text
                                                    }).bindProperty("bindingValue", {
                                                        path: "discount",
                                                        type: new sap.extension.data.Percentage()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documenttaxtotal") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                        type: sap.m.InputType.Number
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentTaxTotal",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_documenttotal") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                        type: sap.m.InputType.Number
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentTotal",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentCurrency",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_paidtotal") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                        type: sap.m.InputType.Number
                                                    }).bindProperty("bindingValue", {
                                                        path: "paidTotal",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_shippingaddress"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_shippingaddress") }),
                                                    new component.ShippingAddressSelect("", {
                                                        editSelected(event: sap.ui.base.Event): void {
                                                            that.fireViewEvents(that.editShippingAddressesEvent);
                                                        }
                                                    }).bindProperty("bindingValue", {
                                                        path: "shippingAddresss",
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("purchase_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_dataowner") }),
                                                    new sap.extension.m.DataOwnerInput("", {
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_project") }),
                                                    new sap.extension.m.SelectionInput("", {
                                                        showValueHelp: true,
                                                        repository: accounting.bo.BORepositoryAccounting,
                                                        dataInfo: {
                                                            type: accounting.bo.Project,
                                                            key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                                            text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                                        },
                                                        criteria: [
                                                            new ibas.Condition(
                                                                accounting.bo.Project.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES.toString())
                                                        ]
                                                    }).bindProperty("bindingValue", {
                                                        path: "project",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_organization") }),
                                                    new sap.extension.m.DataOrganizationInput("", {
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "organization",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_remarks") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 3,
                                                    }).bindProperty("bindingValue", {
                                                        path: "remarks",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private listPurchaseOrderItem: sap.extension.m.List;

                /** 显示数据 */
                showPurchaseOrder(data: bo.PurchaseOrder): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    //   sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据（采购订单-行） */
                showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void {
                    this.listPurchaseOrderItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 编辑数据（采购订单-行） */
                editPurchaseOrderItem(data: bo.PurchaseOrderItem): void {
                    let that: this = this;
                    let editForm: sap.m.Dialog = new sap.m.Dialog("", {
                        title: ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_purchaseorderitem"), data.lineId),
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            new sap.extension.layout.DataSimpleForm("", {
                                editable: true,
                                userFieldsTitle: "",
                                userFieldsMode: "input",
                                dataInfo: {
                                    code: bo.PurchaseOrder.BUSINESS_OBJECT_CODE,
                                    name: bo.PurchaseOrderItem.name,
                                },
                                content: [
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_lineid") }),
                                    new sap.extension.m.Input("", {
                                        editable: false,
                                        type: sap.m.InputType.Number
                                    }).bindProperty("bindingValue", {
                                        path: "lineId",
                                        type: new sap.extension.data.Numeric(),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_linestatus") }),
                                    new sap.extension.m.EnumSelect("", {
                                        enumType: ibas.emDocumentStatus
                                    }).bindProperty("bindingValue", {
                                        path: "lineStatus",
                                        type: new sap.extension.data.DocumentStatus(),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_itemcode") }),
                                    new sap.extension.m.Input("", {
                                        showValueHelp: true,
                                        valueHelpRequest: function (this: sap.extension.m.Input): void {
                                            let model: any = this.getModel();
                                            if (model instanceof sap.extension.model.JSONModel) {
                                                let data: any = model.getData();
                                                if (data) {
                                                    that.fireViewEvents(that.choosePurchaseOrderItemMaterialEvent, data);
                                                }
                                            }
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "itemCode",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 20
                                        }),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_itemdescription") }),
                                    new sap.extension.m.Input("", {
                                        editable: false,
                                    }).bindProperty("bindingValue", {
                                        path: "itemDescription",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_warehouse") }),
                                    new sap.extension.m.RepositoryInput("", {
                                        showValueHelp: true,
                                        repository: materials.bo.BORepositoryMaterials,
                                        dataInfo: {
                                            type: materials.bo.Warehouse,
                                            key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                            text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                        },
                                        valueHelpRequest: function (this: sap.extension.m.Input): void {
                                            let model: any = this.getModel();
                                            if (model instanceof sap.extension.model.JSONModel) {
                                                let data: any = model.getData();
                                                if (data) {
                                                    that.fireViewEvents(that.choosePurchaseOrderItemWarehouseEvent, data);
                                                }
                                            }
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "warehouse",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 8
                                        })
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_quantity") }),
                                    new sap.extension.m.Input("", {
                                        type: sap.m.InputType.Number
                                    }).bindProperty("bindingValue", {
                                        path: "quantity",
                                        type: new sap.extension.data.Quantity(),
                                    }).bindProperty("description", {
                                        path: "uom",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 8
                                        }),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_price") }),
                                    new sap.extension.m.Input("", {
                                        type: sap.m.InputType.Number
                                    }).bindProperty("bindingValue", {
                                        path: "price",
                                        type: new sap.extension.data.Price(),
                                    }).bindProperty("description", {
                                        path: "currency",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 8
                                        }),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_linetotal") }),
                                    new sap.extension.m.Input("", {
                                        editable: false,
                                        type: sap.m.InputType.Number
                                    }).bindProperty("bindingValue", {
                                        path: "lineTotal",
                                        type: new sap.extension.data.Sum(),
                                    }).bindProperty("description", {
                                        path: "currency",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 8
                                        }),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_tax") }),
                                    new component.TaxGroupSelect("", {
                                    }).bindProperty("bindingValue", {
                                        path: "tax",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 8
                                        })
                                    }).bindProperty("rate", {
                                        path: "taxRate",
                                        type: new sap.extension.data.Rate()
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_reference1") }),
                                    new sap.extension.m.Input("", {
                                    }).bindProperty("bindingValue", {
                                        path: "reference1",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 100
                                        }),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorderitem_reference2") }),
                                    new sap.extension.m.Input("", {
                                    }).bindProperty("bindingValue", {
                                        path: "reference2",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 200
                                        }),
                                    }),
                                ],
                            }),
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                icon: "sap-icon://arrow-left",
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    let form: any = editForm.getContent()[0];
                                    if (form instanceof sap.extension.layout.SimpleForm) {
                                        let datas: any = that.listPurchaseOrderItem.getModel().getData("rows");
                                        if (datas instanceof Array && datas.length > 0) {
                                            let index: number = datas.indexOf(form.getModel().getData());
                                            index = index <= 0 ? datas.length - 1 : index - 1;
                                            form.setModel(new sap.extension.model.JSONModel(datas[index]));
                                            editForm.setTitle(ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_purchaseorderitem"), datas[index].lineId));
                                        } else {
                                            that.application.viewShower.messages({
                                                title: that.title,
                                                type: ibas.emMessageType.WARNING,
                                                message: ibas.i18n.prop(["shell_please", "shell_data_add_line"]),
                                            });
                                        }
                                    }
                                }
                            }),
                            new sap.m.Button("", {
                                icon: "sap-icon://arrow-right",
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    let form: any = editForm.getContent()[0];
                                    if (form instanceof sap.extension.layout.SimpleForm) {
                                        let datas: any = that.listPurchaseOrderItem.getModel().getData("rows");
                                        if (datas instanceof Array && datas.length > 0) {
                                            let index: number = datas.indexOf(form.getModel().getData());
                                            index = index >= datas.length - 1 ? 0 : index + 1;
                                            form.setModel(new sap.extension.model.JSONModel(datas[index]));
                                            editForm.setTitle(ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_purchaseorderitem"), datas[index].lineId));
                                        } else {
                                            that.application.viewShower.messages({
                                                title: that.title,
                                                type: ibas.emMessageType.WARNING,
                                                message: ibas.i18n.prop(["shell_please", "shell_data_add_line"]),
                                            });
                                        }
                                    }
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    editForm.close();
                                }
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                    editForm.getContent()[0].setModel(new sap.extension.model.JSONModel(data));
                    editForm.open();
                }
            }
        }
    }
}
