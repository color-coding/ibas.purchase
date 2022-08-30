/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {
        /** 一揽子协议 */
        export interface IBlanketAgreement extends ibas.IBODocument {
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
            /** 付款条款代码 */
            paymentCode: string;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 描述 */
            description: string;
            /** 开始日期 */
            startDate: Date;
            /** 结束日期 */
            endDate: Date;
            /** 签署日期 */
            signDate: Date;
            /** 终止日期 */
            terminationDate: Date;
            /** 协议方法 */
            agreementMethod: emAgreementMethod;
            /** 协议类型 */
            agreementType: emAgreementType;
            /** 价格方式 */
            priceMode: emPriceMode;
            /** 结算概率 */
            settlementProbability: number;

            /** 一揽子协议-项目集合 */
            blanketAgreementItems: IBlanketAgreementItems;

        }

        /** 一揽子协议-项目 集合 */
        export interface IBlanketAgreementItems extends ibas.IBusinessObjects<IBlanketAgreementItem> {
            /** 创建并添加子项 */
            create(): IBlanketAgreementItem;
        }

        /** 一揽子协议-项目 */
        export interface IBlanketAgreementItem extends ibas.IBODocumentLine {
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 已删除 */
            deleted: ibas.emYesNo;
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 已清数量 */
            closedQuantity: number;
            /** 已清金额 */
            closedAmount: number;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;

        }


    }
}
