/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sales {
    /** 模块-标识 */
    const CONSOLE_ID: string;
    /** 模块-名称 */
    const CONSOLE_NAME: string;
    /** 模块-版本 */
    const CONSOLE_VERSION: string;
    namespace config {
        /** 配置项目-价格清单改变是否强制刷新价格 */
        const CONFIG_ITEM_FORCE_UPDATE_PRICE_FOR_PRICE_LIST_CHANGED: string;
        /** 配置项目-允许改变基于单据币种 */
        const CONFIG_ITEM_ALLOW_CHANGE_BASED_DOCUMENT_CURRENCY: string;
        /** 配置项目-单据行价格类型 */
        const CONFIG_ITEM_DOCUMENT_LINE_PRICE_TYPE: string;
        /** 配置项目-仅使用价格清单里的单位 */
        const CONFIG_ITEM_ONLY_PRICE_LIST_ITEM_UNITS: string;
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        function get<T>(key: string, defalut?: T): T;
        function isInventoryUnitLinePrice(): boolean;
    }
    namespace bo {
        /** 业务仓库名称 */
        const BO_REPOSITORY_SALES: string;
        /** 业务对象编码-产品套装 */
        const BO_CODE_PRODUCTSUIT: string;
        /** 业务对象编码-销售交货 */
        const BO_CODE_SALESDELIVERY: string;
        /** 业务对象编码-销售订单 */
        const BO_CODE_SALESORDER: string;
        /** 业务对象编码-销售退货 */
        const BO_CODE_SALESRETURN: string;
        /** 业务对象编码-销售报价 */
        const BO_CODE_SALESQUOTE: string;
        /** 业务对象编码-送货地址 */
        const BO_CODE_SHIPPINGADDRESS: string;
        /** 业务对象编码-销售贷项 */
        const BO_CODE_SALESCREDITNOTE: string;
        /** 业务对象编码-销售发票 */
        const BO_CODE_SALESINVOICE: string;
        /** 业务对象编码-一揽子协议 */
        const BO_CODE_BLANKETAGREEMENT: string;
        /** 业务对象编码-预收款申请 */
        const BO_CODE_DOWNPAYMNETREQUEST: string;
        /** 业务对象编码-销售预留发票 */
        const BO_CODE_SALESRESERVEINVOICE: string;
        /** 运输状态 */
        enum emShippingStatus {
            /**
             * 等待
             */
            WAITING = 0,
            /**
             * 运输中
             */
            SHIPPING = 1,
            /**
             * 已送达
             */
            SHIPPED = 2
        }
        enum emAgreementType {
            GENERAL = 0,
            SPECIFIC = 1
        }
        enum emAgreementMethod {
            ITEM = 0,
            MONETARY = 1
        }
    }
    namespace app {
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sales {
    namespace bo {
        /** 产品套装 */
        interface IProductSuit extends ibas.IBOSimple, ibas.IBOUserFields {
            /** 产品编码 */
            product: string;
            /** 产品描述 */
            description: string;
            /** 版本 */
            version: string;
            /** 是否激活 */
            activated: ibas.emYesNo;
            /** 单位数量 */
            unitQuantity: number;
            /** 计量单位 */
            uom: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 总计 */
            total: number;
            /** 货币 */
            currency: string;
            /** 备注 */
            remarks: string;
            /** 对象编号 */
            objectKey: number;
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
            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 产品套装-项目集合 */
            productSuitItems: IProductSuitItems;
        }
        /** 产品套装-项目 集合 */
        interface IProductSuitItems extends ibas.IBusinessObjects<IProductSuitItem> {
            /** 创建并添加子项 */
            create(): IProductSuitItem;
        }
        /** 产品套装-项目 */
        interface IProductSuitItem extends ibas.IBOSimpleLine, ibas.IBOUserFields {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 组件编码 */
            itemCode: string;
            /** 组件名称 */
            itemDescription: string;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 总计 */
            lineTotal: number;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
        }
        interface IProductSuitEx extends IProductSuit {
            extend: materials.bo.IProduct;
            productSuitItems: IProductSuitItemExs;
        }
        interface IProductSuitItemExs extends ibas.IBusinessObjects<IProductSuitItemEx> {
        }
        interface IProductSuitItemEx extends IProductSuitItem {
            extend: materials.bo.IProduct;
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
declare namespace sales {
    namespace bo {
        /** 销售交货 */
        interface ISalesDelivery extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售交货-行集合 */
            salesDeliveryItems: ISalesDeliveryItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售预留发票 */
            baseDocument(document: ISalesReserveInvoice): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售交货-行 集合 */
        interface ISalesDeliveryItems extends ibas.IBusinessObjects<ISalesDeliveryItem> {
            /** 创建并添加子项 */
            create(): ISalesDeliveryItem;
        }
        /** 销售交货-行 */
        interface ISalesDeliveryItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
declare namespace sales {
    namespace bo {
        /** 销售订单 */
        interface ISalesOrder extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售订单-行集合 */
            salesOrderItems: ISalesOrderItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售报价 */
            baseDocument(document: ISalesQuote): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售订单-行 集合 */
        interface ISalesOrderItems extends ibas.IBusinessObjects<ISalesOrderItem> {
            /** 创建并添加子项 */
            create(): ISalesOrderItem;
        }
        /** 销售订单-行 */
        interface ISalesOrderItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 已订购数量 */
            orderedQuantity: number;
            /** 销售订单-行-额外信息集合 */
            salesOrderItemExtras: ISalesOrderItemExtras;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
        }
        /** 销售订单-行-额外信息 集合 */
        interface ISalesOrderItemExtras extends ibas.IBusinessObjects<ISalesOrderItemExtra> {
            /** 创建并添加子项 */
            create(): ISalesOrderItemExtra;
        }
        /** 销售订单-行-额外信息 */
        interface ISalesOrderItemExtra extends ibas.IBODocumentLine {
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sales {
    namespace bo {
        /** 销售退货 */
        interface ISalesReturn extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售退货-行集合 */
            salesReturnItems: ISalesReturnItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 销售退货-行 集合 */
        interface ISalesReturnItems extends ibas.IBusinessObjects<ISalesReturnItem> {
            /** 创建并添加子项 */
            create(): ISalesReturnItem;
        }
        /** 销售退货-行 */
        interface ISalesReturnItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 退货成本（本币） */
            returnCost: number;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
declare namespace sales {
    namespace bo {
        /** 销售报价 */
        interface ISalesQuote extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户类型 */
            customerType: businesspartner.bo.emBusinessPartnerType;
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售报价-行集合 */
            salesQuoteItems: ISalesQuoteItems;
        }
        /** 销售报价-行 集合 */
        interface ISalesQuoteItems extends ibas.IBusinessObjects<ISalesQuoteItem> {
            /** 创建并添加子项 */
            create(): ISalesQuoteItem;
        }
        /** 销售报价-行 */
        interface ISalesQuoteItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 销售报价-行-额外信息集合 */
            salesQuoteItemExtras: ISalesQuoteItemExtras;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
        }
        /** 销售报价-行-额外信息 集合 */
        interface ISalesQuoteItemExtras extends ibas.IBusinessObjects<ISalesQuoteItemExtra> {
            /** 创建并添加子项 */
            create(): ISalesQuoteItemExtra;
        }
        /** 销售报价-行-额外信息 */
        interface ISalesQuoteItemExtra extends ibas.IBODocumentLine {
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sales {
    namespace bo {
        /** 销售贷项 */
        interface ISalesCreditNote extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售贷项-行集合 */
            salesCreditNoteItems: ISalesCreditNoteItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售发票 */
            baseDocument(document: ISalesInvoice): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesReturn): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售贷项-行 集合 */
        interface ISalesCreditNoteItems extends ibas.IBusinessObjects<ISalesCreditNoteItem> {
            /** 创建并添加子项 */
            create(): ISalesCreditNoteItem;
        }
        /** 销售贷项-行 */
        interface ISalesCreditNoteItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 退货成本（本币） */
            returnCost: number;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
declare namespace sales {
    namespace bo {
        /** 销售发票 */
        interface ISalesInvoice extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售发票-行集合 */
            salesInvoiceItems: ISalesInvoiceItems;
            /** 销售发票-预收款集合 */
            salesInvoiceDownPayments: ISalesInvoiceDownPayments;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售发票-行 集合 */
        interface ISalesInvoiceItems extends ibas.IBusinessObjects<ISalesInvoiceItem> {
            /** 创建并添加子项 */
            create(): ISalesInvoiceItem;
        }
        /** 销售发票-预收款 集合 */
        interface ISalesInvoiceDownPayments extends ibas.IBusinessObjects<ISalesInvoiceDownPayment> {
            /** 创建并添加子项 */
            create(): ISalesInvoiceDownPayment;
        }
        /** 销售发票-行 */
        interface ISalesInvoiceItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
        }
        /** 销售发票-预收款 */
        interface ISalesInvoiceDownPayment extends ibas.IBODocumentLine {
            /** 凭证编号 */
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
            /** 收款类型 */
            paymentType: string;
            /** 收款编号 */
            paymentEntry: number;
            /** 收款行号 */
            paymentLineId: number;
            /** 收款总计 */
            paymentTotal: number;
            /** 收款货币 */
            paymentCurrency: string;
            /** 收款汇率 */
            paymentRate: number;
            /** 提取金额 */
            drawnTotal: number;
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
            /** 基于收款 */
            baseDocument(document: receiptpayment.bo.IReceiptItem): void;
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
declare namespace sales {
    namespace bo {
        /** 送货地址 */
        interface IShippingAddress extends ibas.IBOSimple, ibas.IBOUserFields {
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 名称 */
            name: string;
            /** 顺序 */
            order: number;
            /** 送货状态 */
            shippingStatus: emShippingStatus;
            /** 收货人 */
            consignee: string;
            /** 街道 */
            street: string;
            /** 县/区 */
            district: string;
            /** 市 */
            city: string;
            /** 省 */
            province: string;
            /** 国 */
            country: string;
            /** 邮编 */
            zipCode: string;
            /** 联系电话 */
            mobilePhone: string;
            /** 电话  */
            telephone: string;
            /** 备注 1 */
            remark1: string;
            /** 备注 2 */
            remark2: string;
            /** 费用 */
            expense: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 快递单号 */
            trackingNumber: string;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前费用 */
            preTaxExpense: number;
            /** 对象编号 */
            objectKey: number;
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
            /** 实例号（版本） */
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
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 送货地址 集合 */
        interface IShippingAddresss extends ibas.IBusinessObjects<IShippingAddress> {
            /** 创建并添加子项 */
            create(): IShippingAddress;
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
declare namespace sales {
    namespace bo {
        /** 一揽子协议 */
        interface IBlanketAgreement extends ibas.IBODocument {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
            /** 联系人 */
            contactPerson: number;
            /** 付款条款 */
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
            /** 结算概率 */
            settlementProbability: number;
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 一揽子协议-项目集合 */
            blanketAgreementItems: IBlanketAgreementItems;
        }
        /** 一揽子协议-项目 集合 */
        interface IBlanketAgreementItems extends ibas.IBusinessObjects<IBlanketAgreementItem> {
            /** 创建并添加子项 */
            create(): IBlanketAgreementItem;
        }
        /** 一揽子协议-项目 */
        interface IBlanketAgreementItem extends ibas.IBODocumentLine {
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
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sales {
    namespace bo {
        /** 预收款申请 */
        interface IDownPaymentRequest extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
            /** 联系人 */
            contactPerson: number;
            /** 预付比例 */
            discount: number;
            /** 比例后总计 */
            discountTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 已付款总计 */
            paidTotal: number;
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
            /** 合同/协议 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 预收款申请-行集合 */
            downPaymentRequestItems: IDownPaymentRequestItems;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 预收款申请-行 集合 */
        interface IDownPaymentRequestItems extends ibas.IBusinessObjects<IDownPaymentRequestItem> {
            /** 创建并添加子项 */
            create(): IDownPaymentRequestItem;
        }
        /** 预收款申请-行 */
        interface IDownPaymentRequestItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
            /** 凭证编号 */
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
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同/协议 */
            agreements: string;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
declare namespace sales {
    namespace bo {
        /** 销售预留发票 */
        interface ISalesReserveInvoice extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 合同 */
            agreements: string;
            /** 分支 */
            branch: string;
            /** 销售预留发票-行集合 */
            salesReserveInvoiceItems: ISalesReserveInvoiceItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售预留发票-行 集合 */
        interface ISalesReserveInvoiceItems extends ibas.IBusinessObjects<ISalesReserveInvoiceItem> {
            /** 创建并添加子项 */
            create(): ISalesReserveInvoiceItem;
        }
        /** 销售预留发票-行 */
        interface ISalesReserveInvoiceItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
            itemDescription: string;
            /** 产品标识 */
            itemSign: string;
            /** 产品版本 */
            itemVersion: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 成本中心1 */
            distributionRule1: string;
            /** 成本中心2 */
            distributionRule2: string;
            /** 成本中心3 */
            distributionRule3: string;
            /** 成本中心4 */
            distributionRule4: string;
            /** 成本中心5 */
            distributionRule5: string;
            /** 合同 */
            agreements: string;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
declare namespace sales {
    namespace bo {
        /** 业务仓库 */
        interface IBORepositorySales extends ibas.IBORepositoryApplication {
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
             * 查询 产品套装
             * @param fetcher 查询者
             */
            fetchProductSuit(fetcher: ibas.IFetchCaller<bo.IProductSuit>): void;
            /**
             * 保存 产品套装
             * @param saver 保存者
             */
            saveProductSuit(saver: ibas.ISaveCaller<bo.IProductSuit>): void;
            /**
             * 查询 销售交货
             * @param fetcher 查询者
             */
            fetchSalesDelivery(fetcher: ibas.IFetchCaller<bo.ISalesDelivery>): void;
            /**
             * 保存 销售交货
             * @param saver 保存者
             */
            saveSalesDelivery(saver: ibas.ISaveCaller<bo.ISalesDelivery>): void;
            /**
             * 查询 销售订单
             * @param fetcher 查询者
             */
            fetchSalesOrder(fetcher: ibas.IFetchCaller<bo.ISalesOrder>): void;
            /**
             * 保存 销售订单
             * @param saver 保存者
             */
            saveSalesOrder(saver: ibas.ISaveCaller<bo.ISalesOrder>): void;
            /**
             * 查询 销售退货
             * @param fetcher 查询者
             */
            fetchSalesReturn(fetcher: ibas.IFetchCaller<bo.ISalesReturn>): void;
            /**
             * 保存 销售退货
             * @param saver 保存者
             */
            saveSalesReturn(saver: ibas.ISaveCaller<bo.ISalesReturn>): void;
            /**
             * 查询 销售报价
             * @param fetcher 查询者
             */
            fetchSalesQuote(fetcher: ibas.IFetchCaller<bo.ISalesQuote>): void;
            /**
             * 保存 销售报价
             * @param saver 保存者
             */
            saveSalesQuote(saver: ibas.ISaveCaller<bo.ISalesQuote>): void;
            /**
             * 查询 产品套装并扩展产品数据
             * @param fetcher 查询者
             */
            fetchProductSuitEx(fetcher: ibas.IFetchCaller<bo.IProductSuitEx>): void;
            /**
             * 查询 销售贷项
             * @param fetcher 查询者
             */
            fetchSalesCreditNote(fetcher: ibas.IFetchCaller<bo.ISalesCreditNote>): void;
            /**
             * 保存 销售贷项
             * @param saver 保存者
             */
            saveSalesCreditNote(saver: ibas.ISaveCaller<bo.ISalesCreditNote>): void;
            /**
             * 查询 销售发票
             * @param fetcher 查询者
             */
            fetchSalesInvoice(fetcher: ibas.IFetchCaller<bo.ISalesInvoice>): void;
            /**
             * 保存 销售发票
             * @param saver 保存者
             */
            saveSalesInvoice(saver: ibas.ISaveCaller<bo.ISalesInvoice>): void;
            /**
             * 查询 一揽子协议
             * @param fetcher 查询者
             */
            fetchBlanketAgreement(fetcher: ibas.IFetchCaller<bo.IBlanketAgreement>): void;
            /**
             * 保存 一揽子协议
             * @param saver 保存者
             */
            saveBlanketAgreement(saver: ibas.ISaveCaller<bo.IBlanketAgreement>): void;
            /**
             * 查询 预付款申请
             * @param fetcher 查询者
             */
            fetchDownPaymentRequest(fetcher: ibas.IFetchCaller<bo.IDownPaymentRequest>): void;
            /**
             * 保存 预付款申请
             * @param saver 保存者
             */
            saveDownPaymentRequest(saver: ibas.ISaveCaller<bo.IDownPaymentRequest>): void;
            /**
             * 查询 销售预留发票
             * @param fetcher 查询者
             */
            fetchSalesReserveInvoice(fetcher: ibas.IFetchCaller<bo.ISalesReserveInvoice>): void;
            /**
             * 保存 销售预留发票
             * @param saver 保存者
             */
            saveSalesReserveInvoice(saver: ibas.ISaveCaller<bo.ISalesReserveInvoice>): void;
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
declare namespace sales {
    namespace bo {
        /** 产品套装 */
        class ProductSuit extends ibas.BOSimple<ProductSuit> implements IProductSuit {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-产品编码 */
            static PROPERTY_PRODUCT_NAME: string;
            /** 获取-产品编码 */
            get product(): string;
            /** 设置-产品编码 */
            set product(value: string);
            /** 映射的属性名称-产品描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-产品描述 */
            get description(): string;
            /** 设置-产品描述 */
            set description(value: string);
            /** 映射的属性名称-版本 */
            static PROPERTY_VERSION_NAME: string;
            /** 获取-版本 */
            get version(): string;
            /** 设置-版本 */
            set version(value: string);
            /** 映射的属性名称-是否激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-是否激活 */
            get activated(): ibas.emYesNo;
            /** 设置-是否激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-单位数量 */
            static PROPERTY_UNITQUANTITY_NAME: string;
            /** 获取-单位数量 */
            get unitQuantity(): number;
            /** 设置-单位数量 */
            set unitQuantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string;
            /** 获取-生效日期 */
            get validDate(): Date;
            /** 设置-生效日期 */
            set validDate(value: Date);
            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string;
            /** 获取-失效日期 */
            get invalidDate(): Date;
            /** 设置-失效日期 */
            set invalidDate(value: Date);
            /** 映射的属性名称-总计 */
            static PROPERTY_TOTAL_NAME: string;
            /** 获取-总计 */
            get total(): number;
            /** 设置-总计 */
            set total(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            get objectKey(): number;
            /** 设置-对象编号 */
            set objectKey(value: number);
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
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
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
            /** 映射的属性名称-产品套装-项目集合 */
            static PROPERTY_PRODUCTSUITITEMS_NAME: string;
            /** 获取-产品套装-项目集合 */
            get productSuitItems(): ProductSuitItems;
            /** 设置-产品套装-项目集合 */
            set productSuitItems(value: ProductSuitItems);
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 产品套装-项目 集合 */
        class ProductSuitItems extends ibas.BusinessObjects<ProductSuitItem, ProductSuit> implements IProductSuitItems {
            /** 创建并添加子项 */
            create(): ProductSuitItem;
        }
        /** 产品套装-项目 */
        class ProductSuitItem extends ibas.BOSimpleLine<ProductSuitItem> implements IProductSuitItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            get objectKey(): number;
            /** 设置-对象编号 */
            set objectKey(value: number);
            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-对象行号 */
            get lineId(): number;
            /** 设置-对象行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            get logInst(): number;
            /** 设置-实例号 */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-更新日期 */
            get updateDate(): Date;
            /** 设置-更新日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-更新时间 */
            get updateTime(): number;
            /** 设置-更新时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-更新用户 */
            get updateUserSign(): number;
            /** 设置-更新用户 */
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
            /** 映射的属性名称-组件编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-组件编码 */
            get itemCode(): string;
            /** 设置-组件编码 */
            set itemCode(value: string);
            /** 映射的属性名称-组件名称 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-组件名称 */
            get itemDescription(): string;
            /** 设置-组件名称 */
            set itemDescription(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-总计 */
            get lineTotal(): number;
            /** 设置-总计 */
            set lineTotal(value: number);
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
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
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
declare namespace sales {
    namespace bo {
        /** 销售交货 */
        class SalesDelivery extends ibas.BODocument<SalesDelivery> implements ISalesDelivery, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售交货-行集合 */
            static PROPERTY_SALESDELIVERYITEMS_NAME: string;
            /** 获取-销售交货-行集合 */
            get salesDeliveryItems(): SalesDeliveryItems;
            /** 设置-销售交货-行集合 */
            set salesDeliveryItems(value: SalesDeliveryItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售预留发票 */
            baseDocument(document: ISalesReserveInvoice): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售交货-行 集合 */
        class SalesDeliveryItems extends ibas.BusinessObjects<SalesDeliveryItem, SalesDelivery> implements ISalesDeliveryItems {
            /** 创建并添加子项 */
            create(): SalesDeliveryItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesDeliveryItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesDeliveryItem, name: string): void;
            protected afterAdd(item: SalesDeliveryItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售交货-行 */
        class SalesDeliveryItem extends ibas.BODocumentLine<SalesDeliveryItem> implements ISalesDeliveryItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
declare namespace sales {
    namespace bo {
        /** 销售订单 */
        class SalesOrder extends ibas.BODocument<SalesOrder> implements ISalesOrder, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售订单-行集合 */
            static PROPERTY_SALESORDERITEMS_NAME: string;
            /** 获取-销售订单-行集合 */
            get salesOrderItems(): SalesOrderItems;
            /** 设置-销售订单-行集合 */
            set salesOrderItems(value: SalesOrderItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 基于销售订单 */
            baseDocument(document: ISalesQuote): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 销售订单-行 集合 */
        class SalesOrderItems extends ibas.BusinessObjects<SalesOrderItem, SalesOrder> implements ISalesOrderItems {
            /** 创建并添加子项 */
            create(): SalesOrderItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesOrderItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesOrderItem, name: string): void;
            protected afterAdd(item: SalesOrderItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售订单-行 */
        class SalesOrderItem extends ibas.BODocumentLine<SalesOrderItem> implements ISalesOrderItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-已订购数量 */
            static PROPERTY_ORDEREDQUANTITY_NAME: string;
            /** 获取-已订购数量 */
            get orderedQuantity(): number;
            /** 设置-已订购数量 */
            set orderedQuantity(value: number);
            /** 映射的属性名称-销售订单-行-额外信息集合 */
            static PROPERTY_SALESORDERITEMEXTRAS_NAME: string;
            /** 获取-销售订单-行-额外信息集合 */
            get salesOrderItemExtras(): SalesOrderItemExtras;
            /** 设置-销售订单-行-额外信息集合 */
            set salesOrderItemExtras(value: SalesOrderItemExtras);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
        }
        /** 销售订单-行-额外信息 集合 */
        class SalesOrderItemExtras extends ibas.BusinessObjects<SalesOrderItemExtra, SalesOrderItem> implements ISalesOrderItemExtras {
            /** 创建并添加子项 */
            create(): SalesOrderItemExtra;
        }
        /** 销售订单-行-额外信息 */
        class SalesOrderItemExtra extends ibas.BODocumentLine<SalesOrderItemExtra> implements ISalesOrderItemExtra {
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
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            get itemId(): number;
            /** 设置-项目行号 */
            set itemId(value: number);
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            get extraType(): string;
            /** 设置-额外类型 */
            set extraType(value: string);
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            get extraKey(): number;
            /** 设置-额外标识 */
            set extraKey(value: number);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            get note(): string;
            /** 设置-备注 */
            set note(value: string);
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
declare namespace sales {
    namespace bo {
        /** 销售报价 */
        class SalesQuote extends ibas.BODocument<SalesQuote> implements ISalesQuote, ibas.IConvertedData {
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
            /** 映射的属性名称-客户类型 */
            static PROPERTY_CUSTOMERTYPE_NAME: string;
            /** 获取-客户类型 */
            get customerType(): businesspartner.bo.emBusinessPartnerType;
            /** 设置-客户类型 */
            set customerType(value: businesspartner.bo.emBusinessPartnerType);
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售订单-行集合 */
            static PROPERTY_SALESQUOTEITEMS_NAME: string;
            /** 获取-销售订单-行集合 */
            get salesQuoteItems(): SalesQuoteItems;
            /** 设置-销售订单-行集合 */
            set salesQuoteItems(value: SalesQuoteItems);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 销售报价-行 集合 */
        class SalesQuoteItems extends ibas.BusinessObjects<SalesQuoteItem, SalesQuote> implements ISalesQuoteItems {
            /** 创建并添加子项 */
            create(): SalesQuoteItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesQuoteItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesQuoteItem, name: string): void;
            protected afterAdd(item: SalesQuoteItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售报价-行 */
        class SalesQuoteItem extends ibas.BODocumentLine<SalesQuoteItem> implements ISalesQuoteItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-销售报价-行-额外信息集合 */
            static PROPERTY_SALESQUOTEITEMEXTRAS_NAME: string;
            /** 获取-销售报价-行-额外信息集合 */
            get salesQuoteItemExtras(): SalesQuoteItemExtras;
            /** 设置-销售报价-行-额外信息集合 */
            set salesQuoteItemExtras(value: SalesQuoteItemExtras);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
        }
        /** 销售报价-行-额外信息 集合 */
        class SalesQuoteItemExtras extends ibas.BusinessObjects<SalesQuoteItemExtra, SalesQuoteItem> implements ISalesQuoteItemExtras {
            /** 创建并添加子项 */
            create(): SalesQuoteItemExtra;
        }
        /** 销售报价-行-额外信息 */
        class SalesQuoteItemExtra extends ibas.BODocumentLine<SalesQuoteItemExtra> implements ISalesQuoteItemExtra {
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
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            get itemId(): number;
            /** 设置-项目行号 */
            set itemId(value: number);
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            get extraType(): string;
            /** 设置-额外类型 */
            set extraType(value: string);
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            get extraKey(): number;
            /** 设置-额外标识 */
            set extraKey(value: number);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            get note(): string;
            /** 设置-备注 */
            set note(value: string);
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
declare namespace sales {
    namespace bo {
        /** 销售退货 */
        class SalesReturn extends ibas.BODocument<SalesReturn> implements ISalesReturn, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售退货-行集合 */
            static PROPERTY_SALESRETURNITEMS_NAME: string;
            /** 获取-销售退货-行集合 */
            get salesReturnItems(): SalesReturnItems;
            /** 设置-销售退货-行集合 */
            set salesReturnItems(value: SalesReturnItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 销售退货-行 集合 */
        class SalesReturnItems extends ibas.BusinessObjects<SalesReturnItem, SalesReturn> implements ISalesReturnItems {
            /** 创建并添加子项 */
            create(): SalesReturnItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesReturnItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesReturnItem, name: string): void;
            protected afterAdd(item: SalesReturnItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售退货-行 */
        class SalesReturnItem extends ibas.BODocumentLine<SalesReturnItem> implements ISalesReturnItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-退货成本（本币） */
            static PROPERTY_RETURNCOST_NAME: string;
            /** 获取-退货成本（本币） */
            get returnCost(): number;
            /** 设置-退货成本（本币） */
            set returnCost(value: number);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
declare namespace sales {
    namespace bo {
        /** 销售贷项 */
        class SalesCreditNote extends ibas.BODocument<SalesCreditNote> implements ISalesCreditNote, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售贷项-行集合 */
            static PROPERTY_SALESCREDITNOTEITEMS_NAME: string;
            /** 获取-销售贷项-行集合 */
            get salesCreditNoteItems(): SalesCreditNoteItems;
            /** 设置-销售贷项-行集合 */
            set salesCreditNoteItems(value: SalesCreditNoteItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            baseDocument(document: ISalesInvoice): void;
            baseDocument(document: ISalesReturn): void;
            baseDocument(document: ISalesReserveInvoice): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售贷项-行 集合 */
        class SalesCreditNoteItems extends ibas.BusinessObjects<SalesCreditNoteItem, SalesCreditNote> implements ISalesCreditNoteItems {
            /** 创建并添加子项 */
            create(): SalesCreditNoteItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesCreditNoteItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesCreditNoteItem, name: string): void;
            protected afterAdd(item: SalesCreditNoteItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售贷项-行 */
        class SalesCreditNoteItem extends ibas.BODocumentLine<SalesCreditNoteItem> implements ISalesCreditNoteItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-退货成本（本币） */
            static PROPERTY_RETURNCOST_NAME: string;
            /** 获取-退货成本（本币） */
            get returnCost(): number;
            /** 设置-退货成本（本币） */
            set returnCost(value: number);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
declare namespace sales {
    namespace bo {
        /** 销售发票 */
        class SalesInvoice extends ibas.BODocument<SalesInvoice> implements ISalesInvoice, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售发票-行集合 */
            static PROPERTY_SALESINVOICEITEMS_NAME: string;
            /** 获取-销售发票-行集合 */
            get salesInvoiceItems(): SalesInvoiceItems;
            /** 设置-销售发票-行集合 */
            set salesInvoiceItems(value: SalesInvoiceItems);
            /** 映射的属性名称-销售发票-预收款集合 */
            static PROPERTY_SALESINVOICEDOWNPAYMENTS_NAME: string;
            /** 获取-销售发票-预收款集合 */
            get salesInvoiceDownPayments(): SalesInvoiceDownPayments;
            /** 设置-销售发票-预收款集合 */
            set salesInvoiceDownPayments(value: SalesInvoiceDownPayments);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            /** 映射的属性名称-预付款总计 */
            static PROPERTY_DOWNPAYMENTTOTAL_NAME: string;
            /** 获取-预付款总计 */
            get downPaymentTotal(): number;
            /** 设置-预付款总计 */
            set downPaymentTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            baseDocument(document: ISalesOrder): void;
            baseDocument(document: ISalesDelivery): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售发票-行 集合 */
        class SalesInvoiceItems extends ibas.BusinessObjects<SalesInvoiceItem, SalesInvoice> implements ISalesInvoiceItems {
            /** 创建并添加子项 */
            create(): SalesInvoiceItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesInvoiceItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesInvoiceItem, name: string): void;
            protected afterAdd(item: SalesInvoiceItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售发票-预收款 集合 */
        class SalesInvoiceDownPayments extends ibas.BusinessObjects<SalesInvoiceDownPayment, SalesInvoice> implements ISalesInvoiceDownPayments {
            /** 创建并添加子项 */
            create(): SalesInvoiceDownPayment;
        }
        /** 销售发票-行 */
        class SalesInvoiceItem extends ibas.BODocumentLine<SalesInvoiceItem> implements ISalesInvoiceItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行发票日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行发票日期 */
            get deliveryDate(): Date;
            /** 设置-行发票日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
        }
        /** 销售发票-预收款 */
        class SalesInvoiceDownPayment extends ibas.BODocumentLine<SalesInvoiceDownPayment> implements ISalesInvoiceDownPayment {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
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
            /** 映射的属性名称-收款类型 */
            static PROPERTY_PAYMENTTYPE_NAME: string;
            /** 获取-收款类型 */
            get paymentType(): string;
            /** 设置-收款类型 */
            set paymentType(value: string);
            /** 映射的属性名称-收款编号 */
            static PROPERTY_PAYMENTENTRY_NAME: string;
            /** 获取-收款编号 */
            get paymentEntry(): number;
            /** 设置-收款编号 */
            set paymentEntry(value: number);
            /** 映射的属性名称-收款行号 */
            static PROPERTY_PAYMENTLINEID_NAME: string;
            /** 获取-收款行号 */
            get paymentLineId(): number;
            /** 设置-收款行号 */
            set paymentLineId(value: number);
            /** 映射的属性名称-收款总计 */
            static PROPERTY_PAYMENTTOTAL_NAME: string;
            /** 获取-收款总计 */
            get paymentTotal(): number;
            /** 设置-收款总计 */
            set paymentTotal(value: number);
            /** 映射的属性名称-收款货币 */
            static PROPERTY_PAYMENTCURRENCY_NAME: string;
            /** 获取-收款货币 */
            get paymentCurrency(): string;
            /** 设置-收款货币 */
            set paymentCurrency(value: string);
            /** 映射的属性名称-收款汇率 */
            static PROPERTY_PAYMENTRATE_NAME: string;
            /** 获取-收款汇率 */
            get paymentRate(): number;
            /** 设置-收款汇率 */
            set paymentRate(value: number);
            /** 映射的属性名称-提取金额 */
            static PROPERTY_DRAWNTOTAL_NAME: string;
            /** 获取-提取金额 */
            get drawnTotal(): number;
            /** 设置-提取金额 */
            set drawnTotal(value: number);
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
            /** 基于收款 */
            baseDocument(document: receiptpayment.bo.IReceiptItem): void;
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
declare namespace sales {
    namespace bo {
        /** 送货地址 */
        class ShippingAddress extends ibas.BOSimple<ShippingAddress> implements IShippingAddress {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-顺序 */
            static PROPERTY_ORDER_NAME: string;
            /** 获取-顺序 */
            get order(): number;
            /** 设置-顺序 */
            set order(value: number);
            /** 映射的属性名称-送货状态 */
            static PROPERTY_SHIPPINGSTATUS_NAME: string;
            /** 获取-送货状态 */
            get shippingStatus(): emShippingStatus;
            /** 设置-送货状态 */
            set shippingStatus(value: emShippingStatus);
            /** 映射的属性名称-收货人 */
            static PROPERTY_CONSIGNEE_NAME: string;
            /** 获取-收货人 */
            get consignee(): string;
            /** 设置-收货人 */
            set consignee(value: string);
            /** 映射的属性名称-街道 */
            static PROPERTY_STREET_NAME: string;
            /** 获取-街道 */
            get street(): string;
            /** 设置-街道 */
            set street(value: string);
            /** 映射的属性名称-县/区 */
            static PROPERTY_DISTRICT_NAME: string;
            /** 获取-县/区 */
            get district(): string;
            /** 设置-县/区 */
            set district(value: string);
            /** 映射的属性名称-市 */
            static PROPERTY_CITY_NAME: string;
            /** 获取-市 */
            get city(): string;
            /** 设置-市 */
            set city(value: string);
            /** 映射的属性名称-省 */
            static PROPERTY_PROVINCE_NAME: string;
            /** 获取-省 */
            get province(): string;
            /** 设置-省 */
            set province(value: string);
            /** 映射的属性名称-国 */
            static PROPERTY_COUNTRY_NAME: string;
            /** 获取-国 */
            get country(): string;
            /** 设置-国 */
            set country(value: string);
            /** 映射的属性名称-邮编 */
            static PROPERTY_ZIPCODE_NAME: string;
            /** 获取-邮编 */
            get zipCode(): string;
            /** 设置-邮编 */
            set zipCode(value: string);
            /** 映射的属性名称-联系电话 */
            static PROPERTY_MOBILEPHONE_NAME: string;
            /** 获取-联系电话 */
            get mobilePhone(): string;
            /** 设置-联系电话 */
            set mobilePhone(value: string);
            /** 映射的属性名称-电话  */
            static PROPERTY_TELEPHONE_NAME: string;
            /** 获取-电话  */
            get telephone(): string;
            /** 设置-电话  */
            set telephone(value: string);
            /** 映射的属性名称-备注 1 */
            static PROPERTY_REMARK1_NAME: string;
            /** 获取-备注 1 */
            get remark1(): string;
            /** 设置-备注 1 */
            set remark1(value: string);
            /** 映射的属性名称-备注 2 */
            static PROPERTY_REMARK2_NAME: string;
            /** 获取-备注 2 */
            get remark2(): string;
            /** 设置-备注 2 */
            set remark2(value: string);
            /** 映射的属性名称-费用 */
            static PROPERTY_EXPENSE_NAME: string;
            /** 获取-费用 */
            get expense(): number;
            /** 设置-费用 */
            set expense(value: number);
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
            /** 映射的属性名称-快递单号 */
            static PROPERTY_TRACKINGNUMBER_NAME: string;
            /** 获取-快递单号 */
            get trackingNumber(): string;
            /** 设置-快递单号 */
            set trackingNumber(value: string);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前费用 */
            static PROPERTY_PRETAXEXPENSE_NAME: string;
            /** 获取-税前费用 */
            get preTaxExpense(): number;
            /** 设置-税前费用 */
            set preTaxExpense(value: number);
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            get objectKey(): number;
            /** 设置-对象编号 */
            set objectKey(value: number);
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
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
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
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 送货地址 集合 */
        class ShippingAddresss extends ibas.BusinessObjects<ShippingAddress, ISalesQuote | ISalesOrder | ISalesDelivery | ISalesReturn | ISalesInvoice | ISalesCreditNote | ISalesReserveInvoice> implements IShippingAddresss {
            /** 创建并添加子项 */
            create(): ShippingAddress;
            /** 添加子项后 子项属性赋值 */
            protected afterAdd(item: ShippingAddress): void;
            /** 主表属性发生变化后 子项属性赋值  */
            protected onParentPropertyChanged(name: string): void;
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
declare namespace sales {
    namespace bo {
        /** 一揽子协议 */
        class BlanketAgreement extends ibas.BODocument<BlanketAgreement> implements IBlanketAgreement {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
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
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            get description(): string;
            /** 设置-描述 */
            set description(value: string);
            /** 映射的属性名称-开始日期 */
            static PROPERTY_STARTDATE_NAME: string;
            /** 获取-开始日期 */
            get startDate(): Date;
            /** 设置-开始日期 */
            set startDate(value: Date);
            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string;
            /** 获取-结束日期 */
            get endDate(): Date;
            /** 设置-结束日期 */
            set endDate(value: Date);
            /** 映射的属性名称-签署日期 */
            static PROPERTY_SIGNDATE_NAME: string;
            /** 获取-签署日期 */
            get signDate(): Date;
            /** 设置-签署日期 */
            set signDate(value: Date);
            /** 映射的属性名称-终止日期 */
            static PROPERTY_TERMINATIONDATE_NAME: string;
            /** 获取-终止日期 */
            get terminationDate(): Date;
            /** 设置-终止日期 */
            set terminationDate(value: Date);
            /** 映射的属性名称-协议方法 */
            static PROPERTY_AGREEMENTMETHOD_NAME: string;
            /** 获取-协议方法 */
            get agreementMethod(): emAgreementMethod;
            /** 设置-协议方法 */
            set agreementMethod(value: emAgreementMethod);
            /** 映射的属性名称-协议类型 */
            static PROPERTY_AGREEMENTTYPE_NAME: string;
            /** 获取-协议类型 */
            get agreementType(): emAgreementType;
            /** 设置-协议类型 */
            set agreementType(value: emAgreementType);
            /** 映射的属性名称-结算概率 */
            static PROPERTY_SETTLEMENTPROBABILITY_NAME: string;
            /** 获取-结算概率 */
            get settlementProbability(): number;
            /** 设置-结算概率 */
            set settlementProbability(value: number);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-一揽子协议-项目集合 */
            static PROPERTY_BLANKETAGREEMENTITEMS_NAME: string;
            /** 获取-一揽子协议-项目集合 */
            get blanketAgreementItems(): BlanketAgreementItems;
            /** 设置-一揽子协议-项目集合 */
            set blanketAgreementItems(value: BlanketAgreementItems);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
        }
        /** 一揽子协议-项目 集合 */
        class BlanketAgreementItems extends ibas.BusinessObjects<BlanketAgreementItem, BlanketAgreement> implements IBlanketAgreementItems {
            /** 创建并添加子项 */
            create(): BlanketAgreementItem;
        }
        /** 一揽子协议-项目 */
        class BlanketAgreementItem extends ibas.BODocumentLine<BlanketAgreementItem> implements IBlanketAgreementItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-单位 */
            get uom(): string;
            /** 设置-单位 */
            set uom(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
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
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
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
declare namespace sales {
    namespace bo {
        /** 预收款申请 */
        class DownPaymentRequest extends ibas.BODocument<DownPaymentRequest> implements IDownPaymentRequest {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-预付比例 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-预付比例 */
            get discount(): number;
            /** 设置-预付比例 */
            set discount(value: number);
            /** 映射的属性名称-比例后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-比例后总计 */
            get discountTotal(): number;
            /** 设置-比例后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同/协议 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同/协议 */
            get agreements(): string;
            /** 设置-合同/协议 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-预收款申请-行集合 */
            static PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME: string;
            /** 获取-预收款申请-行集合 */
            get downPaymentRequestItems(): DownPaymentRequestItems;
            /** 设置-预收款申请-行集合 */
            set downPaymentRequestItems(value: DownPaymentRequestItems);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 预收款申请-行 集合 */
        class DownPaymentRequestItems extends ibas.BusinessObjects<DownPaymentRequestItem, DownPaymentRequest> implements IDownPaymentRequestItems {
            /** 创建并添加子项 */
            create(): DownPaymentRequestItem;
            protected afterAdd(item: DownPaymentRequestItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 预收款申请-行 */
        class DownPaymentRequestItem extends ibas.BODocumentLine<DownPaymentRequestItem> implements IDownPaymentRequestItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
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
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            get itemDescription(): string;
            /** 设置-物料/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-单位 */
            get uom(): string;
            /** 设置-单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同/协议 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同/协议 */
            get agreements(): string;
            /** 设置-合同/协议 */
            set agreements(value: string);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
declare namespace sales {
    namespace bo {
        /** 销售预留发票 */
        class SalesReserveInvoice extends ibas.BODocument<SalesReserveInvoice> implements ISalesReserveInvoice, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
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
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款 */
            get paymentCode(): string;
            /** 设置-付款条款 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-销售预留发票-行集合 */
            static PROPERTY_SALESRESERVEINVOICEITEMS_NAME: string;
            /** 获取-销售预留发票-行集合 */
            get salesReserveInvoiceItems(): SalesReserveInvoiceItems;
            /** 设置-销售预留发票-行集合 */
            set salesReserveInvoiceItems(value: SalesReserveInvoiceItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string;
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number;
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            baseDocument(document: ISalesOrder): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售预留发票-行 集合 */
        class SalesReserveInvoiceItems extends ibas.BusinessObjects<SalesReserveInvoiceItem, SalesReserveInvoice> implements ISalesReserveInvoiceItems {
            /** 创建并添加子项 */
            create(): SalesReserveInvoiceItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesReserveInvoiceItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesReserveInvoiceItem, name: string): void;
            protected afterAdd(item: SalesReserveInvoiceItem): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 销售预留发票-行 */
        class SalesReserveInvoiceItem extends ibas.BODocumentLine<SalesReserveInvoiceItem> implements ISalesReserveInvoiceItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
            set itemSign(value: string);
            /** 映射的属性名称-产品版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-产品版本 */
            get itemVersion(): string;
            /** 设置-产品版本 */
            set itemVersion(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string;
            /** 获取-单位换算率 */
            get uomRate(): number;
            /** 设置-单位换算率 */
            set uomRate(value: number);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
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
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行发票日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行发票日期 */
            get deliveryDate(): Date;
            /** 设置-行发票日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string;
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number;
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-成本中心1 */
            get distributionRule1(): string;
            /** 设置-成本中心1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-成本中心2 */
            get distributionRule2(): string;
            /** 设置-成本中心2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-成本中心3 */
            get distributionRule3(): string;
            /** 设置-成本中心3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-成本中心4 */
            get distributionRule4(): string;
            /** 设置-成本中心4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-成本中心5 */
            get distributionRule5(): string;
            /** 设置-成本中心5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string;
            /** 获取-合同 */
            get agreements(): string;
            /** 设置-合同 */
            set agreements(value: string);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
declare namespace sales {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
        }
        /** 模块业务对象工厂 */
        const boFactory: ibas.BOFactory;
        const CONFIG_ITEM_ONLY_SET_EXISTING_USER_FIELDS_VALUE: string;
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        function baseDocument(target: SalesOrder | SalesDelivery | SalesReturn | SalesCreditNote | SalesInvoice | DownPaymentRequest | SalesReserveInvoice, source: ISalesQuote | ISalesOrder | ISalesDelivery | ISalesReturn | ISalesInvoice | ISalesReserveInvoice): void;
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        function baseDocumentItem(target: ISalesOrderItem | ISalesDeliveryItem | ISalesReturnItem | ISalesCreditNoteItem | ISalesInvoiceItem | IDownPaymentRequestItem | ISalesReserveInvoiceItem, source: ISalesQuoteItem | ISalesOrderItem | ISalesDeliveryItem | ISalesReserveInvoiceItem): void;
        function baseProduct(target: ISalesQuoteItem | ISalesOrderItem | ISalesDeliveryItem | ISalesReturnItem | ISalesInvoiceItem | ISalesCreditNoteItem | IDownPaymentRequestItem | ISalesReserveInvoiceItem, source: materials.bo.IProduct): void;
        function baseProductSuit(target: ISalesQuoteItems | ISalesOrderItems | ISalesDeliveryItems, source: bo.IProductSuitEx): ISalesQuoteItem[] | ISalesOrderItem[] | ISalesDeliveryItem[];
        /** 业务规则-推导税前税后价格 */
        class BusinessRuleDeductionTaxPrice extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param taxRate  属性-税率
             * @param preTax   属性-税前
             * @param afterTax 属性-税后
             */
            constructor(taxRate: string, preTax: string, afterTax: string);
            /** 税率 */
            taxRate: string;
            /** 税前价格 */
            preTax: string;
            /** 税后价格 */
            afterTax: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导税总计 */
        class BusinessRuleDeductionTaxTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param tax 属性-税总计
             * @param total   属性-税前总计
             * @param taxRate  属性-税率
             */
            constructor(tax: string, total: string, taxRate: string);
            /** 税总计 */
            tax: string;
            /** 税前总计 */
            total: string;
            /** 税率 */
            taxRate: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导折扣及总计 */
        class BusinessRuleDeductionDiscountTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param total 属性-折扣后总计
             * @param preTotal   属性-折扣前总计
             * @param discount  属性-折扣
             */
            constructor(total: string, preTotal: string, discount: string);
            /** 折扣后总计 */
            total: string;
            /** 折扣前总计 */
            preTotal: string;
            /** 折扣 */
            discount: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导单据总计 */
        class BusinessRuleDeductionDocumentTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param docTotal 属性-单据总计
             * @param disTotal   属性-折扣总计
             * @param shipTotal  属性-运费总计
             */
            constructor(docTotal: string, disTotal: string, shipTotal?: string);
            /** 单据总计 */
            docTotal: string;
            /** 折扣总计 */
            disTotal: string;
            /** 运费总计 */
            shipTotal: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导 价格 * 数量 = 总计 */
        class BusinessRuleDeductionPriceQtyTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param total 属性-总计
             * @param price  属性-价格
             * @param quantity   属性-数量
             */
            constructor(total: string, price: string, quantity: string);
            /** 价格 */
            price: string;
            /** 数量 */
            quantity: string;
            /** 总计 */
            total: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导折扣 */
        class BusinessRuleDeductionDiscount extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param discount  属性-折扣
             * @param preDiscount   属性-折扣前
             * @param afterDiscount 属性-折扣后
             */
            constructor(discount: string, preDiscount: string, afterDiscount: string);
            /** 折扣 */
            discount: string;
            /** 折扣前价格 */
            preDiscount: string;
            /** 折扣后价格 */
            afterDiscount: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导含税价格，税总计及总计 */
        class BusinessRuleDeductionPriceTaxTotal extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param total 属性-总计
             * @param price  属性-价格
             * @param quantity   属性-数量
             * @param taxRate   属性-税率
             * @param taxTotal   属性-税总计
             * @param preTotal   属性-税前总计
             */
            constructor(total: string, price: string, quantity: string, taxRate: string, taxTotal: string, preTotal: string);
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
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-计算库存数量 */
        class BusinessRuleCalculateInventoryQuantity extends materials.bo.BusinessRuleCalculateInventoryQuantity {
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
declare namespace sales {
    namespace bo {
        /** 业务对象仓库 */
        class BORepositorySales extends ibas.BORepositoryApplication implements IBORepositorySales {
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
             * 查询 产品套装
             * @param fetcher 查询者
             */
            fetchProductSuit(fetcher: ibas.IFetchCaller<bo.ProductSuit>): void;
            /**
             * 保存 产品套装
             * @param saver 保存者
             */
            saveProductSuit(saver: ibas.ISaveCaller<bo.ProductSuit>): void;
            /**
             * 查询 销售交货
             * @param fetcher 查询者
             */
            fetchSalesDelivery(fetcher: ibas.IFetchCaller<bo.SalesDelivery>): void;
            /**
             * 保存 销售交货
             * @param saver 保存者
             */
            saveSalesDelivery(saver: ibas.ISaveCaller<bo.SalesDelivery>): void;
            /**
             * 查询 销售订单
             * @param fetcher 查询者
             */
            fetchSalesOrder(fetcher: ibas.IFetchCaller<bo.SalesOrder>): void;
            /**
             * 保存 销售订单
             * @param saver 保存者
             */
            saveSalesOrder(saver: ibas.ISaveCaller<bo.SalesOrder>): void;
            /**
             * 查询 销售退货
             * @param fetcher 查询者
             */
            fetchSalesReturn(fetcher: ibas.IFetchCaller<bo.SalesReturn>): void;
            /**
             * 保存 销售退货
             * @param saver 保存者
             */
            saveSalesReturn(saver: ibas.ISaveCaller<bo.SalesReturn>): void;
            /**
             * 查询 销售报价
             * @param fetcher 查询者
             */
            fetchSalesQuote(fetcher: ibas.IFetchCaller<bo.SalesQuote>): void;
            /**
             * 保存 销售报价
             * @param saver 保存者
             */
            saveSalesQuote(saver: ibas.ISaveCaller<bo.SalesQuote>): void;
            /**
             * 查询 产品套装并扩展产品数据
             * @param fetcher 查询者
             */
            fetchProductSuitEx(fetcher: ibas.IFetchCaller<bo.IProductSuitEx>): void;
            /**
             * 查询 销售贷项
             * @param fetcher 查询者
             */
            fetchSalesCreditNote(fetcher: ibas.IFetchCaller<bo.SalesCreditNote>): void;
            /**
             * 保存 销售贷项
             * @param saver 保存者
             */
            saveSalesCreditNote(saver: ibas.ISaveCaller<bo.SalesCreditNote>): void;
            /**
             * 查询 销售发票
             * @param fetcher 查询者
             */
            fetchSalesInvoice(fetcher: ibas.IFetchCaller<bo.SalesInvoice>): void;
            /**
             * 保存 销售发票
             * @param saver 保存者
             */
            saveSalesInvoice(saver: ibas.ISaveCaller<bo.SalesInvoice>): void;
            /**
             * 查询 一揽子协议
             * @param fetcher 查询者
             */
            fetchBlanketAgreement(fetcher: ibas.IFetchCaller<bo.BlanketAgreement>): void;
            /**
             * 保存 一揽子协议
             * @param saver 保存者
             */
            saveBlanketAgreement(saver: ibas.ISaveCaller<bo.BlanketAgreement>): void;
            /**
             * 查询 预付款申请
             * @param fetcher 查询者
             */
            fetchDownPaymentRequest(fetcher: ibas.IFetchCaller<bo.DownPaymentRequest>): void;
            /**
             * 保存 预付款申请
             * @param saver 保存者
             */
            saveDownPaymentRequest(saver: ibas.ISaveCaller<bo.DownPaymentRequest>): void;
            /**
             * 查询 销售预留发票
             * @param fetcher 查询者
             */
            fetchSalesReserveInvoice(fetcher: ibas.IFetchCaller<bo.SalesReserveInvoice>): void;
            /**
             * 保存 销售预留发票
             * @param saver 保存者
             */
            saveSalesReserveInvoice(saver: ibas.ISaveCaller<bo.SalesReserveInvoice>): void;
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
declare namespace sales {
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
declare namespace sales {
    namespace app {
        /** 选择应用-产品套装 */
        class ProductSuitChooseApp extends ibas.BOChooseService<IProductSuitChooseView, bo.ProductSuit> {
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
        /** 视图-产品套装 */
        interface IProductSuitChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.ProductSuit[]): void;
        }
        /** 产品套装选择服务映射 */
        class ProductSuitChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.ProductSuit>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-产品套装 */
        class ProductSuitEditApp extends ibas.BOEditApplication<IProductSuitEditView, bo.ProductSuit> {
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
            run(data: bo.ProductSuit): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加产品套装-项目事件 */
            private addProductSuitItem;
            /** 删除产品套装-项目事件 */
            private removeProductSuitItem;
            private chooseProductSuitItemMaterial;
            private chooseProductSuitMaterial;
        }
        /** 视图-产品套装 */
        interface IProductSuitEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showProductSuit(data: bo.ProductSuit): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加产品套装-项目事件 */
            addProductSuitItemEvent: Function;
            /** 删除产品套装-项目事件 */
            removeProductSuitItemEvent: Function;
            /** 显示数据 */
            showProductSuitItems(datas: bo.ProductSuitItem[]): void;
            /** 选择物料主数据事件 */
            chooseProductSuitMaterialEvent: Function;
            /** 选择物料主数据事件 */
            chooseProductSuitItemMaterialEvent: Function;
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
declare namespace sales {
    namespace app {
        class ProductSuitFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-产品套装 */
        class ProductSuitListApp extends ibas.BOListApplication<IProductSuitListView, bo.ProductSuit> {
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
            protected viewData(data: bo.ProductSuit): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.ProductSuit): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.ProductSuit | bo.ProductSuit[]): void;
        }
        /** 视图-产品套装 */
        interface IProductSuitListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.ProductSuit[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-产品套装 */
        class ProductSuitViewApp extends ibas.BOViewService<IProductSuitViewView, bo.ProductSuit> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.ProductSuit): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-产品套装 */
        interface IProductSuitViewView extends ibas.IBOViewView {
        }
        /** 产品套装连接服务映射 */
        class ProductSuitLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售交货 */
        class SalesDeliveryChooseApp extends ibas.BOChooseService<ISalesDeliveryChooseView, bo.SalesDelivery> {
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
        /** 视图-销售交货 */
        interface ISalesDeliveryChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesDelivery[]): void;
        }
        /** 销售交货选择服务映射 */
        class SalesDeliveryChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesDelivery>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售交货 */
        class SalesDeliveryEditApp extends ibas.BOEditService<ISalesDeliveryEditView, bo.SalesDelivery> {
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
            run(data: bo.SalesDelivery): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售交货客户事件 */
            private chooseSalesDeliveryCustomer;
            /** 选择销售交货价格清单事件 */
            private chooseSalesDeliveryPriceList;
            /** 更改行价格 */
            private changeSalesDeliveryItemPrice;
            /** 选择销售交货行物料事件 */
            private chooseSalesDeliveryItemMaterial;
            /** 选择销售交货行仓库事件 */
            private chooseSalesDeliveryItemWarehouse;
            /** 添加销售交货-行事件 */
            private addSalesDeliveryItem;
            /** 删除销售交货-行事件 */
            private removeSalesDeliveryItem;
            /** 选择销售交货行批次事件 */
            private chooseSalesDeliveryLineMaterialBatch;
            /** 选择销售交货序列事件 */
            private chooseSalesDeliveryLineMaterialSerial;
            /** 选择销售交货-销售订单事件 */
            private chooseSalesDeliverySalesOrder;
            private receiptSalesDelivery;
            /** 选择联系人 */
            private chooseSalesDeliveryContactPerson;
            private editShippingAddresses;
            /** 转为销售退货 */
            protected turnToSalesReturn(): void;
            /** 转为销售发票 */
            protected turnToSalesInvoice(): void;
            /** 选择一揽子协议事件 */
            private chooseSalesDeliveryBlanketAgreement;
            private chooseSalesDeliveryItemUnit;
            private chooseSalesDeliveryItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseSalesDeliveryItemDistributionRule;
            /** 选择销售交货-销售预留发票事件 */
            private chooseSalesDeliverySalesReserveInvoice;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesDelivery(data: bo.SalesDelivery): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售交货-行事件 */
            addSalesDeliveryItemEvent: Function;
            /** 删除销售交货-行事件 */
            removeSalesDeliveryItemEvent: Function;
            /** 显示数据 */
            showSalesDeliveryItems(datas: bo.SalesDeliveryItem[]): void;
            /** 选择销售交货客户事件 */
            chooseSalesDeliveryCustomerEvent: Function;
            /** 选择销售交货联系人信息 */
            chooseSalesDeliveryContactPersonEvent: Function;
            /** 选择销售交货价格清单事件 */
            chooseSalesDeliveryPriceListEvent: Function;
            /** 选择销售交货物料事件 */
            chooseSalesDeliveryItemMaterialEvent: Function;
            /** 选择销售交货仓库事件 */
            chooseSalesDeliveryItemWarehouseEvent: Function;
            /** 选择销售交货单位事件 */
            chooseSalesDeliveryItemUnitEvent: Function;
            /** 选择销售交货单行物料批次事件 */
            chooseSalesDeliveryItemMaterialBatchEvent: Function;
            /** 选择销售交货行物料序列事件 */
            chooseSalesDeliveryItemMaterialSerialEvent: Function;
            /** 选择销售交货-行 物料版本 */
            chooseSalesDeliveryItemMaterialVersionEvent: Function;
            /** 选择销售交货-销售订单事件 */
            chooseSalesDeliverySalesOrderEvent: Function;
            /** 选择销售交货-销售预留发票事件 */
            chooseSalesDeliverySalesReserveInvoiceEvent: Function;
            /** 选择销售交货-一揽子协议事件 */
            chooseSalesDeliveryBlanketAgreementEvent: Function;
            /** 选择销售交货-行 成本中心事件 */
            chooseSalesDeliveryItemDistributionRuleEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 销售交货收款事件 */
            receiptSalesDeliveryEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为销售退货事件 */
            turnToSalesReturnEvent: Function;
            /** 转为销售发票事件 */
            turnToSalesInvoiceEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售交货编辑服务映射 */
        class SalesDeliveryEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesDelivery>>;
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
declare namespace sales {
    namespace app {
        class SalesDeliveryFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售交货 */
        class SalesDeliveryListApp extends ibas.BOListApplication<ISalesDeliveryListView, bo.SalesDelivery> {
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
            protected viewData(data: bo.SalesDelivery): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesDelivery): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesDelivery | bo.SalesDelivery[]): void;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesDelivery[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售交货 */
        class SalesDeliveryViewApp extends ibas.BOViewService<ISalesDeliveryViewView, bo.SalesDelivery> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesDelivery): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryViewView extends ibas.IBOViewView {
            showSalesDelivery(viewData: bo.SalesDelivery): void;
            showSalesDeliveryItems(salesDeliveryItem: bo.SalesDeliveryItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售交货连接服务映射 */
        class SalesDeliveryLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售订单 */
        class SalesOrderChooseApp extends ibas.BOChooseService<ISalesOrderChooseView, bo.SalesOrder> {
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
        /** 视图-销售订单 */
        interface ISalesOrderChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesOrder[]): void;
        }
        /** 销售订单选择服务映射 */
        class SalesOrderChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesOrder>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售订单 */
        class SalesOrderEditApp extends ibas.BOEditService<ISalesOrderEditView, bo.SalesOrder> {
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
            run(data: bo.SalesOrder): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售订单客户事件 */
            private chooseSalesOrderCustomer;
            /** 选择销售订单价格清单事件 */
            private chooseSalesOrderPriceList;
            /** 更改行价格 */
            private changeSalesOrderItemPrice;
            /** 选择销售订单物料事件 */
            private chooseSalesOrderItemMaterial;
            /** 添加销售订单-行事件 */
            private addSalesOrderItem;
            /** 删除销售订单-行事件 */
            private removeSalesOrderItem;
            /** 选择销售交货行仓库事件 */
            private chooseSalesOrderItemWarehouse;
            /** 选择销售交货行批次事件 */
            private chooseSalesOrderItemMaterialBatch;
            /** 选择销售交货序列事件 */
            private chooseSalesOrderItemMaterialSerial;
            /** 选择销售订单-销售报价事件 */
            private chooseSalesOrderSalesQuote;
            private receiptSalesOrder;
            /** 选择联系人 */
            private chooseSalesOrderContactPerson;
            private editShippingAddresses;
            private showSaleOrderItemExtra;
            /** 转为销售交货 */
            protected turnToSalesDelivery(): void;
            /** 转为销售退货 */
            protected turnToSalesReturn(): void;
            /** 转为销售发票 */
            protected turnToSalesInvoice(): void;
            /** 转为销售预留发票 */
            protected turnToSalesReserveInvoice(): void;
            /** 转为预付款申请 */
            protected turnToDownPaymentRequest(): void;
            /** 选择一揽子协议事件 */
            private chooseSalesOrderBlanketAgreement;
            /** 选择销售订单-行 单位 */
            private chooseSalesOrderItemUnit;
            private chooseSalesOrderItemMaterialVersion;
            /** 预留物料库存 */
            private reserveMaterialsInventory;
            private chooseCustomerAgreements;
            private chooseSalesOrderItemDistributionRule;
        }
        /** 视图-销售订单 */
        interface ISalesOrderEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesOrder(data: bo.SalesOrder): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售订单-行事件 */
            addSalesOrderItemEvent: Function;
            /** 删除销售订单-行事件 */
            removeSalesOrderItemEvent: Function;
            /** 显示数据 */
            showSalesOrderItems(datas: bo.SalesOrderItem[]): void;
            /** 选择销售订单客户事件 */
            chooseSalesOrderCustomerEvent: Function;
            /** 选择销售订单联系人信息 */
            chooseSalesOrderContactPersonEvent: Function;
            /** 选择销售订单价格清单事件 */
            chooseSalesOrderPriceListEvent: Function;
            /** 选择销售订单行物料事件 */
            chooseSalesOrderItemMaterialEvent: Function;
            /** 选择销售订单仓库事件 */
            chooseSalesOrderItemWarehouseEvent: Function;
            /** 选择销售订单-行 单位 */
            chooseSalesOrderItemUnitEvent: Function;
            /** 选择销售订单行物料序列事件 */
            chooseSalesOrderItemMaterialSerialEvent: Function;
            /** 选择销售订单行物料批次事件 */
            chooseSalesOrderItemMaterialBatchEvent: Function;
            /** 选择销售订单-行 物料版本 */
            chooseSalesOrderItemMaterialVersionEvent: Function;
            /** 选择销售订单-行 成本中心事件 */
            chooseSalesOrderItemDistributionRuleEvent: Function;
            /** 显示销售订单行额外信息事件 */
            showSalesOrderItemExtraEvent: Function;
            /** 选择销售订单-销售报价事件 */
            chooseSalesOrderSalesQuoteEvent: Function;
            /** 选择销售订单-一揽子协议事件 */
            chooseSalesOrderBlanketAgreementEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 销售订单收款事件 */
            receiptSalesOrderEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为销售交货事件 */
            turnToSalesDeliveryEvent: Function;
            /** 转为销售退货事件 */
            turnToSalesReturnEvent: Function;
            /** 转为销售发票事件 */
            turnToSalesInvoiceEvent: Function;
            /** 转为销售预留发票事件 */
            turnToSalesReserveInvoiceEvent: Function;
            /** 转为预付款申请事件 */
            turnToDownPaymentRequestEvent: Function;
            /** 预留物料库存 */
            reserveMaterialsInventoryEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售订单编辑服务映射 */
        class SalesOrderEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesOrder>>;
        }
        class MaterialOrderedReservationTargetSalesOrderService extends ibas.ServiceApplication<ibas.IView, materials.app.IMaterialOrderedReservationTarget> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected runService(contract: materials.app.IMaterialOrderedReservationTarget): void;
            protected viewShowed(): void;
        }
        class MaterialOrderedReservationTargetSalesOrderServiceMapping extends ibas.ServiceMapping {
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
declare namespace sales {
    namespace app {
        class SalesOrderFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售订单 */
        class SalesOrderListApp extends ibas.BOListApplication<ISalesOrderListView, bo.SalesOrder> {
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
            protected viewData(data: bo.SalesOrder): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesOrder): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesOrder | bo.SalesOrder[]): void;
            /** 预留物料库存 */
            private reserveMaterialsInventory;
        }
        /** 视图-销售订单 */
        interface ISalesOrderListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesOrder[]): void;
            /** 预留物料库存 */
            reserveMaterialsInventoryEvent: Function;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售订单 */
        class SalesOrderViewApp extends ibas.BOViewService<ISalesOrderViewView, bo.SalesOrder> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesOrder): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售订单 */
        interface ISalesOrderViewView extends ibas.IBOViewView {
            showSalesOrder(viewData: bo.SalesOrder): void;
            showSalesOrderItems(salesOrderItems: bo.SalesOrderItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售订单连接服务映射 */
        class SalesOrderLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售订单项目-额外 */
        class SalesOrderItemExtraApp extends ibas.Application<ISalesOrderItemExtraView> {
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
            run(): void;
            run(data: bo.SalesOrderItem, parent?: bo.SalesOrder): void;
            private editData;
            private dataParent;
            /** 添加销售订单-行事件 */
            private addSalesOrderItemExtra;
            /** 删除销售订单-行事件 */
            private removeSalesOrderItemExtra;
            private deleteSalesOrderItemExtra;
            private viewSalesOrderItemExtra;
        }
        /** 视图-销售订单项目-额外 */
        interface ISalesOrderItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.SalesOrderItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.SalesOrderItemExtra[]): void;
            /** 添加销售订单-行额外 事件 */
            addSalesOrderItemExtraEvent: Function;
            /** 移出销售订单-行额外 事件 */
            removeSalesOrderItemExtraEvent: Function;
            /** 删除销售订单-行额外 事件 */
            deleteSalesOrderItemExtraEvent: Function;
            /** 查看销售订单-行额外 事件 */
            viewSalesOrderItemExtraEvent: Function;
        }
        /** 权限元素-销售订单扩展 */
        const ELEMENT_SALES_ORDER_EXTRA: ibas.IElement;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售退货 */
        class SalesReturnChooseApp extends ibas.BOChooseService<ISalesReturnChooseView, bo.SalesReturn> {
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
        /** 视图-销售退货 */
        interface ISalesReturnChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesReturn[]): void;
        }
        /** 销售退货选择服务映射 */
        class SalesReturnChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesReturn>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售退货 */
        class SalesReturnEditApp extends ibas.BOEditService<ISalesReturnEditView, bo.SalesReturn> {
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
            run(data: bo.SalesReturn): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售退货客户事件 */
            private chooseSalesReturnCustomer;
            /** 选择销售退货价格清单事件 */
            private chooseSalesReturnPriceList;
            /** 更改行价格 */
            private changeSalesReturnItemPrice;
            /** 选择销售退货物料事件 */
            private chooseSalesReturnItemMaterial;
            private chooseSalesReturnItemWarehouse;
            /** 添加销售退货-行事件 */
            private addSalesReturnItem;
            /** 删除销售退货-行事件 */
            private removeSalesReturnItem;
            private batches;
            /** 选择物料批次信息 */
            private createSalesReturnLineMaterialBatch;
            private serials;
            /** 选择物料序列信息 */
            private createSalesReturnLineMaterialSerial;
            /** 选择销售退货项目-销售订单事件 */
            private chooseSalesReturnSalesOrder;
            /** 选择销售退货项目-销售交货事件 */
            private chooseSalesReturnSalesDelivery;
            /** 选择联系人 */
            private chooseSalesReturnContactPerson;
            private editShippingAddresses;
            /** 转为销售贷项事件 */
            protected turnToSalesCreditNote(): void;
            private chooseSalesReturnItemUnit;
            private chooseSalesReturnItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseSalesReturnItemDistributionRule;
        }
        /** 视图-销售退货 */
        interface ISalesReturnEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesReturn(data: bo.SalesReturn): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售退货-行事件 */
            addSalesReturnItemEvent: Function;
            /** 删除销售退货-行事件 */
            removeSalesReturnItemEvent: Function;
            /** 显示数据 */
            showSalesReturnItems(datas: bo.SalesReturnItem[]): void;
            /** 选择销售退货客户事件 */
            chooseSalesReturnCustomerEvent: Function;
            /** 选择销售退货联系人信息 */
            chooseSalesReturnContactPersonEvent: Function;
            /** 选择销售退货价格清单事件 */
            chooseSalesReturnPriceListEvent: Function;
            /** 选择销售退货物料事件 */
            chooseSalesReturnItemMaterialEvent: Function;
            /** 选择销售退货仓库事件 */
            chooseSalesReturnItemWarehouseEvent: Function;
            /** 选择销售退货-行 单位 */
            chooseSalesReturnItemUnitEvent: Function;
            /** 选择销售退货单行物料批次事件 */
            chooseSalesReturnItemMaterialBatchEvent: Function;
            /** 选择销售退货行物料序列事件 */
            chooseSalesReturnItemMaterialSerialEvent: Function;
            /** 选择销售退货-行 物料版本 */
            chooseSalesReturnItemMaterialVersionEvent: Function;
            /** 选择销售退货-行 成本中心事件 */
            chooseSalesReturnItemDistributionRuleEvent: Function;
            /** 选择销售退货项目-销售订单事件 */
            chooseSalesReturnSalesOrderEvent: Function;
            /** 选择销售退货项目-销售交货事件 */
            chooseSalesReturnSalesDeliveryEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为销售贷项事件 */
            turnToSalesCreditNoteEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 销售退货编辑服务映射 */
        class SalesReturnEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesReturn>>;
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
declare namespace sales {
    namespace app {
        class SalesReturnFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售退货 */
        class SalesReturnListApp extends ibas.BOListApplication<ISalesReturnListView, bo.SalesReturn> {
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
            protected viewData(data: bo.SalesReturn): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesReturn): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesReturn | bo.SalesReturn[]): void;
        }
        /** 视图-销售退货 */
        interface ISalesReturnListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesReturn[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售退货 */
        class SalesReturnViewApp extends ibas.BOViewService<ISalesReturnViewView, bo.SalesReturn> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesReturn): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售退货 */
        interface ISalesReturnViewView extends ibas.IBOViewView {
            showSalesReturn(viewData: bo.SalesReturn): void;
            showSalesReturnItems(salesOrderItems: bo.SalesReturnItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售退货连接服务映射 */
        class SalesReturnLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售报价 */
        class SalesQuoteChooseApp extends ibas.BOChooseService<ISalesQuoteChooseView, bo.SalesQuote> {
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
        /** 视图-销售报价 */
        interface ISalesQuoteChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesQuote[]): void;
        }
        /** 销售报价选择服务映射 */
        class SalesQuoteChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesQuote>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售报价 */
        class SalesQuoteEditApp extends ibas.BOEditService<ISalesQuoteEditView, bo.SalesQuote> {
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
            run(data: bo.SalesQuote): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售报价客户事件 */
            private chooseSalesQuoteCustomer;
            /** 选择销售报价价格清单事件 */
            private chooseSalesQuotePriceList;
            /** 更改行价格 */
            private changeSalesQuoteItemPrice;
            /** 选择销售报价物料事件 */
            private chooseSalesQuoteItemMaterial;
            /** 添加销售报价-行事件 */
            private addSalesQuoteItem;
            /** 删除销售报价-行事件 */
            private removeSalesQuoteItem;
            /** 选择销售交货行仓库事件 */
            private chooseSalesQuoteItemWarehouse;
            /** 选择联系人 */
            private chooseSalesQuoteContactPerson;
            private showSalesQuoteItemExtra;
            /** 转为销售订单 */
            protected turnToSalesOrder(salesOrder?: bo.SalesOrder): void;
            /** 选择一揽子协议事件 */
            private chooseSalesQuoteBlanketAgreement;
            private chooseSalesQuoteItemUnit;
            private chooseSalesQuoteItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseSalesQuoteItemDistributionRule;
            /** 预留物料库存 */
            private reserveMaterialsInventory;
        }
        /** 视图-销售报价 */
        interface ISalesQuoteEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesQuote(data: bo.SalesQuote): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售报价-行事件 */
            addSalesQuoteItemEvent: Function;
            /** 删除销售报价-行事件 */
            removeSalesQuoteItemEvent: Function;
            /** 显示数据 */
            showSalesQuoteItems(datas: bo.SalesQuoteItem[]): void;
            /** 选择销售报价客户事件 */
            chooseSalesQuoteCustomerEvent: Function;
            /** 选择销售报价联系人信息 */
            chooseSalesQuoteContactPersonEvent: Function;
            /** 选择销售报价价格清单事件 */
            chooseSalesQuotePriceListEvent: Function;
            /** 选择销售报价行物料事件 */
            chooseSalesQuoteItemMaterialEvent: Function;
            /** 选择销售报价-行 物料版本 */
            chooseSalesQuoteItemMaterialVersionEvent: Function;
            /** 选择销售报价一揽子协议事件 */
            chooseSalesQuoteBlanketAgreementEvent: Function;
            /** 选择销售报价-行  成本中心事件 */
            chooseSalesOrderItemDistributionRuleEvent: Function;
            /** 选择销售报价仓库事件 */
            chooseSalesQuoteItemWarehouseEvent: Function;
            /** 选择销售报价单位事件 */
            chooseSalesQuoteItemUnitEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 显示销售报价额外信息事件 */
            showSalesQuoteItemExtraEvent: Function;
            /** 转为销售订单事件 */
            turnToSalesOrderEvent: Function;
            /** 预留物料库存 */
            reserveMaterialsInventoryEvent: Function;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售报价编辑服务映射 */
        class SalesQuoteEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesQuote>>;
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
declare namespace sales {
    namespace app {
        class SalesQuoteFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售报价 */
        class SalesQuoteListApp extends ibas.BOListApplication<ISalesQuoteListView, bo.SalesQuote> {
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
            protected viewData(data: bo.SalesQuote): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesQuote): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesQuote | bo.SalesQuote[]): void;
            /** 预留物料库存 */
            private reserveMaterialsInventory;
            private changeDocumentStatus;
        }
        /** 视图-销售报价 */
        interface ISalesQuoteListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesQuote[]): void;
            /** 预留物料库存 */
            reserveMaterialsInventoryEvent: Function;
            /** 改变订单状态 */
            changeDocumentStatusEvent: Function;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售报价 */
        class SalesQuoteViewApp extends ibas.BOViewService<ISalesQuoteViewView, bo.SalesQuote> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesQuote): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售报价 */
        interface ISalesQuoteViewView extends ibas.IBOViewView {
            showSalesQuote(viewData: bo.SalesQuote): void;
            showSalesQuoteItems(salesQuoteItems: bo.SalesQuoteItem[]): void;
        }
        /** 销售报价连接服务映射 */
        class SalesQuoteLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售报价项目-额外 */
        class SalesQuoteItemExtraApp extends ibas.Application<ISalesQuoteItemExtraView> {
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
            run(): void;
            run(data: bo.SalesQuoteItem, parent?: bo.SalesQuote): void;
            private editData;
            private dataParent;
            /** 添加销售报价-行事件 */
            private addSalesQuoteItemExtra;
            /** 删除销售报价-行事件 */
            private removeSalesQuoteItemExtra;
            private deleteSalesQuoteItemExtra;
            private viewSalesQuoteItemExtra;
        }
        /** 视图-销售报价项目-额外 */
        interface ISalesQuoteItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.SalesQuoteItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.SalesQuoteItemExtra[]): void;
            /** 添加销售报价-行额外 事件 */
            addSalesQuoteItemExtraEvent: Function;
            /** 移出销售报价-行额外 事件 */
            removeSalesQuoteItemExtraEvent: Function;
            /** 删除销售报价-行额外 事件 */
            deleteSalesQuoteItemExtraEvent: Function;
            /** 查看销售报价-行额外 事件 */
            viewSalesQuoteItemExtraEvent: Function;
        }
        /** 权限元素-销售报价扩展 */
        const ELEMENT_SALES_QUOTE_EXTRA: ibas.IElement;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售发票 */
        class SalesInvoiceChooseApp extends ibas.BOChooseService<ISalesInvoiceChooseView, bo.SalesInvoice> {
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
        /** 视图-销售发票 */
        interface ISalesInvoiceChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesInvoice[]): void;
        }
        /** 销售发票选择服务映射 */
        class SalesInvoiceChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesInvoice>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售发票 */
        class SalesInvoiceEditApp extends ibas.BOEditService<ISalesInvoiceEditView, bo.SalesInvoice> {
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
            run(data: bo.SalesInvoice): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售发票客户事件 */
            private chooseSalesInvoiceCustomer;
            /** 选择销售发票价格清单事件 */
            private chooseSalesInvoicePriceList;
            /** 更改行价格 */
            private changeSalesInvoiceItemPrice;
            /** 选择销售发票行物料事件 */
            private chooseSalesInvoiceItemMaterial;
            /** 选择销售发票行仓库事件 */
            private chooseSalesInvoiceItemWarehouse;
            /** 添加销售发票-行事件 */
            private addSalesInvoiceItem;
            /** 删除销售发票-行事件 */
            private removeSalesInvoiceItem;
            /** 选择销售发票行批次事件 */
            private chooseSalesInvoiceLineMaterialBatch;
            /** 选择销售发票序列事件 */
            private chooseSalesInvoiceLineMaterialSerial;
            /** 选择销售发票-销售订单事件 */
            private chooseSalesInvoiceSalesOrder;
            /** 选择销售发票-销售交货事件 */
            private chooseSalesInvoiceSalesDelivery;
            private receiptSalesInvoice;
            /** 选择联系人 */
            private chooseSalesInvoiceContactPerson;
            private editShippingAddresses;
            protected turnToSalesCreditNote(): void;
            /** 选择一揽子协议事件 */
            private chooseSalesInvoiceBlanketAgreement;
            private chooseSalesInvoiceItemUnit;
            private chooseSalesInvoiceItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseSalesInvoiceItemDistributionRule;
            /** 添加销售发票-预收款事件 */
            addSalesInvoiceDownPayment(criteria?: ibas.ICriteria): void;
            /** 删除销售发票-预收款事件 */
            protected removeSalesInvoiceDownPayment(items: bo.SalesInvoiceDownPayment[]): void;
            /** 添加销售发票-预收款事件 */
            protected chooseSalesInvoiceDownPayment(): void;
        }
        /** 视图-销售发票 */
        interface ISalesInvoiceEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesInvoice(data: bo.SalesInvoice): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售发票-行事件 */
            addSalesInvoiceItemEvent: Function;
            /** 删除销售发票-行事件 */
            removeSalesInvoiceItemEvent: Function;
            /** 显示数据 */
            showSalesInvoiceItems(datas: bo.SalesInvoiceItem[]): void;
            /** 选择销售发票客户事件 */
            chooseSalesInvoiceCustomerEvent: Function;
            /** 选择销售发票联系人信息 */
            chooseSalesInvoiceContactPersonEvent: Function;
            /** 选择销售发票价格清单事件 */
            chooseSalesInvoicePriceListEvent: Function;
            /** 选择销售发票物料事件 */
            chooseSalesInvoiceItemMaterialEvent: Function;
            /** 选择销售发票仓库事件 */
            chooseSalesInvoiceItemWarehouseEvent: Function;
            /** 选择销售发票单位事件 */
            chooseSalesInvoiceItemUnitEvent: Function;
            /** 选择销售发票单行物料批次事件 */
            chooseSalesInvoiceItemMaterialBatchEvent: Function;
            /** 选择销售发票行物料序列事件 */
            chooseSalesInvoiceItemMaterialSerialEvent: Function;
            /** 选择销售发票-行 物料版本 */
            chooseSalesInvoiceItemMaterialVersionEvent: Function;
            /** 选择销售发票-销售订单事件 */
            chooseSalesInvoiceSalesOrderEvent: Function;
            /** 选择销售发票-销售交货事件 */
            chooseSalesInvoiceSalesDeliveryEvent: Function;
            /** 选择销售发票-一揽子协议事件 */
            chooseSalesInvoiceBlanketAgreementEvent: Function;
            /** 选择销售发票-行成本中心事件 */
            chooseSalesInvoiceItemDistributionRuleEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 销售发票收款事件 */
            receiptSalesInvoiceEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为销售交货事件 */
            turnToSalesCreditNoteEvent: Function;
            /** 添加销售发票-预收款事件 */
            addSalesInvoiceDownPaymentEvent: Function;
            /** 删除销售发票-预收款事件 */
            removeSalesInvoiceDownPaymentEvent: Function;
            /** 显示数据-销售发票-预收款 */
            showSalesInvoiceDownPayments(datas: bo.SalesInvoiceDownPayment[]): void;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售发票编辑服务映射 */
        class SalesInvoiceEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesInvoice>>;
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
declare namespace sales {
    namespace app {
        class SalesInvoiceFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售发票 */
        class SalesInvoiceListApp extends ibas.BOListApplication<ISalesInvoiceListView, bo.SalesInvoice> {
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
            protected viewData(data: bo.SalesInvoice): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesInvoice): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesInvoice | bo.SalesInvoice[]): void;
        }
        /** 视图-销售发票 */
        interface ISalesInvoiceListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesInvoice[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售发票 */
        class SalesInvoiceViewApp extends ibas.BOViewService<ISalesInvoiceViewView, bo.SalesInvoice> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesInvoice): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售发票 */
        interface ISalesInvoiceViewView extends ibas.IBOViewView {
            showSalesInvoice(viewData: bo.SalesInvoice): void;
            showSalesInvoiceItems(salesInvoiceItem: bo.SalesInvoiceItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售发票连接服务映射 */
        class SalesInvoiceLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售贷项 */
        class SalesCreditNoteChooseApp extends ibas.BOChooseService<ISalesCreditNoteChooseView, bo.SalesCreditNote> {
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
        /** 视图-销售贷项 */
        interface ISalesCreditNoteChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesCreditNote[]): void;
        }
        /** 销售贷项选择服务映射 */
        class SalesCreditNoteChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesCreditNote>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售贷项 */
        class SalesCreditNoteEditApp extends ibas.BOEditService<ISalesCreditNoteEditView, bo.SalesCreditNote> {
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
            run(data: bo.SalesCreditNote): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售贷项客户事件 */
            private chooseSalesCreditNoteCustomer;
            /** 选择销售贷项价格清单事件 */
            private chooseSalesCreditNotePriceList;
            /** 更改行价格 */
            private changeSalesCreditNoteItemPrice;
            /** 选择销售贷项行物料事件 */
            private chooseSalesCreditNoteItemMaterial;
            /** 选择销售贷项行仓库事件 */
            private chooseSalesCreditNoteItemWarehouse;
            /** 添加销售贷项-行事件 */
            private addSalesCreditNoteItem;
            /** 删除销售贷项-行事件 */
            private removeSalesCreditNoteItem;
            /** 选择销售贷项行批次事件 */
            private chooseSalesCreditNoteLineMaterialBatch;
            /** 选择销售贷项序列事件 */
            private chooseSalesCreditNoteLineMaterialSerial;
            /** 选择销售贷项-销售退货事件 */
            private chooseSalesCreditNoteSalesReturn;
            /** 选择销售贷项-销售发票事件 */
            private chooseSalesCreditNoteSalesInvoice;
            /** 选择联系人 */
            private chooseSalesCreditNoteContactPerson;
            private editShippingAddresses;
            private chooseSalesCreditNoteItemUnit;
            private chooseSalesCreditNoteItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseSalesCreditNoteItemDistributionRule;
        }
        /** 视图-销售贷项 */
        interface ISalesCreditNoteEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesCreditNote(data: bo.SalesCreditNote): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售贷项-行事件 */
            addSalesCreditNoteItemEvent: Function;
            /** 删除销售贷项-行事件 */
            removeSalesCreditNoteItemEvent: Function;
            /** 显示数据 */
            showSalesCreditNoteItems(datas: bo.SalesCreditNoteItem[]): void;
            /** 选择销售贷项客户事件 */
            chooseSalesCreditNoteCustomerEvent: Function;
            /** 选择销售贷项联系人信息 */
            chooseSalesCreditNoteContactPersonEvent: Function;
            /** 选择销售贷项价格清单事件 */
            chooseSalesCreditNotePriceListEvent: Function;
            /** 选择销售贷项物料事件 */
            chooseSalesCreditNoteItemMaterialEvent: Function;
            /** 选择销售贷项仓库事件 */
            chooseSalesCreditNoteItemWarehouseEvent: Function;
            /** 选择销售贷项-行 单位 */
            chooseSalesCreditNoteItemUnitEvent: Function;
            /** 选择销售贷项单行物料批次事件 */
            chooseSalesCreditNoteItemMaterialBatchEvent: Function;
            /** 选择销售贷项行物料序列事件 */
            chooseSalesCreditNoteItemMaterialSerialEvent: Function;
            /** 选择销售贷项-行 物料版本 */
            chooseSalesCreditNoteItemMaterialVersionEvent: Function;
            /** 选择销售贷项-销售退货事件 */
            chooseSalesCreditNoteSalesReturnEvent: Function;
            /** 选择销售贷项-销售发票事件 */
            chooseSalesCreditNoteSalesInvoiceEvent: Function;
            /** 选择销售贷项-行 成本中心事件 */
            chooseSalesCreditNoteItemDistributionRuleEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 销售贷项编辑服务映射 */
        class SalesCreditNoteEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesCreditNote>>;
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
declare namespace sales {
    namespace app {
        class SalesCreditNoteFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售贷项 */
        class SalesCreditNoteListApp extends ibas.BOListApplication<ISalesCreditNoteListView, bo.SalesCreditNote> {
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
            protected viewData(data: bo.SalesCreditNote): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesCreditNote): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesCreditNote | bo.SalesCreditNote[]): void;
        }
        /** 视图-销售贷项 */
        interface ISalesCreditNoteListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesCreditNote[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售贷项 */
        class SalesCreditNoteViewApp extends ibas.BOViewService<ISalesCreditNoteViewView, bo.SalesCreditNote> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesCreditNote): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售贷项 */
        interface ISalesCreditNoteViewView extends ibas.IBOViewView {
            showSalesCreditNote(viewData: bo.SalesCreditNote): void;
            showSalesCreditNoteItems(salesCreditNoteItem: bo.SalesCreditNoteItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售贷项连接服务映射 */
        class SalesCreditNoteLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-送货地址 */
        class ShippingAddressesEditApp extends ibas.BOApplication<IShippingAddressesEditView> {
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
            run(): void;
            run(datas: bo.ShippingAddresss): void;
            /** 待编辑的数据 */
            protected editAddresses: bo.ShippingAddresss;
            /** 删除数据 */
            protected deleteData(data: bo.ShippingAddress): void;
            /** 新建数据 */
            protected createData(): void;
            /** 待编辑的数据 */
            protected editAddress: bo.ShippingAddress;
            /** 编辑数据 */
            protected editData(data: bo.ShippingAddress): void;
            /** 关闭视图 */
            close(): void;
        }
        /** 视图-送货地址 */
        interface IShippingAddressesEditView extends ibas.IBOView {
            /** 显示数据 */
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
            /** 编辑数据事件 */
            editDataEvent: Function;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件 */
            createDataEvent: Function;
            /** 显示数据 */
            showShippingAddress(data: bo.ShippingAddress): void;
        }
        /** 权限元素-单据地址 */
        const ELEMENT_SHIPPING_ADDRESSES: ibas.IElement;
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
declare namespace sales {
    namespace app {
        class BlanketAgreementFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-一揽子协议 */
        class BlanketAgreementListApp extends ibas.BOListApplication<IBlanketAgreementListView, bo.BlanketAgreement> {
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
            protected viewData(data: bo.BlanketAgreement): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.BlanketAgreement): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.BlanketAgreement | bo.BlanketAgreement[]): void;
        }
        /** 视图-一揽子协议 */
        interface IBlanketAgreementListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.BlanketAgreement[]): void;
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
declare namespace sales {
    namespace app {
        /** 选择应用-一揽子协议 */
        class BlanketAgreementChooseApp extends ibas.BOChooseService<IBlanketAgreementChooseView, bo.BlanketAgreement> {
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
        /** 视图-一揽子协议 */
        interface IBlanketAgreementChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.BlanketAgreement[]): void;
        }
        /** 一揽子协议选择服务映射 */
        class BlanketAgreementChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.BlanketAgreement>;
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
declare namespace sales {
    namespace app {
        /** 查看应用-一揽子协议 */
        class BlanketAgreementViewApp extends ibas.BOViewService<IBlanketAgreementViewView, bo.BlanketAgreement> {
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
            run(data: bo.BlanketAgreement): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-一揽子协议 */
        interface IBlanketAgreementViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showBlanketAgreement(data: bo.BlanketAgreement): void;
            /** 显示数据-一揽子协议-项目 */
            showBlanketAgreementItems(datas: bo.BlanketAgreementItem[]): void;
        }
        /** 一揽子协议连接服务映射 */
        class BlanketAgreementLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 编辑应用-一揽子协议 */
        class BlanketAgreementEditApp extends ibas.BOEditService<IBlanketAgreementEditView, bo.BlanketAgreement> {
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
            run(data: bo.BlanketAgreement): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加一揽子协议-项目事件 */
            protected addBlanketAgreementItem(): void;
            /** 删除一揽子协议-项目事件 */
            protected removeBlanketAgreementItem(items: bo.BlanketAgreementItem[]): void;
            private customer;
            /** 选择一揽子协议客户事件 */
            private chooseBlanketAgreementCustomer;
            /** 选择联系人 */
            private chooseBlanketAgreementContactPerson;
            /** 选择一揽子协议物料事件 */
            private chooseBlanketAgreementItemMaterial;
            private chooseBlanketAgreementItemUnit;
            private chooseCustomerAgreements;
        }
        /** 视图-一揽子协议 */
        interface IBlanketAgreementEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBlanketAgreement(data: bo.BlanketAgreement): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加一揽子协议-项目事件 */
            addBlanketAgreementItemEvent: Function;
            /** 删除一揽子协议-项目事件 */
            removeBlanketAgreementItemEvent: Function;
            /** 显示数据-一揽子协议-项目 */
            showBlanketAgreementItems(datas: bo.BlanketAgreementItem[]): void;
            /** 选择一揽子协议客户事件 */
            chooseBlanketAgreementCustomerEvent: Function;
            /** 选择一揽子协议联系人信息 */
            chooseBlanketAgreementContactPersonEvent: Function;
            /** 选择一揽子协议行物料事件 */
            chooseBlanketAgreementItemMaterialEvent: Function;
            /** 选择一揽子协议行单位事件 */
            chooseBlanketAgreementItemUnitEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 一揽子协议编辑服务映射 */
        class BlanketAgreementEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.BlanketAgreement>>;
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
declare namespace sales {
    namespace app {
        class DownPaymentRequestFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-预收款申请 */
        class DownPaymentRequestListApp extends ibas.BOListApplication<IDownPaymentRequestListView, bo.DownPaymentRequest> {
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
            protected viewData(data: bo.DownPaymentRequest): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.DownPaymentRequest): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.DownPaymentRequest | bo.DownPaymentRequest[]): void;
        }
        /** 视图-预收款申请 */
        interface IDownPaymentRequestListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.DownPaymentRequest[]): void;
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
declare namespace sales {
    namespace app {
        /** 选择应用-预收款申请 */
        class DownPaymentRequestChooseApp extends ibas.BOChooseService<IDownPaymentRequestChooseView, bo.DownPaymentRequest> {
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
        /** 视图-预收款申请 */
        interface IDownPaymentRequestChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.DownPaymentRequest[]): void;
        }
        /** 预收款申请选择服务映射 */
        class DownPaymentRequestChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.DownPaymentRequest>;
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
declare namespace sales {
    namespace app {
        /** 查看应用-预收款申请 */
        class DownPaymentRequestViewApp extends ibas.BOViewService<IDownPaymentRequestViewView, bo.DownPaymentRequest> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.DownPaymentRequest): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-预收款申请 */
        interface IDownPaymentRequestViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showDownPaymentRequest(data: bo.DownPaymentRequest): void;
            /** 显示数据-预收款申请-行 */
            showDownPaymentRequestItems(datas: bo.DownPaymentRequestItem[]): void;
        }
        /** 预收款申请连接服务映射 */
        class DownPaymentRequestLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-预收款申请 */
        class DownPaymentRequestEditApp extends ibas.BOEditService<IDownPaymentRequestEditView, bo.DownPaymentRequest> {
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
            run(data: bo.DownPaymentRequest): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择客户信息 */
            private chooseDownPaymentRequestCustomer;
            /** 选择物料主数据 */
            private chooseDownPaymentRequestItemMaterial;
            /** 预收款申请-行 选择仓库主数据 */
            private chooseDownPaymentRequestItemWarehouse;
            /** 添加预收款申请-行事件 */
            private addDownPaymentRequestItem;
            /** 删除预收款申请-行事件 */
            private removeDownPaymentRequestItem;
            /** 选择预收款申请-销售订单事件 */
            private chooseDownPaymentRequestSalesOrder;
            /** 选择联系人 */
            private chooseDownPaymentRequestContactPerson;
            /** 选择一揽子协议事件 */
            private chooseDownPaymentRequestBlanketAgreement;
            /** 选择预收款申请-销售交货事件 */
            private chooseDownPaymentRequestSalesDelivery;
            private chooseDownPaymentRequestItemUnit;
            private chooseDownPaymentRequestItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseDownPaymentRequestItemDistributionRule;
            /** 预收款申请收款 */
            protected receiptDownPaymentRequest(): void;
        }
        /** 视图-预收款申请 */
        interface IDownPaymentRequestEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showDownPaymentRequest(data: bo.DownPaymentRequest): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加预收款申请-行事件 */
            addDownPaymentRequestItemEvent: Function;
            /** 删除预收款申请-行事件 */
            removeDownPaymentRequestItemEvent: Function;
            /** 选择预收款申请客户信息 */
            chooseDownPaymentRequestCustomerEvent: Function;
            /** 选择预收款申请联系人信息 */
            chooseDownPaymentRequestContactPersonEvent: Function;
            /** 选择预收款申请-行物料主数据 */
            chooseDownPaymentRequestItemMaterialEvent: Function;
            /** 选择预收款申请-行 物料版本 */
            chooseDownPaymentRequestItemMaterialVersionEvent: Function;
            /** 选择预收款申请-行 仓库 */
            chooseDownPaymentRequestItemWarehouseEvent: Function;
            /** 选择预收款申请-行 单位 */
            chooseDownPaymentRequestItemUnitEvent: Function;
            /** 选择预收款申请-行 成本中心事件 */
            chooseDownPaymentRequestItemDistributionRuleEvent: Function;
            /** 显示数据 */
            showDownPaymentRequestItems(datas: bo.DownPaymentRequestItem[]): void;
            /** 选择预收款申请-销售订单事件 */
            chooseDownPaymentRequestSalesOrderEvent: Function;
            /** 选择预收款申请-一揽子协议事件 */
            chooseDownPaymentRequestBlanketAgreementEvent: Function;
            /** 选择预收款申请-销售交货事件 */
            chooseDownPaymentRequestSalesDeliveryEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 预收款申请收款事件 */
            receiptDownPaymentRequestEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 预收款申请编辑服务映射 */
        class DownPaymentRequestEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.DownPaymentRequest>>;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售预留发票 */
        class SalesReserveInvoiceChooseApp extends ibas.BOChooseService<ISalesReserveInvoiceChooseView, bo.SalesReserveInvoice> {
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
        /** 视图-销售预留发票 */
        interface ISalesReserveInvoiceChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesReserveInvoice[]): void;
        }
        /** 销售预留发票选择服务映射 */
        class SalesReserveInvoiceChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesReserveInvoice>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售预留发票 */
        class SalesReserveInvoiceEditApp extends ibas.BOEditService<ISalesReserveInvoiceEditView, bo.SalesReserveInvoice> {
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
            run(data: bo.SalesReserveInvoice): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            private customer;
            /** 选择销售预留发票客户事件 */
            private chooseSalesReserveInvoiceCustomer;
            /** 选择销售预留发票价格清单事件 */
            private chooseSalesReserveInvoicePriceList;
            /** 更改行价格 */
            private changeSalesReserveInvoiceItemPrice;
            /** 选择销售预留发票行物料事件 */
            private chooseSalesReserveInvoiceItemMaterial;
            /** 选择销售预留发票行仓库事件 */
            private chooseSalesReserveInvoiceItemWarehouse;
            /** 添加销售预留发票-行事件 */
            private addSalesReserveInvoiceItem;
            /** 删除销售预留发票-行事件 */
            private removeSalesReserveInvoiceItem;
            /** 选择销售预留发票行批次事件 */
            private chooseSalesReserveInvoiceLineMaterialBatch;
            /** 选择销售预留发票序列事件 */
            private chooseSalesReserveInvoiceLineMaterialSerial;
            /** 选择销售预留发票-销售订单事件 */
            private chooseSalesReserveInvoiceSalesOrder;
            private receiptSalesReserveInvoice;
            /** 选择联系人 */
            private chooseSalesReserveInvoiceContactPerson;
            private editShippingAddresses;
            protected turnToSalesCreditNote(): void;
            /** 转为销售交货 */
            protected turnToSalesDelivery(): void;
            /** 选择一揽子协议事件 */
            private chooseSalesReserveInvoiceBlanketAgreement;
            private chooseSalesReserveInvoiceItemUnit;
            private chooseSalesReserveInvoiceItemMaterialVersion;
            private chooseCustomerAgreements;
            private chooseSalesReserveInvoiceItemDistributionRule;
        }
        /** 视图-销售预留发票 */
        interface ISalesReserveInvoiceEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesReserveInvoice(data: bo.SalesReserveInvoice): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售预留发票-行事件 */
            addSalesReserveInvoiceItemEvent: Function;
            /** 删除销售预留发票-行事件 */
            removeSalesReserveInvoiceItemEvent: Function;
            /** 显示数据 */
            showSalesReserveInvoiceItems(datas: bo.SalesReserveInvoiceItem[]): void;
            /** 选择销售预留发票客户事件 */
            chooseSalesReserveInvoiceCustomerEvent: Function;
            /** 选择销售预留发票联系人信息 */
            chooseSalesReserveInvoiceContactPersonEvent: Function;
            /** 选择销售预留发票价格清单事件 */
            chooseSalesReserveInvoicePriceListEvent: Function;
            /** 选择销售预留发票物料事件 */
            chooseSalesReserveInvoiceItemMaterialEvent: Function;
            /** 选择销售预留发票仓库事件 */
            chooseSalesReserveInvoiceItemWarehouseEvent: Function;
            /** 选择销售预留发票单位事件 */
            chooseSalesReserveInvoiceItemUnitEvent: Function;
            /** 选择销售预留发票单行物料批次事件 */
            chooseSalesReserveInvoiceItemMaterialBatchEvent: Function;
            /** 选择销售预留发票行物料序列事件 */
            chooseSalesReserveInvoiceItemMaterialSerialEvent: Function;
            /** 选择销售预留发票-行 物料版本 */
            chooseSalesReserveInvoiceItemMaterialVersionEvent: Function;
            /** 选择销售预留发票-销售订单事件 */
            chooseSalesReserveInvoiceSalesOrderEvent: Function;
            /** 选择销售预留发票-一揽子协议事件 */
            chooseSalesReserveInvoiceBlanketAgreementEvent: Function;
            /** 选择销售预留发票-行成本中心事件 */
            chooseSalesReserveInvoiceItemDistributionRuleEvent: Function;
            /** 选择客户合同 */
            chooseCustomerAgreementsEvent: Function;
            /** 销售预留发票收款事件 */
            receiptSalesReserveInvoiceEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 转为销售交货事件 */
            turnToSalesCreditNoteEvent: Function;
            /** 转为销售交货事件 */
            turnToSalesDeliveryEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售预留发票编辑服务映射 */
        class SalesReserveInvoiceEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesReserveInvoice>>;
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
declare namespace sales {
    namespace app {
        class SalesReserveInvoiceFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售预留发票 */
        class SalesReserveInvoiceListApp extends ibas.BOListApplication<ISalesReserveInvoiceListView, bo.SalesReserveInvoice> {
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
            protected viewData(data: bo.SalesReserveInvoice): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesReserveInvoice): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesReserveInvoice | bo.SalesReserveInvoice[]): void;
        }
        /** 视图-销售预留发票 */
        interface ISalesReserveInvoiceListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesReserveInvoice[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售预留发票 */
        class SalesReserveInvoiceViewApp extends ibas.BOViewService<ISalesReserveInvoiceViewView, bo.SalesReserveInvoice> {
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
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.SalesReserveInvoice): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售预留发票 */
        interface ISalesReserveInvoiceViewView extends ibas.IBOViewView {
            showSalesReserveInvoice(viewData: bo.SalesReserveInvoice): void;
            showSalesReserveInvoiceItems(salesReserveInvoiceItem: bo.SalesReserveInvoiceItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售预留发票连接服务映射 */
        class SalesReserveInvoiceLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
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
declare namespace sales {
    namespace app {
        /** 单据付款-销售退货 */
        class SalesReturnPaymentService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentPaymentContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentPaymentContract): void;
        }
        /** 单据付款-销售退货 */
        class SalesReturnPaymentServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 单据付款-销售贷项 */
        class SalesCreditNotePaymentService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentPaymentContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentPaymentContract): void;
        }
        /** 单据付款-销售贷项 */
        class SalesCreditNotePaymentServiceMapping extends ibas.ServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 单据收款-销售订单 */
        class SalesOrderReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void;
        }
        /** 单据收款-销售订单 */
        class SalesOrderReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 单据收款-销售收货 */
        class SalesDeliveryReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void;
        }
        /** 单据收款-销售收货 */
        class SalesDeliveryReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 单据收款-销售发票 */
        class SalesInvoiceReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void;
        }
        /** 单据收款-销售发票 */
        class SalesInvoiceReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 单据收款-预收款申请 */
        class DownPaymentRequestReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void;
        }
        /** 单据收款-预收款申请 */
        class DownPaymentRequestReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 单据收款-销售预留发票 */
        class SalesReserveInvoiceReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, receiptpayment.app.IDocumentReceiptContract, receiptpayment.bo.IPaymentItem[]> {
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
            protected runService(contract: receiptpayment.app.IDocumentReceiptContract): void;
        }
        /** 单据收款-销售预留发票 */
        class SalesReserveInvoiceReceiptServiceMapping extends ibas.ServiceMapping {
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
declare namespace sales {
    namespace app {
        class SalesOrderPackingService extends ibas.ServiceApplication<ibas.IView, materials.app.IMaterialPackingTarget> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected runService(contract: materials.app.IMaterialPackingTarget): void;
            protected viewShowed(): void;
            protected toDeliveryOrder(pickLines: materials.bo.IPickListsLine[], onDelivered?: (targets: materials.bo.IPickListsLine[] | Error) => void): void;
            protected onPicked(selecteds: ibas.IList<bo.SalesOrder>, onPicked?: (targets: materials.app.IPickListsTarget[]) => void): void;
        }
        class SalesOrderPackingServiceMapping extends ibas.ServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 附件信息-文档附件 */
        const EXTRA_ATTACHMENT: string;
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
