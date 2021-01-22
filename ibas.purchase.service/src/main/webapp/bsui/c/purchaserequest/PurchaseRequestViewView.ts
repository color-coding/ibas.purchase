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
            /** 查看视图-采购申请 */
            export class PurchaseRequestViewView extends ibas.BOViewView implements app.IPurchaseRequestViewView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tablePurchaseRequestItem = new sap.extension.m.DataTable("", {
                        dataInfo: {
                            code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                            name: bo.PurchaseRequestItem.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_lineid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_linestatus"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_itemdescription"),
                                width: "20rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_quantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_price"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_linetotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_reference1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasequoteitem_reference2"),
                            }),
                        ],
                        items: {
                            path: "/rows",
                            template: new sap.m.ColumnListItem("", {
                                cells: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectDocumentStatus("", {
                                        text: {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus(true),
                                        }
                                    }),
                                    new sap.extension.m.ObjectIdentifier("", {
                                        title: {
                                            path: "itemDescription",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        text: {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity(),
                                        },
                                        unit: {
                                            path: "uom",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "price",
                                            type: new sap.extension.data.Price(),
                                        },
                                        unit: {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Sum(),
                                        },
                                        unit: {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric(),
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
                                ]
                            }),
                        }
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data);
                                }
                            },
                            objectSubtitle: {
                                parts: [
                                    {
                                        path: "cause",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "requester",
                                        type: new sap.extension.data.Alphanumeric(),
                                        formatter(data: string): any {
                                            return ibas.strings.format("({0})", data);
                                        }
                                    }
                                ],
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_edit"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://edit",
                                        visible: this.mode === ibas.emViewMode.VIEW ? false : true,
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
                                            ibas.servicesManager.showServices({
                                                proxy: new ibas.BOServiceProxy({
                                                    data: that.page.getModel().getData(),
                                                    converter: new bo.DataConverter(),
                                                }),
                                                displayServices(services: ibas.IServiceAgent[]): void {
                                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                                        return;
                                                    }
                                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                                        showHeader: false,
                                                        placement: sap.m.PlacementType.Bottom,
                                                    });
                                                    for (let service of services) {
                                                        popover.addContent(new sap.m.Button("", {
                                                            text: ibas.i18n.prop(service.name),
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: service.icon,
                                                            press: function (): void {
                                                                service.run();
                                                                popover.close();
                                                            }
                                                        }));
                                                    }
                                                    popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                    popover.openBy(event.getSource(), true);
                                                }
                                            });
                                        }
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectDocumentStatus("", {
                                    title: ibas.i18n.prop("bo_purchasequote_documentstatus"),
                                    text: {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(true),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_purchasequote_canceled"),
                                    negative: true,
                                    text: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(true),
                                    },
                                }),
                                new sap.extension.m.ObjectNumber("", {
                                    number: {
                                        path: "documentTotal",
                                        type: new sap.extension.data.Sum()
                                    },
                                    unit: {
                                        path: "documentCurrency",
                                        type: new sap.extension.data.Alphanumeric()
                                    },
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasequote_pricelist"),
                                        bindingValue: {
                                            path: "priceList",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        repository: materials.bo.BORepositoryMaterials,
                                        dataInfo: {
                                            type: materials.bo.MaterialPriceList,
                                            key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                            text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                        },
                                    }),
                                    new sap.extension.m.PropertyObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasequote_ordertype"),
                                        bindingValue: {
                                            path: "orderType",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        dataInfo: {
                                            code: bo.PurchaseRequest.BUSINESS_OBJECT_CODE,
                                        },
                                        propertyName: "orderType",
                                    }),
                                ],
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchaserequest_requestdate"),
                                        bindingValue: {
                                            path: "requestDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasequote_documentdate"),
                                        bindingValue: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                ]
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_purchasequote_purchasequoteitems"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tablePurchaseRequestItem
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("purchase_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.VerticalLayout("", {
                                                content: [
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasequote_remarks"),
                                                        bindingValue: {
                                                            path: "remarks",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasequote_reference1"),
                                                        bindingValue: {
                                                            path: "reference1",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasequote_reference2"),
                                                        bindingValue: {
                                                            path: "reference2",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                ]
                                            }),
                                            new sap.ui.layout.VerticalLayout("", {
                                                content: [
                                                    new sap.extension.m.UserObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasequote_dataowner"),
                                                        bindingValue: {
                                                            path: "dataOwner",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.OrganizationObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasequote_organization"),
                                                        bindingValue: {
                                                            path: "organization",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasequote_project"),
                                                        bindingValue: {
                                                            path: "project",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        },
                                                        repository: accounting.bo.BORepositoryAccounting,
                                                        dataInfo: {
                                                            type: accounting.bo.Project,
                                                            key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                                            text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                                        },
                                                    }),
                                                ]
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private tablePurchaseRequestItem: sap.extension.m.Table;

                /** 显示数据 */
                showPurchaseRequest(data: bo.PurchaseRequest): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-采购申请-行 */
                showPurchaseRequestItems(datas: bo.PurchaseRequestItem[]): void {
                    this.tablePurchaseRequestItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
