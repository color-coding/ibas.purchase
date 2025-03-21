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
    /** 模块-标识 */
    const CONSOLE_ID_INVENTORY: string;
    /** 模块-名称 */
    const CONSOLE_NAME_INVENTORY: string;
    /** 模块-版本 */
    const CONSOLE_VERSION: string;
    namespace config {
        /** 配置项目-启用物料版本管理 */
        const CONFIG_ITEM_ENABLE_MATERIAL_VERSIONS: string;
        /** 配置项目-启用物料预留选择报表 */
        const CONFIG_ITEM_ENABLE_MATERIAL_RESERVATION_CHOOSE_REPORT: string;
        /** 配置项目-出库时显示物料价格 */
        const CONFIG_ITEM_DISPALY_MATERIAL_AVGPRICE_ISSUE: string;
        /** 配置项目-启用物料特殊价格 */
        const CONFIG_ITEM_ENABLE_MATERIAL_SPECIAL_PRICES: string;
        /** 配置项目-单据行显示库存 */
        const CONFIG_ITEM_DOCUMENT_LINE_DISPLAY_INVENTORY: string;
        /** 配置项目-启用非库存物料交易 */
        const CONFIG_ITEM_ENABLE_NON_INVENTORY_ITEM_TRANSACTIONS: string;
        /** 配置项目-历史价格的默认单据（; 分割） */
        const CONFIG_ITEM_DEFAULT_HISTORICAL_PRICE_DOCUMENTS: string;
        /** 配置项目-历史价格的默认应用的价格 */
        const CONFIG_ITEM_DEFAULT_HISTORICAL_PRICE_WHICH_APPLY: string;
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        function get<T>(key: string, defalut?: T): T;
        /**
         * 是否启用物料版本管理
         */
        function isEnableMaterialVersions(): boolean;
        /**
         * 是否启用物料特殊价格
         */
        function isEnableMaterialSpecialPrices(): boolean;
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
        /** 业务对象编码-计量单位 */
        const BO_CODE_UNIT: string;
        /** 业务对象编码-计量单位换算率 */
        const BO_CODE_UNITRATE: string;
        /** 业务对象编码-物料版本 */
        const BO_CODE_MATERIALVERSION: string;
        /** 业务对象编码-物料废品率 */
        const BO_CODE_MATERIALSCRAP: string;
        /** 业务对象编码-物料库存预留 */
        const BO_CODE_MATERIALINVENTORYRESERVATION: string;
        /** 业务对象编码-物料替代 */
        const BO_CODE_MATERIALSUBSTITUTE: string;
        /** 业务对象编码-物料订购预留 */
        const BO_CODE_MATERIALORDEREDRESERVATION: string;
        /** 业务对象编码-仓库预估日记账 */
        const BO_CODE_MATERIALESTIMATEJOURNAL: string;
        /** 业务对象编码-拣配清单 */
        const BO_CODE_PICKLISTS: string;
        /** 业务对象编码-库存转储请求 */
        const BO_CODE_INVENTORYTRANSFERREQUEST: string;
        /** 业务对象编码-物料扩展库存 */
        const BO_CODE_PRODUCT_INVENTORY: string;
        /** 业务对象编码-物料特殊价格 */
        const BO_CODE_MATERIALSPECIALPRICE: string;
        /** 业务对象编码-物料系号关联 */
        const BO_CODE_MATERIALNUMBERASSOCIATION: string;
        /** 业务对象编码-业务伙伴物料目录 */
        const BO_CODE_BUSINESSPARTNERMATERIALCATALOG: string;
        /** 业务对象编码-计划组 */
        const BO_CODE_SCHEDULINGGROUP: string;
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
        /** 发货方式 */
        enum emIssueMethod {
            /**
             * 手动
             */
            MANUALLY = 0,
            /**
             * 倒冲
             */
            BACKFLUSHING = 1
        }
        /** 计划方式 */
        enum emPlanningMethod {
            /**
             * 无
             */
            NONE = 0,
            /**
             * 物料需求计划
             */
            MRP = 1
        }
        /** 获取方式 */
        enum emProcurementMethod {
            /**
             * 采购
             */
            BUY = 0,
            /**
             * 生产
             */
            MAKE = 1
        }
        /** 评估方法 */
        enum emValuationMethod {
            /**
             * 移动平均
             */
            MOVING_AVERAGE = 0,
            /**
             * 批次移动平均
             */
            BATCH_MOVING_AVERAGE = 1
        }
        /**
         * 拣配状态
         */
        enum emPickStatus {
            /**
             * 已审批
             */
            RELEASED = 0,
            /**
             * 已拣配
             */
            PICKED = 1,
            /**
             * 已部分拣配
             */
            PARTIALLYPICKED = 2,
            /**
             * 已部分交货
             */
            PARTIALLYDELIVERED = 3,
            /**
             * 已结算
             */
            CLOSED = 4
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
            /** 版本 */
            version: string;
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
            /** 版本 */
            version: string;
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
            /** 物料版本 */
            itemVersion?: string;
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
            /** 单据类型 */
            documentType?: string;
            /** 单据编号 */
            documentEntry?: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 协议/合同 */
            agreements?: string;
        }
        /** 序列服务契约 */
        interface IMaterialSerialContract extends ibas.IServiceContract {
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 物料编码 */
            itemCode: string;
            /** 物料描述 */
            itemDescription: string;
            /** 物料版本 */
            itemVersion?: string;
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
            /** 单据类型 */
            documentType?: string;
            /** 单据编号 */
            documentEntry?: number;
            /** 单据行号 */
            documentLineId?: number;
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
        /** 物料库存预留服务契约 */
        interface IMaterialInventoryReservationTarget extends ibas.IServiceContract {
            targetType: string;
            targetEntry: number;
            businessPartner?: string;
            items: IMaterialInventoryReservationTargetLine[];
        }
        interface IMaterialInventoryReservationTargetLine {
            targetLineId: number;
            itemCode: string;
            itemDescription?: string;
            itemVersion?: string;
            quantity: number;
            uom: string;
            warehouse?: string;
            serialManagement?: ibas.emYesNo;
            batchManagement?: ibas.emYesNo;
            mixingBatches?: ibas.emYesNo;
        }
        /** 物料库存预留服务代理 */
        class MaterialInventoryReservationServiceProxy extends ibas.ServiceProxy<IMaterialInventoryReservationTarget | IMaterialInventoryReservationTarget[]> {
        }
        /** 物料订购预留服务契约 */
        interface IMaterialOrderedReservationSource extends ibas.IServiceContract {
            sourceType: string;
            sourceEntry: number;
            items: IMaterialOrderedReservationSourceLine[];
        }
        interface IMaterialOrderedReservationSourceLine {
            sourceLineId: number;
            itemCode: string;
            itemDescription: string;
            quantity: number;
            uom: string;
            deliveryDate?: Date;
            warehouse?: string;
            targetType?: string;
            targetEntry?: number;
            targetLineId?: number;
        }
        /** 物料订购预留服务代理 */
        class MaterialOrderedReservationServiceProxy extends ibas.ServiceProxy<IMaterialOrderedReservationSource | IMaterialOrderedReservationSource[]> {
        }
        interface IMaterialOrderedReservationTarget {
            itemCode: string;
            itemDescription?: string;
            quantity: number;
            uom: string;
            warehouse?: string;
            deliveryDate?: Date;
            onReserved: (documentType: string, docEntry: number, lineId: number, quantity: number, deliveryDate?: Date, warehouse?: string) => void;
        }
        /** 物料订购预留目标单据服务代理 */
        class MaterialOrderedReservationTargetServiceProxy extends ibas.ServiceProxy<IMaterialOrderedReservationTarget> {
        }
        /** 物料订购预留源单据服务代理 */
        class MaterialOrderedReservationSourceServiceProxy extends ibas.ServiceProxy<IMaterialOrderedReservationTarget> {
        }
        /** 拣配目标 */
        interface IPickListsTarget {
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 单据日期 */
            documentDate: Date;
            /** 交货/到期日期 */
            deliveryDate: Date;
            /** 物料编码 */
            itemCode: string;
            /** 未清数量 */
            unclosedQuantity: number;
            /** 下达数量 */
            releasedQuantity?: number;
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
            /** 业务伙伴编码 */
            cardCode?: string;
            /** 业务伙伴名称 */
            cardName?: string;
            /** 物料/服务描述 */
            itemDescription?: string;
            /** 物料标识 */
            itemSign?: string;
            /** 序号管理 */
            serialManagement?: ibas.emYesNo;
            /** 批号管理 */
            batchManagement?: ibas.emYesNo;
            /** 备注 */
            remarks?: string;
        }
        interface IMaterialPackingTarget extends ibas.IServiceContract {
            /** 是否查询全部 */
            isFetchAll?: boolean;
            /** 查询条件 */
            criteria?: ibas.ICriteria | ibas.ICondition[];
            /** 选中拣配内容后 */
            onPicked?(targets: IPickListsTarget[]): void;
            /** 交货内容 */
            toDelivery?: bo.IPickListsLine[];
            /** 交货后 */
            onDelivered?(targets: bo.IPickListsLine[] | Error): void;
        }
        /** 物料拣配目标单据服务代理 */
        class MaterialPackingTargetServiceProxy extends ibas.ServiceProxy<IMaterialPackingTarget> {
        }
        interface IInventoryTransferTarget extends ibas.IServiceContract {
            /** 从仓库 */
            fromWarehouse?: string;
            /** 到仓库 */
            toWarehouse?: string;
            onAdded?(targets: bo.IInventoryTransferLine[]): void;
        }
        /** 物料库存转储添加服务代理 */
        class MaterialInventoryTransAddServiceProxy extends ibas.ServiceProxy<IInventoryTransferTarget> {
        }
        /** 物料测量服务契约 */
        interface IMaterialMeasurementContract extends ibas.IServiceContract {
            mode: "INVENTORY" | "PURCHASE" | "SALES";
            documentType: string;
            documentEntry: number;
            lines: IMaterialMeasurementContractLine[];
        }
        interface IMaterialMeasurementContractLine {
            lineId: number;
            itemCode: string;
            itemDescription: string;
            quantity: number;
            uom: string;
        }
        /** 物料测量服务代理 */
        class MaterialMeasurementServiceProxy extends ibas.ServiceProxy<IMaterialMeasurementContract> {
        }
        /** 物料毛利润服务契约 */
        interface IMaterialGrossProfitContract extends ibas.IServiceContract {
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据日期 */
            documentDate: Date;
            /** 毛利价格清单 */
            getGrossProfitList(): number;
            setGrossProfitList(value: number): void;
            /** 毛利 */
            getGrossProfit(): number;
            setGrossProfit(value: number): void;
            /** 行项目 */
            lines: IMaterialGrossProfitContractLine[];
        }
        interface IMaterialGrossProfitContractLine {
            lineId: number;
            itemCode: string;
            itemDescription: string;
            quantity: number;
            uom: string;
            price: number;
            currency: string;
            /** 毛利价格来源 */
            getGrossProfitSource(): number;
            setGrossProfitSource(value: number): void;
            /** 毛利价格 */
            getGrossProfitPrice(): number;
            setGrossProfitPrice(value: number): void;
        }
        /** 物料毛利润服务代理 */
        class MaterialGrossProfitServiceProxy extends ibas.ServiceProxy<IMaterialGrossProfitContract> {
        }
        /** 物料历史价格服务契约 */
        interface IMaterialHistoricalPricesContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 业务伙伴名称 */
            businessPartnerName: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据日期 */
            documentDate: Date;
            /** 物料编码 */
            itemCode: string;
            /** 物料描述 */
            itemDescription: string;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /**
             * 应用价格
             * @param type 价格类型
             * @param price 价格
             * @param currency 货币
             */
            applyPrice?: (type: "PRICE" | "PRETAXPRICE" | "UNITPRICE", price: number, currency: string) => void;
        }
        /** 物料历史价格服务代理 */
        class MaterialHistoricalPricesServiceProxy extends ibas.ServiceProxy<IMaterialHistoricalPricesContract> {
        }
        /** 单据物料价格服务契约 */
        interface IDocumentMaterialPriceContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode?: string;
            /** 单据日期 */
            documentDate?: Date;
            /** 结果数量 */
            resultCount?: number;
            /** 分支 */
            branch?: string;
            /** 物料编码 */
            itemCode: string;
            /** 查询完成时 */
            onCompleted(results: Error | IDocumentMaterialPriceData[]): void;
        }
        interface IDocumentMaterialPriceData {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 业务伙伴名称 */
            businessPartnerName: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据日期 */
            documentDate: Date;
            /** 单据行号 */
            documentLineId: number;
            /** 物料编码 */
            itemCode: string;
            /** 物料描述 */
            itemDescription: string;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 税前价格 */
            preTaxPrice: number;
            /** 折扣 */
            discount: number;
            /** 折前价格 */
            unitPrice: number;
        }
        /** 单据物料价格服务代理 */
        class DocumentMaterialPriceServiceProxy extends ibas.ServiceProxy<IDocumentMaterialPriceContract> {
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
                function create(date?: Date): ibas.IList<ibas.ICondition>;
            }
            namespace product {
                /** 查询条件字段-仓库（关系为或） */
                const CONDITION_ALIAS_WAREHOUSE: string;
                /** 查询条件字段-价格清单 */
                const CONDITION_ALIAS_PRICELIST: string;
                /** 查询条件字段-价格货币 */
                const CONDITION_ALIAS_CURRENCY: string;
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
                function create(date?: Date): ibas.IList<ibas.ICondition>;
            }
            namespace warehouse {
                /** 默认查询条件 */
                function create(branch?: string): ibas.IList<ibas.ICondition>;
            }
            namespace materialpricelist {
                /** 默认查询条件 */
                function create(date?: Date): ibas.ICriteria;
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
                /** 查询条件字段-价格货币 */
                const CONDITION_ALIAS_CURRENCY: string;
                /** 查询条件字段-单位 */
                const CONDITION_ALIAS_UOM: string;
                /** 查询条件字段-组 */
                const CONDITION_ALIAS_GROUP: string;
                /** 查询条件字段-客户 */
                const CONDITION_ALIAS_CUSTOMER: string;
                /** 查询条件字段-供应商 */
                const CONDITION_ALIAS_SUPPLIER: string;
                /** 默认查询条件 */
                function create(date?: Date): ibas.ICriteria;
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
            namespace unitrate {
                const CONDITION_VALUE_TEMPLATE: string;
                /** 默认查询条件 */
                function create(material: string | bo.IMaterial): ibas.ICriteria;
            }
            namespace materialsubstitute {
                /** 默认查询条件 */
                function create(): ibas.IList<ibas.ICondition>;
            }
        }
        interface IBeChangedUOMSource {
            caller?: any;
            readonly sourceUnit: string;
            readonly targetUnit: string;
            readonly material?: string;
            setUnitRate(value: number): void;
        }
        interface IBeChangedUOMSourceEx<T> extends IBeChangedUOMSource {
            caller?: T;
            setUnitRate(this: T, value: number): void;
        }
        /**
         * 获取物料单位换算率
         * @param caller
         */
        function changeMaterialsUnitRate(caller: {
            data: IBeChangedUOMSource | IBeChangedUOMSource[];
            onCompleted?(error?: Error): void;
        }): void;
        /**
         * 使用物料预留库存
         * @param caller
         */
        function useReservedMaterialsInventory(caller: {
            targetType: string;
            targetEntries: number | number[];
            onCompleted(results: ibas.IList<bo.MaterialInventoryReservation> | Error): void;
        }): void;
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
            /** 分支 */
            branch: string;
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
            /** 物料版本 */
            itemVersion: string;
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
            /** 分支 */
            branch: string;
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
            /** 物料版本 */
            itemVersion: string;
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
            /** 分支 */
            branch: string;
            /** 库存转储-行集合 */
            inventoryTransferLines: IInventoryTransferLines;
            baseDocument(data: IInventoryTransferRequest): void;
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
            /** 从仓库 */
            fromWarehouse: string;
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
            /** 物料版本 */
            itemVersion: string;
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
            /** 生产商 */
            manufacturer: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 价格 */
            avgPrice: number;
            /** 获取-评估方法 */
            valuationMethod: emValuationMethod;
            /** 库存 */
            onHand: number;
            /** 已承诺 */
            onCommited: number;
            /** 已订购 */
            onOrdered: number;
            /** 已预留 */
            onReserved: number;
            /** 库存价值 */
            inventoryValue: number;
            /** 按仓库管理 */
            manageByWarehouse: ibas.emYesNo;
            /** 最低库存量 */
            minimumInventory: number;
            /** 最高库存量 */
            maximumInventory: number;
            /** 最低订购数量 */
            minimumOrderQuantity: number;
            /** 订购倍数 */
            orderMultiple: number;
            /** 预留可超订购量 */
            reserveExcessOrdered: ibas.emYesNo;
            /** 提前期（天） */
            leadTime: number;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 版本管理 */
            versionManagement: ibas.emYesNo;
            /** 采购税收组 */
            purchaseTaxGroup: string;
            /** 销售税收组 */
            salesTaxGroup: string;
            /** 采购单位 */
            purchaseUOM: string;
            /** 销售单位 */
            salesUOM: string;
            /** 生产单位 */
            productionUOM: string;
            /** 获取方式 */
            procurementMethod: emProcurementMethod;
            /** 领料方式 */
            issueMethod: emIssueMethod;
            /** 计划方式 */
            planningMethod: emPlanningMethod;
            /** 齐套检查 */
            checkCompleteness: ibas.emYesNo;
            /** 批次混用 */
            mixingBatches: ibas.emYesNo;
            /** 订单生产 */
            madeToOrder: ibas.emYesNo;
            /** 图号 */
            darwingNumber: string;
            /** 匹配码 */
            matchCode: string;
            /** 生产批量 */
            lotSize: number;
            /** 损耗率 */
            scrap: string;
            /** 损耗率 */
            scrapRate: number;
            /** 固定损耗 */
            scrapValue: number;
            /** 计划员 */
            scheduler: string;
            /** 计划组 */
            schedulingGroup: string;
            /** 关键件 */
            keyComponent: ibas.emYesNo;
            /** 销售-长 */
            salesLength: number;
            /** 销售-宽 */
            salesWidth: number;
            /** 销售-高 */
            salesHeight: number;
            /** 销售-尺寸单位 */
            salesSizeUnit: string;
            /** 销售-体积 */
            salesVolume: number;
            /** 销售-体积单位 */
            salesVolumeUnit: string;
            /** 销售-重量 */
            salesWeight: number;
            /** 销售-重量单位 */
            salesWeightUnit: string;
            /** 采购-长 */
            purchaseLength: number;
            /** 采购-宽 */
            purchaseWidth: number;
            /** 采购-高 */
            purchaseHeight: number;
            /** 销售-尺寸单位 */
            purchaseSizeUnit: string;
            /** 采购-体积 */
            purchaseVolume: number;
            /** 采购-体积单位 */
            purchaseVolumeUnit: string;
            /** 采购-重量 */
            purchaseWeight: number;
            /** 采购-重量单位 */
            purchaseWeightUnit: string;
            /** 库存-长 */
            inventoryLength: number;
            /** 库存-宽 */
            inventoryWidth: number;
            /** 库存-高 */
            inventoryHeight: number;
            /** 销售-尺寸单位 */
            inventorySizeUnit: string;
            /** 库存-体积 */
            inventoryVolume: number;
            /** 采购-体积单位 */
            inventoryVolumeUnit: string;
            /** 库存-重量 */
            inventoryWeight: number;
            /** 库存-重量单位 */
            inventoryWeightUnit: string;
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
            /** 质检方案 */
            qcSchema: string;
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
            /** 已预留 */
            onReserved: number;
            /** 单位 */
            uom: string;
            /** 来源 */
            source: string;
            /** 可用量（库存 + 已订购 - 已承诺 - 已预留） */
            onAvailable(): number;
            /** 全部库存数量 */
            totalHand: number;
            /** 全部已承诺 */
            totalCommited: number;
            /** 全部已订购 */
            totalOrdered: number;
            /** 全部已预留 */
            totalReserved: number;
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
            /** 单位 */
            uom: string;
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
            /** 预留数量 */
            reservedQuantity: number;
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
            /** 物料版本 */
            version: string;
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
            /** 价格 */
            avgPrice: number;
            /** 库存价值 */
            inventoryValue: number;
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
        interface IMaterialBatchItem extends ibas.IBOSimple, ibas.IBOUserFields {
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
            /** 备注 */
            remarks: string;
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
            readonly inventoryQuantity: number;
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 计算价格 */
            calculatedPrice: number;
            /** 交易值 */
            transactionValue: number;
            /** 过账日期 */
            postingDate: Date;
            /** 到期日 */
            deliveryDate: Date;
            /** 凭证日期 */
            documentDate: Date;
            /** 库存数量 */
            inventoryQuantity: number;
            /** 库存价值 */
            inventoryValue: number;
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
declare namespace materials {
    namespace bo {
        /** 物料库存 */
        interface IMaterialInventory extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 仓库编码 */
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
            /** 已预留 */
            onReserved: number;
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
            /** 仓库编码 */
            warehouse: string;
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
            /** 计算价格 */
            calculatedPrice: number;
            /** 交易值 */
            transactionValue: number;
            /** 过账日期 */
            postingDate: Date;
            /** 到期日 */
            deliveryDate: Date;
            /** 凭证日期 */
            documentDate: Date;
            /** 库存数量 */
            inventoryQuantity: number;
            /** 库存价值 */
            inventoryValue: number;
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
            /** 计量单位 */
            uom: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
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
            /** 预留 */
            reserved: ibas.emYesNo;
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
            /** 物料版本 */
            version: string;
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
            /** 价格 */
            avgPrice: number;
            /** 库存价值 */
            inventoryValue: number;
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
        interface IMaterialSerialItem extends ibas.IBOSimple, ibas.IBOUserFields {
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
            /** 备注 */
            remarks: string;
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
            readonly inventoryQuantity: number;
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 数量 */
            quantity: number;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 计算价格 */
            calculatedPrice: number;
            /** 交易值 */
            transactionValue: number;
            /** 过账日期 */
            postingDate: Date;
            /** 到期日 */
            deliveryDate: Date;
            /** 凭证日期 */
            documentDate: Date;
            /** 库存数量 */
            inventoryQuantity: number;
            /** 库存价值 */
            inventoryValue: number;
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
            /** 缺省仓库 */
            defaultWarehouse: string;
            /** 首选供应商 */
            preferredVendor: string;
            /** 生产商 */
            manufacturer: string;
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
            /** 采购单位 */
            purchaseUOM: string;
            /** 销售单位 */
            salesUOM: string;
            /** 生产单位 */
            productionUOM: string;
            /** 获取方式 */
            procurementMethod: emProcurementMethod;
            /** 领料方式 */
            issueMethod: emIssueMethod;
            /** 计划方式 */
            planningMethod: emPlanningMethod;
            /** 齐套检查 */
            checkCompleteness: ibas.emYesNo;
            /** 批次混用 */
            mixingBatches: ibas.emYesNo;
            /** 订单生产 */
            madeToOrder: ibas.emYesNo;
            /** 图号 */
            darwingNumber: string;
            /** 匹配码 */
            matchCode: string;
            /** 生产批量 */
            lotSize: number;
            /** 废品率 */
            scrap: string;
            /** 计划员 */
            scheduler: string;
            /** 计划组 */
            schedulingGroup: string;
            /** 关键件 */
            keyComponent: ibas.emYesNo;
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
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据类型 */
            orderType: string;
            /** 分支 */
            branch: string;
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
            stockQuantity: number;
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
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
        }
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
            /** 供应商 */
            supplier: string;
            /** 可排程 */
            schedulable: ibas.emYesNo;
            /** 可预留 */
            reservable: ibas.emYesNo;
            /** 废料仓 */
            scrap: ibas.emYesNo;
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
        /** 计量单位 */
        interface IUnit extends ibas.IBOSimple {
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
            /** 数据所有者 */
            dataOwner: number;
            /** 名称 */
            name: string;
            /** 外文名称 */
            foreignName: string;
            /** 符号 */
            symbol: string;
            /** 是否激活 */
            activated: ibas.emYesNo;
            /** 小数位数 */
            decimalPlaces: number;
            /** 类别 */
            category: string;
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
declare namespace materials {
    namespace bo {
        /** 计量单位换算率 */
        interface IUnitRate extends ibas.IBOSimple {
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
            /** 数据所有者 */
            dataOwner: number;
            /** 源 */
            source: string;
            /** 目标 */
            target: string;
            /** 换算率 */
            rate: number;
            /** 条件 */
            condition: string;
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
declare namespace materials {
    namespace bo {
        /** 物料废品率 */
        interface IMaterialScrap extends ibas.IBOSimple {
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 率 */
            rate: number;
            /** 值 */
            value: number;
            /** 阶梯的 */
            tiered: ibas.emYesNo;
            /** 备注 */
            remarks: string;
            /** 物料废品率 - 阶梯集合 */
            materialScrapSections: IMaterialScrapSections;
            /**
             * 计算数量的损耗
             * @param quantity 计划数量
             * @returns 加了损耗的数量
             */
            compute(quantity: number): number;
        }
        /** 物料废品率 - 阶梯 集合 */
        interface IMaterialScrapSections extends ibas.IBusinessObjects<IMaterialScrapSection> {
            /** 创建并添加子项 */
            create(): IMaterialScrapSection;
        }
        /** 物料废品率 - 阶梯 */
        interface IMaterialScrapSection extends ibas.IBOSimpleLine {
            /** 编号 */
            objectKey: number;
            /** 行号 */
            lineId: number;
            /** 类型 */
            objectCode: string;
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
            /** 区间开始 */
            sectionStart: number;
            /** 区间结束 */
            sectionEnd: number;
            /** 率 */
            rate: number;
            /** 值 */
            value: number;
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
declare namespace materials {
    namespace bo {
        /** 物料版本 */
        interface IMaterialVersion extends ibas.IBOSimple {
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 物料编码 */
            itemCode: string;
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
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
declare namespace materials {
    namespace bo {
        /** 物料库存预留 */
        interface IMaterialInventoryReservation extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 批次编码 */
            batchCode: string;
            /** 序列编码 */
            serialCode: string;
            /** 数量 */
            quantity: number;
            /** 失效日期 */
            invalidDate: Date;
            /** 失效时间 */
            invalidTime: number;
            /** 目标单据类型 */
            targetDocumentType: string;
            /** 目标单据编号 */
            targetDocumentEntry: number;
            /** 目标单据行号 */
            targetDocumentLineId: number;
            /** 原因 */
            causes: string;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 已清数量 */
            closedQuantity: number;
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 备注 */
            remarks: string;
            /** 基于物料库存信息 */
            baseBusinessObject(data: IMaterialInventory): void;
            /** 基于物料批次信息 */
            baseBusinessObject(data: IMaterialBatch): void;
            /** 基于物料序列信息 */
            baseBusinessObject(data: IMaterialSerial): void;
        }
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
        /** 物料替代 */
        interface IMaterialSubstitute extends ibas.IBOSimple {
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 物料编码 */
            itemCode: string;
            /** 位置 */
            position: number;
            /** 替代物料 */
            substitute: string;
            /** 物料版本 */
            version: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
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
declare namespace materials {
    namespace bo {
        /** 物料订购预留 */
        interface IMaterialOrderedReservation extends ibas.IBOSimple {
            /** 源单据类型 */
            sourceDocumentType: string;
            /** 源单据编号 */
            sourceDocumentEntry: number;
            /** 源单据行号 */
            sourceDocumentLineId: number;
            /** 源单据关闭 */
            sourceDocumentClosed: ibas.emYesNo;
            /** 物料编码 */
            itemCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 数量 */
            quantity: number;
            /** 交货日期 */
            deliveryDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 失效时间 */
            invalidTime: number;
            /** 目标单据类型 */
            targetDocumentType: string;
            /** 目标单据编号 */
            targetDocumentEntry: number;
            /** 目标单据行号 */
            targetDocumentLineId: number;
            /** 目标单据关闭 */
            targetDocumentClosed: ibas.emYesNo;
            /** 原因 */
            causes: string;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 已清数量 */
            closedQuantity: number;
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
declare namespace materials {
    namespace bo {
        /** 仓库预估日记账 */
        interface IMaterialEstimateJournal extends ibas.IBOSimple {
            /** 物料编码 */
            itemCode: string;
            /** 物料名称 */
            itemName: string;
            /** 仓库编码 */
            warehouse: string;
            /** 预估类型 */
            estimate: emEstimateType;
            /** 数量 */
            quantity: number;
            /** 已清数量 */
            closedQuantity: number;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 预留数量 */
            reservedQuantity: number;
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
        /** 拣配清单 */
        interface IPickLists extends ibas.IBOSimple {
            /** 对象编号 */
            objectKey: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 服务系列 */
            series: number;
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 备注 */
            remarks: string;
            /** 拣配员 */
            picker: string;
            /** 拣配日期 */
            pickDate: Date;
            /** 拣配状态 */
            pickStatus: emPickStatus;
            /** 拣配清单-行集合 */
            pickListsLines: IPickListsLines;
        }
        /** 拣配清单-行 集合 */
        interface IPickListsLines extends ibas.IBusinessObjects<IPickListsLine> {
            /** 创建并添加子项 */
            create(): IPickListsLine;
        }
        /** 拣配清单-行 */
        interface IPickListsLine extends ibas.IBOSimpleLine {
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
            /** 备注 */
            remarks: string;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 交货/到期日期 */
            deliveryDate: Date;
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
            /** 单位 */
            uom: string;
            /** 库存单位 */
            inventoryUOM: string;
            /** 单位换算率 */
            uomRate: number;
            /** 库存数量 */
            inventoryQuantity: number;
            /** 拣配状态 */
            pickStatus: emPickStatus;
            /** 拣配数量 */
            pickQuantity: number;
            /** 已清数量 */
            closedQuantity: number;
            /** 仓库 */
            warehouse: string;
            /** 拣配清单-序号集合 */
            pickListsNumbers: IPickListsNumbers;
        }
        /** 拣配清单-序号 集合 */
        interface IPickListsNumbers extends ibas.IBusinessObjects<IPickListsNumber> {
            /** 创建并添加子项 */
            create(): IPickListsNumber;
        }
        /** 拣配清单-序号 */
        interface IPickListsNumber extends ibas.IBOSimpleLine {
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
            /** 备注 */
            remarks: string;
            /** 行项目号 */
            itemId: number;
            /** 仓库编码 */
            warehouse: string;
            /** 批次编码 */
            batchCode: string;
            /** 序列编码 */
            serialCode: string;
            /** 拣配数量 */
            pickQuantity: number;
        }
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
        interface IInventoryTransferRequest extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 分支 */
            branch: string;
            /** 库存转储-行集合 */
            inventoryTransferRequestLines: IInventoryTransferRequestLines;
        }
        /** 库存转储-行 集合 */
        interface IInventoryTransferRequestLines extends ibas.IBusinessObjects<IInventoryTransferRequestLine> {
            /** 创建并添加子项 */
            create(): IInventoryTransferRequestLine;
        }
        /** 库存转储-行 */
        interface IInventoryTransferRequestLine extends ibas.IBODocumentLine, IMaterialSerialItemParent, IMaterialBatchItemParent, ibas.IBOUserFields {
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
            /** 从仓库 */
            fromWarehouse: string;
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
            /** 物料版本 */
            itemVersion: string;
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
            /** 已清数量 */
            closedQuantity: number;
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
        /** 物料特殊价格 */
        interface IMaterialSpecialPrice extends ibas.IBOSimple {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴代码 */
            businessPartnerCode: string;
            /** 物料编码 */
            itemCode: string;
            /** 单位 */
            uom: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 备注 */
            remarks: string;
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
        /** 物料系号关联 */
        interface IMaterialNumberAssociation extends ibas.IBOSimple {
            /** 基于单据类型 */
            baseDocumentType: string;
            /** 基于单据编号 */
            baseDocumentEntry: number;
            /** 基于单据行号 */
            baseDocumentLineId: number;
            /** 关系 */
            relation: string;
            /** 物料编码 */
            itemCode: string;
            /** 仓库编码 */
            warehouse: string;
            /** 批次编码 */
            batchCode: string;
            /** 序列编码 */
            serialCode: string;
            /** 关联物料编码 */
            associatedItem: string;
            /** 关联仓库编码 */
            associatedWarehouse: string;
            /** 关联批次编码 */
            associatedBatch: string;
            /** 关联序列编码 */
            associatedSerial: string;
            /** 数量 */
            quantity: number;
            /** 原因 */
            causes: string;
            /** 失效日期 */
            expirationDate: Date;
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
declare namespace materials {
    namespace bo {
        /** 业务伙伴物料目录 */
        interface IBusinessPartnerMaterialCatalog extends ibas.IBOSimple {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴代码 */
            businessPartnerCode: string;
            /** 物料编码 */
            itemCode: string;
            /** 目录编码 */
            catalogCode: string;
            /** 目录名称 */
            catalogName: string;
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
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
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
declare namespace materials {
    namespace bo {
        /** 计划组 */
        interface ISchedulingGroup extends ibas.IBOMasterData {
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
            /** 激活 */
            activated: ibas.emYesNo;
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
             * 查询 仓库预估日记账
             * @param fetcher 查询者
             */
            fetchMaterialEstimateJournal(fetcher: ibas.IFetchCaller<bo.IMaterialEstimateJournal>): void;
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
            /**
             * 查询 计量单位
             * @param fetcher 查询者
             */
            fetchUnit(fetcher: ibas.IFetchCaller<bo.IUnit>): void;
            /**
             * 保存 计量单位
             * @param saver 保存者
             */
            saveUnit(saver: ibas.ISaveCaller<bo.IUnit>): void;
            /**
             * 查询 计量单位换算率
             * @param fetcher 查询者
             */
            fetchUnitRate(fetcher: ibas.IFetchCaller<bo.IUnitRate>): void;
            /**
             * 保存 计量单位换算率
             * @param saver 保存者
             */
            saveUnitRate(saver: ibas.ISaveCaller<bo.IUnitRate>): void;
            /**
             * 查询 物料废品率
             * @param fetcher 查询者
             */
            fetchMaterialScrap(fetcher: ibas.IFetchCaller<bo.IMaterialScrap>): void;
            /**
             * 保存 物料废品率
             * @param saver 保存者
             */
            saveMaterialScrap(saver: ibas.ISaveCaller<bo.IMaterialScrap>): void;
            /**
             * 查询 物料版本
             * @param fetcher 查询者
             */
            fetchMaterialVersion(fetcher: ibas.IFetchCaller<bo.IMaterialVersion>): void;
            /**
             * 保存 物料版本
             * @param saver 保存者
             */
            saveMaterialVersion(saver: ibas.ISaveCaller<bo.IMaterialVersion>): void;
            /**
             * 查询 物料库存预留
             * @param fetcher 查询者
             */
            fetchMaterialInventoryReservation(fetcher: ibas.IFetchCaller<bo.IMaterialInventoryReservation>): void;
            /**
             * 保存 物料库存预留
             * @param saver 保存者
             */
            saveMaterialInventoryReservation(saver: ibas.ISaveCaller<bo.IMaterialInventoryReservation>): void;
            /**
             * 查询 物料替代
             * @param fetcher 查询者
             */
            fetchMaterialSubstitute(fetcher: ibas.IFetchCaller<bo.IMaterialSubstitute>): void;
            /**
             * 保存 物料替代
             * @param saver 保存者
             */
            saveMaterialSubstitute(saver: ibas.ISaveCaller<bo.IMaterialSubstitute>): void;
            /**
             * 查询 物料订购预留
             * @param fetcher 查询者
             */
            fetchMaterialOrderedReservation(fetcher: ibas.IFetchCaller<bo.IMaterialOrderedReservation>): void;
            /**
             * 保存 物料订购预留
             * @param saver 保存者
             */
            saveMaterialOrderedReservation(saver: ibas.ISaveCaller<bo.IMaterialOrderedReservation>): void;
            /**
             * 查询 拣配清单
             * @param fetcher 查询者
             */
            fetchPickLists(fetcher: ibas.IFetchCaller<bo.IPickLists>): void;
            /**
             * 保存 拣配清单
             * @param saver 保存者
             */
            savePickLists(saver: ibas.ISaveCaller<bo.IPickLists>): void;
            /**
             * 查询 库存转储请求
             * @param fetcher 查询者
             */
            fetchInventoryTransferRequest(fetcher: ibas.IFetchCaller<bo.IInventoryTransferRequest>): void;
            /**
             * 保存 库存转储请求
             * @param saver 保存者
             */
            saveInventoryTransferRequest(saver: ibas.ISaveCaller<bo.IInventoryTransferRequest>): void;
            /**
             * 查询 物料特殊价格
             * @param fetcher 查询者
             */
            fetchMaterialSpecialPrice(fetcher: ibas.IFetchCaller<bo.IMaterialSpecialPrice>): void;
            /**
             * 保存 物料特殊价格
             * @param saver 保存者
             */
            saveMaterialSpecialPrice(saver: ibas.ISaveCaller<bo.IMaterialSpecialPrice>): void;
            /**
             * 查询 物料系号关联
             * @param fetcher 查询者
             */
            fetchMaterialNumberAssociation(fetcher: ibas.IFetchCaller<bo.IMaterialNumberAssociation>): void;
            /**
             * 保存 物料系号关联
             * @param saver 保存者
             */
            saveMaterialNumberAssociation(saver: ibas.ISaveCaller<bo.IMaterialNumberAssociation>): void;
            /**
             * 查询 业务伙伴物料目录
             * @param fetcher 查询者
             */
            fetchBusinessPartnerMaterialCatalog(fetcher: ibas.IFetchCaller<bo.IBusinessPartnerMaterialCatalog>): void;
            /**
             * 保存 业务伙伴物料目录
             * @param saver 保存者
             */
            saveBusinessPartnerMaterialCatalog(saver: ibas.ISaveCaller<bo.IBusinessPartnerMaterialCatalog>): void;
            /**
             * 查询 计划组
             * @param fetcher 查询者
             */
            fetchSchedulingGroup(fetcher: ibas.IFetchCaller<bo.ISchedulingGroup>): void;
            /**
             * 保存 计划组
             * @param saver 保存者
             */
            saveSchedulingGroup(saver: ibas.ISaveCaller<bo.ISchedulingGroup>): void;
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
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
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
            protected afterAdd(item: GoodsIssueLine): void;
            protected onParentPropertyChanged(name: string): void;
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
            /** 映射的属性名称-物料版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-物料版本 */
            get itemVersion(): string;
            /** 设置-物料版本 */
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
            get inventoryQuantity(): number;
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: bo.IMaterial | bo.IProduct): void;
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
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
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
            protected afterAdd(item: GoodsReceiptLine): void;
            protected onParentPropertyChanged(name: string): void;
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
            /** 映射的属性名称-物料版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-物料版本 */
            get itemVersion(): string;
            /** 设置-物料版本 */
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
            get inventoryQuantity(): number;
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: materials.bo.IMaterial | materials.bo.IProduct): void;
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
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
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
            baseDocument(data: IInventoryTransferRequest): void;
        }
        /** 库存转储-行 集合 */
        class InventoryTransferLines extends ibas.BusinessObjects<InventoryTransferLine, InventoryTransfer> implements IInventoryTransferLines {
            /** 创建并添加子项 */
            create(): InventoryTransferLine;
            protected afterAdd(item: InventoryTransferLine): void;
            protected onParentPropertyChanged(name: string): void;
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
            /** 映射的属性名称-从仓库 */
            static PROPERTY_FROMWAREHOUSE_NAME: string;
            /** 获取-从仓库 */
            get fromWarehouse(): string;
            /** 设置-从仓库 */
            set fromWarehouse(value: string);
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
            /** 映射的属性名称-物料版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-物料版本 */
            get itemVersion(): string;
            /** 设置-物料版本 */
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
            get inventoryQuantity(): number;
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: bo.IMaterial | bo.IProduct): void;
            baseDocument(data: IInventoryTransferRequestLine): void;
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
            /** 映射的属性名称-生产商 */
            static PROPERTY_MANUFACTURER_NAME: string;
            /** 获取-生产商 */
            get manufacturer(): string;
            /** 设置-生产商 */
            set manufacturer(value: string);
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
            /** 映射的属性名称-评估方法 */
            static PROPERTY_VALUATIONMETHOD_NAME: string;
            /** 获取-评估方法 */
            get valuationMethod(): emValuationMethod;
            /** 设置-评估方法 */
            set valuationMethod(value: emValuationMethod);
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
            /** 映射的属性名称-已预留 */
            static PROPERTY_ONRESERVED_NAME: string;
            /** 获取-已预留 */
            get onReserved(): number;
            /** 设置-已预留 */
            set onReserved(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
            /** 映射的属性名称-按仓库管理 */
            static PROPERTY_MANAGEBYWAREHOUSE_NAME: string;
            /** 获取-按仓库管理 */
            get manageByWarehouse(): ibas.emYesNo;
            /** 设置-按仓库管理 */
            set manageByWarehouse(value: ibas.emYesNo);
            /** 映射的属性名称-最低库存量 */
            static PROPERTY_MINIMUMINVENTORY_NAME: string;
            /** 获取-最低库存量 */
            get minimumInventory(): number;
            /** 设置-最低库存量 */
            set minimumInventory(value: number);
            /** 映射的属性名称-最高库存量 */
            static PROPERTY_MAXIMUMINVENTORY_NAME: string;
            /** 获取-最高库存量 */
            get maximumInventory(): number;
            /** 设置-最高库存量 */
            set maximumInventory(value: number);
            /** 映射的属性名称-最低订购数量 */
            static PROPERTY_MINIMUMORDERQUANTITY_NAME: string;
            /** 获取-最低订购数量 */
            get minimumOrderQuantity(): number;
            /** 设置-最低订购数量 */
            set minimumOrderQuantity(value: number);
            /** 映射的属性名称-订购倍数 */
            static PROPERTY_ORDERMULTIPLE_NAME: string;
            /** 获取-订购倍数 */
            get orderMultiple(): number;
            /** 设置-订购倍数 */
            set orderMultiple(value: number);
            /** 映射的属性名称-预留可超订购量 */
            static PROPERTY_RESERVEEXCESSORDERED_NAME: string;
            /** 获取-预留可超订购量 */
            get reserveExcessOrdered(): ibas.emYesNo;
            /** 设置-预留可超订购量 */
            set reserveExcessOrdered(value: ibas.emYesNo);
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
            /** 映射的属性名称-版本管理 */
            static PROPERTY_VERSIONMANAGEMENT_NAME: string;
            /** 获取-版本管理 */
            get versionManagement(): ibas.emYesNo;
            /** 设置-版本管理 */
            set versionManagement(value: ibas.emYesNo);
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
            /** 映射的属性名称-采购单位 */
            static PROPERTY_PURCHASEUOM_NAME: string;
            /** 获取-采购单位 */
            get purchaseUOM(): string;
            /** 设置-采购单位 */
            set purchaseUOM(value: string);
            /** 映射的属性名称-销售单位 */
            static PROPERTY_SALESUOM_NAME: string;
            /** 获取-销售单位 */
            get salesUOM(): string;
            /** 设置-销售单位 */
            set salesUOM(value: string);
            /** 映射的属性名称-生产单位 */
            static PROPERTY_PRODUCTIONUOM_NAME: string;
            /** 获取-生产单位 */
            get productionUOM(): string;
            /** 设置-生产单位 */
            set productionUOM(value: string);
            /** 映射的属性名称-获取方式 */
            static PROPERTY_PROCUREMENTMETHOD_NAME: string;
            /** 获取-获取方式 */
            get procurementMethod(): emProcurementMethod;
            /** 设置-获取方式 */
            set procurementMethod(value: emProcurementMethod);
            /** 映射的属性名称-领料方式 */
            static PROPERTY_ISSUEMETHOD_NAME: string;
            /** 获取-领料方式 */
            get issueMethod(): emIssueMethod;
            /** 设置-领料方式 */
            set issueMethod(value: emIssueMethod);
            /** 映射的属性名称-计划方式 */
            static PROPERTY_PLANNINGMETHOD_NAME: string;
            /** 获取-计划方式 */
            get planningMethod(): emPlanningMethod;
            /** 设置-计划方式 */
            set planningMethod(value: emPlanningMethod);
            /** 映射的属性名称-齐套检查 */
            static PROPERTY_CHECKCOMPLETENESS_NAME: string;
            /** 获取-齐套检查 */
            get checkCompleteness(): ibas.emYesNo;
            /** 设置-齐套检查 */
            set checkCompleteness(value: ibas.emYesNo);
            /** 映射的属性名称-批次混用 */
            static PROPERTY_MIXINGBATCHES_NAME: string;
            /** 获取-批次混用 */
            get mixingBatches(): ibas.emYesNo;
            /** 设置-批次混用 */
            set mixingBatches(value: ibas.emYesNo);
            /** 映射的属性名称-订单生产 */
            static PROPERTY_MADETOORDER_NAME: string;
            /** 获取-订单生产 */
            get madeToOrder(): ibas.emYesNo;
            /** 设置-订单生产 */
            set madeToOrder(value: ibas.emYesNo);
            /** 映射的属性名称-图号 */
            static PROPERTY_DARWINGNUMBER_NAME: string;
            /** 获取-图号 */
            get darwingNumber(): string;
            /** 设置-图号 */
            set darwingNumber(value: string);
            /** 映射的属性名称-匹配码 */
            static PROPERTY_MATCHCODE_NAME: string;
            /** 获取-匹配码 */
            get matchCode(): string;
            /** 设置-匹配码 */
            set matchCode(value: string);
            /** 映射的属性名称-生产批量 */
            static PROPERTY_LOTSIZE_NAME: string;
            /** 获取-生产批量 */
            get lotSize(): number;
            /** 设置-生产批量 */
            set lotSize(value: number);
            /** 映射的属性名称-损耗率 */
            static PROPERTY_SCRAP_NAME: string;
            /** 获取-损耗率 */
            get scrap(): string;
            /** 设置-损耗率 */
            set scrap(value: string);
            /** 映射的属性名称-变动损耗 */
            static PROPERTY_SCRAPRATE_NAME: string;
            /** 获取-变动损耗 */
            get scrapRate(): number;
            /** 设置-变动损耗 */
            set scrapRate(value: number);
            /** 映射的属性名称-固定损耗 */
            static PROPERTY_SCRAPVALUE_NAME: string;
            /** 获取-固定损耗 */
            get scrapValue(): number;
            /** 设置-固定损耗 */
            set scrapValue(value: number);
            /** 映射的属性名称-计划员 */
            static PROPERTY_SCHEDULER_NAME: string;
            /** 获取-计划员 */
            get scheduler(): string;
            /** 设置-计划员 */
            set scheduler(value: string);
            /** 映射的属性名称-计划组 */
            static PROPERTY_SCHEDULINGGROUP_NAME: string;
            /** 获取-计划组 */
            get schedulingGroup(): string;
            /** 设置-计划组 */
            set schedulingGroup(value: string);
            /** 映射的属性名称-关键件 */
            static PROPERTY_KEYCOMPONENT_NAME: string;
            /** 获取-关键件 */
            get keyComponent(): ibas.emYesNo;
            /** 设置-关键件 */
            set keyComponent(value: ibas.emYesNo);
            /** 映射的属性名称-销售-长 */
            static PROPERTY_SALESLENGTH_NAME: string;
            /** 获取-销售-长 */
            get salesLength(): number;
            /** 设置-销售-长 */
            set salesLength(value: number);
            /** 映射的属性名称-销售-宽 */
            static PROPERTY_SALESWIDTH_NAME: string;
            /** 获取-销售-宽 */
            get salesWidth(): number;
            /** 设置-销售-宽 */
            set salesWidth(value: number);
            /** 映射的属性名称-销售-高 */
            static PROPERTY_SALESHEIGHT_NAME: string;
            /** 获取-销售-高 */
            get salesHeight(): number;
            /** 设置-销售-高 */
            set salesHeight(value: number);
            /** 映射的属性名称-销售-尺寸单位 */
            static PROPERTY_SALESSIZEUNIT_NAME: string;
            /** 获取-销售-尺寸单位 */
            get salesSizeUnit(): string;
            /** 设置-销售-尺寸单位 */
            set salesSizeUnit(value: string);
            /** 映射的属性名称-销售-体积 */
            static PROPERTY_SALESVOLUME_NAME: string;
            /** 获取-销售-体积 */
            get salesVolume(): number;
            /** 设置-销售-体积 */
            set salesVolume(value: number);
            /** 映射的属性名称-销售-体积单位 */
            static PROPERTY_SALESVOLUMEUNIT_NAME: string;
            /** 获取-销售-体积单位 */
            get salesVolumeUnit(): string;
            /** 设置-销售-体积单位 */
            set salesVolumeUnit(value: string);
            /** 映射的属性名称-销售-重量 */
            static PROPERTY_SALESWEIGHT_NAME: string;
            /** 获取-销售-重量 */
            get salesWeight(): number;
            /** 设置-销售-重量 */
            set salesWeight(value: number);
            /** 映射的属性名称-销售-重量单位 */
            static PROPERTY_SALESWEIGHTUNIT_NAME: string;
            /** 获取-销售-重量单位 */
            get salesWeightUnit(): string;
            /** 设置-销售-重量单位 */
            set salesWeightUnit(value: string);
            /** 映射的属性名称-采购-长 */
            static PROPERTY_PURCHASELENGTH_NAME: string;
            /** 获取-采购-长 */
            get purchaseLength(): number;
            /** 设置-采购-长 */
            set purchaseLength(value: number);
            /** 映射的属性名称-采购-宽 */
            static PROPERTY_PURCHASEWIDTH_NAME: string;
            /** 获取-采购-宽 */
            get purchaseWidth(): number;
            /** 设置-采购-宽 */
            set purchaseWidth(value: number);
            /** 映射的属性名称-采购-高 */
            static PROPERTY_PURCHASEHEIGHT_NAME: string;
            /** 获取-采购-高 */
            get purchaseHeight(): number;
            /** 设置-采购-高 */
            set purchaseHeight(value: number);
            /** 映射的属性名称-销售-尺寸单位 */
            static PROPERTY_PURCHASESIZEUNIT_NAME: string;
            /** 获取-销售-尺寸单位 */
            get purchaseSizeUnit(): string;
            /** 设置-销售-尺寸单位 */
            set purchaseSizeUnit(value: string);
            /** 映射的属性名称-采购-体积 */
            static PROPERTY_PURCHASEVOLUME_NAME: string;
            /** 获取-采购-体积 */
            get purchaseVolume(): number;
            /** 设置-采购-体积 */
            set purchaseVolume(value: number);
            /** 映射的属性名称-采购-体积单位 */
            static PROPERTY_PURCHASEVOLUMEUNIT_NAME: string;
            /** 获取-采购-体积单位 */
            get purchaseVolumeUnit(): string;
            /** 设置-采购-体积单位 */
            set purchaseVolumeUnit(value: string);
            /** 映射的属性名称-采购-重量 */
            static PROPERTY_PURCHASEWEIGHT_NAME: string;
            /** 获取-采购-重量 */
            get purchaseWeight(): number;
            /** 设置-采购-重量 */
            set purchaseWeight(value: number);
            /** 映射的属性名称-采购-重量单位 */
            static PROPERTY_PURCHASEWEIGHTUNIT_NAME: string;
            /** 获取-采购-重量单位 */
            get purchaseWeightUnit(): string;
            /** 设置-采购-重量单位 */
            set purchaseWeightUnit(value: string);
            /** 映射的属性名称-库存-长 */
            static PROPERTY_INVENTORYLENGTH_NAME: string;
            /** 获取-库存-长 */
            get inventoryLength(): number;
            /** 设置-库存-长 */
            set inventoryLength(value: number);
            /** 映射的属性名称-库存-宽 */
            static PROPERTY_INVENTORYWIDTH_NAME: string;
            /** 获取-库存-宽 */
            get inventoryWidth(): number;
            /** 设置-库存-宽 */
            set inventoryWidth(value: number);
            /** 映射的属性名称-库存-高 */
            static PROPERTY_INVENTORYHEIGHT_NAME: string;
            /** 获取-库存-高 */
            get inventoryHeight(): number;
            /** 设置-库存-高 */
            set inventoryHeight(value: number);
            /** 映射的属性名称-销售-尺寸单位 */
            static PROPERTY_INVENTORYSIZEUNIT_NAME: string;
            /** 获取-销售-尺寸单位 */
            get inventorySizeUnit(): string;
            /** 设置-销售-尺寸单位 */
            set inventorySizeUnit(value: string);
            /** 映射的属性名称-库存-体积 */
            static PROPERTY_INVENTORYVOLUME_NAME: string;
            /** 获取-库存-体积 */
            get inventoryVolume(): number;
            /** 设置-库存-体积 */
            set inventoryVolume(value: number);
            /** 映射的属性名称-采购-体积单位 */
            static PROPERTY_INVENTORYVOLUMEUNIT_NAME: string;
            /** 获取-采购-体积单位 */
            get inventoryVolumeUnit(): string;
            /** 设置-采购-体积单位 */
            set inventoryVolumeUnit(value: string);
            /** 映射的属性名称-库存-重量 */
            static PROPERTY_INVENTORYWEIGHT_NAME: string;
            /** 获取-库存-重量 */
            get inventoryWeight(): number;
            /** 设置-库存-重量 */
            set inventoryWeight(value: number);
            /** 映射的属性名称-库存-重量单位 */
            static PROPERTY_INVENTORYWEIGHTUNIT_NAME: string;
            /** 获取-库存-重量单位 */
            get inventoryWeightUnit(): string;
            /** 设置-库存-重量单位 */
            set inventoryWeightUnit(value: string);
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
            /** 映射的属性名称-质检方案 */
            static PROPERTY_QCSCHEMA_NAME: string;
            /** 获取-质检方案 */
            get qcSchema(): string;
            /** 设置-质检方案 */
            set qcSchema(value: string);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            /** 可用量（库存 + 已订购 - 已承诺） */
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
            /** 映射的属性名称-已预留 */
            static PROPERTY_ONRESERVED_NAME: string;
            /** 获取-已预留 */
            get onReserved(): number;
            /** 设置-已预留 */
            set onReserved(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-数据源 */
            static PROPERTY_SOURCE_NAME: string;
            /** 获取-数据源 */
            get source(): string;
            /** 设置-数据源 */
            set source(value: string);
            /** 映射的属性名称-库存 */
            static PROPERTY_TOTALHAND_NAME: string;
            /** 获取-库存 */
            get totalHand(): number;
            /** 设置-库存 */
            set totalHand(value: number);
            /** 映射的属性名称-库存 */
            static PROPERTY_TOTALORDERED_NAME: string;
            /** 获取-库存 */
            get totalOrdered(): number;
            /** 设置-库存 */
            set totalOrdered(value: number);
            /** 映射的属性名称-库存 */
            static PROPERTY_TOTALCOMMITED_NAME: string;
            /** 获取-库存 */
            get totalCommited(): number;
            /** 设置-库存 */
            set totalCommited(value: number);
            /** 映射的属性名称-已预留 */
            static PROPERTY_TOTALRESERVED_NAME: string;
            /** 获取-已预留 */
            get totalReserved(): number;
            /** 设置-已预留 */
            set totalReserved(value: number);
            /** 字符串 */
            toString(): string;
            /** 获取查询 */
            criteria(): ibas.ICriteria;
            /** 初始化数据 */
            protected init(): void;
            /** 可用量（库存 + 已订购 - 已承诺） */
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
            markOld(): void;
        }
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
            /** 映射的属性名称-锁定 */
            static PROPERTY_LOCKED_NAME: string;
            /** 获取-锁定 */
            get locked(): ibas.emYesNo;
            /** 设置-锁定 */
            set locked(value: ibas.emYesNo);
            /** 映射的属性名称-预留数量 */
            static PROPERTY_RESERVEDQUANTITY_NAME: string;
            /** 获取-预留数量 */
            get reservedQuantity(): number;
            /** 设置-预留数量 */
            set reservedQuantity(value: number);
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
            /** 映射的属性名称-物料版本 */
            static PROPERTY_VERSION_NAME: string;
            /** 获取-物料版本 */
            get version(): string;
            /** 设置-物料版本 */
            set version(value: string);
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
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-价格 */
            static PROPERTY_AVGPRICE_NAME: string;
            /** 获取-价格 */
            get avgPrice(): number;
            /** 设置-价格 */
            set avgPrice(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
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
            /** 映射的属性名称-计算价格 */
            static PROPERTY_CALCULATEDPRICE_NAME: string;
            /** 获取-计算价格 */
            get calculatedPrice(): number;
            /** 设置-计算价格 */
            set calculatedPrice(value: number);
            /** 映射的属性名称-交易值 */
            static PROPERTY_TRANSACTIONVALUE_NAME: string;
            /** 获取-交易值 */
            get transactionValue(): number;
            /** 设置-交易值 */
            set transactionValue(value: number);
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
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
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
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
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
            /** 映射的属性名称-已预留 */
            static PROPERTY_ONRESERVED_NAME: string;
            /** 获取-已预留 */
            get onReserved(): number;
            /** 设置-已预留 */
            set onReserved(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
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
            /** 可用量（库存 + 已订购 - 已承诺 ） */
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
            /** 映射的属性名称-计算价格 */
            static PROPERTY_CALCULATEDPRICE_NAME: string;
            /** 获取-计算价格 */
            get calculatedPrice(): number;
            /** 设置-计算价格 */
            set calculatedPrice(value: number);
            /** 映射的属性名称-交易值 */
            static PROPERTY_TRANSACTIONVALUE_NAME: string;
            /** 获取-交易值 */
            get transactionValue(): number;
            /** 设置-交易值 */
            set transactionValue(value: number);
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
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
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
            /** 价格清单：成本价格 */
            static PRICE_LIST_COST_PRICE: number;
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
            protected afterAdd(item: MaterialPriceItem): void;
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
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
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
            /** 映射的属性名称-预留 */
            static PROPERTY_RESERVED_NAME: string;
            /** 获取-预留 */
            get reserved(): ibas.emYesNo;
            /** 设置-预留 */
            set reserved(value: ibas.emYesNo);
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
            /** 映射的属性名称-物料版本 */
            static PROPERTY_VERSION_NAME: string;
            /** 获取-物料版本 */
            get version(): string;
            /** 设置-物料版本 */
            set version(value: string);
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
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-价格 */
            static PROPERTY_AVGPRICE_NAME: string;
            /** 获取-价格 */
            get avgPrice(): number;
            /** 设置-价格 */
            set avgPrice(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
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
            /** 映射的属性名称-计算价格 */
            static PROPERTY_CALCULATEDPRICE_NAME: string;
            /** 获取-计算价格 */
            get calculatedPrice(): number;
            /** 设置-计算价格 */
            set calculatedPrice(value: number);
            /** 映射的属性名称-交易值 */
            static PROPERTY_TRANSACTIONVALUE_NAME: string;
            /** 获取-交易值 */
            get transactionValue(): number;
            /** 设置-交易值 */
            set transactionValue(value: number);
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
            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get inventoryQuantity(): number;
            /** 设置-库存数量 */
            set inventoryQuantity(value: number);
            /** 映射的属性名称-库存价值 */
            static PROPERTY_INVENTORYVALUE_NAME: string;
            /** 获取-库存价值 */
            get inventoryValue(): number;
            /** 设置-库存价值 */
            set inventoryValue(value: number);
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
            /** 映射的属性名称-生产商 */
            static PROPERTY_MANUFACTURER_NAME: string;
            /** 获取-生产商 */
            get manufacturer(): string;
            /** 设置-生产商 */
            set manufacturer(value: string);
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
            /** 映射的属性名称-已预留 */
            static PROPERTY_ONRESERVED_NAME: string;
            /** 获取-已预留 */
            get onReserved(): number;
            /** 设置-已预留 */
            set onReserved(value: number);
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
            /** 映射的属性名称-版本管理 */
            static PROPERTY_VERSIONMANAGEMENT_NAME: string;
            /** 获取-版本管理 */
            get versionManagement(): ibas.emYesNo;
            /** 设置-版本管理 */
            set versionManagement(value: ibas.emYesNo);
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
            /** 映射的属性名称-采购单位 */
            static PROPERTY_PURCHASEUOM_NAME: string;
            /** 获取-采购单位 */
            get purchaseUOM(): string;
            /** 设置-采购单位 */
            set purchaseUOM(value: string);
            /** 映射的属性名称-销售单位 */
            static PROPERTY_SALESUOM_NAME: string;
            /** 获取-销售单位 */
            get salesUOM(): string;
            /** 设置-销售单位 */
            set salesUOM(value: string);
            /** 映射的属性名称-生产单位 */
            static PROPERTY_PRODUCTIONUOM_NAME: string;
            /** 获取-生产单位 */
            get productionUOM(): string;
            /** 设置-生产单位 */
            set productionUOM(value: string);
            /** 映射的属性名称-获取方式 */
            static PROPERTY_PROCUREMENTMETHOD_NAME: string;
            /** 获取-获取方式 */
            get procurementMethod(): emProcurementMethod;
            /** 设置-获取方式 */
            set procurementMethod(value: emProcurementMethod);
            /** 映射的属性名称-领料方式 */
            static PROPERTY_ISSUEMETHOD_NAME: string;
            /** 获取-领料方式 */
            get issueMethod(): emIssueMethod;
            /** 设置-领料方式 */
            set issueMethod(value: emIssueMethod);
            /** 映射的属性名称-计划方式 */
            static PROPERTY_PLANNINGMETHOD_NAME: string;
            /** 获取-计划方式 */
            get planningMethod(): emPlanningMethod;
            /** 设置-计划方式 */
            set planningMethod(value: emPlanningMethod);
            /** 映射的属性名称-齐套检查 */
            static PROPERTY_CHECKCOMPLETENESS_NAME: string;
            /** 获取-齐套检查 */
            get checkCompleteness(): ibas.emYesNo;
            /** 设置-齐套检查 */
            set checkCompleteness(value: ibas.emYesNo);
            /** 映射的属性名称-批次混用 */
            static PROPERTY_MIXINGBATCHES_NAME: string;
            /** 获取-批次混用 */
            get mixingBatches(): ibas.emYesNo;
            /** 设置-批次混用 */
            set mixingBatches(value: ibas.emYesNo);
            /** 映射的属性名称-订单生产 */
            static PROPERTY_MADETOORDER_NAME: string;
            /** 获取-订单生产 */
            get madeToOrder(): ibas.emYesNo;
            /** 设置-订单生产 */
            set madeToOrder(value: ibas.emYesNo);
            /** 映射的属性名称-图号 */
            static PROPERTY_DARWINGNUMBER_NAME: string;
            /** 获取-图号 */
            get darwingNumber(): string;
            /** 设置-图号 */
            set darwingNumber(value: string);
            /** 映射的属性名称-匹配码 */
            static PROPERTY_MATCHCODE_NAME: string;
            /** 获取-匹配码 */
            get matchCode(): string;
            /** 设置-匹配码 */
            set matchCode(value: string);
            /** 映射的属性名称-生产批量 */
            static PROPERTY_LOTSIZE_NAME: string;
            /** 获取-生产批量 */
            get lotSize(): number;
            /** 设置-生产批量 */
            set lotSize(value: number);
            /** 映射的属性名称-废品率 */
            static PROPERTY_SCRAP_NAME: string;
            /** 获取-废品率 */
            get scrap(): string;
            /** 设置-废品率 */
            set scrap(value: string);
            /** 映射的属性名称-计划员 */
            static PROPERTY_SCHEDULER_NAME: string;
            /** 获取-计划员 */
            get scheduler(): string;
            /** 设置-计划员 */
            set scheduler(value: string);
            /** 映射的属性名称-计划组 */
            static PROPERTY_SCHEDULINGGROUP_NAME: string;
            /** 获取-计划组 */
            get schedulingGroup(): string;
            /** 设置-计划组 */
            set schedulingGroup(value: string);
            /** 映射的属性名称-关键件 */
            static PROPERTY_KEYCOMPONENT_NAME: string;
            /** 获取-关键件 */
            get keyComponent(): ibas.emYesNo;
            /** 设置-关键件 */
            set keyComponent(value: ibas.emYesNo);
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
            /** 映射的属性名称-供应商 */
            static PROPERTY_SUPPLIER_NAME: string;
            /** 获取-供应商 */
            get supplier(): string;
            /** 设置-供应商 */
            set supplier(value: string);
            /** 映射的属性名称-可排程 */
            static PROPERTY_SCHEDULABLE_NAME: string;
            /** 获取-可排程 */
            get schedulable(): ibas.emYesNo;
            /** 设置-可排程 */
            set schedulable(value: ibas.emYesNo);
            /** 映射的属性名称-可预留 */
            static PROPERTY_RESERVABLE_NAME: string;
            /** 获取-可预留 */
            get reservable(): ibas.emYesNo;
            /** 设置-可预留 */
            set reservable(value: ibas.emYesNo);
            /** 映射的属性名称-废料仓 */
            static PROPERTY_SCRAP_NAME: string;
            /** 获取-废料仓 */
            get scrap(): ibas.emYesNo;
            /** 设置-废料仓 */
            set scrap(value: ibas.emYesNo);
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
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 库存盘点-行 集合 */
        class InventoryCountingLines extends ibas.BusinessObjects<InventoryCountingLine, InventoryCounting> implements IInventoryCountingLines {
            /** 创建并添加子项 */
            create(): InventoryCountingLine;
            protected afterAdd(item: InventoryCountingLine): void;
            protected onParentPropertyChanged(name: string): void;
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
            static PROPERTY_STOCKQUANTITY_NAME: string;
            /** 获取-库存数量 */
            get stockQuantity(): number;
            /** 设置-库存数量 */
            set stockQuantity(value: number);
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
            get inventoryQuantity(): number;
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
        /** 计量单位 */
        class Unit extends ibas.BOSimple<Unit> implements IUnit {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 类别：尺寸 */
            static CATEGORY_SIZE: string;
            /** 类别：面积 */
            static CATEGORY_SQUARE: string;
            /** 类别：体积 */
            static CATEGORY_VOLUME: string;
            /** 类别：重量 */
            static CATEGORY_WEIGHT: string;
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
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
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
            /** 映射的属性名称-符号 */
            static PROPERTY_SYMBOL_NAME: string;
            /** 获取-符号 */
            get symbol(): string;
            /** 设置-符号 */
            set symbol(value: string);
            /** 映射的属性名称-是否激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-是否激活 */
            get activated(): ibas.emYesNo;
            /** 设置-是否激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-小数位数 */
            static PROPERTY_DECIMALPLACES_NAME: string;
            /** 获取-小数位数 */
            get decimalPlaces(): number;
            /** 设置-小数位数 */
            set decimalPlaces(value: number);
            /** 映射的属性名称-类别 */
            static PROPERTY_CATEGORY_NAME: string;
            /** 获取-类别 */
            get category(): string;
            /** 设置-类别 */
            set category(value: string);
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
declare namespace materials {
    namespace bo {
        /** 计量单位换算率 */
        class UnitRate extends ibas.BOSimple<UnitRate> implements IUnitRate {
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
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-源 */
            static PROPERTY_SOURCE_NAME: string;
            /** 获取-源 */
            get source(): string;
            /** 设置-源 */
            set source(value: string);
            /** 映射的属性名称-目标 */
            static PROPERTY_TARGET_NAME: string;
            /** 获取-目标 */
            get target(): string;
            /** 设置-目标 */
            set target(value: string);
            /** 映射的属性名称-换算率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-换算率 */
            get rate(): number;
            /** 设置-换算率 */
            set rate(value: number);
            /** 映射的属性名称-条件 */
            static PROPERTY_CONDITION_NAME: string;
            /** 获取-条件 */
            get condition(): string;
            /** 设置-条件 */
            set condition(value: string);
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
declare namespace materials {
    namespace bo {
        /** 物料废品率 */
        class MaterialScrap extends ibas.BOSimple<MaterialScrap> implements IMaterialScrap {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-已激活的 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-已激活的 */
            get activated(): ibas.emYesNo;
            /** 设置-已激活的 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-率 */
            get rate(): number;
            /** 设置-率 */
            set rate(value: number);
            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string;
            /** 获取-值 */
            get value(): number;
            /** 设置-值 */
            set value(value: number);
            /** 映射的属性名称-阶梯的 */
            static PROPERTY_TIERED_NAME: string;
            /** 获取-阶梯的 */
            get tiered(): ibas.emYesNo;
            /** 设置-阶梯的 */
            set tiered(value: ibas.emYesNo);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-物料废品率 - 阶梯集合 */
            static PROPERTY_MATERIALSCRAPSECTIONS_NAME: string;
            /** 获取-物料废品率 - 阶梯集合 */
            get materialScrapSections(): MaterialScrapSections;
            /** 设置-物料废品率 - 阶梯集合 */
            set materialScrapSections(value: MaterialScrapSections);
            /** 初始化数据 */
            protected init(): void;
            /**
             * 计算数量的损耗
             * @param quantity 计划数量
             * @returns 加了损耗的数量
             */
            compute(quantity: number): number;
        }
        /** 物料废品率 - 阶梯 集合 */
        class MaterialScrapSections extends ibas.BusinessObjects<MaterialScrapSection, MaterialScrap> implements IMaterialScrapSections {
            /** 创建并添加子项 */
            create(): MaterialScrapSection;
        }
        /** 物料废品率 - 阶梯 */
        class MaterialScrapSection extends ibas.BOSimpleLine<MaterialScrapSection> implements IMaterialScrapSection {
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
            /** 映射的属性名称-区间开始 */
            static PROPERTY_SECTIONSTART_NAME: string;
            /** 获取-区间开始 */
            get sectionStart(): number;
            /** 设置-区间开始 */
            set sectionStart(value: number);
            /** 映射的属性名称-区间结束 */
            static PROPERTY_SECTIONEND_NAME: string;
            /** 获取-区间结束 */
            get sectionEnd(): number;
            /** 设置-区间结束 */
            set sectionEnd(value: number);
            /** 映射的属性名称-率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-率 */
            get rate(): number;
            /** 设置-率 */
            set rate(value: number);
            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string;
            /** 获取-值 */
            get value(): number;
            /** 设置-值 */
            set value(value: number);
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
declare namespace materials {
    namespace bo {
        /** 物料版本 */
        class MaterialVersion extends ibas.BOSimple<MaterialVersion> implements IMaterialVersion {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
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
            /** 映射的属性名称-已激活的 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-已激活的 */
            get activated(): ibas.emYesNo;
            /** 设置-已激活的 */
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
declare namespace materials {
    namespace bo {
        /** 物料库存预留 */
        class MaterialInventoryReservation extends ibas.BOSimple<MaterialInventoryReservation> implements IMaterialInventoryReservation {
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
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
            set warehouse(value: string);
            /** 映射的属性名称-批次编码 */
            static PROPERTY_BATCHCODE_NAME: string;
            /** 获取-批次编码 */
            get batchCode(): string;
            /** 设置-批次编码 */
            set batchCode(value: string);
            /** 映射的属性名称-序列编码 */
            static PROPERTY_SERIALCODE_NAME: string;
            /** 获取-序列编码 */
            get serialCode(): string;
            /** 设置-序列编码 */
            set serialCode(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string;
            /** 获取-失效日期 */
            get invalidDate(): Date;
            /** 设置-失效日期 */
            set invalidDate(value: Date);
            /** 映射的属性名称-失效时间 */
            static PROPERTY_INVALIDTIME_NAME: string;
            /** 获取-失效时间 */
            get invalidTime(): number;
            /** 设置-失效时间 */
            set invalidTime(value: number);
            /** 映射的属性名称-目标单据类型 */
            static PROPERTY_TARGETDOCUMENTTYPE_NAME: string;
            /** 获取-目标单据类型 */
            get targetDocumentType(): string;
            /** 设置-目标单据类型 */
            set targetDocumentType(value: string);
            /** 映射的属性名称-目标单据编号 */
            static PROPERTY_TARGETDOCUMENTENTRY_NAME: string;
            /** 获取-目标单据编号 */
            get targetDocumentEntry(): number;
            /** 设置-目标单据编号 */
            set targetDocumentEntry(value: number);
            /** 映射的属性名称-目标单据行号 */
            static PROPERTY_TARGETDOCUMENTLINEID_NAME: string;
            /** 获取-目标单据行号 */
            get targetDocumentLineId(): number;
            /** 设置-目标单据行号 */
            set targetDocumentLineId(value: number);
            /** 映射的属性名称-原因 */
            static PROPERTY_CAUSES_NAME: string;
            /** 获取-原因 */
            get causes(): string;
            /** 设置-原因 */
            set causes(value: string);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 基于物料库存信息 */
            baseBusinessObject(data: IMaterialInventory): void;
            /** 基于物料批次信息 */
            baseBusinessObject(data: IMaterialBatch): void;
            /** 基于物料序列信息 */
            baseBusinessObject(data: IMaterialSerial): void;
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
        /** 物料替代 */
        class MaterialSubstitute extends ibas.BOSimple<MaterialSubstitute> implements IMaterialSubstitute {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-位置 */
            static PROPERTY_POSITION_NAME: string;
            /** 获取-位置 */
            get position(): number;
            /** 设置-位置 */
            set position(value: number);
            /** 映射的属性名称-替代物料 */
            static PROPERTY_SUBSTITUTE_NAME: string;
            /** 获取-替代物料 */
            get substitute(): string;
            /** 设置-替代物料 */
            set substitute(value: string);
            /** 映射的属性名称-已激活的 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-已激活的 */
            get activated(): ibas.emYesNo;
            /** 设置-已激活的 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-物料版本 */
            static PROPERTY_VERSION_NAME: string;
            /** 获取-物料版本 */
            get version(): string;
            /** 设置-物料版本 */
            set version(value: string);
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 物料替代 集合 */
        class MaterialSubstitutes extends ibas.BusinessObjectsBase<MaterialSubstitute> {
            /** 创建并添加子项 */
            create(): MaterialSubstitute;
            /**
             * 添加项目后
             * @param item 项目
             */
            protected afterAdd(item: MaterialSubstitute): void;
        }
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
        /** 物料订购预留 */
        class MaterialOrderedReservation extends ibas.BOSimple<MaterialOrderedReservation> implements IMaterialOrderedReservation {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-源单据类型 */
            static PROPERTY_SOURCEDOCUMENTTYPE_NAME: string;
            /** 获取-源单据类型 */
            get sourceDocumentType(): string;
            /** 设置-源单据类型 */
            set sourceDocumentType(value: string);
            /** 映射的属性名称-源单据编号 */
            static PROPERTY_SOURCEDOCUMENTENTRY_NAME: string;
            /** 获取-源单据编号 */
            get sourceDocumentEntry(): number;
            /** 设置-源单据编号 */
            set sourceDocumentEntry(value: number);
            /** 映射的属性名称-源单据行号 */
            static PROPERTY_SOURCEDOCUMENTLINEID_NAME: string;
            /** 获取-源单据行号 */
            get sourceDocumentLineId(): number;
            /** 设置-源单据行号 */
            set sourceDocumentLineId(value: number);
            /** 映射的属性名称-源单据关闭 */
            static PROPERTY_SOURCEDOCUMENTCLOSED_NAME: string;
            /** 获取-源单据关闭 */
            get sourceDocumentClosed(): ibas.emYesNo;
            /** 设置-源单据关闭 */
            set sourceDocumentClosed(value: ibas.emYesNo);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
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
            /** 映射的属性名称-交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-交货日期 */
            get deliveryDate(): Date;
            /** 设置-交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string;
            /** 获取-失效日期 */
            get invalidDate(): Date;
            /** 设置-失效日期 */
            set invalidDate(value: Date);
            /** 映射的属性名称-失效时间 */
            static PROPERTY_INVALIDTIME_NAME: string;
            /** 获取-失效时间 */
            get invalidTime(): number;
            /** 设置-失效时间 */
            set invalidTime(value: number);
            /** 映射的属性名称-目标单据类型 */
            static PROPERTY_TARGETDOCUMENTTYPE_NAME: string;
            /** 获取-目标单据类型 */
            get targetDocumentType(): string;
            /** 设置-目标单据类型 */
            set targetDocumentType(value: string);
            /** 映射的属性名称-目标单据编号 */
            static PROPERTY_TARGETDOCUMENTENTRY_NAME: string;
            /** 获取-目标单据编号 */
            get targetDocumentEntry(): number;
            /** 设置-目标单据编号 */
            set targetDocumentEntry(value: number);
            /** 映射的属性名称-目标单据行号 */
            static PROPERTY_TARGETDOCUMENTLINEID_NAME: string;
            /** 获取-目标单据行号 */
            get targetDocumentLineId(): number;
            /** 设置-目标单据行号 */
            set targetDocumentLineId(value: number);
            /** 映射的属性名称-目标单据关闭 */
            static PROPERTY_TARGETDOCUMENTCLOSED_NAME: string;
            /** 获取-目标单据关闭 */
            get targetDocumentClosed(): ibas.emYesNo;
            /** 设置-目标单据关闭 */
            set targetDocumentClosed(value: ibas.emYesNo);
            /** 映射的属性名称-原因 */
            static PROPERTY_CAUSES_NAME: string;
            /** 获取-原因 */
            get causes(): string;
            /** 设置-原因 */
            set causes(value: string);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
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
declare namespace materials {
    namespace bo {
        /** 仓库预估日记账 */
        class MaterialEstimateJournal extends ibas.BOSimple<MaterialEstimateJournal> implements IMaterialEstimateJournal {
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
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
            set warehouse(value: string);
            /** 映射的属性名称-预估类型 */
            static PROPERTY_ESTIMATE_NAME: string;
            /** 获取-预估类型 */
            get estimate(): emEstimateType;
            /** 设置-预估类型 */
            set estimate(value: emEstimateType);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-预留数量 */
            static PROPERTY_RESERVEDQUANTITY_NAME: string;
            /** 获取-预留数量 */
            get reservedQuantity(): number;
            /** 设置-预留数量 */
            set reservedQuantity(value: number);
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
            set originalDocumentLineId(value: number); /** 映射的属性名称-过账日期 */
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
            /** 可用量（数量 - 完成量） */
            onAvailable(): number;
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
        /** 拣配清单 */
        class PickLists extends ibas.BOSimple<PickLists> implements IPickLists {
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
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            get logInst(): number;
            /** 设置-实例号 */
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
            /** 映射的属性名称-拣配员 */
            static PROPERTY_PICKER_NAME: string;
            /** 获取-拣配员 */
            get picker(): string;
            /** 设置-拣配员 */
            set picker(value: string);
            /** 映射的属性名称-拣配日期 */
            static PROPERTY_PICKDATE_NAME: string;
            /** 获取-拣配日期 */
            get pickDate(): Date;
            /** 设置-拣配日期 */
            set pickDate(value: Date);
            /** 映射的属性名称-拣配状态 */
            static PROPERTY_PICKSTATUS_NAME: string;
            /** 获取-拣配状态 */
            get pickStatus(): emPickStatus;
            /** 设置-拣配状态 */
            set pickStatus(value: emPickStatus);
            /** 映射的属性名称-拣配清单-行集合 */
            static PROPERTY_PICKLISTSLINES_NAME: string;
            /** 获取-拣配清单-行集合 */
            get pickListsLines(): PickListsLines;
            /** 设置-拣配清单-行集合 */
            set pickListsLines(value: PickListsLines);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 拣配清单-行 集合 */
        class PickListsLines extends ibas.BusinessObjects<PickListsLine, PickLists> implements IPickListsLines {
            /** 创建并添加子项 */
            create(): PickListsLine;
            afterAdd(item: PickListsLine): void;
            afterRemove(item: PickListsLine): void;
            protected onItemPropertyChanged(item: PickListsLine, name: string): void;
            protected updatePickStatus(): void;
            useInventoryReservationToPick(): Promise<void>;
            protected resetAll(): void;
            /**
             * 获取物料库存预留
             */
            private fetchMaterialInventoryReservationAsync;
        }
        /** 拣配清单-行 */
        class PickListsLine extends ibas.BOSimpleLine<PickListsLine> implements IPickListsLine {
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 映射的属性名称-交货/到期日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-交货/到期日期 */
            get deliveryDate(): Date;
            /** 设置-交货/到期日期 */
            set deliveryDate(value: Date);
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
            /** 映射的属性名称-拣配状态 */
            static PROPERTY_PICKSTATUS_NAME: string;
            /** 获取-拣配状态 */
            get pickStatus(): emPickStatus;
            /** 设置-拣配状态 */
            set pickStatus(value: emPickStatus);
            /** 映射的属性名称-拣配数量 */
            static PROPERTY_PICKQUANTITY_NAME: string;
            /** 获取-拣配数量 */
            get pickQuantity(): number;
            /** 设置-拣配数量 */
            set pickQuantity(value: number);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-拣配清单-序号集合 */
            static PROPERTY_PICKLISTSNUMBERS_NAME: string;
            /** 获取-拣配清单-序号集合 */
            get pickListsNumbers(): PickListsNumbers;
            /** 设置-拣配清单-序号集合 */
            set pickListsNumbers(value: PickListsNumbers);
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
            protected onPropertyChanged(name: string): void;
            baseBusinessObject(data: app.IPickListsTarget | Material): void;
        }
        /** 拣配清单-序号 集合 */
        class PickListsNumbers extends ibas.BusinessObjects<PickListsNumber, PickListsLine> implements IPickListsNumbers, IMaterialBatchItems, IMaterialSerialItems {
            /** 创建并添加子项 */
            create(): PickListsNumber;
            protected afterAdd(item: PickListsNumber): void;
            total(): number;
        }
        /** 拣配清单-序号 */
        class PickListsNumber extends ibas.BOSimpleLine<PickListsNumber> implements IPickListsNumber, IMaterialBatchItem, IMaterialSerialItem {
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
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-行项目号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-行项目号 */
            get itemId(): number;
            /** 设置-行项目号 */
            set itemId(value: number);
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
            set warehouse(value: string);
            /** 映射的属性名称-批次编码 */
            static PROPERTY_BATCHCODE_NAME: string;
            /** 获取-批次编码 */
            get batchCode(): string;
            /** 设置-批次编码 */
            set batchCode(value: string);
            /** 映射的属性名称-序列编码 */
            static PROPERTY_SERIALCODE_NAME: string;
            /** 获取-序列编码 */
            get serialCode(): string;
            /** 设置-序列编码 */
            set serialCode(value: string);
            /** 映射的属性名称-拣配数量 */
            static PROPERTY_PICKQUANTITY_NAME: string;
            /** 获取-拣配数量 */
            get pickQuantity(): number;
            /** 设置-拣配数量 */
            set pickQuantity(value: number);
            get documentType(): string;
            set documentType(value: string);
            get documentEntry(): number;
            set documentEntry(value: number);
            get documentLineId(): number;
            set documentLineId(value: number);
            get quantity(): number;
            set quantity(value: number);
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
        /** 库存转储 */
        class InventoryTransferRequest extends ibas.BODocument<InventoryTransferRequest> implements IInventoryTransferRequest {
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
            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string;
            /** 获取-分支 */
            get branch(): string;
            /** 设置-分支 */
            set branch(value: string);
            /** 映射的属性名称-库存转储-行集合 */
            static PROPERTY_INVENTORYTRANSFERLINES_NAME: string;
            /** 获取-库存转储-行集合 */
            get inventoryTransferRequestLines(): InventoryTransferRequestLines;
            /** 设置-库存转储-行集合 */
            set inventoryTransferRequestLines(value: InventoryTransferRequestLines);
            /** 初始化数据 */
            protected init(): void;
            /** 重置 */
            reset(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 库存转储-行 集合 */
        class InventoryTransferRequestLines extends ibas.BusinessObjects<InventoryTransferRequestLine, InventoryTransferRequest> implements IInventoryTransferRequestLines {
            /** 创建并添加子项 */
            create(): InventoryTransferRequestLine;
            protected afterAdd(item: InventoryTransferRequestLine): void;
            protected onParentPropertyChanged(name: string): void;
        }
        /** 库存转储-行 */
        class InventoryTransferRequestLine extends ibas.BODocumentLine<InventoryTransferRequestLine> implements IInventoryTransferRequestLine {
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
            /** 映射的属性名称-从仓库 */
            static PROPERTY_FROMWAREHOUSE_NAME: string;
            /** 获取-从仓库 */
            get fromWarehouse(): string;
            /** 设置-从仓库 */
            set fromWarehouse(value: string);
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
            /** 映射的属性名称-物料版本 */
            static PROPERTY_ITEMVERSION_NAME: string;
            /** 获取-物料版本 */
            get itemVersion(): string;
            /** 设置-物料版本 */
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
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
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
            get inventoryQuantity(): number;
            /** 初始化数据 */
            protected init(): void;
            /** 赋值物料 */
            baseMaterial(source: bo.IMaterial | bo.IProduct): void;
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
        /** 物料特殊价格 */
        class MaterialSpecialPrice extends ibas.BOSimple<MaterialSpecialPrice> implements IMaterialSpecialPrice {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
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
        /** 物料系号关联 */
        class MaterialNumberAssociation extends ibas.BOSimple<MaterialNumberAssociation> implements IMaterialNumberAssociation {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-基于单据类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于单据类型 */
            get baseDocumentType(): string;
            /** 设置-基于单据类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于单据编号 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于单据编号 */
            get baseDocumentEntry(): number;
            /** 设置-基于单据编号 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于单据行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于单据行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于单据行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-关系 */
            static PROPERTY_RELATION_NAME: string;
            /** 获取-关系 */
            get relation(): string;
            /** 设置-关系 */
            set relation(value: string);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-仓库编码 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库编码 */
            get warehouse(): string;
            /** 设置-仓库编码 */
            set warehouse(value: string);
            /** 映射的属性名称-批次编码 */
            static PROPERTY_BATCHCODE_NAME: string;
            /** 获取-批次编码 */
            get batchCode(): string;
            /** 设置-批次编码 */
            set batchCode(value: string);
            /** 映射的属性名称-序列编码 */
            static PROPERTY_SERIALCODE_NAME: string;
            /** 获取-序列编码 */
            get serialCode(): string;
            /** 设置-序列编码 */
            set serialCode(value: string);
            /** 映射的属性名称-关联物料编码 */
            static PROPERTY_ASSOCIATEDITEM_NAME: string;
            /** 获取-关联物料编码 */
            get associatedItem(): string;
            /** 设置-关联物料编码 */
            set associatedItem(value: string);
            /** 映射的属性名称-关联仓库编码 */
            static PROPERTY_ASSOCIATEDWAREHOUSE_NAME: string;
            /** 获取-关联仓库编码 */
            get associatedWarehouse(): string;
            /** 设置-关联仓库编码 */
            set associatedWarehouse(value: string);
            /** 映射的属性名称-关联批次编码 */
            static PROPERTY_ASSOCIATEDBATCH_NAME: string;
            /** 获取-关联批次编码 */
            get associatedBatch(): string;
            /** 设置-关联批次编码 */
            set associatedBatch(value: string);
            /** 映射的属性名称-关联序列编码 */
            static PROPERTY_ASSOCIATEDSERIAL_NAME: string;
            /** 获取-关联序列编码 */
            get associatedSerial(): string;
            /** 设置-关联序列编码 */
            set associatedSerial(value: string);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-原因 */
            static PROPERTY_CAUSES_NAME: string;
            /** 获取-原因 */
            get causes(): string;
            /** 设置-原因 */
            set causes(value: string);
            /** 映射的属性名称-失效日期 */
            static PROPERTY_EXPIRATIONDATE_NAME: string;
            /** 获取-失效日期 */
            get expirationDate(): Date;
            /** 设置-失效日期 */
            set expirationDate(value: Date);
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
declare namespace materials {
    namespace bo {
        /** 业务伙伴物料目录 */
        class BusinessPartnerMaterialCatalog extends ibas.BOSimple<BusinessPartnerMaterialCatalog> implements IBusinessPartnerMaterialCatalog {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-目录编码 */
            static PROPERTY_CATALOGCODE_NAME: string;
            /** 获取-目录编码 */
            get catalogCode(): string;
            /** 设置-目录编码 */
            set catalogCode(value: string);
            /** 映射的属性名称-目录名称 */
            static PROPERTY_CATALOGNAME_NAME: string;
            /** 获取-目录名称 */
            get catalogName(): string;
            /** 设置-目录名称 */
            set catalogName(value: string);
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
declare namespace materials {
    namespace bo {
        /** 计划组 */
        class SchedulingGroup extends ibas.BOMasterData<SchedulingGroup> implements ISchedulingGroup {
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
declare namespace materials {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
            /**
             * 转换数据
             * @param data 当前类型数据
             * @param sign 操作标记
             * @returns 转换的数据
             */
            convert(data: any, sign: string): any;
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
        function baseMaterial(target: IGoodsIssueLine | IGoodsReceiptLine | IInventoryTransferLine | IInventoryTransferRequestLine, source: materials.bo.IMaterial | materials.bo.IProduct): void;
        /** 业务规则-计算库存数量 */
        class BusinessRuleCalculateInventoryQuantity extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param inventoryQuantity 属性-库存数量
             * @param quantity          属性-数量
             * @param uomRate           属性-换算率
             */
            constructor(inventoryQuantity: string, quantity: string, uomRate: string);
            /** 库存数量 */
            inventoryQuantity: string;
            /** 数量 */
            quantity: string;
            /** 换算率 */
            uomRate: string;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
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
            /** 物料编码改变 */
            interface IMaterialNumberChange extends IDataDeclaration {
                Issue: GoodsIssue;
                Receipt: GoodsReceipt;
                Reservations: MaterialInventoryReservation[];
            }
            /** 物料库存调拨 */
            interface IMaterialInventoryTransfer extends IDataDeclaration {
                Transfer: InventoryTransfer;
                Reservations: MaterialInventoryReservation[];
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
             * 查询 仓库预估日记账
             * @param fetcher 查询者
             */
            fetchMaterialEstimateJournal(fetcher: ibas.IFetchCaller<bo.MaterialEstimateJournal>): void;
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
             * 查询 物料库存扩展
             * @param fetcher 查询者
             */
            fetchProductInventory(fetcher: ibas.IFetchCaller<bo.Product>): void;
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
            /**
             * 查询 计量单位
             * @param fetcher 查询者
             */
            fetchUnit(fetcher: ibas.IFetchCaller<bo.Unit>): void;
            /**
             * 保存 计量单位
             * @param saver 保存者
             */
            saveUnit(saver: ibas.ISaveCaller<bo.Unit>): void;
            /**
             * 查询 计量单位换算率
             * @param fetcher 查询者
             */
            fetchUnitRate(fetcher: ibas.IFetchCaller<bo.UnitRate>): void;
            /**
             * 保存 计量单位换算率
             * @param saver 保存者
             */
            saveUnitRate(saver: ibas.ISaveCaller<bo.UnitRate>): void;
            /**
             * 查询 物料废品率
             * @param fetcher 查询者
             */
            fetchMaterialScrap(fetcher: ibas.IFetchCaller<bo.MaterialScrap>): void;
            /**
             * 保存 物料废品率
             * @param saver 保存者
             */
            saveMaterialScrap(saver: ibas.ISaveCaller<bo.MaterialScrap>): void;
            /**
             * 查询 物料版本
             * @param fetcher 查询者
             */
            fetchMaterialVersion(fetcher: ibas.IFetchCaller<bo.MaterialVersion>): void;
            /**
             * 保存 物料版本
             * @param saver 保存者
             */
            saveMaterialVersion(saver: ibas.ISaveCaller<bo.MaterialVersion>): void;
            /**
             * 查询 物料库存预留
             * @param fetcher 查询者
             */
            fetchMaterialInventoryReservation(fetcher: ibas.IFetchCaller<bo.MaterialInventoryReservation>): void;
            /**
             * 保存 物料库存预留
             * @param saver 保存者
             */
            saveMaterialInventoryReservation(saver: ibas.ISaveCaller<bo.MaterialInventoryReservation>): void;
            /**
             * 查询 物料替代
             * @param fetcher 查询者
             */
            fetchMaterialSubstitute(fetcher: ibas.IFetchCaller<bo.MaterialSubstitute>): void;
            /**
             * 保存 物料替代
             * @param saver 保存者
             */
            saveMaterialSubstitute(saver: ibas.ISaveCaller<bo.MaterialSubstitute>): void;
            /**
             * 查询 物料订购预留
             * @param fetcher 查询者
             */
            fetchMaterialOrderedReservation(fetcher: ibas.IFetchCaller<bo.MaterialOrderedReservation>): void;
            /**
             * 保存 物料订购预留
             * @param saver 保存者
             */
            saveMaterialOrderedReservation(saver: ibas.ISaveCaller<bo.MaterialOrderedReservation>): void;
            /**
             * 查询 拣配清单
             * @param fetcher 查询者
             */
            fetchPickLists(fetcher: ibas.IFetchCaller<bo.PickLists>): void;
            /**
             * 保存 拣配清单
             * @param saver 保存者
             */
            savePickLists(saver: ibas.ISaveCaller<bo.PickLists>): void;
            /**
             * 改变物料批次/序列号
             * @param changer 改变者
             */
            changeMaterialNumbers(changer: IChangeCaller): void;
            /**
             * 库存调拨
             * @param transfer 改变者
             */
            transferMaterialInventories(transfer: ITransferCaller): void;
            /**
             * 查询 库存转储请求
             * @param fetcher 查询者
             */
            fetchInventoryTransferRequest(fetcher: ibas.IFetchCaller<bo.InventoryTransferRequest>): void;
            /**
             * 保存 库存转储请求
             * @param saver 保存者
             */
            saveInventoryTransferRequest(saver: ibas.ISaveCaller<bo.InventoryTransferRequest>): void;
            /**
             * 查询 物料特殊价格
             * @param fetcher 查询者
             */
            fetchMaterialSpecialPrice(fetcher: ibas.IFetchCaller<bo.MaterialSpecialPrice>): void;
            /**
             * 保存 物料特殊价格
             * @param saver 保存者
             */
            saveMaterialSpecialPrice(saver: ibas.ISaveCaller<bo.MaterialSpecialPrice>): void;
            /**
             * 查询 物料系号关联
             * @param fetcher 查询者
             */
            fetchMaterialNumberAssociation(fetcher: ibas.IFetchCaller<bo.MaterialNumberAssociation>): void;
            /**
             * 保存 物料系号关联
             * @param saver 保存者
             */
            saveMaterialNumberAssociation(saver: ibas.ISaveCaller<bo.MaterialNumberAssociation>): void;
            /**
             * 查询 业务伙伴物料目录
             * @param fetcher 查询者
             */
            fetchBusinessPartnerMaterialCatalog(fetcher: ibas.IFetchCaller<bo.BusinessPartnerMaterialCatalog>): void;
            /**
             * 保存 业务伙伴物料目录
             * @param saver 保存者
             */
            saveBusinessPartnerMaterialCatalog(saver: ibas.ISaveCaller<bo.BusinessPartnerMaterialCatalog>): void;
            /**
             * 查询 计划组
             * @param fetcher 查询者
             */
            fetchSchedulingGroup(fetcher: ibas.IFetchCaller<bo.SchedulingGroup>): void;
            /**
             * 保存 计划组
             * @param saver 保存者
             */
            saveSchedulingGroup(saver: ibas.ISaveCaller<bo.SchedulingGroup>): void;
        }
        interface IChangeCaller extends ibas.IMethodCaller<string> {
            /** 改变内容 */
            changes: {
                issue: GoodsIssue;
                receipt: GoodsReceipt;
                reservations: MaterialInventoryReservation[];
            };
        }
        interface ITransferCaller extends ibas.IMethodCaller<string> {
            /** 改变内容 */
            transfers: {
                transfer: InventoryTransfer;
                reservations: MaterialInventoryReservation[];
            };
        }
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
            /** 更改行价格 */
            private changeGoodsIssueLinePrice;
            /** 选择库存发货行批次事件 */
            private chooseGoodsIssueLineMaterialBatch;
            /** 选择库存发货序列事件 */
            private chooseGoodsIssueLineMaterialSerial;
            private chooseGoodsIssueLineDistributionRule;
            private chooseGoodsIssueLineMaterialVersion;
            protected measuringMaterials(): void;
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
            /** 选择库存发货单行成本中心事件 */
            chooseGoodsIssueLineDistributionRuleEvent: Function;
            /** 选择库存发货-行 物料版本 */
            chooseGoodsIssueLineMaterialVersionEvent: Function;
            /** 测量物料 */
            measuringMaterialsEvent: Function;
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
            /** 更改行价格 */
            private changeGoodsReceiptLinePrice;
            /** 选择库存收货订单行物料事件 */
            private chooseGoodsReceiptLineWarehouse;
            private batches;
            /** 选择物料批次信息 */
            private chooseGoodsReceiptLineMaterialBatch;
            private serials;
            /** 选择物料序列信息 */
            private createGoodsReceiptLineMaterialSerial;
            private chooseGoodsReceiptLineDistributionRule;
            private chooseGoodsReceiptLineMaterialVersion;
            protected measuringMaterials(): void;
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
            /** 选择库存收货单行成本中心事件 */
            chooseGoodsReceiptLineDistributionRuleEvent: Function;
            /** 选择库存收货-行 物料版本 */
            chooseGoodsReceiptLineMaterialVersionEvent: Function;
            /** 测量物料 */
            measuringMaterialsEvent: Function;
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
            /** 调用库存转储添加服务 */
            private callInventoryTransferAddService;
            /** 选择库存转储订单行物料事件 */
            private chooseInventoryTransferLineMaterial;
            /** 选择库存转储订单物料价格清单事件 */
            private chooseeInventoryTransferMaterialPriceList;
            /** 选择库存转储订单行仓库事件 */
            private chooseInventoryTransferLineWarehouse;
            private chooseInventoryTransferLineMaterialBatch;
            private chooseInventoryTransferLineMaterialSerial;
            private chooseInventoryTransferLineDistributionRule;
            private chooseInventoryTransferLineTransferRequest;
            private chooseInventoryTransferLineMaterialVersion;
            protected measuringMaterials(): void;
        }
        /** 视图-库存转储 */
        interface IInventoryTransferEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showInventoryTransfer(data: bo.InventoryTransfer): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
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
            /** 选择库存转储单行成本中心事件 */
            chooseInventoryTransferLineDistributionRuleEvent: Function;
            /** 选择库存转储单行-转储请求事件 */
            chooseInventoryTransferLineTransferRequestEvent: Function;
            /** 调用库存转储添加服务 */
            callInventoryTransferAddServiceEvent: Function;
            /** 显示库存转储添加服务 */
            showServiceAgent(datas: ibas.IServiceAgent[]): void;
            /** 选择库存转储-行 物料版本 */
            chooseInventoryTransferLineMaterialVersionEvent: Function;
            /** 测量物料 */
            measuringMaterialsEvent: Function;
            /** 从仓库 */
            fromWarehouse: string;
            /** 目标仓库 */
            toWarehouse: string;
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
            /** 选择物料组事件 */
            private chooseMaterialUOM;
            /** 编辑单位换算 */
            private editMaterialUnitRate;
            /** 选择物废品率事件 */
            private chooseMaterialScrap;
            /** 选择计划员事件 */
            private chooseScheduler;
            /** 编辑物料替代事件 */
            private editMaterialSubstitute;
            /** 选择总账科目事件 */
            private chooseLedgerAccount;
            protected overview(): void;
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
            /** 选择物料单位事件 */
            chooseMaterialUOMEvent: Function;
            /** 编辑物料单位换算率事件 */
            editMaterialUnitRateEvent: Function;
            /** 选择物废品率事件 */
            chooseMaterialScrapEvent: Function;
            /** 选择计划员事件 */
            chooseSchedulerEvent: Function;
            /** 编辑物料替代事件 */
            editMaterialSubstituteEvent: Function;
            /** 选择总账科目事件 */
            chooseLedgerAccountEvent: Function;
            /** 更多信息 */
            overviewEvent: Function;
        }
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
        class MaterialNumberChangeFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
        class MaterialInventoryTransferFunc extends ibas.ModuleFunction {
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
        class MaterialsWarehouse {
            constructor(material: bo.IMaterial, warehouses?: bo.IWarehouse[]);
            material: bo.IMaterial;
            get code(): string;
            get name(): string;
            warehouses: ibas.IList<bo.IWarehouse>;
        }
        /** 列表应用-物料库存 */
        class MaterialInventoryListApp extends ibas.BOListApplication<IMaterialInventoryListView, bo.Material> {
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
            private warehouses;
            run(type?: "ONHAND" | "ONORDERED" | "ONCOMMITED", itemCode?: string, warehouse?: string): void;
            run(criteria?: ibas.ICriteria | ibas.ICondition[]): void;
            protected newData(): void;
            protected viewData(data: bo.Material): void;
            protected fetchData(criteria: ibas.ICriteria, warehouse?: string, type?: string): void;
            private fetchInventoryJournal;
            private fetchOrderedJournal;
            private fetchCommitedJournal;
        }
        /** 视图-物料库存 */
        interface IMaterialInventoryListView extends ibas.IBOListView {
            /** 显示数据 */
            showDatas(datas: MaterialsWarehouse[], type?: string): void;
            /** 查询物料库存交易记录 */
            fetchInventoryJournalEvent: Function;
            /** 显示物料库存交易数据 */
            showInventoryJournals(datas: bo.MaterialInventoryJournal[]): void;
            /** 查询物料订购交易记录 */
            fetchOrderedJournalEvent: Function;
            /** 显示物料订购交易数据 */
            showOrderedJournals(datas: bo.MaterialEstimateJournal[]): void;
            /** 查询物料承诺交易记录 */
            fetchCommitedJournalEvent: Function;
            /** 显示物料承诺交易数据 */
            showCommitedJournals(datas: bo.MaterialEstimateJournal[]): void;
        }
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
            private materialUnit;
            private materialSubstitute;
            private schedulingGroup;
        }
        /** 视图-物料 */
        interface IMaterialListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 物料组事件 */
            materialGroupEvent: Function;
            /** 物料单位事件 */
            materialUnitEvent: Function;
            /** 计划组事件 */
            schedulingGroupEvent: Function;
            /** 物料替代事件 */
            materialSubstituteEvent: Function;
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
            run(criteria?: ibas.ICriteria | ibas.ICondition[]): void;
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
            private fetchMaterialReservation;
            private releaseMaterialReservation;
            private fetchMaterialOrdered;
            private fetchMaterialCommited;
            private viewMaterialInventory;
            private viewMaterialOrdered;
            private viewMaterialCommited;
            private viewMaterialBatch;
            private viewMaterialSerial;
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
            /** 查看库存明细事件 */
            viewMaterialInventoryEvent: Function;
            /** 查询批次信息 */
            fetchMaterialBatchEvent: Function;
            /** 编辑批次信息 */
            editMaterialBatchEvent: Function;
            /** 查看批次信息 */
            viewMaterialBatchEvent: Function;
            /** 显示物料批次信息 */
            showMaterialBatch(datas: bo.IMaterialBatch[]): void;
            /** 查询序列信息 */
            fetchMaterialSerialEvent: Function;
            /** 编辑序列信息 */
            editMaterialSerialEvent: Function;
            /** 查看序列信息 */
            viewMaterialSerialEvent: Function;
            /** 显示物料序列信息 */
            showMaterialSerial(datas: bo.IMaterialSerial[]): void;
            /** 查询预留信息 */
            fetchMaterialReservationEvent: Function;
            /** 释放预留信息 */
            releaseMaterialReservationEvent: Function;
            /** 显示物料预留信息 */
            showMaterialReservation(datas: ReservationWorkingItemResult[]): void;
            /** 查询订购信息 */
            fetchMaterialOrderedEvent: Function;
            /** 显示订购信息 */
            showMaterialOrdered(datas: bo.IMaterialEstimateJournal[]): void;
            /** 查看订购事件 */
            viewMaterialOrderedEvent: Function;
            /** 查询承诺信息 */
            fetchMaterialCommitedEvent: Function;
            /** 显示承诺信息 */
            showMaterialCommited(datas: bo.IMaterialEstimateJournal[]): void;
            /** 查看承诺事件 */
            viewMaterialCommitedEvent: Function;
        }
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
            protected overview(): void;
        }
        /** 视图-物料 */
        interface IMaterialViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showMaterial(data: bo.Material): void;
            /** 更多信息 */
            overviewEvent: Function;
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
        /** 选择应用-物料 */
        class ProductInventoryChooseApp extends ProductChooseApp {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
        }
        /** 物料选择服务映射 */
        class ProductInventoryChooseServiceMapping extends ibas.BOChooseServiceMapping {
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
declare namespace materials {
    namespace app {
        class ReservationWorking extends ibas.Bindable {
            constructor(data: IMaterialInventoryReservationTarget);
            get data(): IMaterialInventoryReservationTarget;
            get targetType(): string;
            get targetEntry(): number;
            get businessPartner(): string;
            get items(): ibas.IList<ReservationWorkingItem>;
            fireProcessing(): void;
        }
        class ReservationWorkingItem extends ibas.Bindable {
            constructor(data: IMaterialInventoryReservationTargetLine, parent: ReservationWorking);
            get data(): IMaterialInventoryReservationTargetLine;
            /** 行号 */
            get lineId(): number;
            /** 物料编码 */
            get itemCode(): string;
            /** 物料描述 */
            get itemDescription(): string;
            set itemDescription(value: string);
            /** 物料版本 */
            get itemVersion(): string;
            /** 仓库编码 */
            get warehouse(): string;
            /** 数量 */
            get quantity(): number;
            /** 单位 */
            get uom(): string;
            /** 序列号管理 */
            get serialManagement(): ibas.emYesNo;
            set serialManagement(value: ibas.emYesNo);
            /** 批次管理 */
            get batchManagement(): ibas.emYesNo;
            set batchManagement(value: ibas.emYesNo);
            /** 版本管理 */
            get versionManagement(): ibas.emYesNo;
            set versionManagement(value: ibas.emYesNo);
            /** 混用批次 */
            get mixingBatches(): ibas.emYesNo;
            set mixingBatches(value: ibas.emYesNo);
            /** 库存数量 */
            get inventoryQuantity(): number;
            /** 库存单位 */
            get inventoryUOM(): string;
            set inventoryUOM(value: string);
            /** 单位汇率 */
            get uomRate(): number;
            set uomRate(value: number);
            /** 剩余数量 */
            get remaining(): number;
            /** 操作结果 */
            get results(): ReservationWorkingItemResults;
            fireProcessing(): void;
        }
        class ReservationWorkingItemResults extends ibas.ArrayList<ReservationWorkingItemResult> {
            constructor(parent: ReservationWorkingItem);
            protected get parent(): ReservationWorkingItem;
            add(item: ReservationWorkingItemResult | ReservationWorkingItemResult[]): void;
            private listener;
            remove(item: ReservationWorkingItemResult): boolean;
            filterDeleted(): ReservationWorkingItemResult[];
            total(): number;
        }
        class ReservationWorkingItemResult extends ibas.Bindable {
            constructor(data: bo.MaterialInventoryReservation | bo.MaterialOrderedReservation);
            get data(): bo.MaterialInventoryReservation | bo.MaterialOrderedReservation;
            /** 来源 */
            get source(): string;
            /** 可保存的 */
            get isSavable(): boolean;
            /** 状态 */
            get status(): ibas.emBOStatus;
            /** 交货日期 */
            get deliveryDate(): Date;
            /** 删除的 */
            get isDeleted(): boolean;
            set isDeleted(value: boolean);
            delete(): void;
            /** 新的 */
            get isNew(): boolean;
            set isNew(value: boolean);
            /** 修改的 */
            get isDirty(): boolean;
            set isDirty(value: boolean);
            /** 物料号 */
            get itemCode(): string;
            set itemCode(value: string);
            /** 批次号 */
            get batchCode(): string;
            set batchCode(value: string);
            /** 序列号 */
            get serialCode(): string;
            set serialCode(value: string);
            /** 数量 */
            get quantity(): number;
            set quantity(value: number);
            /** 数量 */
            get closedQuantity(): number;
            set closedQuantity(value: number);
            /** 备注 */
            get remarks(): string;
            set remarks(value: string);
            get targetDocumentType(): string;
            set targetDocumentType(value: string);
            get targetDocumentEntry(): number;
            set targetDocumentEntry(value: number);
            get targetDocumentLineId(): number;
            set targetDocumentLineId(value: number);
        }
        /** 应用-物料库存预留 */
        class MaterialInventoryReservationService extends ibas.ServiceApplication<IMaterialInventoryReservationView, IMaterialInventoryReservationTarget | IMaterialInventoryReservationTarget[]> {
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
            private workingDatas;
            protected runService(contract: IMaterialInventoryReservationTarget | IMaterialInventoryReservationTarget[]): void;
            private warehouses;
            private currentWorkingItem;
            /** 切换工作数据 */
            private changeWorkingItem;
            /** 预留库存 */
            private reserveInventory;
            /** 释放预留库存 */
            private releaseReservation;
            /** 保存预留库存 */
            private saveReservation;
            private reserveOrdered;
            /** 关闭视图 */
            close(): void;
        }
        /** 视图-物料库存预留 */
        interface IMaterialInventoryReservationView extends ibas.IView {
            /** 切换工作数据 */
            changeWorkingItemEvent: Function;
            /** 预留库存 */
            reserveInventoryEvent: Function;
            /** 预留订购 */
            reserveOrderedEvent: Function;
            /** 释放预留库存 */
            releaseReservationEvent: Function;
            /** 显示工作顺序 */
            showWorkingDatas(datas: ReservationWorking[]): void;
            /** 显示物料库存 */
            showInventories(datas: bo.MaterialInventory[] | bo.MaterialBatch[] | bo.MaterialSerial[]): void;
            /** 显示预留 */
            showReservations(datas: ReservationWorkingItemResult[]): void;
            /** 保存预留库存 */
            saveReservationEvent: Function;
            /** 显示订购可用源单据 */
            showOrderedSourceDocuments(datas: ibas.IServiceAgent[]): void;
        }
        /** 物料库存预留服务映射 */
        class MaterialInventoryReservationServiceMapping extends ibas.ServiceMapping {
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
declare namespace materials {
    namespace app {
        class OrderedReservationWorking extends ibas.Bindable {
            constructor(data: IMaterialOrderedReservationSource);
            get data(): IMaterialOrderedReservationSource;
            get sourceType(): string;
            get sourceEntry(): number;
            get items(): ibas.IList<OrderedReservationWorkingItem>;
            fireProcessing(): void;
        }
        class OrderedReservationWorkingItem extends ibas.Bindable {
            constructor(data: IMaterialOrderedReservationSourceLine, parent: OrderedReservationWorking);
            get data(): IMaterialOrderedReservationSourceLine;
            /** 行号 */
            get lineId(): number;
            /** 物料编码 */
            get itemCode(): string;
            /** 物料描述 */
            get itemDescription(): string;
            set itemDescription(value: string);
            /** 仓库编码 */
            get warehouse(): string;
            /** 数量 */
            get quantity(): number;
            /** 单位 */
            get uom(): string;
            /** 库存数量 */
            get inventoryQuantity(): number;
            /** 库存单位 */
            get inventoryUOM(): string;
            set inventoryUOM(value: string);
            /** 交货日期 */
            get deliveryDate(): Date;
            set deliveryDate(value: Date);
            /** 单位汇率 */
            get uomRate(): number;
            set uomRate(value: number);
            /** 剩余数量 */
            get remaining(): number;
            /** 操作结果 */
            get results(): OrderedReservationWorkingItemResults;
            fireProcessing(): void;
        }
        class OrderedReservationWorkingItemResults extends ibas.ArrayList<bo.MaterialOrderedReservation> {
            constructor(parent: OrderedReservationWorkingItem);
            protected get parent(): OrderedReservationWorkingItem;
            add(item: bo.MaterialOrderedReservation | bo.MaterialOrderedReservation[]): void;
            private listener;
            remove(item: bo.MaterialOrderedReservation): boolean;
            filterDeleted(): bo.MaterialOrderedReservation[];
            total(): number;
        }
        /** 应用- 物料订购预留 */
        class MaterialOrderedReservationService extends ibas.ServiceApplication<IMaterialOrderedReservationView, IMaterialOrderedReservationSource | IMaterialOrderedReservationSource[]> {
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
            private workingDatas;
            protected runService(contract: IMaterialOrderedReservationSource | IMaterialOrderedReservationSource[]): void;
            private currentWorkingItem;
            /** 切换工作数据 */
            private changeWorkingItem;
            /** 保存预留库存 */
            private saveReservation;
            private addTargetDocument;
            private removeTargetDocument;
            /** 关闭视图 */
            close(): void;
        }
        /** 视图- 物料订购预留 */
        interface IMaterialOrderedReservationView extends ibas.IView {
            /** 切换工作数据 */
            changeWorkingItemEvent: Function;
            /** 添加目标单据 */
            addTargetDocumentEvent: Function;
            /** 移除目标单据 */
            removeTargetDocumentEvent: Function;
            /** 显示可用目标单据 */
            showTargetDocuments(datas: ibas.IServiceAgent[]): void;
            /** 显示工作顺序 */
            showWorkingDatas(data: OrderedReservationWorking[]): void;
            /** 显示预留 */
            showReservations(datas: bo.MaterialOrderedReservation[]): void;
            /** 保存预留库存 */
            saveReservationEvent: Function;
        }
        /**  物料订购预留服务映射 */
        class MaterialOrderedReservationServiceMapping extends ibas.ServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 应用-物料替代 */
        class MaterialSubstituteEditApp extends ibas.Application<IMaterialSubstituteEditView> {
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
            run(material?: bo.Material): void;
            private material;
            private substitutes;
            protected removeMaterialSubstitute(data: materials.bo.MaterialSubstitute | materials.bo.MaterialSubstitute[]): void;
            protected addMaterialSubstitute(caller?: bo.MaterialSubstitute): void;
            protected saveMaterialSubstitute(beSaveds: materials.bo.MaterialSubstitute[]): void;
            /** 关闭视图 */
            close(): void;
            /** 选择物料版本 */
            private chooseSubstituteVersion;
        }
        /** 视图-物料替代 */
        interface IMaterialSubstituteEditView extends ibas.IView {
            /** 保存数据事件 */
            saveSubstituteEvent: Function;
            /** 添加数据事件 */
            addSubstituteEvent: Function;
            /** 移除数据事件 */
            removeSubstituteEvent: Function;
            /** 显示数据 */
            showSubstitutes(datas: bo.MaterialSubstitute[]): void;
            /** 显示数据 */
            showMaterials(data: bo.Material): void;
            /** 选择数据版本事件 */
            chooseSubstituteVersionEvent: Function;
        }
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
        enum emNumberChangeStatus {
            NOT = 0,
            PROCESSING = 1,
            DONE = 2
        }
        class MaterialNumberItem extends ibas.Bindable {
            constructor(source: bo.MaterialBatch | bo.MaterialSerial);
            get status(): emNumberChangeStatus;
            set status(value: emNumberChangeStatus);
            get material(): bo.Material;
            set material(value: bo.Material);
            source: bo.MaterialBatch | bo.MaterialSerial;
            target: bo.MaterialBatch | bo.MaterialSerial;
            get quantity(): number;
            set quantity(value: number);
            get sourceQuantity(): number;
            get sourceNumber(): string;
            set sourceNumber(value: string);
            get targetNumber(): string;
            set targetNumber(value: string);
            get sourceWarehouse(): string;
            set sourceWarehouse(value: string);
            get targetWarehouse(): string;
            set targetWarehouse(value: string);
            get targetMaterial(): bo.Material;
            set targetMaterial(value: bo.Material);
            reservations: ibas.IList<MaterialNumberReservation>;
            get remarksOut(): string;
            set remarksOut(value: string);
            get remarksIn(): string;
            set remarksIn(value: string);
            get reservationQuantity(): number;
            get transferQuantity(): number;
            check(blocked: boolean): void;
        }
        class MaterialNumberReservation extends ibas.Bindable {
            constructor(data: bo.MaterialInventoryReservation);
            source: bo.MaterialInventoryReservation;
            sourceQuantity: number;
            target: bo.MaterialInventoryReservation;
        }
        /** 应用-物料批次序列号变更 */
        class MaterialNumberChangeApp extends ibas.Application<IMaterialNumberChangeView> {
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
            private changeItems;
            private addMaterialBatch;
            private addMaterialSerial;
            private removeItem;
            private showItems;
            private editMaterialSerial;
            private editMaterialBatch;
            private reset;
            private changeTo;
            private chooseTargetMaterial;
        }
        /** 视图-物料批次序列号变更 */
        interface IMaterialNumberChangeView extends ibas.IView {
            /** 添加物料批次事件 */
            addMaterialBatchEvent: Function;
            /** 添加物料序列事件 */
            addMaterialSerialEvent: Function;
            /** 移除项目事件 */
            removeItemEvent: Function;
            /** 显示项目 */
            showItems(datas: MaterialNumberItem[]): void;
            /** 编辑批次信息 */
            editMaterialBatchEvent: Function;
            /** 编辑序列信息 */
            editMaterialSerialEvent: Function;
            /** 选择变更物料 */
            chooseTargetMaterialEvent: Function;
            /** 重置事件 */
            resetEvent: Function;
            /** 改变事件 */
            changeToEvent: Function;
        }
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
        enum emMaterialTransferStatus {
            NOT = 0,
            PROCESSING = 1,
            DONE = 2
        }
        class MaterialInventoryItem extends ibas.Bindable {
            constructor(source: bo.MaterialBatch | bo.MaterialSerial | bo.MaterialInventory | bo.Product);
            get status(): emMaterialTransferStatus;
            set status(value: emMaterialTransferStatus);
            get material(): bo.Material;
            set material(value: bo.Material);
            source: bo.MaterialBatch | bo.MaterialSerial | bo.MaterialInventory | bo.Product;
            get itemCode(): string;
            set itemCode(value: string);
            get quantity(): number;
            set quantity(value: number);
            get sourceQuantity(): number;
            get sourceNumber(): string;
            set sourceNumber(value: string);
            get sourceWarehouse(): string;
            set sourceWarehouse(value: string);
            get targetWarehouse(): string;
            set targetWarehouse(value: string);
            reservations: ibas.IList<MaterialInventoryReservation>;
            get remarks(): string;
            set remarks(value: string);
            get reservationQuantity(): number;
            get transferQuantity(): number;
            check(blocked: boolean): void;
        }
        class MaterialInventoryReservation extends ibas.Bindable {
            constructor(data: bo.MaterialInventoryReservation);
            source: bo.MaterialInventoryReservation;
            sourceQuantity: number;
            target: bo.MaterialInventoryReservation;
        }
        /** 应用-物料库存调拨 */
        class MaterialInventoryTransferApp extends ibas.Application<IMaterialInventoryTransferView> {
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
            private changeItems;
            private addMaterialInventory;
            private addMaterialBatch;
            private addMaterialSerial;
            private removeItem;
            private showItems;
            private editMaterialSerial;
            private editMaterialBatch;
            private reset;
            private transferTo;
            private chooseTargetWarehouse;
        }
        /** 视图-物物料库存调拨 */
        interface IMaterialInventoryTransferView extends ibas.IView {
            /** 添加物料库存事件 */
            addMaterialInventoryEvent: Function;
            /** 添加物料批次事件 */
            addMaterialBatchEvent: Function;
            /** 添加物料序列事件 */
            addMaterialSerialEvent: Function;
            /** 移除项目事件 */
            removeItemEvent: Function;
            /** 显示项目 */
            showItems(datas: MaterialInventoryItem[]): void;
            /** 编辑批次信息 */
            editMaterialBatchEvent: Function;
            /** 编辑序列信息 */
            editMaterialSerialEvent: Function;
            /** 选择变更物料 */
            chooseTargetWarehouseEvent: Function;
            /** 重置事件 */
            resetEvent: Function;
            /** 调拨事件 */
            transferToEvent: Function;
        }
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
        /** 列表应用-物料替代 */
        class MaterialSubstituteApp extends ibas.Application<IMaterialSubstituteView> {
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
            /** 关闭视图 */
            close(): void;
            protected substitutes: bo.MaterialSubstitutes;
            protected removeMaterialSubstitute(data: materials.bo.MaterialSubstitute | materials.bo.MaterialSubstitute[]): void;
            protected addMaterialSubstitute(data: bo.Material): void;
            protected saveMaterialSubstitute(beSaveds: materials.bo.MaterialSubstitute[]): void;
            protected fetchData(criteria: ibas.ICriteria): void;
            protected fetchSubstitute(criteria?: ibas.ICriteria): void;
            /** 选择物料版本 */
            protected chooseSubstituteVersion(caller: bo.MaterialSubstitute): void;
            /** 选择物料 */
            protected chooseSubstituteMaterial(caller: bo.MaterialSubstitute): void;
        }
        /** 视图-物料替代 */
        interface IMaterialSubstituteView extends ibas.IView {
            /** 查询物料事件 */
            fetchDataEvent: Function;
            /** 查询数据事件 */
            fetchSubstituteEvent: Function;
            /** 保存数据事件 */
            saveSubstituteEvent: Function;
            /** 添加数据事件 */
            addSubstituteEvent: Function;
            /** 移除数据事件 */
            removeSubstituteEvent: Function;
            /** 显示数据 */
            showSubstitutes(datas: bo.MaterialSubstitute[]): void;
            /** 显示物料 */
            showMaterials(data: bo.Material[]): void;
            /** 选择物料版本事件 */
            chooseSubstituteVersionEvent: Function;
            /** 选择物料事件 */
            chooseSubstituteMaterialEvent: Function;
        }
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
        class MaterialMeasurement extends ibas.Bindable {
            /** 模式 */
            mode: "INVENTORY" | "PURCHASE" | "SALES";
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId: number;
            /** 单据物料编码 */
            documentItemCode: string;
            /** 单据物料描述 */
            documentItemDescription: string;
            /** 单据数量 */
            documentQuantity: number;
            /** 单据单位 */
            documentUOM: string;
            /** 单位库 */
            units: ibas.IList<bo.Unit>;
            get material(): bo.Material;
            set material(value: bo.Material);
            /** 获取-长 */
            get length(): number;
            /** 获取-宽 */
            get width(): number;
            /** 获取-销售-高 */
            get height(): number;
            /** 获取-销售-尺寸单位 */
            get sizeUnit(): string;
            /** 获取-销售-体积 */
            get volume(): number;
            set volume(value: number);
            /** 获取-体积单位 */
            get volumeUnit(): string;
            set volumeUnit(value: string);
            /** 获取-重量 */
            get weight(): number;
            set weight(value: number);
            /** 获取-重量单位 */
            get weightUnit(): string;
            set weightUnit(value: string);
            /** 数量 */
            get quantity(): number;
            set quantity(value: number);
            /** 单位 */
            get uom(): string;
            set uom(value: string);
            protected unitName(unit: string): string;
            /**
             * 计算体积
             */
            calculateVolume(): void;
            /**
             * 计算体积
             */
            calculateWeight(): void;
        }
        /** 物料测量服务 */
        class MaterialMeasurementService extends ibas.ServiceApplication<IMaterialMeasurementView, IMaterialMeasurementContract> {
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
            private measurements;
            private units;
            protected runService(contract: IMaterialMeasurementContract): void;
            protected changeUnit(category: string, unit: string): void;
        }
        /** 视图-物料测量 */
        interface IMaterialMeasurementView extends ibas.IView {
            /** 显示数据 */
            showDatas(datas: MaterialMeasurement[]): void;
            /**
             * 改变单位事件
             */
            changeUnitEvent: Function;
        }
        /**  物料测量服务映射 */
        class MaterialMeasurementServiceMapping extends ibas.ServiceMapping {
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
declare namespace materials {
    namespace app {
        class MaterialGrossProfit extends ibas.Bindable {
            static BUSINESS_OBJECT_CODE: string;
            constructor(original: IMaterialGrossProfitContract);
            get isDirty(): boolean;
            set isDirty(value: boolean);
            get original(): IMaterialGrossProfitContract;
            set original(value: IMaterialGrossProfitContract);
            get documentType(): string;
            set documentType(value: string);
            get documentEntry(): number;
            set documentEntry(value: number);
            get documentDate(): Date;
            set documentDate(value: Date);
            get grossProfitList(): number;
            set grossProfitList(value: number);
            get grossProfit(): number;
            set grossProfit(value: number);
            get grossProfitRate(): number;
            get lines(): ibas.IList<MaterialGrossProfitLine>;
            /** 应用修改 */
            apply(): void;
            calculate(slient?: boolean): void;
        }
        class MaterialGrossProfitLine extends ibas.Bindable {
            constructor(original: IMaterialGrossProfitContractLine);
            get original(): IMaterialGrossProfitContractLine;
            set original(value: IMaterialGrossProfitContractLine);
            get lineId(): number;
            set lineId(value: number);
            get itemCode(): string;
            set itemCode(value: string);
            get itemDescription(): string;
            set itemDescription(value: string);
            get quantity(): number;
            set quantity(value: number);
            get uom(): string;
            set uom(value: string);
            get price(): number;
            set price(value: number);
            get currency(): string;
            set currency(value: string);
            get grossProfitSource(): number;
            set grossProfitSource(value: number);
            get grossProfitPrice(): number;
            set grossProfitPrice(value: number);
            get grossProfit(): number;
            get grossProfitRate(): number;
            calculate(slient?: boolean): void;
        }
        /** 物料毛利润服务 */
        class MaterialGrossProfitService extends ibas.ServiceApplication<IMaterialGrossProfitView, IMaterialGrossProfitContract> {
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
            private grossProfitData;
            protected runService(contract: IMaterialGrossProfitContract): void;
            protected apply(): void;
            protected changePriceList(priceList: number, caller?: MaterialGrossProfit | MaterialGrossProfitLine): void;
        }
        /** 视图-物料毛利润 */
        interface IMaterialGrossProfitView extends ibas.IView {
            /** 显示数据 */
            showData(data: MaterialGrossProfit): void;
            /** 显示数据行 */
            showDataLines(datas: MaterialGrossProfitLine[]): void;
            /** 改变价格清单事件 */
            changePriceListEvent: Function;
            /** 应用改变事件 */
            applyEvent: Function;
        }
        /**  物料毛利润服务映射 */
        class MaterialGrossProfitServiceMapping extends ibas.ServiceMapping {
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
            run(data?: bo.MaterialBatch | ibas.Criteria): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 选择物料规格 */
            private chooseSpecification;
            /** 选择物料版本 */
            private chooseVersion;
        }
        /** 视图-物料批次 */
        interface IMaterialBatchEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialBatch(data: bo.MaterialBatch): void;
            /** 选择物料规格 */
            chooseSpecificationEvent: Function;
            /** 选择物料版本 */
            chooseVersionEvent: Function;
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
            /** 运行 */
            run(criteria?: ibas.ICriteria | ibas.ICondition[]): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 编辑数据，参数：目标数据 */
            protected viewData(data: bo.MaterialBatch): void;
            /** 查询物料批次交易记录 */
            protected fetchDataJournal(data: ibas.ICriteria | bo.MaterialBatch, dateFrom?: Date, dateTo?: Date): void;
        }
        /** 视图-物料批次 */
        interface IMaterialBatchListView extends ibas.IBOListView {
            /** 显示物料批次数据 */
            showDatas(datas: bo.MaterialBatch[]): void;
            /** 查询物料批次交易记录 */
            fetchDataJournalEvent: Function;
            /** 显示物料批次交易数据 */
            showDataJournals(datas: bo.MaterialBatchJournal[]): void;
        }
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
            set itemDescription(value: string);
            /** 物料版本 */
            get itemVersion(): string;
            set itemVersion(value: string);
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
            /** 备注 */
            get remarks(): string;
            set remarks(value: string);
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
            /** 版本 */
            get version(): string;
            set version(value: string);
            /** 位置 */
            get location(): string;
            set location(value: string);
            /** 备注 */
            get notes(): string;
            set notes(value: string);
        }
        class ExtraResultMaterialBatch implements IExtraResultMaterialBatch {
            constructor(itemCode: string, warehouse: string, batchCode: string);
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
            /** 版本 */
            version: string;
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
            /** 选择物料版本 */
            private chooseVersion;
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
            /** 选择物料版本 */
            chooseVersionEvent: Function;
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
declare namespace materials {
    namespace app {
        /** 查看应用-物料批次 */
        class MaterialBatchViewApp extends ibas.BOViewService<IMaterialBatchViewView, bo.MaterialBatch> {
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
            run(data: bo.MaterialBatch): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-物料批次 */
        interface IMaterialBatchViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showMaterialBatch(data: bo.MaterialBatch): void;
        }
        /** 物料批次连接服务映射 */
        class MaterialBatchLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
            /** 选择总账科目事件 */
            private chooseLedgerAccount;
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
declare namespace materials {
    namespace app {
        class SchedulingGroupFunc extends ibas.ModuleFunction {
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
        /** 列表应用-计划组 */
        class SchedulingGroupListApp extends ibas.BOListApplication<ISchedulingGroupListView, bo.SchedulingGroup> {
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
            protected viewData(data: bo.SchedulingGroup): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SchedulingGroup): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SchedulingGroup | bo.SchedulingGroup[]): void;
        }
        /** 视图-计划组 */
        interface ISchedulingGroupListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SchedulingGroup[]): void;
        }
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
        /** 选择应用-计划组 */
        class SchedulingGroupChooseApp extends ibas.BOChooseService<ISchedulingGroupChooseView, bo.SchedulingGroup> {
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
        /** 视图-计划组 */
        interface ISchedulingGroupChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SchedulingGroup[]): void;
        }
        /** 计划组选择服务映射 */
        class SchedulingGroupChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.SchedulingGroup>;
        }
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
        /** 编辑应用-计划组 */
        class SchedulingGroupEditApp extends ibas.BOEditApplication<ISchedulingGroupEditView, bo.SchedulingGroup> {
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
            run(data: bo.SchedulingGroup): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-计划组 */
        interface ISchedulingGroupEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSchedulingGroup(data: bo.SchedulingGroup): void;
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
        class MaterialSpecialPriceListFunc extends ibas.ModuleFunction {
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
            protected currentPriceList: bo.MaterialPriceList;
            protected selectedPriceList(priceList: bo.MaterialPriceList): void;
            /** 查询价格 */
            protected fetchPriceItem(criteria: ibas.ICriteria): void;
            /** 保存价格清单项目 */
            protected savePriceItem(data: bo.MaterialPrice | bo.MaterialPrice[]): void;
            /** 导出价格 */
            protected exportPriceItem(): void;
            /** 添加价格 */
            protected addPriceItem(items: bo.MaterialPrice[]): void;
            /** 选择价格项目单位 */
            private choosePriceItemUnit;
        }
        /** 视图-物料价格清单 */
        interface IMaterialPriceListListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showPriceList(datas: bo.MaterialPriceList[]): void;
            /** 选中价格清单事件 */
            selectedPriceListEvent: Function;
            /** 保存价格项目事件 */
            savePriceItemEvent: Function;
            /** 添加价格项目事件 */
            addPriceItemEvent: Function;
            /** 查询价格事件 */
            fetchPriceItemEvent: Function;
            /** 显示数据 */
            showPriceItems(datas: bo.MaterialPrice[]): void;
            /** 导出价格事件 */
            exportPriceItemEvent: Function;
            /** 保存数据 */
            savePrices(datas: bo.MaterialPrice[]): void;
            /** 选择价格项目单位事件 */
            choosePriceItemUnitEvent: Function;
        }
        /** 权限元素-物料价格清单编辑 */
        const ELEMENT_MATERIAL_PRICE_LIST_EDIT: ibas.IElement;
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
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace materials {
    namespace app {
        /** 列表应用-物料特殊价格 */
        class MaterialSpecialPriceListApp extends ibas.BOListApplication<IMaterialSpecialPriceListView, bo.MaterialSpecialPrice> {
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
            protected viewData(data: bo.MaterialSpecialPrice): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialSpecialPrice): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.MaterialSpecialPrice | bo.MaterialSpecialPrice[]): void;
            protected currentBusinessPartner: businesspartner.bo.Customer | businesspartner.bo.Supplier;
            protected selectedBusinessPartner(data: businesspartner.bo.Customer | businesspartner.bo.Supplier): void;
            /** 查询价格 */
            protected fetchBusinessPartner(criteria: ibas.ICriteria): void;
            /** 保存价格清单项目 */
            protected savePriceItem(data: bo.MaterialSpecialPrice | bo.MaterialSpecialPrice[]): void;
            /** 导出价格 */
            protected exportPriceItem(): void;
            /** 添加价格 */
            protected addPriceItem(items: bo.MaterialSpecialPrice[]): void;
            /** 选择价格项目单位 */
            private choosePriceItemUnit;
        }
        /** 视图-物料特殊价格 */
        interface IMaterialSpecialPriceListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 查询业务伙伴事件 */
            fetchBusinessPartnerEvent: Function;
            /** 显示数据 */
            showBusinessPartners(datas: businesspartner.bo.Customer[] | businesspartner.bo.Supplier[]): void;
            /** 选中价格清单事件 */
            selectedBusinessPartnerEvent: Function;
            /** 保存价格项目事件 */
            savePriceItemEvent: Function;
            /** 添加价格项目事件 */
            addPriceItemEvent: Function;
            /** 显示数据 */
            showPriceItems(datas: bo.MaterialSpecialPrice[]): void;
            /** 导出价格事件 */
            exportPriceItemEvent: Function;
            /** 保存数据 */
            savePrices(datas: bo.MaterialSpecialPrice[]): void;
            /** 选择价格项目单位事件 */
            choosePriceItemUnitEvent: Function;
        }
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
        class MaterialHistoricalPrice extends ibas.Bindable {
            constructor(original: IMaterialHistoricalPricesContract);
            get original(): IMaterialHistoricalPricesContract;
            set original(value: IMaterialHistoricalPricesContract);
            get businessPartnerType(): businesspartner.bo.emBusinessPartnerType;
            set businessPartnerType(value: businesspartner.bo.emBusinessPartnerType);
            get businessPartnerCode(): string;
            set businessPartnerCode(value: string);
            get businessPartnerName(): string;
            set businessPartnerName(value: string);
            get documentType(): string;
            set documentType(value: string);
            get documentEntry(): number;
            set documentEntry(value: number);
            get documentLineId(): number;
            set documentLineId(value: number);
            get documentDate(): Date;
            set documentDate(value: Date);
            get itemCode(): string;
            set itemCode(value: string);
            get itemDescription(): string;
            set itemDescription(value: string);
            get quantity(): number;
            set quantity(value: number);
            get uom(): string;
            set uom(value: string);
        }
        /** 物料历史价格服务 */
        class MaterialHistoricalPricesService extends ibas.ServiceApplication<IMaterialHistoricalPricesView, IMaterialHistoricalPricesContract> {
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
            private contract;
            protected runService(contract: IMaterialHistoricalPricesContract): void;
            protected obtainDocumentAgents(bpType: businesspartner.bo.emBusinessPartnerType, resultCount?: number, bpCode?: string): void;
            protected fetchDocumentDatas(agents: ibas.IServiceAgent[]): void;
            protected apply(data: IDocumentMaterialPriceData, type: "PRICE" | "PRETAXPRICE" | "UNITPRICE"): void;
        }
        /** 视图-物料历史价格 */
        interface IMaterialHistoricalPricesView extends ibas.IView {
            /** 应用价格事件 */
            applyEvent: Function;
            /** 显示单据数据 */
            showDocument(data: MaterialHistoricalPrice): void;
            /** 获取单据代理事件 */
            obtainDocumentAgentsEvent: Function;
            /** 显示单据服务代理 */
            showDocumentAgents(agents: ibas.IServiceAgent[]): void;
            /** 查询单据数据事件 */
            fetchDocumentDatasEvent: Function;
            /** 显示单据数据 */
            showDocumentDatas(datas: IDocumentMaterialPriceData[]): void;
        }
        /**  物料历史价格服务映射 */
        class MaterialHistoricalPricesServiceMapping extends ibas.ServiceMapping {
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
            run(data?: bo.MaterialSerial | ibas.Criteria): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 选择物料规格 */
            private chooseSpecification;
            /** 选择物料版本 */
            private chooseVersion;
        }
        /** 视图-物料序列 */
        interface IMaterialSerialEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialSerial(data: bo.MaterialSerial): void;
            /** 选择物料规格 */
            chooseSpecificationEvent: Function;
            /** 选择物料版本 */
            chooseVersionEvent: Function;
        }
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
            /** 运行 */
            run(criteria?: ibas.ICriteria | ibas.ICondition[]): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.MaterialSerial): void;
            /** 查询物料序列交易记录 */
            protected fetchDataJournal(data: ibas.ICriteria | bo.MaterialSerial, dateFrom?: Date, dateTo?: Date): void;
        }
        /** 视图-物料序列 */
        interface IMaterialSerialListView extends ibas.IBOListView {
            /** 显示物料序列数据 */
            showDatas(datas: bo.MaterialSerial[]): void;
            /** 查询物料序列交易记录 */
            fetchDataJournalEvent: Function;
            /** 显示物料序列交易数据 */
            showDataJournals(datas: bo.MaterialSerialJournal[]): void;
        }
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
            set itemDescription(value: string);
            /** 物料版本 */
            get itemVersion(): string;
            set itemVersion(value: string);
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
            /** 备注 */
            get remarks(): string;
            set remarks(value: string);
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
            /** 版本 */
            get version(): string;
            set version(value: string);
            /** 位置 */
            get location(): string;
            set location(value: string);
            /** 备注 */
            get notes(): string;
            set notes(value: string);
        }
        class ExtraResultMaterialSerial implements IExtraResultMaterialSerial {
            constructor(itemCode: string, warehouse: string, serialCode: string);
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
            /** 版本 */
            version: string;
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
            /** 选择物料版本 */
            private chooseVersion;
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
            /** 选择物料版本 */
            chooseVersionEvent: Function;
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
declare namespace materials {
    namespace app {
        /** 查看应用-物料序列 */
        class MaterialSerialViewApp extends ibas.BOViewService<IMaterialSerialViewView, bo.MaterialSerial> {
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
            run(data: bo.MaterialSerial): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-物料序列 */
        interface IMaterialSerialViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showMaterialSerial(data: bo.MaterialSerial): void;
        }
        /** 物料序列连接服务映射 */
        class MaterialSerialLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
            /** 选择总账科目事件 */
            private chooseLedgerAccount;
        }
        /** 视图-仓库 */
        interface IWarehouseEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showWarehouse(data: bo.Warehouse): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择总账科目事件 */
            chooseLedgerAccountEvent: Function;
        }
        /** 权限元素-单据仓库 */
        const ELEMENT_DOCUMENT_WAREHOUSE: ibas.IElement;
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
        class UnitFunc extends ibas.ModuleFunction {
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
        /** 列表应用-计量单位 */
        class UnitListApp extends ibas.BOListApplication<IUnitListView, bo.Unit> {
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
            protected viewData(data: bo.Unit): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Unit): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Unit | bo.Unit[]): void;
            /** 编辑单位换算 */
            private editUnitRate;
        }
        /** 视图-计量单位 */
        interface IUnitListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Unit[]): void;
            /** 编辑单位换算率事件 */
            editUnitRateEvent: Function;
        }
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
        /** 选择应用-计量单位 */
        class UnitChooseApp extends ibas.BOChooseService<IUnitChooseView, bo.Unit> {
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
        /** 视图-计量单位 */
        interface IUnitChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Unit[]): void;
        }
        /** 计量单位选择服务映射 */
        class UnitChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Unit>;
        }
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
        /** 编辑应用-计量单位 */
        class UnitEditApp extends ibas.BOEditApplication<IUnitEditView, bo.Unit> {
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
            run(data: bo.Unit): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
        }
        /** 视图-计量单位 */
        interface IUnitEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showUnit(data: bo.Unit): void;
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
        /** 列表应用-计量单位换算率 */
        class UnitRateEditListApp extends ibas.Application<IUnitRateEditListView> {
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            run(material?: bo.Material): void;
            private material;
            private editDatas;
            protected saveData(): void;
            protected addData(): void;
            protected removeData(data: bo.UnitRate): void;
            protected chooseDataUnit(data: bo.UnitRate, type: string): void;
        }
        /** 视图-计量单位换算率 */
        interface IUnitRateEditListView extends ibas.IView {
            /** 保存数据事件 */
            saveDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.UnitRate[]): void;
            /** 添加数据事件 */
            addDataEvent: Function;
            /** 删除数据事件 */
            removeDataEvent: Function;
            /** 选择单位事件 */
            chooseDataUnitEvent: Function;
        }
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
        class MaterialScrapFunc extends ibas.ModuleFunction {
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
        /** 列表应用-物料废品率 */
        class MaterialScrapListApp extends ibas.BOListApplication<IMaterialScrapListView, bo.MaterialScrap> {
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
            protected viewData(data: bo.MaterialScrap): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialScrap): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.MaterialScrap | bo.MaterialScrap[]): void;
        }
        /** 视图-物料废品率 */
        interface IMaterialScrapListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.MaterialScrap[]): void;
        }
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
        /** 选择应用-物料废品率 */
        class MaterialScrapChooseApp extends ibas.BOChooseService<IMaterialScrapChooseView, bo.MaterialScrap> {
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
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialScrap): void;
        }
        /** 视图-物料废品率 */
        interface IMaterialScrapChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.MaterialScrap[]): void;
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
        }
        /** 物料废品率选择服务映射 */
        class MaterialScrapChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.MaterialScrap>;
        }
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
        /** 查看应用-物料废品率 */
        class MaterialScrapViewApp extends ibas.BOViewService<IMaterialScrapViewView, bo.MaterialScrap> {
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
            run(data: bo.MaterialScrap): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-物料废品率 */
        interface IMaterialScrapViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showMaterialScrap(data: bo.MaterialScrap): void;
            /** 显示数据-物料废品率 - 阶梯 */
            showMaterialScrapSections(datas: bo.MaterialScrapSection[]): void;
        }
        /** 物料废品率连接服务映射 */
        class MaterialScrapLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料废品率 */
        class MaterialScrapEditApp extends ibas.BOEditApplication<IMaterialScrapEditView, bo.MaterialScrap> {
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
            run(data: bo.MaterialScrap): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加物料废品率 - 阶梯事件 */
            protected addMaterialScrapSection(): void;
            /** 删除物料废品率 - 阶梯事件 */
            protected removeMaterialScrapSection(items: bo.MaterialScrapSection[]): void;
        }
        /** 视图-物料废品率 */
        interface IMaterialScrapEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialScrap(data: bo.MaterialScrap): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加物料废品率 - 阶梯事件 */
            addMaterialScrapSectionEvent: Function;
            /** 删除物料废品率 - 阶梯事件 */
            removeMaterialScrapSectionEvent: Function;
            /** 显示数据-物料废品率 - 阶梯 */
            showMaterialScrapSections(datas: bo.MaterialScrapSection[]): void;
        }
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
        class MaterialVersionFunc extends ibas.ModuleFunction {
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
        /** 列表应用-物料版本 */
        class MaterialVersionListApp extends ibas.BOListApplication<IMaterialVersionListView, bo.MaterialVersion> {
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
            protected viewData(data: bo.MaterialVersion): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialVersion): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.MaterialVersion | bo.MaterialVersion[]): void;
        }
        /** 视图-物料版本 */
        interface IMaterialVersionListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.MaterialVersion[]): void;
        }
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
        /** 选择应用-物料版本 */
        class MaterialVersionChooseApp extends ibas.BOChooseService<IMaterialVersionChooseView, bo.MaterialVersion> {
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
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.MaterialVersion): void;
        }
        /** 视图-物料版本 */
        interface IMaterialVersionChooseView extends ibas.IBOChooseView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.MaterialVersion[]): void;
        }
        /** 物料版本选择服务映射 */
        class MaterialVersionChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.MaterialVersion>;
        }
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
        /** 查看应用-物料版本 */
        class MaterialVersionViewApp extends ibas.BOViewService<IMaterialVersionViewView, bo.MaterialVersion> {
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
            run(data: bo.MaterialVersion): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-物料版本 */
        interface IMaterialVersionViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showMaterialVersion(data: bo.MaterialVersion): void;
        }
        /** 物料版本连接服务映射 */
        class MaterialVersionLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 编辑应用-物料版本 */
        class MaterialVersionEditApp extends ibas.BOEditApplication<IMaterialVersionEditView, bo.MaterialVersion> {
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
            run(data: bo.MaterialVersion): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择物料事件 */
            private chooseMaterial;
        }
        /** 视图-物料版本 */
        interface IMaterialVersionEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showMaterialVersion(data: bo.MaterialVersion): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择物料事件 */
            chooseMaterialEvent: Function;
        }
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
        class PickListsFunc extends ibas.ModuleFunction {
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
        /** 列表应用-拣配清单 */
        class PickListsListApp extends ibas.BOListApplication<IPickListsListView, bo.PickLists> {
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
            protected viewData(data: bo.PickLists): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PickLists): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PickLists | bo.PickLists[]): void;
            /** 拣配 */
            pick(): void;
        }
        /** 视图-拣配清单 */
        interface IPickListsListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PickLists[]): void;
            /** 拣配事件 */
            pickEvent: Function;
        }
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
        /** 选择应用-拣配清单 */
        class PickListsChooseApp extends ibas.BOChooseService<IPickListsChooseView, bo.PickLists> {
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
        /** 视图-拣配清单 */
        interface IPickListsChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PickLists[]): void;
        }
        /** 拣配清单选择服务映射 */
        class PickListsChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.PickLists>;
        }
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
        /** 查看应用-拣配清单 */
        class PickListsViewApp extends ibas.BOViewService<IPickListsViewView, bo.PickLists> {
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
            run(data: bo.PickLists): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-拣配清单 */
        interface IPickListsViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showPickLists(data: bo.PickLists): void;
            /** 显示数据-拣配清单-行 */
            showPickListsLines(datas: bo.PickListsLine[]): void;
        }
        /** 拣配清单连接服务映射 */
        class PickListsLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace materials {
    namespace app {
        /** 编辑应用-拣配清单 */
        class PickListsEditApp extends ibas.BOEditService<IPickListsEditView, bo.PickLists> {
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
            run(data: bo.PickLists): void;
            /** 保存数据 */
            protected saveData(showProceeding?: boolean): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void; /** 添加拣配清单-行事件 */
            protected addPickListsLine(agent: ibas.IServiceAgent): void;
            /** 删除拣配清单-行事件 */
            protected removePickListsLine(items: bo.PickListsLine[] | bo.PickListsNumber[]): void;
            /** 选择拣配清单行批次事件 */
            private choosePickListsLineMaterialBatch;
            /** 选择拣配清单序列事件 */
            private choosePickListsLineMaterialSerial;
            /** 转为交货 */
            protected turnToDelivery(agent: ibas.IServiceAgent, selectItems?: bo.PickListsLine[]): void;
            /** 使用预留拣配 */
            protected useInventoryReservationToPick(): Promise<void>;
            /**
             * 获取物料主数据
             * @param itemCode 物料编码
             * @returns 物料主数据
             */
            private fetchMaterialsAsync;
        }
        /** 视图-拣配清单 */
        interface IPickListsEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPickLists(data: bo.PickLists): void;
            /** 显示拣配者 */
            showPickers(datas: ibas.IServiceAgent[]): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加拣配清单-行事件 */
            addPickListsLineEvent: Function;
            /** 删除拣配清单-行事件 */
            removePickListsLineEvent: Function;
            /** 选择拣配清单行物料批次事件 */
            choosePickListsLineMaterialBatchEvent: Function;
            /** 选择拣配清单行物料序列事件 */
            choosePickListsLineMaterialSerialEvent: Function;
            /** 转为交货事件 */
            turnToDeliveryEvent: Function;
            /** 显示数据-拣配清单-行 */
            showPickListsLines(datas: bo.PickListsLine[]): void;
            /** 使用预留拣配事件 */
            useInventoryReservationToPickEvent: Function;
        }
        /** 拣配清单编辑服务映射 */
        class PickListsEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.PickLists>>;
        }
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
        enum emPickViewStatus {
            /** 处理中 */
            PROCESSING = 0,
            /** 已审批 */
            RELEASED = 1,
            /** 已拣配 */
            PICKED = 2
        }
        enum emPickViewDimension {
            /** 明细 */
            DETAILS = 0,
            /** 汇总 */
            TOTAL = 1
        }
        class PickListsWorking extends ibas.BusinessObject<PickListsWorking> {
            constructor();
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): emPickViewStatus;
            /** 设置-状态 */
            set status(value: emPickViewStatus);
            /** 映射的属性名称-显示维度 */
            static PROPERTY_VIEWDIMENSION_NAME: string;
            /** 获取-显示维度 */
            get viewDimension(): emPickViewDimension;
            /** 设置-显示维度 */
            set viewDimension(value: emPickViewDimension);
            /** 映射的属性名称-未选择的仓库 */
            static PROPERTY_UNSELECTEDWAREHOUSES_NAME: string;
            /** 获取-未选择的仓库 */
            get unSelectedWarehouses(): string;
            /** 设置-未选择的仓库 */
            set unSelectedWarehouses(value: string);
            get items(): ibas.IList<PickListsWorkingItem>;
            criteria(): ibas.ICriteria;
            toString(): string;
            protected init(): void;
        }
        class PickListsWorkingItem extends ibas.BusinessObject<PickListsWorkingItem> {
            constructor(serviceAgent: ibas.IServiceAgent, parent: PickListsWorking);
            get id(): string;
            get name(): string;
            /** 映射的属性名称-是否启用 */
            static PROPERTY_ENABLE_NAME: string;
            /** 获取-是否启用 */
            get enable(): ibas.emYesNo;
            /** 设置-是否启用 */
            set enable(value: ibas.emYesNo);
            get serviceAgent(): ibas.IServiceAgent;
            get parent(): PickListsWorking;
            criteria(): ibas.ICriteria;
            toString(): string;
            protected init(): void;
            fetch(criteria?: ibas.ICriteria): Promise<IPickListsTarget[]>;
        }
        /** 应用-拣配清单 */
        class PickListsApp extends ibas.Application<IPickListsView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            protected workingData: PickListsWorking;
            protected pickListsDatas: ibas.ArrayList<bo.PickLists>;
            run(data?: PickListsWorking): void;
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchPickLists(criteria?: ibas.ICriteria): void;
            /** 查询处理中数据事件 */
            protected fetchProcessingData(): Promise<void>;
            /** 下达拣配清单事件 */
            protected releasePickLists(pickLists: bo.PickLists, targets: IPickListsTarget[], callback: (error?: any) => void): Promise<void>;
            /** 转为交货事件 */
            protected processingTurnToDelivery(serviceAgent: ibas.IServiceAgent, datas: ibas.IList<app.IPickListsTarget>, callback: (closedTargets: Array<IPickListsTarget>) => void): Promise<void>;
            /** 转为交货事件 */
            protected releasedTurnToDelivery(serviceAgent: ibas.IServiceAgent, selecteds: ibas.IList<bo.PickListsLine | bo.PickLists>): Promise<void>;
            /** 转为交货事件 */
            protected pickedTurnToDelivery(serviceAgent: ibas.IServiceAgent, selecteds: ibas.IList<bo.PickListsLine | bo.PickLists>): Promise<void>;
            protected turnToDelivery(serviceAgent: ibas.IServiceAgent, datas: ibas.IList<bo.PickListsLine>, autoSave?: boolean): Promise<Array<bo.IPickListsLine>>;
            protected saveDatas(): Promise<void>;
            /** 保存数据 */
            protected saveData(pickLists: bo.PickLists): Promise<bo.PickLists>;
            /**
             * 获取物料主数据
             * @param itemCode 物料编码
             * @returns 物料主数据
             */
            private fetchMaterialsAsync;
        }
        /** 应用-拣配清单 */
        interface IPickListsView extends ibas.IView {
            /** 保存数据事件 */
            saveDatasEvent: Function;
            /** 显示数据 */
            showWorkingData(data: PickListsWorking): void;
            /** 显示拣配者 */
            showPickers(datas: ibas.IServiceAgent[]): void;
            /** 查询处理中数据事件 */
            fetchProcessingDataEvent: Function;
            /** 显示处理中数据 */
            showProcessingData(datas: IPickListsTarget[]): void;
            /** 显示拣配清单 */
            showPickListsData(data: bo.PickLists[]): void;
            /** 下达拣配清单事件 */
            releasePickListsEvent: Function;
            /** 转为交货事件 */
            processingTurnToDeliveryEvent: Function;
            /** 转为交货事件 */
            releasedTurnToDeliveryEvent: Function;
            /** 转为交货事件 */
            pickedTurnToDeliveryEvent: Function;
        }
        /** 应用-拣配清单 设置 */
        class PickListsSettingApp extends ibas.Application<IPickListsSettingView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            protected workingData: PickListsWorking;
            protected warehouses: ibas.IList<materials.bo.Warehouse>;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 确认 */
            protected confirm(datas: ibas.IList<materials.bo.Warehouse>): void;
            /** 查询仓库 */
            protected fetchWarehouse(isNew?: boolean): void;
        }
        /** 应用-拣配清单 设置 */
        interface IPickListsSettingView extends ibas.IView {
            /** 确认事件 */
            confirmEvent: Function;
            /** 显示数据 */
            showWorkingData(data: PickListsWorking): void;
            /** 显示仓库 */
            showWarehouse(datas: materials.bo.Warehouse[]): void;
        }
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
        /** 选择应用-库存转储申请 */
        class InventoryTransferRequestChooseApp extends ibas.BOChooseService<IInventoryTransferRequestChooseView, bo.InventoryTransferRequest> {
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
        /** 视图-库存转储申请 */
        interface IInventoryTransferRequestChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.InventoryTransferRequest[]): void;
        }
        /** 库存转储申请选择服务映射 */
        class InventoryTransferRequestChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.InventoryTransferRequest>>;
        }
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
        /** 编辑应用-库存转储申请 */
        class InventoryTransferRequestEditApp extends ibas.BOEditService<IInventoryTransferRequestEditView, bo.InventoryTransferRequest> {
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
            run(data: bo.InventoryTransferRequest): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 添加库存转储申请-行事件 */
            private addInventoryTransferRequestLine;
            /** 删除库存转储申请-行事件 */
            private removeInventoryTransferRequestLine;
            /** 选择库存转储申请订单行物料事件 */
            private chooseInventoryTransferRequestLineMaterial;
            /** 选择库存转储申请订单物料价格清单事件 */
            private chooseeInventoryTransferRequestMaterialPriceList;
            /** 选择库存转储申请订单行物料事件 */
            private chooseInventoryTransferRequestLineWarehouse;
            private chooseInventoryTransferRequestLineMaterialBatch;
            private chooseInventoryTransferRequestLineMaterialSerial;
            private chooseInventoryTransferRequestLineDistributionRule;
            private turnToInventoryTransfer;
            private chooseInventoryTransferRequestLineMaterialVersion;
            /** 预留物料库存 */
            private reserveMaterialsInventory;
            protected measuringMaterials(): void;
        }
        /** 视图-库存转储申请 */
        interface IInventoryTransferRequestEditView extends ibas.IBOEditView {
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择库存转储申请单物料价格清单 */
            chooseeInventoryTransferRequestMaterialPriceListEvent: Function;
            /** 添加库存转储申请-行事件 */
            addInventoryTransferRequestLineEvent: Function;
            /** 删除库存转储申请-行事件 */
            removeInventoryTransferRequestLineEvent: Function;
            /** 显示数据 */
            showInventoryTransferRequest(data: bo.InventoryTransferRequest): void;
            /** 显示数据 */
            showInventoryTransferRequestLines(datas: bo.InventoryTransferRequestLine[]): void;
            /** 选择库存转储申请单行物料事件 */
            chooseInventoryTransferRequestLineMaterialEvent: Function;
            /** 选择库存转储申请单行仓库事件 */
            chooseInventoryTransferRequestLineWarehouseEvent: Function;
            /** 选择库存转储申请单行物料批次事件 */
            chooseInventoryTransferRequestLineMaterialBatchEvent: Function;
            /** 选择库存转储申请单行物料序列事件 */
            chooseInventoryTransferRequestLineMaterialSerialEvent: Function;
            /** 选择库存转储申请单行成本中心事件 */
            chooseInventoryTransferRequestLineDistributionRuleEvent: Function;
            /** 选择库存转储申请-行 物料版本 */
            chooseInventoryTransferRequestLineMaterialVersionEvent: Function;
            /** 转为库存转储申请事件 */
            turnToInventoryTransferEvent: Function;
            /** 预留物料库存 */
            reserveMaterialsInventoryEvent: Function;
            /** 测量物料 */
            measuringMaterialsEvent: Function;
            /** 从仓库 */
            fromWarehouse: string;
            /** 目标仓库 */
            toWarehouse: string;
        }
        /** 库存转储申请编辑服务映射 */
        class InventoryTransferRequestEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.InventoryTransferRequest>>;
        }
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
        class InventoryTransferRequestFunc extends ibas.ModuleFunction {
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
        /** 列表应用-库存转储申请 */
        class InventoryTransferRequestListApp extends ibas.BOListApplication<IInventoryTransferRequestListView, bo.InventoryTransferRequest> {
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
            protected viewData(data: bo.InventoryTransferRequest): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.InventoryTransferRequest): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.InventoryTransferRequest | bo.InventoryTransferRequest[]): void;
        }
        /** 视图-库存转储申请 */
        interface IInventoryTransferRequestListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.InventoryTransferRequest[]): void;
        }
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
        /** 查看应用-库存转储申请 */
        class InventoryTransferRequestViewApp extends ibas.BOViewService<IInventoryTransferRequestViewView, bo.InventoryTransferRequest> {
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
            run(data: bo.InventoryTransferRequest): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-库存转储申请 */
        interface IInventoryTransferRequestViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showInventoryTransferRequest(data: bo.InventoryTransferRequest): void;
            /** 显示数据-库存转储申请-行 */
            showInventoryTransferRequestLines(datas: bo.InventoryTransferRequestLine[]): void;
        }
        /** 库存转储申请连接服务映射 */
        class InventoryTransferRequestLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
        class BusinessPartnerMaterialCatalogFunc extends ibas.ModuleFunction {
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
        /** 列表应用-业务伙伴物料目录 */
        class BusinessPartnerMaterialCatalogListApp extends ibas.Application<IBusinessPartnerMaterialCatalogListView> {
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 删除数据，参数：目标数据集合 */
            protected saveData(data: bo.BusinessPartnerMaterialCatalog | bo.BusinessPartnerMaterialCatalog[]): void;
            protected fetchCustomer(criteria: ibas.ICriteria): void;
            protected fetchSupplier(criteria: ibas.ICriteria): void;
            protected fetchMaterial(criteria: ibas.ICriteria): void;
            protected addData(data: businesspartner.bo.Customer | businesspartner.bo.Supplier | bo.Material, bpType?: businesspartner.bo.emBusinessPartnerType): void;
            protected removeData(): void;
        }
        /** 视图-业务伙伴物料目录 */
        interface IBusinessPartnerMaterialCatalogListView extends ibas.IView {
            /** 保存数据事件 */
            saveDataEvent: Function;
            /** 检索数据事件 */
            fetchDataEvent: Function;
            /** 添加数据事件 */
            addDataEvent: Function;
            /** 移除数据事件 */
            removeDataEvent: Function;
            /** 检索客户事件 */
            fetchCustomerEvent: Function;
            /** 检索供应商事件 */
            fetchSupplierEvent: Function;
            /** 检索物料事件 */
            fetchMaterialEvent: Function;
            /** 显示数据 */
            showDatas(datas: bo.BusinessPartnerMaterialCatalog[]): void;
            /** 显示客户数据 */
            showCustomers(datas: businesspartner.bo.Customer[]): void;
            /** 显示供应商数据 */
            showSuppliers(datas: businesspartner.bo.Supplier[]): void;
            /** 显示物料数据 */
            showMaterials(datas: bo.Material[]): void;
        }
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
        /** 选择应用-业务伙伴物料目录 */
        class BusinessPartnerMaterialCatalogChooseApp extends ibas.BOChooseService<IBusinessPartnerMaterialCatalogChooseView, bo.BusinessPartnerMaterialCatalog> {
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
        /** 视图-业务伙伴物料目录 */
        interface IBusinessPartnerMaterialCatalogChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.BusinessPartnerMaterialCatalog[]): void;
        }
        /** 业务伙伴物料目录选择服务映射 */
        class BusinessPartnerMaterialCatalogChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.BusinessPartnerMaterialCatalog>;
        }
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
        /**
         * 待预留单据
         */
        class MaterialOrderedReservationTargetReportService extends ibas.ServiceApplication<ibas.IView, materials.app.IMaterialOrderedReservationTarget> {
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
        class MaterialOrderedReservationTargetReportServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /**
         * 可预留单据
         */
        class MaterialOrderedReservationSourceReportService extends ibas.ServiceApplication<ibas.IView, materials.app.IMaterialOrderedReservationTarget> {
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
        class MaterialOrderedReservationSourceReportServiceMapping extends ibas.ServiceMapping {
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
        /** 模块控制台，主数据 */
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
        /** 模块控制台，库存交易 */
        class ConsoleInventory extends Console {
            /** 构造函数 */
            constructor();
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation;
            /** 初始化 */
            protected registers(): void;
        }
        /** 模块控制台，手机端 */
        class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void;
        }
    }
}
