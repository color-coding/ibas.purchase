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
             * 选择视图-采购预留发票
             */
            export class PurchaseReserveInvoiceChooseView extends ibas.BOQueryDialogViewWithPanel implements app.IPurchaseReserveInvoiceChooseView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.PurchaseReserveInvoice;
                }
                chooseType: ibas.emChooseType;
                mode: ibas.emViewMode;
                chooseDataEvent: Function;
                newDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.table = new sap.extension.table.DataTable("", {
                        chooseType: this.chooseType,
                        visibleRowCount: sap.extension.table.visibleRowCount(15),
                        dataInfo: this.queryTarget,
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_docentry"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "docEntry",
                                    type: new sap.extension.data.Numeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_approvalstatus"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "approvalStatus",
                                    type: new sap.extension.data.ApprovalStatus(true)
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_canceled"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(true)
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_documentstatus"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(true)
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_suppliercode"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "supplierCode",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_suppliername"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "supplierName",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_documentdate"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "documentDate",
                                    type: new sap.extension.data.Date()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_deliverydate"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "deliveryDate",
                                    type: new sap.extension.data.Date()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_documenttotal"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "documentTotal",
                                            type: new sap.extension.data.Sum()
                                        }, {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    ]
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_paidtotal"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "paidTotal",
                                            type: new sap.extension.data.Sum()
                                        }, {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    ]
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_ordertype"),
                                template: new sap.extension.m.PropertyText("", {
                                    dataInfo: {
                                        code: bo.PurchaseReserveInvoice.BUSINESS_OBJECT_CODE,
                                    },
                                    propertyName: "orderType",
                                }).bindProperty("bindingValue", {
                                    path: "orderType",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_dataowner"),
                                template: new sap.extension.m.UserText("", {
                                }).bindProperty("bindingValue", {
                                    path: "dataOwner",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_reference1"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference1",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoice_reference2"),
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
                        },
                        rowDoubleClick(event: sap.ui.base.Event): void {
                            that.fireViewEvents(that.chooseDataEvent, event.getParameter("row")?.getBindingContext()?.getObject());
                        }
                    });
                    this.itemTable = new sap.extension.table.DataTable("", {
                        chooseType: ibas.emChooseType.MULTIPLE,
                        visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
                        dataInfo: {
                            code: bo.PurchaseReserveInvoice.BUSINESS_OBJECT_CODE,
                            name: bo.PurchaseReserveInvoiceItem.name
                        },
                        rows: "{/}",
                        columns: [
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_lineid"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "docEntry",
                                            type: new sap.extension.data.Numeric()
                                        },
                                        {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric()

                                        }
                                    ],
                                    formatter(docEntry: number, lineId: number): string {
                                        return ibas.strings.format("{0} - {1}", docEntry, lineId);
                                    }
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_itemcode"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "itemCode",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_itemdescription"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "itemDescription",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_warehouse"),
                                template: new sap.extension.m.RepositoryText("", {
                                    repository: materials.bo.BORepositoryMaterials,
                                    dataInfo: {
                                        type: materials.bo.Warehouse,
                                        key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                        text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                    },
                                }).bindProperty("bindingValue", {
                                    path: "warehouse",
                                    type: new sap.extension.data.Alphanumeric(),
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_quantity"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "quantity",
                                            type: new sap.extension.data.Quantity()
                                        }, {
                                            path: "uom",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    ]
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_price"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "price",
                                            type: new sap.extension.data.Price()
                                        }, {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    ]
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_linetotal"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    parts: [
                                        {
                                            path: "lineTotal",
                                            type: new sap.extension.data.Sum()
                                        }, {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric()
                                        }
                                    ]
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_reference1"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference1",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                            new sap.extension.table.DataColumn("", {
                                label: ibas.i18n.prop("bo_purchasereserveinvoiceitem_reference2"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("bindingValue", {
                                    path: "reference2",
                                    type: new sap.extension.data.Alphanumeric()
                                }),
                            }),
                        ],
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: bo.PurchaseReserveInvoiceItem = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastCriteria)) {
                                return;
                            }
                            let docData: bo.PurchaseReserveInvoice = new bo.PurchaseReserveInvoice();
                            docData.docEntry = data.docEntry;

                            let criteria: ibas.ICriteria = that.lastCriteria.next(docData);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchDataEvent, criteria);
                        },
                        rowDoubleClick(event: sap.ui.base.Event): void {
                            let selectItems: bo.PurchaseReserveInvoiceItem[] = ibas.arrays.create(event.getParameter("row")?.getBindingContext()?.getObject());
                            if (selectItems.length === 0) {
                                selectItems = that.itemTable.getSelecteds();
                            }
                            let selects: bo.PurchaseReserveInvoice[] = that.table.getModel().getData("rows");
                            for (let select of selects) {
                                let has: boolean = false;
                                for (let i: number = select.purchaseReserveInvoiceItems.length - 1; i >= 0; i--) {
                                    let item: any = select.purchaseReserveInvoiceItems[i];
                                    if (selectItems.find(c => c === item)) {
                                        has = true;
                                        continue;
                                    }
                                    select.purchaseReserveInvoiceItems.removeAt(i);
                                }
                                if (has === false) {
                                    select.markDeleted();
                                }
                            }
                            that.fireViewEvents(that.chooseDataEvent, selects.filter(c => c.isDeleted === false));
                        }
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        contentWidth: "90%",
                        contentHeight: ibas.strings.format("{0}rem", (sap.extension.table.visibleRowCount(15) + 4) * 2 + 1),
                        content: [
                            this.container = new sap.m.NavContainer("", {
                                autoFocus: false,
                                defaultTransitionName: "baseSlide",
                                pages: [
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        enableScrolling: false,
                                        content: [
                                            this.table
                                        ],
                                        footer: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.m.ToolbarSpacer(),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("shell_data_new"),
                                                    type: sap.m.ButtonType.Default,
                                                    visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                                    press: function (): void {
                                                        that.fireViewEvents(that.newDataEvent);
                                                    }
                                                }),
                                                new sap.m.MenuButton("", {
                                                    text: ibas.i18n.prop("shell_data_choose"),
                                                    type: sap.m.ButtonType.Default,
                                                    menuPosition: sap.ui.core.Popup.Dock.EndTop,
                                                    buttonMode: sap.m.MenuButtonMode.Split,
                                                    useDefaultActionOnly: true,
                                                    defaultAction(): void {
                                                        that.fireViewEvents(that.chooseDataEvent, that.table.getSelecteds());
                                                    },
                                                    menu: new sap.m.Menu("", {
                                                        items: [
                                                            this.customMenuItem = new sap.m.MenuItem("", {
                                                                icon: "sap-icon://multi-select",
                                                                text: ibas.i18n.prop("shell_data_customized"),
                                                                visible: this.usingCriteria?.noChilds === true ? false : true,
                                                                press: function (): void {
                                                                    let selecteds: ibas.IList<bo.PurchaseReserveInvoice> = that.table.getSelecteds();
                                                                    if (selecteds.length === 0) {
                                                                        that.application.viewShower.messages({
                                                                            title: that.title,
                                                                            type: ibas.emMessageType.WARNING,
                                                                            message: ibas.i18n.prop("shell_please_chooose_data", ibas.i18n.prop("shell_data_customized")),
                                                                        });
                                                                    } else {
                                                                        that.itemTable.setModel(undefined);
                                                                        that.showDataItems(selecteds);
                                                                    }
                                                                },
                                                            }),
                                                            new sap.m.MenuItem("", {
                                                                icon: "sap-icon://multiselect-all",
                                                                text: ibas.i18n.prop("shell_all"),
                                                                press: function (): void {
                                                                    that.fireViewEvents(that.chooseDataEvent, that.table.getSelecteds());
                                                                },
                                                            }),
                                                        ],
                                                    })
                                                }),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("shell_exit"),
                                                    type: sap.m.ButtonType.Default,
                                                    press: function (): void {
                                                        that.fireViewEvents(that.closeEvent);
                                                    }
                                                }),
                                            ]
                                        })
                                    }),
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        enableScrolling: false,
                                        content: [
                                            this.itemTable,
                                        ],
                                        subHeader: new sap.m.Toolbar("", {
                                            style: sap.m.ToolbarStyle.Clear,
                                            design: sap.m.ToolbarDesign.Transparent,
                                            content: [
                                                new sap.m.SearchField("", {
                                                    search(event: sap.ui.base.Event): void {
                                                        let source: any = event.getSource();
                                                        if (source instanceof sap.m.SearchField) {
                                                            let search: string = source.getValue();
                                                            if (!ibas.strings.isEmpty(search)) {
                                                                search = search.trim().toLowerCase();
                                                            }
                                                            let filters: ibas.IList<sap.ui.model.Filter> = new ibas.ArrayList<sap.ui.model.Filter>();
                                                            if (!ibas.strings.isEmpty(search)) {
                                                                for (let i: number = 0; i < that.itemTable.getVisibleRowCount(); i++) {
                                                                    let row: sap.ui.table.Row = that.itemTable.getRows()[i];
                                                                    let data: ibas.IBODocumentLine = row.getBindingContext()?.getObject();
                                                                    if (ibas.objects.isNull(data)) {
                                                                        continue;
                                                                    }
                                                                    let done: boolean = false;
                                                                    for (let cell of row.getCells()) {
                                                                        if (cell instanceof sap.m.Text) {
                                                                            let text: string = cell.getText(false);
                                                                            if (text && text.toLowerCase().indexOf(search) >= 0) {
                                                                                done = true;
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    if (done) {
                                                                        filters.add(new sap.ui.model.Filter({
                                                                            filters: [
                                                                                new sap.ui.model.Filter("docEntry", sap.ui.model.FilterOperator.EQ, data.docEntry),
                                                                                new sap.ui.model.Filter("lineId", sap.ui.model.FilterOperator.EQ, data.lineId),
                                                                            ],
                                                                            and: true,
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                            let binding: any = that.itemTable.getBinding("rows");
                                                            if (binding instanceof sap.ui.model.ListBinding) {
                                                                if (filters.length > 0) {
                                                                    binding.filter(new sap.ui.model.Filter({ filters: filters, and: false }));
                                                                } else {
                                                                    binding.filter(undefined);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }),
                                            ]
                                        }),
                                        footer: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.m.ToolbarSpacer(),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("shell_back"),
                                                    type: sap.m.ButtonType.Default,
                                                    press: function (): void {
                                                        that.container.back(that.table.getParent().getId());
                                                    }
                                                }),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("shell_data_choose"),
                                                    type: sap.m.ButtonType.Default,
                                                    press: function (): void {
                                                        (<any>that.itemTable).fireRowDoubleClick({});
                                                    }
                                                }),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("shell_exit"),
                                                    type: sap.m.ButtonType.Default,
                                                    press: function (): void {
                                                        that.fireViewEvents(that.closeEvent);
                                                    }
                                                }),
                                            ]
                                        })
                                    }),
                                ]
                            }),
                        ],
                        buttons: [
                        ],
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private container: sap.m.NavContainer;
                private table: sap.extension.table.Table;
                private itemTable: sap.extension.table.Table;
                private customMenuItem: sap.m.MenuItem;

                embedded(view: any): void {
                    let page: any = this.table.getParent();
                    if (page instanceof sap.m.Page) {
                        if (view instanceof sap.m.Toolbar) {
                            view.setStyle(sap.m.ToolbarStyle.Clear);
                            view.setDesign(sap.m.ToolbarDesign.Transparent);
                            for (let item of view.getContent()) {
                                if (item instanceof sap.m.Button) {
                                    // 隐藏配置钮
                                    if (item.getIcon() === "sap-icon://filter") {
                                        item.setVisible(false);
                                    }
                                }
                            }
                        }
                        page.setSubHeader(view);
                    }
                }
                showDataItems(datas: bo.PurchaseReserveInvoice[]): void {
                    this.container.to(this.itemTable.getParent().getId());
                    let dataItems: ibas.IList<bo.PurchaseReserveInvoiceItem> = new ibas.ArrayList<bo.PurchaseReserveInvoiceItem>();
                    for (let item of datas) {
                        dataItems.add(item.purchaseReserveInvoiceItems);
                    }
                    let model: sap.ui.model.Model = this.itemTable.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(dataItems);
                    } else {
                        this.itemTable.setModel(new sap.extension.model.JSONModel(dataItems));
                    }
                    this.itemTable.setBusy(false);
                }

                /** 显示数据 */
                showData(datas: bo.PurchaseReserveInvoice[]): void {
                    let model: sap.ui.model.Model = this.table.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        if (config.isFirstUseDocumentLineChoose()) {
                            if (this.container.getCurrentPage() !== this.container.getPages()[1]) {
                                this.container.to(this.container.getPages()[1]);
                            }
                        }
                        this.table.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.table.setBusy(false);
                    if (this.container.getCurrentPage() === this.container.getPages()[1]) {
                        this.showDataItems(datas);
                    }
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.table.setBusy(true);
                        this.table.setFirstVisibleRow(0);
                        this.table.setModel(null);
                        // 不查子项，则不显示定制钮
                        if (criteria?.noChilds === true) {
                            this.customMenuItem?.setVisible(false);
                        } else {
                            this.customMenuItem?.setVisible(true);
                        }
                    }
                }
            }
        }
    }
}