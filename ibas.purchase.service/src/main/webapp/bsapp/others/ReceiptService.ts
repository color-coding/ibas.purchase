/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 单据收款-采购退货 */
        export class PurchaseReturnReceiptService
            extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IReceiptItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "7783fc2f-028b-4401-9d19-5820d4375480";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_receipt_purchasereturn";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnReceiptService.APPLICATION_ID;
                this.name = PurchaseReturnReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(["purchase_receipt", "bo_purchasereturn"]);
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                // 不查子项
                criteria.noChilds = true;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未结算的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = ibas.emDocumentStatus.CLOSED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_APPROVALSTATUS_NAME;
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
                if (!ibas.strings.isEmpty(contract.receipt.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.receipt.branch;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = contract.receipt.businessPartnerCode;
                // 未收全款的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturn.PROPERTY_DOCUMENTTOTAL_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = purchase.bo.PurchaseReturn.PROPERTY_PAIDTOTAL_NAME;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<purchase.bo.IPurchaseReturn>({
                    boCode: purchase.bo.BO_CODE_PURCHASERETURN,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<purchase.bo.IPurchaseReturn>): void {
                        for (let selected of selecteds) {
                            if (contract.receipt.receiptItems.firstOrDefault(
                                c => c.baseDocumentType === selected.objectCode
                                    && c.baseDocumentEntry === selected.docEntry
                                    && c.baseDocumentLineId === -1) !== null) {
                                continue;
                            }
                            let item: receiptpayment.bo.ReceiptItem = contract.receipt.receiptItems.create();
                            item.baseDocumentType = selected.objectCode;
                            item.baseDocumentEntry = selected.docEntry;
                            item.baseDocumentLineId = -1;
                            item.consumer = selected.consumer;
                            item.amount = selected.documentTotal - selected.paidTotal;
                            item.currency = selected.documentCurrency;
                        }
                        that.fireCompleted(contract.receipt.receiptItems);
                    }
                });
            }
        }
        /** 单据收款-采购退货 */
        export class PurchaseReturnReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnReceiptService.APPLICATION_ID;
                this.name = PurchaseReturnReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasereturn");
                this.proxy = receiptpayment.app.DocumentReceiptServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseReturnReceiptService();
            }
        }

        /** 单据收款-采购贷项 */
        export class PurchaseCreditNoteReceiptService
            extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IReceiptItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "cd1130a5-9f7a-4756-ac5c-3c23f5441872";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_receipt_purchasecreditnote";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseCreditNoteReceiptService.APPLICATION_ID;
                this.name = PurchaseCreditNoteReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(["purchase_receipt", "bo_purchasecreditnote"]);
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                // 不查子项
                criteria.noChilds = true;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未结算的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_DOCUMENTSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.NOT_EQUAL;
                condition.value = ibas.emDocumentStatus.CLOSED.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_APPROVALSTATUS_NAME;
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
                if (!ibas.strings.isEmpty(contract.receipt.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.receipt.branch;
                }
                // 当前供应商的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_SUPPLIERCODE_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = contract.receipt.businessPartnerCode;
                // 未收全款的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_DOCUMENTTOTAL_NAME;
                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                condition.comparedAlias = purchase.bo.PurchaseCreditNote.PROPERTY_PAIDTOTAL_NAME;
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<purchase.bo.IPurchaseCreditNote>({
                    boCode: purchase.bo.BO_CODE_PURCHASERETURN,
                    chooseType: ibas.emChooseType.MULTIPLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<purchase.bo.IPurchaseCreditNote>): void {
                        for (let selected of selecteds) {
                            if (contract.receipt.receiptItems.firstOrDefault(
                                c => c.baseDocumentType === selected.objectCode
                                    && c.baseDocumentEntry === selected.docEntry
                                    && c.baseDocumentLineId === -1) !== null) {
                                continue;
                            }
                            let item: receiptpayment.bo.ReceiptItem = contract.receipt.receiptItems.create();
                            item.baseDocumentType = selected.objectCode;
                            item.baseDocumentEntry = selected.docEntry;
                            item.baseDocumentLineId = -1;
                            item.consumer = selected.consumer;
                            item.amount = selected.documentTotal - selected.paidTotal;
                            item.currency = selected.documentCurrency;
                        }
                        that.fireCompleted(contract.receipt.receiptItems);
                    }
                });
            }
        }
        /** 单据收款-采购贷项 */
        export class PurchaseCreditNoteReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseCreditNoteReceiptService.APPLICATION_ID;
                this.name = PurchaseCreditNoteReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasecreditnote");
                this.proxy = receiptpayment.app.DocumentReceiptServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseCreditNoteReceiptService();
            }
        }
    }
}