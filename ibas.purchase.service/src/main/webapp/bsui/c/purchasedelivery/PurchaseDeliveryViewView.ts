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
            /** 查看视图-采购交货 */
            export class PurchaseDeliveryViewView extends ibas.BOViewView implements app.IPurchaseDeliveryViewView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tablePurchaseDeliveryItem = new sap.extension.m.DataTable("", {
                        autoPopinMode: true,
                        dataInfo: {
                            code: bo.PurchaseDelivery.BUSINESS_OBJECT_CODE,
                            name: bo.PurchaseDeliveryItem.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_lineid"),
                                width: "5rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_itemdescription"),
                                width: "20rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_quantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_warehouse"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_price"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_linetotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_reference1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_purchasedeliveryitem_reference2"),
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
                                    new sap.extension.m.RepositoryObjectAttribute("", {
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
                            code: bo.PurchaseDelivery.BUSINESS_OBJECT_CODE,
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
                                        path: "supplierName",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "supplierCode",
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
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectDocumentStatus("", {
                                    title: ibas.i18n.prop("bo_purchasedelivery_documentstatus"),
                                    enumValue: {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_purchasedelivery_canceled"),
                                    negative: true,
                                    enumValue: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(),
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
                                        title: ibas.i18n.prop("bo_purchasedelivery_contactperson"),
                                        bindingValue: {
                                            path: "contactPerson",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: businesspartner.bo.ContactPerson,
                                            key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                            text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                        },
                                    }),
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_pricelist"),
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
                                        title: ibas.i18n.prop("bo_purchasedelivery_ordertype"),
                                        bindingValue: {
                                            path: "orderType",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        dataInfo: {
                                            code: bo.PurchaseDelivery.BUSINESS_OBJECT_CODE,
                                        },
                                        propertyName: "orderType",
                                    }),
                                ],
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_postingdate"),
                                        bindingValue: {
                                            path: "postingDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_documentdate"),
                                        bindingValue: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_deliverydate"),
                                        bindingValue: {
                                            path: "deliveryDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                ]
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_documenttaxtotal"),
                                        bindingValue: {
                                            parts: [
                                                {
                                                    path: "itemsTaxTotal",
                                                    type: new sap.extension.data.Sum()
                                                },
                                                {
                                                    path: "shippingsTaxTotal",
                                                    type: new sap.extension.data.Sum()
                                                },
                                                {
                                                    path: "documentCurrency",
                                                    type: new sap.extension.data.Alphanumeric()
                                                },
                                            ],
                                            formatter(lineTax: number, shippingTax: number, currency: string): string {
                                                return ibas.strings.format("{0} {1}", sap.extension.data.formatValue(sap.extension.data.Sum,
                                                    ibas.numbers.valueOf(lineTax) + ibas.numbers.valueOf(shippingTax)
                                                    , "string"), currency);
                                            },
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_shippingsexpensetotal"),
                                        bindingValue: {
                                            parts: [
                                                {
                                                    path: "shippingsExpenseTotal",
                                                    type: new sap.extension.data.Sum(),
                                                },
                                                {
                                                    path: "documentCurrency",
                                                    type: new sap.extension.data.Alphanumeric()
                                                },
                                            ]
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_purchasedelivery_paidtotal"),
                                        bindingValue: {
                                            parts: [
                                                {
                                                    path: "paidTotal",
                                                    type: new sap.extension.data.Sum(),
                                                },
                                                {
                                                    path: "documentCurrency",
                                                    type: new sap.extension.data.Alphanumeric()
                                                },
                                            ]
                                        }
                                    }),
                                ]
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_purchasedelivery_purchasedeliveryitems"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tablePurchaseDeliveryItem
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_shippingaddress"),
                                subSections: [
                                    this.sectionAddress = new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                        ]
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
                                                        title: ibas.i18n.prop("bo_purchasedelivery_remarks"),
                                                        bindingValue: {
                                                            path: "remarks",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasedelivery_reference1"),
                                                        bindingValue: {
                                                            path: "reference1",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasedelivery_reference2"),
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
                                                        title: ibas.i18n.prop("bo_purchasedelivery_dataowner"),
                                                        bindingValue: {
                                                            path: "dataOwner",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.OrganizationObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasedelivery_organization"),
                                                        bindingValue: {
                                                            path: "organization",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_purchasedelivery_project"),
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
                private tablePurchaseDeliveryItem: sap.extension.m.Table;
                private sectionAddress: sap.uxap.ObjectPageSubSection;

                /** 显示数据 */
                showPurchaseDelivery(data: bo.PurchaseDelivery): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-采购交货-行 */
                showPurchaseDeliveryItems(datas: bo.PurchaseDeliveryItem[]): void {
                    this.tablePurchaseDeliveryItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 显示数据-配送地址  */
                showShippingAddresses(datas: bo.ShippingAddress[]): void {
                    datas.forEach(value => {
                        let builder: ibas.StringBuilder = new ibas.StringBuilder();
                        builder.map(undefined, "");
                        builder.map(null, "");
                        builder.append(value.country);
                        builder.append(value.province);
                        builder.append(value.city);
                        builder.append(value.district);
                        builder.append(value.street);
                        this.sectionAddress.addBlock(new sap.ui.layout.VerticalLayout("", {
                            content: [
                                new sap.extension.m.ObjectAttribute("", {
                                    title: ibas.i18n.prop("bo_shippingaddress_consignee"),
                                    text: value.consignee
                                }),
                                new sap.extension.m.ObjectAttribute("", {
                                    title: ibas.i18n.prop("bo_shippingaddress"),
                                    text: builder.toString()
                                }),
                                new sap.extension.m.ObjectAttribute("", {
                                    title: ibas.i18n.prop("bo_shippingaddress_trackingnumber"),
                                    text: value.trackingNumber
                                }),
                                new sap.extension.m.ObjectAttribute("", {
                                    title: ibas.i18n.prop("bo_shippingaddress_expense"),
                                    text: ibas.strings.format("{0} {1}", sap.extension.data.formatValue(sap.extension.data.Sum, value.expense, "string"), value.currency)
                                }),
                            ]
                        }));
                    });
                }
            }
        }
    }
}
