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
            /** 查看视图-一揽子协议 */
            export class BlanketAgreementViewView extends ibas.BOViewView implements app.IBlanketAgreementViewView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                        },
                        userFieldsMode: "text",
                        showFooter: false,
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
                            sideContentButton: new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_edit"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://edit",
                                press(): void {
                                    that.fireViewEvents(that.editDataEvent);
                                }
                            }),
                            actions: [
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
                        }),
                        headerContent: [
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
                            new sap.extension.m.ObjectApprovalStatus("", {
                                title: ibas.i18n.prop("bo_blanketagreement_approvalstatus"),
                                enumValue: {
                                    path: "approvalStatus",
                                    type: new sap.extension.data.ApprovalStatus(),
                                },
                                visible: {
                                    path: "approvalStatus",
                                    formatter(data: ibas.emApprovalStatus): boolean {
                                        return ibas.objects.isNull(data) || data === ibas.emApprovalStatus.UNAFFECTED ? false : true;
                                    }
                                }
                            }),
                            new sap.extension.m.ObjectDocumentCanceledStatus("", {
                                title: ibas.i18n.prop("bo_blanketagreement_documentstatus"),
                                canceledStatus: {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(),
                                },
                                documentStatus: {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(),
                                },
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_blanketagreement_settlementprobability"),
                                bindingValue: {
                                    path: "settlementProbability",
                                    type: new sap.extension.data.Percentage(),
                                },
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("purchase_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_suppliercode") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "supplierCode",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_suppliername") }),
                                                    new sap.extension.m.Text("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "supplierName",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_description") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "description",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_contactperson") }),
                                                    new sap.extension.m.RepositoryText("", {
                                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                                        dataInfo: {
                                                            type: businesspartner.bo.ContactPerson,
                                                            key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                                            text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "contactPerson",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_ordertype") }),
                                                    new sap.extension.m.PropertyText("", {
                                                        dataInfo: {
                                                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                                                        },
                                                        propertyName: "orderType",
                                                    }).bindProperty("bindingValue", {
                                                        path: "orderType",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_reference1") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference1",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_reference2") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference2",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        })
                                                    }),]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
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
                                                editable: false,
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_documentstatus") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        parts: [
                                                            {
                                                                path: "documentStatus",
                                                                type: new sap.extension.data.DocumentStatus(true)
                                                            },
                                                            {
                                                                path: "canceled",
                                                                type: new sap.extension.data.YesNo(true),
                                                                formatter(data: ibas.emYesNo): string {
                                                                    return ibas.emYesNo.YES === data ? ibas.i18n.prop("bo_blanketagreement_canceled") : "";
                                                                },
                                                            },
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_agreementmethod") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "agreementMethod",
                                                        type: new sap.extension.data.Enum({
                                                            enumType: bo.emAgreementMethod,
                                                            describe: true,
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_signdate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "signDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_startdate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "startDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_enddate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "endDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_terminationdate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "terminationDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_blanketagreementitem"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.listBlanketAgreementItem = new sap.extension.m.List("", {
                                                inset: false,
                                                width: "auto",
                                                growing: false,
                                                mode: sap.m.ListMode.None,
                                                swipeDirection: sap.m.SwipeDirection.RightToLeft,
                                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                                showNoData: true,
                                                items: {
                                                    path: "/rows",
                                                    template: new sap.extension.m.DataObjectListItem("", {
                                                        dataInfo: {
                                                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                                                            name: bo.BlanketAgreementItem.name
                                                        },
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
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_blanketagreementitem_quantity"),
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
                                                                title: ibas.i18n.prop("bo_blanketagreementitem_price"),
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
                                                                title: ibas.i18n.prop("bo_blanketagreementitem_linetotal"),
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
                                                                title: ibas.i18n.prop("bo_blanketagreementitem_reference1"),
                                                                bindingValue: {
                                                                    path: "reference1",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_blanketagreementitem_reference2"),
                                                                bindingValue: {
                                                                    path: "reference2",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                        ],
                                                        type: sap.m.ListType.Active,
                                                        press: function (oEvent: sap.ui.base.Event): void {
                                                            that.viewBlanketAgreementItem(this.getBindingContext().getObject());
                                                        },
                                                    })
                                                },
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("purchase_title_clauses"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_agreementtype") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "agreementType",
                                                        type: new sap.extension.data.Enum({
                                                            enumType: bo.emAgreementType,
                                                            describe: true,
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_pricemode") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "priceMode",
                                                        type: new sap.extension.data.Enum({
                                                            enumType: bo.emPriceMode,
                                                            describe: true,
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_paymentcode") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "paymentCode",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        }),
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
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_dataowner") }),
                                                    new sap.extension.m.UserText("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_project") }),
                                                    new sap.extension.m.RepositoryText("", {
                                                        repository: accounting.bo.BORepositoryAccounting,
                                                        dataInfo: {
                                                            type: accounting.bo.Project,
                                                            key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                                            text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "project",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_organization") }),
                                                    new sap.extension.m.OrganizationText("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "organization",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_remarks") }),
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
                private listBlanketAgreementItem: sap.extension.m.List;

                /** 显示数据 */
                showBlanketAgreement(data: bo.BlanketAgreement): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据（一揽子协议-项目） */
                showBlanketAgreementItems(datas: bo.BlanketAgreementItem[]): void {
                    this.listBlanketAgreementItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 编辑数据行（一揽子协议-项目） */
                viewBlanketAgreementItem(data: bo.BlanketAgreementItem): void {
                    let that: this = this;
                    let editForm: sap.m.Dialog = <any>sap.ui.getCore().byId(this.id + "_editform");
                    if (!(editForm instanceof sap.m.Dialog)) {
                        editForm = new sap.m.Dialog(this.id + "_editform", {
                            title: ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_blanketagreementitem"), data.lineId),
                            type: sap.m.DialogType.Standard,
                            state: sap.ui.core.ValueState.None,
                            stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                            horizontalScrolling: true,
                            verticalScrolling: true,
                            content: [
                                new sap.extension.layout.DataSimpleForm("", {
                                    editable: false,
                                    userFieldsTitle: "",
                                    userFieldsMode: "text",
                                    dataInfo: {
                                        code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                                        name: bo.BlanketAgreementItem.name,
                                    },
                                    content: [
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_lineid") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_linestatus") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus(true),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_itemcode") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_itemdescription") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "itemDescription",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_quantity") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            parts: [
                                                {
                                                    path: "quantity",
                                                    type: new sap.extension.data.Quantity(),
                                                },
                                                {
                                                    path: "uom",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            ]
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_price") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            parts: [
                                                {
                                                    path: "price",
                                                    type: new sap.extension.data.Price(),
                                                },
                                                {
                                                    path: "currency",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            ]
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_linetotal") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            parts: [
                                                {
                                                    path: "lineTotal",
                                                    type: new sap.extension.data.Sum(),
                                                },
                                                {
                                                    path: "currency",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            ]
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_reference1") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreementitem_reference2") }),
                                        new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }),
                                    ],
                                }),
                            ],
                            buttons: [
                                new sap.m.Button("", {
                                    width: "20%",
                                    icon: "sap-icon://arrow-left",
                                    type: sap.m.ButtonType.Transparent,
                                    press(): void {
                                        let form: any = editForm.getContent()[0];
                                        if (form instanceof sap.extension.layout.SimpleForm) {
                                            let datas: any = that.listBlanketAgreementItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                let index: number = datas.indexOf(form.getModel().getData());
                                                index = index <= 0 ? datas.length - 1 : index - 1;
                                                form.setModel(new sap.extension.model.JSONModel(datas[index]));
                                                editForm.setTitle(ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_blanketagreementitem"), datas[index].lineId));
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
                                    width: "20%",
                                    icon: "sap-icon://arrow-right",
                                    type: sap.m.ButtonType.Transparent,
                                    press(): void {
                                        let form: any = editForm.getContent()[0];
                                        if (form instanceof sap.extension.layout.SimpleForm) {
                                            let datas: any = that.listBlanketAgreementItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                let index: number = datas.indexOf(form.getModel().getData());
                                                index = index >= datas.length - 1 ? 0 : index + 1;
                                                form.setModel(new sap.extension.model.JSONModel(datas[index]));
                                                editForm.setTitle(ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_blanketagreementitem"), datas[index].lineId));
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
                                    press(): void {
                                        editForm.close();
                                    }
                                }),
                            ]
                        }).addStyleClass("sapUiNoContentPadding");
                    }
                    editForm.getContent()[0].setModel(new sap.extension.model.JSONModel(data));
                    editForm.open();
                }
                protected onClosed(): void {
                    super.onClosed();
                    let form: any = sap.ui.getCore().byId(this.id + "_editform");
                    if (form instanceof sap.m.Dialog) {
                        form.destroy();
                    }
                }
            }
        }
    }
}
