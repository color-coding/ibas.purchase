/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 采购报价 */
        export interface IPurchaseQuote extends ibas.IBODocument, ibas.IBOUserFields {

            /** 凭证编号 */
            docEntry: number;

            /** 期间编号 */
            docNum: number;

            /** 期间 */
            period: number;

            /** 取消 */
            canceled: ibas.emYesNo;

            /** 状态 */
            status: ibas.emBOStatus;

            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;

            /** 单据状态 */
            documentStatus: ibas.emDocumentStatus;

            /** 对象类型 */
            objectCode: string;

            /** 创建日期 */
            createDate: Date;

            /** 创建时间 */
            createTime: number;

            /** 修改日期 */
            updateDate: Date;

            /** 修改时间 */
            updateTime: number;

            /** 版本 */
            logInst: number;

            /** 服务系列 */
            series: number;

            /** 数据源 */
            dataSource: string;

            /** 创建用户 */
            createUserSign: number;

            /** 修改用户 */
            updateUserSign: number;

            /** 创建动作标识 */
            createActionId: string;

            /** 更新动作标识 */
            updateActionId: string;

            /** 数据所有者 */
            dataOwner: number;

            /** 团队成员 */
            teamMembers: string;

            /** 数据所属组织 */
            organization: string;

            /** 过账日期 */
            postingDate: Date;

            /** 到期日 */
            deliveryDate: Date;

            /** 凭证日期 */
            documentDate: Date;

            /** 参考1 */
            reference1: string;

            /** 参考2 */
            reference2: string;

            /** 备注 */
            remarks: string;

            /** 已引用 */
            referenced: ibas.emYesNo;

            /** 已删除 */
            deleted: ibas.emYesNo;

            /** 供应商代码 */
            supplierCode: string;

            /** 供应商名称 */
            supplierName: string;

            /** 联系人 */
            contactPerson: number;

            /** 折扣 */
            discount: number;

            /** 折扣后总计 */
            discountTotal: number;

            /** 单据货币 */
            documentCurrency: string;

            /** 单据汇率 */
            documentRate: number;

            /** 单据总计 */
            documentTotal: number;

            /** 已付款总计 */
            paidTotal: number;

            /** 价格清单 */
            priceList: number;

            /** 付款条款 */
            paymentCode: string;

            /** 舍入 */
            rounding: ibas.emYesNo;

            /** 舍入差额 */
            diffAmount: number;

            /** 项目代码 */
            project: string;

            /** 终端客户 */
            consumer: string;

            /** 单据类型 */
            orderType: string;

            /** 采购报价-行集合 */
            purchaseQuoteItems: IPurchaseQuoteItems;

        }

        /** 采购报价-行 集合 */
        export interface IPurchaseQuoteItems extends ibas.IBusinessObjects<IPurchaseQuoteItem> {

            /** 创建并添加子项 */
            create(): IPurchaseQuoteItem;
        }

        /** 采购报价-行 */
        export interface IPurchaseQuoteItem extends ibas.IBODocumentLine, ibas.IBOUserFields {

            /** 编码 */
            docEntry: number;

            /** 行号 */
            lineId: number;

            /** 显示顺序 */
            visOrder: number;

            /** 类型 */
            objectCode: string;

            /** 实例号（版本） */
            logInst: number;

            /** 数据源 */
            dataSource: string;

            /** 取消 */
            canceled: ibas.emYesNo;

            /** 状态 */
            status: ibas.emBOStatus;

            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;

            /** 创建日期 */
            createDate: Date;

            /** 创建时间 */
            createTime: number;

            /** 修改日期 */
            updateDate: Date;

            /** 修改时间 */
            updateTime: number;

            /** 创建用户 */
            createUserSign: number;

            /** 修改用户 */
            updateUserSign: number;

            /** 创建动作标识 */
            createActionId: string;

            /** 更新动作标识 */
            updateActionId: string;

            /** 参考1 */
            reference1: string;

            /** 参考2 */
            reference2: string;

            /** 已引用 */
            referenced: ibas.emYesNo;

            /** 已删除 */
            deleted: ibas.emYesNo;

            /** 基于类型 */
            baseDocumentType: string;

            /** 基于标识 */
            baseDocumentEntry: number;

            /** 基于行号 */
            baseDocumentLineId: number;

            /** 原始类型 */
            originalDocumentType: string;

            /** 原始标识 */
            originalDocumentEntry: number;

            /** 原始行号 */
            originalDocumentLineId: number;

            /** 物料编码 */
            itemCode: string;

            /** 物料/服务描述 */
            itemDescription: string;

            /** 物料标识 */
            itemSign: string;

            /** 序号管理 */
            serialManagement: ibas.emYesNo;

            /** 批号管理 */
            batchManagement: ibas.emYesNo;

            /** 数量 */
            quantity: number;

            /** 计量单位 */
            uom: string;

            /** 仓库 */
            warehouse: string;

            /** 价格 */
            price: number;

            /** 货币 */
            currency: string;

            /** 汇率 */
            rate: number;

            /** 行总计 */
            lineTotal: number;

            /** 行交货日期 */
            deliveryDate: Date;

            /** 已清数量 */
            closedQuantity: number;

            /** 行折扣 */
            discount: number;

            /** 已清金额 */
            closedAmount: number;

            /** 折扣前价格 */
            unitPrice: number;
            /** 折扣前行总计 */
            unitLineTotal: number;

            /** 税定义 */
            tax: string;

            /** 税率 */
            taxRate: number;

            /** 税总额 */
            taxTotal: number;

            /** 税前价格 */
            preTaxPrice: number;

            /** 税前行总计 */
            preTaxLineTotal: number;

            /** 分配规则1 */
            distributionRule1: string;

            /** 分配规则2 */
            distributionRule2: string;

            /** 分配规则3 */
            distributionRule3: string;

            /** 分配规则4 */
            distributionRule4: string;

            /** 分配规则5 */
            distributionRule5: string;

            /** 采购报价-行-额外信息集合 */
            purchaseQuoteItemExtras: IPurchaseQuoteItemExtras;

            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;

        }

        /** 采购报价-行-额外信息 集合 */
        export interface IPurchaseQuoteItemExtras extends ibas.IBusinessObjects<IPurchaseQuoteItemExtra> {
            /** 创建并添加子项 */
            create(): IPurchaseQuoteItemExtra;
        }

        /** 采购报价-行-额外信息 */
        export interface IPurchaseQuoteItemExtra extends ibas.IBODocumentLine {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 类型 */
            objectCode: string;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 项目行号 */
            itemId: number;
            /** 额外类型 */
            extraType: string;
            /** 额外标识 */
            extraKey: number;
            /** 数量 */
            quantity: number;
            /** 备注 */
            note: string;

        }
    }
}


