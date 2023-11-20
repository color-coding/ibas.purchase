/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 单据付款-采购订单 */
        export class PurchaseOrderPaymentService
            extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentPaymentContract, receiptpayment.bo.IPaymentItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "9c076171-239c-49b0-80ff-535b034f03f8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_payment_purchaseorder";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderPaymentService.APPLICATION_ID;
                this.name = PurchaseOrderPaymentService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(["purchase_payment", "bo_purchaseorder"]);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
            }
            protected runService(contract: receiptpayment.app.IDocumentPaymentContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                // 不查子项
                criteria.noChilds = true;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未结算的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = ibas.emDocumentStatus.CLOSED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 未指定的分支
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = "";
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                condition.operation = ibas.emConditionOperation.IS_NULL;
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                if (!ibas.strings.isEmpty(contract.payment.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.payment.branch;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = contract.payment.businessPartnerCode;
                // 未收全款的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_DOCUMENTTOTAL_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = purchase.bo.PurchaseOrder.PROPERTY_PAIDTOTAL_NAME;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<purchase.bo.IPurchaseOrder>({
                    boCode: purchase.bo.BO_CODE_PURCHASEORDER,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<purchase.bo.IPurchaseOrder>): void {
                        for (let selected of selecteds) {
                            if (contract.payment.paymentItems.firstOrDefault(
                                c => c.baseDocumentType === selected.objectCode
                                    && c.baseDocumentEntry === selected.docEntry
                                    && c.baseDocumentLineId === -1) !== null) {
                                continue;
                            }
                            let item: receiptpayment.bo.PaymentItem = contract.payment.paymentItems.create();
                            item.baseDocumentType = selected.objectCode;
                            item.baseDocumentEntry = selected.docEntry;
                            item.baseDocumentLineId = -1;
                            item.consumer = selected.consumer;
                            item.amount = selected.documentTotal - selected.paidTotal;
                            item.currency = selected.documentCurrency;
                        }
                        that.fireCompleted(contract.payment.paymentItems);
                    }
                });
            }
        }
        /** 单据付款-采购订单 */
        export class PurchaseOrderPaymentServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderPaymentService.APPLICATION_ID;
                this.name = PurchaseOrderPaymentService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchaseorder");
                this.proxy = receiptpayment.app.DocumentPaymentServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseOrderPaymentService();
            }
        }
        /** 单据付款-采购收货 */
        export class PurchaseDeliveryPaymentService
            extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentPaymentContract, receiptpayment.bo.IPaymentItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c55a6eae-ef64-4a35-aed5-72950e0fdf35";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_payment_purchasedelivery";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseDeliveryPaymentService.APPLICATION_ID;
                this.name = PurchaseDeliveryPaymentService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(["purchase_payment", "bo_purchasedelivery"]);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
            }
            protected runService(contract: receiptpayment.app.IDocumentPaymentContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                // 不查子项
                criteria.noChilds = true;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未结算的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = ibas.emDocumentStatus.CLOSED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 未指定的分支
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = "";
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                condition.operation = ibas.emConditionOperation.IS_NULL;
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                if (!ibas.strings.isEmpty(contract.payment.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.payment.branch;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = contract.payment.businessPartnerCode;
                // 未收全款的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_DOCUMENTTOTAL_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = purchase.bo.PurchaseDelivery.PROPERTY_PAIDTOTAL_NAME;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<purchase.bo.IPurchaseDelivery>({
                    boCode: purchase.bo.BO_CODE_PURCHASEDELIVERY,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<purchase.bo.IPurchaseDelivery>): void {
                        for (let selected of selecteds) {
                            if (contract.payment.paymentItems.firstOrDefault(
                                c => c.baseDocumentType === selected.objectCode
                                    && c.baseDocumentEntry === selected.docEntry
                                    && c.baseDocumentLineId === -1) !== null) {
                                continue;
                            }
                            let item: receiptpayment.bo.PaymentItem = contract.payment.paymentItems.create();
                            item.baseDocumentType = selected.objectCode;
                            item.baseDocumentEntry = selected.docEntry;
                            item.baseDocumentLineId = -1;
                            item.consumer = selected.consumer;
                            item.amount = selected.documentTotal - selected.paidTotal;
                            item.currency = selected.documentCurrency;
                        }
                        that.fireCompleted(contract.payment.paymentItems);
                    }
                });
            }
        }
        /** 单据付款-采购收货 */
        export class PurchaseDeliveryPaymentServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseDeliveryPaymentService.APPLICATION_ID;
                this.name = PurchaseDeliveryPaymentService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasedelivery");
                this.proxy = receiptpayment.app.DocumentPaymentServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseDeliveryPaymentService();
            }
        }
    }
}