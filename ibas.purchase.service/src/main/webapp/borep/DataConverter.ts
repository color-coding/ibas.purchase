/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 数据转换者 */
        export class DataConverter extends ibas.DataConverter4j {

            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter {
                return new BOConverter;
            }
        }

        /** 模块业务对象工厂 */
        export const boFactory: ibas.BOFactory = new ibas.BOFactory();
        /** 业务对象转换者 */
        class BOConverter extends ibas.BOConverter {
            /** 模块对象工厂 */
            protected factory(): ibas.BOFactory {
                return boFactory;
            }

            /**
             * 自定义解析
             * @param data 远程数据
             * @returns 本地数据
             */
            protected customParsing(data: any): ibas.IBusinessObject {
                return data;
            }

            /**
             * 转换数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 转换的值
             */
            protected convertData(boName: string, property: string, value: any): any {
                if (boName === bo.PurchaseQuote.name) {
                    if (property === bo.PurchaseQuote.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseQuoteItem.name) {
                    if (property === bo.PurchaseQuoteItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseQuoteItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseRequest.name) {
                    if (property === bo.PurchaseRequest.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseOrder.name) {
                    if (property === bo.PurchaseOrder.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseOrderItem.name) {
                    if (property === bo.PurchaseOrderItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseOrderItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDelivery.name) {
                    if (property === bo.PurchaseDelivery.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDeliveryItem.name) {
                    if (property === bo.PurchaseDeliveryItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseDeliveryItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturn.name) {
                    if (property === bo.PurchaseReturn.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturnItem.name) {
                    if (property === bo.PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.toString(ibas.emYesNo, value);
                    }
                } else if (boName === bo.ShippingAddress.name) {
                    if (property === bo.ShippingAddress.PROPERTY_SHIPPINGSTATUS_NAME) {
                        return ibas.enums.toString(emShippingStatus, value);
                    }
                }
                return super.convertData(boName, property, value);
            }

            /**
             * 解析数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 解析的值
             */
            protected parsingData(boName: string, property: string, value: any): any {
                if (boName === bo.PurchaseQuote.name) {
                    if (property === bo.PurchaseQuote.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseQuoteItem.name) {
                    if (property === bo.PurchaseQuoteItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseQuoteItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseRequest.name) {
                    if (property === bo.PurchaseRequest.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseOrder.name) {
                    if (property === bo.PurchaseOrder.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseOrderItem.name) {
                    if (property === bo.PurchaseOrderItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseOrderItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDelivery.name) {
                    if (property === bo.PurchaseDelivery.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseDeliveryItem.name) {
                    if (property === bo.PurchaseDeliveryItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseDeliveryItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturn.name) {
                    if (property === bo.PurchaseReturn.PROPERTY_ROUNDING_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.PurchaseReturnItem.name) {
                    if (property === bo.PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    } else if (property === bo.PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME) {
                        return ibas.enums.valueOf(ibas.emYesNo, value);
                    }
                } else if (boName === bo.ShippingAddress.name) {
                    if (property === bo.ShippingAddress.PROPERTY_SHIPPINGSTATUS_NAME) {
                        return ibas.enums.valueOf(emShippingStatus, value);
                    }
                }
                return super.parsingData(boName, property, value);
            }
        }
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        export function baseDocument(
            target: IPurchaseOrder | IPurchaseDelivery | IPurchaseReturn,
            source: IPurchaseQuote | IPurchaseOrder | IPurchaseDelivery
        ): void {
            // 复制头信息
            target.contactPerson = source.contactPerson;
            target.deliveryDate = source.deliveryDate;
            target.documentDate = ibas.dates.today();
            target.postingDate = ibas.dates.today();
            target.reference1 = source.reference1;
            target.reference2 = source.reference2;
            target.remarks = source.remarks;
            target.project = source.project;
            target.consumer = source.consumer;
            target.priceList = source.priceList;
            target.documentCurrency = source.documentCurrency;
            // 复制自定义字段
            for (let item of source.userFields.forEach()) {
                let myItem: ibas.IUserField = target.userFields.get(item.name);
                if (ibas.objects.isNull(myItem)) {
                    // myItem = target.userFields.register(item.name, item.valueType);
                    continue;
                }
                if (myItem.valueType !== item.valueType) {
                    continue;
                }
                myItem.value = item.value;
            }
        }
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        export function baseDocumentItem(
            target: IPurchaseOrderItem | IPurchaseDeliveryItem | IPurchaseReturnItem,
            source: IPurchaseQuoteItem | IPurchaseOrderItem | IPurchaseDeliveryItem
        ): void {
            target.baseDocumentType = source.objectCode;
            target.baseDocumentEntry = source.docEntry;
            target.baseDocumentLineId = source.lineId;
            target.originalDocumentType = source.baseDocumentType;
            target.originalDocumentEntry = source.baseDocumentEntry;
            target.originalDocumentLineId = source.baseDocumentLineId;
            target.distributionRule1 = source.distributionRule1;
            target.distributionRule2 = source.distributionRule2;
            target.distributionRule3 = source.distributionRule3;
            target.distributionRule4 = source.distributionRule4;
            target.distributionRule5 = source.distributionRule5;
            target.itemCode = source.itemCode;
            target.itemDescription = source.itemDescription;
            target.itemSign = source.itemSign;
            target.batchManagement = source.batchManagement;
            target.serialManagement = source.serialManagement;
            target.unitPrice = source.unitPrice;
            target.discount = source.discount;
            target.tax = source.tax;
            target.taxRate = source.taxRate;
            target.price = source.price;
            target.currency = source.currency;
            target.quantity = source.quantity;
            target.uom = source.uom;
            if (!(source.closedQuantity > 0)) {
                target.preTaxLineTotal = source.preTaxLineTotal;
                target.taxTotal = source.taxTotal;
                target.lineTotal = source.lineTotal;
            }
            target.warehouse = source.warehouse;
            target.deliveryDate = source.deliveryDate;
            target.reference1 = source.reference1;
            target.reference2 = source.reference2;
            // 复制自定义字段
            for (let item of source.userFields.forEach()) {
                let myItem: ibas.IUserField = target.userFields.get(item.name);
                if (ibas.objects.isNull(myItem)) {
                    // myItem = target.userFields.register(item.name, item.valueType);
                    continue;
                }
                if (myItem.valueType !== item.valueType) {
                    continue;
                }
                myItem.value = item.value;
            }
        }
        export function baseProduct(
            target: PurchaseQuoteItem | PurchaseOrderItem | PurchaseDeliveryItem | PurchaseReturnItem | PurchaseRequestItem,
            source: materials.bo.IProduct
        ): void {
            target.itemCode = source.code;
            target.itemDescription = source.name;
            target.itemSign = source.sign;
            target.serialManagement = source.serialManagement;
            target.batchManagement = source.batchManagement;
            if (!(target instanceof PurchaseRequestItem)) {
                target.warehouse = source.warehouse;
                if (ibas.strings.isEmpty(source.warehouse)) {
                    if (!ibas.strings.isEmpty(source.defaultWarehouse)) {
                        target.warehouse = source.defaultWarehouse;
                    }
                }
            }
            target.quantity = 1;
            target.uom = source.inventoryUOM;
            if (!ibas.strings.isEmpty(source.purchaseTaxGroup)) {
                target.tax = source.purchaseTaxGroup;
            }
            if (source.taxed === ibas.emYesNo.NO) {
                target.preTaxPrice = source.price;
            } else {
                target.price = source.price;
            }
            target.currency = source.currency;
            if (!ibas.strings.isEmpty(target.tax)) {
                accounting.taxrate.assign(target.tax, (rate) => {
                    if (rate >= 0) {
                        target.taxRate = rate;
                        if (source.taxed === ibas.emYesNo.NO) {
                            // 重新赋值价格，以激活计算逻辑
                            target.preTaxPrice = source.price;
                        }
                    }
                });
            }
        }
        /** 业务规则-推导税前税后价格 */
        export class BusinessRuleDeductionTaxPrice extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param taxRate  属性-税率
             * @param preTax   属性-税前
             * @param afterTax 属性-税后
             */
            constructor(taxRate: string, preTax: string, afterTax: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_tax_price");
                this.taxRate = taxRate;
                this.preTax = preTax;
                this.afterTax = afterTax;
                this.decimalPlaces = decimalPlaces;
                this.inputProperties.add(this.taxRate);
                this.inputProperties.add(this.preTax);
                this.inputProperties.add(this.afterTax);
                this.affectedProperties.add(this.taxRate);
                this.affectedProperties.add(this.preTax);
                this.affectedProperties.add(this.afterTax);
            }
            /** 税率 */
            taxRate: string;
            /** 税前价格 */
            preTax: string;
            /** 税后价格 */
            afterTax: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let taxRate: number = ibas.numbers.valueOf(context.inputValues.get(this.taxRate));
                let preTax: number = ibas.numbers.valueOf(context.inputValues.get(this.preTax));
                let afterTax: number = ibas.numbers.valueOf(context.inputValues.get(this.afterTax));
                if (taxRate < 0) {
                    context.outputValues.set(this.taxRate, 0);
                    context.outputValues.set(this.afterTax, preTax);
                    return;
                }
                if (ibas.strings.equalsIgnoreCase(this.preTax, context.trigger)
                    || ibas.strings.equalsIgnoreCase(this.taxRate, context.trigger)) {
                    if (taxRate === 0) {
                        context.outputValues.set(this.afterTax, preTax);
                    } else {
                        let result: number = preTax * (1 + taxRate);
                        if (this.decimalPlaces >= 0) {
                            // 差异小于近似位，则忽略
                            if (ibas.numbers.isApproximated(afterTax, result, this.decimalPlaces)) {
                                return;
                            }
                        }
                        context.outputValues.set(this.afterTax, ibas.numbers.round(result, this.decimalPlaces));
                    }
                } else {
                    if (taxRate === 0) {
                        context.outputValues.set(this.preTax, afterTax);
                    } else {
                        let result: number = afterTax / (1 + taxRate);
                        if (this.decimalPlaces >= 0) {
                            // 差异小于近似位，则忽略
                            if (ibas.numbers.isApproximated(preTax, result, this.decimalPlaces)) {
                                return;
                            }
                        }
                        context.outputValues.set(this.preTax, ibas.numbers.round(result, this.decimalPlaces));
                    }
                }
            }
        }
        /** 业务规则-推导税总计 */
        export class BusinessRuleDeductionTaxTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param tax 属性-税总计
             * @param total   属性-税前总计
             * @param taxRate  属性-税率
             */
            constructor(tax: string, total: string, taxRate: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_tax_total");
                this.taxRate = taxRate;
                this.tax = tax;
                this.total = total;
                this.decimalPlaces = decimalPlaces;
                this.inputProperties.add(this.taxRate);
                this.inputProperties.add(this.tax);
                this.inputProperties.add(this.total);
                this.affectedProperties.add(this.taxRate);
                this.affectedProperties.add(this.tax);
            }
            /** 税总计 */
            tax: string;
            /** 税前总计 */
            total: string;
            /** 税率 */
            taxRate: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let taxRate: number = ibas.numbers.valueOf(context.inputValues.get(this.taxRate));
                let total: number = ibas.numbers.valueOf(context.inputValues.get(this.total));
                let tax: number = ibas.numbers.valueOf(context.inputValues.get(this.tax));
                if (taxRate < 0) {
                    context.outputValues.set(this.taxRate, 0);
                    context.outputValues.set(this.tax, 0);
                    return;
                }
                if (ibas.strings.equalsIgnoreCase(this.total, context.trigger)
                    || ibas.strings.equalsIgnoreCase(this.taxRate, context.trigger)
                    || tax < 0) {
                    if (taxRate === 0 || isNaN(taxRate)) {
                        context.outputValues.set(this.tax, 0);
                    } else {
                        let result: number = total * taxRate;
                        if (this.decimalPlaces >= 0) {
                            // 差异小于近似位，则忽略
                            if (ibas.numbers.isApproximated(tax, result, this.decimalPlaces)) {
                                return;
                            }
                        }
                        context.outputValues.set(this.tax, ibas.numbers.round(result, this.decimalPlaces));
                    }
                }
            }
        }
        /** 业务规则-推导折扣及总计 */
        export class BusinessRuleDeductionDiscountTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param total 属性-折扣后总计
             * @param preTotal   属性-折扣前总计
             * @param discount  属性-折扣
             */
            constructor(total: string, preTotal: string, discount: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_discount_total");
                this.total = total;
                this.preTotal = preTotal;
                this.discount = discount;
                this.decimalPlaces = decimalPlaces;
                this.inputProperties.add(this.total);
                this.inputProperties.add(this.preTotal);
                this.inputProperties.add(this.discount);
                this.affectedProperties.add(this.total);
                this.affectedProperties.add(this.discount);
            }
            /** 折扣后总计 */
            total: string;
            /** 折扣前总计 */
            preTotal: string;
            /** 折扣 */
            discount: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let discount: number = ibas.numbers.valueOf(context.inputValues.get(this.discount));
                let total: number = ibas.numbers.valueOf(context.inputValues.get(this.total));
                let preTotal: number = ibas.numbers.valueOf(context.inputValues.get(this.preTotal));
                if (discount < 0) {
                    context.outputValues.set(this.discount, 1);
                    context.outputValues.set(this.total, preTotal);
                    return;
                }
                if (ibas.strings.equalsIgnoreCase(this.total, context.trigger)) {
                    // 折扣后触发，算折扣
                    if (preTotal === 0 || isNaN(preTotal)) {
                        context.outputValues.set(this.discount, 1);
                        context.outputValues.set(this.total, 0);
                    } else {
                        let result: number = total / preTotal;
                        // 差异小于近似位，则忽略
                        if (ibas.numbers.isApproximated(discount, result, this.decimalPlaces, 10)) {
                            return;
                        }
                        context.outputValues.set(this.discount, ibas.numbers.round(result, 6));
                    }
                } else {
                    if (discount === 1 || isNaN(discount)) {
                        context.outputValues.set(this.total, preTotal);
                    } else {
                        let result: number = preTotal * discount;
                        if (this.decimalPlaces >= 0) {
                            // 差异小于近似位，则忽略
                            if (ibas.numbers.isApproximated(total, result, this.decimalPlaces)) {
                                return;
                            }
                        }
                        context.outputValues.set(this.total, ibas.numbers.round(result, this.decimalPlaces));
                    }
                }
            }
        }
        /** 业务规则-推导单据总计 */
        export class BusinessRuleDeductionDocumentTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param docTotal 属性-单据总计
             * @param disTotal   属性-折扣总计
             * @param shipTotal  属性-运费总计
             */
            constructor(docTotal: string, disTotal: string, shipTotal?: string) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_document_total");
                this.docTotal = docTotal;
                this.disTotal = disTotal;
                this.shipTotal = shipTotal;
                this.inputProperties.add(this.docTotal);
                this.inputProperties.add(this.disTotal);
                this.inputProperties.add(this.shipTotal);
                this.affectedProperties.add(this.docTotal);
                this.affectedProperties.add(this.disTotal);
            }
            /** 单据总计 */
            docTotal: string;
            /** 折扣总计 */
            disTotal: string;
            /** 运费总计 */
            shipTotal: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let docTotal: number = ibas.numbers.valueOf(context.inputValues.get(this.docTotal));
                let disTotal: number = ibas.numbers.valueOf(context.inputValues.get(this.disTotal));
                let shipTotal: number = !ibas.strings.isEmpty(this.shipTotal) ? ibas.numbers.valueOf(context.inputValues.get(this.shipTotal)) : 0;

                if (ibas.strings.equalsIgnoreCase(this.docTotal, context.trigger) && docTotal > 0) {
                    // 单据总计触发
                    context.outputValues.set(this.disTotal, docTotal - shipTotal);
                } else {
                    let result: number = disTotal + shipTotal;
                    if (!ibas.numbers.isApproximated(result, docTotal)) {
                        context.outputValues.set(this.docTotal, result);
                    }
                }
            }
        }
        /** 业务规则-推导 价格 * 数量 = 总计 */
        export class BusinessRuleDeductionPriceQtyTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param total 属性-总计
             * @param price  属性-价格
             * @param quantity   属性-数量
             */
            constructor(total: string, price: string, quantity: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_price_qty_total");
                this.price = price;
                this.quantity = quantity;
                this.total = total;
                this.decimalPlaces = decimalPlaces;
                this.inputProperties.add(this.price);
                this.inputProperties.add(this.quantity);
                this.inputProperties.add(this.total);
                this.affectedProperties.add(this.price);
                this.affectedProperties.add(this.total);
            }
            /** 价格 */
            price: string;
            /** 数量 */
            quantity: string;
            /** 总计 */
            total: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let price: number = ibas.numbers.valueOf(context.inputValues.get(this.price));
                let quantity: number = ibas.numbers.valueOf(context.inputValues.get(this.quantity));
                let total: number = ibas.numbers.valueOf(context.inputValues.get(this.total));

                if (ibas.strings.equalsIgnoreCase(this.total, context.trigger)) {
                    // 总计触发，价格 = 总计 / 数量
                    if (quantity === 0) {
                        context.outputValues.set(this.price, 0);
                    } else {
                        let result: number = total / quantity;
                        if (this.decimalPlaces >= 0) {
                            // 差异小于近似位，则忽略
                            if (ibas.numbers.isApproximated(price, result, this.decimalPlaces)) {
                                return;
                            }
                        }
                        context.outputValues.set(this.price, ibas.numbers.round(result, this.decimalPlaces));
                    }
                } else {
                    let result: number = price * quantity;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        if (ibas.numbers.isApproximated(total, result, this.decimalPlaces)) {
                            return;
                        }
                    }
                    context.outputValues.set(this.total, ibas.numbers.round(result, this.decimalPlaces));
                }
            }
        }
        /** 业务规则-推导折扣 */
        export class BusinessRuleDeductionDiscount extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param discount  属性-折扣
             * @param preDiscount   属性-折扣前
             * @param afterDiscount 属性-折扣后
             */
            constructor(discount: string, preDiscount: string, afterDiscount: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_discount");
                this.discount = discount;
                this.preDiscount = preDiscount;
                this.afterDiscount = afterDiscount;
                this.decimalPlaces = decimalPlaces;
                this.inputProperties.add(this.discount);
                this.inputProperties.add(this.preDiscount);
                this.inputProperties.add(this.afterDiscount);
                this.affectedProperties.add(this.discount);
                this.affectedProperties.add(this.preDiscount);
                this.affectedProperties.add(this.afterDiscount);
            }
            /** 折扣 */
            discount: string;
            /** 折扣前价格 */
            preDiscount: string;
            /** 折扣后价格 */
            afterDiscount: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let discount: number = ibas.numbers.valueOf(context.inputValues.get(this.discount));
                let preDiscount: number = ibas.numbers.valueOf(context.inputValues.get(this.preDiscount));
                let afterDiscount: number = ibas.numbers.valueOf(context.inputValues.get(this.afterDiscount));

                if (ibas.strings.equalsIgnoreCase(this.discount, context.trigger)
                    || ibas.strings.equalsIgnoreCase(this.preDiscount, context.trigger)) {
                    // 折扣触发，算成交价
                    let result: number = preDiscount * discount;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        if (ibas.numbers.isApproximated(afterDiscount, result, this.decimalPlaces)) {
                            return;
                        }
                    }
                    context.outputValues.set(this.afterDiscount, ibas.numbers.round(result, this.decimalPlaces));
                } else {
                    if (preDiscount === 0) {
                        context.outputValues.set(this.discount, 1);
                        context.outputValues.set(this.preDiscount, afterDiscount);
                    } else {
                        // 非折扣触发，算折扣
                        let result: number = afterDiscount / preDiscount;
                        // 差异小于近似位，则忽略
                        if (ibas.numbers.isApproximated(discount, result, this.decimalPlaces, 10)) {
                            return;
                        }
                        context.outputValues.set(this.discount, ibas.numbers.round(result, 6));
                    }
                }
            }
        }
        /** 业务规则-推导含税价格，税总计及总计 */
        export class BusinessRuleDeductionPriceTaxTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param total 属性-总计
             * @param price  属性-价格
             * @param quantity   属性-数量
             * @param taxRate   属性-税率
             * @param taxTotal   属性-税总计
             * @param preTotal   属性-税前总计
             */
            constructor(total: string, price: string, quantity: string, taxRate: string, taxTotal: string, preTotal: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_price_tax_total");
                this.price = price;
                this.quantity = quantity;
                this.total = total;
                this.taxRate = taxRate;
                this.taxTotal = taxTotal;
                this.preTotal = preTotal;
                this.decimalPlaces = decimalPlaces;
                this.inputProperties.add(this.price);
                this.inputProperties.add(this.quantity);
                this.inputProperties.add(this.total);
                this.inputProperties.add(this.taxRate);
                this.inputProperties.add(this.taxTotal);
                this.inputProperties.add(this.preTotal);
                this.affectedProperties.add(this.price);
                this.affectedProperties.add(this.total);
                this.affectedProperties.add(this.taxTotal);
                this.affectedProperties.add(this.preTotal);
            }
            /** 价格 */
            price: string;
            /** 数量 */
            quantity: string;
            /** 总计 */
            total: string;
            /** 税率 */
            taxRate: string;
            /** 税总计 */
            taxTotal: string;
            /** 税前总计 */
            preTotal: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void {
                let price: number = ibas.numbers.valueOf(context.inputValues.get(this.price));
                let quantity: number = ibas.numbers.valueOf(context.inputValues.get(this.quantity));
                let total: number = ibas.numbers.valueOf(context.inputValues.get(this.total));
                let taxRate: number = ibas.numbers.valueOf(context.inputValues.get(this.taxRate));
                let taxTotal: number = ibas.numbers.valueOf(context.inputValues.get(this.taxTotal));
                let preTotal: number = ibas.numbers.valueOf(context.inputValues.get(this.preTotal));

                if (ibas.strings.equalsIgnoreCase(this.total, context.trigger)) {
                    if (quantity <= 0) {
                        return;
                    }
                    let rPrice: number = total / quantity;
                    let rPreTotal: number = total / (1 + taxRate);
                    let rTaxTotal: number = total - rPreTotal;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        if (!ibas.numbers.isApproximated(rPrice, price, this.decimalPlaces)) {
                            context.outputValues.set(this.price, ibas.numbers.round(rPrice, this.decimalPlaces));
                        }
                        if (!ibas.numbers.isApproximated(rPreTotal, preTotal, this.decimalPlaces)) {
                            context.outputValues.set(this.preTotal, ibas.numbers.round(rPreTotal, this.decimalPlaces));
                        }
                        if (!ibas.numbers.isApproximated(rTaxTotal, taxTotal, this.decimalPlaces)) {
                            context.outputValues.set(this.taxTotal, ibas.numbers.round(rTaxTotal, this.decimalPlaces));
                        }
                    }
                } else if (ibas.strings.equalsIgnoreCase(this.taxTotal, context.trigger)) {
                    let rTotal: number = preTotal + taxTotal;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        if (!ibas.numbers.isApproximated(rTotal, total, this.decimalPlaces)) {
                            context.outputValues.set(this.total, ibas.numbers.round(rTotal, this.decimalPlaces));
                        }
                    }
                } else if (ibas.strings.equalsIgnoreCase(this.price, context.trigger) || ibas.strings.equalsIgnoreCase(this.quantity, context.trigger)) {
                    let rTotal: number = price * quantity;
                    let rPreTotal: number = rTotal / (1 + taxRate);
                    let rTaxTotal: number = rTotal - rPreTotal;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        if (!ibas.numbers.isApproximated(rTotal, total, this.decimalPlaces)) {
                            context.outputValues.set(this.total, ibas.numbers.round(rTotal, this.decimalPlaces));
                        }
                        if (!ibas.numbers.isApproximated(rPreTotal, preTotal, this.decimalPlaces)) {
                            context.outputValues.set(this.preTotal, ibas.numbers.round(rPreTotal, this.decimalPlaces));
                        }
                        if (!ibas.numbers.isApproximated(rTaxTotal, taxTotal, this.decimalPlaces)) {
                            context.outputValues.set(this.taxTotal, ibas.numbers.round(rTaxTotal, this.decimalPlaces));
                        }
                    }
                } else if (ibas.strings.equalsIgnoreCase(this.taxRate, context.trigger)
                    || ibas.strings.equalsIgnoreCase(this.preTotal, context.trigger)) {
                    let rTaxTotal: number = preTotal * taxRate;
                    let rTotal: number = preTotal + rTaxTotal;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        if (!ibas.numbers.isApproximated(rTaxTotal, taxTotal, this.decimalPlaces)) {
                            context.outputValues.set(this.taxTotal, ibas.numbers.round(rTaxTotal, this.decimalPlaces));
                        }
                        if (!ibas.numbers.isApproximated(rTotal, total, this.decimalPlaces)) {
                            context.outputValues.set(this.total, ibas.numbers.round(rTotal, this.decimalPlaces));
                        }
                    }
                }
            }
        }
    }
}