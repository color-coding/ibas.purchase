/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace accounting {
    /** 模块-标识 */
    const CONSOLE_ID: string;
    /** 模块-标识 */
    const CONSOLE_DATA_ID: string;
    /** 模块-名称 */
    const CONSOLE_NAME: string;
    /** 模块-名称 */
    const CONSOLE_DATA_NAME: string;
    /** 模块-版本 */
    const CONSOLE_VERSION: string;
    namespace config {
        /** 配置项目-启用分支 */
        const CONFIG_ITEM_ENABLE_BRANCH: string;
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        function get<T>(key: string, defalut?: T): T;
        /**
         * 是否启用分支
         */
        function isEnableBranch(): boolean;
        /** 配置项目-启用维度 */
        const CONFIG_ITEM_ENABLE_DIMENSION: string;
        /**
         * 是否启用维度
         * @param dim 维度
         */
        function isEnableDimension(dim: app.emDimensionType): boolean;
        /** 配置项目-本币 */
        const CONFIG_ITEM_LOCAL_CURRENCY: string;
        /** 配置项目-系统币 */
        const CONFIG_ITEM_SYSTEM_CURRENCY: string;
        /**
         * 获取币种
         * @param type 类型
         */
        function currency(type: "LOCAL" | "SYSTEM"): string;
    }
    namespace bo {
        /** 业务仓库名称 */
        const BO_REPOSITORY_ACCOUNTING: string;
        /** 业务对象编码-期间类型 */
        const BO_CODE_PERIODCATEGORY: string;
        /** 业务对象编码-过账期间 */
        const BO_CODE_POSTINGPERIOD: string;
        /** 业务对象编码-项目 */
        const BO_CODE_PROJECT: string;
        /** 业务对象编码-维度 */
        const BO_CODE_DIMENSION: string;
        /** 业务对象编码-税收组 */
        const BO_CODE_TAXGROUP: string;
        /** 业务对象编码-费用结构 */
        const BO_CODE_COSTSTRUCTURE: string;
        /** 业务对象编码-费用项目 */
        const BO_CODE_COSTITEM: string;
        /** 业务对象编码-费用结构节点 */
        const BO_CODE_COSTSTRUCTURE_NODE: string;
        /** 业务对象编码-货币 */
        const BO_CODE_CURRENCY: string;
        /** 业务对象编码-科目 */
        const BO_CODE_ACCOUNT: string;
        /** 业务对象编码-分支 */
        const BO_CODE_BRANCH: string;
        /** 业务对象编码-日记账分录 */
        const BO_CODE_JOURNALENTRY: string;
        /** 业务对象编码-分类账 */
        const BO_CODE_LEDGERACCOUNT: string;
        /** 业务对象编码-期间-分类账 */
        const BO_CODE_PERIODLEDGERACCOUNT: string;
        /** 业务对象编码-分类账条件属性 */
        const BO_CODE_LEDGERCONDITIONPROPERTY: string;
        /** 业务对象编码-银行 */
        const BO_CODE_BANK: string;
        /** 业务对象编码-银行账户 */
        const BO_CODE_BANKACCOUNT: string;
        /**
         * 期间状态
         */
        enum emPeriodStatus {
            /** 打开 */
            OPEN = 0,
            /** 关闭 */
            LOCKED = 1,
            /** 结算 */
            CLOSED = 2
        }
        /**
         * 维度源
         */
        enum emDimensionSource {
            /** 自由文本 */
            TEXT = 0,
            /** 选择服务 */
            CHOOSE_LIST = 1
        }
        /**
         * 税收组类型
         */
        enum emTaxGroupCategory {
            /** 销项税 */
            OUTPUT = 0,
            /** 进项税 */
            INPUT = 1
        }
        /**
         * 费用状态
         */
        enum emCostStatus {
            /** 打开 */
            OPEN = 0,
            /** 冻结 */
            FROZEN = 1,
            /** 关闭 */
            CLOSED = 2
        }
        enum emEntityType {
            /** 组织/部门 */
            ORGANIZATION = 0,
            /** 项目 */
            PROJECT = 1
        }
    }
    namespace app {
        /**
         * 维度类型
         */
        enum emDimensionType {
            DIMENSION_1 = "DIM01",
            DIMENSION_2 = "DIM02",
            DIMENSION_3 = "DIM03",
            DIMENSION_4 = "DIM04",
            DIMENSION_5 = "DIM05"
        }
        /**
         * 总账科目条件支持属性
         */
        enum emLedgerAccountConditionProperty {
            /** 业务对象编码 */
            ObjectCode = "ObjectCode",
            /** 数据所有者 */
            DataOwner = "DataOwner",
            /** 数据所属组织 */
            Organization = "Organization",
            /** 单据类型 */
            OrderType = "OrderType",
            /** 项目 */
            Project = "Project",
            /** 税 */
            Tax = "Tax",
            /** 分支 */
            Branch = "Branch",
            /** 客户 */
            Customer = "Customer",
            /** 供应商 */
            Supplier = "Supplier",
            /** 客户组 */
            CustomerGroup = "CustomerGroup",
            /** 供应商组 */
            SupplierGroup = "SupplierGroup",
            /** 物料 */
            Material = "Material",
            /** 物料组 */
            MaterialGroup = "MaterialGroup",
            /** 仓库 */
            Warehouse = "Warehouse",
            /** 收付款方式 */
            PaymentMethod = "PaymentMethod",
            /** 交易识别码 */
            TradeId = "TradeId"
        }
        /** 维度服务契约 */
        interface IDimensionDataServiceContract extends ibas.IServiceContract {
            /** 维度类型 */
            type: emDimensionType | string;
        }
        /** 维度服务代理 */
        class DimensionDataServiceProxy extends ibas.ServiceProxy<IDimensionDataServiceContract> {
        }
        interface ILedgerAccountSetting {
            /** 分类账 */
            ledger: string;
            /** 条件 */
            conditions: ibas.ICondition[];
            /** 科目 */
            account?: string;
        }
        interface ILedgerAccountCategory {
            /** 种类 */
            category: string;
            /** 条件 */
            conditions: ibas.ICondition[];
        }
        /** 分类账设置契约 */
        interface ILedgerAccountSettingContract extends ibas.IServiceContract {
            /** 业务对象 */
            objectCode: string;
            /** 描述 */
            description: string;
            /** 设置内容 */
            settings?: ILedgerAccountSetting[] | ILedgerAccountCategory;
        }
        /** 分类账设置服务代理 */
        class LedgerAccountSettingServiceProxy extends ibas.ServiceProxy<ILedgerAccountSettingContract> {
        }
        /** 查询条件 */
        namespace conditions {
            namespace taxgroup {
                /** 默认查询条件 */
                function create(category?: bo.emTaxGroupCategory): ibas.IList<ibas.ICondition>;
            }
            namespace coststructurenode {
                function create(type: bo.emEntityType, entity: string, date?: Date | string): ibas.IList<ibas.ICondition>;
            }
            namespace account {
                /** 默认查询条件 */
                function create(): ibas.IList<ibas.ICondition>;
            }
        }
    }
    namespace taxrate {
        /**
         * 分配税率
         * @param taxCode 税码
         * @param onCompeleted 完成
         */
        function assign(taxCode: string, onCompeleted: (rate: number) => void): void;
        /**
         * 获取税组
         * @param category 类型
         * @param onCompeleted 完成
         */
        function gain(category: bo.emTaxGroupCategory, onCompeleted: (tax: {
            code: string;
            name: string;
            rate: number;
        }[]) => void): void;
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace accounting {
    namespace bo {
        /** 期间类型 */
        interface IPeriodCategory extends ibas.IBOSimple {
            /** 名称 */
            name: string;
            /** 状态 */
            status: emPeriodStatus;
            /** 起始日期 */
            startDate: Date;
            /** 结束日期 */
            endDate: Date;
            /** 编号 */
            objectKey: number;
            /** 类型 */
            objectCode: string;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 编号系列 */
            series: number;
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
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 过账期间 */
        interface IPostingPeriod extends ibas.IBOSimple {
            /** 名称 */
            name: string;
            /** 类别 */
            category: number;
            /** 序号 */
            order: number;
            /** 状态 */
            status: emPeriodStatus;
            /** 起始日期 */
            startDate: Date;
            /** 结束日期 */
            endDate: Date;
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
            /** 备注 */
            remarks: string;
            /** 过账期间-项目集合 */
            postingPeriodItems: IPostingPeriodItems;
        }
        /** 过账期间-项目 集合 */
        interface IPostingPeriodItems extends ibas.IBusinessObjects<IPostingPeriodItem> {
            /** 创建并添加子项 */
            create(): IPostingPeriodItem;
        }
        /** 过账期间-项目 */
        interface IPostingPeriodItem extends ibas.IBOSimpleLine {
            /** 单据类型 */
            documentType: string;
            /** 状态 */
            status: emPeriodStatus;
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
declare namespace accounting {
    namespace bo {
        /** 项目 */
        interface IProject extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emDocumentStatus;
            /** 开始日期 */
            startDate: Date;
            /** 结束日期 */
            closeDate: Date;
            /** 项目经理 */
            manager: number;
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 团队成员 */
            teamMembers: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 维度 */
        interface IDimension extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 来源类型 */
            sourceType: emDimensionSource;
            /** 来源 */
            source: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
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
declare namespace accounting {
    namespace bo {
        /** 税收组 */
        interface ITaxGroup extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 类型 */
            category: emTaxGroupCategory;
            /** 税率 */
            rate: number;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
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
declare namespace accounting {
    namespace bo {
        /** 费用项目 */
        interface ICostItem extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 虚拟的 */
            phantom: ibas.emYesNo;
            /** 父项 */
            parents: string;
            /** 排序码 */
            sorts: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 备注 */
            remarks: string;
            /** 开票内容 */
            invoiceContent: string;
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
declare namespace accounting {
    namespace bo {
        /** 费用结构 */
        interface ICostStructure extends ibas.IBOSimple {
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
            /** 主体类型 */
            entityType: emEntityType;
            /** 主体编码 */
            entityCode: string;
            /** 名称 */
            name: string;
            /** 状态 */
            status: emCostStatus;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 预算可结转 */
            transferable: ibas.emYesNo;
            /** 起始日期 */
            startDate: Date;
            /** 结束日期 */
            endDate: Date;
            /** 预算金额 */
            budget: number;
            /** 已发生金额 */
            incurred: number;
            /** 已锁定金额 */
            locked: number;
            /** 货币 */
            currency: string;
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 备注 */
            remarks: string;
            /** 费用结构-节点集合 */
            costStructureNodes: ICostStructureNodes;
        }
        /** 费用结构-节点 集合 */
        interface ICostStructureNodes extends ibas.IBusinessObjects<ICostStructureNode> {
            /** 创建并添加子项 */
            create(): ICostStructureNode;
        }
        /** 费用结构-节点 */
        interface ICostStructureNode extends ibas.IBOSimpleLine {
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
            /** 父项 */
            parentId: number;
            /** 顺序 */
            visOrder: number;
            /** 标识 */
            sign: string;
            /** 名称 */
            name: string;
            /** 状态 */
            status: emCostStatus;
            /** 预算金额 */
            budget: number;
            /** 货币 */
            currency: string;
            /** 已发生金额 */
            incurred: number;
            /** 已锁定金额 */
            locked: number;
            /** 阻止超预算 */
            preventOver: ibas.emYesNo;
            /** 限制费用项目 */
            restrictedItem: ibas.emYesNo;
            /** 团队成员 */
            teamMembers: string;
            /** 备注 */
            remarks: string;
            /** 费用结构-节点项目集合 */
            costStructureNodeItems: ICostStructureNodeItems;
            /** 费用结构-节点集合 */
            costStructureNodes: ICostStructureNodes;
        }
        /** 费用结构-节点项目 集合 */
        interface ICostStructureNodeItems extends ibas.IBusinessObjects<ICostStructureNodeItem> {
            /** 创建并添加子项 */
            create(): ICostStructureNodeItem;
        }
        /** 费用结构-节点项目 */
        interface ICostStructureNodeItem extends ibas.IBOSimpleLine {
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
            /** 节点 */
            nodeId: number;
            /** 项目 */
            item: string;
            /** 名称 */
            name: string;
            /** 预算金额 */
            budget: number;
            /** 货币 */
            currency: string;
            /** 已发生金额 */
            incurred: number;
            /** 已锁定金额 */
            locked: number;
            /** 阻止超预算 */
            preventOver: ibas.emYesNo;
            /** 追加的项目 */
            additional: ibas.emYesNo;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 货币 */
        interface ICurrency extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 系统币 */
            system: ibas.emYesNo;
            /** 本币 */
            local: ibas.emYesNo;
            /** ISO代码 */
            iso: string;
            /** 外文名称 */
            foreignName: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 科目 */
        interface IAccount extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 上级科目 */
            parent: string;
            /** 层级 */
            level: number;
            /** 外部编码 */
            external: string;
            /** 机密 */
            protected: ibas.emYesNo;
            /** 活动科目 */
            active: ibas.emYesNo;
            /** 控制科目 */
            control: ibas.emYesNo;
            /** 现金科目 */
            cash: ibas.emYesNo;
            /** 现金流相关 */
            cashFlowRelevant: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 余额 */
            balance: number;
            /** 币种 */
            currency: string;
            /** 分支 */
            branch: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 分支 */
        interface IBranch extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 主要的 */
            main: ibas.emYesNo;
            /** 客户 */
            customer: string;
            /** 供应商 */
            supplier: string;
            /** 仓库 */
            warehouse: string;
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
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
            /** 服务系列 */
            series: number;
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
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 日记账分录 */
        interface IJournalEntry extends ibas.IBODocument {
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
            /** 分支 */
            branch: string;
            /** 项目代码 */
            project: string;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据总计 */
            documentTotal: number;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 参考3 */
            reference3: string;
            /** 备注 */
            remarks: string;
            /** 日记账分录-行集合 */
            journalEntryLines: IJournalEntryLines;
        }
        /** 日记账分录-行 集合 */
        interface IJournalEntryLines extends ibas.IBusinessObjects<IJournalEntryLine> {
            /** 创建并添加子项 */
            create(): IJournalEntryLine;
        }
        /** 日记账分录-行 */
        interface IJournalEntryLine extends ibas.IBODocumentLine {
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
            /** 科目 */
            account: string;
            /** 业务伙伴/科目代码 */
            shortName: string;
            /** 借方金额 */
            debit: number;
            /** 贷方金额 */
            credit: number;
            /** 货币 */
            currency: string;
            /** 借方金额（系统） */
            systemDebit: number;
            /** 贷方金额（系统） */
            systemCredit: number;
            /** 系统币 */
            systemCurrency: string;
            /** 系统币汇率 */
            systemRate: number;
            /** 借方金额（本币） */
            localDebit: number;
            /** 贷方金额（本币） */
            localCredit: number;
            /** 本币 */
            localCurrency: string;
            /** 本币汇率 */
            localRate: number;
            /** 税码 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 基础总额 */
            baseTotal: number;
            /** 分支 */
            branch: string;
            /** 项目代码 */
            project: string;
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
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 参考3 */
            reference3: string;
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
declare namespace accounting {
    namespace bo {
        /** 期间-分类账 */
        interface IPeriodLedgerAccount extends ibas.IBOSimple {
            /** 名称 */
            name: string;
            /** 期间 */
            period: number;
            /** 分类 */
            ledger: string;
            /** 序号 */
            order: number;
            /** 激活 */
            activated: ibas.emYesNo;
            /** 科目 */
            account: string;
            /** 设置 */
            settings: string;
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
            /** 备注 */
            remarks: string;
            /** 期间-分类账-条件集合 */
            periodLedgerAccountConditions: IPeriodLedgerAccountConditions;
        }
        /** 期间-分类账-条件 集合 */
        interface IPeriodLedgerAccountConditions extends ibas.IBusinessObjects<IPeriodLedgerAccountCondition> {
            /** 创建并添加子项 */
            create(): IPeriodLedgerAccountCondition;
        }
        /** 期间-分类账-条件 */
        interface IPeriodLedgerAccountCondition extends ibas.IBOSimpleLine {
            /** 编号 */
            objectKey: number;
            /** 行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 显示顺序 */
            visOrder: number;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
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
            /** 开括号 */
            bracketOpen: number;
            /** 关系 */
            relationship: ibas.emConditionRelationship;
            /** 属性 */
            propertyName: string;
            /** 方法 */
            operation: ibas.emConditionOperation;
            /** 值 */
            value: string;
            /** 闭括号 */
            bracketClose: number;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 分类账 */
        interface ILedgerAccount extends ibas.IBOSimple {
            /** 标识 */
            sign: string;
            /** 组 */
            group: string;
            /** 描述 */
            description: string;
            /** 设置 */
            settings: string;
            /** 编号 */
            objectKey: number;
            /** 类型 */
            objectCode: string;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 编号系列 */
            series: number;
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
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 分类账条件属性 */
        interface ILedgerConditionProperty extends ibas.IBOSimple {
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 过滤器 */
            filters: string;
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
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 银行 */
        interface IBank extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 标识符 */
            swiftCode: string;
            /** 凭证编号 */
            docEntry: number;
            /** 类型 */
            objectCode: string;
            /** 编号系列 */
            series: number;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 银行账户 */
        interface IBankAccount extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 银行 */
            bank: string;
            /** 开户支行 */
            openingBank: string;
            /** 账户类型 */
            accountType: string;
            /** 凭证编号 */
            docEntry: number;
            /** 类型 */
            objectCode: string;
            /** 编号系列 */
            series: number;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
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
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 删除的 */
            deleted: ibas.emYesNo;
            /** 分支 */
            branch: string;
            /** 备注 */
            remarks: string;
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
declare namespace accounting {
    namespace bo {
        /** 业务仓库 */
        interface IBORepositoryAccounting extends ibas.IBORepositoryApplication {
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
             * 查询 期间类型
             * @param fetcher 查询者
             */
            fetchPeriodCategory(fetcher: ibas.IFetchCaller<bo.IPeriodCategory>): void;
            /**
             * 保存 期间类型
             * @param saver 保存者
             */
            savePeriodCategory(saver: ibas.ISaveCaller<bo.IPeriodCategory>): void;
            /**
             * 查询 过账期间
             * @param fetcher 查询者
             */
            fetchPostingPeriod(fetcher: ibas.IFetchCaller<bo.IPostingPeriod>): void;
            /**
             * 保存 过账期间
             * @param saver 保存者
             */
            savePostingPeriod(saver: ibas.ISaveCaller<bo.IPostingPeriod>): void;
            /**
             * 查询 项目
             * @param fetcher 查询者
             */
            fetchProject(fetcher: ibas.IFetchCaller<bo.IProject>): void;
            /**
             * 保存 项目
             * @param saver 保存者
             */
            saveProject(saver: ibas.ISaveCaller<bo.IProject>): void;
            /**
             * 查询 维度
             * @param fetcher 查询者
             */
            fetchDimension(fetcher: ibas.IFetchCaller<bo.IDimension>): void;
            /**
             * 保存 维度
             * @param saver 保存者
             */
            saveDimension(saver: ibas.ISaveCaller<bo.IDimension>): void;
            /**
             * 查询 税收组
             * @param fetcher 查询者
             */
            fetchTaxGroup(fetcher: ibas.IFetchCaller<bo.ITaxGroup>): void;
            /**
             * 保存 税收组
             * @param saver 保存者
             */
            saveTaxGroup(saver: ibas.ISaveCaller<bo.ITaxGroup>): void;
            /**
             * 查询 费用项目
             * @param fetcher 查询者
             */
            fetchCostItem(fetcher: ibas.IFetchCaller<bo.ICostItem>): void;
            /**
             * 保存 费用项目
             * @param saver 保存者
             */
            saveCostItem(saver: ibas.ISaveCaller<bo.ICostItem>): void;
            /**
             * 查询 费用结构
             * @param fetcher 查询者
             */
            fetchCostStructure(fetcher: ibas.IFetchCaller<bo.ICostStructure>): void;
            /**
             * 保存 费用结构
             * @param saver 保存者
             */
            saveCostStructure(saver: ibas.ISaveCaller<bo.ICostStructure>): void;
            /**
             * 查询 货币
             * @param fetcher 查询者
             */
            fetchCurrency(fetcher: ibas.IFetchCaller<bo.ICurrency>): void;
            /**
             * 保存 货币
             * @param saver 保存者
             */
            saveCurrency(saver: ibas.ISaveCaller<bo.ICurrency>): void;
            /**
             * 查询 科目
             * @param fetcher 查询者
             */
            fetchAccount(fetcher: ibas.IFetchCaller<bo.IAccount>): void;
            /**
             * 保存 科目
             * @param saver 保存者
             */
            saveAccount(saver: ibas.ISaveCaller<bo.IAccount>): void;
            /**
             * 查询 分支
             * @param fetcher 查询者
             */
            fetchBranch(fetcher: ibas.IFetchCaller<bo.IBranch>): void;
            /**
             * 保存 分支
             * @param saver 保存者
             */
            saveBranch(saver: ibas.ISaveCaller<bo.IBranch>): void;
            /**
             * 查询 分类账
             * @param fetcher 查询者
             */
            fetchLedgerAccount(fetcher: ibas.IFetchCaller<bo.ILedgerAccount>): void;
            /**
             * 查询 期间-分类账
             * @param fetcher 查询者
             */
            fetchPeriodLedgerAccount(fetcher: ibas.IFetchCaller<bo.IPeriodLedgerAccount>): void;
            /**
             * 保存 期间-分类账
             * @param saver 保存者
             */
            savePeriodLedgerAccount(saver: ibas.ISaveCaller<bo.IPeriodLedgerAccount>): void;
            /**
             * 查询 分类账条件属性
             * @param fetcher 查询者
             */
            fetchLedgerConditionProperty(fetcher: ibas.IFetchCaller<bo.ILedgerConditionProperty>): void;
            /**
             * 查询 银行
             * @param fetcher 查询者
             */
            fetchBank(fetcher: ibas.IFetchCaller<bo.IBank>): void;
            /**
             * 保存 银行
             * @param saver 保存者
             */
            saveBank(saver: ibas.ISaveCaller<bo.IBank>): void;
            /**
             * 查询 银行账户
             * @param fetcher 查询者
             */
            fetchBankAccount(fetcher: ibas.IFetchCaller<bo.IBankAccount>): void;
            /**
             * 保存 银行账户
             * @param saver 保存者
             */
            saveBankAccount(saver: ibas.ISaveCaller<bo.IBankAccount>): void;
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
declare namespace accounting {
    namespace bo {
        /** 期间类型 */
        class PeriodCategory extends ibas.BOSimple<PeriodCategory> implements IPeriodCategory {
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
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): emPeriodStatus;
            /** 设置-状态 */
            set status(value: emPeriodStatus);
            /** 映射的属性名称-起始日期 */
            static PROPERTY_STARTDATE_NAME: string;
            /** 获取-起始日期 */
            get startDate(): Date;
            /** 设置-起始日期 */
            set startDate(value: Date);
            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string;
            /** 获取-结束日期 */
            get endDate(): Date;
            /** 设置-结束日期 */
            set endDate(value: Date);
            /** 映射的属性名称-编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-编号 */
            get objectKey(): number;
            /** 设置-编号 */
            set objectKey(value: number);
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
            /** 映射的属性名称-编号系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-编号系列 */
            get series(): number;
            /** 设置-编号系列 */
            set series(value: number);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 过账期间 */
        class PostingPeriod extends ibas.BOSimple<PostingPeriod> implements IPostingPeriod {
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
            /** 映射的属性名称-类别 */
            static PROPERTY_CATEGORY_NAME: string;
            /** 获取-类别 */
            get category(): number;
            /** 设置-类别 */
            set category(value: number);
            /** 映射的属性名称-序号 */
            static PROPERTY_ORDER_NAME: string;
            /** 获取-序号 */
            get order(): number;
            /** 设置-序号 */
            set order(value: number);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): emPeriodStatus;
            /** 设置-状态 */
            set status(value: emPeriodStatus);
            /** 映射的属性名称-起始日期 */
            static PROPERTY_STARTDATE_NAME: string;
            /** 获取-起始日期 */
            get startDate(): Date;
            /** 设置-起始日期 */
            set startDate(value: Date);
            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string;
            /** 获取-结束日期 */
            get endDate(): Date;
            /** 设置-结束日期 */
            set endDate(value: Date);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-过账期间-项目集合 */
            static PROPERTY_POSTINGPERIODITEMS_NAME: string;
            /** 获取-过账期间-项目集合 */
            get postingPeriodItems(): PostingPeriodItems;
            /** 设置-过账期间-项目集合 */
            set postingPeriodItems(value: PostingPeriodItems);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 过账期间-项目 集合 */
        class PostingPeriodItems extends ibas.BusinessObjects<PostingPeriodItem, PostingPeriod> implements IPostingPeriodItems {
            /** 创建并添加子项 */
            create(): PostingPeriodItem;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: PostingPeriodItem, name: string): void;
        }
        /** 过账期间-项目 */
        class PostingPeriodItem extends ibas.BOSimpleLine<PostingPeriodItem> implements IPostingPeriodItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-单据类型 */
            static PROPERTY_DOCUMENTTYPE_NAME: string;
            /** 获取-单据类型 */
            get documentType(): string;
            /** 设置-单据类型 */
            set documentType(value: string);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): emPeriodStatus;
            /** 设置-状态 */
            set status(value: emPeriodStatus);
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
declare namespace accounting {
    namespace bo {
        /** 项目 */
        class Project extends ibas.BOMasterData<Project> implements IProject {
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
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emDocumentStatus;
            /** 设置-状态 */
            set status(value: ibas.emDocumentStatus);
            /** 映射的属性名称-开始日期 */
            static PROPERTY_STARTDATE_NAME: string;
            /** 获取-开始日期 */
            get startDate(): Date;
            /** 设置-开始日期 */
            set startDate(value: Date);
            /** 映射的属性名称-结束日期 */
            static PROPERTY_CLOSEDATE_NAME: string;
            /** 获取-结束日期 */
            get closeDate(): Date;
            /** 设置-结束日期 */
            set closeDate(value: Date);
            /** 映射的属性名称-项目经理 */
            static PROPERTY_MANAGER_NAME: string;
            /** 获取-项目经理 */
            get manager(): number;
            /** 设置-项目经理 */
            set manager(value: number);
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
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-删除的 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-删除的 */
            get deleted(): ibas.emYesNo;
            /** 设置-删除的 */
            set deleted(value: ibas.emYesNo);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 维度 */
        class Dimension extends ibas.BOMasterData<Dimension> implements IDimension {
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
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-来源类型 */
            static PROPERTY_SOURCETYPE_NAME: string;
            /** 获取-来源类型 */
            get sourceType(): emDimensionSource;
            /** 设置-来源类型 */
            set sourceType(value: emDimensionSource);
            /** 映射的属性名称-来源 */
            static PROPERTY_SOURCE_NAME: string;
            /** 获取-来源 */
            get source(): string;
            /** 设置-来源 */
            set source(value: string);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 税收组 */
        class TaxGroup extends ibas.BOMasterData<TaxGroup> implements ITaxGroup {
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
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string;
            /** 获取-生效日期 */
            get validDate(): Date;
            /** 设置-生效日期 */
            set validDate(value: Date);
            /** 映射的属性名称-类型 */
            static PROPERTY_CATEGORY_NAME: string;
            /** 获取-类型 */
            get category(): emTaxGroupCategory;
            /** 设置-类型 */
            set category(value: emTaxGroupCategory);
            /** 映射的属性名称-税率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-税率 */
            get rate(): number;
            /** 设置-税率 */
            set rate(value: number);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 费用项目 */
        class CostItem extends ibas.BOMasterData<CostItem> implements ICostItem {
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
            /** 映射的属性名称-排序码 */
            static PROPERTY_SORTS_NAME: string;
            /** 获取-排序码 */
            get sorts(): string;
            /** 设置-排序码 */
            set sorts(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-删除的 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-删除的 */
            get deleted(): ibas.emYesNo;
            /** 设置-删除的 */
            set deleted(value: ibas.emYesNo);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-开票内容 */
            static PROPERTY_INVOICECONTENT_NAME: string;
            /** 获取-开票内容 */
            get invoiceContent(): string;
            /** 设置-开票内容 */
            set invoiceContent(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 费用结构 */
        class CostStructure extends ibas.BOSimple<CostStructure> implements ICostStructure {
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
            /** 映射的属性名称-主体类型 */
            static PROPERTY_ENTITYTYPE_NAME: string;
            /** 获取-主体类型 */
            get entityType(): emEntityType;
            /** 设置-主体类型 */
            set entityType(value: emEntityType);
            /** 映射的属性名称-主体编码 */
            static PROPERTY_ENTITYCODE_NAME: string;
            /** 获取-主体编码 */
            get entityCode(): string;
            /** 设置-主体编码 */
            set entityCode(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): emCostStatus;
            /** 设置-状态 */
            set status(value: emCostStatus);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-预算可结转 */
            static PROPERTY_TRANSFERABLE_NAME: string;
            /** 获取-预算可结转 */
            get transferable(): ibas.emYesNo;
            /** 设置-预算可结转 */
            set transferable(value: ibas.emYesNo);
            /** 映射的属性名称-起始日期 */
            static PROPERTY_STARTDATE_NAME: string;
            /** 获取-起始日期 */
            get startDate(): Date;
            /** 设置-起始日期 */
            set startDate(value: Date);
            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string;
            /** 获取-结束日期 */
            get endDate(): Date;
            /** 设置-结束日期 */
            set endDate(value: Date);
            /** 映射的属性名称-预算金额 */
            static PROPERTY_BUDGET_NAME: string;
            /** 获取-预算金额 */
            get budget(): number;
            /** 设置-预算金额 */
            set budget(value: number);
            /** 映射的属性名称-已发生金额 */
            static PROPERTY_INCURRED_NAME: string;
            /** 获取-已发生金额 */
            get incurred(): number;
            /** 设置-已发生金额 */
            set incurred(value: number);
            /** 映射的属性名称-已锁定金额 */
            static PROPERTY_LOCKED_NAME: string;
            /** 获取-已锁定金额 */
            get locked(): number;
            /** 设置-已锁定金额 */
            set locked(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-费用结构-节点集合 */
            static PROPERTY_COSTSTRUCTURENODES_NAME: string;
            /** 获取-费用结构-节点集合 */
            get costStructureNodes(): CostStructureNodes;
            /** 设置-费用结构-节点集合 */
            set costStructureNodes(value: CostStructureNodes);
            /** 可用金额 = 预算金额 - 已发生金额 - 锁定金额 */
            available(): number;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 费用结构-节点 集合 */
        class CostStructureNodes extends ibas.BusinessObjects<CostStructureNode, CostStructure | CostStructureNode> implements ICostStructureNodes {
            /** 创建并添加子项 */
            create(): CostStructureNode;
            protected afterAdd(item: CostStructureNode): void;
        }
        /** 费用结构-节点 */
        class CostStructureNode extends ibas.BOSimpleLine<CostStructureNode> implements ICostStructureNode {
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
            /** 映射的属性名称-父项 */
            static PROPERTY_PARENTID_NAME: string;
            /** 获取-父项 */
            get parentId(): number;
            /** 设置-父项 */
            set parentId(value: number);
            /** 映射的属性名称-顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-顺序 */
            get visOrder(): number;
            /** 设置-顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标识 */
            get sign(): string;
            /** 设置-标识 */
            set sign(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): emCostStatus;
            /** 设置-状态 */
            set status(value: emCostStatus);
            /** 映射的属性名称-预算金额 */
            static PROPERTY_BUDGET_NAME: string;
            /** 获取-预算金额 */
            get budget(): number;
            /** 设置-预算金额 */
            set budget(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-已发生金额 */
            static PROPERTY_INCURRED_NAME: string;
            /** 获取-已发生金额 */
            get incurred(): number;
            /** 设置-已发生金额 */
            set incurred(value: number);
            /** 映射的属性名称-已锁定金额 */
            static PROPERTY_LOCKED_NAME: string;
            /** 获取-已锁定金额 */
            get locked(): number;
            /** 设置-已锁定金额 */
            set locked(value: number);
            /** 映射的属性名称-阻止超预算 */
            static PROPERTY_PREVENTOVER_NAME: string;
            /** 获取-阻止超预算 */
            get preventOver(): ibas.emYesNo;
            /** 设置-阻止超预算 */
            set preventOver(value: ibas.emYesNo);
            /** 映射的属性名称-限制费用项目 */
            static PROPERTY_RESTRICTEDITEM_NAME: string;
            /** 获取-限制费用项目 */
            get restrictedItem(): ibas.emYesNo;
            /** 设置-限制费用项目 */
            set restrictedItem(value: ibas.emYesNo);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-费用结构-节点项目集合 */
            static PROPERTY_COSTSTRUCTURENODEITEMS_NAME: string;
            /** 获取-费用结构-节点项目集合 */
            get costStructureNodeItems(): CostStructureNodeItems;
            /** 设置-费用结构-节点项目集合 */
            set costStructureNodeItems(value: CostStructureNodeItems);
            /** 映射的属性名称-费用结构-节点集合 */
            static PROPERTY_COSTSTRUCTURENODES_NAME: string;
            /** 获取-费用结构-节点集合 */
            get costStructureNodes(): CostStructureNodes;
            /** 设置-费用结构-节点集合 */
            set costStructureNodes(value: CostStructureNodes);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目合计 */
            static PROPERTY_BUDGET_ITEMTOTAL_NAME: string;
            /** 获取-项目合计-预算 */
            get budgetItemTotal(): number;
            /** 设置-项目合计-预算 */
            set budgetItemTotal(value: number);
            /** 映射的属性名称-节点合计 */
            static PROPERTY_BUDGET_NODETOTAL_NAME: string;
            /** 获取-节点合计-预算 */
            get budgetNodeTotal(): number;
            /** 设置-节点合计-预算 */
            set budgetNodeTotal(value: number);
            /** 映射的属性名称-项目合计 */
            static PROPERTY_LOCKED_ITEMTOTAL_NAME: string;
            /** 获取-项目合计-锁定 */
            get lockedItemTotal(): number;
            /** 设置-项目合计-锁定 */
            set lockedItemTotal(value: number);
            /** 映射的属性名称-节点合计 */
            static PROPERTY_LOCKED_NODETOTAL_NAME: string;
            /** 获取-节点合计-锁定 */
            get lockedNodeTotal(): number;
            /** 设置-节点合计-锁定 */
            set lockedNodeTotal(value: number);
            /** 映射的属性名称-项目合计 */
            static PROPERTY_INCURRED_ITEMTOTAL_NAME: string;
            /** 获取-项目合计-占用 */
            get incurredItemTotal(): number;
            /** 设置-项目合计-占用 */
            set incurredItemTotal(value: number);
            /** 映射的属性名称-节点合计 */
            static PROPERTY_INCURRED_NODETOTAL_NAME: string;
            /** 获取-节点合计-占用 */
            get incurredNodeTotal(): number;
            /** 设置-节点合计-占用 */
            set incurredNodeTotal(value: number);
            /** 可用金额 = 预算金额 - 已发生金额 - 锁定金额 */
            available(): number;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 费用结构-节点项目 集合 */
        class CostStructureNodeItems extends ibas.BusinessObjects<CostStructureNodeItem, CostStructureNode> implements ICostStructureNodeItems {
            /** 创建并添加子项 */
            create(): CostStructureNodeItem;
            protected afterAdd(item: CostStructureNodeItem): void;
        }
        /** 费用结构-节点项目 */
        class CostStructureNodeItem extends ibas.BOSimpleLine<CostStructureNodeItem> implements ICostStructureNodeItem {
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
            /** 映射的属性名称-节点 */
            static PROPERTY_NODEID_NAME: string;
            /** 获取-节点 */
            get nodeId(): number;
            /** 设置-节点 */
            set nodeId(value: number);
            /** 映射的属性名称-项目 */
            static PROPERTY_ITEM_NAME: string;
            /** 获取-项目 */
            get item(): string;
            /** 设置-项目 */
            set item(value: string);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-预算金额 */
            static PROPERTY_BUDGET_NAME: string;
            /** 获取-预算金额 */
            get budget(): number;
            /** 设置-预算金额 */
            set budget(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-已发生金额 */
            static PROPERTY_INCURRED_NAME: string;
            /** 获取-已发生金额 */
            get incurred(): number;
            /** 设置-已发生金额 */
            set incurred(value: number);
            /** 映射的属性名称-已锁定金额 */
            static PROPERTY_LOCKED_NAME: string;
            /** 获取-已锁定金额 */
            get locked(): number;
            /** 设置-已锁定金额 */
            set locked(value: number);
            /** 映射的属性名称-阻止超预算 */
            static PROPERTY_PREVENTOVER_NAME: string;
            /** 获取-阻止超预算 */
            get preventOver(): ibas.emYesNo;
            /** 设置-阻止超预算 */
            set preventOver(value: ibas.emYesNo);
            /** 映射的属性名称-追加的项目 */
            static PROPERTY_ADDITIONAL_NAME: string;
            /** 获取-追加的项目 */
            get additional(): ibas.emYesNo;
            /** 设置-追加的项目 */
            set additional(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 货币 */
        class Currency extends ibas.BOMasterData<Currency> implements ICurrency {
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
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-系统币 */
            static PROPERTY_SYSTEM_NAME: string;
            /** 获取-系统币 */
            get system(): ibas.emYesNo;
            /** 设置-系统币 */
            set system(value: ibas.emYesNo);
            /** 映射的属性名称-本币 */
            static PROPERTY_LOCAL_NAME: string;
            /** 获取-本币 */
            get local(): ibas.emYesNo;
            /** 设置-本币 */
            set local(value: ibas.emYesNo);
            /** 映射的属性名称-ISO代码 */
            static PROPERTY_ISO_NAME: string;
            /** 获取-ISO代码 */
            get iso(): string;
            /** 设置-ISO代码 */
            set iso(value: string);
            /** 映射的属性名称-外文名称 */
            static PROPERTY_FOREIGNNAME_NAME: string;
            /** 获取-外文名称 */
            get foreignName(): string;
            /** 设置-外文名称 */
            set foreignName(value: string);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 科目 */
        class Account extends ibas.BOMasterData<Account> implements IAccount {
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
            /** 映射的属性名称-上级科目 */
            static PROPERTY_PARENT_NAME: string;
            /** 获取-上级科目 */
            get parent(): string;
            /** 设置-上级科目 */
            set parent(value: string);
            /** 映射的属性名称-层级 */
            static PROPERTY_LEVEL_NAME: string;
            /** 获取-层级 */
            get level(): number;
            /** 设置-层级 */
            set level(value: number);
            /** 映射的属性名称-外部编码 */
            static PROPERTY_EXTERNAL_NAME: string;
            /** 获取-外部编码 */
            get external(): string;
            /** 设置-外部编码 */
            set external(value: string);
            /** 映射的属性名称-机密 */
            static PROPERTY_PROTECTED_NAME: string;
            /** 获取-机密 */
            get protected(): ibas.emYesNo;
            /** 设置-机密 */
            set protected(value: ibas.emYesNo);
            /** 映射的属性名称-活动科目 */
            static PROPERTY_ACTIVE_NAME: string;
            /** 获取-活动科目 */
            get active(): ibas.emYesNo;
            /** 设置-活动科目 */
            set active(value: ibas.emYesNo);
            /** 映射的属性名称-控制科目 */
            static PROPERTY_CONTROL_NAME: string;
            /** 获取-控制科目 */
            get control(): ibas.emYesNo;
            /** 设置-控制科目 */
            set control(value: ibas.emYesNo);
            /** 映射的属性名称-现金科目 */
            static PROPERTY_CASH_NAME: string;
            /** 获取-现金科目 */
            get cash(): ibas.emYesNo;
            /** 设置-现金科目 */
            set cash(value: ibas.emYesNo);
            /** 映射的属性名称-现金流相关 */
            static PROPERTY_CASHFLOWRELEVANT_NAME: string;
            /** 获取-现金流相关 */
            get cashFlowRelevant(): ibas.emYesNo;
            /** 设置-现金流相关 */
            set cashFlowRelevant(value: ibas.emYesNo);
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
            /** 映射的属性名称-余额 */
            static PROPERTY_BALANCE_NAME: string;
            /** 获取-余额 */
            get balance(): number;
            /** 设置-余额 */
            set balance(value: number);
            /** 映射的属性名称-币种 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-币种 */
            get currency(): string;
            /** 设置-币种 */
            set currency(value: string);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 分支 */
        class Branch extends ibas.BOMasterData<Branch> implements IBranch {
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
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
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
            /** 映射的属性名称-主要的 */
            static PROPERTY_MAIN_NAME: string;
            /** 获取-主要的 */
            get main(): ibas.emYesNo;
            /** 设置-主要的 */
            set main(value: ibas.emYesNo);
            /** 映射的属性名称-客户 */
            static PROPERTY_CUSTOMER_NAME: string;
            /** 获取-客户 */
            get customer(): string;
            /** 设置-客户 */
            set customer(value: string);
            /** 映射的属性名称-供应商 */
            static PROPERTY_SUPPLIER_NAME: string;
            /** 获取-供应商 */
            get supplier(): string;
            /** 设置-供应商 */
            set supplier(value: string);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
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
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-删除的 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-删除的 */
            get deleted(): ibas.emYesNo;
            /** 设置-删除的 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 日记账分录 */
        class JournalEntry extends ibas.BODocument<JournalEntry> implements IJournalEntry {
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
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
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
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
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
            /** 映射的属性名称-参考3 */
            static PROPERTY_REFERENCE3_NAME: string;
            /** 获取-参考3 */
            get reference3(): string;
            /** 设置-参考3 */
            set reference3(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-日记账分录-行集合 */
            static PROPERTY_JOURNALENTRYLINES_NAME: string;
            /** 获取-日记账分录-行集合 */
            get journalEntryLines(): JournalEntryLines;
            /** 设置-日记账分录-行集合 */
            set journalEntryLines(value: JournalEntryLines);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 日记账分录-行 集合 */
        class JournalEntryLines extends ibas.BusinessObjects<JournalEntryLine, JournalEntry> implements IJournalEntryLines {
            /** 创建并添加子项 */
            create(): JournalEntryLine;
        }
        /** 日记账分录-行 */
        class JournalEntryLine extends ibas.BODocumentLine<JournalEntryLine> implements IJournalEntryLine {
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
            /** 映射的属性名称-科目 */
            static PROPERTY_ACCOUNT_NAME: string;
            /** 获取-科目 */
            get account(): string;
            /** 设置-科目 */
            set account(value: string);
            /** 映射的属性名称-业务伙伴/科目代码 */
            static PROPERTY_SHORTNAME_NAME: string;
            /** 获取-业务伙伴/科目代码 */
            get shortName(): string;
            /** 设置-业务伙伴/科目代码 */
            set shortName(value: string);
            /** 映射的属性名称-借方金额 */
            static PROPERTY_DEBIT_NAME: string;
            /** 获取-借方金额 */
            get debit(): number;
            /** 设置-借方金额 */
            set debit(value: number);
            /** 映射的属性名称-贷方金额 */
            static PROPERTY_CREDIT_NAME: string;
            /** 获取-贷方金额 */
            get credit(): number;
            /** 设置-贷方金额 */
            set credit(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-借方金额（系统） */
            static PROPERTY_SYSTEMDEBIT_NAME: string;
            /** 获取-借方金额（系统） */
            get systemDebit(): number;
            /** 设置-借方金额（系统） */
            set systemDebit(value: number);
            /** 映射的属性名称-贷方金额（系统） */
            static PROPERTY_SYSTEMCREDIT_NAME: string;
            /** 获取-贷方金额（系统） */
            get systemCredit(): number;
            /** 设置-贷方金额（系统） */
            set systemCredit(value: number);
            /** 映射的属性名称-系统币 */
            static PROPERTY_SYSTEMCURRENCY_NAME: string;
            /** 获取-系统币 */
            get systemCurrency(): string;
            /** 设置-系统币 */
            set systemCurrency(value: string);
            /** 映射的属性名称-系统币汇率 */
            static PROPERTY_SYSTEMRATE_NAME: string;
            /** 获取-系统币汇率 */
            get systemRate(): number;
            /** 设置-系统币汇率 */
            set systemRate(value: number);
            /** 映射的属性名称-借方金额（本币） */
            static PROPERTY_LOCALDEBIT_NAME: string;
            /** 获取-借方金额（本币） */
            get localDebit(): number;
            /** 设置-借方金额（本币） */
            set localDebit(value: number);
            /** 映射的属性名称-贷方金额（本币） */
            static PROPERTY_LOCALCREDIT_NAME: string;
            /** 获取-贷方金额（本币） */
            get localCredit(): number;
            /** 设置-贷方金额（本币） */
            set localCredit(value: number);
            /** 映射的属性名称-本币 */
            static PROPERTY_LOCALCURRENCY_NAME: string;
            /** 获取-本币 */
            get localCurrency(): string;
            /** 设置-本币 */
            set localCurrency(value: string);
            /** 映射的属性名称-本币汇率 */
            static PROPERTY_LOCALRATE_NAME: string;
            /** 获取-本币汇率 */
            get localRate(): number;
            /** 设置-本币汇率 */
            set localRate(value: number);
            /** 映射的属性名称-税码 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税码 */
            get tax(): string;
            /** 设置-税码 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-基础总额 */
            static PROPERTY_BASETOTAL_NAME: string;
            /** 获取-基础总额 */
            get baseTotal(): number;
            /** 设置-基础总额 */
            set baseTotal(value: number);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
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
            /** 映射的属性名称-参考3 */
            static PROPERTY_REFERENCE3_NAME: string;
            /** 获取-参考3 */
            get reference3(): string;
            /** 设置-参考3 */
            set reference3(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 期间-分类账 */
        class PeriodLedgerAccount extends ibas.BOSimple<PeriodLedgerAccount> implements IPeriodLedgerAccount {
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
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-分类 */
            static PROPERTY_LEDGER_NAME: string;
            /** 获取-分类 */
            get ledger(): string;
            /** 设置-分类 */
            set ledger(value: string);
            /** 映射的属性名称-序号 */
            static PROPERTY_ORDER_NAME: string;
            /** 获取-序号 */
            get order(): number;
            /** 设置-序号 */
            set order(value: number);
            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-激活 */
            get activated(): ibas.emYesNo;
            /** 设置-激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-科目 */
            static PROPERTY_ACCOUNT_NAME: string;
            /** 获取-科目 */
            get account(): string;
            /** 设置-科目 */
            set account(value: string);
            /** 映射的属性名称-设置 */
            static PROPERTY_SETTINGS_NAME: string;
            /** 获取-设置 */
            get settings(): string;
            /** 设置-设置 */
            set settings(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-期间-分类账-条件集合 */
            static PROPERTY_PERIODLEDGERACCOUNTCONDITIONS_NAME: string;
            /** 获取-期间-分类账-条件集合 */
            get periodLedgerAccountConditions(): PeriodLedgerAccountConditions;
            /** 设置-期间-分类账-条件集合 */
            set periodLedgerAccountConditions(value: PeriodLedgerAccountConditions);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 期间-分类账-条件 集合 */
        class PeriodLedgerAccountConditions extends ibas.BusinessObjects<PeriodLedgerAccountCondition, PeriodLedgerAccount> implements IPeriodLedgerAccountConditions {
            /** 创建并添加子项 */
            create(): PeriodLedgerAccountCondition;
            protected afterAdd(item: PeriodLedgerAccountCondition): void;
        }
        /** 期间-分类账-条件 */
        class PeriodLedgerAccountCondition extends ibas.BOSimpleLine<PeriodLedgerAccountCondition> implements IPeriodLedgerAccountCondition {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-编号 */
            get objectKey(): number;
            /** 设置-编号 */
            set objectKey(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
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
            /** 映射的属性名称-开括号 */
            static PROPERTY_BRACKETOPEN_NAME: string;
            /** 获取-开括号 */
            get bracketOpen(): number;
            /** 设置-开括号 */
            set bracketOpen(value: number);
            /** 映射的属性名称-关系 */
            static PROPERTY_RELATIONSHIP_NAME: string;
            /** 获取-关系 */
            get relationship(): ibas.emConditionRelationship;
            /** 设置-关系 */
            set relationship(value: ibas.emConditionRelationship);
            /** 映射的属性名称-属性 */
            static PROPERTY_PROPERTYNAME_NAME: string;
            /** 获取-属性 */
            get propertyName(): string;
            /** 设置-属性 */
            set propertyName(value: string);
            /** 映射的属性名称-方法 */
            static PROPERTY_OPERATION_NAME: string;
            /** 获取-方法 */
            get operation(): ibas.emConditionOperation;
            /** 设置-方法 */
            set operation(value: ibas.emConditionOperation);
            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string;
            /** 获取-值 */
            get value(): string;
            /** 设置-值 */
            set value(value: string);
            /** 映射的属性名称-闭括号 */
            static PROPERTY_BRACKETCLOSE_NAME: string;
            /** 获取-闭括号 */
            get bracketClose(): number;
            /** 设置-闭括号 */
            set bracketClose(value: number);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 分类账 */
        class LedgerAccount extends ibas.BOSimple<LedgerAccount> implements ILedgerAccount {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标识 */
            get sign(): string;
            /** 设置-标识 */
            set sign(value: string);
            /** 映射的属性名称-组 */
            static PROPERTY_GROUP_NAME: string;
            /** 获取-组 */
            get group(): string;
            /** 设置-组 */
            set group(value: string);
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            get description(): string;
            /** 设置-描述 */
            set description(value: string);
            /** 映射的属性名称-设置 */
            static PROPERTY_SETTINGS_NAME: string;
            /** 获取-设置 */
            get settings(): string;
            /** 设置-设置 */
            set settings(value: string);
            /** 映射的属性名称-编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-编号 */
            get objectKey(): number;
            /** 设置-编号 */
            set objectKey(value: number);
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
            /** 映射的属性名称-编号系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-编号系列 */
            get series(): number;
            /** 设置-编号系列 */
            set series(value: number);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 分类账条件属性 */
        class LedgerConditionProperty extends ibas.BOSimple<LedgerConditionProperty> implements ILedgerConditionProperty {
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
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            get description(): string;
            /** 设置-描述 */
            set description(value: string);
            /** 映射的属性名称-过滤器 */
            static PROPERTY_FILTERS_NAME: string;
            /** 获取-过滤器 */
            get filters(): string;
            /** 设置-过滤器 */
            set filters(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 银行 */
        class Bank extends ibas.BOMasterData<Bank> implements IBank {
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
            /** 映射的属性名称-标识符 */
            static PROPERTY_SWIFTCODE_NAME: string;
            /** 获取-标识符 */
            get swiftCode(): string;
            /** 设置-标识符 */
            set swiftCode(value: string);
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-编号系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-编号系列 */
            get series(): number;
            /** 设置-编号系列 */
            set series(value: number);
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
            /** 映射的属性名称-已激活的 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-已激活的 */
            get activated(): ibas.emYesNo;
            /** 设置-已激活的 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-删除的 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-删除的 */
            get deleted(): ibas.emYesNo;
            /** 设置-删除的 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
    namespace bo {
        /** 银行账户 */
        class BankAccount extends ibas.BOMasterData<BankAccount> implements IBankAccount {
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
            /** 映射的属性名称-银行 */
            static PROPERTY_BANK_NAME: string;
            /** 获取-银行 */
            get bank(): string;
            /** 设置-银行 */
            set bank(value: string);
            /** 映射的属性名称-开户支行 */
            static PROPERTY_OPENINGBANK_NAME: string;
            /** 获取-开户支行 */
            get openingBank(): string;
            /** 设置-开户支行 */
            set openingBank(value: string);
            /** 映射的属性名称-账户类型 */
            static PROPERTY_ACCOUNTTYPE_NAME: string;
            /** 获取-账户类型 */
            get accountType(): string;
            /** 设置-账户类型 */
            set accountType(value: string);
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-编号系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-编号系列 */
            get series(): number;
            /** 设置-编号系列 */
            set series(value: number);
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
            /** 映射的属性名称-已激活的 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-已激活的 */
            get activated(): ibas.emYesNo;
            /** 设置-已激活的 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-删除的 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-删除的 */
            get deleted(): ibas.emYesNo;
            /** 设置-删除的 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
declare namespace accounting {
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
declare namespace accounting {
    namespace bo {
        /** 业务对象仓库 */
        class BORepositoryAccounting extends ibas.BORepositoryApplication implements IBORepositoryAccounting {
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
             * 查询 期间类型
             * @param fetcher 查询者
             */
            fetchPeriodCategory(fetcher: ibas.IFetchCaller<bo.PeriodCategory>): void;
            /**
             * 保存 期间类型
             * @param saver 保存者
             */
            savePeriodCategory(saver: ibas.ISaveCaller<bo.PeriodCategory>): void;
            /**
             * 查询 过账期间
             * @param fetcher 查询者
             */
            fetchPostingPeriod(fetcher: ibas.IFetchCaller<bo.PostingPeriod>): void;
            /**
             * 保存 过账期间
             * @param saver 保存者
             */
            savePostingPeriod(saver: ibas.ISaveCaller<bo.PostingPeriod>): void;
            /**
             * 查询 项目
             * @param fetcher 查询者
             */
            fetchProject(fetcher: ibas.IFetchCaller<bo.Project>): void;
            /**
             * 保存 项目
             * @param saver 保存者
             */
            saveProject(saver: ibas.ISaveCaller<bo.Project>): void;
            /**
             * 查询 维度
             * @param fetcher 查询者
             */
            fetchDimension(fetcher: ibas.IFetchCaller<bo.Dimension>): void;
            /**
             * 保存 维度
             * @param saver 保存者
             */
            saveDimension(saver: ibas.ISaveCaller<bo.Dimension>): void;
            /**
             * 查询 税收组
             * @param fetcher 查询者
             */
            fetchTaxGroup(fetcher: ibas.IFetchCaller<bo.TaxGroup>): void;
            /**
             * 保存 税收组
             * @param saver 保存者
             */
            saveTaxGroup(saver: ibas.ISaveCaller<bo.TaxGroup>): void;
            /**
             * 查询 费用项目
             * @param fetcher 查询者
             */
            fetchCostItem(fetcher: ibas.IFetchCaller<bo.CostItem>): void;
            /**
             * 保存 费用项目
             * @param saver 保存者
             */
            saveCostItem(saver: ibas.ISaveCaller<bo.CostItem>): void;
            /**
             * 查询 费用结构
             * @param fetcher 查询者
             */
            fetchCostStructure(fetcher: ibas.IFetchCaller<bo.CostStructure>): void;
            /**
             * 保存 费用结构
             * @param saver 保存者
             */
            saveCostStructure(saver: ibas.ISaveCaller<bo.CostStructure>): void;
            /**
             * 结算 费用结构
             * @param closer 结算者
             */
            closeCostStructure(closer: ICostStructureCloser): void;
            /**
             * 查询 货币
             * @param fetcher 查询者
             */
            fetchCurrency(fetcher: ibas.IFetchCaller<bo.Currency>): void;
            /**
             * 保存 货币
             * @param saver 保存者
             */
            saveCurrency(saver: ibas.ISaveCaller<bo.Currency>): void;
            /**
             * 查询 科目
             * @param fetcher 查询者
             */
            fetchAccount(fetcher: ibas.IFetchCaller<bo.Account>): void;
            /**
             * 保存 科目
             * @param saver 保存者
             */
            saveAccount(saver: ibas.ISaveCaller<bo.Account>): void;
            /**
             * 查询 分支
             * @param fetcher 查询者
             */
            fetchBranch(fetcher: ibas.IFetchCaller<bo.Branch>): void;
            /**
             * 保存 分支
             * @param saver 保存者
             */
            saveBranch(saver: ibas.ISaveCaller<bo.Branch>): void;
            /**
             * 查询 日记账分录
             * @param fetcher 查询者
             */
            fetchJournalEntry(fetcher: ibas.IFetchCaller<bo.JournalEntry>): void;
            /**
             * 保存 日记账分录
             * @param saver 保存者
             */
            saveJournalEntry(saver: ibas.ISaveCaller<bo.JournalEntry>): void;
            /**
             * 查询 分类账
             * @param fetcher 查询者
             */
            fetchLedgerAccount(fetcher: ibas.IFetchCaller<bo.LedgerAccount>): void;
            /**
             * 查询 期间-分类账
             * @param fetcher 查询者
             */
            fetchPeriodLedgerAccount(fetcher: ibas.IFetchCaller<bo.PeriodLedgerAccount>): void;
            /**
             * 保存 期间-分类账
             * @param saver 保存者
             */
            savePeriodLedgerAccount(saver: ibas.ISaveCaller<bo.PeriodLedgerAccount>): void;
            /**
             * 查询 分类账条件属性
             * @param fetcher 查询者
             */
            fetchLedgerConditionProperty(fetcher: ibas.IFetchCaller<bo.LedgerConditionProperty>): void;
            /**
             * 查询 银行
             * @param fetcher 查询者
             */
            fetchBank(fetcher: ibas.IFetchCaller<bo.Bank>): void;
            /**
             * 保存 银行
             * @param saver 保存者
             */
            saveBank(saver: ibas.ISaveCaller<bo.Bank>): void;
            /**
             * 查询 银行账户
             * @param fetcher 查询者
             */
            fetchBankAccount(fetcher: ibas.IFetchCaller<bo.BankAccount>): void;
            /**
             * 保存 银行账户
             * @param saver 保存者
             */
            saveBankAccount(saver: ibas.ISaveCaller<bo.BankAccount>): void;
        }
        /**
         * 费用结束者
         */
        interface ICostStructureCloser extends ibas.IMethodCaller<CostStructure> {
            /** 费用结构 */
            structure: number;
            /** 费用节点 */
            node?: number;
            /** 动作 */
            action?: emCostStatus;
            /**
             * 调用完成
             * @param opRslt 结果
             */
            onCompleted(opRslt: ibas.IOperationResult<CostStructure>): void;
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
declare namespace accounting {
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
declare namespace accounting {
    namespace app {
        class PostingPeriodFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-期间类型 */
        class PeriodCategoryListApp extends ibas.BOListApplication<IPeriodCategoryListView, bo.PeriodCategory> {
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
            protected viewData(data: bo.PeriodCategory): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PeriodCategory): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PeriodCategory | bo.PeriodCategory[]): void;
        }
        /** 视图-期间类型 */
        interface IPeriodCategoryListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PeriodCategory[]): void;
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-期间类型 */
        class PeriodCategoryEditApp extends ibas.BOEditApplication<IPeriodCategoryEditView, bo.PeriodCategory> {
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
            run(data: bo.PeriodCategory): void;
            protected editPostingPeriods: ibas.IList<bo.PostingPeriod>;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            private addPostingPeriod;
            private removePostingPeriod;
            private resetPostingPeriodOrder;
            private addPostingPeriodItem;
            private removePostingPeriodItem;
        }
        /** 视图-期间类型 */
        interface IPeriodCategoryEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPeriodCategory(data: bo.PeriodCategory): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加过账期间事件 */
            addPostingPeriodEvent: Function;
            /** 移除过账期间事件 */
            removePostingPeriodEvent: Function;
            /** 显示过账期间 */
            showPostingPeriods(datas: bo.PostingPeriod[]): void;
            /** 添加过账期间项目事件 */
            addPostingPeriodItemEvent: Function;
            /** 移除过账期间项目事件 */
            removePostingPeriodItemEvent: Function;
            /** 显示过账期间项目 */
            showPostingPeriodItems(data: bo.PostingPeriod): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-过账期间 */
        class PostingPeriodChooseApp extends ibas.BOChooseService<IPostingPeriodChooseView, bo.PostingPeriod> {
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
        /** 视图-过账期间 */
        interface IPostingPeriodChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PostingPeriod[]): void;
        }
        /** 过账期间选择服务映射 */
        class PostingPeriodChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.PostingPeriod>;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-期间类型 */
        class PeriodCategoryChooseApp extends ibas.BOChooseService<IPeriodCategoryChooseView, bo.PeriodCategory> {
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
        /** 视图-期间类型 */
        interface IPeriodCategoryChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PeriodCategory[]): void;
        }
        /** 期间类型选择服务映射 */
        class PeriodCategoryChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.PeriodCategory>;
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
declare namespace accounting {
    namespace app {
        class ProjectFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-项目 */
        class ProjectListApp extends ibas.BOListApplication<IProjectListView, bo.Project> {
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
            protected viewData(data: bo.Project): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Project): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Project | bo.Project[]): void;
        }
        /** 视图-项目 */
        interface IProjectListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Project[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-项目 */
        class ProjectChooseApp extends ibas.BOChooseService<IProjectChooseView, bo.Project> {
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
        /** 视图-项目 */
        interface IProjectChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Project[]): void;
        }
        /** 项目选择服务映射 */
        class ProjectChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Project>;
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-项目 */
        class ProjectEditApp extends ibas.BOEditApplication<IProjectEditView, bo.Project> {
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
            run(data: bo.Project): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择组织标识 */
            private chooseOrganization;
            /** 选择项目经理 */
            private chooseManager;
        }
        /** 视图-项目 */
        interface IProjectEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showProject(data: bo.Project): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择组织 */
            chooseOrganizationEvent: Function;
            /** 选择项目经理 */
            chooseManagerEvent: Function;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-项目 */
        class ProjectViewApp extends ibas.BOViewService<IProjectViewView, bo.Project> {
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
            run(data: bo.Project): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-项目 */
        interface IProjectViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showProject(data: bo.Project): void;
        }
        /** 项目连接服务映射 */
        class ProjectLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        class DimensionFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-维度 */
        class DimensionListApp extends ibas.BOListApplication<IDimensionListView, bo.Dimension> {
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
            protected viewData(data: bo.Dimension): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Dimension): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Dimension | bo.Dimension[]): void;
        }
        /** 视图-维度 */
        interface IDimensionListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Dimension[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-维度 */
        class DimensionChooseApp extends ibas.BOChooseService<IDimensionChooseView, bo.Dimension> {
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
        /** 视图-维度 */
        interface IDimensionChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Dimension[]): void;
        }
        /** 维度选择服务映射 */
        class DimensionChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Dimension>;
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-维度 */
        class DimensionEditApp extends ibas.BOEditApplication<IDimensionEditView, bo.Dimension> {
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
            run(data: bo.Dimension): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 编辑源 */
            private editSource;
            /** 测试源 */
            private testSource;
        }
        /** 视图-维度 */
        interface IDimensionEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showDimension(data: bo.Dimension): void;
            /** 测试源事件 */
            testSourceEvent: Function;
            /** 编辑源事件 */
            editSourceEvent: Function;
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
declare namespace accounting {
    namespace app {
        /** 维度数据服务 */
        class DimensionDataService extends ibas.ServiceWithResultApplication<IDimensionDataView, IDimensionDataServiceContract, String> {
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
            protected runService(contract: IDimensionDataServiceContract): void;
        }
        /** 视图-维度 */
        interface IDimensionDataView extends ibas.IView {
        }
        /** 物料批次收货服务映射 */
        class DimensionDataServiceMapping extends ibas.ServiceMapping {
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
declare namespace accounting {
    namespace app {
        class TaxGroupFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-税收组 */
        class TaxGroupListApp extends ibas.BOListApplication<ITaxGroupListView, bo.TaxGroup> {
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
            protected viewData(data: bo.TaxGroup): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.TaxGroup): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.TaxGroup | bo.TaxGroup[]): void;
        }
        /** 视图-税收组 */
        interface ITaxGroupListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.TaxGroup[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-税收组 */
        class TaxGroupChooseApp extends ibas.BOChooseService<ITaxGroupChooseView, bo.TaxGroup> {
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
        /** 视图-税收组 */
        interface ITaxGroupChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.TaxGroup[]): void;
        }
        /** 税收组选择服务映射 */
        class TaxGroupChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.TaxGroup>;
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-税收组 */
        class TaxGroupEditApp extends ibas.BOEditApplication<ITaxGroupEditView, bo.TaxGroup> {
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
            run(data: bo.TaxGroup): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择总账科目事件 */
            private chooseLedgerAccount;
        }
        /** 视图-税收组 */
        interface ITaxGroupEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showTaxGroup(data: bo.TaxGroup): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择总账科目事件 */
            chooseLedgerAccountEvent: Function;
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
declare namespace accounting {
    namespace app {
        class CostStructureFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-费用结构 */
        class CostStructureListApp extends ibas.BOListApplication<ICostStructureListView, bo.CostStructure> {
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
            private currentBudget;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.CostStructure): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.CostStructure): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.CostStructure | bo.CostStructure[]): void;
            private copyCostStructureNodes;
            private addCostStructureNode;
            private removeCostStructureNode;
            private addCostStructureNodeItem;
            private removeCostStructureNodeItem;
            private getCostItems;
            private viewCostItemsBudget;
            private viewCostItemsLocked;
            private viewCostItemsIncurred;
            private closeCostStructureNode;
        }
        enum emNodeType {
            ORGANIZATION = 0
        }
        /** 视图-费用结构 */
        interface ICostStructureListView extends ibas.IBOListView {
            /** 保存数据事件 */
            saveDataEvent: Function;
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 结算费用节点 */
            closeCostStructureNodeEvent: Function;
            /** 显示数据 */
            showData(datas: bo.CostStructure[]): void;
            /** 显示费用结构 */
            showCostStructure(data: bo.CostStructure): void;
            /** 复制其他费用结构节点 */
            copyCostStructureNodesEvent: Function;
            /** 添加费用结构节点 */
            addCostStructureNodeEvent: Function;
            /** 移除费用结构节点 */
            removeCostStructureNodeEvent: Function;
            /** 显示费用结构节点 */
            showCostStructureNodes(datas: bo.CostStructureNode[] | bo.CostStructureNode): void;
            /** 添加费用结构节点项目 */
            addCostStructureNodeItemEvent: Function;
            /** 移除费用结构节点点项目 */
            removeCostStructureNodeItemEvent: Function;
            /** 显示费用结构截点 */
            showCostStructureNodeItems(data: bo.CostStructureNode): void;
            /** 显示费用项-预算 */
            viewCostItemsBudgetEvent: Function;
            /** 显示费用项-预算 */
            showCostItemsBudget(data: bo.CostStructureNodeItem[]): void;
            /** 显示费用项-锁定 */
            viewCostItemsLockedEvent: Function;
            /** 显示费用项-锁定 */
            showCostItemsLocked(data: bo.CostStructureNodeItem[]): void;
            /** 显示费用项-发生 */
            viewCostItemsIncurredEvent: Function;
            /** 显示费用项-发生 */
            showCostItemsIncurred(data: bo.CostStructureNodeItem[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-费用结构 */
        class CostStructureChooseApp extends ibas.BOChooseService<ICostStructureChooseView, bo.CostStructure> {
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
        /** 视图-费用结构 */
        interface ICostStructureChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.CostStructure[]): void;
        }
        /** 费用结构选择服务映射 */
        class CostStructureChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.CostStructure>;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-费用结构节点 */
        class CostStructureNodeChooseApp extends ibas.BOChooseService<ICostStructureNodeChooseView, bo.CostStructureNode> {
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
        /** 视图-费用结构节点 */
        interface ICostStructureNodeChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.CostStructure[]): void;
        }
        /** 费用结构节点选择服务映射 */
        class CostStructureNodeChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.CostStructure>;
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-费用结构 */
        class CostStructureEditApp extends ibas.BOEditApplication<ICostStructureEditView, bo.CostStructure> {
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
            run(data?: bo.CostStructure, onCompleted?: (data: bo.CostStructure) => void): void;
            private onCompleted;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 选择产品资源事件 */
            private chooseEntity;
            private closeCostStructure;
            close(): void;
        }
        /** 视图-费用结构 */
        interface ICostStructureEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showCostStructure(data: bo.CostStructure): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 选择主体 */
            chooseEntityEvent: Function;
            /** 结算费用 */
            closeCostStructureEvent: Function;
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
declare namespace accounting {
    namespace app {
        class CurrencyFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-货币 */
        class CurrencyListApp extends ibas.BOListApplication<ICurrencyListView, bo.Currency> {
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
            protected viewData(data: bo.Currency): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Currency): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Currency | bo.Currency[]): void;
        }
        /** 视图-货币 */
        interface ICurrencyListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Currency[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-货币 */
        class CurrencyChooseApp extends ibas.BOChooseService<ICurrencyChooseView, bo.Currency> {
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
        /** 视图-货币 */
        interface ICurrencyChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Currency[]): void;
        }
        /** 货币选择服务映射 */
        class CurrencyChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Currency>;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-货币 */
        class CurrencyViewApp extends ibas.BOViewService<ICurrencyViewView, bo.Currency> {
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
            run(data: bo.Currency): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-货币 */
        interface ICurrencyViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showCurrency(data: bo.Currency): void;
        }
        /** 货币连接服务映射 */
        class CurrencyLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-货币 */
        class CurrencyEditApp extends ibas.BOEditApplication<ICurrencyEditView, bo.Currency> {
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
            run(data: bo.Currency): void;
            /** 保存数据 */
            protected saveData(others?: bo.Currency[]): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-货币 */
        interface ICurrencyEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showCurrency(data: bo.Currency): void;
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace accounting {
    namespace app {
        class CostItemFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-费用项目 */
        class CostItemListApp extends ibas.BOListApplication<ICostItemListView, bo.CostItem> {
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
            protected viewData(data: bo.CostItem): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.CostItem): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.CostItem | bo.CostItem[]): void;
        }
        /** 视图-费用项目 */
        interface ICostItemListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.CostItem[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-费用项目 */
        class CostItemChooseApp extends ibas.BOChooseService<ICostItemChooseView, bo.CostItem> {
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
        /** 视图-费用项目 */
        interface ICostItemChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.CostItem[]): void;
        }
        /** 费用项目选择服务映射 */
        class CostItemChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.CostItem>;
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-费用项目 */
        class CostItemEditApp extends ibas.BOEditApplication<ICostItemEditView, bo.CostItem> {
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
            run(data: bo.CostItem): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-费用项目 */
        interface ICostItemEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showCostItem(data: bo.CostItem): void;
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace accounting {
    namespace app {
        class AccountFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-科目 */
        class AccountListApp extends ibas.BOListApplication<IAccountListView, bo.Account> {
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
            protected viewData(data: bo.Account): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Account): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Account | bo.Account[]): void;
        }
        /** 视图-科目 */
        interface IAccountListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Account[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-科目 */
        class AccountChooseApp extends ibas.BOChooseService<IAccountChooseView, bo.Account> {
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
        /** 视图-科目 */
        interface IAccountChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Account[]): void;
        }
        /** 科目选择服务映射 */
        class AccountChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Account>;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-科目 */
        class AccountViewApp extends ibas.BOViewService<IAccountViewView, bo.Account> {
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
            run(data: bo.Account): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-科目 */
        interface IAccountViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showAccount(data: bo.Account): void;
        }
        /** 科目连接服务映射 */
        class AccountLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-科目 */
        class AccountEditApp extends ibas.BOEditApplication<IAccountEditView, bo.Account> {
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
            run(data: bo.Account): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-科目 */
        interface IAccountEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showAccount(data: bo.Account): void;
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
declare namespace accounting {
    namespace app {
        class AccountNode extends ibas.Bindable {
            constructor(data: bo.Account);
            get data(): bo.Account;
            set data(value: bo.Account);
            get logInst(): number;
            set logInst(value: number);
            get code(): string;
            set code(value: string);
            get name(): string;
            set name(value: string);
            get active(): ibas.emYesNo;
            set active(value: ibas.emYesNo);
            get nodes(): AccountNode[];
            alls(): AccountNode[];
        }
        class AccountNodes extends ibas.ArrayList<AccountNode> {
            constructor(parent: AccountNode);
            filling(datas: bo.Account[]): void;
        }
        /** 应用-科目 */
        class AccountTreeApp extends ibas.Application<IAccountTreeView> {
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
            private viewGroup;
            private accounts;
            private addAccount;
            private removeAccount;
            private removeNode;
            private saveAccount;
        }
        /** 视图-科目 */
        interface IAccountTreeView extends ibas.IView {
            /** 显示分组 */
            showGroups(datas: AccountNode[]): void;
            /** 显示组 */
            viewGroupEvent: Function;
            /** 显示科目 */
            showAccount(data: bo.Account): void;
            /** 添加科目事件 */
            addAccountEvent: Function;
            /** 添加科目事件 */
            removeAccountEvent: Function;
            /** 保存科目事件 */
            saveAccountEvent: Function;
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
declare namespace accounting {
    namespace app {
        class BranchFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-分支 */
        class BranchListApp extends ibas.BOListApplication<IBranchListView, bo.Branch> {
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
            protected viewData(data: bo.Branch): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Branch): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Branch | bo.Branch[]): void;
        }
        /** 视图-分支 */
        interface IBranchListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Branch[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-分支 */
        class BranchChooseApp extends ibas.BOChooseService<IBranchChooseView, bo.Branch> {
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
        /** 视图-分支 */
        interface IBranchChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Branch[]): void;
        }
        /** 分支选择服务映射 */
        class BranchChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Branch>;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-分支 */
        class BranchViewApp extends ibas.BOViewService<IBranchViewView, bo.Branch> {
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
            run(data: bo.Branch): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-分支 */
        interface IBranchViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showBranch(data: bo.Branch): void;
        }
        /** 分支连接服务映射 */
        class BranchLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-分支 */
        class BranchEditApp extends ibas.BOEditApplication<IBranchEditView, bo.Branch> {
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
            run(data: bo.Branch): void;
            /** 保存数据 */
            protected saveData(others?: bo.Branch[]): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-分支 */
        interface IBranchEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBranch(data: bo.Branch): void;
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
declare namespace accounting {
    namespace app {
        /** 应用-默认分支设置 */
        class BranchSettingApp extends ibas.ResidentApplication<IBranchSettingView> {
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
            private set;
            protected barShowed(): void;
        }
        /** 视图-默认分支设置 */
        interface IBranchSettingView extends ibas.IResidentView {
            setEvent: Function;
            /** 显示数据 */
            showBranchs(datas: bo.Branch[]): void;
        }
        class BranchSettingApplicationMapping extends ibas.ResidentApplicationMapping {
            /** 构造函数 */
            constructor();
            create(): ibas.ResidentApplication<ibas.IResidentView>;
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
declare namespace accounting {
    namespace app {
        class JournalEntryFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-日记账分录 */
        class JournalEntryListApp extends ibas.BOListApplication<IJournalEntryListView, bo.JournalEntry> {
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
            protected viewData(data: bo.JournalEntry): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.JournalEntry): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.JournalEntry | bo.JournalEntry[]): void;
        }
        /** 视图-日记账分录 */
        interface IJournalEntryListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.JournalEntry[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-日记账分录 */
        class JournalEntryChooseApp extends ibas.BOChooseService<IJournalEntryChooseView, bo.JournalEntry> {
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
        /** 视图-日记账分录 */
        interface IJournalEntryChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.JournalEntry[]): void;
        }
        /** 日记账分录选择服务映射 */
        class JournalEntryChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.JournalEntry>;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-日记账分录 */
        class JournalEntryViewApp extends ibas.BOViewService<IJournalEntryViewView, bo.JournalEntry> {
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
            run(data: bo.JournalEntry): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-日记账分录 */
        interface IJournalEntryViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showJournalEntry(data: bo.JournalEntry): void;
            /** 显示数据-日记账分录-行 */
            showJournalEntryLines(datas: bo.JournalEntryLine[]): void;
        }
        /** 日记账分录连接服务映射 */
        class JournalEntryLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-日记账分录 */
        class JournalEntryEditApp extends ibas.BOEditApplication<IJournalEntryEditView, bo.JournalEntry> {
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
            run(data: bo.JournalEntry): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加日记账分录-行事件 */
            protected addJournalEntryLine(type: "ACCOUNT" | "BUSINESSPARTNER"): void;
            /** 删除日记账分录-行事件 */
            protected removeJournalEntryLine(items: bo.JournalEntryLine[]): void;
            /** 选择日记账分录-行科目 */
            protected chooseJournalEntryLineAccount(caller: bo.JournalEntryLine): void;
            /** 选择日记账分录-行业务伙伴/科目 */
            protected chooseJournalEntryLineShortName(caller: bo.JournalEntryLine): void;
            private chooseJournalEntryLineDistributionRule;
        }
        /** 视图-日记账分录 */
        interface IJournalEntryEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showJournalEntry(data: bo.JournalEntry): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加日记账分录-行事件 */
            addJournalEntryLineEvent: Function;
            /** 删除日记账分录-行事件 */
            removeJournalEntryLineEvent: Function;
            /** 显示数据-日记账分录-行 */
            showJournalEntryLines(datas: bo.JournalEntryLine[]): void;
            /** 选择日记账分录-行科目事件 */
            chooseJournalEntryLineAccountEvent: Function;
            /** 选择日记账分录-行业务伙伴/科目事件 */
            chooseJournalEntryLineShortNameEvent: Function;
            /** 选择日记账分录-行成本中心事件 */
            chooseJournalEntryLineDistributionRuleEvent: Function;
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
declare namespace accounting {
    namespace app {
        class LedgerAccountDeterminationFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-分类账 */
        class LedgerAccountDeterminationApp extends ibas.Application<ILedgerAccountDeterminationView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected periodAccounts: ibas.IList<bo.PeriodLedgerAccount>;
            protected conditionProperties: ibas.IList<bo.LedgerConditionProperty>;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 选中过账期间 */
            protected selectLedgerAccount(ledger: bo.LedgerAccount, period: bo.PeriodCategory): void;
            /** 保存过账期间总账科目事件 */
            protected savePostingPeriodAccount(callback?: () => void): void;
            /** 选择过账期间总账科目科目事件 */
            protected choosePostingPeriodAccountAccount(periodAccount: bo.PeriodLedgerAccount): void;
            /** 创建过账期间总账科目事件 */
            protected createPostingPeriodAccount(ledger: bo.LedgerAccount, period: bo.PeriodCategory): void;
            /** 删除账期间总账科目科目事件 */
            protected deletePostingPeriodAccount(periodAccount: bo.PeriodLedgerAccount): void;
        }
        /** 视图-分类账 */
        interface ILedgerAccountDeterminationView extends ibas.IView {
            /** 显示过账期间 */
            showPostingPeriods(datas: bo.PeriodCategory[]): void;
            /** 显示总账科目 */
            showLedgerAccounts(datas: bo.LedgerAccount[]): void;
            /** 选中总账科目事件 */
            selectLedgerAccountEvent: Function;
            /** 显示过账期间总账科目 */
            showPostingPeriodAccounts(datas: bo.PeriodLedgerAccount[], properties?: bo.LedgerConditionProperty[]): void;
            /** 创建过账期间总账科目事件 */
            createPostingPeriodAccountEvent: Function;
            /** 删除账期间总账科目科目事件 */
            deletePostingPeriodAccountEvent: Function;
            /** 选择过账期间总账科目科目事件 */
            choosePostingPeriodAccountAccountEvent: Function;
            /** 保存过账期间总账科目事件 */
            savePostingPeriodAccountEvent: Function;
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
declare namespace accounting {
    namespace app {
        /** 应用-分类账设置 */
        class LedgerAccountSettingService extends ibas.ServiceApplication<ILedgerAccountSettingView, ILedgerAccountSettingContract> {
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
            private currentPeriod;
            private settings;
            protected runService(contract: ILedgerAccountSettingContract): void;
            private settingService;
            private categoryService;
            /** 选择过账期间总账科目科目事件 */
            private chooseAccount;
            private save;
        }
        /** 视图-分类账设置 */
        interface ILedgerAccountSettingView extends ibas.IView {
            /** 显示期间科目 */
            showLedgerAccounts(datas: bo.PeriodLedgerAccount[]): void;
            /** 选择过账期间总账科目科目事件 */
            chooseAccountEvent: Function;
            /** 保存事件 */
            saveEvent: Function;
        }
        /** 分类账设置服务映射 */
        class LedgerAccountSettingServiceMapping extends ibas.ServiceMapping {
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
declare namespace accounting {
    namespace app {
        class BankFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-银行 */
        class BankListApp extends ibas.BOListApplication<IBankListView, bo.Bank> {
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
            protected viewData(data: bo.Bank): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Bank): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Bank | bo.Bank[]): void;
        }
        /** 视图-银行 */
        interface IBankListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Bank[]): void;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-银行 */
        class BankChooseApp extends ibas.BOChooseService<IBankChooseView, bo.Bank> {
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
        /** 视图-银行 */
        interface IBankChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Bank[]): void;
        }
        /** 银行选择服务映射 */
        class BankChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Bank>;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-银行 */
        class BankViewApp extends ibas.BOViewService<IBankViewView, bo.Bank> {
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
            run(data: bo.Bank): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-银行 */
        interface IBankViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showBank(data: bo.Bank): void;
        }
        /** 银行连接服务映射 */
        class BankLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-银行 */
        class BankEditApp extends ibas.BOEditApplication<IBankEditView, bo.Bank> {
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
            run(data: bo.Bank): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-银行 */
        interface IBankEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBank(data: bo.Bank): void;
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace accounting {
    namespace app {
        class BankAccountFunc extends ibas.ModuleFunction {
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
declare namespace accounting {
    namespace app {
        /** 列表应用-银行账户 */
        class BankAccountListApp extends ibas.BOListApplication<IBankAccountListView, bo.BankAccount> {
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
            protected viewData(data: bo.BankAccount): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.BankAccount): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.BankAccount | bo.BankAccount[]): void;
            protected bank(): void;
        }
        /** 视图-银行账户 */
        interface IBankAccountListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.BankAccount[]): void;
            /** 银行事件 */
            bankEvent: Function;
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
declare namespace accounting {
    namespace app {
        /** 选择应用-银行账户 */
        class BankAccountChooseApp extends ibas.BOChooseService<IBankAccountChooseView, bo.BankAccount> {
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
        /** 视图-银行账户 */
        interface IBankAccountChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.BankAccount[]): void;
        }
        /** 银行账户选择服务映射 */
        class BankAccountChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.BankAccount>;
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
declare namespace accounting {
    namespace app {
        /** 查看应用-银行账户 */
        class BankAccountViewApp extends ibas.BOViewService<IBankAccountViewView, bo.BankAccount> {
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
            run(data: bo.BankAccount): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-银行账户 */
        interface IBankAccountViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showBankAccount(data: bo.BankAccount): void;
        }
        /** 银行账户连接服务映射 */
        class BankAccountLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace accounting {
    namespace app {
        /** 编辑应用-银行账户 */
        class BankAccountEditApp extends ibas.BOEditApplication<IBankAccountEditView, bo.BankAccount> {
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
            run(data: bo.BankAccount): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-银行账户 */
        interface IBankAccountEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBankAccount(data: bo.BankAccount): void;
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace accounting {
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
        /** 模块控制台 */
        class ConsoleData extends Console {
            /** 构造函数 */
            constructor();
            /** 初始化 */
            protected registers(): void;
        }
        /** 模块控制台 */
        class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void;
        }
    }
}
