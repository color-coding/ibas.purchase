/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    /** 模块-标识 */
    const CONSOLE_ID: string;
    /** 模块-名称 */
    const CONSOLE_NAME: string;
    /** 模块-版本 */
    const CONSOLE_VERSION: string;
    namespace config {
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        function get<T>(key: string, defalut?: T): T;
    }
    namespace bo {
        /** 业务仓库名称 */
        const BO_REPOSITORY_RECEIPTPAYMENT: string;
        /** 业务对象编码-付款 */
        const BO_CODE_PAYMENT: string;
        /** 业务对象编码-收款 */
        const BO_CODE_RECEIPT: string;
        /** 业务对象编码-资产充值 */
        const BO_CODE_ASSETRECHARGE: string;
    }
    namespace app {
        /** 配置项目-远程仓库的默认地址模板 */
        const CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED: string;
        /** 收款方式契约 */
        interface IReceiptMethodContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据摘要 */
            documentSummary?: string;
            /** 选择的 */
            selective?: boolean;
        }
        /** 收款方式代理 */
        class ReceiptMethodProxy extends ibas.ServiceProxy<IReceiptMethodContract> {
        }
        /** 收款方式服务映射 */
        abstract class ReceiptMethodServiceMapping extends ibas.ServiceMapping {
            constructor();
            get category(): string;
            set category(value: string);
            abstract create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 收款交易方式 */
        interface IReceiptTradingMethod {
            /** 收款方式 */
            method: ReceiptMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
            /** 单位 */
            unit?: string;
            /** 折扣 */
            discount?: number;
            /** 交易 */
            trade(amount: number): void | ibas.Waiter;
        }
        /** 收款方式 */
        abstract class ReceiptMethod extends ibas.Element implements ibas.IService<ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>> {
            /** 启用 */
            enabled: boolean;
            /** 默认收款项目状态 */
            defaultStatus?: ibas.emDocumentStatus;
            /** 不需要进行交易 */
            noTrade?: boolean;
            /** 运行-获取可用交易方式 */
            abstract run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 付款方式契约 */
        interface IPaymentMethodContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据摘要 */
            documentSummary?: string;
            /** 选择的 */
            selective?: boolean;
        }
        /** 付款方式代理 */
        class PaymentMethodProxy extends ibas.ServiceProxy<IPaymentMethodContract> {
        }
        /** 付款方式服务映射 */
        abstract class PaymentMethodServiceMapping extends ibas.ServiceMapping {
            constructor();
            get category(): string;
            set category(value: string);
            abstract create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 付款交易方式 */
        interface IPaymentTradingMethod {
            /** 付款方式 */
            method: PaymentMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
            /** 单位 */
            unit?: string;
        }
        /** 付款方式 */
        abstract class PaymentMethod extends ibas.Element implements ibas.IService<ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>> {
            /** 启用 */
            enabled: boolean;
            /** 默认付款项目状态 */
            defaultStatus?: ibas.emDocumentStatus;
            /** 不需要进行交易 */
            noTrade?: boolean;
            /** 运行-获取可用交易方式 */
            abstract run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 收款交易契约 */
        interface IReceiptTradeContract extends ibas.IServiceContract {
            /** 收款单据 */
            document?: bo.IReceipt | number;
        }
        /** 收款交易服务代理 */
        class ReceiptTradingServiceProxy extends ibas.ServiceProxy<IReceiptTradeContract> {
        }
        /** 单据收款 */
        interface IDocumentReceiptContract extends ibas.IServiceContract {
            /** 收款单 */
            receipt: bo.Receipt;
        }
        /** 单据收款服务代理 */
        class DocumentReceiptServiceProxy extends ibas.ServiceProxy<IDocumentReceiptContract> {
        }
        /** 单据付款 */
        interface IDocumentPaymentContract extends ibas.IServiceContract {
            /** 付款单 */
            payment: bo.Payment;
        }
        /** 单据付款服务代理 */
        class DocumentPaymentServiceProxy extends ibas.ServiceProxy<IDocumentPaymentContract> {
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 付款 */
        interface IPayment extends ibas.IBODocument, ibas.IBOUserFields {
            /** 凭证编号 */
            docEntry: number;
            /** 单据编码 */
            docNum: string;
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
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴代码 */
            businessPartnerCode: string;
            /** 业务伙伴名称 */
            businessPartnerName: string;
            /** 联系人 */
            contactPerson: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 分支 */
            branch: string;
            /** 预付款 */
            downPayment: ibas.emYesNo;
            /** 已清金额 */
            closedAmount: number;
            /** 付款-项目集合 */
            paymentItems: IPaymentItems;
        }
        /** 付款-项目 集合 */
        interface IPaymentItems extends ibas.IBusinessObjects<IPaymentItem> {
            /** 创建并添加子项 */
            create(): IPaymentItem;
        }
        /** 付款-项目 */
        interface IPaymentItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 终端客户 */
            consumer: string;
            /** 方式 */
            mode: string;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 交易识别码 */
            tradeId: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 收款 */
        interface IReceipt extends ibas.IBODocument, ibas.IBOUserFields {
            /** 凭证编号 */
            docEntry: number;
            /** 单据编码 */
            docNum: string;
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
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴代码 */
            businessPartnerCode: string;
            /** 业务伙伴名称 */
            businessPartnerName: string;
            /** 联系人 */
            contactPerson: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 分支 */
            branch: string;
            /** 预收款 */
            downPayment: ibas.emYesNo;
            /** 已清金额 */
            closedAmount: number;
            /** 收款-项目集合 */
            receiptItems: IReceiptItems;
        }
        /** 收款-项目 集合 */
        interface IReceiptItems extends ibas.IBusinessObjects<IReceiptItem> {
            /** 创建并添加子项 */
            create(): IReceiptItem;
        }
        /** 收款-项目 */
        interface IReceiptItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 终端客户 */
            consumer: string;
            /** 方式 */
            mode: string;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 交易识别码 */
            tradeId: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 资产充值 */
        interface IAssetRecharge extends ibas.IBODocument, ibas.IBOUserFields {
            /** 凭证编号 */
            docEntry: number;
            /** 单据编码 */
            docNum: string;
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
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴代码 */
            businessPartnerCode: string;
            /** 业务伙伴名称 */
            businessPartnerName: string;
            /** 联系人 */
            contactPerson: number;
            /** 业务伙伴资产码 */
            serviceCode: string;
            /** 充值量 */
            amount: number;
            /** 货币 */
            currency: string;
            /** 充值次数 */
            times: number;
            /** 单据类型 */
            orderType: string;
            /** 分支 */
            branch: string;
            /** 资产充值-项目集合 */
            assetRechargeItems: IAssetRechargeItems;
        }
        /** 资产充值-项目 集合 */
        interface IAssetRechargeItems extends ibas.IBusinessObjects<IAssetRechargeItem> {
            /** 创建并添加子项 */
            create(): IAssetRechargeItem;
        }
        /** 资产充值-项目 */
        interface IAssetRechargeItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 方式 */
            mode: string;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 交易识别码 */
            tradeId: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 业务仓库 */
        interface IBORepositoryReceiptPayment extends ibas.IBORepositoryApplication {
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 付款
             * @param fetcher 查询者
             */
            fetchPayment(fetcher: ibas.IFetchCaller<bo.IPayment>): void;
            /**
             * 保存 付款
             * @param saver 保存者
             */
            savePayment(saver: ibas.ISaveCaller<bo.IPayment>): void;
            /**
             * 查询 收款
             * @param fetcher 查询者
             */
            fetchReceipt(fetcher: ibas.IFetchCaller<bo.IReceipt>): void;
            /**
             * 保存 收款
             * @param saver 保存者
             */
            saveReceipt(saver: ibas.ISaveCaller<bo.IReceipt>): void;
            /**
             * 查询 资产充值
             * @param fetcher 查询者
             */
            fetchAssetRecharge(fetcher: ibas.IFetchCaller<bo.IAssetRecharge>): void;
            /**
             * 保存 资产充值
             * @param saver 保存者
             */
            saveAssetRecharge(saver: ibas.ISaveCaller<bo.IAssetRecharge>): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 付款 */
        class Payment extends ibas.BODocument<Payment> implements IPayment {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-单据编码 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-单据编码 */
            get docNum(): string;
            /** 设置-单据编码 */
            set docNum(value: string);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-业务伙伴类型 */
            static PROPERTY_BUSINESSPARTNERTYPE_NAME: string;
            /** 获取-业务伙伴类型 */
            get businessPartnerType(): businesspartner.bo.emBusinessPartnerType;
            /** 设置-业务伙伴类型 */
            set businessPartnerType(value: businesspartner.bo.emBusinessPartnerType);
            /** 映射的属性名称-业务伙伴代码 */
            static PROPERTY_BUSINESSPARTNERCODE_NAME: string;
            /** 获取-业务伙伴代码 */
            get businessPartnerCode(): string;
            /** 设置-业务伙伴代码 */
            set businessPartnerCode(value: string);
            /** 映射的属性名称-业务伙伴名称 */
            static PROPERTY_BUSINESSPARTNERNAME_NAME: string;
            /** 获取-业务伙伴名称 */
            get businessPartnerName(): string;
            /** 设置-业务伙伴名称 */
            set businessPartnerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-预付款 */
            static PROPERTY_DOWNPAYMENT_NAME: string;
            /** 获取-预付款 */
            get downPayment(): ibas.emYesNo;
            /** 设置-预付款 */
            set downPayment(value: ibas.emYesNo);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-付款-项目集合 */
            static PROPERTY_PAYMENTITEMS_NAME: string;
            /** 获取-付款-项目集合 */
            get paymentItems(): PaymentItems;
            /** 设置-付款-项目集合 */
            set paymentItems(value: PaymentItems);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 付款-项目 集合 */
        class PaymentItems extends ibas.BusinessObjects<PaymentItem, Payment> implements IPaymentItems {
            /** 创建并添加子项 */
            create(): PaymentItem;
            /** 添加子项后 子项属性赋值 */
            protected afterAdd(item: PaymentItem): void;
            /** 主表属性发生变化后 子项属性赋值  */
            protected onParentPropertyChanged(name: string): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: PaymentItem, name: string): void;
        }
        /** 付款-项目 */
        class PaymentItem extends ibas.BODocumentLine<PaymentItem> implements IPaymentItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-方式 */
            static PROPERTY_MODE_NAME: string;
            /** 获取-方式 */
            get mode(): string;
            /** 设置-方式 */
            set mode(value: string);
            /** 映射的属性名称-金额 */
            static PROPERTY_AMOUNT_NAME: string;
            /** 获取-金额 */
            get amount(): number;
            /** 设置-金额 */
            set amount(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-交易识别码 */
            static PROPERTY_TRADEID_NAME: string;
            /** 获取-交易识别码 */
            get tradeId(): string;
            /** 设置-交易识别码 */
            set tradeId(value: string);
            /** 初始化数据 */
            protected init(): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 收款 */
        class Receipt extends ibas.BODocument<Receipt> implements IReceipt {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-单据编码 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-单据编码 */
            get docNum(): string;
            /** 设置-单据编码 */
            set docNum(value: string);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-业务伙伴类型 */
            static PROPERTY_BUSINESSPARTNERTYPE_NAME: string;
            /** 获取-业务伙伴类型 */
            get businessPartnerType(): businesspartner.bo.emBusinessPartnerType;
            /** 设置-业务伙伴类型 */
            set businessPartnerType(value: businesspartner.bo.emBusinessPartnerType);
            /** 映射的属性名称-业务伙伴代码 */
            static PROPERTY_BUSINESSPARTNERCODE_NAME: string;
            /** 获取-业务伙伴代码 */
            get businessPartnerCode(): string;
            /** 设置-业务伙伴代码 */
            set businessPartnerCode(value: string);
            /** 映射的属性名称-业务伙伴名称 */
            static PROPERTY_BUSINESSPARTNERNAME_NAME: string;
            /** 获取-业务伙伴名称 */
            get businessPartnerName(): string;
            /** 设置-业务伙伴名称 */
            set businessPartnerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-预收款 */
            static PROPERTY_DOWNPAYMENT_NAME: string;
            /** 获取-预收款 */
            get downPayment(): ibas.emYesNo;
            /** 设置-预收款 */
            set downPayment(value: ibas.emYesNo);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-收款-项目集合 */
            static PROPERTY_RECEIPTITEMS_NAME: string;
            /** 获取-收款-项目集合 */
            get receiptItems(): ReceiptItems;
            /** 设置-收款-项目集合 */
            set receiptItems(value: ReceiptItems);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 收款-项目 集合 */
        class ReceiptItems extends ibas.BusinessObjects<ReceiptItem, Receipt> implements IReceiptItems {
            /** 创建并添加子项 */
            create(): ReceiptItem;
            /** 添加子项后 子项属性赋值 */
            protected afterAdd(item: ReceiptItem): void;
            /** 主表属性发生变化后 子项属性赋值  */
            protected onParentPropertyChanged(name: string): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: ReceiptItem, name: string): void;
        }
        /** 收款-项目 */
        class ReceiptItem extends ibas.BODocumentLine<ReceiptItem> implements IReceiptItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-方式 */
            static PROPERTY_MODE_NAME: string;
            /** 获取-方式 */
            get mode(): string;
            /** 设置-方式 */
            set mode(value: string);
            /** 映射的属性名称-金额 */
            static PROPERTY_AMOUNT_NAME: string;
            /** 获取-金额 */
            get amount(): number;
            /** 设置-金额 */
            set amount(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-交易识别码 */
            static PROPERTY_TRADEID_NAME: string;
            /** 获取-交易识别码 */
            get tradeId(): string;
            /** 设置-交易识别码 */
            set tradeId(value: string);
            /** 初始化数据 */
            protected init(): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 资产充值 */
        class AssetRecharge extends ibas.BODocument<AssetRecharge> implements IAssetRecharge {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-单据编码 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-单据编码 */
            get docNum(): string;
            /** 设置-单据编码 */
            set docNum(value: string);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-业务伙伴类型 */
            static PROPERTY_BUSINESSPARTNERTYPE_NAME: string;
            /** 获取-业务伙伴类型 */
            get businessPartnerType(): businesspartner.bo.emBusinessPartnerType;
            /** 设置-业务伙伴类型 */
            set businessPartnerType(value: businesspartner.bo.emBusinessPartnerType);
            /** 映射的属性名称-业务伙伴代码 */
            static PROPERTY_BUSINESSPARTNERCODE_NAME: string;
            /** 获取-业务伙伴代码 */
            get businessPartnerCode(): string;
            /** 设置-业务伙伴代码 */
            set businessPartnerCode(value: string);
            /** 映射的属性名称-业务伙伴名称 */
            static PROPERTY_BUSINESSPARTNERNAME_NAME: string;
            /** 获取-业务伙伴名称 */
            get businessPartnerName(): string;
            /** 设置-业务伙伴名称 */
            set businessPartnerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-业务伙伴资产码 */
            static PROPERTY_SERVICECODE_NAME: string;
            /** 获取-业务伙伴资产码 */
            get serviceCode(): string;
            /** 设置-业务伙伴资产码 */
            set serviceCode(value: string);
            /** 映射的属性名称-充值量 */
            static PROPERTY_AMOUNT_NAME: string;
            /** 获取-充值量 */
            get amount(): number;
            /** 设置-充值量 */
            set amount(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-充值次数 */
            static PROPERTY_TIMES_NAME: string;
            /** 获取-充值次数 */
            get times(): number;
            /** 设置-充值次数 */
            set times(value: number);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-资产充值-项目集合 */
            static PROPERTY_ASSETRECHARGEITEMS_NAME: string;
            /** 获取-资产充值-项目集合 */
            get assetRechargeItems(): AssetRechargeItems;
            /** 设置-资产充值-项目集合 */
            set assetRechargeItems(value: AssetRechargeItems);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 资产充值-项目 集合 */
        class AssetRechargeItems extends ibas.BusinessObjects<AssetRechargeItem, AssetRecharge> implements IAssetRechargeItems {
            /** 创建并添加子项 */
            create(): AssetRechargeItem;
        }
        /** 资产充值-项目 */
        class AssetRechargeItem extends ibas.BODocumentLine<AssetRechargeItem> implements IAssetRechargeItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-方式 */
            static PROPERTY_MODE_NAME: string;
            /** 获取-方式 */
            get mode(): string;
            /** 设置-方式 */
            set mode(value: string);
            /** 映射的属性名称-金额 */
            static PROPERTY_AMOUNT_NAME: string;
            /** 获取-金额 */
            get amount(): number;
            /** 设置-金额 */
            set amount(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-交易识别码 */
            static PROPERTY_TRADEID_NAME: string;
            /** 获取-交易识别码 */
            get tradeId(): string;
            /** 设置-交易识别码 */
            set tradeId(value: string);
            /** 初始化数据 */
            protected init(): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
        }
        /** 模块业务对象工厂 */
        const boFactory: ibas.BOFactory;
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
        /** 业务对象仓库 */
        class BORepositoryReceiptPayment extends ibas.BORepositoryApplication implements IBORepositoryReceiptPayment {
            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter;
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 付款
             * @param fetcher 查询者
             */
            fetchPayment(fetcher: ibas.IFetchCaller<bo.Payment>): void;
            /**
             * 保存 付款
             * @param saver 保存者
             */
            savePayment(saver: ibas.ISaveCaller<bo.Payment>): void;
            /**
             * 查询 收款
             * @param fetcher 查询者
             */
            fetchReceipt(fetcher: ibas.IFetchCaller<bo.Receipt>): void;
            /**
             * 保存 收款
             * @param saver 保存者
             */
            saveReceipt(saver: ibas.ISaveCaller<bo.Receipt>): void;
            /**
             * 查询 资产充值
             * @param fetcher 查询者
             */
            fetchAssetRecharge(fetcher: ibas.IFetchCaller<bo.AssetRecharge>): void;
            /**
             * 保存 资产充值
             * @param saver 保存者
             */
            saveAssetRecharge(saver: ibas.ISaveCaller<bo.AssetRecharge>): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace bo {
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 选择应用-付款 */
        class PaymentChooseApp extends ibas.BOChooseService<IPaymentChooseView, bo.Payment> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-付款 */
        interface IPaymentChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Payment[]): void;
        }
        /** 付款选择服务映射 */
        class PaymentChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Payment>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 编辑应用-付款 */
        class PaymentEditApp extends ibas.BOEditService<IPaymentEditView, bo.Payment> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Payment): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加付款-项目事件 */
            private addPaymentItem;
            /** 删除付款-项目事件 */
            private removePaymentItem;
            /** 选择付款客户事件 */
            private choosePaymentBusinessPartner;
            /** 选择付款项目-交易标识 */
            private choosePaymentItemModeTradeId;
            /** 选择付款联系人 */
            private choosePaymentContactPerson;
        }
        /** 视图-付款 */
        interface IPaymentEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPayment(data: bo.Payment): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择付款客户事件 */
            choosePaymentBusinessPartnerEvent: Function;
            /** 选择付款联系人事件 */
            choosePaymentContactPersonEvent: Function;
            /** 添加付款-项目事件 */
            addPaymentItemEvent: Function;
            /** 删除付款-项目事件 */
            removePaymentItemEvent: Function;
            /** 显示数据 */
            showPaymentItems(datas: bo.PaymentItem[]): void;
            /** 选择付款方式项目 */
            choosePaymentItemModeTradeIdEvent: Function;
            /** 显示显示付款单据 */
            showPaymentDocuments(datas: ibas.IServiceAgent[]): void;
        }
        /** 付款编辑服务映射 */
        class PaymentEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.Payment>>;
        }
        /** 单据付款-不基于 */
        class NotBaseOnPaymentService extends ibas.ServiceWithResultApplication<ibas.IView, app.IDocumentPaymentContract, bo.IPaymentItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected runService(contract: app.IDocumentPaymentContract): void;
        }
        /** 单据付款-不基于服务映射 */
        class NotBaseOnPaymentServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 单据付款-收款单 */
        class ReceiptPaymentService extends ibas.ServiceWithResultApplication<ibas.IView, app.IDocumentPaymentContract, bo.IPaymentItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected runService(contract: app.IDocumentPaymentContract): void;
        }
        /** 单据付款-收款单 */
        class ReceiptPaymentServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        class PaymentFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 列表应用-付款 */
        class PaymentListApp extends ibas.BOListApplication<IPaymentListView, bo.Payment> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.Payment): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Payment): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Payment | bo.Payment[]): void;
        }
        /** 视图-付款 */
        interface IPaymentListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Payment[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 查看应用-付款 */
        class PaymentViewApp extends ibas.BOViewService<IPaymentViewView, bo.Payment> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            run(): void;
            run(data: bo.Payment): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-付款 */
        interface IPaymentViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showPayment(data: bo.Payment): void;
            /** 显示数据-付款-项目 */
            showPaymentItems(datas: bo.PaymentItem[]): void;
        }
        /** 付款连接服务映射 */
        class PaymentLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOLinkService;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 选择应用-收款 */
        class ReceiptChooseApp extends ibas.BOChooseService<IReceiptChooseView, bo.Receipt> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-收款 */
        interface IReceiptChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Receipt[]): void;
        }
        /** 收款选择服务映射 */
        class ReceiptChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Receipt>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 编辑应用-收款 */
        class ReceiptEditApp extends ibas.BOEditService<IReceiptEditView, bo.Receipt> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Receipt): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加收款-项目事件 */
            private addReceiptItem;
            /** 删除收款-项目事件 */
            private removeReceiptItem;
            /** 选择收款供应商事件 */
            private chooseReceiptBusinessPartner;
            /** 选择收款项目-交易标识 */
            private chooseReceiptItemModeTradeId;
            /** 选择收款联系人 */
            private chooseReceiptContactPerson;
            /** 转为付款事件 */
            private turnToPayment;
        }
        /** 视图-收款 */
        interface IReceiptEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showReceipt(data: bo.Receipt): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择收款客户事件 */
            chooseReceiptBusinessPartnerEvent: Function;
            /** 选择收款联系人事件 */
            chooseReceiptContactPersonEvent: Function;
            /** 添加收款-项目事件 */
            addReceiptItemEvent: Function;
            /** 删除收款-项目事件 */
            removeReceiptItemEvent: Function;
            /** 显示数据 */
            showReceiptItems(datas: bo.ReceiptItem[]): void;
            /** 选择收款方式项目 */
            chooseReceiptItemModeTradeIdEvent: Function;
            /** 显示显示收款单据 */
            showReceiptDocuments(datas: ibas.IServiceAgent[]): void;
            /** 转为付款事件 */
            turnToPaymentEvent: Function;
        }
        /** 收款编辑服务映射 */
        class ReceiptEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.Receipt>>;
        }
        /** 单据收款-不基于 */
        class NotBaseOnReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, app.IDocumentReceiptContract, bo.IReceiptItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected runService(contract: app.IDocumentReceiptContract): void;
        }
        /** 单据收款-不基于服务映射 */
        class NotBaseOnReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        class ReceiptFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 列表应用-收款 */
        class ReceiptListApp extends ibas.BOListApplication<IReceiptListView, bo.Receipt> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.Receipt): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Receipt): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Receipt | bo.Receipt[]): void;
        }
        /** 视图-收款 */
        interface IReceiptListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Receipt[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 查看应用-收款 */
        class ReceiptViewApp extends ibas.BOViewService<IReceiptViewView, bo.Receipt> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            run(): void;
            run(data: bo.Receipt): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-收款 */
        interface IReceiptViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showReceipt(data: bo.Receipt): void;
            /** 显示数据-收款-项目 */
            showReceiptItems(datas: bo.ReceiptItem[]): void;
        }
        /** 收款连接服务映射 */
        class ReceiptLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOLinkService;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        class AssetRechargeFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 列表应用-资产充值 */
        class AssetRechargeListApp extends ibas.BOListApplication<IAssetRechargeListView, bo.AssetRecharge> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.AssetRecharge): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.AssetRecharge): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.AssetRecharge | bo.AssetRecharge[]): void;
        }
        /** 视图-资产充值 */
        interface IAssetRechargeListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.AssetRecharge[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 选择应用-资产充值 */
        class AssetRechargeChooseApp extends ibas.BOChooseService<IAssetRechargeChooseView, bo.AssetRecharge> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-资产充值 */
        interface IAssetRechargeChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.AssetRecharge[]): void;
        }
        /** 资产充值选择服务映射 */
        class AssetRechargeChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.AssetRecharge>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 查看应用-资产充值 */
        class AssetRechargeViewApp extends ibas.BOViewService<IAssetRechargeViewView, bo.AssetRecharge> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            run(): void;
            run(data: bo.AssetRecharge): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-资产充值 */
        interface IAssetRechargeViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showAssetRecharge(data: bo.AssetRecharge): void;
            /** 显示数据-资产充值-项目 */
            showAssetRechargeItems(datas: bo.AssetRechargeItem[]): void;
        }
        /** 资产充值连接服务映射 */
        class AssetRechargeLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOLinkService;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 编辑应用-资产充值 */
        class AssetRechargeEditApp extends ibas.BOEditService<IAssetRechargeEditView, bo.AssetRecharge> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            run(): void;
            run(data: bo.AssetRecharge): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加资产充值-项目事件 */
            protected addAssetRechargeItem(): void;
            /** 删除资产充值-项目事件 */
            protected removeAssetRechargeItem(items: bo.AssetRechargeItem[]): void;
            /** 选择资产充值-交易标识 */
            private chooseAssetRechargeItemModeTradeId;
            /** 选择资产充值-业务伙伴资产 */
            private chooseAssetRechargeBusinessPartnerAsset;
            /** 选择资产充值客户事件 */
            private chooseAssetRechargeBusinessPartner;
        }
        /** 视图-资产充值 */
        interface IAssetRechargeEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showAssetRecharge(data: bo.AssetRecharge): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加资产充值-项目事件 */
            addAssetRechargeItemEvent: Function;
            /** 删除资产充值-项目事件 */
            removeAssetRechargeItemEvent: Function;
            /** 显示数据 */
            showAssetRechargeItems(datas: bo.AssetRechargeItem[]): void;
            /** 选择资产充值客户事件 */
            chooseAssetRechargeBusinessPartnerEvent: Function;
            /** 选择资产充值项目 */
            chooseAssetRechargeBusinessPartnerAssetEvent: Function;
            /** 选择资产充值方式项目 */
            chooseAssetRechargeItemModeTradeIdEvent: Function;
        }
        /** 资产充值编辑服务映射 */
        class AssetRechargeEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.AssetRecharge>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        class InternalReconciliationFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 列表应用-内部对账 */
        class InternalReconciliationListApp extends ibas.BOListApplication<IInternalReconciliationListView, businesspartner.bo.InternalReconciliation> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: businesspartner.bo.InternalReconciliation): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: businesspartner.bo.InternalReconciliation): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: businesspartner.bo.InternalReconciliation | businesspartner.bo.InternalReconciliation[]): void;
        }
        /** 视图-内部对账 */
        interface IInternalReconciliationListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: businesspartner.bo.InternalReconciliation[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 选择应用-内部对账 */
        class InternalReconciliationChooseApp extends ibas.BOChooseService<IInternalReconciliationChooseView, businesspartner.bo.InternalReconciliation> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-内部对账 */
        interface IInternalReconciliationChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: businesspartner.bo.InternalReconciliation[]): void;
        }
        /** 内部对账选择服务映射 */
        class InternalReconciliationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<businesspartner.bo.InternalReconciliation>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 查看应用-内部对账 */
        class InternalReconciliationViewApp extends ibas.BOViewService<IInternalReconciliationViewView, businesspartner.bo.InternalReconciliation> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            run(): void;
            run(data: businesspartner.bo.InternalReconciliation): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
            /** 删除数据 */
            protected deleteData(): void;
        }
        /** 视图-内部对账 */
        interface IInternalReconciliationViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showInternalReconciliation(data: businesspartner.bo.InternalReconciliation): void;
            /** 显示数据-内部对账-行 */
            showInternalReconciliationLines(datas: businesspartner.bo.InternalReconciliationLine[]): void;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
        }
        /** 内部对账连接服务映射 */
        class InternalReconciliationLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOLinkService;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 编辑应用-内部对账 */
        class InternalReconciliationEditApp extends ibas.BOEditApplication<IInternalReconciliationEditView, businesspartner.bo.InternalReconciliation> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            run(): void;
            run(data: businesspartner.bo.InternalReconciliation): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加内部对账-行事件 */
            protected addInternalReconciliationLine(): void;
            /** 删除内部对账-行事件 */
            protected removeInternalReconciliationLine(items: businesspartner.bo.InternalReconciliationLine[]): void;
        }
        /** 视图-内部对账 */
        interface IInternalReconciliationEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showInternalReconciliation(data: businesspartner.bo.InternalReconciliation): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加内部对账-行事件 */
            addInternalReconciliationLineEvent: Function;
            /** 删除内部对账-行事件 */
            removeInternalReconciliationLineEvent: Function;
            /** 显示数据-内部对账-行 */
            showInternalReconciliationLines(datas: businesspartner.bo.InternalReconciliationLine[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        class InternalReconciliation extends ibas.Bindable {
            constructor(data: bo.Receipt | bo.Payment | sales.bo.SalesInvoice | sales.bo.SalesCreditNote | purchase.bo.PurchaseInvoice | purchase.bo.PurchaseCreditNote);
            data: bo.Receipt | bo.Payment | sales.bo.SalesInvoice | sales.bo.SalesCreditNote | purchase.bo.PurchaseInvoice | purchase.bo.PurchaseCreditNote;
            /** 获取-单据类型 */
            get documentType(): string;
            /** 设置-单据类型 */
            set documentType(value: string);
            /** 获取-单据标识 */
            get documentEntry(): number;
            /** 设置-单据标识 */
            set documentEntry(value: number);
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 获取-提取金额 */
            get drawnTotal(): number;
            /** 设置-提取金额 */
            set drawnTotal(value: number);
            get shortName(): string;
        }
        /** 应用-内部对账 */
        class InternalReconciliationApp extends ibas.Application<IInternalReconciliationView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            private fetchDocuments;
            /** 对账事件 */
            private reconcile;
        }
        /** 视图-内部对账 */
        interface IInternalReconciliationView extends ibas.IView {
            /** 显示数据 */
            showDocuments(datas: InternalReconciliation[]): void;
            /** 查询数据事件 */
            fetchDocumentsEvent: Function;
            /** 对账事件 */
            reconcileEvent: Function;
            /** 显示结果 */
            showResults(datas: businesspartner.bo.InternalReconciliation[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 收款交易方式 */
        class ReceiptTradingMethod implements IReceiptTradingMethod {
            /** 收款方式 */
            method: ReceiptMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon: string;
            /** 可用金额 */
            amount: number;
            /** 单位 */
            unit: string;
            /** 折扣 */
            discount: number;
            /** 交易 */
            trade(amount: number): void | ibas.Waiter;
        }
        class Waiter extends ibas.Waiter {
            constructor(title: string);
            title: string;
            start(): void;
        }
        /** 付款交易方式 */
        class PaymentTradingMethod implements IPaymentTradingMethod {
            /** 付款方式 */
            method: PaymentMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-业务伙伴资产 */
        const TRADING_MODE_BP_ASSSET: string;
        /** 交易标记-收款-业务伙伴资产 */
        const TRADING_ID_RECEIPT_BP_ASSSET: string;
        /**
         * 收款方式-业务伙伴资产
         */
        class ReceiptMethodBPAsset extends ReceiptMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-业务伙伴资产 */
        class ReceiptMethodBPAssetMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 交易标记-付款-业务伙伴资产 */
        const TRADING_ID_PAYMENT_BP_ASSSET: string;
        /**
         * 付款方式-业务伙伴资产
         */
        class PaymentMethodBPAsset extends PaymentMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 付款方式映射-业务伙伴资产 */
        class PaymentMethodBPAssetMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-银行 */
        const TRADING_MODE_BANK: string;
        /** 交易标记-收款-银行 */
        const TRADING_ID_RECEIPT_BANK: string;
        /**
         * 收款方式-银行
         */
        class ReceiptMethodBank extends ReceiptMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-银行 */
        class ReceiptMethodBankMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 交易标记-付款-银行 */
        const TRADING_ID_PAYMENT_BANK: string;
        /**
         * 付款方式-银行
         */
        class PaymentMethodBank extends PaymentMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 付款方式映射-银行 */
        class PaymentMethodBankMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-现金 */
        const TRADING_MODE_CASH: string;
        /** 交易标记-收款-现金 */
        const TRADING_ID_RECEIPT_CASH: string;
        /**
         * 收款方式-现金
         */
        class ReceiptMethodCash extends ReceiptMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-现金 */
        class ReceiptMethodCashMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 交易标记-付款-现金 */
        const TRADING_ID_PAYMENT_CASH: string;
        /**
         * 付款方式-现金
         */
        class PaymentMethodCash extends PaymentMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 付款方式映射-银行 */
        class PaymentMethodCashMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-货到付款 */
        const TRADING_MODE_COD: string;
        /** 交易标记-收款-货到付款 */
        const TRADING_ID_RECEIPT_COD: string;
        /**
         * 收款方式-货到付款
         */
        class ReceiptMethodCOD extends ReceiptMethod {
            constructor();
            /** 默认收款项目状态 */
            defaultStatus: ibas.emDocumentStatus;
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-货到付款 */
        class ReceiptMethodCODMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-POS */
        const TRADING_MODE_POS: string;
        /** 交易标记-收款-POS */
        const TRADING_ID_RECEIPT_POS: string;
        /**
         * 收款方式-POS
         */
        class ReceiptMethodPOS extends ReceiptMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-POS */
        class ReceiptMethodPOSMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-支票 */
        const TRADING_MODE_CHECK: string;
        /** 交易标记-收款-支票 */
        const TRADING_ID_RECEIPT_CHECK: string;
        /**
         * 收款方式-支票
         */
        class ReceiptMethodCheck extends ReceiptMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-支票 */
        class ReceiptMethodCheckMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 交易标记-付款-支票 */
        const TRADING_ID_PAYMENT_CHECK: string;
        /**
         * 付款方式-支票
         */
        class PaymentMethodCheck extends PaymentMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 付款方式映射-支票 */
        class PaymentMethodCheckMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 交易方式-汇票 */
        const TRADING_MODE_MONEY_ORDER: string;
        /** 交易标记-收款-汇票 */
        const TRADING_ID_RECEIPT_MONEY_ORDER: string;
        /**
         * 收款方式-汇票
         */
        class ReceiptMethodMoneyOrder extends ReceiptMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 收款方式映射-汇票 */
        class ReceiptMethodMoneyOrderMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 交易标记-付款-汇票 */
        const TRADING_ID_PAYMENT_MONEY_ORDER: string;
        /**
         * 付款方式-汇票
         */
        class PaymentMethodMoneyOrder extends PaymentMethod {
            constructor();
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 付款方式映射-汇票 */
        class PaymentMethodMoneyOrderMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 收款服务 */
        class ReceiptService extends ibas.ServiceWithResultApplication<IReceiptServiceView, businesspartner.app.IReceiptContract, bo.IReceipt> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            private target;
            private businessPartner;
            private receiptTradings;
            /** 运行服务 */
            runService(contract: businesspartner.app.IReceiptContract): void;
            /** 移出收款交易 */
            private removeReceiptTrading;
            /** 使用收款交易 */
            private applyReceiptTrading;
            private showReceiptTradings;
            /** 确定 */
            private confirm;
        }
        /** 视图-收款服务 */
        interface IReceiptServiceView extends ibas.IBOView {
            /** 显示业务伙伴 */
            showBusinessPartner(data: BusinessPartner): void;
            /** 显示收款目标 */
            showTarget(data: ReceiptTarget): void;
            /** 显示收款交易方式 */
            showTradingMethods(methods: IReceiptTradingMethod[]): void;
            /** 显示收款交易 */
            showReceiptTradings(tradings: ReceiptTrading[], paid: number): void;
            /** 移出收款交易 */
            removeReceiptTradingEvent: Function;
            /** 使用收款交易 */
            applyReceiptTradingEvent: Function;
            /** 确定 */
            confirmEvent: Function;
        }
        class BusinessPartner {
            /** 类型 */
            type: businesspartner.bo.emBusinessPartnerType;
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
        }
        class ReceiptTarget {
            /** 待收总计 */
            total: number;
            /** 币种 */
            currency: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据摘要 */
            documentSummary?: string;
            /** 允许部分收款 */
            allowPartial?: boolean;
            /** 允许超出收款 */
            allowOver?: boolean;
        }
        class ReceiptTrading {
            /** 交易方式 */
            trading: IReceiptTradingMethod;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
        }
        class ReceiptTradingDiscount extends ReceiptTrading {
            constructor(parent: ReceiptTrading);
            /** 父项交易 */
            parent: ReceiptTrading;
        }
        /** 收款服务映射 */
        class ReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 收款交易服务 */
        class ReceiptTradeService extends ibas.ServiceWithResultApplication<IReceiptTradeServiceView, IReceiptTradeContract, bo.IReceipt> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            private receipt;
            /** 运行服务 */
            runService(contract: IReceiptTradeContract): void;
            private tradings;
            private getTradings;
            /** 执行交易 */
            private trade;
            private showTradings;
            private finished;
        }
        /** 视图-收款交易服务 */
        interface IReceiptTradeServiceView extends ibas.IBOView {
            /** 显示收款交易 */
            showTradings(tradings: ReceiptTrading[]): void;
        }
        /** 收款交易服务映射 */
        class ReceiptTradeServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 等待交易契约 */
        interface IWaitTradingContract extends ibas.IServiceContract {
            /** 标题 */
            title: string;
        }
        /** 等待交易服务代理 */
        class WaitTradingServiceProxy extends ibas.ServiceProxy<IWaitTradingContract> {
        }
        /** 等待交易服务 */
        class WaitTradingService extends ibas.ServiceWithResultApplication<IWaitTradingServiceView, IWaitTradingContract, any> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行服务 */
            runService(contract: IWaitTradingContract): void;
            private finished;
        }
        /** 视图-等待交易服务 */
        interface IWaitTradingServiceView extends ibas.IView {
            /** 开始 */
            start(): void;
            /** 完成事件 */
            finishedEvent: Function;
        }
        /** 等待交易服务映射 */
        class WaitTradingServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace receiptpayment {
    namespace app {
        /** 模块控制台 */
        class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor();
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation;
            /** 初始化 */
            protected registers(): void;
            /** 运行 */
            run(): void;
        }
        /** 模块控制台，手机端 */
        class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void;
        }
    }
}
