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
             * 视图-采购助手
             */
            export class PurchasingAssistantView extends ibas.View implements app.IPurchasingAssistantView {
                /** 查询销售订单 */
                fetchSalesOrderEvent: Function;
                /** 选择采购订单供应商信息 */
                choosePurchaseOrderSupplierEvent: Function;
                /** 选择采购订单价格清单信息 */
                choosePurchaseOrderPriceListEvent: Function;
                /** 保存采购订单 */
                savePurchaseOrderEvent: Function;
                /** 编辑采购订单 */
                editPurchaseOrderEvent: Function;
                /** 选择销售订单行事件 */
                chooseSalesOrderItemEvent: Function;
                /** 删除采购订单-行事件 */
                removePurchaseOrderItemEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.leftTop = new sap.m.HBox("", {
                        width: "100%",
                        items: [
                            new sap.m.VBox("", {
                                width: "85%",
                                items: [
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.Title("", {
                                                width: "8rem",
                                                text: ibas.i18n.prop("purchase_assistant_customer")
                                            }),
                                            this.inputCustomer = new sap.m.MultiInput("", {
                                                showValueHelp: true,
                                                valueHelpOnly: false,
                                                valueHelpRequest(event: sap.ui.base.Event): void {
                                                    let source: any = event.getSource();
                                                    ibas.servicesManager.runChooseService<businesspartner.bo.Customer>({
                                                        chooseType: ibas.emChooseType.MULTIPLE,
                                                        boCode: businesspartner.bo.Customer.BUSINESS_OBJECT_CODE,
                                                        criteria: app.conditions.customer.create(),
                                                        onCompleted: (selecteds) => {
                                                            if (source instanceof sap.m.MultiInput) {
                                                                for (let selected of selecteds) {
                                                                    source.addToken(new sap.m.Token("", {
                                                                        key: selected.code,
                                                                        text: selected.name,
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    });
                                                },
                                                autocomplete: false,
                                                filterSuggests: false,
                                                showSuggestion: true,
                                                maxSuggestionWidth: "auto",
                                                suggest(event: sap.ui.base.Event): void {
                                                    let source: sap.m.MultiInput = <any>sap.ui.getCore().byId(event.getParameter("id"));
                                                    let value: string = event.getParameter("suggestValue");
                                                    if ((<any>source)._lastSuggestValue) {
                                                        if ((<any>source)._lastSuggestValue.trim() === value.trim()) {
                                                            // 查询结果与上次一致，则使用优先使用已有的
                                                            for (let item of source.getSuggestionItems()) {
                                                                if (item.getKey() === value) {
                                                                    source.setSelectedItem(item);
                                                                    (<any>source).fireSuggestionItemSelected({
                                                                        selectedItem: item
                                                                    });
                                                                    return;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    (<any>source)._lastSuggestValue = value;
                                                    value = ibas.strings.replace(value, " ", "%");
                                                    let criteria: ibas.ICriteria = new ibas.Criteria();
                                                    if (ibas.objects.isNull(criteria.noChilds)) {
                                                        criteria.noChilds = true;
                                                    }
                                                    if (!(criteria.result > 0)) {
                                                        criteria.result = Math.round(ibas.config.get(ibas.CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30) / 3);
                                                        if (!(criteria.result > 0)) {
                                                            criteria.result = 10;
                                                        }
                                                    }
                                                    if (criteria.conditions.length > 1) {
                                                        criteria.conditions.firstOrDefault().bracketOpen++;
                                                        criteria.conditions.lastOrDefault().bracketClose++;
                                                    }
                                                    let condition: ibas.ICondition = criteria.conditions.create();
                                                    condition.bracketOpen = 1;
                                                    condition.alias = businesspartner.bo.Customer.PROPERTY_CODE_NAME;
                                                    condition.operation = ibas.emConditionOperation.CONTAIN;
                                                    condition.value = value;
                                                    condition = criteria.conditions.create();
                                                    condition.alias = businesspartner.bo.Customer.PROPERTY_NAME_NAME;
                                                    condition.operation = ibas.emConditionOperation.CONTAIN;
                                                    condition.value = value;
                                                    condition.relationship = ibas.emConditionRelationship.OR;
                                                    condition.bracketClose = 1;
                                                    let boReposiorty: businesspartner.bo.BORepositoryBusinessPartner = new businesspartner.bo.BORepositoryBusinessPartner();
                                                    boReposiorty.fetchCustomer({
                                                        criteria: criteria,
                                                        onCompleted: (opRslt) => {
                                                            if (opRslt.resultObjects.length === 0) {
                                                                source.removeAllSuggestionItems();
                                                            } else {
                                                                let sugItems: sap.ui.core.Item[] = source.getSuggestionItems();
                                                                if (sugItems.length > opRslt.resultObjects.length) {
                                                                    for (let i: number = sugItems.length - 1; i >= 0; i--) {
                                                                        sugItems.pop();
                                                                    }
                                                                }
                                                                for (let i: number = 0; i < opRslt.resultObjects.length; i++) {
                                                                    if (i >= sugItems.length) {
                                                                        sugItems.push(new sap.ui.core.ListItem("", {
                                                                            key: opRslt.resultObjects[i].code,
                                                                            text: opRslt.resultObjects[i].code,
                                                                            additionalText: opRslt.resultObjects[i].name,
                                                                        }));
                                                                    } else {
                                                                        let sugItem: sap.ui.core.ListItem = <any>sugItems[i];
                                                                        if (sugItem.getKey() !== opRslt.resultObjects[i].code) {
                                                                            sugItem.setKey(opRslt.resultObjects[i].code);
                                                                            sugItem.setText(opRslt.resultObjects[i].code);
                                                                            sugItem.setAdditionalText(opRslt.resultObjects[i].name);
                                                                        }
                                                                    }
                                                                }
                                                                source.removeAllSuggestionItems();
                                                                for (let item of sugItems) {
                                                                    source.addSuggestionItem(item);
                                                                }
                                                                if (source.getSuggestionItems().length === 1) {
                                                                    let item: any = source.getSuggestionItems()[0];
                                                                    source.setSelectedItem(item);
                                                                    (<any>source).fireSuggestionItemSelected({
                                                                        selectedItem: item
                                                                    });
                                                                } else if (source.getSuggestionItems().length > 1) {
                                                                    // 多个可选值时，尝试选择完全一样的
                                                                    for (let item of source.getSuggestionItems()) {
                                                                        if (item.getKey() === value) {
                                                                            source.setSelectedItem(item);
                                                                            (<any>source).fireSuggestionItemSelected({
                                                                                selectedItem: item
                                                                            });
                                                                            break;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    });
                                                },
                                            }),
                                        ]
                                    }),
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.Title("", {
                                                width: "8rem",
                                                text: ibas.i18n.prop("purchase_assistant_order")
                                            }),
                                            this.inputOrder = new sap.extension.m.Input("", {
                                                showValueHelp: true,
                                                valueHelpOnly: false,
                                                valueHelpRequest(event: sap.ui.base.Event): void {
                                                    let source: any = event.getSource();
                                                    ibas.servicesManager.runChooseService<sales.bo.SalesOrder>({
                                                        chooseType: ibas.emChooseType.SINGLE,
                                                        boCode: sales.bo.SalesOrder.BUSINESS_OBJECT_CODE,
                                                        criteria: app.conditions.salesorder.create(),
                                                        onCompleted: (selecteds) => {
                                                            if (source instanceof sap.m.Input) {
                                                                for (let selected of selecteds) {
                                                                    source.setValue(selected.docEntry.toString());
                                                                }
                                                            }
                                                        }
                                                    });
                                                }
                                            }),
                                            new sap.m.Title("", {
                                                text: ibas.i18n.prop("purchase_assistant_to")
                                            }).addStyleClass("sapUiSmallMarginBegin"),
                                            this.inputOrderTo = new sap.extension.m.Input("", {
                                                showValueHelp: true,
                                                valueHelpOnly: false,
                                                valueHelpRequest(event: sap.ui.base.Event): void {
                                                    let source: any = event.getSource();
                                                    ibas.servicesManager.runChooseService<sales.bo.SalesOrder>({
                                                        chooseType: ibas.emChooseType.SINGLE,
                                                        boCode: sales.bo.SalesOrder.BUSINESS_OBJECT_CODE,
                                                        criteria: app.conditions.salesorder.create(),
                                                        onCompleted: (selecteds) => {
                                                            if (source instanceof sap.m.Input) {
                                                                for (let selected of selecteds) {
                                                                    source.setValue(selected.docEntry.toString());
                                                                }
                                                            }
                                                        }
                                                    });
                                                }
                                            }),
                                        ]
                                    }),
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.Title("", {
                                                width: "8rem",
                                                text: ibas.i18n.prop("purchase_assistant_order_date")
                                            }),
                                            this.inputDate = new sap.extension.m.DatePicker("", {

                                            }),
                                            new sap.m.Title("", {
                                                text: ibas.i18n.prop("purchase_assistant_to")
                                            }).addStyleClass("sapUiSmallMarginBegin"),
                                            this.inputDateTo = new sap.extension.m.DatePicker("", {

                                            }),
                                        ]
                                    }),
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.Title("", {
                                                width: "8rem",
                                                text: ibas.i18n.prop("purchase_assistant_material")
                                            }),
                                            this.inputMaterial = new sap.m.MultiInput("", {
                                                showValueHelp: true,
                                                valueHelpOnly: false,
                                                valueHelpRequest(event: sap.ui.base.Event): void {
                                                    let source: sap.m.Input = <any>event.getSource();
                                                    ibas.servicesManager.runChooseService<materials.bo.Material>({
                                                        chooseType: ibas.emChooseType.MULTIPLE,
                                                        boCode: materials.bo.Material.BUSINESS_OBJECT_CODE,
                                                        criteria: that.checkSuppiler.getSelected() && !ibas.strings.isEmpty(that.inputSupplier.getBindingValue())
                                                            ? app.conditions.material.create(that.inputSupplier.getBindingValue()) : app.conditions.material.create(),
                                                        onCompleted: (selecteds) => {
                                                            if (source instanceof sap.m.MultiInput) {
                                                                for (let selected of selecteds) {
                                                                    source.addToken(new sap.m.Token("", {
                                                                        key: selected.code,
                                                                        text: selected.name,
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    });
                                                },
                                                autocomplete: false,
                                                filterSuggests: false,
                                                showSuggestion: true,
                                                maxSuggestionWidth: "auto",
                                                suggest(event: sap.ui.base.Event): void {
                                                    let source: sap.m.MultiInput = <any>sap.ui.getCore().byId(event.getParameter("id"));
                                                    let value: string = event.getParameter("suggestValue");
                                                    if ((<any>source)._lastSuggestValue) {
                                                        if ((<any>source)._lastSuggestValue.trim() === value.trim()) {
                                                            // 查询结果与上次一致，则使用优先使用已有的
                                                            for (let item of source.getSuggestionItems()) {
                                                                if (item.getKey() === value) {
                                                                    source.setSelectedItem(item);
                                                                    (<any>source).fireSuggestionItemSelected({
                                                                        selectedItem: item
                                                                    });
                                                                    return;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    (<any>source)._lastSuggestValue = value;
                                                    value = ibas.strings.replace(value, " ", "%");
                                                    let criteria: ibas.ICriteria = new ibas.Criteria();
                                                    if (ibas.objects.isNull(criteria.noChilds)) {
                                                        criteria.noChilds = true;
                                                    }
                                                    if (!(criteria.result > 0)) {
                                                        criteria.result = Math.round(ibas.config.get(ibas.CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30) / 3);
                                                        if (!(criteria.result > 0)) {
                                                            criteria.result = 10;
                                                        }
                                                    }
                                                    if (criteria.conditions.length > 1) {
                                                        criteria.conditions.firstOrDefault().bracketOpen++;
                                                        criteria.conditions.lastOrDefault().bracketClose++;
                                                    }
                                                    let condition: ibas.ICondition = criteria.conditions.create();
                                                    condition.bracketOpen = 1;
                                                    condition.alias = materials.bo.Product.PROPERTY_CODE_NAME;
                                                    condition.operation = ibas.emConditionOperation.CONTAIN;
                                                    condition.value = value;
                                                    condition = criteria.conditions.create();
                                                    condition.alias = materials.bo.Product.PROPERTY_NAME_NAME;
                                                    condition.operation = ibas.emConditionOperation.CONTAIN;
                                                    condition.value = value;
                                                    condition.relationship = ibas.emConditionRelationship.OR;
                                                    condition.bracketClose = 1;
                                                    let boReposiorty: materials.bo.BORepositoryMaterials = new materials.bo.BORepositoryMaterials();
                                                    boReposiorty.fetchMaterial({
                                                        criteria: criteria,
                                                        onCompleted: (opRslt) => {
                                                            if (opRslt.resultObjects.length === 0) {
                                                                source.removeAllSuggestionItems();
                                                            } else {
                                                                let sugItems: sap.ui.core.Item[] = source.getSuggestionItems();
                                                                if (sugItems.length > opRslt.resultObjects.length) {
                                                                    for (let i: number = sugItems.length - 1; i >= 0; i--) {
                                                                        sugItems.pop();
                                                                    }
                                                                }
                                                                for (let i: number = 0; i < opRslt.resultObjects.length; i++) {
                                                                    if (i >= sugItems.length) {
                                                                        sugItems.push(new sap.ui.core.ListItem("", {
                                                                            key: opRslt.resultObjects[i].code,
                                                                            text: opRslt.resultObjects[i].code,
                                                                            additionalText: opRslt.resultObjects[i].name,
                                                                        }));
                                                                    } else {
                                                                        let sugItem: sap.ui.core.ListItem = <any>sugItems[i];
                                                                        if (sugItem.getKey() !== opRslt.resultObjects[i].code) {
                                                                            sugItem.setKey(opRslt.resultObjects[i].code);
                                                                            sugItem.setText(opRslt.resultObjects[i].code);
                                                                            sugItem.setAdditionalText(opRslt.resultObjects[i].name);
                                                                        }
                                                                    }
                                                                }
                                                                source.removeAllSuggestionItems();
                                                                for (let item of sugItems) {
                                                                    source.addSuggestionItem(item);
                                                                }
                                                                if (source.getSuggestionItems().length === 1) {
                                                                    let item: any = source.getSuggestionItems()[0];
                                                                    source.setSelectedItem(item);
                                                                    (<any>source).fireSuggestionItemSelected({
                                                                        selectedItem: item
                                                                    });
                                                                } else if (source.getSuggestionItems().length > 1) {
                                                                    // 多个可选值时，尝试选择完全一样的
                                                                    for (let item of source.getSuggestionItems()) {
                                                                        if (item.getKey() === value) {
                                                                            source.setSelectedItem(item);
                                                                            (<any>source).fireSuggestionItemSelected({
                                                                                selectedItem: item
                                                                            });
                                                                            break;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    });
                                                },
                                            }),
                                            this.checkSuppiler = new sap.m.CheckBox("", {
                                                text: ibas.i18n.prop("purchase_assistant_filter_supplier")
                                            })
                                        ]
                                    }),
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.Title("", {
                                                width: "8rem",
                                                text: ibas.i18n.prop("purchase_assistant_order_type")
                                            }),
                                            this.selectType = new sap.extension.m.PropertySelect("", {
                                                width: "8rem",
                                                propertyName: "orderType",
                                                dataInfo: {
                                                    code: sales.bo.SalesOrder.BUSINESS_OBJECT_CODE,
                                                },
                                            }),
                                            new sap.m.Title("", {
                                                width: "8rem",
                                                text: ibas.i18n.prop("purchase_assistant_order_paid")
                                            }).addStyleClass("sapUiSmallMarginBegin"),
                                            this.selectPaid = new sap.extension.m.Select("", {
                                                width: "8rem",
                                                forceSelection: false,
                                                items: [
                                                    new sap.extension.m.SelectItem("", {
                                                        key: "00",
                                                        text: ibas.i18n.prop("purchase_assistant_order_paid_none")
                                                    }),
                                                    new sap.extension.m.SelectItem("", {
                                                        key: "01",
                                                        text: ibas.i18n.prop("purchase_assistant_order_paid_part")
                                                    }),
                                                    new sap.extension.m.SelectItem("", {
                                                        key: "02",
                                                        text: ibas.i18n.prop("purchase_assistant_order_paid_full")
                                                    })
                                                ]
                                            }),
                                            this.checkOrdered = new sap.m.CheckBox("", {
                                                text: ibas.i18n.prop("purchase_assistant_filter_ordered"),
                                                selected: true,
                                            })
                                        ]
                                    })
                                ]
                            }).addStyleClass("sapUiTinyMargin"),
                            new sap.m.VBox("", {
                                width: "15%",
                                items: [
                                    new sap.m.Button("", {
                                        icon: "sap-icon://search",
                                        text: ibas.i18n.prop("shell_query"),
                                        type: sap.m.ButtonType.Accept,
                                        width: "100%",
                                        press(): void {
                                            let value: string;
                                            let count: number;
                                            let condition: ibas.ICondition;
                                            let criteria: ibas.ICriteria = new ibas.Criteria();
                                            // 客户条件
                                            count = criteria.conditions.length;
                                            for (let item of that.inputCustomer.getTokens()) {
                                                value = item.getKey();
                                                if (!ibas.strings.isEmpty(value)) {
                                                    condition = criteria.conditions.create();
                                                    condition.alias = sales.bo.SalesOrder.PROPERTY_CUSTOMERCODE_NAME;
                                                    condition.operation = ibas.emConditionOperation.EQUAL;
                                                    condition.value = value;
                                                    if (criteria.conditions.length > count) {
                                                        condition.relationship = ibas.emConditionRelationship.OR;
                                                    }
                                                }
                                            }
                                            if ((criteria.conditions.length - count) > 1) {
                                                criteria.conditions[count].bracketOpen += 1;
                                                criteria.conditions[criteria.conditions.length - 1].bracketClose += 1;
                                            }
                                            // 订单编号
                                            value = that.inputOrder.getValue();
                                            if (!ibas.strings.isEmpty(value)) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_DOCENTRY_NAME;
                                                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                                                condition.value = value;
                                            }
                                            value = that.inputOrderTo.getValue();
                                            if (!ibas.strings.isEmpty(value)) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_DOCENTRY_NAME;
                                                condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                                                condition.value = value;
                                            }
                                            // 交货日期
                                            value = that.inputDate.getValue();
                                            if (!ibas.strings.isEmpty(value)) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_DELIVERYDATE_NAME;
                                                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                                                condition.value = value;
                                            }
                                            value = that.inputDateTo.getValue();
                                            if (!ibas.strings.isEmpty(value)) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_DELIVERYDATE_NAME;
                                                condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                                                condition.value = value;
                                            }
                                            // 订单类型
                                            value = that.selectType.getSelectedKey();
                                            if (!ibas.strings.isEmpty(value)) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_ORDERTYPE_NAME;
                                                condition.operation = ibas.emConditionOperation.EQUAL;
                                                condition.value = value;
                                            }
                                            // 付款状态
                                            value = that.selectPaid.getSelectedKey();
                                            if (ibas.strings.equalsIgnoreCase(value, "01")) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_PAIDTOTAL_NAME;
                                                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                                                condition.value = "0";
                                            } else if (ibas.strings.equalsIgnoreCase(value, "02")) {
                                                condition = criteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrder.PROPERTY_PAIDTOTAL_NAME;
                                                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                                                condition.comparedAlias = sales.bo.SalesOrder.PROPERTY_DOCUMENTTOTAL_NAME;
                                            }
                                            // 物料筛选
                                            let childCriteria: ibas.IChildCriteria;
                                            for (let item of that.inputMaterial.getTokens()) {
                                                value = item.getKey();
                                                if (!ibas.strings.isEmpty(value)) {
                                                    if (ibas.objects.isNull(childCriteria)) {
                                                        childCriteria = criteria.childCriterias.create();
                                                        childCriteria.propertyPath = sales.bo.SalesOrder.PROPERTY_SALESORDERITEMS_NAME;
                                                        childCriteria.onlyHasChilds = true;
                                                    }
                                                    condition = childCriteria.conditions.create();
                                                    condition.alias = sales.bo.SalesOrderItem.PROPERTY_ITEMCODE_NAME;
                                                    condition.operation = ibas.emConditionOperation.EQUAL;
                                                    condition.value = value;
                                                    if (childCriteria.conditions.length > 1) {
                                                        condition.relationship = ibas.emConditionRelationship.OR;
                                                    }
                                                }
                                            }
                                            // 已订购筛选
                                            if (that.checkOrdered.getSelected() === true) {
                                                if (ibas.objects.isNull(childCriteria)) {
                                                    childCriteria = criteria.childCriterias.create();
                                                    childCriteria.propertyPath = sales.bo.SalesOrder.PROPERTY_SALESORDERITEMS_NAME;
                                                    childCriteria.onlyHasChilds = true;
                                                }
                                                if (childCriteria.conditions.length > 1) {
                                                    childCriteria.conditions.firstOrDefault().bracketOpen += 1;
                                                    childCriteria.conditions.lastOrDefault().bracketClose += 1;
                                                }
                                                condition = childCriteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrderItem.PROPERTY_CANCELED_NAME;
                                                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                                                condition.value = ibas.emYesNo.YES.toString();
                                                condition = childCriteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrderItem.PROPERTY_DELETED_NAME;
                                                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                                                condition.value = ibas.emYesNo.YES.toString();
                                                condition = childCriteria.conditions.create();
                                                condition.alias = sales.bo.SalesOrderItem.PROPERTY_ORDEREDQUANTITY_NAME;
                                                condition.operation = ibas.emConditionOperation.LESS_THAN;
                                                condition.comparedAlias = sales.bo.SalesOrderItem.PROPERTY_QUANTITY_NAME;
                                            }
                                            that.fireViewEvents(that.fetchSalesOrderEvent, criteria);
                                        }
                                    }),
                                    new sap.m.Button("", {
                                        icon: "sap-icon://reset",
                                        text: ibas.i18n.prop("shell_reset"),
                                        type: sap.m.ButtonType.Reject,
                                        width: "100%",
                                        press(): void {
                                            that.inputCustomer.destroyTokens();
                                            that.inputOrder.setValue(null);
                                            that.inputOrderTo.setValue(null);
                                            that.inputDate.setValue(null);
                                            that.inputDateTo.setValue(null);
                                            that.inputMaterial.destroyTokens();
                                            that.selectType.setSelectedItem(null);
                                            that.selectPaid.setSelectedItem(null);
                                            that.checkSuppiler.setSelected(false);
                                            that.checkOrdered.setSelected(true);
                                        }
                                    }),
                                ]
                            }).addStyleClass("sapUiTinyMargin")
                        ],
                    });
                    this.rightTop = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_docnum") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "/docNum",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }).bindProperty("editable", {
                                path: "/series",
                                formatter(data: any): any {
                                    return data > 0 ? false : true;
                                }
                            }),
                            new sap.extension.m.SeriesSelect("", {
                                objectCode: bo.BO_CODE_PURCHASEORDER,
                            }).bindProperty("bindingValue", {
                                path: "/series",
                                type: new sap.extension.data.Numeric()
                            }).bindProperty("editable", {
                                path: "isNew",
                                formatter(data: any): any {
                                    return data === false ? false : true;
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_supplier") }),
                            this.inputSupplier = new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.choosePurchaseOrderSupplierEvent);
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
                                        that.fireViewEvents(that.choosePurchaseOrderSupplierEvent, this.itemConditions(selectedItem));
                                    }
                                },
                            }).bindProperty("bindingValue", {
                                path: "/supplierCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
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
                                path: "/priceList",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_ordertype") }),
                            new sap.extension.m.PropertySelect("", {
                                dataInfo: {
                                    code: bo.PurchaseOrder.BUSINESS_OBJECT_CODE,
                                },
                                propertyName: "orderType",
                            }).bindProperty("bindingValue", {
                                path: "/orderType",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_deliverydate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "/deliveryDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_reference1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "/reference1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_purchaseorder_reference2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "/reference2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                        ]
                    });
                    return new sap.ui.layout.Splitter("", {
                        orientation: sap.ui.core.Orientation.Horizontal,
                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                            resizable: true,
                        }),
                        contentAreas: [
                            new sap.ui.layout.Splitter("", {
                                width: "auto",
                                orientation: sap.ui.core.Orientation.Vertical,
                                layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                    size: "55%",
                                    resizable: true,
                                }),
                                contentAreas: [
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        enableScrolling: true,
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            size: "12rem",
                                            resizable: false,
                                        }),
                                        content: [
                                            this.leftTop,
                                        ],
                                    }),
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        enableScrolling: true,
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            size: "auto",
                                            resizable: false,
                                        }),
                                        content: [
                                            this.leftOrder = new sap.extension.m.List("", {
                                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                                width: "auto",
                                                items: {
                                                    path: "/",
                                                    template: new sap.m.CustomListItem("", {
                                                        content: [
                                                            new sap.m.Panel("", {
                                                                expandable: true,
                                                                expanded: false,
                                                                headerToolbar:
                                                                    new sap.m.Toolbar("", {
                                                                        content: [
                                                                            new sap.m.Title("", {
                                                                                width: "auto",
                                                                                titleStyle: sap.ui.core.TitleLevel.H5,
                                                                            }).bindProperty("text", {
                                                                                path: "docEntry",
                                                                                formatter(data: number): string {
                                                                                    return data ? ibas.strings.format("# {0}", data) : undefined;
                                                                                }
                                                                            }),
                                                                            new sap.m.Title("", {
                                                                                width: "auto",
                                                                                titleStyle: sap.ui.core.TitleLevel.H5,
                                                                            }).addStyleClass("sapUiTinyMarginBegin").bindProperty("text", {
                                                                                parts: [
                                                                                    {
                                                                                        path: "customerCode",
                                                                                    },
                                                                                    {
                                                                                        path: "customerName"
                                                                                    }
                                                                                ],
                                                                                formatter(code: string, name: string): string {
                                                                                    return ibas.strings.format("{1} ({0})", code, name);
                                                                                }
                                                                            }),
                                                                            new sap.m.ToolbarSpacer(""),
                                                                            new sap.m.GenericTag("", {
                                                                                design: sap.m.GenericTagDesign.StatusIconHidden,
                                                                                text: ibas.i18n.prop("purchase_assistant_order_date"),
                                                                                value: new sap.m.ObjectNumber("", {
                                                                                    emphasized: false,
                                                                                    number: {
                                                                                        path: "deliveryDate",
                                                                                        type: new sap.extension.data.Date()
                                                                                    },
                                                                                    state: {
                                                                                        path: "deliveryDate",
                                                                                        formatter(deliveryDate: Date): sap.ui.core.ValueState {
                                                                                            if (ibas.dates.difference(
                                                                                                ibas.dates.emDifferenceType.DAY, deliveryDate, ibas.dates.today()
                                                                                            ) > 7) {
                                                                                                return sap.ui.core.ValueState.Success;
                                                                                            } else if (ibas.dates.difference(
                                                                                                ibas.dates.emDifferenceType.DAY, deliveryDate, ibas.dates.today()
                                                                                            ) > 3) {
                                                                                                return sap.ui.core.ValueState.Warning;
                                                                                            }
                                                                                            return sap.ui.core.ValueState.Error;
                                                                                        }
                                                                                    }
                                                                                })
                                                                            }).addStyleClass("sapUiSmallMarginBegin").bindProperty("status", {
                                                                                path: "deliveryDate",
                                                                                formatter(deliveryDate: Date): sap.ui.core.ValueState {
                                                                                    if (ibas.dates.difference(
                                                                                        ibas.dates.emDifferenceType.DAY, deliveryDate, ibas.dates.today()
                                                                                    ) > 7) {
                                                                                        return sap.ui.core.ValueState.Success;
                                                                                    } else if (ibas.dates.difference(
                                                                                        ibas.dates.emDifferenceType.DAY, deliveryDate, ibas.dates.today()
                                                                                    ) > 3) {
                                                                                        return sap.ui.core.ValueState.Warning;
                                                                                    }
                                                                                    return sap.ui.core.ValueState.Error;
                                                                                }
                                                                            }),
                                                                            new sap.m.GenericTag("", {
                                                                                design: sap.m.GenericTagDesign.StatusIconHidden,
                                                                                text: ibas.i18n.prop("purchase_assistant_order_paid_total"),
                                                                                value: new sap.m.ObjectNumber("", {
                                                                                    emphasized: false,
                                                                                    number: {
                                                                                        path: "paidTotal",
                                                                                        type: new sap.extension.data.Sum()
                                                                                    },
                                                                                    unit: {
                                                                                        path: "documentCurrency",
                                                                                        type: new sap.extension.data.Alphanumeric()
                                                                                    },
                                                                                    state: {
                                                                                        parts: [
                                                                                            {
                                                                                                path: "paidTotal",
                                                                                            },
                                                                                            {
                                                                                                path: "documentTotal",
                                                                                            }
                                                                                        ],
                                                                                        formatter(paidTotal: number, documentTotal: number): sap.ui.core.ValueState {
                                                                                            if (paidTotal >= documentTotal) {
                                                                                                return sap.ui.core.ValueState.Success;
                                                                                            } else if (paidTotal > 0) {
                                                                                                return sap.ui.core.ValueState.Warning;
                                                                                            }
                                                                                            return sap.ui.core.ValueState.Error;
                                                                                        }
                                                                                    }
                                                                                })
                                                                            }).addStyleClass("sapUiTinyMarginBegin").bindProperty("status", {
                                                                                parts: [
                                                                                    {
                                                                                        path: "paidTotal",
                                                                                    },
                                                                                    {
                                                                                        path: "documentTotal",
                                                                                    }
                                                                                ],
                                                                                formatter(paidTotal: number, documentTotal: number): sap.ui.core.ValueState {
                                                                                    if (paidTotal >= documentTotal) {
                                                                                        return sap.ui.core.ValueState.Success;
                                                                                    } else if (paidTotal > 0) {
                                                                                        return sap.ui.core.ValueState.Warning;
                                                                                    }
                                                                                    return sap.ui.core.ValueState.Error;
                                                                                }
                                                                            }),
                                                                            new sap.m.Button("", {
                                                                                type: sap.m.ButtonType.Ghost,
                                                                                // text: ibas.i18n.prop("purchase_assistant_view_details"),
                                                                                icon: "sap-icon://detail-view",
                                                                                press(this: sap.m.Button): void {
                                                                                    let order: any = this.getBindingContext().getObject();
                                                                                    if (order instanceof sales.bo.SalesOrder) {
                                                                                        let criteria: ibas.ICriteria = new ibas.Criteria();
                                                                                        criteria.businessObject = sales.bo.BO_CODE_SALESORDER;
                                                                                        let condition: ibas.ICondition = criteria.conditions.create();
                                                                                        condition.alias = sales.bo.SalesOrder.PROPERTY_DOCENTRY_NAME;
                                                                                        condition.value = order.docEntry.toString();
                                                                                        ibas.servicesManager.runLinkService({
                                                                                            boCode: criteria.businessObject,
                                                                                            linkValue: criteria
                                                                                        });
                                                                                    }
                                                                                }
                                                                            })
                                                                        ]
                                                                    }),
                                                                content: [
                                                                    new sap.extension.m.List("", {
                                                                        width: "auto",
                                                                        inset: false,
                                                                        growing: true,
                                                                        mode: sap.m.ListMode.None,
                                                                        items: {
                                                                            path: "salesOrderItems",
                                                                            templateShareable: false,
                                                                            template: new sap.extension.m.CustomListItem("", {
                                                                                type: sap.m.ListType.Detail,
                                                                                detailIcon: "sap-icon://forward",
                                                                                detailTooltip: ibas.i18n.prop("shell_data_choose"),
                                                                                detailPress(this: sap.m.ListItemBase): void {
                                                                                    if (accounting.config.isEnableBranch()) {
                                                                                        let order: any = this.getParent().getBindingContext().getObject();
                                                                                        if (order instanceof sales.bo.SalesOrder) {
                                                                                            if (order.branch !== that.branchInput.getBindingValue()) {
                                                                                                that.application.viewShower.messages({
                                                                                                    type: ibas.emMessageType.WARNING,
                                                                                                    message: ibas.i18n.prop("purchase_assistant_order_branch_mismatching", order.docEntry),
                                                                                                    title: that.title,
                                                                                                }); return;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    let orderItem: any = this.getBindingContext().getObject();
                                                                                    if (orderItem instanceof sales.bo.SalesOrderItem) {
                                                                                        that.fireViewEvents(
                                                                                            that.chooseSalesOrderItemEvent, orderItem, that.checkMerge.getSelected());
                                                                                    }
                                                                                },
                                                                                content: [
                                                                                    new sap.m.Toolbar("", {
                                                                                        content: [
                                                                                            new sap.m.ObjectAttribute("", {
                                                                                            }).addStyleClass("sapUiTinyMarginBegin").bindProperty("text", {
                                                                                                path: "lineId",
                                                                                                formatter(data: number): string {
                                                                                                    return data ? ibas.strings.format("{0}.", data) : undefined;
                                                                                                }
                                                                                            }),
                                                                                            new sap.m.ObjectAttribute("", {
                                                                                            }).addStyleClass("sapUiTinyMarginBegin").bindProperty("text", {
                                                                                                parts: [
                                                                                                    {
                                                                                                        path: "itemCode",
                                                                                                    },
                                                                                                    {
                                                                                                        path: "itemDescription"
                                                                                                    }
                                                                                                ],
                                                                                                formatter(code: string, name: string): string {
                                                                                                    return ibas.strings.format("{1} ({0})", code, name);
                                                                                                }
                                                                                            }),
                                                                                            new sap.m.ObjectAttribute("", {
                                                                                                text: "×",
                                                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                                                            new sap.m.ObjectNumber("", {
                                                                                                number: {
                                                                                                    path: "quantity",
                                                                                                    type: new sap.extension.data.Quantity()
                                                                                                },
                                                                                                unit: {
                                                                                                    path: "uom",
                                                                                                    type: new sap.extension.data.Alphanumeric()
                                                                                                }
                                                                                            }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginEnd"),
                                                                                            new sap.m.ObjectAttribute("", {
                                                                                                text: {
                                                                                                    path: "reference1",
                                                                                                    type: new sap.extension.data.Alphanumeric()
                                                                                                },
                                                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                                                            new sap.m.ObjectAttribute("", {
                                                                                                text: {
                                                                                                    path: "reference2",
                                                                                                    type: new sap.extension.data.Alphanumeric()
                                                                                                },
                                                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                                                            new sap.m.ToolbarSpacer(""),
                                                                                            new sap.m.ObjectAttribute("", {
                                                                                                text: ibas.i18n.prop("purchase_assistant_order_quantity")
                                                                                            }),
                                                                                            new sap.m.ObjectNumber("", {
                                                                                                number: {
                                                                                                    parts: [
                                                                                                        {
                                                                                                            path: "quantity",
                                                                                                            type: new sap.extension.data.Quantity()
                                                                                                        },
                                                                                                        {
                                                                                                            path: "orderedQuantity",
                                                                                                            type: new sap.extension.data.Quantity()
                                                                                                        }
                                                                                                    ],
                                                                                                    formatter(quantity: number, orderedQuantity: number): string {
                                                                                                        return String((quantity - orderedQuantity) > 0
                                                                                                            ? (quantity - orderedQuantity) : 0);
                                                                                                    }
                                                                                                },
                                                                                                unit: {
                                                                                                    path: "uom",
                                                                                                    type: new sap.extension.data.Alphanumeric()
                                                                                                }
                                                                                            }),
                                                                                        ]
                                                                                    }),
                                                                                ]
                                                                            }),
                                                                        }
                                                                    }).addStyleClass("sapUiSmallMarginBegin"),
                                                                ],
                                                            })
                                                        ]
                                                    }),

                                                },
                                            }),
                                        ],
                                        floatingFooter: false,
                                        footer: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.m.Button("", {
                                                    type: sap.m.ButtonType.Transparent,
                                                    icon: "sap-icon://navigation-right-arrow",
                                                    press: function (this: sap.m.Button): void {
                                                        if (this.getIcon() === "sap-icon://navigation-right-arrow") {
                                                            for (let pItem of that.leftOrder.getItems()) {
                                                                if (pItem instanceof sap.m.CustomListItem) {
                                                                    for (let vItem of pItem.getContent()) {
                                                                        if (vItem instanceof sap.m.Panel) {
                                                                            vItem.setExpanded(true);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            this.setIcon("sap-icon://navigation-down-arrow");
                                                        } else {
                                                            for (let pItem of that.leftOrder.getItems()) {
                                                                if (pItem instanceof sap.m.CustomListItem) {
                                                                    for (let vItem of pItem.getContent()) {
                                                                        if (vItem instanceof sap.m.Panel) {
                                                                            vItem.setExpanded(false);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            this.setIcon("sap-icon://navigation-right-arrow");
                                                        }
                                                    }
                                                }),
                                                new sap.m.ToolbarSeparator(),
                                                new sap.m.Label("", {
                                                    showColon: true,
                                                    text: ibas.i18n.prop("bo_branch"),
                                                    visible: accounting.config.isEnableBranch(),
                                                }),
                                                this.branchInput = new sap.extension.m.BranchInput("", {
                                                    showValueHelp: true,
                                                    width: "12rem",
                                                    visible: accounting.config.isEnableBranch(),
                                                }).bindProperty("bindingValue", {
                                                    path: "/branch",
                                                    type: new sap.extension.data.Alphanumeric({
                                                        maxLength: 8
                                                    })
                                                }).addStyleClass("sapUiTinyMarginBegin"),
                                                new sap.m.ToolbarSpacer(),
                                                that.checkMerge = new sap.m.CheckBox("", {
                                                    text: ibas.i18n.prop("purchase_assistant_merge_purchasing"),
                                                    selected: false,
                                                    select(event: sap.ui.base.Event): void {
                                                        let source: any = event.getSource();
                                                        if (source instanceof sap.m.CheckBox && source.getSelected() === true) {
                                                            that.application.viewShower.messages({
                                                                title: that.title,
                                                                type: ibas.emMessageType.WARNING,
                                                                message: ibas.i18n.prop("purchase_merge_purchasing_will_be_lost_association_relationship_continue"),
                                                                actions: [
                                                                    ibas.emMessageAction.YES,
                                                                    ibas.emMessageAction.NO,
                                                                ],
                                                                onCompleted: (reslut) => {
                                                                    if (reslut === ibas.emMessageAction.NO) {
                                                                        if (source instanceof sap.m.CheckBox) {
                                                                            source.setSelected(false);
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    },
                                                }),
                                                new sap.m.ToolbarSeparator(),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("purchase_assistant_choose_all"),
                                                    icon: "sap-icon://forward",
                                                    type: sap.m.ButtonType.Accept,
                                                    press(this: sap.m.Button): void {
                                                        let datas: any = that.leftOrder.getModel()?.getData();

                                                        let items: ibas.ArrayList<sales.bo.SalesOrderItem> = new ibas.ArrayList<sales.bo.SalesOrderItem>();
                                                        if (datas instanceof Array) {
                                                            for (let data of datas) {
                                                                if (data instanceof sales.bo.SalesOrder) {
                                                                    if (accounting.config.isEnableBranch()) {
                                                                        if (data.branch !== that.branchInput.getBindingValue()) {
                                                                            that.application.viewShower.messages({
                                                                                type: ibas.emMessageType.WARNING,
                                                                                message: ibas.i18n.prop("purchase_assistant_order_branch_mismatching", data.docEntry),
                                                                                title: that.title,
                                                                            }); return;
                                                                        }
                                                                    }
                                                                    items.add(data.salesOrderItems.filterDeleted());
                                                                }
                                                            }
                                                        }
                                                        that.fireViewEvents(that.chooseSalesOrderItemEvent, items, that.checkMerge.getSelected());
                                                    }
                                                })
                                            ]
                                        }),
                                    })
                                ]
                            }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginEnd"),
                            new sap.ui.layout.Splitter("", {
                                width: "auto",
                                orientation: sap.ui.core.Orientation.Vertical,
                                layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                    size: "45%",
                                    resizable: true,
                                }),
                                contentAreas: [
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        enableScrolling: true,
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            size: "16rem",
                                            resizable: false,
                                        }),
                                        content: [
                                            this.rightTop,
                                        ],
                                    }),
                                    new sap.m.Page("", {
                                        showHeader: false,
                                        enableScrolling: true,
                                        layoutData: new sap.ui.layout.SplitterLayoutData("", {
                                            size: "auto",
                                            resizable: false,
                                        }),
                                        content: [
                                            this.rightOrder = new sap.extension.m.DataTable("", {
                                                columns: [
                                                    new sap.extension.m.Column("", {
                                                        width: "3rem",
                                                        hAlign: sap.ui.core.TextAlign.Center,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_lineid"),
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "100%",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_itemdescription"),
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "8rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_quantity"),
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_price"),
                                                        visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "Price" ? true : false,
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_pretaxprice"),
                                                        visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "PreTaxPrice" ? true : false,
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_unitprice"),
                                                        visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "UnitPrice" ? true : false,
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_tax"),
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_linetotal"),
                                                        visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "Price" ? true : false,
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_pretaxlinetotal"),
                                                        visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "PreTaxPrice" ? true : false,
                                                    }),
                                                    new sap.extension.m.Column("", {
                                                        width: "6rem",
                                                        hAlign: sap.ui.core.TextAlign.Begin,
                                                        header: ibas.i18n.prop("bo_purchaseorderitem_unitlinetotal"),
                                                        visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "UnitPrice" ? true : false,
                                                    }),
                                                ],
                                                items: {
                                                    path: "/",
                                                    template: new sap.extension.m.ColumnListItem("", {
                                                        type: sap.m.ListType.Detail,
                                                        detailIcon: "sap-icon://delete",
                                                        detailTooltip: ibas.i18n.prop("shell_data_remove"),
                                                        detailPress(this: sap.m.ListItemBase): void {
                                                            let orderItem: any = this.getBindingContext().getObject();
                                                            if (orderItem instanceof bo.PurchaseOrderItem) {
                                                                that.fireViewEvents(that.removePurchaseOrderItemEvent, orderItem);
                                                            }
                                                        },
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
                                                            new sap.extension.m.Input("", {

                                                                fieldWidth: "80%",
                                                            }).bindProperty("bindingValue", {
                                                                path: "quantity",
                                                                type: new sap.extension.data.Quantity()
                                                            }).bindProperty("description", {
                                                                path: "uom",
                                                                type: new sap.extension.data.Alphanumeric()
                                                            }),
                                                            new sap.extension.m.Input("", {
                                                                visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "Price" ? true : false,
                                                            }).bindProperty("bindingValue", {
                                                                path: "price",
                                                                type: new sap.extension.data.Price()
                                                            }),
                                                            new sap.extension.m.Input("", {
                                                                visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "PreTaxPrice" ? true : false,
                                                            }).bindProperty("bindingValue", {
                                                                path: "preTaxPrice",
                                                                type: new sap.extension.data.Price()
                                                            }),
                                                            new sap.extension.m.Input("", {
                                                                visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "UnitPrice" ? true : false,
                                                            }).bindProperty("bindingValue", {
                                                                path: "unitPrice",
                                                                type: new sap.extension.data.Price()
                                                            }),
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
                                                            new sap.extension.m.ObjectNumber("", {
                                                                number: {
                                                                    path: "lineTotal",
                                                                    type: new sap.extension.data.Sum(),
                                                                },
                                                                unit: {
                                                                    path: "currency",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                },
                                                                visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "Price" ? true : false,
                                                            }),
                                                            new sap.extension.m.ObjectNumber("", {
                                                                number: {
                                                                    path: "preTaxLineTotal",
                                                                    type: new sap.extension.data.Sum(),
                                                                },
                                                                unit: {
                                                                    path: "currency",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                },
                                                                visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "PreTaxPrice" ? true : false,
                                                            }),
                                                            new sap.extension.m.ObjectNumber("", {
                                                                number: {
                                                                    path: "unitLineTotal",
                                                                    type: new sap.extension.data.Sum(),
                                                                },
                                                                unit: {
                                                                    path: "currency",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                },
                                                                visible: config.get<string>(config.CONFIG_ITEM_PURCHASING_ASSISTANT_PRICE_TYPE, "Price") === "UnitPrice" ? true : false,
                                                            }),
                                                        ]
                                                    }),
                                                }
                                            })
                                        ],
                                        floatingFooter: false,
                                        footer: new sap.m.Toolbar("", {
                                            content: [
                                                new sap.m.Label("", {
                                                    wrapping: false,
                                                    showColon: true,
                                                    text: ibas.i18n.prop("purchase_assistant_warehouse")
                                                }).addStyleClass("sapUiTinyMarginBegin"),
                                                this.selectWarehouse = new component.WarehouseSelect("", {
                                                    width: "auto",
                                                    branch: {
                                                        path: "/branch",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    },
                                                    change(this: sap.m.Select, event: sap.ui.base.Event): void {
                                                        let sItem: any = this.getSelectedItem();
                                                        if (sItem instanceof sap.ui.core.Item && !ibas.strings.isEmpty(sItem.getKey())) {
                                                            let model: any = that.rightOrder.getModel();
                                                            if (model instanceof sap.extension.model.JSONModel) {
                                                                let data: any[] = model.getData();
                                                                if (data instanceof Array) {
                                                                    let items: ibas.IList<bo.PurchaseOrderItem> = new ibas.ArrayList<bo.PurchaseOrderItem>();
                                                                    for (let item of data) {
                                                                        if (item instanceof bo.PurchaseOrderItem) {
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
                                                    }
                                                }),
                                                new sap.m.ToolbarSpacer(""),
                                                this.menuEditData = new sap.m.MenuButton("", {
                                                    text: ibas.i18n.prop("purchase_assistant_edit_details"),
                                                    type: sap.m.ButtonType.Attention,
                                                    icon: "sap-icon://edit",
                                                    buttonMode: sap.m.MenuButtonMode.Split,
                                                    menuPosition: sap.ui.core.Popup.Dock.EndTop,
                                                    useDefaultActionOnly: true,
                                                    defaultAction(): void {
                                                        that.fireViewEvents(that.editPurchaseOrderEvent);
                                                    },
                                                    menu: new sap.m.Menu("", {
                                                        items: [
                                                        ]
                                                    })
                                                }),
                                                new sap.m.ToolbarSeparator(""),
                                                new sap.m.Button("", {
                                                    text: ibas.i18n.prop("shell_data_save"),
                                                    type: sap.m.ButtonType.Accept,
                                                    icon: "sap-icon://save",
                                                    press: function (): void {
                                                        that.fireViewEvents(that.savePurchaseOrderEvent);
                                                    }
                                                }),
                                            ]
                                        }),
                                    })
                                ]
                            }).addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginEnd"),
                        ],
                        resize: function (oEvent: sap.ui.base.Event): void {
                            try {
                                if ((<any>oEvent.getSource()).getContentAreas()[0].getLayoutData().getSize().toString().indexOf("%") === -1) {
                                    let rightlayoutWidth: number = ibas.numbers.valueOf((<any>oEvent.getSource()).getContentAreas()[1].getLayoutData().getSize().toString().replace("px", ""));
                                    let rightlayoutProportion: number = ibas.numbers.round(rightlayoutWidth / window.innerWidth * 100, 2);
                                    (<any>oEvent.getSource()).getContentAreas()[1].getLayoutData().setSize(rightlayoutProportion + "%");
                                    (<any>oEvent.getSource()).getContentAreas()[0].getLayoutData().setSize(100 - rightlayoutProportion + "%");
                                }
                            } catch (error) { }
                        }
                    });
                }

                private leftTop: sap.m.HBox;
                private leftOrder: sap.extension.m.List;
                private inputCustomer: sap.m.MultiInput;
                private inputSupplier: sap.extension.m.Input;
                private inputOrder: sap.m.Input;
                private inputOrderTo: sap.m.Input;
                private inputMaterial: sap.m.MultiInput;
                private inputDate: sap.m.DatePicker;
                private inputDateTo: sap.m.DatePicker;
                private checkSuppiler: sap.m.CheckBox;
                private checkMerge: sap.m.CheckBox;
                private checkOrdered: sap.m.CheckBox;
                private selectType: sap.m.Select;
                private selectPaid: sap.m.Select;


                private rightTop: sap.ui.layout.form.SimpleForm;
                private rightOrder: sap.extension.m.Table;
                private menuEditData: sap.m.MenuButton;
                private branchInput: sap.extension.m.SelectionInput;

                onDisplayed(): void {
                    setTimeout(() => {
                        if (this.selectType.getForceSelection() === true) {
                            this.selectType.setForceSelection(false);
                            this.selectType.setSelectedKey(null);
                        }
                    }, 600);
                }

                private selectWarehouse: component.WarehouseSelect;
                get defaultWarehouse(): string {
                    return this.selectWarehouse.getSelectedKey();
                }
                set defaultWarehouse(value: string) {
                    this.selectWarehouse.setSelectedKey(value);
                }
                /** 默认税组 */
                defaultTaxGroup: string;
                /** 显示销售订单 */
                showSalesOrders(datas: sales.bo.SalesOrder[]): void {
                    let model: sap.extension.model.JSONModel = this.leftOrder.getModel();
                    if (model?.getData() instanceof Array && (<Array<any>>model?.getData()).length < datas.length) {
                        let mDatas: sales.bo.SalesOrder[] = model.getData();
                        if (mDatas.length > 0) {
                            mDatas.splice(0, mDatas.length);
                        }
                        for (let item of datas) {
                            mDatas.push(item);
                        }
                        model.refresh(true);
                    } else {
                        this.leftOrder.destroyItems();
                        this.leftOrder.setModel(new sap.extension.model.JSONModel(datas));
                    }
                }
                /** 显示采购订单 */
                showPurchaseOrder(data: bo.PurchaseOrder): void {
                    this.rightTop.setModel(new sap.extension.model.JSONModel(data));
                    this.branchInput.setModel(new sap.extension.model.JSONModel(data));
                    // 设置分支对象
                    if (accounting.config.isEnableBranch()) {
                        this.selectWarehouse.setModel(new sap.extension.model.JSONModel(data));
                    }
                }
                /** 显示采购订单 */
                showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void {
                    this.rightOrder.setModel(new sap.extension.model.JSONModel(datas));
                    let model: sap.extension.model.JSONModel = this.leftOrder.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        model.refresh(false);
                    }
                }
                /** 添加采购订单编辑链接 */
                addPurchaseOrderEditLink(data: bo.PurchaseOrder): void {
                    let that: this = this;
                    this.menuEditData.getMenu().addItem(
                        new sap.m.MenuItem("", {
                            text: ibas.i18n.prop("purchase_assistant_order_info", data.docEntry, data.supplierName, data.purchaseOrderItems.length),
                            press: function (): void {
                                that.fireViewEvents(that.editPurchaseOrderEvent, data);
                            }
                        })
                    );
                }
            }
        }
    }
}