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
            DIMENSION_1 = 0,
            DIMENSION_2 = 1,
            DIMENSION_3 = 2,
            DIMENSION_4 = 3,
            DIMENSION_5 = 4
        }
        /** 维度服务契约 */
        interface IDimensionDataServiceContract extends ibas.IServiceContract {
            /** 维度类型 */
            type: emDimensionType | string;
        }
        /** 维度服务代理 */
        class DimensionDataServiceProxy extends ibas.ServiceProxy<IDimensionDataServiceContract> {
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
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emDocumentStatus;
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
        }
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
        }
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
        }
        /** 视图-税收组 */
        interface ITaxGroupEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showTaxGroup(data: bo.TaxGroup): void;
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
        class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void;
        }
    }
}
