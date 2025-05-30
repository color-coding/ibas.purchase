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
            /**
             * 编辑视图-采购发票
             */
            export class PurchaseInvoiceEditView extends ibas.BOEditView implements app.IPurchaseInvoiceEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加采购发票-行事件 */
                addPurchaseInvoiceItemEvent: Function;
                /** 删除采购发票-行事件 */
                removePurchaseInvoiceItemEvent: Function;
                /** 选择采购发票客户信息 */
                choosePurchaseInvoiceSupplierEvent: Function;
                /** 选择采购发票联系人信息 */
                choosePurchaseInvoiceContactPersonEvent: Function;
                /** 选择采购发票价格清单信息 */
                choosePurchaseInvoicePriceListEvent: Function;
                /** 选择采购发票-行物料主数据 */
                choosePurchaseInvoiceItemMaterialEvent: Function;
                /** 选择采购发票-行 仓库 */
                choosePurchaseInvoiceItemWarehouseEvent: Function;
                /** 选择采购发票-行 单位 */
                choosePurchaseInvoiceItemUnitEvent: Function;
                /** 选择采购发票-行 物料序列事件 */
                choosePurchaseInvoiceItemMaterialSerialEvent: Function;
                /** 选择采购发票-行 物料批次事件 */
                choosePurchaseInvoiceItemMaterialBatchEvent: Function;
                /** 选择采购发票-行 物料版本 */
                choosePurchaseInvoiceItemMaterialVersionEvent: Function;
                /** 选择一业务伙伴目录事件 */
                choosePurchaseInvoiceItemMaterialCatalogEvent: Function;
                /** 选择采购发票-行成本中心事件 */
                choosePurchaseInvoiceItemDistributionRuleEvent: Function;
                /** 选择采购发票项目-采购订单事件 */
                choosePurchaseInvoicePurchaseOrderEvent: Function;
                /** 选择采购发票项目-采购发票事件 */
                choosePurchaseInvoicePurchaseDeliveryEvent: Function;
                /** 选择采购发票-一揽子协议事件 */
                choosePurchaseInvoiceBlanketAgreementEvent: Function;
                /** 选择供应商合同 */
                chooseSupplierAgreementsEvent: Function;
                /** 收款采购发票 */
                receiptPurchaseInvoiceEvent: Function;
                /** 编辑地址事件 */
                editShippingAddressesEvent: Function;
                /** 转为采购发票事件 */
                turnToPurchaseCreditNoteEvent: Function;
                /** 添加采购发票-预付款事件 */
                addPurchaseInvoiceDownPaymentEvent: Function;
                /** 删除采购发票-预付款事件 */
                removePurchaseInvoiceDownPaymentEvent: Function;
                /** 测量物料事件 */
                measuringMaterialsEvent: Function;
                /** 查看物料历史价格事件 */
                viewHistoricalPricesEvent: Function;
                /** 选择付款条款事件 */
                choosePaymentTermEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_suppliercode") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.choosePurchaseInvoiceSupplierEvent);
                                },
                                showValueLink: true,
                                valueLinkRequest: function (event: sap.ui.base.Event): void {
                                    ibas.servicesManager.runLinkService({
                                        boCode: businesspartner.bo.Supplier.BUSINESS_OBJECT_CODE,
                                        linkValue: event.getParameter("value")
                                    });
                                },
                                describeValue: false,
                                showSuggestion: true,
                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: businesspartner.bo.Supplier,
                                    key: businesspartner.bo.Supplier.PROPERTY_CODE_NAME,
                                    text: businesspartner.bo.Supplier.PROPERTY_NAME_NAME
                                },
                                suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                    let selectedItem: any = event.getParameter("selectedItem");
                                    if (!ibas.objects.isNull(selectedItem)) {
                                        that.fireViewEvents(that.choosePurchaseInvoiceSupplierEvent, this.itemConditions(selectedItem));
                                    }
                                },
                                editable: {
                                    parts: [
                                        {
                                            path: "isNew",
                                        },
                                        {
                                            path: "documentStatus",
                                        }
                                    ],
                                    formatter(isNew: boolean, documentStatus: ibas.emDocumentStatus): boolean {
                                        return isNew === false && documentStatus > ibas.emDocumentStatus.PLANNED ? false : true;
                                    }
                                }
                            }).bindProperty("bindingValue", {
                                path: "supplierCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_suppliername") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "supplierName",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_contactperson") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: businesspartner.bo.ContactPerson,
                                    key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                    text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.choosePurchaseInvoiceContactPersonEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "contactPerson",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_pricelist") }),
                            new sap.m.FlexBox("", {
                                width: "100%",
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                items: [
                                    new sap.extension.m.RepositoryInput("", {
                                        width: "70%",
                                        showValueHelp: true,
                                        repository: materials.bo.BORepositoryMaterials,
                                        dataInfo: {
                                            type: materials.bo.MaterialPriceList,
                                            key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                            text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                        },
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.choosePurchaseInvoicePriceListEvent);
                                        },
                                    }).bindProperty("bindingValue", {
                                        path: "priceList",
                                        type: new sap.extension.data.Numeric()
                                    }).addStyleClass("sapUiTinyMarginEnd"),
                                    new sap.extension.m.CurrencyRateSelect("", {
                                        baseCurrency: accounting.config.currency("LOCAL"),
                                        currency: {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                        rate: {
                                            path: "documentRate",
                                            type: new sap.extension.data.Rate()
                                        },
                                        date: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date()
                                        }
                                    }),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_ordertype") }),
                            new sap.extension.m.PropertySelect("", {
                                dataInfo: {
                                    code: bo.PurchaseInvoice.BUSINESS_OBJECT_CODE,
                                },
                                propertyName: "orderType",
                            }).bindProperty("bindingValue", {
                                path: "orderType",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_reference1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_reference2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_docentry") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_docnum") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "docNum",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }).bindProperty("editable", {
                                path: "series",
                                formatter(data: any): any {
                                    return data > 0 ? false : true;
                                }
                            }),
                            new sap.extension.m.SeriesSelect("", {
                                objectCode: bo.BO_CODE_PURCHASEINVOICE,
                            }).bindProperty("bindingValue", {
                                path: "series",
                                type: new sap.extension.data.Numeric()
                            }).bindProperty("editable", {
                                path: "isNew",
                                formatter(data: any): any {
                                    return data === false ? false : true;
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_documentstatus") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emDocumentStatus
                            }).bindProperty("bindingValue", {
                                path: "documentStatus",
                                type: new sap.extension.data.DocumentStatus()
                            }),
                            new sap.extension.m.TipsCheckBox("", {
                                text: ibas.i18n.prop("bo_purchaseinvoice_canceled"),
                                tipsOnSelection: ibas.i18n.prop(["shell_data_cancel", "shell_data_status"]),
                            }).bindProperty("bindingValue", {
                                path: "canceled",
                                type: new sap.extension.data.YesNo()
                            }).bindProperty("editable", {
                                parts: [
                                    {
                                        path: "approvalStatus",
                                        type: new sap.extension.data.ApprovalStatus(),
                                    },
                                    {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(),
                                    }
                                ],
                                formatter(apStatus: ibas.emApprovalStatus, docStatus: ibas.emDocumentStatus): boolean {
                                    if (apStatus === ibas.emApprovalStatus.PROCESSING) {
                                        return false;
                                    }
                                    if (docStatus === ibas.emDocumentStatus.PLANNED) {
                                        return false;
                                    }
                                    return true;
                                }
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("bo_purchaseinvoice_cancellationdate"),
                                visible: {
                                    path: "canceled",
                                    formatter(data: any): any {
                                        return data === ibas.emYesNo.YES ? true : false;
                                    }
                                }
                            }),
                            new sap.extension.m.DatePicker("", {
                                visible: {
                                    path: "canceled",
                                    formatter(data: any): any {
                                        return data === ibas.emYesNo.YES ? true : false;
                                    }
                                }
                            }).bindProperty("bindingValue", {
                                path: "cancellationDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_documentdate") }),
                            new sap.extension.m.DatePicker("", {
                                change(event: sap.ui.base.Event): void {
                                    let source: any = event.getSource();
                                    if (source instanceof sap.m.DatePicker) {
                                        let data: any = source.getBindingContext().getObject();
                                        if (data instanceof bo.PurchaseInvoice && !ibas.strings.isEmpty(data.paymentCode)) {
                                            let criteria: ibas.ICriteria = new ibas.Criteria();
                                            let condition: ibas.ICondition = criteria.conditions.create();
                                            condition.alias = businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME;
                                            condition.value = data.paymentCode;
                                            that.fireViewEvents(that.choosePaymentTermEvent, criteria);
                                        }
                                    }
                                }
                            }).bindProperty("bindingValue", {
                                path: "documentDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_deliverydate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "deliveryDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", {
                                visible: false,
                                text: ibas.i18n.prop("bo_purchaseinvoice_postingdate"),
                            }),
                            new sap.extension.m.DatePicker("", {
                                visible: false,
                            }).bindProperty("bindingValue", {
                                path: "postingDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_paymentcode") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: businesspartner.bo.PaymentTerm,
                                    key: businesspartner.bo.PaymentTerm.PROPERTY_CODE_NAME,
                                    text: businesspartner.bo.PaymentTerm.PROPERTY_NAME_NAME,
                                },
                                valueHelpRequest(): void {
                                    that.fireViewEvents(that.choosePaymentTermEvent);
                                }
                            }).bindProperty("bindingValue", {
                                path: "paymentCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_agreements") }),
                            new sap.extension.m.Input("", {
                                showValueHelp: true,
                                valueHelpOnly: false,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseSupplierAgreementsEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "agreements",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 110
                                }),
                            }),
                            new sap.m.Label("", {
                                visible: false,
                                text: ibas.i18n.prop("bo_purchaseinvoice_consumer")
                            }),
                            new sap.extension.m.Input("", {
                                visible: false,
                            }).bindProperty("bindingValue", {
                                path: "consumer",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                        ]
                    });
                    let formPurchaseInvoiceItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_purchaseinvoiceitem") }),
                            this.tablePurchaseInvoiceItem = new sap.extension.table.DataTable("", {
                                enableSelectAll: false,
                                visibleRowCount: sap.extension.table.visibleRowCount(8),
                                dataInfo: {
                                    code: bo.PurchaseInvoice.BUSINESS_OBJECT_CODE,
                                    name: bo.PurchaseInvoiceItem.name
                                },
                                toolbar: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.MenuButton("", {
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://add",
                                            text: ibas.i18n.prop("shell_data_add"),
                                            menu: new sap.m.Menu("", {
                                                items: [
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("shell_data_add_line"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.addPurchaseInvoiceItemEvent);
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("shell_data_clone_line"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.addPurchaseInvoiceItemEvent, that.tablePurchaseInvoiceItem.getSelecteds());
                                                        }
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_purchaseorder"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseInvoicePurchaseOrderEvent);
                                                        },
                                                        visible: shell.app.privileges.canRun({
                                                            id: app.PurchaseOrderChooseApp.APPLICATION_ID,
                                                            name: app.PurchaseOrderChooseApp.APPLICATION_NAME,
                                                        })
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_purchasedelivery"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseInvoicePurchaseDeliveryEvent);
                                                        },
                                                        visible: shell.app.privileges.canRun({
                                                            id: app.PurchaseDeliveryChooseApp.APPLICATION_ID,
                                                            name: app.PurchaseDeliveryChooseApp.APPLICATION_NAME,
                                                        })
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("bo_blanketagreement"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseInvoiceBlanketAgreementEvent);
                                                        },
                                                        visible: shell.app.privileges.canRun({
                                                            id: app.BlanketAgreementChooseApp.APPLICATION_ID,
                                                            name: app.BlanketAgreementChooseApp.APPLICATION_NAME,
                                                        })
                                                    }),
                                                ]
                                            }),
                                            defaultAction(): void {
                                                that.fireViewEvents(that.addPurchaseInvoiceItemEvent, 1);
                                            }
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_remove"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://less",
                                            press: function (): void {
                                                that.fireViewEvents(that.removePurchaseInvoiceItemEvent, that.tablePurchaseInvoiceItem.getSelecteds());
                                            }
                                        }),
                                        new sap.m.ToolbarSeparator(""),
                                        new sap.extension.m.MenuButton("", {
                                            autoHide: true,
                                            icon: "sap-icon://tags",
                                            text: ibas.strings.format("{0}/{1}",
                                                ibas.i18n.prop("purchase_material_batch"), ibas.i18n.prop("purchase_material_serial")),
                                            menu: new sap.m.Menu("", {
                                                items: [
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("purchase_material_batch"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialBatchEvent);
                                                        },
                                                        visible: shell.app.privileges.canRun({
                                                            id: materials.app.MaterialBatchReceiptService.APPLICATION_ID,
                                                            name: materials.app.MaterialBatchReceiptService.APPLICATION_NAME,
                                                        })
                                                    }),
                                                    new sap.m.MenuItem("", {
                                                        text: ibas.i18n.prop("purchase_material_serial"),
                                                        press: function (): void {
                                                            that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialSerialEvent);
                                                        },
                                                        visible: shell.app.privileges.canRun({
                                                            id: materials.app.MaterialSerialReceiptService.APPLICATION_ID,
                                                            name: materials.app.MaterialSerialReceiptService.APPLICATION_NAME,
                                                        })
                                                    }),
                                                ]
                                            })
                                        }),
                                        new sap.m.ToolbarSpacer(""),
                                        new sap.m.Label("", {
                                            wrapping: false,
                                            showColon: true,
                                            text: ibas.i18n.prop("bo_warehouse"),
                                            visible: shell.app.privileges.canRun({
                                                id: materials.app.ELEMENT_DOCUMENT_WAREHOUSE.id,
                                                name: materials.app.ELEMENT_DOCUMENT_WAREHOUSE.name,
                                            })
                                        }),
                                        this.selectWarehouse = new component.WarehouseSelect("", {
                                            width: "auto",
                                            branch: {
                                                path: "/branch",
                                                type: new sap.extension.data.Alphanumeric()
                                            },
                                            change(this: sap.m.Select, event: sap.ui.base.Event): void {
                                                let sItem: any = this.getSelectedItem();
                                                if (sItem instanceof sap.ui.core.Item && !ibas.strings.isEmpty(sItem.getKey())) {
                                                    let model: any = that.tablePurchaseInvoiceItem.getModel();
                                                    if (model instanceof sap.extension.model.JSONModel) {
                                                        let data: any[] = model.getData("rows");
                                                        if (data instanceof Array) {
                                                            let items: ibas.IList<bo.PurchaseInvoiceItem> = new ibas.ArrayList<bo.PurchaseInvoiceItem>();
                                                            for (let item of data) {
                                                                if (item instanceof bo.PurchaseInvoiceItem) {
                                                                    if (item.warehouse !== sItem.getKey()) {
                                                                        items.add(item);
                                                                    }
                                                                }
                                                            }
                                                            if (items.length > 0) {
                                                                that.application.viewShower.messages({
                                                                    title: that.title,
                                                                    type: ibas.emMessageType.QUESTION,
                                                                    message: ibas.i18n.prop("purchase_change_item_warehouse_continue", sItem.getText()),
                                                                    actions: [
                                                                        ibas.emMessageAction.YES,
                                                                        ibas.emMessageAction.NO,
                                                                    ],
                                                                    onCompleted: (reslut) => {
                                                                        if (reslut === ibas.emMessageAction.YES) {
                                                                            for (let item of items) {
                                                                                item.warehouse = sItem.getKey();
                                                                            }
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            visible: shell.app.privileges.canRun({
                                                id: materials.app.ELEMENT_DOCUMENT_WAREHOUSE.id,
                                                name: materials.app.ELEMENT_DOCUMENT_WAREHOUSE.name,
                                            })
                                        })
                                    ]
                                }),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_lineid"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_linestatus"),
                                        template: new sap.extension.m.EnumSelect("", {
                                            enumType: ibas.emDocumentStatus
                                        }).bindProperty("bindingValue", {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus()
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_catalogcode"),
                                        template: new sap.extension.m.RepositoryInput("", {
                                            showValueHelp: true,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialCatalogEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            },
                                            showValueLink: true,
                                            valueLinkRequest: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                                let data: any = this.getBindingContext()?.getObject();
                                                if (data instanceof bo.PurchaseOrderItem
                                                    && !ibas.strings.isEmpty(data.itemCode)) {
                                                    ibas.servicesManager.runLinkService({
                                                        boCode: materials.bo.Material.BUSINESS_OBJECT_CODE,
                                                        linkValue: data.itemCode,
                                                    });
                                                }
                                            },
                                            describeValue: false,
                                            showSuggestion: true,
                                            repository: materials.bo.BORepositoryMaterials,
                                            dataInfo: {
                                                type: materials.bo.BusinessPartnerMaterialCatalog,
                                                key: materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_CATALOGCODE_NAME,
                                                text: materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_CATALOGNAME_NAME
                                            },
                                            suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                                let selectedItem: any = event.getParameter("selectedItem");
                                                if (!ibas.objects.isNull(selectedItem)) {
                                                    that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialCatalogEvent, this.getBindingContext().getObject(), this.itemConditions(selectedItem));
                                                }
                                            },
                                            criteria: function (source: sap.extension.m.RepositoryInput): ibas.ICriteria {
                                                let criteria: ibas.ICriteria = new ibas.Criteria();
                                                let condition: ibas.ICondition = criteria.conditions.create();
                                                condition.alias = materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                                                condition.value = businesspartner.bo.emBusinessPartnerType.SUPPLIER.toString();
                                                condition = criteria.conditions.create();
                                                condition.alias = materials.bo.BusinessPartnerMaterialCatalog.PROPERTY_BUSINESSPARTNERCODE_NAME;
                                                condition.value = (<any>formTop.getContent()[2]).getValue();
                                                return criteria;
                                            },
                                            valuePaste: function (this: sap.extension.m.Input, event: sap.ui.base.Event): void {
                                                let source: any = <any>event.getSource();
                                                let data: any = event.getParameter("data");
                                                if (typeof data === "string") {
                                                    if (data?.indexOf("\n") > 0) {
                                                        sap.extension.tables.fillingCellsData(source, data,
                                                            (rowCount) => {
                                                                that.fireViewEvents(that.addPurchaseInvoiceItemEvent, rowCount);
                                                                return true;
                                                            },
                                                            (cell, value) => {
                                                                (<any>cell).setValue(value);
                                                                (<any>cell).fireSuggest({ suggestValue: value, autoSelected: true });
                                                            }
                                                        );
                                                    } else {
                                                        setTimeout(() => {
                                                            (<any>source).fireSuggest({ suggestValue: data, autoSelected: true });
                                                        }, 10);
                                                    }
                                                    // 不执行后续事件
                                                    event.preventDefault();
                                                    event.cancelBubble();
                                                }
                                            },
                                        }).bindProperty("bindingValue", {
                                            path: "catalogCode",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 50
                                            })
                                        }).bindProperty("editable", {
                                            parts: [
                                                {
                                                    path: "closedQuantity",
                                                },
                                                {
                                                    path: "closedAmount",
                                                },
                                            ],
                                            formatter(closedQuantity: number, closedAmount: number): boolean {
                                                if (closedQuantity > 0) {
                                                    return false;
                                                } else if (closedAmount > 0) {
                                                    return false;
                                                }
                                                return true;
                                            }
                                        }),
                                        visible: false,
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_itemcode"),
                                        template: new sap.extension.m.RepositoryInput("", {
                                            showValueHelp: true,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialEvent,
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
                                            },
                                            describeValue: false,
                                            showSuggestion: true,
                                            repository: materials.bo.BORepositoryMaterials,
                                            dataInfo: {
                                                type: materials.bo.Material,
                                                key: materials.bo.Material.PROPERTY_CODE_NAME,
                                                text: materials.bo.Material.PROPERTY_NAME_NAME
                                            },
                                            suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                                let selectedItem: any = event.getParameter("selectedItem");
                                                if (!ibas.objects.isNull(selectedItem)) {
                                                    that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialEvent, this.getBindingContext().getObject(), this.itemConditions(selectedItem));
                                                }
                                            },
                                            criteria: [
                                                new ibas.Condition(materials.app.conditions.product.CONDITION_ALIAS_PURCHASE_ITEM, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                                            ],
                                            valuePaste: function (this: sap.extension.m.Input, event: sap.ui.base.Event): void {
                                                let source: any = <any>event.getSource();
                                                let data: any = event.getParameter("data");
                                                if (typeof data === "string") {
                                                    if (data?.indexOf("\n") > 0) {
                                                        sap.extension.tables.fillingCellsData(source, data,
                                                            (rowCount) => {
                                                                that.fireViewEvents(that.addPurchaseInvoiceItemEvent, rowCount);
                                                                return true;
                                                            },
                                                            (cell, value) => {
                                                                (<any>cell).setValue(value);
                                                                (<any>cell).fireSuggest({ suggestValue: value, autoSelected: true });
                                                            }
                                                        );
                                                    } else {
                                                        setTimeout(() => {
                                                            (<any>source).fireSuggest({ suggestValue: data, autoSelected: true });
                                                        }, 10);
                                                    }
                                                    // 不执行后续事件
                                                    event.preventDefault();
                                                    event.cancelBubble();
                                                }
                                            },
                                        }).bindProperty("bindingValue", {
                                            path: "itemCode",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 50
                                            })
                                        }).bindProperty("editable", {
                                            parts: [
                                                {
                                                    path: "closedQuantity",
                                                },
                                                {
                                                    path: "closedAmount",
                                                },
                                            ],
                                            formatter(closedQuantity: number, closedAmount: number): boolean {
                                                if (closedQuantity > 0) {
                                                    return false;
                                                } else if (closedAmount > 0) {
                                                    return false;
                                                }
                                                return true;
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_itemdescription"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "itemDescription",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 100
                                            })
                                        }),
                                        width: "16rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_itemversion"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemMaterialVersionEvent,
                                                    this.getBindingContext().getObject()
                                                );
                                            },
                                        }).bindProperty("bindingValue", {
                                            path: "itemVersion",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 10
                                            }),
                                        }),
                                        width: "8rem",
                                        visible: materials.config.isEnableMaterialVersions(),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_warehouse"),
                                        template: new sap.extension.m.RepositoryInput("", {
                                            showValueHelp: true,
                                            repository: materials.bo.BORepositoryMaterials,
                                            dataInfo: {
                                                type: materials.bo.Warehouse,
                                                key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                                text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                            },
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemWarehouseEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            },
                                            showSuggestion: true,
                                            suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                                let selectedItem: any = event.getParameter("selectedItem");
                                                if (!ibas.objects.isNull(selectedItem)) {
                                                    that.fireViewEvents(that.choosePurchaseInvoiceItemWarehouseEvent, this.getBindingContext().getObject(), this.itemConditions(selectedItem));
                                                }
                                            },
                                            criteria: [
                                                new ibas.Condition(materials.bo.Warehouse.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                                            ]
                                        }).bindProperty("bindingValue", {
                                            path: "warehouse",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_quantity"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity()
                                        })
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_uom"),
                                        template: new sap.extension.m.RepositoryInput("", {
                                            showValueHelp: true,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemUnitEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            },
                                            describeValue: false,
                                            showSuggestion: true,
                                            repository: materials.bo.BORepositoryMaterials,
                                            dataInfo: {
                                                type: materials.bo.Unit,
                                                key: materials.bo.Unit.PROPERTY_NAME_NAME,
                                                text: materials.bo.Unit.PROPERTY_NAME_NAME
                                            },
                                            suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                                let selectedItem: any = event.getParameter("selectedItem");
                                                if (!ibas.objects.isNull(selectedItem)) {
                                                    that.fireViewEvents(that.choosePurchaseInvoiceItemUnitEvent, this.getBindingContext().getObject(), this.itemConditions(selectedItem));
                                                }
                                            },
                                            criteria: [
                                                new ibas.Condition(materials.bo.Unit.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES)
                                            ]
                                        }).bindProperty("bindingValue", {
                                            path: "uom",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }),
                                        width: "8rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_price"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpOnly: false,
                                            valueHelpIconSrc: "sap-icon://time-overtime",
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.viewHistoricalPricesEvent, this.getBindingContext().getObject());
                                            },
                                            fieldWidth: "70%",
                                        }).bindProperty("bindingValue", {
                                            path: "price",
                                            type: new sap.extension.data.Price()
                                        }).bindProperty("description", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        width: "12rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_linetotal"),
                                        template: new sap.extension.m.Input("", {
                                            fieldWidth: "70%",
                                        }).bindProperty("bindingValue", {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Sum()
                                        }).bindProperty("description", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        width: "12rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_tax"),
                                        template: new component.TaxGroupSelect("", {
                                        }).bindProperty("bindingValue", {
                                            path: "tax",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }).bindProperty("rate", {
                                            path: "taxRate",
                                            type: new sap.extension.data.Rate()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_pretaxprice"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpOnly: false,
                                            valueHelpIconSrc: "sap-icon://time-overtime",
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.viewHistoricalPricesEvent, this.getBindingContext().getObject());
                                            },
                                            fieldWidth: "70%",
                                        }).bindProperty("bindingValue", {
                                            path: "preTaxPrice",
                                            type: new sap.extension.data.Price()
                                        }).bindProperty("description", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        width: "12rem",
                                        visible: false,
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_unitprice"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpOnly: false,
                                            valueHelpIconSrc: "sap-icon://time-overtime",
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.viewHistoricalPricesEvent, this.getBindingContext().getObject());
                                            },
                                            fieldWidth: "70%",
                                        }).bindProperty("bindingValue", {
                                            path: "unitPrice",
                                            type: new sap.extension.data.Price()
                                        }).bindProperty("description", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        width: "12rem",
                                        visible: false,
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_reference1"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 100
                                            })
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_reference2"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 200
                                            })
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_distributionrule1"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_1, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule1",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_1)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_distributionrule2"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_2, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule2",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_2)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_distributionrule3"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_3, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule3",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_3)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_distributionrule4"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_4, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule4",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_4)
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_purchaseinvoiceitem_distributionrule5"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpRequest(): void {
                                                that.fireViewEvents(that.choosePurchaseInvoiceItemDistributionRuleEvent,
                                                    accounting.app.emDimensionType.DIMENSION_5, this.getBindingContext().getObject());
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "distributionRule5",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                        visible: accounting.config.isEnableDimension(accounting.app.emDimensionType.DIMENSION_5)
                                    }),
                                ],
                                sortProperty: "visOrder",
                            })
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_others") }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("bo_purchaseinvoice_branch"),
                                visible: accounting.config.isEnableBranch(),
                                required: true,
                            }),
                            new sap.extension.m.DataBranchInput("", {
                                showValueHelp: true,
                                visible: accounting.config.isEnableBranch(),
                            }).bindProperty("bindingValue", {
                                path: "branch",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_dataowner") }),
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_project") }),
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
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_organization") }),
                            new sap.extension.m.DataOrganizationInput("", {
                                width: "100%",
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "organization",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("bo_shippingaddress"),
                                visible: shell.app.privileges.canRun({
                                    id: app.ELEMENT_SHIPPING_ADDRESSES.id,
                                    name: app.ELEMENT_SHIPPING_ADDRESSES.name
                                })
                            }),
                            new component.ShippingAddressSelect("", {
                                visible: shell.app.privileges.canRun({
                                    id: app.ELEMENT_SHIPPING_ADDRESSES.id,
                                    name: app.ELEMENT_SHIPPING_ADDRESSES.name
                                }),
                                editSelected(event: sap.ui.base.Event): void {
                                    that.fireViewEvents(that.editShippingAddressesEvent);
                                }
                            }).bindProperty("bindingValue", {
                                path: "shippingAddresss",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("purchase_title_total") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_documentlinetotal") }),
                            new sap.extension.m.Input("", {
                                editable: false,

                            }).bindProperty("bindingValue", {
                                path: "itemsPreTaxTotal",
                                type: new sap.extension.data.Sum()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_documentlinediscount") }),
                            new sap.extension.m.Input("", {
                                editable: true,
                            }).bindProperty("bindingValue", {
                                path: config.isInverseDiscount() ? "inverseDiscount" : "discount",
                                type: new data.Percentage(),
                            }),
                            new sap.extension.m.Input("", {
                                editable: false,

                            }).bindProperty("bindingValue", {
                                parts: [
                                    {
                                        path: "itemsPreTaxTotal",
                                        type: new sap.extension.data.Sum()
                                    },
                                    {
                                        path: "discount",
                                        type: new sap.extension.data.Percentage()
                                    },
                                ],
                                formatter(preTaxTotal: number, discount: number): number {
                                    return sap.extension.data.formatValue(sap.extension.data.Sum,
                                        ibas.numbers.valueOf(discount) === 1 ? 0 :
                                            -ibas.numbers.valueOf(preTaxTotal) * (1 - ibas.numbers.valueOf(discount))
                                        , "string");
                                },
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_shippingsexpensetotal") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                parts: [
                                    {
                                        path: "shippingsExpenseTotal",
                                        type: new sap.extension.data.Sum()
                                    },
                                    {
                                        path: "shippingsTaxTotal",
                                        type: new sap.extension.data.Sum()
                                    }
                                ],
                                formatter(total: number, tax: number): number {
                                    return sap.extension.data.formatValue(sap.extension.data.Sum,
                                        ibas.numbers.valueOf(total) - ibas.numbers.valueOf(tax)
                                        , "string");
                                },
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_documenttaxtotal") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
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
                                        path: "discount",
                                        type: new sap.extension.data.Percentage()
                                    },
                                ],
                                formatter(lineTax: number, shippingTax: number, discount: number): number {
                                    return sap.extension.data.formatValue(sap.extension.data.Sum,
                                        (ibas.numbers.valueOf(lineTax) * ibas.numbers.valueOf(discount)) + ibas.numbers.valueOf(shippingTax)
                                        , "string");
                                },
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_rounding") }),
                            new sap.m.FlexBox("", {
                                width: "100%",
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                items: [
                                    new sap.extension.m.Input("", {
                                    }).bindProperty("bindingValue", {
                                        path: "diffAmount",
                                        type: new sap.extension.data.Sum()
                                    }).bindProperty("editable", {
                                        path: "rounding",
                                        type: new sap.extension.data.YesNo()
                                    }).addStyleClass("sapUiTinyMarginEnd"),
                                    new sap.extension.m.CheckBox("", {
                                    }).bindProperty("bindingValue", {
                                        path: "rounding",
                                        type: new sap.extension.data.YesNo()
                                    }),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_documenttotal") }),
                            new sap.m.FlexBox("", {
                                width: "100%",
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                items: [
                                    new sap.extension.m.Input("", {
                                        width: "70%",
                                        editable: true,
                                    }).bindProperty("bindingValue", {
                                        path: "documentTotal",
                                        type: new sap.extension.data.Sum()
                                    }).addStyleClass("sapUiTinyMarginEnd"),
                                    new sap.extension.m.CurrencyRateSelect("", {
                                        baseCurrency: accounting.config.currency("LOCAL"),
                                        currency: {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                        rate: {
                                            path: "documentRate",
                                            type: new sap.extension.data.Rate()
                                        },
                                        date: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date()
                                        }
                                    }),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_downpaymenttotal") }),
                            new sap.m.FlexBox("", {
                                width: "100%",
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                items: [
                                    new sap.extension.m.Input("", {
                                        editable: false,
                                    }).bindProperty("bindingValue", {
                                        path: "downPaymentTotal",
                                        type: new sap.extension.data.Sum()
                                    }).addStyleClass("sapUiTinyMarginEnd"),
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Default,
                                        icon: "sap-icon://list",
                                        press: function (): void {
                                            new sap.m.Dialog("", {
                                                title: ibas.i18n.prop("bo_purchaseinvoicedownpayment"),
                                                type: sap.m.DialogType.Standard,
                                                state: sap.ui.core.ValueState.None,
                                                horizontalScrolling: true,
                                                verticalScrolling: true,
                                                content: [
                                                    that.tablePurchaseInvoiceDownPayment
                                                ],
                                                buttons: [
                                                    new sap.m.Button("", {
                                                        text: ibas.i18n.prop("shell_exit"),
                                                        type: sap.m.ButtonType.Transparent,
                                                        press: function (): void {
                                                            (<sap.m.Dialog>that.tablePurchaseInvoiceDownPayment.getParent()).close();
                                                        }
                                                    }),
                                                ]
                                            }).addStyleClass("sapUiNoContentPadding").open();
                                        }
                                    }),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseinvoice_paidtotal") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                parts: [
                                    {
                                        path: "downPaymentTotal",
                                        type: new sap.extension.data.Sum()
                                    }, {
                                        path: "paidTotal",
                                        type: new sap.extension.data.Sum()
                                    }
                                ],
                                formatter(downPaymentTotal: number, paidTotal: number): number {
                                    return sap.extension.data.formatValue(sap.extension.data.Sum, ibas.numbers.valueOf(downPaymentTotal) + ibas.numbers.valueOf(paidTotal), "string");
                                }
                            }),
                        ]
                    });
                    this.tablePurchaseInvoiceDownPayment = new sap.extension.table.DataTable("", {
                        enableSelectAll: false,
                        visibleRowCount: sap.extension.table.visibleRowCount(8),
                        dataInfo: {
                            code: bo.PurchaseInvoice.BUSINESS_OBJECT_CODE,
                            name: bo.PurchaseInvoiceDownPayment.name
                        },
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.MenuButton("", {
                                    type: sap.m.ButtonType.Default,
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    useDefaultActionOnly: true,
                                    buttonMode: sap.m.MenuButtonMode.Split,
                                    menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("purchase_documents_only_associated"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.addPurchaseInvoiceDownPaymentEvent);
                                                }
                                            }),
                                        ]
                                    }),
                                    defaultAction(): void {
                                        that.fireViewEvents(that.addPurchaseInvoiceDownPaymentEvent, new ibas.Criteria());
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Default,
                                    icon: "sap-icon://less",
                                    press(): void {
                                        that.fireViewEvents(that.removePurchaseInvoiceDownPaymentEvent, that.tablePurchaseInvoiceDownPayment.getSelecteds());
                                    }
                                })
                            ]
                        }),
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_lineid"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "lineId",
                                    type: new sap.extension.data.Numeric(),
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_payment"),
                                template: new sap.extension.m.Link("", {
                                    press(this: sap.extension.m.Link): void {
                                        let data: any = this.getBindingContext().getObject();
                                        if (data instanceof bo.PurchaseInvoiceDownPayment) {
                                            if (data.paymentEntry > 0) {
                                                if (ibas.servicesManager.runLinkService({
                                                    boCode: data.paymentType,
                                                    linkValue: data.paymentEntry.toString(),
                                                })) {
                                                    (<sap.m.Dialog>that.tablePurchaseInvoiceDownPayment.getParent()).close();
                                                }
                                            }
                                        }
                                    }
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "paymentType",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 30
                                            }),
                                        }, {
                                            path: "paymentEntry",
                                            type: new sap.extension.data.Numeric(),
                                        }, {
                                            path: "paymentLineId",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    ],
                                    formatter(type: string, entry: number, lineId: number): string {
                                        if (ibas.objects.isNull(type) || ibas.objects.isNull(entry)) {
                                            return "";
                                        }
                                        return ibas.businessobjects.describe(ibas.strings.format("{[{0}].[DocEntry = {1}]}", type, entry))
                                            + (lineId > 0 ? ibas.strings.format(", {0}-{1}", ibas.i18n.prop("bo_purchaseinvoicedownpayment_lineid"), lineId) : "");
                                    }
                                }),
                                width: "14rem",
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_paymenttotal"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "paymentTotal",
                                            type: new sap.extension.data.Sum(),
                                        }, {
                                            path: "paymentCurrency",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }
                                    ]
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_drawntotal"),
                                template: new sap.extension.m.Input("", {
                                }).bindProperty("bindingValue", {
                                    path: "drawnTotal",
                                    type: new sap.extension.data.Sum(),
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_basedocument"),
                                template: new sap.extension.m.Link("", {
                                    press(this: sap.extension.m.Link): void {
                                        let data: any = this.getBindingContext().getObject();
                                        if (data instanceof bo.PurchaseInvoiceDownPayment) {
                                            if (data.baseDocumentEntry > 0) {
                                                if (ibas.servicesManager.runLinkService({
                                                    boCode: data.baseDocumentType,
                                                    linkValue: data.baseDocumentEntry.toString(),
                                                })) {
                                                    (<sap.m.Dialog>that.tablePurchaseInvoiceDownPayment.getParent()).close();
                                                }
                                            }
                                        }
                                    }
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "baseDocumentType",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 30
                                            }),
                                        }, {
                                            path: "baseDocumentEntry",
                                            type: new sap.extension.data.Numeric(),
                                        }, {
                                            path: "baseDocumentLineId",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    ],
                                    formatter(type: string, entry: number, lineId: number): string {
                                        if (ibas.objects.isNull(type) || ibas.objects.isNull(entry)) {
                                            return "";
                                        }
                                        return ibas.businessobjects.describe(ibas.strings.format("{[{0}].[DocEntry = {1}]}", type, entry))
                                            + (lineId > 0 ? ibas.strings.format(", {0}-{1}", ibas.i18n.prop("bo_purchaseinvoicedownpayment_lineid"), lineId) : "");
                                    }
                                }),
                                width: "12rem",
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_originaldocument"),
                                template: new sap.extension.m.Link("", {
                                    press(this: sap.extension.m.Link): void {
                                        let data: any = this.getBindingContext().getObject();
                                        if (data instanceof bo.PurchaseInvoiceDownPayment) {
                                            if (data.originalDocumentEntry > 0) {
                                                if (ibas.servicesManager.runLinkService({
                                                    boCode: data.originalDocumentType,
                                                    linkValue: data.originalDocumentEntry.toString(),
                                                })) {
                                                    (<sap.m.Dialog>that.tablePurchaseInvoiceDownPayment.getParent()).close();
                                                }
                                            }
                                        }
                                    }
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "originalDocumentType",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 30
                                            }),
                                        }, {
                                            path: "originalDocumentEntry",
                                            type: new sap.extension.data.Numeric(),
                                        }, {
                                            path: "originalDocumentLineId",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    ],
                                    formatter(type: string, entry: number, lineId: number): string {
                                        if (ibas.objects.isNull(type) || ibas.objects.isNull(entry)) {
                                            return "";
                                        }
                                        return ibas.businessobjects.describe(ibas.strings.format("{[{0}].[DocEntry = {1}]}", type, entry))
                                            + (lineId > 0 ? ibas.strings.format(", {0}-{1}", ibas.i18n.prop("bo_purchaseinvoicedownpayment_lineid"), lineId) : "");
                                    }
                                }),
                                width: "12rem",
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_reference1"),
                                template: new sap.extension.m.Input("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference1",
                                    type: new sap.extension.data.Alphanumeric({
                                        maxLength: 100
                                    }),
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchaseinvoicedownpayment_reference2"),
                                template: new sap.extension.m.Input("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference2",
                                    type: new sap.extension.data.Alphanumeric({
                                        maxLength: 200
                                    }),
                                }),
                            }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.PurchaseInvoice.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
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
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_read"),
                                                icon: "sap-icon://excel-attachment",
                                                press: function (): void {
                                                    // 读取当前对象
                                                    ibas.files.open((files) => {
                                                        that.fireViewEvents(that.createDataEvent, files[0]);
                                                    }, {
                                                        accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                                        multiple: false
                                                    });
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.extension.m.MenuButton("", {
                                    autoHide: true,
                                    text: ibas.i18n.prop("shell_quick_to"),
                                    icon: "sap-icon://generate-shortcut",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_journalentry"),
                                                icon: "sap-icon://credit-card",
                                                press: function (): void {
                                                    let data: any = this.getBindingContext().getObject();
                                                    if (data instanceof bo.PurchaseInvoice) {
                                                        let criteria: ibas.ICriteria = new ibas.Criteria();
                                                        criteria.result = 1;
                                                        let condition: ibas.ICondition = criteria.conditions.create();
                                                        condition.alias = accounting.bo.JournalEntry.PROPERTY_BASEDOCUMENTTYPE_NAME;
                                                        condition.value = data.objectCode;
                                                        condition = criteria.conditions.create();
                                                        condition.alias = accounting.bo.JournalEntry.PROPERTY_BASEDOCUMENTENTRY_NAME;
                                                        condition.value = data.docEntry.toString();
                                                        let sort: ibas.ISort = criteria.sorts.create();
                                                        sort.alias = accounting.bo.JournalEntry.PROPERTY_DOCENTRY_NAME;
                                                        sort.sortType = ibas.emSortType.DESCENDING;
                                                        ibas.servicesManager.runLinkService({
                                                            boCode: accounting.bo.JournalEntry.BUSINESS_OBJECT_CODE,
                                                            linkValue: criteria
                                                        });
                                                    }
                                                },
                                                visible: shell.app.privileges.canRun({
                                                    id: accounting.app.JournalEntryViewApp.APPLICATION_ID,
                                                    name: accounting.app.JournalEntryViewApp.APPLICATION_NAME,
                                                })
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_purchasecreditnote"),
                                                icon: "sap-icon://doc-attachment",
                                                press: function (): void {
                                                    that.fireViewEvents(that.turnToPurchaseCreditNoteEvent);
                                                },
                                                visible: shell.app.privileges.canRun({
                                                    id: purchase.app.PurchaseCreditNoteFunc.FUNCTION_ID,
                                                    name: purchase.app.PurchaseCreditNoteFunc.FUNCTION_NAME,
                                                })
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.strings.format("{0}&{1}", ibas.i18n.prop("bo_material_weight"), ibas.i18n.prop("bo_material_volume")),
                                                icon: "sap-icon://measuring-point",
                                                press: function (): void {
                                                    that.fireViewEvents(that.measuringMaterialsEvent);
                                                },
                                                visible: shell.app.privileges.canRun({
                                                    id: materials.app.MaterialMeasurementService.APPLICATION_ID,
                                                    name: materials.app.MaterialMeasurementService.APPLICATION_NAME,
                                                })
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
                            formPurchaseInvoiceItem,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;
                private tablePurchaseInvoiceItem: sap.extension.table.Table;
                private tablePurchaseInvoiceDownPayment: sap.extension.table.Table;
                private selectWarehouse: component.WarehouseSelect;
                get defaultWarehouse(): string {
                    return this.selectWarehouse.getSelectedKey();
                }
                set defaultWarehouse(value: string) {
                    this.selectWarehouse.setSelectedKey(value);
                }
                /** 默认税组 */
                defaultTaxGroup: string;
                /** 显示数据 */
                showPurchaseInvoice(data: bo.PurchaseInvoice): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                    // 设置分支对象
                    if (accounting.config.isEnableBranch()) {
                        this.selectWarehouse.setModel(new sap.extension.model.JSONModel(data));
                    }
                }
                /** 显示数据-采购发票-行 */
                showPurchaseInvoiceItems(datas: bo.PurchaseInvoiceItem[]): void {
                    this.tablePurchaseInvoiceItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 显示数据-采购发票-预付款 */
                showPurchaseInvoiceDownPayments(datas: bo.PurchaseInvoiceDownPayment[]): void {
                    this.tablePurchaseInvoiceDownPayment.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}