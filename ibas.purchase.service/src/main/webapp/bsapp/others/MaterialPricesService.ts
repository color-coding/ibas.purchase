/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 单据价格-销售订单 */
        export class PurchaseOrderMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "4d5f9e7b-8853-4dca-8b9a-85d717784ac8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchaseorder";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseOrderMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchaseorder"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
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
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
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
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseOrder.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseOrder.PROPERTY_PURCHASEORDERITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseOrderItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseOrder.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseOrder.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseOrder({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseOrderItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售订单 */
        export class PurchaseOrderMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseOrderMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchaseorder");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseOrderMaterialPriceService();
            }
        }

        /** 单据价格-预收款申请 */
        export class DownPaymentRequestMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "a5274780-b9bd-4e5c-8e3d-9f7b76c6cff8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_downpaymentrequest";
            /** 构造函数 */
            constructor() {
                super();
                this.id = DownPaymentRequestMaterialPriceService.APPLICATION_ID;
                this.name = DownPaymentRequestMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_downpaymentrequest"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.DownPaymentRequest.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.DownPaymentRequest.PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.DownPaymentRequestItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.DownPaymentRequest.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.DownPaymentRequest.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchDownPaymentRequest({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.downPaymentRequestItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-预收款申请 */
        export class DownPaymentRequestMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = DownPaymentRequestMaterialPriceService.APPLICATION_ID;
                this.name = DownPaymentRequestMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_downpaymentrequest_ap");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new DownPaymentRequestMaterialPriceService();
            }
        }


        /** 单据价格-销售贷项 */
        export class PurchaseCreditNoteMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "421bc96e-e143-400f-96a7-08cb846ef582";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchasecreditnote";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseCreditNoteMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseCreditNoteMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchasecreditnote"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
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
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseCreditNote.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseCreditNote.PROPERTY_PURCHASECREDITNOTEITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseCreditNoteItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseCreditNote.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseCreditNote.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseCreditNote({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseCreditNoteItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售退货请求 */
        export class PurchaseCreditNoteMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseCreditNoteMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseCreditNoteMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasecreditnote");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseCreditNoteMaterialPriceService();
            }
        }

        /** 单据价格-销售交货 */
        export class PurchaseDeliveryMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "b9fcf690-1a7e-4ef9-9c60-2b455ac5aa0c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchasedelivery";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseDeliveryMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseDeliveryMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchasedelivery"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
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
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseDelivery.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseDelivery.PROPERTY_PURCHASEDELIVERYITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseDeliveryItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseDelivery.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseDelivery.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseDelivery({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseDeliveryItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售交货 */
        export class PurchaseDeliveryMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseDeliveryMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseDeliveryMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasedelivery");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseDeliveryMaterialPriceService();
            }
        }


        /** 单据价格-销售发票 */
        export class PurchaseInvoiceMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "c7089e01-9148-479b-8c66-209140597cf4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchaseinvoice";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseInvoiceMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseInvoiceMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchaseinvoice"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseInvoice.PROPERTY_PURCHASEINVOICEITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseInvoiceItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseInvoice.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseInvoice.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseInvoice({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseInvoiceItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售发票 */
        export class PurchaseInvoiceMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseInvoiceMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseInvoiceMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchaseinvoice");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseInvoiceMaterialPriceService();
            }
        }

        /** 单据价格-销售报价 */
        export class PurchaseQuoteMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "bc4d1b7e-f176-420c-8c52-e40acad7835d";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchasequote";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseQuoteMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchasequote"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseQuote.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseQuote.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseQuote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseQuote.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseQuote.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseQuote.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseQuote.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseQuote.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseQuote.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseQuote.PROPERTY_PURCHASEQUOTEITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseQuoteItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseQuote.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseQuote.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseQuote({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseQuoteItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售报价 */
        export class PurchaseQuoteMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseQuoteMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasequote");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseQuoteMaterialPriceService();
            }
        }

        /** 单据价格-销售预留发票 */
        export class PurchaseReserveInvoiceMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "2627dc58-d896-4a74-af5f-080184af65b4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchasereserveinvoice";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReserveInvoiceMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseReserveInvoiceMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchasereserveinvoice"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReserveInvoice.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseReserveInvoice.PROPERTY_PURCHASERESERVEINVOICEITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseReserveInvoiceItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseReserveInvoice.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseReserveInvoice.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReserveInvoice({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseReserveInvoiceItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售预留发票 */
        export class PurchaseReserveInvoiceMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReserveInvoiceMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseReserveInvoiceMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasereserveinvoice");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseReserveInvoiceMaterialPriceService();
            }
        }

        /** 单据价格-销售退货 */
        export class PurchaseReturnMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "74636b69-1116-46f4-91aa-46d3b3e86e97";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchasereturn";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseReturnMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchasereturn"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
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
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturn.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturn.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturn.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturn.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturn.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseReturn.PROPERTY_PURCHASERETURNITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseReturnItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseReturn.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseReturn.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReturn({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseReturnItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售退货 */
        export class PurchaseReturnMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseReturnMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasereturn");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseReturnMaterialPriceService();
            }
        }


        /** 单据价格-销售退货请求 */
        export class PurchaseReturnRequestMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "bd09c8e9-a60a-493a-bafe-0f5992ff0f28";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchasereturnrequest";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseReturnRequestMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchasereturnrequest"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseReturnRequest.PROPERTY_SUPPLIERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseReturnRequest.PROPERTY_PURCHASERETURNREQUESTITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseReturnRequestItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseReturnRequest.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseReturnRequest.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReturnRequest({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseReturnRequestItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: item.supplierCode,
                                        businessPartnerName: item.supplierName,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: config.isInverseDiscount() ? sItem.inverseDiscount : sItem.discount,
                                        unitPrice: sItem.unitPrice
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-销售退货请求 */
        export class PurchaseReturnRequestMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnRequestMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseReturnRequestMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchasereturnrequest");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseReturnRequestMaterialPriceService();
            }
        }

        /** 单据价格-采购申请 */
        export class PurchaseRequestMaterialPriceService
            extends ibas.ServiceWithResultApplication<ibas.IView, materials.app.IDocumentMaterialPriceContract, materials.app.IDocumentMaterialPriceData[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "be7b692c-32ef-41f3-bf76-5e3326a307a9";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_materialprice_purchaserequest";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseRequestMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseRequestMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("purchase_material_price", ibas.i18n.prop("bo_purchaserequest"));
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
            protected runService(contract: materials.app.IDocumentMaterialPriceContract): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = contract.resultCount;
                let condition: ibas.ICondition = criteria.conditions.create();
                // 未取消的
                condition.alias = purchase.bo.PurchaseRequest.PROPERTY_CANCELED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 未删除的
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseRequest.PROPERTY_DELETED_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emYesNo.NO.toString();
                // 审批通过的或未进审批
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.APPROVED.toString();
                condition.bracketOpen = 1;
                condition = criteria.conditions.create();
                condition.alias = purchase.bo.PurchaseRequest.PROPERTY_APPROVALSTATUS_NAME;
                condition.operation = ibas.emConditionOperation.EQUAL;
                condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                condition.relationship = ibas.emConditionRelationship.OR;
                condition.bracketClose = 1;
                // 是否指定分支
                if (!ibas.strings.isEmpty(contract.branch)) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.branch;
                } else {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = "";
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseRequest.PROPERTY_BRANCH_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                // 单据日期
                if (contract.documentDate instanceof Date) {
                    condition = criteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseRequest.PROPERTY_DOCUMENTDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = ibas.dates.toString(contract.documentDate, "yyyy-MM-dd");
                }
                // 查询物料
                let cCriteria: ibas.IChildCriteria = criteria.childCriterias.create();
                cCriteria.propertyPath = bo.PurchaseRequest.PROPERTY_PURCHASEREQUESTITEMS_NAME;
                cCriteria.onlyHasChilds = true;
                condition = cCriteria.conditions.create();
                condition.alias = bo.PurchaseRequestItem.PROPERTY_ITEMCODE_NAME;
                condition.value = contract.itemCode;
                // 当前供应商的
                if (!ibas.strings.isEmpty(contract.businessPartnerCode)) {
                    condition = cCriteria.conditions.create();
                    condition.alias = purchase.bo.PurchaseRequestItem.PROPERTY_SUPPLIER_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = contract.businessPartnerCode;
                }
                // 日期排序
                let sort: ibas.ISort = criteria.sorts.create();
                sort.alias = bo.PurchaseRequest.PROPERTY_DOCUMENTDATE_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                sort = criteria.sorts.create();
                sort.alias = bo.PurchaseRequest.PROPERTY_DOCENTRY_NAME;
                sort.sortType = ibas.emSortType.DESCENDING;
                // 查询数据
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseRequest({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let results: ibas.IList<materials.app.IDocumentMaterialPriceData>
                                = new ibas.ArrayList<materials.app.IDocumentMaterialPriceData>();
                            for (let item of opRslt.resultObjects) {
                                for (let sItem of item.purchaseRequestItems) {
                                    results.add({
                                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                        businessPartnerCode: sItem.supplier,
                                        businessPartnerName: undefined,
                                        documentType: item.objectCode,
                                        documentEntry: item.docEntry,
                                        documentDate: item.documentDate,
                                        documentLineId: sItem.lineId,
                                        itemCode: sItem.itemCode,
                                        itemDescription: sItem.itemDescription,
                                        quantity: sItem.quantity,
                                        uom: sItem.uom,
                                        price: sItem.price,
                                        currency: sItem.currency,
                                        preTaxPrice: sItem.preTaxPrice,
                                        discount: 1,
                                        unitPrice: 0
                                    });
                                }
                            }
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(results);
                            }
                        } catch (error) {
                            if (contract.onCompleted instanceof Function) {
                                contract.onCompleted(error);
                            }
                        }
                    }
                });
            }
        }
        /** 单据价格-采购申请 */
        export class PurchaseRequestMaterialPriceServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseRequestMaterialPriceService.APPLICATION_ID;
                this.name = PurchaseRequestMaterialPriceService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("bo_purchaserequest");
                this.proxy = materials.app.DocumentMaterialPriceServiceProxy;
                this.category = ibas.enums.toString(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PurchaseRequestMaterialPriceService();
            }
        }
    }
}