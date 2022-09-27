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
            /** 编辑视图-一揽子协议 */
            export class BlanketAgreementEditView extends ibas.BOEditView implements app.IBlanketAgreementEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加一揽子协议-项目事件 */
                addBlanketAgreementItemEvent: Function;
                /** 删除一揽子协议-项目事件 */
                removeBlanketAgreementItemEvent: Function;
                /** 选择一揽子协议供应商事件 */
                chooseBlanketAgreementSupplierEvent: Function;
                /** 选择一揽子协议联系人信息 */
                chooseBlanketAgreementContactPersonEvent: Function;
                /** 选择一揽子协议行物料事件 */
                chooseBlanketAgreementItemMaterialEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_suppliercode") }),
                            new sap.extension.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseBlanketAgreementSupplierEvent);
                                },
                                showValueLink: true,
                                valueLinkRequest: function (event: sap.ui.base.Event): void {
                                    ibas.servicesManager.runLinkService({
                                        boCode: businesspartner.bo.Supplier.BUSINESS_OBJECT_CODE,
                                        linkValue: event.getParameter("value")
                                    });
                                }
                            }).bindProperty("bindingValue", {
                                path: "supplierCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_suppliername") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "supplierName",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_description") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "description",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_contactperson") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: businesspartner.bo.ContactPerson,
                                    key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                    text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseBlanketAgreementContactPersonEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "contactPerson",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_ordertype") }),
                            new sap.extension.m.PropertySelect("", {
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
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_reference2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_docentry") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_documentstatus") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emDocumentStatus
                            }).bindProperty("bindingValue", {
                                path: "documentStatus",
                                type: new sap.extension.data.DocumentStatus()
                            }),
                            new sap.extension.m.TipsCheckBox("", {
                                text: ibas.i18n.prop("bo_blanketagreement_canceled"),
                                tipsOnSelection: ibas.i18n.prop(["shell_data_cancel", "shell_data_status"]),
                            }).bindProperty("bindingValue", {
                                path: "canceled",
                                type: new sap.extension.data.YesNo()
                            }).bindProperty("editable", {
                                path: "approvalStatus",
                                type: new sap.extension.data.ApprovalStatus(),
                                formatter(data: ibas.emApprovalStatus): boolean {
                                    if (data === ibas.emApprovalStatus.PROCESSING) {
                                        return false;
                                    } return true;
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_agreementmethod") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emAgreementMethod
                            }).bindProperty("bindingValue", {
                                path: "agreementMethod",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emAgreementMethod
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_signdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "signDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_startdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "startDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_enddate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "endDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_terminationdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "terminationDate",
                                type: new sap.extension.data.Date(),
                            }),
                        ]
                    });
                    let formBlanketAgreementItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_blanketagreementitem") }),
                            this.tableBlanketAgreementItem = new sap.extension.table.DataTable("", {
                                enableSelectAll: false,
                                visibleRowCount: sap.extension.table.visibleRowCount(8),
                                dataInfo: {
                                    code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                                    name: bo.BlanketAgreementItem.name
                                },
                                toolbar: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_add"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://add",
                                            press(): void {
                                                that.fireViewEvents(that.addBlanketAgreementItemEvent);
                                            }
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_remove"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://less",
                                            press(): void {
                                                that.fireViewEvents(that.removeBlanketAgreementItemEvent, that.tableBlanketAgreementItem.getSelecteds());
                                            }
                                        })
                                    ]
                                }),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_lineid"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_itemcode"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.chooseBlanketAgreementItemMaterialEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            },
                                            showValueLink: true,
                                            valueLinkRequest: function (event: sap.ui.base.Event): void {
                                                ibas.servicesManager.runLinkService({
                                                    boCode: materials.bo.Material.BUSINESS_OBJECT_CODE,
                                                    linkValue: event.getParameter("value")
                                                });
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 20
                                            })
                                        }).bindProperty("editable", {
                                            path: "parentLineSign",
                                            formatter(data: string): boolean {
                                                return ibas.strings.isEmpty(data);
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_itemdescription"),
                                        width: "16rem",
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "itemDescription",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_quantity"),
                                        template: new sap.extension.m.Input("", {

                                        }).bindProperty("bindingValue", {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity(),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_uom"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "uom",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_price"),
                                        template: new sap.extension.m.Input("", {

                                        }).bindProperty("bindingValue", {
                                            path: "price",
                                            type: new sap.extension.data.Price(),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_linetotal"),
                                        template: new sap.extension.m.Input("", {

                                        }).bindProperty("bindingValue", {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Sum(),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_openquantity"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            parts: [
                                                {
                                                    path: "quantity",
                                                    type: new sap.extension.data.Quantity(),
                                                },
                                                {
                                                    path: "closedQuantity",
                                                    type: new sap.extension.data.Quantity(),

                                                }
                                            ],
                                            formatter(quantity: number, closedQuantity: number): string {
                                                return sap.extension.data.formatValue(sap.extension.data.Quantity, quantity - closedQuantity, "string");
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_openamount"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
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
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_reference1"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 100
                                            }),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_blanketagreementitem_reference2"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 200
                                            }),
                                        }),
                                    }),
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_dataowner") }),
                            new sap.extension.m.DataOwnerInput("", {
                                showValueHelp: true,
                                organization: {
                                    path: "organization",
                                    type: new sap.extension.data.Alphanumeric({
                                        maxLength: 8
                                    })
                                }
                            }).bindProperty("bindingValue", {
                                path: "dataOwner",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_project") }),
                            new sap.extension.m.SelectionInput("", {
                                showValueHelp: true,
                                repository: accounting.bo.BORepositoryAccounting,
                                dataInfo: {
                                    type: accounting.bo.Project,
                                    key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                    text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                },
                                criteria: [
                                    new ibas.Condition(accounting.bo.Project.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES.toString())
                                ]
                            }).bindProperty("bindingValue", {
                                path: "project",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_organization") }),
                            new sap.extension.m.DataOrganizationInput("", {
                                showValueHelp: true,
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
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_clauses") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_settlementprobability") }),
                            new sap.extension.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("bindingValue", {
                                path: "settlementProbability",
                                type: new sap.extension.data.Percentage(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_agreementtype") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emAgreementType
                            }).bindProperty("bindingValue", {
                                path: "agreementType",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emAgreementType
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_pricemode") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emPriceMode
                            }).bindProperty("bindingValue", {
                                path: "priceMode",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emPriceMode
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_blanketagreement_paymentcode") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "paymentCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                }),
                            }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.BlanketAgreement.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press(): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press(): void {
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
                                                press(): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press(): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSpacer(""),
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
                        content: [
                            formTop,
                            formBlanketAgreementItem,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;
                private tableBlanketAgreementItem: sap.extension.table.Table;

                /** 显示数据 */
                showBlanketAgreement(data: bo.BlanketAgreement): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据-一揽子协议-项目 */
                showBlanketAgreementItems(datas: bo.BlanketAgreementItem[]): void {
                    this.tableBlanketAgreementItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}
