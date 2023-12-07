/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
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
        const BO_REPOSITORY_IMPORTEXPORT: string;
        /** 业务对象编码-数据导出模板 */
        const BO_CODE_EXPORTTEMPLATE: string;
        /** 业务对象编码-数据表格对象 */
        const BO_CODE_DATA_TABLE: string;
        enum emAreaType {
            /**
             * 页眉
             */
            PAGE_HEADER = 0,
            /**
             * 开始区
             */
            START_SECTION = 1,
            /**
             * 重复区头
             */
            REPETITION_HEADER = 2,
            /**
             * 重复区
             */
            REPETITION = 3,
            /**
             * 重复区脚
             */
            REPETITION_FOOTER = 4,
            /**
             * 结束区
             */
            END_SECTION = 5,
            /**
             * 页脚区
             */
            PAGE_FOOTER = 6,
            /**
             * 附录
             */
            APPENDIX = 7
        }
        enum emDataSourceType {
            /**
             * 文本
             */
            TEXT = 0,
            /**
             * 路径
             */
            PATH = 1,
            /**
             * 查询
             */
            QUERY = 2
        }
        enum emJustificationHorizontal {
            /**
             * 靠右
             */
            RIGHT = 0,
            /**
             * 靠左
             */
            LEFT = 1,
            /**
             * 中间
             */
            CENTER = 2
        }
        enum emJustificationVertical {
            /**
             * 靠上
             */
            TOP = 0,
            /**
             * 靠下
             */
            BOTTOM = 1,
            /**
             * 中间
             */
            CENTER = 2
        }
        enum emTextStyle {
            /**
             * 常规
             */
            REGULAR = 0,
            /**
             * 粗体
             */
            BOLD = 1,
            /**
             * 斜体
             */
            ITALIC = 2,
            /**
             * 粗斜体
             */
            BOLD_ITALIC = 3
        }
        enum emTextSegment {
            /**
             * 字段落
             */
            WORD = 0,
            /**
             * 单元格
             */
            CELL = 1
        }
        enum emLineStyle {
            /**
             * 实线
             */
            SOLID = 0,
            /**
             * 虚线
             */
            DASHED = 1,
            /**
             * 点状
             */
            DOTTED = 2,
            /**
             * 双线
             */
            DOUBLE = 3
        }
        enum emDataUpdateMethod {
            /**
             * 跳过
             */
            SKIP = 0,
            /**
             * 替换（旧数据删除）
             */
            REPLACE = 1,
            /**
             * 修改（修改旧数据）
             */
            MODIFY = 2
        }
        /** 数据导出调用者 */
        interface IDataExportCaller<T> extends ibas.IMethodCaller<T> {
            /** 导出的数据 */
            data?: object | object[];
            /** 数据查询 */
            criteria?: ibas.ICriteria;
            /** 内容类型 */
            contentType?: string;
        }
        /** 数据导出者 */
        interface IDataExporter {
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 导出 */
            export(caller: IDataExportCaller<any>): void;
        }
    }
    namespace app {
        /** 服务码-业务对象打印 */
        const SERVICE_CATEGORY_BO_PRINT: string;
        /** 服务码-数据表打印 */
        const SERVICE_CATEGORY_DATATABLE_PRINT: string;
        /** 数据打印服务契约 */
        interface IDataPrintServiceContract extends ibas.IBOServiceContract {
            /** 模板 */
            template: number | ibas.ICondition[];
            /** 业务对象 */
            businessObject?: string;
            /** 内容 */
            content?: string;
        }
        /**
         * DataTable服务代理
         */
        class DataTableServiceProxy extends ibas.DataTableServiceProxy {
        }
        /** 文件解析服务契约 */
        interface IFileParsingServiceContract extends ibas.IServiceContract {
            /** 文件 */
            file?: string | Blob;
            /** 输出类型 */
            outType: "json" | "table" | "array" | "string" | "blob";
            /**
             * 返回的页签名称
             * 默认仅第一个页签
             * 空数组时，返回全部页签
             * 指定页签的名称
             */
            sheets?: [];
        }
        /**
         * 文件解析服务代理
         */
        class FileParsingServiceProxy extends ibas.ServiceProxy<IFileParsingServiceContract> {
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace bo {
        /** ImportExport 业务仓库 */
        interface IBORepositoryImportExport extends ibas.IBORepositoryApplication {
            /**
             * 获取业务对象架构
             * @param caller 调用者
             */
            schema(caller: ISchemaMethodCaller<string>): void;
            /**
             * 导入
             * @param caller 调用者
             */
            import(caller: IImportFileCaller): void;
            /**
             * 数据导出调用者
             * @param caller 调用者
             */
            export(caller: IExportFileCaller): void;
            /**
             * 查询 获取数据导出者
             * @param fetcher 查询者
             */
            fetchDataExporter(fetcher: ibas.IFetchCaller<bo.IDataExporter>): void;
            /**
             * 查询 数据导出模板
             * @param fetcher 查询者
             */
            fetchExportTemplate(fetcher: ibas.IFetchCaller<bo.IExportTemplate>): void;
            /**
             * 保存 数据导出模板
             * @param saver 保存者
             */
            saveExportTemplate(saver: ibas.ISaveCaller<bo.IExportTemplate>): void;
        }
        /**
         * 业务对象架构相关调用者
         */
        interface ISchemaMethodCaller<P> extends ibas.IMethodCaller<P> {
            /** 业务对象编码 */
            boCode: string;
            /** 结构类型 */
            type: string;
        }
        /**
         * 文件导入调用者
         */
        interface IImportFileCaller extends ibas.IUploadFileCaller<string> {
        }
        /**
         * 文件解析调用者
         */
        interface IParseFileCaller<T> extends ibas.IUploadFileCaller<T> {
            /** 数据转换者 */
            converter: ibas.IDataConverter;
        }
        /**
         * 数据导出调用者
         */
        interface IExportFileCaller extends ibas.IMethodCaller<Blob> {
            /** 转换者 */
            transformer: string;
            /** 模板 */
            template?: string;
            /** 查询 */
            criteria?: ibas.ICriteria;
            /** 内容类型 */
            contentType?: string;
            /** 内容 */
            content?: any;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace bo {
        /** 导出模板 */
        interface IExportTemplate extends ibas.IBOSimple {
            /** 编号 */
            objectKey: number;
            /** 类型 */
            objectCode: string;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 服务系列 */
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
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 名称 */
            name: string;
            /** 已激活的 */
            activated: ibas.emYesNo;
            /** 语言 */
            language: string;
            /** 类型 */
            category: string;
            /** 关联的业务对象 */
            boCode: string;
            /** 关联的应用 */
            applicationId: string;
            /** 注释 */
            notes: string;
            /** 输出宽度 */
            width: number;
            /** 输出高度 */
            height: number;
            /** 输出像素 */
            dpi: number;
            /** 左边距 */
            marginLeft: number;
            /** 右边距 */
            marginRight: number;
            /** 上边距 */
            marginTop: number;
            /** 下边距 */
            marginBottom: number;
            /** 区域间隔 */
            marginArea: number;
            /** 页眉-左坐标 */
            pageHeaderLeft: number;
            /** 页眉-上坐标 */
            pageHeaderTop: number;
            /** 页眉-宽度 */
            pageHeaderWidth: number;
            /** 页眉-高度 */
            pageHeaderHeight: number;
            /** 开始部分-左坐标 */
            startSectionLeft: number;
            /** 开始部分-上坐标 */
            startSectionTop: number;
            /** 开始部分-宽度 */
            startSectionWidth: number;
            /** 开始部分-高度 */
            startSectionHeight: number;
            /** 重复区域头-左坐标 */
            repetitionHeaderLeft: number;
            /** 重复区域头-上坐标 */
            repetitionHeaderTop: number;
            /** 重复区域头-宽度 */
            repetitionHeaderWidth: number;
            /** 重复区域头-高度 */
            repetitionHeaderHeight: number;
            /** 重复区域-左坐标 */
            repetitionLeft: number;
            /** 重复区域-上坐标 */
            repetitionTop: number;
            /** 重复区域-宽度 */
            repetitionWidth: number;
            /** 重复区域-高度 */
            repetitionHeight: number;
            /** 重复区域脚-左坐标 */
            repetitionFooterLeft: number;
            /** 重复区域脚-上坐标 */
            repetitionFooterTop: number;
            /** 重复区域脚-宽度 */
            repetitionFooterWidth: number;
            /** 重复区域脚-高度 */
            repetitionFooterHeight: number;
            /** 结束部分-左坐标 */
            endSectionLeft: number;
            /** 结束部分-上坐标 */
            endSectionTop: number;
            /** 结束部分-宽度 */
            endSectionWidth: number;
            /** 结束部分-高度 */
            endSectionHeight: number;
            /** 页脚-左坐标 */
            pageFooterLeft: number;
            /** 页脚-上坐标 */
            pageFooterTop: number;
            /** 页脚-宽度 */
            pageFooterWidth: number;
            /** 页脚-高度 */
            pageFooterHeight: number;
            /** 导出模板-页眉 */
            pageHeaders: IExportTemplateItems;
            /** 导出模板-开始区 */
            startSections: IExportTemplateItems;
            /** 导出模板-重复区头 */
            repetitionHeaders: IExportTemplateItems;
            /** 导出模板-重复区 */
            repetitions: IExportTemplateItems;
            /** 导出模板-重复区脚 */
            repetitionFooters: IExportTemplateItems;
            /** 导出模板-结束区 */
            endSections: IExportTemplateItems;
            /** 导出模板-页脚区 */
            pageFooters: IExportTemplateItems;
            /** 导出模板-附录集合 */
            appendixs: IExportTemplateAppendixs;
        }
        /** 导出模板-项 集合 */
        interface IExportTemplateItems extends ibas.IBusinessObjects<IExportTemplateItem> {
            /** 创建并添加子项 */
            create(): IExportTemplateItem;
        }
        /** 导出模板-项 */
        interface IExportTemplateItem extends ibas.IBOSimpleLine {
            /** 编号 */
            objectKey: number;
            /** 类型 */
            objectCode: string;
            /** 行号 */
            lineId: number;
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
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
            /** 区域 */
            area: emAreaType;
            /** 项标识 */
            itemID: string;
            /** 项类型 */
            itemType: string;
            /** 项左坐标 */
            itemLeft: number;
            /** 项上坐标 */
            itemTop: number;
            /** 数据源 */
            sourceType: emDataSourceType;
            /** 项字符串 */
            itemString: string;
            /** 显示格式 */
            valueFormat: string;
            /** 项是否可见 */
            itemVisible: ibas.emYesNo;
            /** 项宽度 */
            itemWidth: number;
            /** 项高度 */
            itemHeight: number;
            /** 左边距 */
            marginLeft: number;
            /** 右边距 */
            marginRight: number;
            /** 上边距 */
            marginTop: number;
            /** 下边距 */
            marginBottom: number;
            /** 左线宽度 */
            lineLeft: number;
            /** 右线宽度 */
            lineRight: number;
            /** 上线宽度 */
            lineTop: number;
            /** 下线宽度 */
            lineBottom: number;
            /** 线框样式 */
            lineStyle: emLineStyle;
            /** 字体名称 */
            fontName: string;
            /** 字体大小 */
            fontSize: number;
            /** 文本样式 */
            textStyle: emTextStyle;
            /** 文本段落 */
            textSegment: emTextSegment;
            /** 水平对齐方式 */
            justificationHorizontal: emJustificationHorizontal;
            /** 竖直对齐方式 */
            justificationVertical: emJustificationVertical;
            /** 背景色-红 */
            backgroundRed: number;
            /** 背景色-绿 */
            backgroundGreen: number;
            /** 背景色-蓝 */
            backgroundBlue: number;
            /** 前景色-红 */
            foregroundRed: number;
            /** 前景色-绿 */
            foregroundGreen: number;
            /** 前景色-蓝 */
            foregroundBlue: number;
            /** 高亮显示色-红 */
            markerRed: number;
            /** 高亮显示色-绿 */
            markerGreen: number;
            /** 高亮显示色-蓝 */
            markerBlue: number;
            /** 框架色-红 */
            borderRed: number;
            /** 框架色-绿 */
            borderGreen: number;
            /** 框架色-蓝 */
            borderBlue: number;
        }
        /** 导出模板-附录 集合 */
        interface IExportTemplateAppendixs extends ibas.IBusinessObjects<IExportTemplateAppendix> {
            /** 创建并添加子项 */
            create(): IExportTemplateAppendix;
        }
        /** 导出模板-附录 */
        interface IExportTemplateAppendix extends ibas.IBOSimpleLine {
            /** 编号 */
            objectKey: number;
            /** 类型 */
            objectCode: string;
            /** 行号 */
            lineId: number;
            /** 数据源 */
            dataSource: string;
            /** 实例号（版本） */
            logInst: number;
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
            /** 页序号 */
            pageOrder: number;
            /** 使用页眉 */
            pageHeader: ibas.emYesNo;
            /** 使用页脚 */
            pageFooter: ibas.emYesNo;
            /** 内容-左坐标 */
            contentLeft: number;
            /** 内容-上坐标 */
            contentTop: number;
            /** 内容-宽度 */
            contentWidth: number;
            /** 内容-高度 */
            contentHeight: number;
            /** 背景色-红 */
            backgroundRed: number;
            /** 背景色-绿 */
            backgroundGreen: number;
            /** 背景色-蓝 */
            backgroundBlue: number;
            /** 背景图 */
            backgroundImage: string;
            /** 附录内容 */
            contents: IExportTemplateItems;
        }
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
declare namespace importexport {
    namespace bo {
        /** 导出模板 */
        class ExportTemplate extends ibas.BOSimple<ExportTemplate> implements IExportTemplate {
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
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
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
            /** 映射的属性名称-已激活的 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-已激活的 */
            get activated(): ibas.emYesNo;
            /** 设置-已激活的 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-语言 */
            static PROPERTY_LANGUAGE_NAME: string;
            /** 获取-语言 */
            get language(): string;
            /** 设置-语言 */
            set language(value: string);
            /** 映射的属性名称-类型 */
            static PROPERTY_CATEGORY_NAME: string;
            /** 获取-类型 */
            get category(): string;
            /** 设置-类型 */
            set category(value: string);
            /** 映射的属性名称-关联的业务对象 */
            static PROPERTY_BOCODE_NAME: string;
            /** 获取-关联的业务对象 */
            get boCode(): string;
            /** 设置-关联的业务对象 */
            set boCode(value: string);
            /** 映射的属性名称-关联的应用 */
            static PROPERTY_APPLICATIONID_NAME: string;
            /** 获取-关联的应用 */
            get applicationId(): string;
            /** 设置-关联的应用 */
            set applicationId(value: string);
            /** 映射的属性名称-注释 */
            static PROPERTY_NOTES_NAME: string;
            /** 获取-注释 */
            get notes(): string;
            /** 设置-注释 */
            set notes(value: string);
            /** 映射的属性名称-输出宽度 */
            static PROPERTY_WIDTH_NAME: string;
            /** 获取-输出宽度 */
            get width(): number;
            /** 设置-输出宽度 */
            set width(value: number);
            /** 映射的属性名称-输出高度 */
            static PROPERTY_HEIGHT_NAME: string;
            /** 获取-输出高度 */
            get height(): number;
            /** 设置-输出高度 */
            set height(value: number);
            /** 映射的属性名称-输出像素 */
            static PROPERTY_DPI_NAME: string;
            /** 获取-输出像素 */
            get dpi(): number;
            /** 设置-输出像素 */
            set dpi(value: number);
            /** 映射的属性名称-左边距 */
            static PROPERTY_MARGINLEFT_NAME: string;
            /** 获取-左边距 */
            get marginLeft(): number;
            /** 设置-左边距 */
            set marginLeft(value: number);
            /** 映射的属性名称-右边距 */
            static PROPERTY_MARGINRIGHT_NAME: string;
            /** 获取-右边距 */
            get marginRight(): number;
            /** 设置-右边距 */
            set marginRight(value: number);
            /** 映射的属性名称-上边距 */
            static PROPERTY_MARGINTOP_NAME: string;
            /** 获取-上边距 */
            get marginTop(): number;
            /** 设置-上边距 */
            set marginTop(value: number);
            /** 映射的属性名称-下边距 */
            static PROPERTY_MARGINBOTTOM_NAME: string;
            /** 获取-下边距 */
            get marginBottom(): number;
            /** 设置-下边距 */
            set marginBottom(value: number);
            /** 映射的属性名称-区域间隔 */
            static PROPERTY_MARGINAREA_NAME: string;
            /** 获取-区域间隔 */
            get marginArea(): number;
            /** 设置-区域间隔 */
            set marginArea(value: number);
            /** 映射的属性名称-页眉-左坐标 */
            static PROPERTY_PAGEHEADERLEFT_NAME: string;
            /** 获取-页眉-左坐标 */
            get pageHeaderLeft(): number;
            /** 设置-页眉-左坐标 */
            set pageHeaderLeft(value: number);
            /** 映射的属性名称-页眉-上坐标 */
            static PROPERTY_PAGEHEADERTOP_NAME: string;
            /** 获取-页眉-上坐标 */
            get pageHeaderTop(): number;
            /** 设置-页眉-上坐标 */
            set pageHeaderTop(value: number);
            /** 映射的属性名称-页眉-宽度 */
            static PROPERTY_PAGEHEADERWIDTH_NAME: string;
            /** 获取-页眉-宽度 */
            get pageHeaderWidth(): number;
            /** 设置-页眉-宽度 */
            set pageHeaderWidth(value: number);
            /** 映射的属性名称-页眉-高度 */
            static PROPERTY_PAGEHEADERHEIGHT_NAME: string;
            /** 获取-页眉-高度 */
            get pageHeaderHeight(): number;
            /** 设置-页眉-高度 */
            set pageHeaderHeight(value: number);
            /** 映射的属性名称-开始部分-左坐标 */
            static PROPERTY_STARTSECTIONLEFT_NAME: string;
            /** 获取-开始部分-左坐标 */
            get startSectionLeft(): number;
            /** 设置-开始部分-左坐标 */
            set startSectionLeft(value: number);
            /** 映射的属性名称-开始部分-上坐标 */
            static PROPERTY_STARTSECTIONTOP_NAME: string;
            /** 获取-开始部分-上坐标 */
            get startSectionTop(): number;
            /** 设置-开始部分-上坐标 */
            set startSectionTop(value: number);
            /** 映射的属性名称-开始部分-宽度 */
            static PROPERTY_STARTSECTIONWIDTH_NAME: string;
            /** 获取-开始部分-宽度 */
            get startSectionWidth(): number;
            /** 设置-开始部分-宽度 */
            set startSectionWidth(value: number);
            /** 映射的属性名称-开始部分-高度 */
            static PROPERTY_STARTSECTIONHEIGHT_NAME: string;
            /** 获取-开始部分-高度 */
            get startSectionHeight(): number;
            /** 设置-开始部分-高度 */
            set startSectionHeight(value: number);
            /** 映射的属性名称-重复区域头-左坐标 */
            static PROPERTY_REPETITIONHEADERLEFT_NAME: string;
            /** 获取-重复区域头-左坐标 */
            get repetitionHeaderLeft(): number;
            /** 设置-重复区域头-左坐标 */
            set repetitionHeaderLeft(value: number);
            /** 映射的属性名称-重复区域头-上坐标 */
            static PROPERTY_REPETITIONHEADERTOP_NAME: string;
            /** 获取-重复区域头-上坐标 */
            get repetitionHeaderTop(): number;
            /** 设置-重复区域头-上坐标 */
            set repetitionHeaderTop(value: number);
            /** 映射的属性名称-重复区域头-宽度 */
            static PROPERTY_REPETITIONHEADERWIDTH_NAME: string;
            /** 获取-重复区域头-宽度 */
            get repetitionHeaderWidth(): number;
            /** 设置-重复区域头-宽度 */
            set repetitionHeaderWidth(value: number);
            /** 映射的属性名称-重复区域头-高度 */
            static PROPERTY_REPETITIONHEADERHEIGHT_NAME: string;
            /** 获取-重复区域头-高度 */
            get repetitionHeaderHeight(): number;
            /** 设置-重复区域头-高度 */
            set repetitionHeaderHeight(value: number);
            /** 映射的属性名称-重复区域-左坐标 */
            static PROPERTY_REPETITIONLEFT_NAME: string;
            /** 获取-重复区域-左坐标 */
            get repetitionLeft(): number;
            /** 设置-重复区域-左坐标 */
            set repetitionLeft(value: number);
            /** 映射的属性名称-重复区域-上坐标 */
            static PROPERTY_REPETITIONTOP_NAME: string;
            /** 获取-重复区域-上坐标 */
            get repetitionTop(): number;
            /** 设置-重复区域-上坐标 */
            set repetitionTop(value: number);
            /** 映射的属性名称-重复区域-宽度 */
            static PROPERTY_REPETITIONWIDTH_NAME: string;
            /** 获取-重复区域-宽度 */
            get repetitionWidth(): number;
            /** 设置-重复区域-宽度 */
            set repetitionWidth(value: number);
            /** 映射的属性名称-重复区域-高度 */
            static PROPERTY_REPETITIONHEIGHT_NAME: string;
            /** 获取-重复区域-高度 */
            get repetitionHeight(): number;
            /** 设置-重复区域-高度 */
            set repetitionHeight(value: number);
            /** 映射的属性名称-重复区域脚-左坐标 */
            static PROPERTY_REPETITIONFOOTERLEFT_NAME: string;
            /** 获取-重复区域脚-左坐标 */
            get repetitionFooterLeft(): number;
            /** 设置-重复区域脚-左坐标 */
            set repetitionFooterLeft(value: number);
            /** 映射的属性名称-重复区域脚-上坐标 */
            static PROPERTY_REPETITIONFOOTERTOP_NAME: string;
            /** 获取-重复区域脚-上坐标 */
            get repetitionFooterTop(): number;
            /** 设置-重复区域脚-上坐标 */
            set repetitionFooterTop(value: number);
            /** 映射的属性名称-重复区域脚-宽度 */
            static PROPERTY_REPETITIONFOOTERWIDTH_NAME: string;
            /** 获取-重复区域脚-宽度 */
            get repetitionFooterWidth(): number;
            /** 设置-重复区域脚-宽度 */
            set repetitionFooterWidth(value: number);
            /** 映射的属性名称-重复区域脚-高度 */
            static PROPERTY_REPETITIONFOOTERHEIGHT_NAME: string;
            /** 获取-重复区域脚-高度 */
            get repetitionFooterHeight(): number;
            /** 设置-重复区域脚-高度 */
            set repetitionFooterHeight(value: number);
            /** 映射的属性名称-结束部分-左坐标 */
            static PROPERTY_ENDSECTIONLEFT_NAME: string;
            /** 获取-结束部分-左坐标 */
            get endSectionLeft(): number;
            /** 设置-结束部分-左坐标 */
            set endSectionLeft(value: number);
            /** 映射的属性名称-结束部分-上坐标 */
            static PROPERTY_ENDSECTIONTOP_NAME: string;
            /** 获取-结束部分-上坐标 */
            get endSectionTop(): number;
            /** 设置-结束部分-上坐标 */
            set endSectionTop(value: number);
            /** 映射的属性名称-结束部分-宽度 */
            static PROPERTY_ENDSECTIONWIDTH_NAME: string;
            /** 获取-结束部分-宽度 */
            get endSectionWidth(): number;
            /** 设置-结束部分-宽度 */
            set endSectionWidth(value: number);
            /** 映射的属性名称-结束部分-高度 */
            static PROPERTY_ENDSECTIONHEIGHT_NAME: string;
            /** 获取-结束部分-高度 */
            get endSectionHeight(): number;
            /** 设置-结束部分-高度 */
            set endSectionHeight(value: number);
            /** 映射的属性名称-页脚-左坐标 */
            static PROPERTY_PAGEFOOTERLEFT_NAME: string;
            /** 获取-页脚-左坐标 */
            get pageFooterLeft(): number;
            /** 设置-页脚-左坐标 */
            set pageFooterLeft(value: number);
            /** 映射的属性名称-页脚-上坐标 */
            static PROPERTY_PAGEFOOTERTOP_NAME: string;
            /** 获取-页脚-上坐标 */
            get pageFooterTop(): number;
            /** 设置-页脚-上坐标 */
            set pageFooterTop(value: number);
            /** 映射的属性名称-页脚-宽度 */
            static PROPERTY_PAGEFOOTERWIDTH_NAME: string;
            /** 获取-页脚-宽度 */
            get pageFooterWidth(): number;
            /** 设置-页脚-宽度 */
            set pageFooterWidth(value: number);
            /** 映射的属性名称-页脚-高度 */
            static PROPERTY_PAGEFOOTERHEIGHT_NAME: string;
            /** 获取-页脚-高度 */
            get pageFooterHeight(): number;
            /** 设置-页脚-高度 */
            set pageFooterHeight(value: number);
            /** 映射的属性名称-导出模板-页眉 */
            static PROPERTY_PAGEHEADERS_NAME: string;
            /** 获取-导出模板-页眉 */
            get pageHeaders(): ExportTemplateItems;
            /** 设置-导出模板-页眉 */
            set pageHeaders(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-开始区 */
            static PROPERTY_STARTSECTIONS_NAME: string;
            /** 获取-导出模板-开始区 */
            get startSections(): ExportTemplateItems;
            /** 设置-导出模板-开始区 */
            set startSections(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-重复区头 */
            static PROPERTY_REPETITIONHEADERS_NAME: string;
            /** 获取-导出模板-重复区头 */
            get repetitionHeaders(): ExportTemplateItems;
            /** 设置-导出模板-重复区头 */
            set repetitionHeaders(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-重复区 */
            static PROPERTY_REPETITIONS_NAME: string;
            /** 获取-导出模板-重复区 */
            get repetitions(): ExportTemplateItems;
            /** 设置-导出模板-重复区 */
            set repetitions(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-重复区脚 */
            static PROPERTY_REPETITIONFOOTERS_NAME: string;
            /** 获取-导出模板-重复区脚 */
            get repetitionFooters(): ExportTemplateItems;
            /** 设置-导出模板-重复区脚 */
            set repetitionFooters(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-结束区 */
            static PROPERTY_ENDSECTIONS_NAME: string;
            /** 获取-导出模板-结束区 */
            get endSections(): ExportTemplateItems;
            /** 设置-导出模板-结束区 */
            set endSections(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-页脚区 */
            static PROPERTY_PAGEFOOTERS_NAME: string;
            /** 获取-导出模板-页脚区 */
            get pageFooters(): ExportTemplateItems;
            /** 设置-导出模板-页脚区 */
            set pageFooters(value: ExportTemplateItems);
            /** 映射的属性名称-导出模板-附录集合 */
            static PROPERTY_APPENDIXS_NAME: string;
            /** 获取-导出模板-附录集合 */
            get appendixs(): ExportTemplateAppendixs;
            /** 设置-导出模板-附录集合 */
            set appendixs(value: ExportTemplateAppendixs);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 导出模板-项 集合 */
        class ExportTemplateItems extends ibas.BusinessObjects<ExportTemplateItem, ExportTemplate | ExportTemplateAppendix> implements IExportTemplateItems {
            constructor(parent: ExportTemplate | ExportTemplateAppendix, areaType: emAreaType);
            private areaType;
            /** 创建并添加子项 */
            create(): ExportTemplateItem;
            protected afterAdd(item: ExportTemplateItem): void;
        }
        /** 导出模板-项 */
        class ExportTemplateItem extends ibas.BOSimpleLine<ExportTemplateItem> implements IExportTemplateItem {
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
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
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
            /** 映射的属性名称-区域 */
            static PROPERTY_AREA_NAME: string;
            /** 获取-区域 */
            get area(): emAreaType;
            /** 设置-区域 */
            set area(value: emAreaType);
            /** 映射的属性名称-项标识 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项标识 */
            get itemID(): string;
            /** 设置-项标识 */
            set itemID(value: string);
            /** 映射的属性名称-项类型 */
            static PROPERTY_ITEMTYPE_NAME: string;
            /** 获取-项类型 */
            get itemType(): string;
            /** 设置-项类型 */
            set itemType(value: string);
            /** 映射的属性名称-项左坐标 */
            static PROPERTY_ITEMLEFT_NAME: string;
            /** 获取-项左坐标 */
            get itemLeft(): number;
            /** 设置-项左坐标 */
            set itemLeft(value: number);
            /** 映射的属性名称-项上坐标 */
            static PROPERTY_ITEMTOP_NAME: string;
            /** 获取-项上坐标 */
            get itemTop(): number;
            /** 设置-项上坐标 */
            set itemTop(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_SOURCETYPE_NAME: string;
            /** 获取-数据源 */
            get sourceType(): emDataSourceType;
            /** 设置-数据源 */
            set sourceType(value: emDataSourceType);
            /** 映射的属性名称-项字符串 */
            static PROPERTY_ITEMSTRING_NAME: string;
            /** 获取-项字符串 */
            get itemString(): string;
            /** 设置-项字符串 */
            set itemString(value: string);
            /** 映射的属性名称-显示格式 */
            static PROPERTY_VALUEFORMAT_NAME: string;
            /** 获取-显示格式 */
            get valueFormat(): string;
            /** 设置-显示格式 */
            set valueFormat(value: string);
            /** 映射的属性名称-项是否可见 */
            static PROPERTY_ITEMVISIBLE_NAME: string;
            /** 获取-项是否可见 */
            get itemVisible(): ibas.emYesNo;
            /** 设置-项是否可见 */
            set itemVisible(value: ibas.emYesNo);
            /** 映射的属性名称-项宽度 */
            static PROPERTY_ITEMWIDTH_NAME: string;
            /** 获取-项宽度 */
            get itemWidth(): number;
            /** 设置-项宽度 */
            set itemWidth(value: number);
            /** 映射的属性名称-项高度 */
            static PROPERTY_ITEMHEIGHT_NAME: string;
            /** 获取-项高度 */
            get itemHeight(): number;
            /** 设置-项高度 */
            set itemHeight(value: number);
            /** 映射的属性名称-左边距 */
            static PROPERTY_MARGINLEFT_NAME: string;
            /** 获取-左边距 */
            get marginLeft(): number;
            /** 设置-左边距 */
            set marginLeft(value: number);
            /** 映射的属性名称-右边距 */
            static PROPERTY_MARGINRIGHT_NAME: string;
            /** 获取-右边距 */
            get marginRight(): number;
            /** 设置-右边距 */
            set marginRight(value: number);
            /** 映射的属性名称-上边距 */
            static PROPERTY_MARGINTOP_NAME: string;
            /** 获取-上边距 */
            get marginTop(): number;
            /** 设置-上边距 */
            set marginTop(value: number);
            /** 映射的属性名称-下边距 */
            static PROPERTY_MARGINBOTTOM_NAME: string;
            /** 获取-下边距 */
            get marginBottom(): number;
            /** 设置-下边距 */
            set marginBottom(value: number);
            /** 映射的属性名称-左线宽度 */
            static PROPERTY_LINELEFT_NAME: string;
            /** 获取-左线宽度 */
            get lineLeft(): number;
            /** 设置-左线宽度 */
            set lineLeft(value: number);
            /** 映射的属性名称-右线宽度 */
            static PROPERTY_LINERIGHT_NAME: string;
            /** 获取-右线宽度 */
            get lineRight(): number;
            /** 设置-右线宽度 */
            set lineRight(value: number);
            /** 映射的属性名称-上线宽度 */
            static PROPERTY_LINETOP_NAME: string;
            /** 获取-上线宽度 */
            get lineTop(): number;
            /** 设置-上线宽度 */
            set lineTop(value: number);
            /** 映射的属性名称-下线宽度 */
            static PROPERTY_LINEBOTTOM_NAME: string;
            /** 获取-下线宽度 */
            get lineBottom(): number;
            /** 设置-下线宽度 */
            set lineBottom(value: number);
            /** 映射的属性名称-线框样式 */
            static PROPERTY_LINESTYLE_NAME: string;
            /** 获取-线框样式 */
            get lineStyle(): emLineStyle;
            /** 设置-线框样式 */
            set lineStyle(value: emLineStyle);
            /** 映射的属性名称-字体名称 */
            static PROPERTY_FONTNAME_NAME: string;
            /** 获取-字体名称 */
            get fontName(): string;
            /** 设置-字体名称 */
            set fontName(value: string);
            /** 映射的属性名称-字体大小 */
            static PROPERTY_FONTSIZE_NAME: string;
            /** 获取-字体大小 */
            get fontSize(): number;
            /** 设置-字体大小 */
            set fontSize(value: number);
            /** 映射的属性名称-文本样式 */
            static PROPERTY_TEXTSTYLE_NAME: string;
            /** 获取-文本样式 */
            get textStyle(): emTextStyle;
            /** 设置-文本样式 */
            set textStyle(value: emTextStyle);
            /** 映射的属性名称-文本段落 */
            static PROPERTY_TEXTSEGMENT_NAME: string;
            /** 获取-文本段落 */
            get textSegment(): emTextSegment;
            /** 设置-文本段落 */
            set textSegment(value: emTextSegment);
            /** 映射的属性名称-水平对齐方式 */
            static PROPERTY_JUSTIFICATIONHORIZONTAL_NAME: string;
            /** 获取-水平对齐方式 */
            get justificationHorizontal(): emJustificationHorizontal;
            /** 设置-水平对齐方式 */
            set justificationHorizontal(value: emJustificationHorizontal);
            /** 映射的属性名称-竖直对齐方式 */
            static PROPERTY_JUSTIFICATIONVERTICAL_NAME: string;
            /** 获取-竖直对齐方式 */
            get justificationVertical(): emJustificationVertical;
            /** 设置-竖直对齐方式 */
            set justificationVertical(value: emJustificationVertical);
            /** 映射的属性名称-背景色-红 */
            static PROPERTY_BACKGROUNDRED_NAME: string;
            /** 获取-背景色-红 */
            get backgroundRed(): number;
            /** 设置-背景色-红 */
            set backgroundRed(value: number);
            /** 映射的属性名称-背景色-绿 */
            static PROPERTY_BACKGROUNDGREEN_NAME: string;
            /** 获取-背景色-绿 */
            get backgroundGreen(): number;
            /** 设置-背景色-绿 */
            set backgroundGreen(value: number);
            /** 映射的属性名称-背景色-蓝 */
            static PROPERTY_BACKGROUNDBLUE_NAME: string;
            /** 获取-背景色-蓝 */
            get backgroundBlue(): number;
            /** 设置-背景色-蓝 */
            set backgroundBlue(value: number);
            /** 映射的属性名称-前景色-红 */
            static PROPERTY_FOREGROUNDRED_NAME: string;
            /** 获取-前景色-红 */
            get foregroundRed(): number;
            /** 设置-前景色-红 */
            set foregroundRed(value: number);
            /** 映射的属性名称-前景色-绿 */
            static PROPERTY_FOREGROUNDGREEN_NAME: string;
            /** 获取-前景色-绿 */
            get foregroundGreen(): number;
            /** 设置-前景色-绿 */
            set foregroundGreen(value: number);
            /** 映射的属性名称-前景色-蓝 */
            static PROPERTY_FOREGROUNDBLUE_NAME: string;
            /** 获取-前景色-蓝 */
            get foregroundBlue(): number;
            /** 设置-前景色-蓝 */
            set foregroundBlue(value: number);
            /** 映射的属性名称-高亮显示色-红 */
            static PROPERTY_MARKERRED_NAME: string;
            /** 获取-高亮显示色-红 */
            get markerRed(): number;
            /** 设置-高亮显示色-红 */
            set markerRed(value: number);
            /** 映射的属性名称-高亮显示色-绿 */
            static PROPERTY_MARKERGREEN_NAME: string;
            /** 获取-高亮显示色-绿 */
            get markerGreen(): number;
            /** 设置-高亮显示色-绿 */
            set markerGreen(value: number);
            /** 映射的属性名称-高亮显示色-蓝 */
            static PROPERTY_MARKERBLUE_NAME: string;
            /** 获取-高亮显示色-蓝 */
            get markerBlue(): number;
            /** 设置-高亮显示色-蓝 */
            set markerBlue(value: number);
            /** 映射的属性名称-框架色-红 */
            static PROPERTY_BORDERRED_NAME: string;
            /** 获取-框架色-红 */
            get borderRed(): number;
            /** 设置-框架色-红 */
            set borderRed(value: number);
            /** 映射的属性名称-框架色-绿 */
            static PROPERTY_BORDERGREEN_NAME: string;
            /** 获取-框架色-绿 */
            get borderGreen(): number;
            /** 设置-框架色-绿 */
            set borderGreen(value: number);
            /** 映射的属性名称-框架色-蓝 */
            static PROPERTY_BORDERBLUE_NAME: string;
            /** 获取-框架色-蓝 */
            get borderBlue(): number;
            /** 设置-框架色-蓝 */
            set borderBlue(value: number);
            /** 初始化数据 */
            protected init(): void;
        }
        /** 导出模板-附录 集合 */
        class ExportTemplateAppendixs extends ibas.BusinessObjects<ExportTemplateAppendix, ExportTemplate> implements IExportTemplateAppendixs {
            constructor(parent: ExportTemplate);
            /** 创建并添加子项 */
            create(): ExportTemplateAppendix;
            protected afterAdd(item: ExportTemplateAppendix): void;
        }
        /** 导出模板-附录 */
        class ExportTemplateAppendix extends ibas.BOSimpleLine<ExportTemplateAppendix> implements IExportTemplateAppendix {
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
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
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
            /** 映射的属性名称-页序号 */
            static PROPERTY_PAGEORDER_NAME: string;
            /** 获取-页序号 */
            get pageOrder(): number;
            /** 设置-页序号 */
            set pageOrder(value: number);
            /** 映射的属性名称-使用页眉 */
            static PROPERTY_PAGEHEADER_NAME: string;
            /** 获取-使用页眉 */
            get pageHeader(): ibas.emYesNo;
            /** 设置-使用页眉 */
            set pageHeader(value: ibas.emYesNo);
            /** 映射的属性名称-使用页脚 */
            static PROPERTY_PAGEFOOTER_NAME: string;
            /** 获取-使用页脚 */
            get pageFooter(): ibas.emYesNo;
            /** 设置-使用页脚 */
            set pageFooter(value: ibas.emYesNo);
            /** 映射的属性名称-内容-左坐标 */
            static PROPERTY_CONTENTLEFT_NAME: string;
            /** 获取-内容-左坐标 */
            get contentLeft(): number;
            /** 设置-内容-左坐标 */
            set contentLeft(value: number);
            /** 映射的属性名称-内容-上坐标 */
            static PROPERTY_CONTENTTOP_NAME: string;
            /** 获取-内容-上坐标 */
            get contentTop(): number;
            /** 设置-内容-上坐标 */
            set contentTop(value: number);
            /** 映射的属性名称-内容-宽度 */
            static PROPERTY_CONTENTWIDTH_NAME: string;
            /** 获取-内容-宽度 */
            get contentWidth(): number;
            /** 设置-内容-宽度 */
            set contentWidth(value: number);
            /** 映射的属性名称-内容-高度 */
            static PROPERTY_CONTENTHEIGHT_NAME: string;
            /** 获取-内容-高度 */
            get contentHeight(): number;
            /** 设置-内容-高度 */
            set contentHeight(value: number);
            /** 映射的属性名称-背景色-红 */
            static PROPERTY_BACKGROUNDRED_NAME: string;
            /** 获取-背景色-红 */
            get backgroundRed(): number;
            /** 设置-背景色-红 */
            set backgroundRed(value: number);
            /** 映射的属性名称-背景色-绿 */
            static PROPERTY_BACKGROUNDGREEN_NAME: string;
            /** 获取-背景色-绿 */
            get backgroundGreen(): number;
            /** 设置-背景色-绿 */
            set backgroundGreen(value: number);
            /** 映射的属性名称-背景色-蓝 */
            static PROPERTY_BACKGROUNDBLUE_NAME: string;
            /** 获取-背景色-蓝 */
            get backgroundBlue(): number;
            /** 设置-背景色-蓝 */
            set backgroundBlue(value: number);
            /** 映射的属性名称-背景图 */
            static PROPERTY_BACKGROUNDIMAGE_NAME: string;
            /** 获取-背景图 */
            get backgroundImage(): string;
            /** 设置-背景图 */
            set backgroundImage(value: string);
            /** 映射的属性名称-附录内容 */
            static PROPERTY_CONTENTS_NAME: string;
            /** 获取-附录内容 */
            get contents(): ExportTemplateItems;
            /** 设置-附录内容 */
            set contents(value: ExportTemplateItems);
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
declare namespace importexport {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /**
             * 解析业务对象数据
             * @param data 目标类型
             * @param sign 特殊标记
             * @returns 本地类型
             */
            parsing(data: any, sign: string): any;
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
        }
        /** 数据导出信息 */
        interface IDataExportInfo {
            /** 转换者 */
            Transformer: string;
            /** 模板 */
            Template: string;
            /** 描述 */
            Description: string;
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
declare namespace importexport {
    namespace bo {
        /** 数据导出者 */
        abstract class DataExporter<T extends IDataExportResult> implements bo.IDataExporter {
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 导出 */
            abstract export(caller: bo.IDataExportCaller<T>): void;
        }
        /** 数据导出结果 */
        interface IDataExportResult {
            /** 内容 */
            content: any;
        }
        /** 数据导出结果 */
        abstract class DataExportResult<T> implements IDataExportResult {
            /** 内容 */
            content: T;
        }
        /** 数据导出结果-文件 */
        class DataExportResultBlob extends DataExportResult<Blob> {
            constructor(contect: Blob);
            /** 名称 */
            fileName: string;
        }
        /** 数据导出结果-文件 */
        class DataExportResultString extends DataExportResult<string> {
            constructor();
            constructor(name: string, contect: string);
            /** 文件名称 */
            fileName: string;
        }
        /** 数据导出者-json */
        class DataExporterJson extends DataExporter<DataExportResultString> {
            static MODE_SIGN: string;
            constructor();
            /** 导出 */
            export(caller: bo.IDataExportCaller<DataExportResultString>): void;
        }
        /** 数据导出者-服务 */
        class DataExporterService extends DataExporter<IDataExportResult> {
            constructor();
            /** 模板 */
            template: string;
            /** 导出 */
            export(caller: bo.IDataExportCaller<IDataExportResult>): void;
        }
        /** 数据表导出者-json */
        class DataTableExporterJson extends DataExporter<DataExportResultString> {
            static MODE_SIGN: string;
            constructor();
            /** 导出 */
            export(caller: bo.IDataExportCaller<DataExportResultString>): void;
        }
        /** 数据表导出者-Excel */
        abstract class DataTableExporterSheetJS extends DataExporter<DataExportResultBlob> {
            static MODE_SIGN: string;
            constructor();
            export(caller: IDataExportCaller<DataExportResultBlob>): void;
            protected abstract writingOptions(): any;
        }
        /** 数据表导出者-csv */
        class DataTableExporterCSV extends DataTableExporterSheetJS {
            static MODE_SIGN: string;
            constructor();
            protected writingOptions(): any;
        }
        /** 数据表导出者-Excel */
        class DataTableExporterXLSX extends DataTableExporterSheetJS {
            static MODE_SIGN: string;
            constructor();
            protected writingOptions(): any;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace bo {
        /** 数据导入&导出 业务仓库 */
        class BORepositoryImportExport extends ibas.BORepositoryApplication implements IBORepositoryImportExport {
            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter;
            /**
             * 导入
             * @param caller 调用者
             */
            import(caller: IImportFileCaller): void;
            /**
             * 导出
             * @param caller 调用者
             */
            export(caller: IExportFileCaller): void;
            /**
             * 解析
             * @param caller 调用者
             */
            parse<T>(caller: IParseFileCaller<T>): void;
            /**
             * 获取业务对象架构
             * @param caller 调用者
             */
            schema(caller: ISchemaMethodCaller<string>): void;
            /**
             * 查询 获取数据导出者
             * @param fetcher 查询者
             */
            fetchDataExporter(fetcher: ibas.IFetchCaller<bo.IDataExporter>): void;
            /**
             * 查询 数据导出模板
             * @param fetcher 查询者
             */
            fetchExportTemplate(fetcher: ibas.IFetchCaller<bo.ExportTemplate>): void;
            /**
             * 保存 数据导出模板
             * @param saver 保存者
             */
            saveExportTemplate(saver: ibas.ISaveCaller<bo.ExportTemplate>): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
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
declare namespace importexport {
    namespace app {
        /** 数据导出 */
        class DataExportApp extends ibas.Application<IDataExportView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            private criteria;
            /** 获取Schema */
            schema(type: string): void;
            /** 导出 */
            export(exporter: bo.IDataExporter): void;
            /** 选择业务对象事件 */
            private chooseBusinessObject;
            private addQueryCondition;
            private removeQueryCondition;
        }
        /** 数据导出-视图 */
        interface IDataExportView extends ibas.IView {
            /** 获取Schema，参数1，类型（xml,json） */
            schemaEvent: Function;
            /** 显示查询 */
            showCriteria(criteria: ibas.ICriteria): void;
            /** 显示数据导出者 */
            showExporters(exporters: bo.IDataExporter[]): void;
            /** 显示结果 */
            showResluts(results: bo.IDataExportResult[]): void;
            /** 选择业务对象 */
            chooseBusinessObjectEvent: Function;
            /** 导出 */
            exportEvent: Function;
            /** 添加条件 */
            addConditionEvent: Function;
            /** 移出条件 */
            removeConditionEvent: Function;
            /** 显示结果 */
            showConditions(conditions: ibas.ICondition[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace app {
        class DataExportFunc extends ibas.ModuleFunction {
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
declare namespace importexport {
    namespace app {
        /** 数据导出服务 */
        class DataExportService extends ibas.ServiceApplication<IDataExportServiceView, ibas.IBOServiceContract> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 运行服务 */
            runService(contract: ibas.IBOServiceContract): void;
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 导出的数据 */
            private exportDatas;
            /** 导出数据，参数1：使用的方式 */
            private exportData;
        }
        /** 数据导出服务-视图 */
        interface IDataExportServiceView extends ibas.IView {
            /** 显示数据导出者 */
            showExporters(exporters: bo.IDataExporter[]): void;
            /** 导出数据，参数1：使用的方式 */
            exportDataEvent: Function;
            /** 显示结果 */
            showResluts(results: bo.IDataExportResult[]): void;
        }
        /** 数据导出服务映射 */
        class DataExportServiceMapping extends ibas.ServiceMapping {
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 数据表导出服务 */
        class DataTableExportService extends ibas.ServiceApplication<IDataExportServiceView, ibas.IDataTableServiceContract> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行服务 */
            runService(contract: ibas.IDataTableServiceContract): void;
            /** 导出的数据 */
            private exportDataTable;
            /** 导出数据，参数1：使用的方式 */
            private exportData;
        }
        /** 数据表导出服务映射 */
        class DataTableExportServiceMapping extends ibas.ServiceMapping {
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
declare namespace importexport {
    namespace app {
        /** 应用-审批流程 */
        class ViewExportApp extends ibas.ResidentApplication<IViewExportView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            private export;
        }
        /** 视图-审批流程 */
        interface IViewExportView extends ibas.IResidentView {
            exportEvent: Function;
            /** 显示表格 */
            showTables(): void;
        }
        class ViewExportApplicationMapping extends ibas.ResidentApplicationMapping {
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
declare namespace importexport {
    namespace app {
        class ExportTemplateFunc extends ibas.ModuleFunction {
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
declare namespace importexport {
    namespace app {
        /** 列表应用-导出模板 */
        class ExportTemplateListApp extends ibas.BOListApplication<IExportTemplateListView, bo.ExportTemplate> {
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
            protected viewData(data: bo.ExportTemplate): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.ExportTemplate): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.ExportTemplate | bo.ExportTemplate[]): void;
        }
        /** 视图-导出模板 */
        interface IExportTemplateListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.ExportTemplate[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace app {
        /** 选择应用-导出模板 */
        class ExportTemplateChooseApp extends ibas.BOChooseService<IExportTemplateChooseView, bo.ExportTemplate> {
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
        /** 视图-导出模板 */
        interface IExportTemplateChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.ExportTemplate[]): void;
        }
        /** 导出模板选择服务映射 */
        class ExportTemplateChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.ExportTemplate>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace app {
        /** 编辑应用-导出模板 */
        class ExportTemplateEditApp extends ibas.BOEditApplication<IExportTemplateEditView, bo.ExportTemplate> {
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
            run(data: bo.ExportTemplate): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加导出模板-项事件 */
            protected addPageHeader(): void;
            /** 删除导出模板-项事件 */
            protected removePageHeader(items: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            protected addStartSection(): void;
            /** 删除导出模板-项事件 */
            protected removeStartSection(items: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            protected addRepetitionHeader(): void;
            /** 删除导出模板-项事件 */
            protected removeRepetitionHeader(items: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            protected addRepetition(): void;
            /** 删除导出模板-项事件 */
            protected removeRepetition(items: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            protected addRepetitionFooter(): void;
            /** 删除导出模板-项事件 */
            protected removeRepetitionFooter(items: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            protected addEndSection(): void;
            /** 删除导出模板-项事件 */
            protected removeEndSection(items: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            protected addPageFooter(): void;
            /** 删除导出模板-项事件 */
            protected removePageFooter(items: bo.ExportTemplateItem[]): void;
            /** 选择业务对象事件 */
            private chooseBusinessObject;
            /** 添加导出模板-项事件 */
            addAppendix(): void;
            /** 删除导出模板-项事件 */
            removeAppendix(items: bo.ExportTemplateAppendix[]): void;
        }
        /** 视图-导出模板 */
        interface IExportTemplateEditView extends ibas.IBOEditView {
            /** 选择业务对象 */
            chooseBusinessObjectEvent: Function;
            /** 显示数据 */
            showExportTemplate(data: bo.ExportTemplate): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加导出模板-项事件 */
            addPageHeaderEvent: Function;
            /** 删除导出模板-项事件 */
            removePageHeaderEvent: Function;
            /** 显示数据-页眉 */
            showPageHeaders(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addStartSectionEvent: Function;
            /** 删除导出模板-项事件 */
            removeStartSectionEvent: Function;
            /** 显示数据-开始区域 */
            showStartSections(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addRepetitionHeaderEvent: Function;
            /** 删除导出模板-项事件 */
            removeRepetitionHeaderEvent: Function;
            /** 显示数据-重复区头 */
            showRepetitionHeaders(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addRepetitionEvent: Function;
            /** 删除导出模板-项事件 */
            removeRepetitionEvent: Function;
            /** 显示数据-重复区 */
            showRepetitions(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addRepetitionFooterEvent: Function;
            /** 删除导出模板-项事件 */
            removeRepetitionFooterEvent: Function;
            /** 显示数据-重复区脚 */
            showRepetitionFooters(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addEndSectionEvent: Function;
            /** 删除导出模板-项事件 */
            removeEndSectionEvent: Function;
            /** 显示数据-结束区域 */
            showEndSections(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addPageFooterEvent: Function;
            /** 删除导出模板-项事件 */
            removePageFooterEvent: Function;
            /** 显示数据-页脚 */
            showPageFooters(datas: bo.ExportTemplateItem[]): void;
            /** 添加导出模板-项事件 */
            addAppendixEvent: Function;
            /** 删除导出模板-项事件 */
            removeAppendixEvent: Function;
            /** 显示数据-附录 */
            showAppendixes(datas: bo.ExportTemplateAppendix[]): void;
        }
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
declare namespace importexport {
    namespace app {
        class FileItem extends ibas.Bindable {
            constructor(file: File);
            get status(): "pending" | "processing" | "completed" | "failed";
            set status(value: "pending" | "processing" | "completed" | "failed");
            get file(): File;
            /** 顺序 */
            order: number;
            /** 识别的数据 */
            identified: number;
            /** 保存的数据 */
            saved: number;
            /** 解析错误 */
            error: Error;
        }
        class FileItems extends ibas.ArrayList<FileItem> {
            add(item: FileItem): void;
            add(items: FileItem[]): void;
            protected afterAdd(item: FileItem): void;
        }
        /** 数据导入 */
        class DataImportApp extends ibas.Application<IDataImportView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            private files;
            /** 导入 */
            protected import(method?: bo.emDataUpdateMethod): void;
            /** 选择文件 */
            protected addFiles(): void;
            /** 移除文件 */
            protected removeFiles(file?: FileItem | FileItem[]): void;
        }
        /** 数据导入-视图 */
        interface IDataImportView extends ibas.IView {
            /** 导入 */
            importEvent: Function;
            /** 选择文件 */
            addFilesEvent: Function;
            /** 移除文件 */
            removeFilesEvent: Function;
            /** 显示文件 */
            showFiles(datas: FileItem[]): void;
            /** 显示结果 */
            showResults(file: FileItem, results: string[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace app {
        class DataImportFunc extends ibas.ModuleFunction {
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
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace importexport {
    namespace app {
        /** 数据打印 */
        abstract class AbstractDataPrintService<T extends ibas.IServiceContract> extends ibas.ServiceApplication<IDataPrintView, T> {
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected printData: any[];
            /** 预览 */
            private preview;
            /** 打印 */
            private print;
        }
        /** 数据打印-视图 */
        interface IDataPrintView extends ibas.IView {
            /** 打印 */
            printEvent: Function;
            /** 预览 */
            previewEvent: Function;
            /** 显示数据导出者 */
            showExporters(exporters: bo.IDataExporter[]): void;
            /** 显示内容 */
            showContent(content: Blob, width: string, height: string): void;
        }
        /** 数据打印 */
        class DataPrintService extends AbstractDataPrintService<IDataPrintServiceContract> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 运行服务 */
            runService(contract: IDataPrintServiceContract): void;
        }
        /** 数据打印映射 */
        class DataPrintServiceMapping extends ibas.ServiceMapping {
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 数据表格打印 */
        class DataTablePrintService extends AbstractDataPrintService<ibas.IDataTableServiceContract> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 运行服务 */
            runService(contract: ibas.IDataTableServiceContract): void;
        }
        /** 数据表格打印映射 */
        class DataTablePrintServiceMapping extends ibas.ServiceMapping {
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
declare namespace importexport {
    namespace app {
        /** 文件解析服务 */
        class FileParsingService extends ibas.ServiceWithResultApplication<IFileParsingServiceView, IFileParsingServiceContract, any> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            constructor();
            /** 运行服务 */
            runService(contract: IFileParsingServiceContract): void;
            /** 注册视图 */
            protected registerView(): void;
            private outType;
            private sheets;
            /** 视图显示后 */
            protected viewShowed(): void;
            protected parsing(file: Blob): void;
        }
        /** 文件解析服务-视图 */
        interface IFileParsingServiceView extends ibas.IView {
            /** 显示文件对话框 */
            showFileDialog(extensions: string): void;
            /** 解析 */
            parsingEvent: Function;
        }
        /** 文件解析服务映射 */
        class FileParsingServiceMapping extends ibas.ServiceMapping {
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
declare namespace importexport {
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
