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
            /** 查看视图-一揽子协议 */
            export class BlanketAgreementViewView extends ibas.BOViewView implements app.IBlanketAgreementViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tableBlanketAgreementItem = new sap.extension.m.DataTable("", {
                        autoPopinMode: true,
                        dataInfo: {
                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                            name: bo.BlanketAgreementItem.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_lineid"),
                                width: "5rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_itemdescription"),
                                width: "20rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_quantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_price"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_linetotal"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_openquantity"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_openamount"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_reference1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_blanketagreementitem_reference2"),
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
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        text: {
                                            path: "itemDescription",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        titleActive: true,
                                        titlePress(this: sap.extension.m.ObjectIdentifier): void {
                                            let data: any = this.getTitle();
                                            if (!ibas.strings.isEmpty(data)) {
                                                ibas.servicesManager.runLinkService({
                                                    boCode: materials.bo.Material.BUSINESS_OBJECT_CODE,
                                                    linkValue: data,
                                                });
                                            }
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
                                            parts: [
                                                {
                                                    path: "quantity",
                                                },
                                                {
                                                    path: "closedQuantity",

                                                }
                                            ],
                                            formatter(quantity: number, closedQuantity: number): string {
                                                return sap.extension.data.formatValue(sap.extension.data.Quantity, quantity - closedQuantity, "string");
                                            }
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            parts: [
                                                {
                                                    path: "lineTotal",
                                                    type: new sap.extension.data.Sum(),
                                                },
                                                {
                                                    path: "closedAmount",
                                                    type: new sap.extension.data.Sum(),

                                                }
                                            ],
                                            formatter(lineTotal: number, closedAmount: number): string {
                                                return sap.extension.data.formatValue(sap.extension.data.Sum, lineTotal - closedAmount, "string");
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
                                ]
                            }),
                        },
                        sortProperty: "visOrder",
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                parts: [
                                    {
                                        path: "docEntry",
                                        type: new sap.extension.data.Numeric(),
                                    },
                                    {
                                        path: "docNum",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }
                                ],
                                formatter(docEntry: number, docNum: string): any {
                                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                    builder.append("# ");
                                    builder.append(docEntry);
                                    if (!ibas.strings.isEmpty(docNum)) {
                                        builder.append(" (");
                                        builder.append(docNum);
                                        builder.append(")");
                                    }
                                    return builder.toString();
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
                                        press(): void {
                                            that.fireViewEvents(that.editDataEvent);
                                        }
                                    })
                                ],
                                contentRight: [
                                    new sap.m.Button("", {
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
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectDocumentStatus("", {
                                    title: ibas.i18n.prop("bo_blanketagreement_documentstatus"),
                                    enumValue: {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_blanketagreement_canceled"),
                                    negative: true,
                                    enumValue: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(),
                                    },
                                }),
                                new sap.extension.m.ObjectNumber("", {
                                    textAlign: sap.ui.core.TextAlign.Right,
                                    number: {
                                        path: "settlementProbability",
                                        type: new sap.extension.data.Percentage()
                                    },
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_description"),
                                        bindingValue: {
                                            path: "description",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                    }),
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_contactperson"),
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
                                    new sap.extension.m.PropertyObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_ordertype"),
                                        bindingValue: {
                                            path: "orderType",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        dataInfo: {
                                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                                        },
                                        propertyName: "orderType",
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_agreements"),
                                        bindingValue: {
                                            path: "agreements",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                ],
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_signdate"),
                                        bindingValue: {
                                            path: "signDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_startdate"),
                                        bindingValue: {
                                            path: "startDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_enddate"),
                                        bindingValue: {
                                            path: "endDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_terminationdate"),
                                        bindingValue: {
                                            path: "terminationDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                ]
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_agreementmethod"),
                                        bindingValue: {
                                            path: "agreementMethod",
                                            type: new sap.extension.data.Enum({
                                                enumType: bo.emAgreementMethod,
                                                describe: true
                                            }),
                                        },
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_blanketagreement_agreementtype"),
                                        bindingValue: {
                                            path: "agreementType",
                                            type: new sap.extension.data.Enum({
                                                enumType: bo.emAgreementType,
                                                describe: true
                                            }),
                                        },
                                    }),
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: businesspartner.bo.PaymentTerm,
                                            key: businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME,
                                            text: businesspartner.bo.PaymentTerm.PROPERTY_NAME_NAME,
                                        },
                                        title: ibas.i18n.prop("bo_blanketagreement_paymentcode"),
                                        bindingValue: {
                                            path: "paymentCode",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }
                                    }),
                                ]
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_blanketagreementitem"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tableBlanketAgreementItem
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
                                                        title: ibas.i18n.prop("bo_blanketagreement_remarks"),
                                                        bindingValue: {
                                                            path: "remarks",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_blanketagreement_reference1"),
                                                        bindingValue: {
                                                            path: "reference1",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_blanketagreement_reference2"),
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
                                                        title: ibas.i18n.prop("bo_blanketagreement_dataowner"),
                                                        bindingValue: {
                                                            path: "dataOwner",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_blanketagreement_project"),
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
                                                    new sap.extension.m.OrganizationObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_blanketagreement_organization"),
                                                        bindingValue: {
                                                            path: "organization",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
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
                private tableBlanketAgreementItem: sap.extension.m.Table;

                /** 显示数据 */
                showBlanketAgreement(data: bo.BlanketAgreement): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-一揽子协议-项目 */
                showBlanketAgreementItems(datas: bo.BlanketAgreementItem[]): void {
                    this.tableBlanketAgreementItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
