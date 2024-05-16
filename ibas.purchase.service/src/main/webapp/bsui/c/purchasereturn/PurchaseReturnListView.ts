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
             * 列表视图-采购退货
             */
            export class PurchaseReturnListView extends ibas.BOListView implements app.IPurchaseReturnListView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.PurchaseReturn;
                }
                /** 编辑数据，参数：目标数据 */
                editDataEvent: Function;
                /** 删除数据事件，参数：删除对象集合 */
                deleteDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.table = new sap.extension.table.DataTable("", {
                        enableSelectAll: true,
                        visibleRowCount: sap.extension.table.visibleRowCount(15),
                        visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Interactive,
                        dataInfo: this.queryTarget,
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_docentry"),
                                template: new sap.extension.m.DataLink("", {
                                    objectCode: {
                                        path: "objectCode",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }
                                }).bindProperty("bindingValue", {
                                    path: "docEntry",
                                    type: new sap.extension.data.Numeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_approvalstatus"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "approvalStatus",
                                    type: new sap.extension.data.ApprovalStatus(true)
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_canceled"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(true)
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_documentstatus"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(true)
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_suppliercode"),
                                template: new sap.extension.m.DataLink("", {
                                    objectCode: businesspartner.bo.Supplier.BUSINESS_OBJECT_CODE,
                                }).bindProperty("bindingValue", {
                                    path: "supplierCode",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_suppliername"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "supplierName",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_documentdate"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentDate",
                                    type: new sap.extension.data.Date()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_deliverydate"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "deliveryDate",
                                    type: new sap.extension.data.Date()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_documenttotal"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentTotal",
                                    type: new sap.extension.data.Sum()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_paidtotal"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "paidTotal",
                                    type: new sap.extension.data.Sum()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_documentcurrency"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentCurrency",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_ordertype"),
                                template: new sap.extension.m.PropertyText("", {
                                    dataInfo: {
                                        code: bo.PurchaseReturn.BUSINESS_OBJECT_CODE,
                                    },
                                    propertyName: "orderType",
                                }).bindProperty("bindingValue", {
                                    path: "orderType",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_dataowner"),
                                template: new sap.extension.m.UserText("", {
                                }).bindProperty("bindingValue", {
                                    path: "dataOwner",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_reference1"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference1",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereturn_reference2"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference2",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                        ],
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: any = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastCriteria)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchDataEvent, criteria);
                        }
                    });
                    return new sap.extension.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://create",
                                    press: function (): void {
                                        that.fireViewEvents(that.newDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_view"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://display",
                                    press: function (): void {
                                        that.fireViewEvents(that.viewDataEvent, that.table.getSelecteds().firstOrDefault());
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_edit"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://edit",
                                    press: function (): void {
                                        that.fireViewEvents(that.editDataEvent, that.table.getSelecteds().firstOrDefault());
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent, that.table.getSelecteds());
                                    }
                                }),
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press: function (event: sap.ui.base.Event): void {
                                        // 列表查的不完全，重新获取实例
                                        let source: any = event.getSource();
                                        let criteria: ibas.Criteria = new ibas.Criteria();
                                        criteria.result = 0;
                                        let condition: ibas.ICondition;
                                        for (let item of that.table.getSelecteds<bo.PurchaseReturn>()) {
                                            criteria.result++;
                                            condition = criteria.conditions.create();
                                            if (criteria.conditions.length > 1) {
                                                condition.relationship = ibas.emConditionRelationship.OR;
                                            }
                                            condition.alias = bo.PurchaseReturn.PROPERTY_DOCENTRY_NAME;
                                            condition.value = String(item.docEntry);
                                        }
                                        let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                                        boRepository.fetchPurchaseReturn({
                                            criteria: criteria,
                                            onCompleted: (opRslt) => {
                                                ibas.servicesManager.showServices({
                                                    proxy: new ibas.BOServiceProxy({
                                                        data: opRslt.resultObjects,
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
                                                        actionSheet.openBy(source);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                })
                            ]
                        }),
                        content: [
                            this.table,
                        ]
                    });
                }
                private table: sap.extension.table.Table;
                /** 显示数据 */
                showData(datas: bo.PurchaseReturn[]): void {
                    let model: sap.ui.model.Model = this.table.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.table.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.table.setBusy(true);
                        this.table.setFirstVisibleRow(0);
                        this.table.setModel(null);
                    }
                }
            }
        }
    }
}