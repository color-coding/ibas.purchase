/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace materials {
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
        const BO_REPOSITORY_MATERIALS: string;
        /** 业务对象编码-库存发货 */
        const BO_CODE_GOODSISSUE: string;
        /** 业务对象编码-库存收货 */
        const BO_CODE_GOODSRECEIPT: string;
        /** 业务对象编码-库存转储 */
        const BO_CODE_INVENTORYTRANSFER: string;
        /** 业务对象编码-物料 */
        const BO_CODE_MATERIAL: string;
        /** 业务对象编码-物料扩展 */
        const BO_CODE_PRODUCT: string;
        /** 业务对象编码-物料批次 */
        const BO_CODE_MATERIALBATCH: string;
        /** 业务对象编码-物料批次凭证 */
        const BO_CODE_MATERIALBATCHJOURNAL: string;
        /** 业务对象编码-物料序列 */
        const BO_CODE_MATERIALSERIAL: string;
        /** 业务对象编码-物料序列凭证 */
        const BO_CODE_MATERIALSERIALJOURNAL: string;
        /** 业务对象编码-物料组 */
        const BO_CODE_MATERIALGROUP: string;
        /** 业务对象编码-物料库存 */
        const BO_CODE_MATERIALINVENTORY: string;
        /** 业务对象编码-仓库日记账 */
        const BO_CODE_MATERIALJOURNAL: string;
        /** 业务对象编码-仓库 */
        const BO_CODE_WAREHOUSE: string;
        /** 业务对象编码-价格清单 */
        const BO_CODE_MATERIALPRICELIST: string;
        /** 业务对象编码-物料序列项目 */
        const BO_CODE_MATERIALSERIALITEM: string;
        /** 业务对象编码-物料批次项目 */
        const BO_CODE_MATERIALBATCHITEM: string;
        /** 业务对象编码-库存盘点 */
        const BO_CODE_INVENTORYCOUNTING: string;
        /** 业务对象编码-物料规格 */
        const BO_CODE_MATERIALSPECIFICATION: string;
        /** 业务对象编码-规格模板 */
        const BO_CODE_SPECIFICATION: string;
        /** 物料类型 */
        enum emItemType {
            /** 物料 */
            ITEM = 0,
            /** 服务 */
            SERVICES = 1
        }
        /** 预估类型 */
        enum emEstimateType {
            /**
             * 订购的
             */
            ORDERED = 0,
            /**
             * 承诺的
             */
            COMMITED = 1
        }
        /** 物料发货规则 */
        enum emMaterialIssueRules {
            /** 先进先出 */
            FIRST_IN_FIRST_OUT = 0,
            /** 先进后出 */
            FIRST_IN_LAST_OUT = 1,
            /** 编码排序 */
            ORDER_BY_CODE = 2
        }
        /** 库存调整 */
        enum emInventoryAdjustment {
            /** 盘盈 */
            OVER = 0,
            /** 盘亏 */
            SHORT = 1
        }
        /** 规格目标 */
        enum emSpecificationTarget {
            /**
             * 物料
             */
            MATERIAL = 0,
            /**
             * 物料组
             */
            MATERIAL_GROUP = 1
        }
        /** 规格分配 */
        enum emSpecificationAssigned {
            /**
             * 业务伙伴组
             */
            BUSINESS_PARTNER_GROUP = 0,
            /**
             * 客户
             */
            CUSTOMER = 1,
            /**
             * 供应商
             */
            SUPPLIER = 2
        }
    }
    namespace app {
        /** 服务额外结果 */
        interface IServiceExtraResult<T> extends ibas.IList<T> {
            /** 保存额外结果 */
            save(fnBack: (error?: Error) => void): void;
        }
        /** 额外数据-序列 */
        interface IExtraResultMaterialSerial {
            /** 物料编码 */
            readonly itemCode: string;
            /** 仓库编码 */
            readonly warehouse: string;
            /** 序列编号 */
            readonly serialCode: string;
            /** 供应商序号 */
            supplierSerial: string;
            /** 批次序号 */
            batchSerial: string;
            /** 过期日期 */
            expirationDate: Date;
            /** 生产日期 */
            manufacturingDate: Date;
            /** 物料规格 */
            specification: number;
            /** 准入日期 */
            admissionDate: Date;
            /** 保修开始日期 */
            warrantyStartDate: Date;
            /** 保修结束日期 */
            warrantyEndDate: Date;
            /** 位置 */
            location: string;
            /** 备注 */
            notes: string;
        }
        /** 服务额外结果-序列 */
        interface IServiceExtraSerials extends IServiceExtraResult<IExtraResultMaterialSerial> {
        }
        /** 额外数据-批次 */
        interface IExtraResultMaterialBatch {
            /** 物料编码 */
            readonly itemCode: string;
            /** 仓库编码 */
            readonly warehouse: string;
            /** 批次编号 */
            readonly batchCode: string;
            /** 供应商序号 */
            supplierSerial: string;
            /** 过期日期 */
            expirationDate: Date;
            /** 生产日期 */
            manufacturingDate: Date;
            /** 准入日期 */
            admissionDate: Date;
            /** 物料规格 */
            specification: number;
            /** 位置 */
            location: string;
            /** 备注 */
            notes: string;
        }
        /** 服务额外结果-批次 */
        interface IServiceExtraBatches extends IServiceExtraResult<IExtraResultMaterialBatch> {
        }
        /** 批次服务契约 */
        interface IMaterialBatchContract extends ibas.IServiceContract {
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 物料编码 */
            itemCode: string;
            /** 物料描述 */
            itemDescription: string;
            /** 仓库编码 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 物料批次 */
            materialBatches: bo.IMaterialBatchItems;
            /** 物料批次数据 */
            batches?: IExtraResultMaterialBatch[];
        }
        /** 序列服务契约 */
        interface IMaterialSerialContract extends ibas.IServiceContract {
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 物料编码 */
            itemCode: string;
            /** 物料描述 */
            itemDescription: string;
            /** 仓库编码 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 物料序列 */
            materialSerials: bo.IMaterialSerialItems;
            /** 物料序列数据 */
            serials?: IExtraResultMaterialSerial[];
        }
        /** 物料批次创建服务代理 */
        class MaterialBatchReceiptServiceProxy extends ibas.ServiceProxy<IMaterialBatchContract[]> {
        }
        /** 物料批次选择服务代理 */
        class MaterialBatchIssueServiceProxy extends ibas.ServiceProxy<IMaterialBatchContract[]> {
        }
        /** 物料批次列表服务代理 */
        class MaterialBatchListServiceProxy extends ibas.ServiceProxy<IMaterialBatchContract[]> {
        }
        /** 物料序列创建服务代理 */
        class MaterialSerialReceiptServiceProxy extends ibas.ServiceProxy<IMaterialSerialContract[]> {
        }
        /** 物料序列选择服务代理 */
        class MaterialSerialIssueServiceProxy extends ibas.ServiceProxy<IMaterialSerialContract[]> {
        }
        /** 物料序列列表服务代理 */
        class MaterialSerialListServiceProxy extends ibas.ServiceProxy<IMaterialSerialContract[]> {
        }
        /** 规格服务契约 */
        interface ISpecificationTreeContract extends ibas.IServiceContract {
            /** 目标：物料编码或物料规格 */
            target: string | bo.IMaterialSpecification;
            /** 目标：客户 */
            customer?: string;
            /** 目标：供应商 */
            supplier?: string;
            /** 目标：日期 */
            date?: Date;
            /** 名称 */
            name?: string;
            /** 项目 */
            project?: string;
            /** 备注 */
            remarks?: string;
        }
        /** 规格服务代理 */
        class SpecificationTreeServiceProxy extends ibas.ServiceProxy<ISpecificationTreeContract> {
        }
        /** 查询条件 */
        namespace conditions {
            namespace material {
                /** 查询条件字段-销售物料 */
                const CONDITION_ALIAS_SALES_ITEM: string;
                /** 查询条件字段-采购物料 */
                const CONDITION_ALIAS_PURCHASE_ITEM: string;
                /** 查询条件字段-库存物料 */
                const CONDITION_ALIAS_INVENTORY_ITEM: string;
                /** 查询条件字段-物料类型 */
                const CONDITION_ALIAS_ITEM_TYPE: string;
                /** 查询条件字段-虚拟物料 */
                const CONDITION_ALIAS_PHANTOM_ITEM: string;
                /** 默认查询条件 */
                function create(): ibas.IList<ibas.ICondition>;
            }
            namespace product {
                /** 查询条件字段-仓库（关系为或） */
                const CONDITION_ALIAS_WAREHOUSE: string;
                /** 查询条件字段-价格清单 */
                const CONDITION_ALIAS_PRICELIST: string;
                /** 查询条件字段-销售物料 */
                const CONDITION_ALIAS_SALES_ITEM: string;
                /** 查询条件字段-采购物料 */
                const CONDITION_ALIAS_PURCHASE_ITEM: string;
                /** 查询条件字段-库存物料 */
                const CONDITION_ALIAS_INVENTORY_ITEM: string;
                /** 查询条件字段-虚拟物料 */
                const CONDITION_ALIAS_PHANTOM_ITEM: string;
                /** 查询条件字段-物料类型 */
                const CONDITION_ALIAS_ITEM_TYPE: string;
                /** 默认查询条件 */
                function create(): ibas.IList<ibas.ICondition>;
            }
            namespace warehouse {
                /** 默认查询条件 */
                function create(): ibas.IList<ibas.ICondition>;
            }
            namespace materialpricelist {
                /** 默认查询条件 */
                function create(): ibas.ICriteria;
            }
            namespace materialprice {
                /** 查询条件字段-物料编码 */
                const CONDITION_ALIAS_ITEMCODE: string;
                /** 查询条件字段-物料名称 */
                const CONDITION_ALIAS_ITEMNAME: string;
                /** 查询条件字段-物料标记 */
                const CONDITION_ALIAS_ITEMSIGN: string;
                /** 查询条件字段-价格清单 */
                const CONDITION_ALIAS_PRICELIST: string;
            }
            namespace materialquantity {
                /** 查询条件字段-物料编码 */
                const CONDITION_ALIAS_ITEMCODE: string;
                /** 查询条件字段-物料名称 */
                const CONDITION_ALIAS_ITEMNAME: string;
                /** 查询条件字段-仓库（关系为或） */
                const CONDITION_ALIAS_WAREHOUSE: string;
            }
            namespace specificationtree {
                /** 查询条件字段-规格模板 */
                const CONDITION_ALIAS_TEMPLATE: string;
                /** 查询条件字段-物料 */
                const CONDITION_ALIAS_MATERIAL: string;
                /** 查询条件字段-日期 */
                const CONDITION_ALIAS_DATE: string;
                /** 查询条件字段-客户 */
                const CONDITION_ALIAS_CUSTOMER: string;
                /** 查询条件字段-供应商 */
                const CONDITION_ALIAS_SUPPLIER: string;
            }
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
declare namespace materials {
    namespace bo {
        /** 库存发货 */
        interface IGoodsIssue extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 备注 */
            remarks: string;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 库存发货-行集合 */
            goodsIssueLines: IGoodsIssueLines;
        }
        /** 库存发货-行 集合 */
        interface IGoodsIssueLines extends ibas.IBusinessObjects<IGoodsIssueLine> {
            /** 创建并添加子项 */
            create(): IGoodsIssueLine;
        }
        /** 库存发货-行 */
        interface IGoodsIssueLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 类型 */
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
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
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
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial): void;
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
declare namespace materials {
    namespace bo {
        /** 库存收货 */
        interface IGoodsReceipt extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 备注 */
            remarks: string;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 库存收货-行集合 */
            goodsReceiptLines: IGoodsReceiptLines;
        }
        /** 库存收货-行 集合 */
        interface IGoodsReceiptLines extends ibas.IBusinessObjects<IGoodsReceiptLine> {
            /** 创建并添加子项 */
            create(): IGoodsReceiptLine;
        }
        /** 库存收货-行 */
        interface IGoodsReceiptLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 类型 */
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
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
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
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial): void;
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
declare namespace materials {
    namespace bo {
        /** 库存转储 */
        interface IInventoryTransfer extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 备注 */
            remarks: string;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 从仓库 */
            fromWarehouse: string;
            /** 库存转储-行集合 */
            inventoryTransferLines: IInventoryTransferLines;
        }
        /** 库存转储-行 集合 */
        interface IInventoryTransferLines extends ibas.IBusinessObjects<IInventoryTransferLine> {
            /** 创建并添加子项 */
            create(): IInventoryTransferLine;
        }
        /** 库存转储-行 */
        interface IInventoryTransferLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 类型 */
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
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
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
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial): void;
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
declare namespace materials {
    namespace bo {
        /** 物料 */
        interface IMaterial extends ibas.IBOMasterData, ibas.IBOUserFields {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 标识 */
            sign: string;
            /** 物料组 */
            group: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 条形码 */
            barCode: string;
            /** 物料类型 */
            itemType: emItemType;
            /** 采购物料 */
            purchaseItem: ibas.emYesNo;
            /** 销售物料 */
            salesItem: ibas.emYesNo;
            /** 库存物料 */
            inventoryItem: ibas.emYesNo;
            /** 虚拟物料 */
            phantomItem: ibas.emYesNo;
            /** 固定资产 */
            fixedAsset: ibas.emYesNo;
            /** 产品单元 */
            productUnit: ibas.emYesNo;
            /** 缺省仓库 */
            defaultWarehouse: string;
            /** 首选供应商 */
            preferredVendor: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 价格 */
            avgPrice: number;
            /** 库存 */
            onHand: number;
            /** 已承诺 */
            onCommited: number;
            /** 已订购 */
            onOrdered: number;
            /** 最低库存量 */
            minimumInventory: number;
            /** 最低订购数量 */
            minimumOrderQuantity: number;
            /** 提前期（天） */
            leadTime: number;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 采购税收组 */
            purchaseTaxGroup: string;
            /** 销售税收组 */
            salesTaxGroup: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 图片 */
            picture: string;
            /** 备注 */
            remarks: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 已删除 */
            deleted: ibas.emYesNo;
            /** 对象编号 */
            docEntry: number;
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
            /** 数据所属组织 */
            organization: string;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
        }
        /** 物料数量 */
        interface IMaterialQuantity {
            /** 物料编码 */
            itemCode: string;
            /** 物料名称 */
            itemName: string;
            /** 库存数量 */
            onHand: number;
            /** 已承诺 */
            onCommited: number;
            /** 已订购 */
            onOrdered: number;
            /** 单位 */
            uom: string;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
        }
        /** 物料价格 */
        interface IMaterialPrice {
            /** 价格来源 */
            source: string;
            /** 物料编码 */
            itemCode: string;
            /** 物料名称 */
            itemName: string;
            /** 物料标记 */
            itemSign: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 含税 */
            taxed: ibas.emYesNo;
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
declare namespace materials {
    namespace bo {
        interface IMaterialBatch extends ibas.IBOSimple, ibas.IBOUserFields {
            /** 物料编码 */
            itemCode: string;
            /** 批次编号 */
            batchCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 锁定 */
            locked: ibas.emYesNo;
            /** 供应商序号 */
            supplierSerial: string;
            /** 过期日期 */
            expirationDate: Date;
            /** 生产日期 */
            manufacturingDate: Date;
            /** 准入日期 */
            admissionDate: Date;
            /** 物料规格 */
            specification: number;
            /** 位置 */
            location: string;
            /** 备注 */
            notes: string;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 对象编号 */
            objectKey: number;
            /** 对象类型 */
            objectCode: string;
            /**  创建日期 */
            createDate: Date;
            /**  创建时间 */
            createTime: number;
            /**  修改日期 */
            updateDate: Date;
            /**  修改时间 */
            updateTime: number;
            /**  实例号 */
            logInst: number;
            /**  服务系列 */
            series: number;
            /**  数据源 */
            dataSource: string;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
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
declare namespace materials {
    namespace bo {
        /** 物料批次项目 */
        interface IMaterialBatchItem extends ibas.IBOSimple {
            /** 批次编码 */
            batchCode: string;
            /** 数量 */
            quantity: number;
            /** 基于类型 */
            documentType: string;
            /** 基于标识 */
            documentEntry: number;
            /** 基于行号 */
            documentLineId: number;
            /** 对象编号 */
            objectKey: number;
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
        }
        /** 物料批次记录集合 */
        interface IMaterialBatchItems extends ibas.IBusinessObjects<IMaterialBatchItem> {
            /** 创建实例 */
            create(): IMaterialBatchItem;
            create(batchCode: string): IMaterialBatchItem;
            /** 总计 */
            total(): number;
        }
        /** 物料批次记录父项 */
        interface IMaterialBatchItemParent extends ibas.IBusinessObject {
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 类型 */
            objectCode: string;
            /** 标识 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 物料 */
            itemCode: string;
            /** 仓库 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 物料批次集合 */
            materialBatches: IMaterialBatchItems;
        }
        /** 物料批次项目 */
        class MaterialBatchItem extends ibas.BOSimple<MaterialBatchItem> implements IMaterialBatchItem {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-批次编码 */
            static PROPERTY_BATCHCODE_NAME: string;
            /** 获取-批次编码 */
            get batchCode(): string;
            /** 设置-批次编码 */
            set batchCode(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_DOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get documentType(): string;
            /** 设置-基于类型 */
            set documentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_DOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get documentEntry(): number;
            /** 设置-基于标识 */
            set documentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_DOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get documentLineId(): number;
            /** 设置-基于行号 */
            set documentLineId(value: number);
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
            /** 初始化数据 */
            protected init(): void;
        }
        /** 物料批次记录集合 */
        class MaterialBatchItems extends ibas.BusinessObjects<IMaterialBatchItem, IMaterialBatchItemParent> implements IMaterialBatchItems {
            /** 创建并添加子项 */
            create(): IMaterialBatchItem;
            /** 创建并添加子项，批次号 */
            create(batchCode: string): IMaterialBatchItem;
            afterAdd(item: IMaterialBatchItem): void;
            /**
             * 父项单据行发生改变
             */
            onParentPropertyChanged(name: string): void;
            /** 总计 */
            total(): number;
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
declare namespace materials {
    namespace bo {
        /** 物料批次记录 */
        interface IMaterialBatchJournal extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 批次编码 */
            batchCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 方向 */
            direction: ibas.emDirection;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 对象编号 */
            objectKey: number;
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
declare namespace materials {
    namespace bo {
        /** 物料组 */
        interface IMaterialGroup extends ibas.IBOMasterData, ibas.IBOUserFields {
            /** 编号 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 虚拟的 */
            phantom: ibas.emYesNo;
            /** 父项 */
            parents: string;
            /** 对象编号 */
            docEntry: number;
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
            /** 数据所属组织 */
            organization: string;
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
declare namespace materials {
    namespace bo {
        /** 物料库存 */
        interface IMaterialInventory extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 仓库编号 */
            warehouse: string;
            /** 冻结的 */
            frozen: ibas.emYesNo;
            /** 价格 */
            avgPrice: number;
            /** 库存 */
            onHand: number;
            /** 已承诺 */
            onCommited: number;
            /** 已订购 */
            onOrdered: number;
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
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
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
declare namespace materials {
    namespace bo {
        /** 仓库日记账 */
        interface IMaterialInventoryJournal extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 物料名称 */
            itemName: string;
            /** 仓库编号 */
            warehouse: string;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 方向 */
            direction: ibas.emDirection;
            /** 数量 */
            quantity: number;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 过账日期 */
            postingDate: Date;
            /** 到期日 */
            deliveryDate: Date;
            /** 凭证日期 */
            documentDate: Date;
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
declare namespace materials {
    namespace bo {
        /** 物料价格清单 */
        interface IMaterialPriceList extends ibas.IBOSimple {
            /** 价格清单名称 */
            name: string;
            /** 分组 */
            group: string;
            /** 货币 */
            currency: string;
            /** 基于的清单 */
            basedOnList: number;
            /** 系数 */
            factor: number;
            /** 含税 */
            taxed: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 底价清单 */
            floorList: number;
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
            /** 实例号 */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 数据源 */
            dataSource: string;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 价格清单-行集合 */
            materialPriceItems: IMaterialPriceItems;
        }
        interface IMaterialPriceItems extends ibas.IBusinessObjects<IMaterialPriceItem> {
            /** 创建并添加子项 */
            create(): IMaterialPriceItem;
        }
        interface IMaterialPriceItem extends ibas.IBOSimpleLine {
            /** 物料编码 */
            itemCode: string;
            /** 价格 */
            price: number;
            /** 对象编号 */
            objectKey: number;
            /** 行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 数据源 */
            dataSource: string;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
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
declare namespace materials {
    namespace bo {
        interface IMaterialSerial extends ibas.IBOSimple, ibas.IBOUserFields {
            /** 物料编码 */
            itemCode: string;
            /** 序列编号 */
            serialCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 在仓库 */
            inStock: ibas.emYesNo;
            /** 锁定 */
            locked: ibas.emYesNo;
            /** 供应商序号 */
            supplierSerial: string;
            /** 批次序号 */
            batchSerial: string;
            /** 过期日期 */
            expirationDate: Date;
            /** 生产日期 */
            manufacturingDate: Date;
            /** 准入日期 */
            admissionDate: Date;
            /** 保修开始日期 */
            warrantyStartDate: Date;
            /** 保修结束日期 */
            warrantyEndDate: Date;
            /** 物料规格 */
            specification: number;
            /** 位置 */
            location: string;
            /** 备注 */
            notes: string;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 对象编号 */
            objectKey: number;
            /** 对象类型 */
            objectCode: string;
            /**  创建日期 */
            createDate: Date;
            /**  创建时间 */
            createTime: number;
            /**  修改日期 */
            updateDate: Date;
            /**  修改时间 */
            updateTime: number;
            /**  实例号 */
            logInst: number;
            /**  服务系列 */
            series: number;
            /**  数据源 */
            dataSource: string;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
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
declare namespace materials {
    namespace bo {
        /** 物料序列项目 */
        interface IMaterialSerialItem extends ibas.IBOSimple {
            /** 序列编码 */
            serialCode: string;
            /** 基于类型 */
            documentType: string;
            /** 基于标识 */
            documentEntry: number;
            /** 基于行号 */
            documentLineId: number;
            /** 对象编号 */
            objectKey: number;
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
        }
        /** 物料序列记录集合 */
        interface IMaterialSerialItems extends ibas.IBusinessObjects<IMaterialSerialItem> {
            /** 创建实例 */
            create(): IMaterialSerialItem;
            create(serialCode: string): IMaterialSerialItem;
            /** 总计 */
            total(): number;
        }
        /** 序列管理单据行 */
        interface IMaterialSerialItemParent extends ibas.IBusinessObject {
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 类型 */
            objectCode: string;
            /** 标识 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 物料 */
            itemCode: string;
            /** 仓库 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 物料序列集合 */
            materialSerials: IMaterialSerialItems;
        }
        /** 物料序列项目 */
        class MaterialSerialItem extends ibas.BOSimple<MaterialSerialItem> implements IMaterialSerialItem {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-序列编码 */
            static PROPERTY_SERIALCODE_NAME: string;
            /** 获取-序列编码 */
            get serialCode(): string;
            /** 设置-序列编码 */
            set serialCode(value: string);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_DOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get documentType(): string;
            /** 设置-基于类型 */
            set documentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_DOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get documentEntry(): number;
            /** 设置-基于标识 */
            set documentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_DOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get documentLineId(): number;
            /** 设置-基于行号 */
            set documentLineId(value: number);
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
            /** 初始化数据 */
            protected init(): void;
        }
        /** 物料序列记录集合 */
        class MaterialSerialItems extends ibas.BusinessObjects<IMaterialSerialItem, IMaterialSerialItemParent> implements IMaterialSerialItems {
            /** 创建并添加子项 */
            create(): IMaterialSerialItem;
            /** 创建并添加子项，序列编号 */
            create(serialCode: string): IMaterialSerialItem;
            afterAdd(item: IMaterialSerialItem): void;
            /**
             * 父项单据行发生改变
             */
            onParentPropertyChanged(name: string): void;
            /** 总计 */
            total(): number;
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
declare namespace materials {
    namespace bo {
        /** 物料序列记录 */
        interface IMaterialSerialJournal extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 序列编码 */
            serialCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 方向 */
            direction: ibas.emDirection;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 对象编号 */
            objectKey: number;
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
declare namespace materials {
    namespace bo {
        /** 商品 */
        interface IProduct extends ibas.IBOMasterData, ibas.IBOUserFields {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 标识 */
            sign: string;
            /** 物料组 */
            group: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 条形码 */
            barCode: string;
            /** 物料类型 */
            itemType: emItemType;
            /** 采购物料 */
            purchaseItem: ibas.emYesNo;
            /** 销售物料 */
            salesItem: ibas.emYesNo;
            /** 库存物料 */
            inventoryItem: ibas.emYesNo;
            /** 虚拟物料 */
            phantomItem: ibas.emYesNo;
            /** 仓库 */
            warehouse: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 含税 */
            taxed: ibas.emYesNo;
            /** 库存 */
            onHand: number;
            /** 已承诺 */
            onCommited: number;
            /** 已订购 */
            onOrdered: number;
            /** 提前期（天） */
            leadTime: number;
            /** 首选供应商 */
            preferredVendor: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 采购税收组 */
            purchaseTaxGroup: string;
            /** 销售税收组 */
            salesTaxGroup: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 图片 */
            picture: string;
            /** 对象编号 */
            docEntry: number;
            /** 对象类型 */
            objectCode: string;
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
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
declare namespace materials {
    namespace bo {
        /** 库存盘点 */
        interface IInventoryCounting extends ibas.IBODocument {
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
            /** 盘点日期 */
            countDate: Date;
            /** 盘点时间 */
            countTime: number;
            /** 盘点类型 */
            countType: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 备注 */
            remarks: string;
            /** 单据类型 */
            orderType: string;
            /** 库存盘点-行集合 */
            inventoryCountingLines: IInventoryCountingLines;
        }
        /** 库存盘点-行 集合 */
        interface IInventoryCountingLines extends ibas.IBusinessObjects<IInventoryCountingLine> {
            /** 创建并添加子项 */
            create(): IInventoryCountingLine;
        }
        /** 库存盘点-行 */
        interface IInventoryCountingLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 类型 */
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
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
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
            /** 仓库 */
            warehouse: string;
            /** 库存数量 */
            inventoryQuantity: number;
            /** 盘点数量 */
            countQuantity: number;
            /** 差额 */
            difference: number;
            /** 单位 */
            uom: string;
            /** 已盘点 */
            counted: ibas.emYesNo;
            /** 冻结物料 */
            freeze: ibas.emYesNo;
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
declare namespace materials {
    namespace bo {
        /** 仓库 */
        interface IWarehouse extends ibas.IBOMasterData, ibas.IBOUserFields {
            /** 编号 */
            code: string;
            /** 名称 */
            name: string;
            /** 条形码 */
            barCode: string;
            /** 激活 */
            activated: ibas.emYesNo;
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
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 已删除 */
            deleted: ibas.emYesNo;
            /** 对象编号 */
            docEntry: number;
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
            /** 数据所属组织 */
            organization: string;
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
declare namespace materials {
    namespace bo {
        /** 物料规格 */
        interface IMaterialSpecification extends ibas.IBOSimple, ibas.IBOUserFields {
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
            /** 名称 */
            name: string;
            /** 物料编码 */
            itemCode: string;
            /** 规格模板 */
            specification: number;
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 项目代码 */
            project: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 备注 */
            remarks: string;
            /** 物料规格-项目集合 */
            materialSpecificationItems: IMaterialSpecificationItems;
        }
        /** 物料规格-项目 集合 */
        interface IMaterialSpecificationItems extends ibas.IBusinessObjects<IMaterialSpecificationItem> {
            /** 创建并添加子项 */
            create(): IMaterialSpecificationItem;
        }
        /** 物料规格-项目 */
        interface IMaterialSpecificationItem extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
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
            /** 组标记 */
            parentSign: string;
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 值 */
            value: string;
            /** 关联的 */
            associated: string;
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
declare namespace materials {
    namespace bo {
        /** 规格模板 */
        interface ISpecification extends ibas.IBOSimple, ibas.IBOUserFields {
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
            /** 名称 */
            name: string;
            /** 目标类型 */
            targetType: emSpecificationTarget;
            /** 目标 */
            target: string;
            /** 是否激活 */
            activated: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 分配类型 */
            assignedType: emSpecificationAssigned;
            /** 分配目标 */
            assigned: string;
            /** 备注 */
            remarks: string;
            /** 规格模板-项目集合 */
            specificationItems: ISpecificationItems;
        }
        /** 规格模板-项目 集合 */
        interface ISpecificationItems extends ibas.IBusinessObjects<ISpecificationItem> {
            /** 创建并添加子项 */
            create(): ISpecificationItem;
        }
        /** 规格模板-项目 */
        interface ISpecificationItem extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
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
            /** 组标记 */
            parentSign: string;
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可编辑 */
            editable: ibas.emYesNo;
            /** 必填的 */
            required: ibas.emYesNo;
            /** 规格模板-项目值集合 */
            specificationItemValues: ISpecificationItemValues;
        }
        /** 规格模板-项目值 集合 */
        interface ISpecificationItemValues extends ibas.IBusinessObjects<ISpecificationItemValue> {
            /** 创建并添加子项 */
            create(): ISpecificationItemValue;
        }
        /** 规格模板-项目值 */
        interface ISpecificationItemValue extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
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
            /** 项目号 */
            itemId: number;
            /** 值 */
            value: string;
            /** 描述 */
            description: string;
            /** 关联的 */
            associated: string;
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
declare namespace materials {
    namespace bo {
        /** 规格树 */
        interface ISpecificationTree {
            /** 模板 */
            template: number;
            /** 名称 */
            name: string;
            /** 备注 */
            remarks: string;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
            /** 转换对象 */
            convert(): IMaterialSpecification;
        }
        /** 规格模板-项目 */
        interface ISpecificationTreeItem {
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可编辑 */
            editable: boolean;
            /** 必填的 */
            required: boolean;
            /** 可选值 */
            vaildValues: ibas.IList<ISpecificationTreeItemValue>;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
        }
        /** 规格模板-项目值 */
        interface ISpecificationTreeItemValue {
            /** 值 */
            value: string;
            /** 描述 */
            description: string;
            /** 关联 */
            associated: string;
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
declare namespace materials {
    namespace bo {
        /** 业务仓库 */
        interface IBORepositoryMaterials extends ibas.IBORepositoryApplication {
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
             * 查询 库存发货
             * @param fetcher 查询者
             */
            fetchGoodsIssue(fetcher: ibas.IFetchCaller<bo.IGoodsIssue>): void;
            /**
             * 保存 库存发货
             * @param saver 保存者
             */
            saveGoodsIssue(saver: ibas.ISaveCaller<bo.IGoodsIssue>): void;
            /**
             * 查询 库存收货
             * @param fetcher 查询者
             */
            fetchGoodsReceipt(fetcher: ibas.IFetchCaller<bo.IGoodsReceipt>): void;
            /**
             * 保存 库存收货
             * @param saver 保存者
             */
            saveGoodsReceipt(saver: ibas.ISaveCaller<bo.IGoodsReceipt>): void;
            /**
             * 查询 库存转储
             * @param fetcher 查询者
             */
            fetchInventoryTransfer(fetcher: ibas.IFetchCaller<bo.IInventoryTransfer>): void;
            /**
             * 保存 库存转储
             * @param saver 保存者
             */
            saveInventoryTransfer(saver: ibas.ISaveCaller<bo.IInventoryTransfer>): void;
            /**
             * 查询 物料
             * @param fetcher 查询者
             */
            fetchMaterial(fetcher: ibas.IFetchCaller<bo.IMaterial>): void;
            /**
             * 保存 物料
             * @param saver 保存者
             */
            saveMaterial(saver: ibas.ISaveCaller<bo.IMaterial>): void;
            /**
             * 查询 物料组
             * @param fetcher 查询者
             */
            fetchMaterialGroup(fetcher: ibas.IFetchCaller<bo.IMaterialGroup>): void;
            /**
             * 保存 物料组
             * @param saver 保存者
             */
            saveMaterialGroup(saver: ibas.ISaveCaller<bo.IMaterialGroup>): void;
            /**
             * 查询 物料库存
             * @param fetcher 查询者
             */
            fetchMaterialInventory(fetcher: ibas.IFetchCaller<bo.IMaterialInventory>): void;
            /**
             * 查询 仓库日记账
             * @param fetcher 查询者
             */
            fetchMaterialInventoryJournal(fetcher: ibas.IFetchCaller<bo.IMaterialInventoryJournal>): void;
            /**
             * 保存 仓库日记账
             * @param saver 保存者
             */
            saveMaterialInventoryJournal(saver: ibas.ISaveCaller<bo.IMaterialInventoryJournal>): void;
            /**
             * 查询 仓库
             * @param fetcher 查询者
             */
            fetchWarehouse(fetcher: ibas.IFetchCaller<bo.IWarehouse>): void;
            /**
             * 保存 仓库
             * @param saver 保存者
             */
            saveWarehouse(saver: ibas.ISaveCaller<bo.IWarehouse>): void;
            /**
             * 查询 物料扩展
             * @param fetcher 查询者
             */
            fetchProduct(fetcher: ibas.IFetchCaller<bo.IProduct>): void;
            /**
             * 查询 物料批次
             * @param fetcher 查询者
             */
            fetchMaterialBatch(fetcher: ibas.IFetchCaller<bo.IMaterialBatch>): void;
            /**
             * 保存 物料批次
             * @param saver 保存者
             */
            saveMaterialBatch(saver: ibas.ISaveCaller<bo.IMaterialBatch>): void;
            /**
             * 查询 物料批次日记账
             * @param fetcher 查询者
             */
            fetchMaterialBatchJournal(fetcher: ibas.IFetchCaller<bo.IMaterialBatchJournal>): void;
            /**
             * 查询 物料序列
             * @param fetcher 查询者
             */
            fetchMaterialSerial(fetcher: ibas.IFetchCaller<bo.IMaterialSerial>): void;
            /**
             * 保存 物料序列
             * @param saver 保存者
             */
            saveMaterialSerial(saver: ibas.ISaveCaller<bo.IMaterialSerial>): void;
            /**
             * 查询 物料序列日记账
             * @param fetcher 查询者
             */
            fetchMaterialSerialJournal(fetcher: ibas.IFetchCaller<bo.IMaterialSerialJournal>): void;
            /**
             * 查询 库存盘点
             * @param fetcher 查询者
             */
            fetchInventoryCounting(fetcher: ibas.IFetchCaller<bo.IInventoryCounting>): void;
            /**
             * 保存 库存盘点
             * @param saver 保存者
             */
            saveInventoryCounting(saver: ibas.ISaveCaller<bo.IInventoryCounting>): void;
            /**
             * 结算 库存盘点
             * @param fetcher 查询者
             */
            closeInventoryCounting(closer: ICloseCaller<bo.IInventoryCounting>): void;
            /**
             * 查询 物料价格清单
             * @param fetcher 查询者
             */
            fetchMaterialPriceList(fetcher: ibas.IFetchCaller<bo.IMaterialPriceList>): void;
            /**
             * 保存 物料价格清单
             * @param saver 保存者
             */
            saveMaterialPriceList(saver: ibas.ISaveCaller<bo.IMaterialPriceList>): void;
            /**
             * 查询 物料数量
             * @param fetcher 查询者
             */
            fetchMaterialQuantity(fetcher: ibas.IFetchCaller<bo.IMaterialQuantity>): void;
            /**
             * 查询 物料价格
             * @param fetcher 查询者
             */
            fetchMaterialPrice(fetcher: ibas.IFetchCaller<bo.IMaterialPrice>): void;
            /**
             * 查询 物料规格
             * @param fetcher 查询者
             */
            fetchMaterialSpecification(fetcher: ibas.IFetchCaller<bo.IMaterialSpecification>): void;
            /**
             * 保存 物料规格
             * @param saver 保存者
             */
            saveMaterialSpecification(saver: ibas.ISaveCaller<bo.IMaterialSpecification>): void;
            /**
             * 查询 规格模板
             * @param fetcher 查询者
             */
            fetchSpecification(fetcher: ibas.IFetchCaller<bo.ISpecification>): void;
            /**
             * 保存 规格模板
             * @param saver 保存者
             */
            saveSpecification(saver: ibas.ISaveCaller<bo.ISpecification>): void;
            /**
             * 查询 规格树
             * @param fetcher 查询者
             */
            fetchSpecificationTree(fetcher: ibas.IFetchCaller<bo.ISpecificationTree>): void;
        }
        interface ICloseCaller<T> extends ibas.IMethodCaller<string> {
            /** 查询条件 */
            criteria: ibas.ICriteria | ibas.ICondition[] | T;
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
declare namespace materials {
    namespace bo {
        /** 库存发货 */
        class GoodsIssue extends ibas.BODocument<GoodsIssue> implements IGoodsIssue {
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
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
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
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
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
            /** 映射的属性名称-库存发货-行集合 */
            static PROPERTY_GOODSISSUELINES_NAME: string;
            /** 获取-库存发货-行集合 */
            get goodsIssueLines(): GoodsIssueLines;
            /** 设置-库存发货-行集合 */
            set goodsIssueLines(value: GoodsIssueLines);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 库存发货-行 集合 */
        class GoodsIssueLines extends ibas.BusinessObjects<GoodsIssueLine, GoodsIssue> implements IGoodsIssueLines {
            /** 创建并添加子项 */
            create(): GoodsIssueLine;
        }
        /** 库存发货-行 */
        class GoodsIssueLine extends ibas.BODocumentLine<GoodsIssueLine> implements IGoodsIssueLine {
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
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
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
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial): void;
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
declare namespace materials {
    namespace bo {
        /** 库存收货 */
        class GoodsReceipt extends ibas.BODocument<GoodsReceipt> implements IGoodsReceipt {
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
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
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
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
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
            /** 映射的属性名称-库存收货-行集合 */
            static PROPERTY_GOODSRECEIPTLINES_NAME: string;
            /** 获取-库存收货-行集合 */
            get goodsReceiptLines(): GoodsReceiptLines;
            /** 设置-库存收货-行集合 */
            set goodsReceiptLines(value: GoodsReceiptLines);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 库存收货-行 集合 */
        class GoodsReceiptLines extends ibas.BusinessObjects<GoodsReceiptLine, GoodsReceipt> implements IGoodsReceiptLines {
            /** 创建并添加子项 */
            create(): GoodsReceiptLine;
        }
        /** 库存收货-行 */
        class GoodsReceiptLine extends ibas.BODocumentLine<GoodsReceiptLine> implements IGoodsReceiptLine {
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
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
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
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial): void;
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
declare namespace materials {
    namespace bo {
        /** 库存转储 */
        class InventoryTransfer extends ibas.BODocument<InventoryTransfer> implements IInventoryTransfer {
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
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
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
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
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
            /** 映射的属性名称-从仓库 */
            static PROPERTY_FROMWAREHOUSE_NAME: string;
            /** 获取-从仓库 */
            get fromWarehouse(): string;
            /** 设置-从仓库 */
            set fromWarehouse(value: string);
            /** 映射的属性名称-库存转储-行集合 */
            static PROPERTY_INVENTORYTRANSFERLINES_NAME: string;
            /** 获取-库存转储-行集合 */
            get inventoryTransferLines(): InventoryTransferLines;
            /** 设置-库存转储-行集合 */
            set inventoryTransferLines(value: InventoryTransferLines);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 库存转储-行 集合 */
        class InventoryTransferLines extends ibas.BusinessObjects<InventoryTransferLine, InventoryTransfer> implements IInventoryTransferLines {
            /** 创建并添加子项 */
            create(): InventoryTransferLine;
        }
        /** 库存转储-行 */
        class InventoryTransferLine extends ibas.BODocumentLine<InventoryTransferLine> implements IInventoryTransferLine {
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
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
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
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial): void;
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
declare namespace materials {
    namespace bo {
        /** 物料 */
        class Material extends ibas.BOMasterData<Material> implements IMaterial {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_CODE_NAME: string;
            /** 获取-编码 */
            get code(): string;
            /** 设置-编码 */
            set code(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-外文名称 */
            static PROPERTY_FOREIGNNAME_NAME: string;
            /** 获取-外文名称 */
            get foreignName(): string;
            /** 设置-外文名称 */
            set foreignName(value: string);
            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标识 */
            get sign(): string;
            /** 设置-标识 */
            set sign(value: string);
            /** 映射的属性名称-物料组 */
            static PROPERTY_GROUP_NAME: string;
            /** 获取-物料组 */
            get group(): string;
            /** 设置-物料组 */
            set group(value: string);
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-条形码 */
            static PROPERTY_BARCODE_NAME: string;
            /** 获取-条形码 */
            get barCode(): string;
            /** 设置-条形码 */
            set barCode(value: string);
            /** 映射的属性名称-物料类型 */
            static PROPERTY_ITEMTYPE_NAME: string;
            /** 获取-物料类型 */
            get itemType(): emItemType;
            /** 设置-物料类型 */
            set itemType(value: emItemType);
            /** 映射的属性名称-采购物料 */
            static PROPERTY_PURCHASEITEM_NAME: string;
            /** 获取-采购物料 */
            get purchaseItem(): ibas.emYesNo;
            /** 设置-采购物料 */
            set purchaseItem(value: ibas.emYesNo);
            /** 映射的属性名称-销售物料 */
            static PROPERTY_SALESITEM_NAME: string;
            /** 获取-销售物料 */
            get salesItem(): ibas.emYesNo;
            /** 设置-销售物料 */
            set salesItem(value: ibas.emYesNo);
            /** 映射的属性名称-库存物料 */
            static PROPERTY_INVENTORYITEM_NAME: string;
            /** 获取-库存物料 */
            get inventoryItem(): ibas.emYesNo;
            /** 设置-库存物料 */
            set inventoryItem(value: ibas.emYesNo);
            /** 映射的属性名称-虚拟物料 */
            static PROPERTY_PHANTOMITEM_NAME: string;
            /** 获取-虚拟物料 */
            get phantomItem(): ibas.emYesNo;
            /** 设置-虚拟物料 */
            set phantomItem(value: ibas.emYesNo);
            /** 映射的属性名称-固定资产 */
            static PROPERTY_FIXEDASSET_NAME: string;
            /** 获取-固定资产 */
            get fixedAsset(): ibas.emYesNo;
            /** 设置-固定资产 */
            set fixedAsset(value: ibas.emYesNo);
            /** 映射的属性名称-产品单元 */
            static PROPERTY_PRODUCTUNIT_NAME: string;
            /** 获取-产品单元 */
            get productUnit(): ibas.emYesNo;
            /** 设置-产品单元 */
            set productUnit(value: ibas.emYesNo);
            /** 映射的属性名称-缺省仓库 */
            static PROPERTY_DEFAULTWAREHOUSE_NAME: string;
            /** 获取-缺省仓库 */
            get defaultWarehouse(): string;
            /** 设置-缺省仓库 */
            set defaultWarehouse(value: string);
            /** 映射的属性名称-首选供应商 */
            static PROPERTY_PREFERREDVENDOR_NAME: string;
            /** 获取-首选供应商 */
            get preferredVendor(): string;
            /** 设置-首选供应商 */
            set preferredVendor(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_AVGPRICE_NAME: string;
            /** 获取-价格 */
            get avgPrice(): number;
            /** 设置-价格 */
            set avgPrice(value: number);
            /** 映射的属性名称-库存 */
            static PROPERTY_ONHAND_NAME: string;
            /** 获取-库存 */
            get onHand(): number;
            /** 设置-库存 */
            set onHand(value: number);
            /** 映射的属性名称-已承诺 */
            static PROPERTY_ONCOMMITED_NAME: string;
            /** 获取-已承诺 */
            get onCommited(): number;
            /** 设置-已承诺 */
            set onCommited(value: number);
            /** 映射的属性名称-已订购 */
            static PROPERTY_ONORDERED_NAME: string;
            /** 获取-已订购 */
            get onOrdered(): number;
            /** 设置-已订购 */
            set onOrdered(value: number);
            /** 映射的属性名称-最低库存量 */
            static PROPERTY_MINIMUMINVENTORY_NAME: string;
            /** 获取-最低库存量 */
            get minimumInventory(): number;
            /** 设置-最低库存量 */
            set minimumInventory(value: number);
            /** 映射的属性名称-最低订购数量 */
            static PROPERTY_MINIMUMORDERQUANTITY_NAME: string;
            /** 获取-最低订购数量 */
            get minimumOrderQuantity(): number;
            /** 设置-最低订购数量 */
            set minimumOrderQuantity(value: number);
            /** 映射的属性名称-提前期（天） */
            static PROPERTY_LEADTIME_NAME: string;
            /** 获取-提前期（天） */
            get leadTime(): number;
            /** 设置-提前期（天） */
            set leadTime(value: number);
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
            /** 映射的属性名称-采购税收组 */
            static PROPERTY_PURCHASETAXGROUP_NAME: string;
            /** 获取-采购税收组 */
            get purchaseTaxGroup(): string;
            /** 设置-采购税收组 */
            set purchaseTaxGroup(value: string);
            /** 映射的属性名称-销售税收组 */
            static PROPERTY_SALESTAXGROUP_NAME: string;
            /** 获取-销售税收组 */
            get salesTaxGroup(): string;
            /** 设置-销售税收组 */
            set salesTaxGroup(value: string);
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
            /** 映射的属性名称-图片 */
            static PROPERTY_PICTURE_NAME: string;
            /** 获取-图片 */
            get picture(): string;
            /** 设置-图片 */
            set picture(value: string);
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
            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-对象编号 */
            get docEntry(): number;
            /** 设置-对象编号 */
            set docEntry(value: number);
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
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
        }
        /** 物料数量 */
        class MaterialQuantity extends ibas.BusinessObject<MaterialQuantity> implements IMaterialQuantity {
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料名称 */
            static PROPERTY_ITEMNAME_NAME: string;
            /** 获取-物料名称 */
            get itemName(): string;
            /** 设置-物料名称 */
            set itemName(value: string);
            /** 映射的属性名称-库存 */
            static PROPERTY_ONHAND_NAME: string;
            /** 获取-库存 */
            get onHand(): number;
            /** 设置-库存 */
            set onHand(value: number);
            /** 映射的属性名称-库存 */
            static PROPERTY_ONORDERED_NAME: string;
            /** 获取-库存 */
            get onOrdered(): number;
            /** 设置-库存 */
            set onOrdered(value: number);
            /** 映射的属性名称-库存 */
            static PROPERTY_ONCOMMITED_NAME: string;
            /** 获取-库存 */
            get onCommited(): number;
            /** 设置-库存 */
            set onCommited(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 字符串 */
            toString(): string;
            /** 获取查询 */
            criteria(): ibas.ICriteria;
            /** 初始化数据 */
            protected init(): void;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
        }
        /** 物料价格 */
        class MaterialPrice extends ibas.BusinessObject<MaterialPrice> implements IMaterialPrice {
            /** 映射的属性名称-数据源 */
            static PROPERTY_SOURCE_NAME: string;
            /** 获取-数据源 */
            get source(): string;
            /** 设置-数据源 */
            set source(value: string);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料名称 */
            static PROPERTY_ITEMNAME_NAME: string;
            /** 获取-物料名称 */
            get itemName(): string;
            /** 设置-物料名称 */
            set itemName(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
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
            /** 映射的属性名称-含税 */
            static PROPERTY_TAXED_NAME: string;
            /** 获取-含税 */
            get taxed(): ibas.emYesNo;
            /** 设置-含税 */
            set taxed(value: ibas.emYesNo);
            /** 字符串 */
            toString(): string;
            /** 获取查询 */
            criteria(): ibas.ICriteria;
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
declare namespace materials {
    namespace bo {
        class MaterialBatch extends ibas.BOSimple<MaterialBatch> implements IMaterialBatch {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-批次编号 */
            static PROPERTY_BATCHCODE_NAME: string;
            /** 获取-批次编号 */
            get batchCode(): string;
            /** 设置-批次编号 */
            set batchCode(value: string);
            /** 映射的属性名称-仓库编号 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编号 */
            get warehouse(): string;
            /** 设置-仓库编号 */
            set warehouse(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-锁定 */
            static PROPERTY_LOCKED_NAME: string;
            /** 获取-锁定 */
            get locked(): ibas.emYesNo;
            /** 设置-锁定 */
            set locked(value: ibas.emYesNo);
            /** 映射的属性名称-供应商序号 */
            static PROPERTY_SUPPLIERSERIAL_NAME: string;
            /** 获取-供应商序号 */
            get supplierSerial(): string;
            /** 设置-供应商序号 */
            set supplierSerial(value: string);
            /** 映射的属性名称-过期日期 */
            static PROPERTY_EXPIRATIONDATE_NAME: string;
            /** 获取-过期日期 */
            get expirationDate(): Date;
            /** 设置-过期日期 */
            set expirationDate(value: Date);
            /** 映射的属性名称-生产日期 */
            static PROPERTY_MANUFACTURINGDATE_NAME: string;
            /** 获取-生产日期 */
            get manufacturingDate(): Date;
            /** 设置-生产日期 */
            set manufacturingDate(value: Date);
            /** 映射的属性名称-准入日期 */
            static PROPERTY_ADMISSIONDATE_NAME: string;
            /** 获取-准入日期 */
            get admissionDate(): Date;
            /** 设置-准入日期 */
            set admissionDate(value: Date);
            /** 映射的属性名称-物料规格 */
            static PROPERTY_SPECIFICATION_NAME: string;
            /** 获取-物料规格 */
            get specification(): number;
            /** 设置-物料规格 */
            set specification(value: number);
            /** 映射的属性名称-位置 */
            static PROPERTY_LOCATION_NAME: string;
            /** 获取-位置 */
            get location(): string;
            /** 设置-位置 */
            set location(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTES_NAME: string;
            /** 获取-备注 */
            get notes(): string;
            /** 设置-备注 */
            set notes(value: string);
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
            set baseDocubaseDocumentEntrymentType(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocubaseDocumentEntrymentLineId(value: number);
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
            /** 初始化数据 */
            protected init(): void;
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
declare namespace materials {
    namespace bo {
        /** 物料批次记录 */
        class MaterialBatchJournal extends ibas.BOSimple<MaterialBatchJournal> implements IMaterialBatchJournal {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-批次编码 */
            static PROPERTY_BATCHCODE_NAME: string;
            /** 获取-批次编码 */
            get batchCode(): string;
            /** 设置-批次编码 */
            set batchCode(value: string);
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
            set warehouse(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-方向 */
            static PROPERTY_DIRECTION_NAME: string;
            /** 获取-方向 */
            get direction(): ibas.emDirection;
            /** 设置-方向 */
            set direction(value: ibas.emDirection);
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
declare namespace materials {
    namespace bo {
        /** 物料组 */
        class MaterialGroup extends ibas.BOMasterData<MaterialGroup> implements IMaterialGroup {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编号 */
            static PROPERTY_CODE_NAME: string;
            /** 获取-编号 */
            get code(): string;
            /** 设置-编号 */
            set code(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-虚拟的 */
            static PROPERTY_PHANTOM_NAME: string;
            /** 获取-虚拟的 */
            get phantom(): ibas.emYesNo;
            /** 设置-虚拟的 */
            set phantom(value: ibas.emYesNo);
            /** 映射的属性名称-父项 */
            static PROPERTY_PARENTS_NAME: string;
            /** 获取-父项 */
            get parents(): string;
            /** 设置-父项 */
            set parents(value: string);
            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-对象编号 */
            get docEntry(): number;
            /** 设置-对象编号 */
            set docEntry(value: number);
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
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
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
declare namespace materials {
    namespace bo {
        /** 物料库存 */
        class MaterialInventory extends ibas.BOSimple<MaterialInventory> implements IMaterialInventory {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-仓库编号 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编号 */
            get warehouse(): string;
            /** 设置-仓库编号 */
            set warehouse(value: string);
            /** 映射的属性名称-冻结的 */
            static PROPERTY_FROZEN_NAME: string;
            /** 获取-冻结的 */
            get frozen(): ibas.emYesNo;
            /** 设置-冻结的 */
            set frozen(value: ibas.emYesNo);
            /** 映射的属性名称-价格 */
            static PROPERTY_AVGPRICE_NAME: string;
            /** 获取-价格 */
            get avgPrice(): number;
            /** 设置-价格 */
            set avgPrice(value: number);
            /** 映射的属性名称-库存 */
            static PROPERTY_ONHAND_NAME: string;
            /** 获取-库存 */
            get onHand(): number;
            /** 设置-库存 */
            set onHand(value: number);
            /** 映射的属性名称-已承诺 */
            static PROPERTY_ONCOMMITED_NAME: string;
            /** 获取-已承诺 */
            get onCommited(): number;
            /** 设置-已承诺 */
            set onCommited(value: number);
            /** 映射的属性名称-已订购 */
            static PROPERTY_ONORDERED_NAME: string;
            /** 获取-已订购 */
            get onOrdered(): number;
            /** 设置-已订购 */
            set onOrdered(value: number);
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
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
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
declare namespace materials {
    namespace bo {
        /** 仓库日记账 */
        class MaterialInventoryJournal extends ibas.BOSimple<MaterialInventoryJournal> implements IMaterialInventoryJournal {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料名称 */
            static PROPERTY_ITEMNAME_NAME: string;
            /** 获取-物料名称 */
            get itemName(): string;
            /** 设置-物料名称 */
            set itemName(value: string);
            /** 映射的属性名称-仓库编号 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编号 */
            get warehouse(): string;
            /** 设置-仓库编号 */
            set warehouse(value: string);
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
            /** 映射的属性名称-方向 */
            static PROPERTY_DIRECTION_NAME: string;
            /** 获取-方向 */
            get direction(): ibas.emDirection;
            /** 设置-方向 */
            set direction(value: ibas.emDirection);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
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
declare namespace materials {
    namespace bo {
        class MaterialPriceList extends ibas.BOSimple<MaterialPriceList> implements IMaterialPriceList {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-分组 */
            static PROPERTY_GROUP_NAME: string;
            /** 获取-分组 */
            get group(): string;
            /** 设置-分组 */
            set group(value: string);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-基于的清单 */
            static PROPERTY_BASEDONLIST_NAME: string;
            /** 获取-基于的清单 */
            get basedOnList(): number;
            /** 设置-基于的清单 */
            set basedOnList(value: number);
            /** 映射的属性名称-系数 */
            static PROPERTY_FACTOR_NAME: string;
            /** 获取-系数 */
            get factor(): number;
            /** 设置-系数 */
            set factor(value: number);
            /** 映射的属性名称-含税 */
            static PROPERTY_TAXED_NAME: string;
            /** 获取-含税 */
            get taxed(): ibas.emYesNo;
            /** 设置-含税 */
            set taxed(value: ibas.emYesNo);
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
            /** 映射的属性名称-底价清单 */
            static PROPERTY_FLOORLIST_NAME: string;
            /** 获取-底价清单 */
            get floorList(): number;
            /** 设置-底价清单 */
            set floorList(value: number);
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
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-物料价格清单-行集合 */
            static PROPERTY_MATERIALPRICEITEMS_NAME: string;
            /** 获取-物料价格清单-行集合 */
            get materialPriceItems(): MaterialPriceItems;
            /** 设置-物料价格清单-行集合 */
            set materialPriceItems(value: MaterialPriceItems);
            /** 初始化数据 */
            protected init(): void;
        }
        class MaterialPriceItems extends ibas.BusinessObjects<MaterialPriceItem, MaterialPriceList> implements IMaterialPriceItems {
            /** 创建并添加子项 */
            create(): MaterialPriceItem;
        }
        class MaterialPriceItem extends ibas.BOSimpleLine<MaterialPriceItem> implements IMaterialPriceItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-对象编号 */
            static PROPERT_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            get objectKey(): number;
            /** 设置-对象编号 */
            set objectKey(value: number);
            /** 映射的属性名称-对象行号 */
            static PROPERT_LINEID_NAME: string;
            /** 获取-对象行号 */
            get lineId(): number;
            /** 设置-对象行号 */
            set lineId(value: number);
            /** 映射的属性名称-对象类型 */
            static PROPERT_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
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
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
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
declare namespace materials {
    namespace bo {
        class MaterialSerial extends ibas.BOSimple<MaterialSerial> implements IMaterialSerial {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-序列编号 */
            static PROPERTY_SERIALCODE_NAME: string;
            /** 获取-序列编号 */
            get serialCode(): string;
            /** 设置-序列编号 */
            set serialCode(value: string);
            /** 映射的属性名称-仓库编号 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编号 */
            get warehouse(): string;
            /** 设置-仓库编号 */
            set warehouse(value: string);
            /** 映射的属性名称-在仓库 */
            static PROPERTY_INSTOCK_NAME: string;
            /** 获取-在仓库 */
            get inStock(): ibas.emYesNo;
            /** 设置-在仓库 */
            set inStock(value: ibas.emYesNo);
            /** 映射的属性名称-锁定 */
            static PROPERTY_LOCKED_NAME: string;
            /** 获取-锁定 */
            get locked(): ibas.emYesNo;
            /** 设置-锁定 */
            set locked(value: ibas.emYesNo);
            /** 映射的属性名称-供应商序号 */
            static PROPERTY_SUPPLIERSERIAL_NAME: string;
            /** 获取-供应商序号 */
            get supplierSerial(): string;
            /** 设置-供应商序号 */
            set supplierSerial(value: string);
            /** 映射的属性名称-批次序号 */
            static PROPERTY_INTERNALSERIAL_NAME: string;
            /** 获取-批次序号 */
            get batchSerial(): string;
            /** 设置-批次序号 */
            set batchSerial(value: string);
            /** 映射的属性名称-过期日期 */
            static PROPERTY_EXPIRATIONDATE_NAME: string;
            /** 获取-过期日期 */
            get expirationDate(): Date;
            /** 设置-过期日期 */
            set expirationDate(value: Date);
            /** 映射的属性名称-生产日期 */
            static PROPERTY_MANUFACTURINGDATE_NAME: string;
            /** 获取-生产日期 */
            get manufacturingDate(): Date;
            /** 设置-生产日期 */
            set manufacturingDate(value: Date);
            /** 映射的属性名称-准入日期 */
            static PROPERTY_ADMISSIONDATE_NAME: string;
            /** 获取-准入日期 */
            get admissionDate(): Date;
            /** 设置-准入日期 */
            set admissionDate(value: Date);
            /** 映射的属性名称-开始保修日期 */
            static PROPERTY_WARRANTYSTARTDATE_NAME: string;
            /** 获取-开始保修日期 */
            get warrantyStartDate(): Date;
            /** 设置-开始保修日期 */
            set warrantyStartDate(value: Date);
            /** 映射的属性名称-保修结束日期 */
            static PROPERTY_WARRANTYENDDATE_NAME: string;
            /** 获取-保修结束日期 */
            get warrantyEndDate(): Date;
            /** 设置-保修结束日期 */
            set warrantyEndDate(value: Date);
            /** 映射的属性名称-物料规格 */
            static PROPERTY_SPECIFICATION_NAME: string;
            /** 获取-物料规格 */
            get specification(): number;
            /** 设置-物料规格 */
            set specification(value: number);
            /** 映射的属性名称-位置 */
            static PROPERTY_LOCATION_NAME: string;
            /** 获取-位置 */
            get location(): string;
            /** 设置-位置 */
            set location(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTES_NAME: string;
            /** 获取-备注 */
            get notes(): string;
            /** 设置-备注 */
            set notes(value: string);
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
            set baseDocubaseDocumentEntrymentType(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocubaseDocumentEntrymentLineId(value: number);
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
            /** 初始化数据 */
            protected init(): void;
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
declare namespace materials {
    namespace bo {
        /** 物料序列记录 */
        class MaterialSerialJournal extends ibas.BOSimple<MaterialSerialJournal> implements IMaterialSerialJournal {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-序列编码 */
            static PROPERTY_SERIALCODE_NAME: string;
            /** 获取-序列编码 */
            get serialCode(): string;
            /** 设置-序列编码 */
            set serialCode(value: string);
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
            set warehouse(value: string);
            /** 映射的属性名称-方向 */
            static PROPERTY_DIRECTION_NAME: string;
            /** 获取-方向 */
            get direction(): ibas.emDirection;
            /** 设置-方向 */
            set direction(value: ibas.emDirection);
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
declare namespace materials {
    namespace bo {
        class Product extends ibas.BOMasterData<Product> implements IProduct {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_CODE_NAME: string;
            /** 获取-编码 */
            get code(): string;
            /** 设置-编码 */
            set code(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-外文名称 */
            static PROPERTY_FOREIGNNAME_NAME: string;
            /** 获取-外文名称 */
            get foreignName(): string;
            /** 设置-外文名称 */
            set foreignName(value: string);
            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标识 */
            get sign(): string;
            /** 设置-标识 */
            set sign(value: string);
            /** 映射的属性名称-物料组 */
            static PROPERTY_GROUP_NAME: string;
            /** 获取-物料组 */
            get group(): string;
            /** 设置-物料组 */
            set group(value: string);
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-条形码 */
            static PROPERTY_BARCODE_NAME: string;
            /** 获取-条形码 */
            get barCode(): string;
            /** 设置-条形码 */
            set barCode(value: string);
            /** 映射的属性名称-物料类型 */
            static PROPERTY_ITEMTYPE_NAME: string;
            /** 获取-物料类型 */
            get itemType(): emItemType;
            /** 设置-物料类型 */
            set itemType(value: emItemType);
            /** 映射的属性名称-采购物料 */
            static PROPERTY_PURCHASEITEM_NAME: string;
            /** 获取-采购物料 */
            get purchaseItem(): ibas.emYesNo;
            /** 设置-采购物料 */
            set purchaseItem(value: ibas.emYesNo);
            /** 映射的属性名称-销售物料 */
            static PROPERTY_SALESITEM_NAME: string;
            /** 获取-销售物料 */
            get salesItem(): ibas.emYesNo;
            /** 设置-销售物料 */
            set salesItem(value: ibas.emYesNo);
            /** 映射的属性名称-库存物料 */
            static PROPERTY_INVENTORYITEM_NAME: string;
            /** 获取-库存物料 */
            get inventoryItem(): ibas.emYesNo;
            /** 设置-库存物料 */
            set inventoryItem(value: ibas.emYesNo);
            /** 映射的属性名称-虚拟物料 */
            static PROPERTY_PHANTOMITEM_NAME: string;
            /** 获取-虚拟物料 */
            get phantomItem(): ibas.emYesNo;
            /** 设置-虚拟物料 */
            set phantomItem(value: ibas.emYesNo);
            /** 映射的属性名称-缺省仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-首选供应商 */
            static PROPERTY_PREFERREDVENDOR_NAME: string;
            /** 获取-首选供应商 */
            get preferredVendor(): string;
            /** 设置-首选供应商 */
            set preferredVendor(value: string);
            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string;
            /** 获取-库存单位 */
            get inventoryUOM(): string;
            /** 设置-库存单位 */
            set inventoryUOM(value: string);
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
            /** 映射的属性名称-含税 */
            static PROPERTY_TAXED_NAME: string;
            /** 获取-含税 */
            get taxed(): ibas.emYesNo;
            /** 设置-含税 */
            set taxed(value: ibas.emYesNo);
            /** 映射的属性名称-库存 */
            static PROPERTY_ONHAND_NAME: string;
            /** 获取-库存 */
            get onHand(): number;
            /** 设置-库存 */
            set onHand(value: number);
            /** 映射的属性名称-已承诺 */
            static PROPERTY_ONCOMMITED_NAME: string;
            /** 获取-已承诺 */
            get onCommited(): number;
            /** 设置-已承诺 */
            set onCommited(value: number);
            /** 映射的属性名称-已订购 */
            static PROPERTY_ONORDERED_NAME: string;
            /** 获取-已订购 */
            get onOrdered(): number;
            /** 设置-已订购 */
            set onOrdered(value: number);
            /** 映射的属性名称-提前期（天） */
            static PROPERTY_LEADTIME_NAME: string;
            /** 获取-提前期（天） */
            get leadTime(): number;
            /** 设置-提前期（天） */
            set leadTime(value: number);
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
            /** 映射的属性名称-采购税收组 */
            static PROPERTY_PURCHASETAXGROUP_NAME: string;
            /** 获取-采购税收组 */
            get purchaseTaxGroup(): string;
            /** 设置-采购税收组 */
            set purchaseTaxGroup(value: string);
            /** 映射的属性名称-销售税收组 */
            static PROPERTY_SALESTAXGROUP_NAME: string;
            /** 获取-销售税收组 */
            get salesTaxGroup(): string;
            /** 设置-销售税收组 */
            set salesTaxGroup(value: string);
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
            /** 映射的属性名称-图片 */
            static PROPERTY_PICTURE_NAME: string;
            /** 获取-图片 */
            get picture(): string;
            /** 设置-图片 */
            set picture(value: string);
            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-对象编号 */
            get docEntry(): number;
            /** 设置-对象编号 */
            set docEntry(value: number);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            /** 可用量（库存+已订购-已承诺） */
            onAvailable(): number;
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
declare namespace materials {
    namespace bo {
        /** 仓库 */
        class Warehouse extends ibas.BOMasterData<Warehouse> implements IWarehouse {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编号 */
            static PROPERTY_CODE_NAME: string;
            /** 获取-编号 */
            get code(): string;
            /** 设置-编号 */
            set code(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-条形码 */
            static PROPERTY_BARCODE_NAME: string;
            /** 获取-条形码 */
            get barCode(): string;
            /** 设置-条形码 */
            set barCode(value: string);
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
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
            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-对象编号 */
            get docEntry(): number;
            /** 设置-对象编号 */
            set docEntry(value: number);
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
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
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
declare namespace materials {
    namespace bo {
        /** 库存盘点 */
        class InventoryCounting extends ibas.BODocument<InventoryCounting> implements IInventoryCounting {
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
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
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
            /** 映射的属性名称-盘点日期 */
            static PROPERTY_COUNTDATE_NAME: string;
            /** 获取-盘点日期 */
            get countDate(): Date;
            /** 设置-盘点日期 */
            set countDate(value: Date);
            /** 映射的属性名称-盘点时间 */
            static PROPERTY_COUNTTIME_NAME: string;
            /** 获取-盘点时间 */
            get countTime(): number;
            /** 设置-盘点时间 */
            set countTime(value: number);
            /** 映射的属性名称-盘点类型 */
            static PROPERTY_COUNTTYPE_NAME: string;
            /** 获取-盘点类型 */
            get countType(): string;
            /** 设置-盘点类型 */
            set countType(value: string);
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
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-库存盘点-行集合 */
            static PROPERTY_INVENTORYCOUNTINGLINES_NAME: string;
            /** 获取-库存盘点-行集合 */
            get inventoryCountingLines(): InventoryCountingLines;
            /** 设置-库存盘点-行集合 */
            set inventoryCountingLines(value: InventoryCountingLines);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
        }
        /** 库存盘点-行 集合 */
        class InventoryCountingLines extends ibas.BusinessObjects<InventoryCountingLine, InventoryCounting> implements IInventoryCountingLines {
            /** 创建并添加子项 */
            create(): InventoryCountingLine;
        }
        /** 库存盘点-行 */
        class InventoryCountingLine extends ibas.BODocumentLine<InventoryCountingLine> implements IInventoryCountingLine {
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
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
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
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-盘点数量 */
            static PROPERTY_COUNTQUANTITY_NAME: string;
            /** 获取-盘点数量 */
            get countQuantity(): number;
            /** 设置-盘点数量 */
            set countQuantity(value: number);
            /** 映射的属性名称-差额 */
            static PROPERTY_DIFFERENCE_NAME: string;
            /** 获取-差额 */
            get difference(): number;
            /** 设置-差额 */
            set difference(value: number);
            /** 映射的属性名称-单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-单位 */
            get uom(): string;
            /** 设置-单位 */
            set uom(value: string);
            /** 映射的属性名称-已盘点 */
            static PROPERTY_COUNTED_NAME: string;
            /** 获取-已盘点 */
            get counted(): ibas.emYesNo;
            /** 设置-已盘点 */
            set counted(value: ibas.emYesNo);
            /** 映射的属性名称-冻结物料 */
            static PROPERTY_FREEZE_NAME: string;
            /** 获取-冻结物料 */
            get freeze(): ibas.emYesNo;
            /** 设置-冻结物料 */
            set freeze(value: ibas.emYesNo);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: MaterialSerialItems);
            get quantity(): number;
            set quantity(value: number);
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 属性改变时 */
            protected onPropertyChanged(name: string): void;
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
declare namespace materials {
    namespace bo {
        /** 物料规格 */
        class MaterialSpecification extends ibas.BOSimple<MaterialSpecification> implements IMaterialSpecification {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-规格模板 */
            static PROPERTY_SPECIFICATION_NAME: string;
            /** 获取-规格模板 */
            get specification(): number;
            /** 设置-规格模板 */
            set specification(value: number);
            /** 映射的属性名称-业务伙伴类型 */
            static PROPERTY_BUSINESSPARTNERTYPE_NAME: string;
            /** 获取-业务伙伴类型 */
            get businessPartnerType(): businesspartner.bo.emBusinessPartnerType;
            /** 设置-业务伙伴类型 */
            set businessPartnerType(value: businesspartner.bo.emBusinessPartnerType);
            /** 映射的属性名称-业务伙伴编码 */
            static PROPERTY_BUSINESSPARTNERCODE_NAME: string;
            /** 获取-业务伙伴编码 */
            get businessPartnerCode(): string;
            /** 设置-业务伙伴编码 */
            set businessPartnerCode(value: string);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
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
            /** 映射的属性名称-物料规格-项目集合 */
            static PROPERTY_MATERIALSPECIFICATIONITEMS_NAME: string;
            /** 获取-物料规格-项目集合 */
            get materialSpecificationItems(): MaterialSpecificationItems;
            /** 设置-物料规格-项目集合 */
            set materialSpecificationItems(value: MaterialSpecificationItems);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 物料规格-项目 集合 */
        class MaterialSpecificationItems extends ibas.BusinessObjects<MaterialSpecificationItem, MaterialSpecification> implements IMaterialSpecificationItems {
            /** 创建并添加子项 */
            create(): MaterialSpecificationItem;
        }
        /** 物料规格-项目 */
        class MaterialSpecificationItem extends ibas.BOSimpleLine<MaterialSpecificationItem> implements IMaterialSpecificationItem {
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
            /** 映射的属性名称-组标记 */
            static PROPERTY_PARENTSIGN_NAME: string;
            /** 获取-组标记 */
            get parentSign(): string;
            /** 设置-组标记 */
            set parentSign(value: string);
            /** 映射的属性名称-标记 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标记 */
            get sign(): string;
            /** 设置-标记 */
            set sign(value: string);
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            get description(): string;
            /** 设置-描述 */
            set description(value: string);
            /** 映射的属性名称-内容 */
            static PROPERTY_CONTENT_NAME: string;
            /** 获取-内容 */
            get content(): string;
            /** 设置-内容 */
            set content(value: string);
            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string;
            /** 获取-值 */
            get value(): string;
            /** 设置-值 */
            set value(value: string);
            /** 映射的属性名称-关联的 */
            static PROPERTY_ASSOCIATED_NAME: string;
            /** 获取-关联的 */
            get associated(): string;
            /** 设置-关联的 */
            set associated(value: string);
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
declare namespace materials {
    namespace bo {
        /** 规格模板 */
        class Specification extends ibas.BOSimple<Specification> implements ISpecification {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-目标类型 */
            static PROPERTY_TARGETTYPE_NAME: string;
            /** 获取-目标类型 */
            get targetType(): emSpecificationTarget;
            /** 设置-目标类型 */
            set targetType(value: emSpecificationTarget);
            /** 映射的属性名称-目标 */
            static PROPERTY_TARGET_NAME: string;
            /** 获取-目标 */
            get target(): string;
            /** 设置-目标 */
            set target(value: string);
            /** 映射的属性名称-是否激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-是否激活 */
            get activated(): ibas.emYesNo;
            /** 设置-是否激活 */
            set activated(value: ibas.emYesNo);
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
            /** 映射的属性名称-分配类型 */
            static PROPERTY_ASSIGNEDTYPE_NAME: string;
            /** 获取-分配类型 */
            get assignedType(): emSpecificationAssigned;
            /** 设置-分配类型 */
            set assignedType(value: emSpecificationAssigned);
            /** 映射的属性名称-分配目标 */
            static PROPERTY_ASSIGNED_NAME: string;
            /** 获取-分配目标 */
            get assigned(): string;
            /** 设置-分配目标 */
            set assigned(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-规格模板-项目集合 */
            static PROPERTY_SPECIFICATIONITEMS_NAME: string;
            /** 获取-规格模板-项目集合 */
            get specificationItems(): SpecificationItems;
            /** 设置-规格模板-项目集合 */
            set specificationItems(value: SpecificationItems);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 规格模板-项目 集合 */
        class SpecificationItems extends ibas.BusinessObjects<SpecificationItem, Specification> implements ISpecificationItems {
            /** 创建并添加子项 */
            create(): SpecificationItem;
        }
        /** 规格模板-项目 */
        class SpecificationItem extends ibas.BOSimpleLine<SpecificationItem> implements ISpecificationItem {
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
            /** 映射的属性名称-组标记 */
            static PROPERTY_PARENTSIGN_NAME: string;
            /** 获取-组标记 */
            get parentSign(): string;
            /** 设置-组标记 */
            set parentSign(value: string);
            /** 映射的属性名称-标记 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标记 */
            get sign(): string;
            /** 设置-标记 */
            set sign(value: string);
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            get description(): string;
            /** 设置-描述 */
            set description(value: string);
            /** 映射的属性名称-内容 */
            static PROPERTY_CONTENT_NAME: string;
            /** 获取-内容 */
            get content(): string;
            /** 设置-内容 */
            set content(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            get note(): string;
            /** 设置-备注 */
            set note(value: string);
            /** 映射的属性名称-可编辑 */
            static PROPERTY_EDITABLE_NAME: string;
            /** 获取-可编辑 */
            get editable(): ibas.emYesNo;
            /** 设置-可编辑 */
            set editable(value: ibas.emYesNo);
            /** 映射的属性名称-必填的 */
            static PROPERTY_REQUIRED_NAME: string;
            /** 获取-必填的 */
            get required(): ibas.emYesNo;
            /** 设置-必填的 */
            set required(value: ibas.emYesNo);
            /** 映射的属性名称-规格模板-项目值集合 */
            static PROPERTY_SPECIFICATIONITEMVALUES_NAME: string;
            /** 获取-规格模板-项目值集合 */
            get specificationItemValues(): SpecificationItemValues;
            /** 设置-规格模板-项目值集合 */
            set specificationItemValues(value: SpecificationItemValues);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 规格模板-项目值 集合 */
        class SpecificationItemValues extends ibas.BusinessObjects<SpecificationItemValue, SpecificationItem> implements ISpecificationItemValues {
            /** 创建并添加子项 */
            create(): SpecificationItemValue;
        }
        /** 规格模板-项目值 */
        class SpecificationItemValue extends ibas.BOSimpleLine<SpecificationItemValue> implements ISpecificationItemValue {
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
            /** 映射的属性名称-项目号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目号 */
            get itemId(): number;
            /** 设置-项目号 */
            set itemId(value: number);
            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string;
            /** 获取-值 */
            get value(): string;
            /** 设置-值 */
            set value(value: string);
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            get description(): string;
            /** 设置-描述 */
            set description(value: string);
            /** 映射的属性名称-关联的 */
            static PROPERTY_ASSOCIATED_NAME: string;
            /** 获取-关联的 */
            get associated(): string;
            /** 设置-关联的 */
            set associated(value: string);
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
declare namespace materials {
    namespace bo {
        /** 规格树 */
        class SpecificationTree implements ISpecificationTree {
            constructor();
            /** 模板 */
            template: number;
            /** 名称 */
            name: string;
            /** 备注 */
            remarks: string;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
            /** 转换对象 */
            convert(): MaterialSpecification;
        }
        /** 规格模板-项目 */
        class SpecificationTreeItem implements ISpecificationTreeItem {
            constructor();
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可编辑 */
            editable: boolean;
            /** 必填的 */
            required: boolean;
            /** 可选值 */
            vaildValues: ibas.IList<ISpecificationTreeItemValue>;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
        }
        /** 规格模板-项目值 */
        class SpecificationTreeItemValue implements ISpecificationTreeItemValue {
            /** 值 */
            value: string;
            /** 描述 */
            description: string;
            /** 关联 */
            associated: string;
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
declare namespace materials {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
            /**
             * 解析业务对象数据
             * @param data 目标类型
             * @param sign 特殊标记
             * @returns 本地类型
             */
            parsing(data: any, sign: string): any;
        }
        /** 模块业务对象工厂 */
        const boFactory: ibas.BOFactory;
        function baseMaterial(target: IGoodsIssueLine | IGoodsReceiptLine | IInventoryTransferLine, source: materials.bo.IMaterial): void;
        namespace bo4j {
            /** 操作消息 */
            interface IDataDeclaration {
                /** 数据类型 */
                type: string;
            }
            /** 规格树 */
            interface ISpecificationTree extends IDataDeclaration {
                /** 模板 */
                Template: number;
                /** 名称 */
                Name: string;
                /** 备注 */
                Remarks: string;
                /** 规格模板-项目集合 */
                Items: ISpecificationTreeItem[];
            }
            /** 规格模板-项目 */
            interface ISpecificationTreeItem extends IDataDeclaration {
                /** 标记 */
                Sign: string;
                /** 描述 */
                Description: string;
                /** 内容 */
                Content: string;
                /** 备注 */
                Note: string;
                /** 可编辑 */
                Editable: boolean;
                /** 必填的 */
                Required: boolean;
                /** 可选值 */
                VaildValues: ISpecificationTreeItemValue[];
                /** 规格模板-项目集合 */
                Items: ISpecificationTreeItem[];
            }
            /** 规格模板-项目值 */
            interface ISpecificationTreeItemValue extends IDataDeclaration {
                /** 标记 */
                Value: string;
                /** 描述 */
                Description: string;
                /** 关联 */
                Associated: string;
            }
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
declare namespace materials {
    namespace bo {
        /** 业务对象仓库 */
        class BORepositoryMaterials extends ibas.BORepositoryApplication implements IBORepositoryMaterials {
            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter;
            /**
             * 获取地址
             */
            toUrl(filename: string): string;
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
             * 查询 库存发货
             * @param fetcher 查询者
             */
            fetchGoodsIssue(fetcher: ibas.IFetchCaller<bo.GoodsIssue>): void;
            /**
             * 保存 库存发货
             * @param saver 保存者
             */
            saveGoodsIssue(saver: ibas.ISaveCaller<bo.GoodsIssue>): void;
            /**
             * 查询 库存收货
             * @param fetcher 查询者
             */
            fetchGoodsReceipt(fetcher: ibas.IFetchCaller<bo.GoodsReceipt>): void;
            /**
             * 保存 库存收货
             * @param saver 保存者
             */
            saveGoodsReceipt(saver: ibas.ISaveCaller<bo.GoodsReceipt>): void;
            /**
             * 查询 库存转储
             * @param fetcher 查询者
             */
            fetchInventoryTransfer(fetcher: ibas.IFetchCaller<bo.InventoryTransfer>): void;
            /**
             * 保存 库存转储
             * @param saver 保存者
             */
            saveInventoryTransfer(saver: ibas.ISaveCaller<bo.InventoryTransfer>): void;
            /**
             * 查询 物料
             * @param fetcher 查询者
             */
            fetchMaterial(fetcher: ibas.IFetchCaller<bo.Material>): void;
            /**
             * 保存 物料
             * @param saver 保存者
             */
            saveMaterial(saver: ibas.ISaveCaller<bo.Material>): void;
            /**
             * 查询 物料组
             * @param fetcher 查询者
             */
            fetchMaterialGroup(fetcher: ibas.IFetchCaller<bo.MaterialGroup>): void;
            /**
             * 保存 物料组
             * @param saver 保存者
             */
            saveMaterialGroup(saver: ibas.ISaveCaller<bo.MaterialGroup>): void;
            /**
             * 查询 物料库存
             * @param fetcher 查询者
             */
            fetchMaterialInventory(fetcher: ibas.IFetchCaller<bo.MaterialInventory>): void;
            /**
             * 查询 仓库日记账
             * @param fetcher 查询者
             */
            fetchMaterialInventoryJournal(fetcher: ibas.IFetchCaller<bo.MaterialInventoryJournal>): void;
            /**
             * 保存 仓库日记账
             * @param saver 保存者
             */
            saveMaterialInventoryJournal(saver: ibas.ISaveCaller<bo.MaterialInventoryJournal>): void;
            /**
             * 查询 仓库
             * @param fetcher 查询者
             */
            fetchWarehouse(fetcher: ibas.IFetchCaller<bo.Warehouse>): void;
            /**
             * 保存 仓库
             * @param saver 保存者
             */
            saveWarehouse(saver: ibas.ISaveCaller<bo.Warehouse>): void;
            /**
             * 查询 物料扩展（仓库库存、价格清单）
             * @param fetcher 查询者
             */
            fetchProduct(fetcher: ibas.IFetchCaller<bo.Product>): void;
            /**
             *  查询 物料批次
             * @param fetcher 查询者
             */
            fetchMaterialBatch(fetcher: ibas.IFetchCaller<bo.MaterialBatch>): void;
            /**
             * 保存 物料批次
             * @param saver 保存者
             */
            saveMaterialBatch(saver: ibas.ISaveCaller<bo.MaterialBatch>): void;
            /**
             *  查询 物料批次日记账
             * @param fetcher 查询者
             */
            fetchMaterialBatchJournal(fetcher: ibas.IFetchCaller<bo.MaterialBatchJournal>): void;
            /**
             *  查询 物料序列
             * @param fetcher 查询者
             */
            fetchMaterialSerial(fetcher: ibas.IFetchCaller<bo.MaterialSerial>): void;
            /**
             * 保存 物料序列
             * @param saver 保存者
             */
            saveMaterialSerial(saver: ibas.ISaveCaller<bo.MaterialSerial>): void;
            /**
             *  查询 物料序列日记账
             * @param fetcher 查询者
             */
            fetchMaterialSerialJournal(fetcher: ibas.IFetchCaller<bo.MaterialSerialJournal>): void;
            /**
             *  查询 物料价格清单
             * @param fetcher 查询者
             */
            fetchMaterialPriceList(fetcher: ibas.IFetchCaller<bo.MaterialPriceList>): void;
            /**
             * 保存 物料价格清单
             * @param saver 保存者
             */
            saveMaterialPriceList(saver: ibas.ISaveCaller<bo.MaterialPriceList>): void;
            /**
             * 查询 物料数量
             * @param fetcher 查询者
             */
            fetchMaterialQuantity(fetcher: ibas.IFetchCaller<bo.MaterialQuantity>): void;
            /**
             * 查询 物料价格
             * @param fetcher 查询者
             */
            fetchMaterialPrice(fetcher: ibas.IFetchCaller<bo.MaterialPrice>): void;
            /**
             * 查询 库存盘点
             * @param fetcher 查询者
             */
            fetchInventoryCounting(fetcher: ibas.IFetchCaller<bo.InventoryCounting>): void;
            /**
             * 保存 库存盘点
             * @param saver 保存者
             */
            saveInventoryCounting(saver: ibas.ISaveCaller<bo.InventoryCounting>): void;
            /**
             * 结算 库存盘点
             * @param fetcher 查询者
             */
            closeInventoryCounting(closer: ICloseCaller<bo.IInventoryCounting>): void;
            /**
             * 查询 规格模板
             * @param fetcher 查询者
             */
            fetchSpecification(fetcher: ibas.IFetchCaller<bo.Specification>): void;
            /**
             * 保存 规格模板
             * @param saver 保存者
             */
            saveSpecification(saver: ibas.ISaveCaller<bo.Specification>): void;
            /**
             * 查询 规格树
             * @param fetcher 查询者
             */
            fetchSpecificationTree(fetcher: ibas.IFetchCaller<bo.SpecificationTree>): void;
            /**
             * 查询 物料规格
             * @param fetcher 查询者
             */
            fetchMaterialSpecification(fetcher: ibas.IFetchCaller<bo.MaterialSpecification>): void;
            /**
             * 保存 物料规格
             * @param saver 保存者
             */
            saveMaterialSpecification(saver: ibas.ISaveCaller<bo.MaterialSpecification>): void;
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
declare namespace materials {
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
declare namespace materials {
    namespace app {
        /** 选择应用-库存发货 */
        class GoodsIssueChooseApp extends ibas.BOChooseService<IGoodsIssueChooseView, bo.GoodsIssue> {
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
        /** 视图-库存发货 */
        interface IGoodsIssueChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.GoodsIssue[]): void;
        }
        /** 库存发货选择服务映射 */
        class GoodsIssueChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.GoodsIssue>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-库存发货 */
        class GoodsIssueEditApp extends ibas.BOEditService<IGoodsIssueEditView, bo.GoodsIssue> {
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
            run(data: bo.GoodsIssue): void;
            protected priceListData: bo.MaterialPriceList[];
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加库存发货-行事件 */
            private addGoodsIssueLine;
            /** 删除库存发货-行事件 */
            private removeGoodsIssueLine;
            /** 选择库存发货订单行物料事件 */
            private chooseGoodsIssueLineMaterial;
            /** 选择库存发货订单行仓库事件 */
            private chooseGoodsIssueLineWarehouse;
            /** 选择库存发货订单物料价格清单事件 */
            private chooseeGoodsIssueMaterialPriceList;
            /** 选择库存发货行批次事件 */
            private chooseGoodsIssueLineMaterialBatch;
            /** 选择库存发货序列事件 */
            private chooseGoodsIssueLineMaterialSerial;
        }
        /** 视图-库存发货 */
        interface IGoodsIssueEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showGoodsIssue(data: bo.GoodsIssue): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加库存发货-行事件 */
            addGoodsIssueLineEvent: Function;
            /** 删除库存发货-行事件 */
            removeGoodsIssueLineEvent: Function;
            /** 选择库存发货物料价格清单 */
            chooseeGoodsIssueMaterialPriceListEvent: Function;
            /** 显示数据 */
            showGoodsIssueLines(datas: bo.GoodsIssueLine[]): void;
            /** 选择库存发货单行物料事件 */
            chooseGoodsIssueLineMaterialEvent: Function;
            /** 选择库存发货单行仓库事件 */
            chooseGoodsIssueLineWarehouseEvent: Function;
            /** 选择库存发货单行物料批次事件 */
            chooseGoodsIssueLineMaterialBatchEvent: Function;
            /** 选择库存发货单行物料序列事件 */
            chooseGoodsIssueLineMaterialSerialEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 库存发货单编辑服务映射 */
        class GoodsIssueEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.GoodsIssue>>;
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
declare namespace materials {
    namespace app {
        class GoodsIssueFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-库存发货 */
        class GoodsIssueListApp extends ibas.BOListApplication<IGoodsIssueListView, bo.GoodsIssue> {
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
            protected viewData(data: bo.GoodsIssue): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.GoodsIssue): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.GoodsIssue | bo.GoodsIssue[]): void;
        }
        /** 视图-库存发货 */
        interface IGoodsIssueListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.GoodsIssue[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-库存发货 */
        class GoodsIssueViewApp extends ibas.BOViewService<IGoodsIssueViewView, bo.GoodsIssue> {
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
            run(data: bo.GoodsIssue): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-库存发货 */
        interface IGoodsIssueViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showGoodsIssue(data: bo.GoodsIssue): void;
            /** 显示数据-库存发货-行 */
            showGoodsIssueLines(datas: bo.GoodsIssueLine[]): void;
        }
        /** 库存发货连接服务映射 */
        class GoodsIssueLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 选择应用-库存收货 */
        class GoodsReceiptChooseApp extends ibas.BOChooseService<IGoodsReceiptChooseView, bo.GoodsReceipt> {
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
        /** 视图-库存收货 */
        interface IGoodsReceiptChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.GoodsReceipt[]): void;
        }
        /** 库存收货选择服务映射 */
        class GoodsReceiptChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.GoodsReceipt>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-库存收货 */
        class GoodsReceiptEditApp extends ibas.BOEditService<IGoodsReceiptEditView, bo.GoodsReceipt> {
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
            run(data: bo.GoodsReceipt): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加库存收货-行事件 */
            private addGoodsReceiptLine;
            /** 删除库存收货-行事件 */
            private removeGoodsReceiptLine;
            /** 选择库存收货订单行物料事件 */
            private chooseGoodsReceiptLineMaterial;
            /** 选择库存收货订单物料价格清单事件 */
            private chooseeGoodsReceiptMaterialPriceList;
            /** 选择库存收货订单行物料事件 */
            private chooseGoodsReceiptLineWarehouse;
            private batches;
            /** 选择物料批次信息 */
            private chooseGoodsReceiptLineMaterialBatch;
            private serials;
            /** 选择物料序列信息 */
            private createGoodsReceiptLineMaterialSerial;
        }
        /** 视图-库存收货 */
        interface IGoodsReceiptEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showGoodsReceipt(data: bo.GoodsReceipt): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加库存收货-行事件 */
            addGoodsReceiptLineEvent: Function;
            /** 删除库存收货-行事件 */
            removeGoodsReceiptLineEvent: Function;
            /** 显示数据 */
            showGoodsReceiptLines(datas: bo.GoodsReceiptLine[]): void;
            /** 选择库存收货单价格清单 */
            chooseGoodsReceiptMaterialPriceListEvent: Function;
            /** 选择库存收货单行物料事件 */
            chooseGoodsReceiptLineMaterialEvent: Function;
            /** 选择库存收货单行仓库事件 */
            chooseGoodsReceiptLineWarehouseEvent: Function;
            /** 批次管理物料新建批次 */
            chooseGoodsReceiptLineMaterialBatchEvent: Function;
            /** 批次管理物料新建序列 */
            chooseGoodsReceiptLineMaterialSerialEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 库存收货编辑服务映射 */
        class GoodsReceiptEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.GoodsReceipt>>;
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
declare namespace materials {
    namespace app {
        class GoodsReceiptFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-库存收货 */
        class GoodsReceiptListApp extends ibas.BOListApplication<IGoodsReceiptListView, bo.GoodsReceipt> {
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
            protected viewData(data: bo.GoodsReceipt): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.GoodsReceipt): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.GoodsReceipt | bo.GoodsReceipt[]): void;
        }
        /** 视图-库存收货 */
        interface IGoodsReceiptListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.GoodsReceipt[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-库存收货 */
        class GoodsReceiptViewApp extends ibas.BOViewService<IGoodsReceiptViewView, bo.GoodsReceipt> {
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
            run(data: bo.GoodsReceipt): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-库存收货 */
        interface IGoodsReceiptViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showGoodsReceipt(data: bo.GoodsReceipt): void;
            /** 显示数据-库存收货-行 */
            showGoodsReceiptLines(datas: bo.GoodsReceiptLine[]): void;
        }
        /** 库存收货连接服务映射 */
        class GoodsReceiptLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 选择应用-库存转储 */
        class InventoryTransferChooseApp extends ibas.BOChooseService<IInventoryTransferChooseView, bo.InventoryTransfer> {
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
        /** 视图-库存转储 */
        interface IInventoryTransferChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.InventoryTransfer[]): void;
        }
        /** 库存转储选择服务映射 */
        class InventoryTransferChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.InventoryTransfer>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-库存转储 */
        class InventoryTransferEditApp extends ibas.BOEditService<IInventoryTransferEditView, bo.InventoryTransfer> {
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
            run(data: bo.InventoryTransfer): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加库存转储-行事件 */
            private addInventoryTransferLine;
            /** 删除库存转储-行事件 */
            private removeInventoryTransferLine;
            /** 选择库存转储订单行物料事件 */
            private chooseInventoryTransferWarehouse;
            /** 选择库存转储订单行物料事件 */
            private chooseInventoryTransferLineMaterial;
            /** 选择库存转储订单物料价格清单事件 */
            private chooseeInventoryTransferMaterialPriceList;
            /** 选择库存转储订单行物料事件 */
            private chooseInventoryTransferLineWarehouse;
            private chooseInventoryTransferLineMaterialBatch;
            private chooseInventoryTransferLineMaterialSerial;
        }
        /** 视图-库存转储 */
        interface IInventoryTransferEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showInventoryTransfer(data: bo.InventoryTransfer): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择库存转储单从仓库事件 */
            chooseInventoryTransferWarehouseEvent: Function;
            /** 选择库存转储单物料价格清单 */
            chooseeInventoryTransferMaterialPriceListEvent: Function;
            /** 添加库存转储-行事件 */
            addInventoryTransferLineEvent: Function;
            /** 删除库存转储-行事件 */
            removeInventoryTransferLineEvent: Function;
            /** 显示数据 */
            showInventoryTransferLines(datas: bo.InventoryTransferLine[]): void;
            /** 选择库存转储单行物料事件 */
            chooseInventoryTransferLineMaterialEvent: Function;
            /** 选择库存转储单行仓库事件 */
            chooseInventoryTransferLineWarehouseEvent: Function;
            /** 选择库存转储单行物料批次事件 */
            chooseInventoryTransferLineMaterialBatchEvent: Function;
            /** 选择库存转储单行物料序列事件 */
            chooseInventoryTransferLineMaterialSerialEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 库存转储编辑服务映射 */
        class InventoryTransferEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.InventoryTransfer>>;
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
declare namespace materials {
    namespace app {
        class InventoryTransferFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-库存转储 */
        class InventoryTransferListApp extends ibas.BOListApplication<IInventoryTransferListView, bo.InventoryTransfer> {
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
            protected viewData(data: bo.InventoryTransfer): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.InventoryTransfer): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.InventoryTransfer | bo.InventoryTransfer[]): void;
        }
        /** 视图-库存转储 */
        interface IInventoryTransferListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.InventoryTransfer[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-库存转储 */
        class InventoryTransferViewApp extends ibas.BOViewService<IInventoryTransferViewView, bo.InventoryTransfer> {
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
            run(data: bo.InventoryTransfer): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-库存转储 */
        interface IInventoryTransferViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showInventoryTransfer(data: bo.InventoryTransfer): void;
            /** 显示数据-库存转储-行 */
            showInventoryTransferLines(datas: bo.InventoryTransferLine[]): void;
        }
        /** 库存转储连接服务映射 */
        class InventoryTransferLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 选择应用-物料 */
        class MaterialChooseApp extends ibas.BOChooseService<IMaterialChooseView, bo.Material> {
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
        /** 视图-物料 */
        interface IMaterialChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Material[]): void;
        }
        /** 物料选择服务映射 */
        class MaterialChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Material>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料 */
        class MaterialEditApp extends ibas.BOEditApplication<IMaterialEditView, bo.Material> {
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
            run(data: bo.Material): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择物料缺省仓库事件 */
            private chooseMaterialWarehouse;
            /** 选择物料组事件 */
            private chooseMaterialGroup;
            /** 上传图片事件 */
            private uploadPicture;
        }
        /** 视图-物料 */
        interface IMaterialEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterial(data: bo.Material): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择物料缺省仓库事件 */
            chooseMaterialWarehouseEvent: Function;
            /** 选择物料组事件 */
            chooseMaterialGroupEvent: Function;
            /** 上传图片事件 */
            uploadPictureEvent: Function;
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
declare namespace materials {
    namespace app {
        class MaterialFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
        class MaterialInventoryFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
        class MaterialOverviewFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料库存 */
        class MaterialInventoryListApp extends ibas.BOListApplication<IMaterialInventoryListView, bo.MaterialInventory> {
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
            protected viewData(data: bo.MaterialInventory): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialInventory): void;
            /** 查询物料批次交易记录 */
            protected fetchInventoryJournal(criteria: ibas.ICriteria): void;
        }
        /** 视图-物料库存 */
        interface IMaterialInventoryListView extends ibas.IBOListView {
            /** 显示物料库存数据 */
            showInventories(datas: bo.MaterialInventory[]): void;
            /** 查询物料库存交易记录 */
            fetchInventoryJournalEvent: Function;
            /** 显示物料库存交易数据 */
            showInventoryJournals(datas: bo.MaterialInventoryJournal[]): void;
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料 */
        class MaterialListApp extends ibas.BOListApplication<IMaterialListView, bo.Material> {
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
            protected viewData(data: bo.Material): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Material): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Material | bo.Material[]): void;
            private materialGroup;
        }
        /** 视图-物料 */
        interface IMaterialListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 物料组事件 */
            materialGroupEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Material[]): void;
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
declare namespace materials {
    namespace app {
        /** 物料总览 */
        class MaterialOverviewApp extends ibas.BOListApplication<IMaterialOverviewView, bo.Material> {
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
            protected viewData(data: bo.Material): void;
            /** 编辑物料，参数：目标数据 */
            protected editData(data: bo.Material): void;
            private fetchMaterialInventory;
            private fetchMaterialBatch;
            private editMaterialBatch;
            private fetchMaterialSerial;
            private editMaterialSerial;
        }
        /** 视图-物料 */
        interface IMaterialOverviewView extends ibas.IBOListView {
            /** 编辑物料事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 显示数据 */
            showMaterials(datas: bo.IMaterial[]): void;
            /** 显示物料基础信息 */
            showMaterial(data: bo.IMaterial): void;
            /** 查询库存事件 */
            fetchMaterialInventoryEvent: Function;
            /** 显示物料库存 */
            showMaterialInventory(datas: bo.IMaterialInventory[]): void;
            /** 查询批次信息 */
            fetchMaterialBatchEvent: Function;
            /** 编辑批次信息 */
            editMaterialBatchEvent: Function;
            /** 显示物料批次信息 */
            showMaterialBatch(datas: bo.IMaterialBatch[]): void;
            /** 查询序列信息 */
            fetchMaterialSerialEvent: Function;
            /** 编辑序列信息 */
            editMaterialSerialEvent: Function;
            /** 显示物料序列信息 */
            showMaterialSerial(datas: bo.IMaterialSerial[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-物料 */
        class MaterialViewApp extends ibas.BOViewService<IMaterialViewView, bo.Material> {
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
            run(data: bo.Material): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-物料 */
        interface IMaterialViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showMaterial(data: bo.Material): void;
        }
        /** 物料连接服务映射 */
        class MaterialLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 选择应用-物料 */
        class ProductChooseApp extends ibas.BOChooseService<IProductChooseView, bo.Product> {
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
        /** 视图-物料 */
        interface IProductChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Product[]): void;
        }
        /** 物料选择服务映射 */
        class ProductChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Product>>;
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
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace materials {
    namespace app {
        /** 选择应用-物料批次 */
        class MaterialBatchChooseApp extends ibas.BOChooseService<IMaterialBatchChooseView, bo.MaterialBatch> {
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
        /** 视图-物料批次 */
        interface IMaterialBatchChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.MaterialBatch[]): void;
        }
        /** 物料批次选择服务映射 */
        class MaterialBatchChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialBatch>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料批次 */
        class MaterialBatchEditApp extends ibas.BOEditApplication<IMaterialBatchEditView, bo.MaterialBatch> {
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
            run(data: bo.MaterialBatch): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 选择物料规格 */
            private chooseSpecification;
        }
        /** 视图-物料批次 */
        interface IMaterialBatchEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialBatch(data: bo.MaterialBatch): void;
            /** 选择物料规格 */
            chooseSpecificationEvent: Function;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace materials {
    namespace app {
        class MaterialBatchFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料批次 */
        class MaterialBatchListApp extends ibas.BOListApplication<IMaterialBatchListView, bo.MaterialBatch> {
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
            protected viewData(data: bo.MaterialBatch): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialBatch): void;
            /** 查询物料批次交易记录 */
            protected fetchBatchJournal(criteria: ibas.ICriteria): void;
        }
        /** 视图-物料批次 */
        interface IMaterialBatchListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 显示物料批次数据 */
            showBatches(datas: bo.MaterialBatch[]): void;
            /** 查询物料批次交易记录 */
            fetchBatchJournalEvent: Function;
            /** 显示物料批次交易数据 */
            showBatchJournals(datas: bo.MaterialBatchJournal[]): void;
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
declare namespace materials {
    namespace app {
        export class BatchWorkingItem extends ibas.Bindable {
            constructor(data: IMaterialBatchContract);
            get data(): IMaterialBatchContract;
            /** 物料编码 */
            get itemCode(): string;
            /** 物料描述 */
            get itemDescription(): string;
            /** 仓库编码 */
            get warehouse(): string;
            /** 数量 */
            get quantity(): number;
            /** 单位 */
            get uom(): string;
            /** 剩余数量 */
            get remaining(): number;
            /** 操作结果 */
            get results(): BatchWorkingItemResults;
            fireProcessing(): void;
        }
        export class BatchWorkingItemResults extends ibas.ArrayList<BatchWorkingItemResult> {
            constructor(parent: BatchWorkingItem);
            protected get parent(): BatchWorkingItem;
            create(batch?: bo.IMaterialBatch): BatchWorkingItemResult;
            add(item: BatchWorkingItemResult | BatchWorkingItemResult[]): void;
            private listener;
            remove(item: BatchWorkingItemResult): boolean;
            filterDeleted(): BatchWorkingItemResult[];
            total(): number;
        }
        export class BatchWorkingItemResult extends ibas.Bindable {
            constructor(data: bo.IMaterialBatchItem, extend: IExtraResultMaterialBatch);
            get data(): bo.IMaterialBatchItem;
            get extend(): ExtraResultMaterialBatch;
            itemCode(): string;
            warehouse(): string;
            get batchCode(): string;
            set batchCode(value: string);
            /** 数量 */
            get quantity(): number;
            set quantity(value: number);
            /** 供应商序号 */
            get supplierSerial(): string;
            set supplierSerial(value: string);
            /** 过期日期 */
            get expirationDate(): Date;
            set expirationDate(value: Date);
            /** 生产日期 */
            get manufacturingDate(): Date;
            set manufacturingDate(value: Date);
            /** 物料规格 */
            get specification(): number;
            set specification(value: number);
            /** 准入日期 */
            get admissionDate(): Date;
            set admissionDate(value: Date);
            /** 位置 */
            get location(): string;
            set location(value: string);
            /** 备注 */
            get notes(): string;
            set notes(value: string);
        }
        class ExtraResultMaterialBatch implements IExtraResultMaterialBatch {
            constructor(itemCode: string, warehouse: string);
            get isDirty(): boolean;
            /** 物料编码 */
            itemCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 批次编号 */
            batchCode: string;
            /** 供应商序号 */
            supplierSerial: string;
            /** 过期日期 */
            expirationDate: Date;
            /** 生产日期 */
            manufacturingDate: Date;
            /** 物料规格 */
            specification: number;
            /** 准入日期 */
            admissionDate: Date;
            /** 位置 */
            location: string;
            /** 备注 */
            notes: string;
        }
        /** 物料批次服务 */
        export abstract class MaterialBatchService<T extends IMaterialBatchServiceView> extends ibas.ServiceApplication<T, IMaterialBatchContract[]> {
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected workDatas: ibas.IList<BatchWorkingItem>;
            protected workingData: BatchWorkingItem;
            /** 运行服务 */
            runService(contracts: IMaterialBatchContract[]): void;
            protected changeWorkingData(data: BatchWorkingItem): void;
            protected removeMaterialBatchItem(data: BatchWorkingItemResult | BatchWorkingItemResult[]): void;
        }
        /** 物料批次发货服务 */
        export class MaterialBatchIssueService extends MaterialBatchService<IMaterialBatchIssueView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected changeWorkingData(data: BatchWorkingItem): void;
            protected useMaterialBatchInventory(data: bo.IMaterialBatch): void;
        }
        /** 物料批次收货服务 */
        export class MaterialBatchReceiptService extends MaterialBatchService<IMaterialBatchReceiptView> implements ibas.IService<ibas.IServiceWithResultCaller<IMaterialBatchContract[], IServiceExtraBatches>> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected createMaterialBatchItem(mode: string): void;
            run(): void;
            /** 完成事件 */
            private onCompleted;
            /** 触发完成事件 */
            protected fireCompleted(): void;
        }
        /** 物料批次列表服务 */
        export class MaterialBatchListService extends MaterialBatchService<IMaterialBatchListsView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected addMaterialBatchItem(createNew?: boolean): void;
        }
        /** 视图-物料批次服务 */
        export interface IMaterialBatchServiceView extends ibas.IBOView {
            /** 显示待处理数据 */
            showWorkDatas(datas: BatchWorkingItem[]): void;
            /** 切换工作数据 */
            changeWorkingDataEvent: Function;
            /** 显示物料批次记录 */
            showMaterialBatchItems(datas: BatchWorkingItemResult[]): void;
            /** 移出物料批次库存 */
            removeMaterialBatchItemEvent: Function;
        }
        /** 视图-物料批次发货 */
        export interface IMaterialBatchIssueView extends IMaterialBatchServiceView {
            /** 显示物料批次库存 */
            showMaterialBatchInventories(datas: bo.MaterialBatch[]): void;
            /** 使用物料批次库存 */
            useMaterialBatchInventoryEvent: Function;
        }
        /** 视图-物料批次收货 */
        export interface IMaterialBatchReceiptView extends IMaterialBatchServiceView {
            /** 创建批次记录 */
            createMaterialBatchItemEvent: Function;
        }
        /** 视图-物料批次列表 */
        export interface IMaterialBatchListsView extends IMaterialBatchServiceView {
            /** 添加批次记录 */
            addMaterialBatchItemEvent: Function;
        }
        /** 物料批次发货服务映射 */
        export class MaterialBatchIssueServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 物料批次收货服务映射 */
        export class MaterialBatchReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 物料批次列表服务映射 */
        export class MaterialBatchListServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        export {};
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
declare namespace materials {
    namespace app {
        /** 选择应用-物料组 */
        class MaterialGroupChooseApp extends ibas.BOChooseService<IMaterialGroupChooseView, bo.MaterialGroup> {
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
        /** 视图-物料组 */
        interface IMaterialGroupChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.MaterialGroup[]): void;
        }
        /** 物料组选择服务映射 */
        class MaterialGroupChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialGroup>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料组 */
        class MaterialGroupEditApp extends ibas.BOEditApplication<IMaterialGroupEditView, bo.MaterialGroup> {
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
            run(data: bo.MaterialGroup): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择父项 */
            protected chooseParents(): void;
        }
        /** 视图-物料组 */
        interface IMaterialGroupEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialGroup(data: bo.MaterialGroup): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择父项 */
            chooseParentsEvent: Function;
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
declare namespace materials {
    namespace app {
        class MaterialGroupFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料组 */
        class MaterialGroupListApp extends ibas.BOListApplication<IMaterialGroupListView, bo.MaterialGroup> {
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
            protected viewData(data: bo.MaterialGroup): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialGroup): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.MaterialGroup | bo.MaterialGroup[]): void;
        }
        /** 视图-物料组 */
        interface IMaterialGroupListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.MaterialGroup[]): void;
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
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace materials {
    namespace app {
        /** 选择应用-物料价格清单 */
        class MaterialPriceListChooseApp extends ibas.BOChooseService<IMaterialPriceListChooseView, bo.MaterialPriceList> {
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
        /** 视图-物料价格清单 */
        interface IMaterialPriceListChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.MaterialPriceList[]): void;
        }
        /** 物料批次选择服务映射 */
        class MaterialPriceListChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialPriceList>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料价格清单 */
        class MaterialPriceListEditApp extends ibas.BOEditApplication<IMaterialPriceListEditView, bo.MaterialPriceList> {
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
            run(data: bo.MaterialPriceList): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 选择基于的价格清单 */
            private chooseBasedOnMaterialPriceList;
            /** 选择底价价格清单 */
            private chooseFloorOnMaterialPriceList;
        }
        /** 视图-物料价格清单 */
        interface IMaterialPriceListEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialPriceList(data: bo.MaterialPriceList): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 选择基于的价格清单 */
            chooseBasedOnMaterialPriceListEvent: Function;
            /** 选择底价价格清单 */
            chooseFloorMaterialPriceListEvent: Function;
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
declare namespace materials {
    namespace app {
        class MaterialPriceListFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料价格清单 */
        class MaterialPriceListListApp extends ibas.BOListApplication<IMaterialPriceListListView, bo.MaterialPriceList> {
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
            protected viewData(data: bo.MaterialPriceList): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialPriceList): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.MaterialPriceList | bo.MaterialPriceList[]): void;
            /** 查询价格 */
            protected fetchPrice(criteria: ibas.ICriteria): void;
            /** 保存价格清单项目 */
            protected savePriceListItem(data: bo.MaterialPriceItem | bo.MaterialPriceItem[]): void;
            /** 导出价格 */
            protected exportPrice(criteria: ibas.ICriteria): void;
        }
        /** 视图-物料价格清单 */
        interface IMaterialPriceListListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showPriceList(datas: bo.MaterialPriceList[]): void;
            /** 查询价格事件 */
            fetchPriceEvent: Function;
            /** 显示数据 */
            showPrices(datas: bo.MaterialPrice[]): void;
            /** 保存价格项目事件 */
            savePriceListItemEvent: Function;
            /** 导出价格事件 */
            exportPriceEvent: Function;
            /** 保存数据 */
            savePrices(datas: bo.MaterialPrice[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-物料价格清单 */
        class MaterialPriceListViewApp extends ibas.BOViewService<IMaterialPriceListViewView, bo.MaterialPriceList> {
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
            run(data: bo.MaterialPriceList): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-物料价格清单 */
        interface IMaterialPriceListViewView extends ibas.IBOViewView {
        }
        /** 物料价格清单连接服务映射 */
        class MaterialPriceListLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace materials {
    namespace app {
        /** 选择应用-物料序列 */
        class MaterialSerialChooseApp extends ibas.BOChooseService<IMaterialSerialChooseView, bo.MaterialSerial> {
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
        /** 视图-物料序列 */
        interface IMaterialSerialChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.MaterialSerial[]): void;
        }
        /** 物料序列选择服务映射 */
        class MaterialSerialChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.MaterialSerial>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料序列 */
        class MaterialSerialEditApp extends ibas.BOEditApplication<IMaterialSerialEditView, bo.MaterialSerial> {
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
            run(data: bo.MaterialSerial): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 选择物料规格 */
            private chooseSpecification;
        }
        /** 视图-物料序列 */
        interface IMaterialSerialEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialSerial(data: bo.MaterialSerial): void;
            /** 选择物料规格 */
            chooseSpecificationEvent: Function;
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
declare namespace materials {
    namespace app {
        class MaterialSerialFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料序列 */
        class MaterialSerialListApp extends ibas.BOListApplication<IMaterialSerialListView, bo.MaterialSerial> {
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
            protected viewData(data: bo.MaterialSerial): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialSerial): void;
            /** 查询物料批次交易记录 */
            protected fetchSerialJournal(criteria: ibas.ICriteria): void;
        }
        /** 视图-物料序列 */
        interface IMaterialSerialListView extends ibas.IBOListView {
            /** 编辑数据事件 */
            editDataEvent: Function;
            /** 显示物料批次数据 */
            showSerials(datas: bo.MaterialSerial[]): void;
            /** 查询物料批次交易记录 */
            fetchSerialJournalEvent: Function;
            /** 显示物料批次交易数据 */
            showSerialJournals(datas: bo.MaterialSerialJournal[]): void;
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
declare namespace materials {
    namespace app {
        export class SerialWorkingItem extends ibas.Bindable {
            constructor(data: IMaterialSerialContract);
            get data(): IMaterialSerialContract;
            /** 物料编码 */
            get itemCode(): string;
            /** 物料描述 */
            get itemDescription(): string;
            /** 仓库编码 */
            get warehouse(): string;
            /** 数量 */
            get quantity(): number;
            /** 单位 */
            get uom(): string;
            /** 剩余数量 */
            get remaining(): number;
            /** 操作结果 */
            get results(): SerialWorkingItemResults;
            fireProcessing(): void;
        }
        export class SerialWorkingItemResults extends ibas.ArrayList<SerialWorkingItemResult> {
            constructor(parent: SerialWorkingItem);
            protected get parent(): SerialWorkingItem;
            create(serial?: bo.IMaterialSerial): SerialWorkingItemResult;
            remove(item: SerialWorkingItemResult): boolean;
            filterDeleted(): SerialWorkingItemResult[];
            total(): number;
        }
        export class SerialWorkingItemResult extends ibas.Bindable {
            constructor(data: bo.IMaterialSerialItem, extend: IExtraResultMaterialSerial);
            get data(): bo.IMaterialSerialItem;
            get extend(): ExtraResultMaterialSerial;
            itemCode(): string;
            warehouse(): string;
            get serialCode(): string;
            set serialCode(value: string);
            /** 供应商序号 */
            get supplierSerial(): string;
            set supplierSerial(value: string);
            /** 批次序号 */
            get batchSerial(): string;
            set batchSerial(value: string);
            /** 过期日期 */
            get expirationDate(): Date;
            set expirationDate(value: Date);
            /** 生产日期 */
            get manufacturingDate(): Date;
            set manufacturingDate(value: Date);
            /** 物料规格 */
            get specification(): number;
            set specification(value: number);
            /** 准入日期 */
            get admissionDate(): Date;
            set admissionDate(value: Date);
            /** 保修开始日期 */
            get warrantyStartDate(): Date;
            set warrantyStartDate(value: Date);
            /** 保修结束日期 */
            get warrantyEndDate(): Date;
            set warrantyEndDate(value: Date);
            /** 位置 */
            get location(): string;
            set location(value: string);
            /** 备注 */
            get notes(): string;
            set notes(value: string);
        }
        class ExtraResultMaterialSerial implements IExtraResultMaterialSerial {
            constructor(itemCode: string, warehouse: string);
            get isDirty(): boolean;
            /** 物料编码 */
            itemCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 序列编号 */
            serialCode: string;
            /** 供应商序号 */
            supplierSerial: string;
            /** 批次序号 */
            batchSerial: string;
            /** 过期日期 */
            expirationDate: Date;
            /** 生产日期 */
            manufacturingDate: Date;
            /** 物料规格 */
            specification: number;
            /** 准入日期 */
            admissionDate: Date;
            /** 保修开始日期 */
            warrantyStartDate: Date;
            /** 保修结束日期 */
            warrantyEndDate: Date;
            /** 位置 */
            location: string;
            /** 备注 */
            notes: string;
        }
        /** 物料序列服务 */
        export abstract class MaterialSerialService<T extends IMaterialSerialServiceView> extends ibas.ServiceApplication<T, IMaterialSerialContract[]> {
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected workDatas: ibas.IList<SerialWorkingItem>;
            protected workingData: SerialWorkingItem;
            /** 运行服务 */
            runService(contracts: IMaterialSerialContract[]): void;
            protected changeWorkingData(data: SerialWorkingItem): void;
            protected removeMaterialSerialItem(data: SerialWorkingItemResult | SerialWorkingItemResult[]): void;
        }
        /** 物料序列发货服务 */
        export class MaterialSerialIssueService extends MaterialSerialService<IMaterialSerialIssueView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected changeWorkingData(data: SerialWorkingItem): void;
            protected useMaterialSerialInventory(data: bo.IMaterialSerial): void;
        }
        /** 物料序列收货服务 */
        export class MaterialSerialReceiptService extends MaterialSerialService<IMaterialSerialReceiptView> implements ibas.IService<ibas.IServiceWithResultCaller<IMaterialSerialContract[], IServiceExtraSerials>> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected createMaterialSerialItem(mode: string): void;
            run(): void;
            /** 完成事件 */
            private onCompleted;
            /** 触发完成事件 */
            protected fireCompleted(): void;
        }
        /** 物料序列列表服务 */
        export class MaterialSerialListService extends MaterialSerialService<IMaterialSerialListsView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected addMaterialSerialItem(createNew?: boolean): void;
        }
        /** 视图-物料序列服务 */
        export interface IMaterialSerialServiceView extends ibas.IBOView {
            /** 显示待处理数据 */
            showWorkDatas(datas: SerialWorkingItem[]): void;
            /** 切换工作数据 */
            changeWorkingDataEvent: Function;
            /** 显示物料序列记录 */
            showMaterialSerialItems(datas: SerialWorkingItemResult[]): void;
            /** 移出物料序列库存 */
            removeMaterialSerialItemEvent: Function;
        }
        /** 视图-物料序列发货 */
        export interface IMaterialSerialIssueView extends IMaterialSerialServiceView {
            /** 显示物料序列库存 */
            showMaterialSerialInventories(datas: bo.MaterialSerial[]): void;
            /** 使用物料序列库存 */
            useMaterialSerialInventoryEvent: Function;
        }
        /** 视图-物料序列收货 */
        export interface IMaterialSerialReceiptView extends IMaterialSerialServiceView {
            /** 创建序列编码记录 */
            createMaterialSerialItemEvent: Function;
        }
        /** 视图-物料序列列表 */
        export interface IMaterialSerialListsView extends IMaterialSerialServiceView {
            /** 添加序列编码记录 */
            addMaterialSerialItemEvent: Function;
        }
        /** 物料序列发货服务映射 */
        export class MaterialSerialIssueServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 物料序列收货服务映射 */
        export class MaterialSerialReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 物料序列列表服务映射 */
        export class MaterialSerialListServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        export {};
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
declare namespace materials {
    namespace app {
        /** 选择应用-仓库 */
        class WarehouseChooseApp extends ibas.BOChooseService<IWarehouseChooseView, bo.Warehouse> {
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
        /** 视图-仓库 */
        interface IWarehouseChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Warehouse[]): void;
        }
        /** 仓库选择服务映射 */
        class WarehouseChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.Warehouse>>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-仓库 */
        class WarehouseEditApp extends ibas.BOEditApplication<IWarehouseEditView, bo.Warehouse> {
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
            run(data: bo.Warehouse): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-仓库 */
        interface IWarehouseEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showWarehouse(data: bo.Warehouse): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
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
declare namespace materials {
    namespace app {
        class WarehouseFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-仓库 */
        class WarehouseListApp extends ibas.BOListApplication<IWarehouseListView, bo.Warehouse> {
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
            protected viewData(data: bo.Warehouse): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Warehouse): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Warehouse | bo.Warehouse[]): void;
        }
        /** 视图-仓库 */
        interface IWarehouseListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Warehouse[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-仓库 */
        class WarehouseViewApp extends ibas.BOViewService<IWarehouseViewView, bo.Warehouse> {
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
            run(data: bo.Warehouse): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-仓库 */
        interface IWarehouseViewView extends ibas.IBOViewView {
            showWarehouse(data: bo.Warehouse): void;
        }
        /** 仓库连接服务映射 */
        class WarehouseLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        class InventoryCountingFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-库存盘点 */
        class InventoryCountingListApp extends ibas.BOListApplication<IInventoryCountingListView, bo.InventoryCounting> {
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
            protected viewData(data: bo.InventoryCounting): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.InventoryCounting): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.InventoryCounting | bo.InventoryCounting[]): void;
        }
        /** 视图-库存盘点 */
        interface IInventoryCountingListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.InventoryCounting[]): void;
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
declare namespace materials {
    namespace app {
        /** 选择应用-库存盘点 */
        class InventoryCountingChooseApp extends ibas.BOChooseService<IInventoryCountingChooseView, bo.InventoryCounting> {
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
        /** 视图-库存盘点 */
        interface IInventoryCountingChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.InventoryCounting[]): void;
        }
        /** 库存盘点选择服务映射 */
        class InventoryCountingChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.InventoryCounting>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-库存盘点 */
        class InventoryCountingEditApp extends ibas.BOEditApplication<IInventoryCountingEditView, bo.InventoryCounting> {
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
            run(data: bo.InventoryCounting): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 关闭数据 */
            protected closeData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            protected refreshMaterialInventory(): void;
            /** 添加库存盘点-行事件 */
            protected addInventoryCountingLine(): void;
            /** 删除库存盘点-行事件 */
            protected removeInventoryCountingLine(items: bo.InventoryCountingLine[]): void;
            /** 选择库存盘点行物料事件 */
            private chooseInventoryCountingLineMaterial;
            /** 选择库存盘点行物料事件 */
            private chooseInventoryCountingLineWarehouse;
            private chooseInventoryCountingLineMaterialBatch;
            private chooseInventoryCountingLineMaterialSerial;
            /** 选择库存盘点物料库存事件 */
            private chooseInventoryCountingMaterialInventory;
        }
        /** 视图-库存盘点 */
        interface IInventoryCountingEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showInventoryCounting(data: bo.InventoryCounting): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 关闭数据事件 */
            closeDataEvent: Function;
            /** 添加库存盘点-行事件 */
            addInventoryCountingLineEvent: Function;
            /** 删除库存盘点-行事件 */
            removeInventoryCountingLineEvent: Function;
            /** 选择库存盘点行物料事件 */
            chooseInventoryCountingLineMaterialEvent: Function;
            /** 选择库存盘点行仓库事件 */
            chooseInventoryCountingLineWarehouseEvent: Function;
            /** 选择库存盘点行物料批次事件 */
            chooseInventoryCountingLineMaterialBatchEvent: Function;
            /** 选择库存盘点行物料序列事件 */
            chooseInventoryCountingLineMaterialSerialEvent: Function;
            /** 选择库存盘点库存记录事件 */
            chooseInventoryCountingMaterialInventoryEvent: Function;
            /** 显示数据 */
            showInventoryCountingLines(datas: bo.InventoryCountingLine[]): void;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 刷新库存 */
            refreshMaterialInventoryEvent: Function;
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
declare namespace materials {
    namespace app {
        /** 查看应用-库存盘点 */
        class InventoryCountingViewApp extends ibas.BOViewService<IInventoryCountingViewView, bo.InventoryCounting> {
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
            run(data: bo.InventoryCounting): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-库存盘点 */
        interface IInventoryCountingViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showInventoryCounting(data: bo.InventoryCounting): void;
            /** 显示数据-库存盘点-行 */
            showInventoryCountingLines(datas: bo.InventoryCountingLine[]): void;
        }
        /** 库存盘点连接服务映射 */
        class InventoryCountingLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        class MaterialSpecificationFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-物料规格 */
        class MaterialSpecificationListApp extends ibas.BOListApplication<IMaterialSpecificationListView, bo.MaterialSpecification> {
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
            protected newData(smart?: boolean): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.MaterialSpecification): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialSpecification): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.MaterialSpecification | bo.MaterialSpecification[]): void;
            /** 规格模板 */
            protected specification(): void;
        }
        /** 视图-物料规格 */
        interface IMaterialSpecificationListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 规格模板事件 */
            specificationEvent: Function;
            /** 显示数据 */
            showData(datas: bo.MaterialSpecification[]): void;
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
declare namespace materials {
    namespace app {
        /** 选择应用-物料规格 */
        class MaterialSpecificationChooseApp extends ibas.BOChooseService<IMaterialSpecificationChooseView, bo.MaterialSpecification> {
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
        /** 视图-物料规格 */
        interface IMaterialSpecificationChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.MaterialSpecification[]): void;
        }
        /** 物料规格选择服务映射 */
        class MaterialSpecificationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.MaterialSpecification>;
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
declare namespace materials {
    namespace app {
        /** 查看应用-物料规格 */
        class MaterialSpecificationViewApp extends ibas.BOViewService<IMaterialSpecificationViewView, bo.MaterialSpecification> {
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
            run(data: bo.MaterialSpecification): void;
            run(criteria: ibas.Criteria | string): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
            private save;
        }
        /** 视图-物料规格 */
        interface IMaterialSpecificationViewView extends ibas.IBOViewView {
            /** 保存事件 */
            saveEvent: Function;
            /** 显示规格 */
            showSpecificationTree(data: MaterialSpecificationTree): void;
        }
        /** 物料规格连接服务映射 */
        class MaterialSpecificationLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOLinkService;
        }
        class MaterialSpecificationTree implements bo.ISpecificationTree {
            constructor(data: bo.MaterialSpecification);
            data: bo.MaterialSpecification;
            /** 模板 */
            get template(): number;
            set template(value: number);
            /** 名称 */
            get name(): string;
            set name(value: string);
            /** 备注 */
            get remarks(): string;
            set remarks(value: string);
            /** 项目集合 */
            items: ibas.IList<bo.ISpecificationTreeItem>;
            /** 转换 */
            convert(): bo.MaterialSpecification;
        }
        class MaterialSpecificationTreeItem implements bo.ISpecificationTreeItem {
            constructor(data: bo.MaterialSpecificationItem);
            data: bo.MaterialSpecificationItem;
            /** 标记 */
            get sign(): string;
            set sign(value: string);
            /** 描述 */
            get description(): string;
            set description(value: string);
            /** 可编辑 */
            editable: boolean;
            /** 必填的 */
            required: boolean;
            /** 内容 */
            get content(): string;
            set content(value: string);
            /** 关联 */
            get associated(): string;
            set associated(value: string);
            /** 备注 */
            get note(): string;
            set note(value: string);
            /** 可选值 */
            vaildValues: ibas.IList<bo.ISpecificationTreeItemValue>;
            /** 项目集合 */
            items: ibas.IList<bo.ISpecificationTreeItem>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料规格 */
        class MaterialSpecificationEditApp extends ibas.BOEditApplication<IMaterialSpecificationEditView, bo.MaterialSpecification> {
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
            run(data: bo.MaterialSpecification): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加物料规格-项目事件 */
            protected addMaterialSpecificationItem(): void;
            /** 删除物料规格-项目事件 */
            protected removeMaterialSpecificationItem(items: bo.MaterialSpecificationItem[]): void;
            /** 选择业务伙伴事件 */
            private chooseBusinessPartner;
        }
        /** 视图-物料规格 */
        interface IMaterialSpecificationEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialSpecification(data: bo.MaterialSpecification): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加物料规格-项目事件 */
            addMaterialSpecificationItemEvent: Function;
            /** 删除物料规格-项目事件 */
            removeMaterialSpecificationItemEvent: Function;
            /** 选择业务伙伴事件 */
            chooseBusinessPartnerEvent: Function;
            /** 显示数据 */
            showMaterialSpecificationItems(datas: bo.MaterialSpecificationItem[]): void;
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
declare namespace materials {
    namespace app {
        class SpecificationFunc extends ibas.ModuleFunction {
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
declare namespace materials {
    namespace app {
        /** 列表应用-规格模板 */
        class SpecificationListApp extends ibas.BOListApplication<ISpecificationListView, bo.Specification> {
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
            protected viewData(data: bo.Specification): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Specification): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Specification | bo.Specification[]): void;
        }
        /** 视图-规格模板 */
        interface ISpecificationListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Specification[]): void;
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
declare namespace materials {
    namespace app {
        /** 选择应用-规格模板 */
        class SpecificationChooseApp extends ibas.BOChooseService<ISpecificationChooseView, bo.Specification> {
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
        /** 视图-规格模板 */
        interface ISpecificationChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Specification[]): void;
        }
        /** 规格模板选择服务映射 */
        class SpecificationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Specification>;
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
declare namespace materials {
    namespace app {
        /** 编辑应用-规格模板 */
        class SpecificationEditApp extends ibas.BOEditApplication<ISpecificationEditView, bo.Specification> {
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
            run(data: bo.Specification): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加规格模板-项目事件 */
            protected addSpecificationItem(parent: bo.SpecificationItem): void;
            /** 删除规格模板-项目事件 */
            protected removeSpecificationItem(items: bo.SpecificationItem[]): void;
            private chooseSpecificationTarget;
            private chooseSpecificationAssigned;
            private editSpecificationItemData;
            /** 编辑属性值事件 */
            private editSpecificationItem;
            /** 添加属性值事件 */
            private addSpecificationItemValue;
            /** 删除属性值事件 */
            private removeSpecificationItemValue;
        }
        /** 视图-规格模板 */
        interface ISpecificationEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSpecification(data: bo.Specification): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加规格模板-项目事件 */
            addSpecificationItemEvent: Function;
            /** 删除规格模板-项目事件 */
            removeSpecificationItemEvent: Function;
            /** 选择规格模板目标事件 */
            chooseSpecificationTargetEvent: Function;
            /** 选择规格模板分配事件 */
            chooseSpecificationAssignedEvent: Function;
            /** 显示数据 */
            showSpecificationItems(datas: bo.SpecificationItem[]): void;
            /** 编辑规格模事件 */
            editSpecificationItemEvent: Function;
            /** 添加规格模板-项目值事件 */
            addSpecificationItemValueEvent: Function;
            /** 删除规格模板-项目值事件 */
            removeSpecificationItemValueEvent: Function;
            /** 显示数据 */
            showSpecificationItemValues(datas: bo.SpecificationItemValue[]): void;
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
declare namespace materials {
    namespace app {
        /** 查看应用-规格模板 */
        class SpecificationTreeService extends ibas.ServiceWithResultApplication<ISpecificationTreeView, ISpecificationTreeContract, bo.IMaterialSpecification> {
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
            private specification;
            private extraData;
            /** 运行服务 */
            runService(contract: ISpecificationTreeContract): void;
            private showSpecification;
            private using;
            private save;
        }
        /** 视图-规格模板 */
        interface ISpecificationTreeView extends ibas.IBOView {
            /** 显示规格 */
            showSpecifications(datas: bo.SpecificationTree[]): void;
            /** 使用事件 */
            usingEvent: Function;
            /** 保存事件 */
            saveEvent: Function;
            /** 显示规格 */
            showSpecificationTree(data: bo.SpecificationTree): void;
        }
        /** 规格模板连接服务映射 */
        class SpecificationTreeServiceMapping extends ibas.ServiceMapping {
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
declare namespace materials {
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
