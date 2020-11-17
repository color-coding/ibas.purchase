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
            target.deliveryDate = ibas.dates.today();
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
                    myItem = target.userFields.register(item.name, item.valueType);
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
            target.price = source.price;
            target.currency = source.currency;
            target.quantity = source.quantity;
            target.uom = source.uom;
            target.warehouse = source.warehouse;
            target.deliveryDate = ibas.dates.today();
            target.reference1 = source.reference1;
            target.reference2 = source.reference2;
            target.tax = source.tax;
            target.taxRate = source.taxRate;
            // 复制自定义字段
            for (let item of source.userFields.forEach()) {
                let myItem: ibas.IUserField = target.userFields.get(item.name);
                if (ibas.objects.isNull(myItem)) {
                    myItem = target.userFields.register(item.name, item.valueType);
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
                if (taxRate < 0) {
                    context.outputValues.set(this.taxRate, 0);
                    context.outputValues.set(this.preTax, 0);
                    context.outputValues.set(this.afterTax, 0);
                    return;
                }
                let preTax: number = ibas.numbers.valueOf(context.inputValues.get(this.preTax));
                let afterTax: number = ibas.numbers.valueOf(context.inputValues.get(this.afterTax));
                if (ibas.strings.equalsIgnoreCase(this.preTax, context.trigger)) {
                    if (taxRate === 0) {
                        context.outputValues.set(this.afterTax, preTax);
                    } else {
                        let result: number = preTax * (1 + taxRate);
                        if (this.decimalPlaces >= 0) {
                            // 差异小于近似位，则忽略
                            let oData: number = afterTax * Math.pow(10, this.decimalPlaces);
                            let nData: number = result * Math.pow(10, this.decimalPlaces);
                            if (Math.abs(oData - nData) < Math.pow(10, this.decimalPlaces)) {
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
                            let oData: number = preTax * Math.pow(10, this.decimalPlaces);
                            let nData: number = result * Math.pow(10, this.decimalPlaces);
                            if (Math.abs(oData - nData) < Math.pow(10, this.decimalPlaces)) {
                                return;
                            }
                        }
                        context.outputValues.set(this.preTax, ibas.numbers.round(result, this.decimalPlaces));
                    }
                }
            }
        }
        /** 业务规则-推导折扣前折扣后价格 */
        export class BusinessRuleDeductionDiscountPrice extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param discount  属性-折扣
             * @param preDiscount   属性-折扣前
             * @param afterDiscount 属性-折扣后
             */
            constructor(discount: string, preDiscount: string, afterDiscount: string, decimalPlaces: number = undefined) {
                super();
                this.name = ibas.i18n.prop("purchase_business_rule_deductione_discount_price");
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
                if (discount < 0) {
                    context.outputValues.set(this.discount, 0);
                    context.outputValues.set(this.preDiscount, 0);
                    context.outputValues.set(this.afterDiscount, 0);
                    return;
                }
                let preDiscount: number = ibas.numbers.valueOf(context.inputValues.get(this.preDiscount));
                let afterDiscount: number = ibas.numbers.valueOf(context.inputValues.get(this.afterDiscount));
                if (preDiscount <= 0) {
                    // 折前价格为0，则使用折后价格
                    context.outputValues.set(this.preDiscount, afterDiscount);
                } else if (ibas.strings.equalsIgnoreCase(this.discount, context.trigger)) {
                    // 折扣触发，算成交价
                    let result: number = preDiscount * discount;
                    if (this.decimalPlaces >= 0) {
                        // 差异小于近似位，则忽略
                        let oData: number = afterDiscount * Math.pow(10, this.decimalPlaces);
                        let nData: number = result * Math.pow(10, this.decimalPlaces);
                        if (Math.abs(oData - nData) < Math.pow(10, this.decimalPlaces)) {
                            return;
                        }
                    }
                    context.outputValues.set(this.afterDiscount, ibas.numbers.round(result, this.decimalPlaces));
                } else {
                    // 非折扣触发，算折扣
                    let result: number = afterDiscount / preDiscount;
                    // 差异小于近似位，则忽略
                    let oData: number = discount * Math.pow(10, 6);
                    let nData: number = result * Math.pow(10, 6);
                    if (Math.abs(oData - nData) < 10) {
                        // 4舍
                        return;
                    }
                    context.outputValues.set(this.discount, ibas.numbers.round(result, 6));
                }
            }
        }
    }
}