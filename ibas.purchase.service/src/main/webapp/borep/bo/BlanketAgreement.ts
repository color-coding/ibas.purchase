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
        export class BlanketAgreement extends ibas.BODocument<BlanketAgreement> implements IBlanketAgreement {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_BLANKETAGREEMENT;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-凭证编号 */
            get docEntry(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-凭证编号 */
            set docEntry(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string = "DocNum";
            /** 获取-期间编号 */
            get docNum(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_DOCNUM_NAME);
            }
            /** 设置-期间编号 */
            set docNum(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_DOCNUM_NAME, value);
            }

            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string = "Period";
            /** 获取-期间 */
            get period(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_PERIOD_NAME);
            }
            /** 设置-期间 */
            set period(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_PERIOD_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BlanketAgreement.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(BlanketAgreement.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(BlanketAgreement.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(BlanketAgreement.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(BlanketAgreement.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(BlanketAgreement.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(BlanketAgreement.PROPERTY_DOCUMENTSTATUS_NAME);
            }
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus) {
                this.setProperty(BlanketAgreement.PROPERTY_DOCUMENTSTATUS_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string = "TeamMembers";
            /** 获取-团队成员 */
            get teamMembers(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_TEAMMEMBERS_NAME);
            }
            /** 设置-团队成员 */
            set teamMembers(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_TEAMMEMBERS_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string = "PostingDate";
            /** 获取-过账日期 */
            get postingDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_POSTINGDATE_NAME);
            }
            /** 设置-过账日期 */
            set postingDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_POSTINGDATE_NAME, value);
            }

            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
            /** 获取-到期日 */
            get deliveryDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_DELIVERYDATE_NAME);
            }
            /** 设置-到期日 */
            set deliveryDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_DELIVERYDATE_NAME, value);
            }

            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string = "DocumentDate";
            /** 获取-凭证日期 */
            get documentDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_DOCUMENTDATE_NAME);
            }
            /** 设置-凭证日期 */
            set documentDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_DOCUMENTDATE_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_REMARKS_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BlanketAgreement.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(BlanketAgreement.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BlanketAgreement.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(BlanketAgreement.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string = "SupplierCode";
            /** 获取-供应商代码 */
            get supplierCode(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_SUPPLIERCODE_NAME);
            }
            /** 设置-供应商代码 */
            set supplierCode(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_SUPPLIERCODE_NAME, value);
            }

            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string = "SupplierName";
            /** 获取-供应商名称 */
            get supplierName(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_SUPPLIERNAME_NAME);
            }
            /** 设置-供应商名称 */
            set supplierName(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_SUPPLIERNAME_NAME, value);
            }

            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string = "ContactPerson";
            /** 获取-联系人 */
            get contactPerson(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_CONTACTPERSON_NAME);
            }
            /** 设置-联系人 */
            set contactPerson(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_CONTACTPERSON_NAME, value);
            }

            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string = "PaymentCode";
            /** 获取-付款条款代码 */
            get paymentCode(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_PAYMENTCODE_NAME);
            }
            /** 设置-付款条款代码 */
            set paymentCode(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_PAYMENTCODE_NAME, value);
            }

            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string = "Project";
            /** 获取-项目代码 */
            get project(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_PROJECT_NAME);
            }
            /** 设置-项目代码 */
            set project(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_PROJECT_NAME, value);
            }

            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string = "OrderType";
            /** 获取-单据类型 */
            get orderType(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_ORDERTYPE_NAME);
            }
            /** 设置-单据类型 */
            set orderType(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_ORDERTYPE_NAME, value);
            }

            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string = "Description";
            /** 获取-描述 */
            get description(): string {
                return this.getProperty<string>(BlanketAgreement.PROPERTY_DESCRIPTION_NAME);
            }
            /** 设置-描述 */
            set description(value: string) {
                this.setProperty(BlanketAgreement.PROPERTY_DESCRIPTION_NAME, value);
            }

            /** 映射的属性名称-开始日期 */
            static PROPERTY_STARTDATE_NAME: string = "StartDate";
            /** 获取-开始日期 */
            get startDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_STARTDATE_NAME);
            }
            /** 设置-开始日期 */
            set startDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_STARTDATE_NAME, value);
            }

            /** 映射的属性名称-结束日期 */
            static PROPERTY_ENDDATE_NAME: string = "EndDate";
            /** 获取-结束日期 */
            get endDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_ENDDATE_NAME);
            }
            /** 设置-结束日期 */
            set endDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_ENDDATE_NAME, value);
            }

            /** 映射的属性名称-签署日期 */
            static PROPERTY_SIGNDATE_NAME: string = "SignDate";
            /** 获取-签署日期 */
            get signDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_SIGNDATE_NAME);
            }
            /** 设置-签署日期 */
            set signDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_SIGNDATE_NAME, value);
            }

            /** 映射的属性名称-终止日期 */
            static PROPERTY_TERMINATIONDATE_NAME: string = "TerminationDate";
            /** 获取-终止日期 */
            get terminationDate(): Date {
                return this.getProperty<Date>(BlanketAgreement.PROPERTY_TERMINATIONDATE_NAME);
            }
            /** 设置-终止日期 */
            set terminationDate(value: Date) {
                this.setProperty(BlanketAgreement.PROPERTY_TERMINATIONDATE_NAME, value);
            }

            /** 映射的属性名称-协议方法 */
            static PROPERTY_AGREEMENTMETHOD_NAME: string = "AgreementMethod";
            /** 获取-协议方法 */
            get agreementMethod(): emAgreementMethod {
                return this.getProperty<emAgreementMethod>(BlanketAgreement.PROPERTY_AGREEMENTMETHOD_NAME);
            }
            /** 设置-协议方法 */
            set agreementMethod(value: emAgreementMethod) {
                this.setProperty(BlanketAgreement.PROPERTY_AGREEMENTMETHOD_NAME, value);
            }

            /** 映射的属性名称-协议类型 */
            static PROPERTY_AGREEMENTTYPE_NAME: string = "AgreementType";
            /** 获取-协议类型 */
            get agreementType(): emAgreementType {
                return this.getProperty<emAgreementType>(BlanketAgreement.PROPERTY_AGREEMENTTYPE_NAME);
            }
            /** 设置-协议类型 */
            set agreementType(value: emAgreementType) {
                this.setProperty(BlanketAgreement.PROPERTY_AGREEMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-价格方式 */
            static PROPERTY_PRICEMODE_NAME: string = "PriceMode";
            /** 获取-价格方式 */
            get priceMode(): emPriceMode {
                return this.getProperty<emPriceMode>(BlanketAgreement.PROPERTY_PRICEMODE_NAME);
            }
            /** 设置-价格方式 */
            set priceMode(value: emPriceMode) {
                this.setProperty(BlanketAgreement.PROPERTY_PRICEMODE_NAME, value);
            }

            /** 映射的属性名称-结算概率 */
            static PROPERTY_SETTLEMENTPROBABILITY_NAME: string = "SettlementProbability";
            /** 获取-结算概率 */
            get settlementProbability(): number {
                return this.getProperty<number>(BlanketAgreement.PROPERTY_SETTLEMENTPROBABILITY_NAME);
            }
            /** 设置-结算概率 */
            set settlementProbability(value: number) {
                this.setProperty(BlanketAgreement.PROPERTY_SETTLEMENTPROBABILITY_NAME, value);
            }


            /** 映射的属性名称-一揽子协议-项目集合 */
            static PROPERTY_BLANKETAGREEMENTITEMS_NAME: string = "BlanketAgreementItems";
            /** 获取-一揽子协议-项目集合 */
            get blanketAgreementItems(): BlanketAgreementItems {
                return this.getProperty<BlanketAgreementItems>(BlanketAgreement.PROPERTY_BLANKETAGREEMENTITEMS_NAME);
            }
            /** 设置-一揽子协议-项目集合 */
            set blanketAgreementItems(value: BlanketAgreementItems) {
                this.setProperty(BlanketAgreement.PROPERTY_BLANKETAGREEMENTITEMS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.blanketAgreementItems = new BlanketAgreementItems(this);
                this.objectCode = ibas.config.applyVariables(BlanketAgreement.BUSINESS_OBJECT_CODE);
                this.agreementMethod = bo.emAgreementMethod.ITEM;
                this.agreementType = bo.emAgreementType.GENERAL;
                this.priceMode = bo.emPriceMode.GROSS;
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.signDate = ibas.dates.today();
                this.startDate = ibas.dates.today();
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.blanketAgreementItems.forEach(c => c.lineStatus = ibas.emDocumentStatus.RELEASED);
            }
        }

        /** 一揽子协议-项目 集合 */
        export class BlanketAgreementItems extends ibas.BusinessObjects<BlanketAgreementItem, BlanketAgreement> implements IBlanketAgreementItems {
            /** 创建并添加子项 */
            create(): BlanketAgreementItem {
                let item: BlanketAgreementItem = new BlanketAgreementItem();
                this.add(item);
                return item;
            }
        }

        /** 一揽子协议-项目 */
        export class BlanketAgreementItem extends ibas.BODocumentLine<BlanketAgreementItem> implements IBlanketAgreementItem {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-编码 */
            get docEntry(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-编码 */
            set docEntry(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-行号 */
            get lineId(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_LINEID_NAME);
            }
            /** 设置-行号 */
            set lineId(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string = "VisOrder";
            /** 获取-显示顺序 */
            get visOrder(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_VISORDER_NAME);
            }
            /** 设置-显示顺序 */
            set visOrder(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_VISORDER_NAME, value);
            }

            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-类型 */
            get objectCode(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-类型 */
            set objectCode(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BlanketAgreementItem.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(BlanketAgreementItem.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(BlanketAgreementItem.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string = "LineStatus";
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(BlanketAgreementItem.PROPERTY_LINESTATUS_NAME);
            }
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus) {
                this.setProperty(BlanketAgreementItem.PROPERTY_LINESTATUS_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(BlanketAgreementItem.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(BlanketAgreementItem.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(BlanketAgreementItem.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BlanketAgreementItem.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(BlanketAgreementItem.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BlanketAgreementItem.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(BlanketAgreementItem.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string = "ItemCode";
            /** 获取-产品编号 */
            get itemCode(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_ITEMCODE_NAME);
            }
            /** 设置-产品编号 */
            set itemCode(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_ITEMCODE_NAME, value);
            }

            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string = "ItemDescription";
            /** 获取-产品/服务描述 */
            get itemDescription(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_ITEMDESCRIPTION_NAME);
            }
            /** 设置-产品/服务描述 */
            set itemDescription(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_ITEMDESCRIPTION_NAME, value);
            }

            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string = "ItemSign";
            /** 获取-产品标识 */
            get itemSign(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_ITEMSIGN_NAME);
            }
            /** 设置-产品标识 */
            set itemSign(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_ITEMSIGN_NAME, value);
            }

            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string = "Quantity";
            /** 获取-数量 */
            get quantity(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_QUANTITY_NAME);
            }
            /** 设置-数量 */
            set quantity(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_QUANTITY_NAME, value);
            }

            /** 映射的属性名称-单位 */
            static PROPERTY_UOM_NAME: string = "UOM";
            /** 获取-单位 */
            get uom(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_UOM_NAME);
            }
            /** 设置-单位 */
            set uom(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_UOM_NAME, value);
            }

            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string = "Price";
            /** 获取-价格 */
            get price(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_PRICE_NAME);
            }
            /** 设置-价格 */
            set price(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_PRICE_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string = "Rate";
            /** 获取-汇率 */
            get rate(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_RATE_NAME);
            }
            /** 设置-汇率 */
            set rate(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_RATE_NAME, value);
            }

            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string = "LineTotal";
            /** 获取-行总计 */
            get lineTotal(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_LINETOTAL_NAME);
            }
            /** 设置-行总计 */
            set lineTotal(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_LINETOTAL_NAME, value);
            }

            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string = "ClosedQuantity";
            /** 获取-已清数量 */
            get closedQuantity(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_CLOSEDQUANTITY_NAME);
            }
            /** 设置-已清数量 */
            set closedQuantity(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CLOSEDQUANTITY_NAME, value);
            }

            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string = "ClosedAmount";
            /** 获取-已清金额 */
            get closedAmount(): number {
                return this.getProperty<number>(BlanketAgreementItem.PROPERTY_CLOSEDAMOUNT_NAME);
            }
            /** 设置-已清金额 */
            set closedAmount(value: number) {
                this.setProperty(BlanketAgreementItem.PROPERTY_CLOSEDAMOUNT_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(BlanketAgreementItem.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(BlanketAgreementItem.PROPERTY_REFERENCE2_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
                this.price = 0;
                this.quantity = 1;
                this.lineTotal = 0;
                this.closedQuantity = 0;
                this.closedAmount = 0;
            }
            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 计算总计 = 数量 * 价格
                    new BusinessRuleDeductionPriceQtyTotal(
                        BlanketAgreementItem.PROPERTY_LINETOTAL_NAME, BlanketAgreementItem.PROPERTY_PRICE_NAME, BlanketAgreementItem.PROPERTY_QUANTITY_NAME
                    ),
                ];
            }
        }

    }
}
