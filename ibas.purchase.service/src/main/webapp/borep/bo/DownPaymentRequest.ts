/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {
        /** 预付款申请 */
        export class DownPaymentRequest extends ibas.BODocument<DownPaymentRequest> implements IDownPaymentRequest {
            /** 资源后缀 */
            static resource_suffix: string = "ap";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_DOWNPAYMNETREQUEST;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-凭证编号 */
            get docEntry(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-凭证编号 */
            set docEntry(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-单据编码 */
            static PROPERTY_DOCNUM_NAME: string = "DocNum";
            /** 获取-单据编码 */
            get docNum(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_DOCNUM_NAME);
            }
            /** 设置-单据编码 */
            set docNum(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCNUM_NAME, value);
            }

            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string = "Period";
            /** 获取-期间 */
            get period(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_PERIOD_NAME);
            }
            /** 设置-期间 */
            set period(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_PERIOD_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequest.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequest.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(DownPaymentRequest.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(DownPaymentRequest.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(DownPaymentRequest.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(DownPaymentRequest.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(DownPaymentRequest.PROPERTY_DOCUMENTSTATUS_NAME);
            }
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCUMENTSTATUS_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(DownPaymentRequest.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(DownPaymentRequest.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(DownPaymentRequest.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(DownPaymentRequest.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string = "TeamMembers";
            /** 获取-团队成员 */
            get teamMembers(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_TEAMMEMBERS_NAME);
            }
            /** 设置-团队成员 */
            set teamMembers(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_TEAMMEMBERS_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string = "PostingDate";
            /** 获取-过账日期 */
            get postingDate(): Date {
                return this.getProperty<Date>(DownPaymentRequest.PROPERTY_POSTINGDATE_NAME);
            }
            /** 设置-过账日期 */
            set postingDate(value: Date) {
                this.setProperty(DownPaymentRequest.PROPERTY_POSTINGDATE_NAME, value);
            }

            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
            /** 获取-到期日 */
            get deliveryDate(): Date {
                return this.getProperty<Date>(DownPaymentRequest.PROPERTY_DELIVERYDATE_NAME);
            }
            /** 设置-到期日 */
            set deliveryDate(value: Date) {
                this.setProperty(DownPaymentRequest.PROPERTY_DELIVERYDATE_NAME, value);
            }

            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string = "DocumentDate";
            /** 获取-凭证日期 */
            get documentDate(): Date {
                return this.getProperty<Date>(DownPaymentRequest.PROPERTY_DOCUMENTDATE_NAME);
            }
            /** 设置-凭证日期 */
            set documentDate(value: Date) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCUMENTDATE_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_REMARKS_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequest.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequest.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已打印 */
            static PROPERTY_PRINTED_NAME: string = "Printed";
            /** 获取-已打印 */
            get printed(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequest.PROPERTY_PRINTED_NAME);
            }
            /** 设置-已打印 */
            set printed(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequest.PROPERTY_PRINTED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequest.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequest.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string = "SupplierCode";
            /** 获取-供应商代码 */
            get supplierCode(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_SUPPLIERCODE_NAME);
            }
            /** 设置-供应商代码 */
            set supplierCode(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_SUPPLIERCODE_NAME, value);
            }

            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string = "SupplierName";
            /** 获取-供应商名称 */
            get supplierName(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_SUPPLIERNAME_NAME);
            }
            /** 设置-供应商名称 */
            set supplierName(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_SUPPLIERNAME_NAME, value);
            }

            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string = "ContactPerson";
            /** 获取-联系人 */
            get contactPerson(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_CONTACTPERSON_NAME);
            }
            /** 设置-联系人 */
            set contactPerson(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_CONTACTPERSON_NAME, value);
            }

            /** 映射的属性名称-预付比例 */
            static PROPERTY_DISCOUNT_NAME: string = "Discount";
            /** 获取-预付比例 */
            get discount(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DISCOUNT_NAME);
            }
            /** 设置-预付比例 */
            set discount(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DISCOUNT_NAME, value);
            }

            /** 映射的属性名称-比例后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string = "DiscountTotal";
            /** 获取-比例后总计 */
            get discountTotal(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DISCOUNTTOTAL_NAME);
            }
            /** 设置-比例后总计 */
            set discountTotal(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DISCOUNTTOTAL_NAME, value);
            }

            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string = "DocumentCurrency";
            /** 获取-单据货币 */
            get documentCurrency(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_DOCUMENTCURRENCY_NAME);
            }
            /** 设置-单据货币 */
            set documentCurrency(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCUMENTCURRENCY_NAME, value);
            }

            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string = "DocumentRate";
            /** 获取-单据汇率 */
            get documentRate(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DOCUMENTRATE_NAME);
            }
            /** 设置-单据汇率 */
            set documentRate(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCUMENTRATE_NAME, value);
            }

            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string = "DocumentTotal";
            /** 获取-单据总计 */
            get documentTotal(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DOCUMENTTOTAL_NAME);
            }
            /** 设置-单据总计 */
            set documentTotal(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOCUMENTTOTAL_NAME, value);
            }

            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string = "PaidTotal";
            /** 获取-已付款总计 */
            get paidTotal(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_PAIDTOTAL_NAME);
            }
            /** 设置-已付款总计 */
            set paidTotal(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_PAIDTOTAL_NAME, value);
            }

            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string = "PaymentCode";
            /** 获取-付款条款 */
            get paymentCode(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_PAYMENTCODE_NAME);
            }
            /** 设置-付款条款 */
            set paymentCode(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_PAYMENTCODE_NAME, value);
            }

            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string = "Rounding";
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequest.PROPERTY_ROUNDING_NAME);
            }
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequest.PROPERTY_ROUNDING_NAME, value);
            }

            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string = "DiffAmount";
            /** 获取-舍入差额 */
            get diffAmount(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_DIFFAMOUNT_NAME);
            }
            /** 设置-舍入差额 */
            set diffAmount(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_DIFFAMOUNT_NAME, value);
            }

            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string = "Project";
            /** 获取-项目代码 */
            get project(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_PROJECT_NAME);
            }
            /** 设置-项目代码 */
            set project(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_PROJECT_NAME, value);
            }

            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string = "Consumer";
            /** 获取-终端客户 */
            get consumer(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_CONSUMER_NAME);
            }
            /** 设置-终端客户 */
            set consumer(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_CONSUMER_NAME, value);
            }

            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string = "OrderType";
            /** 获取-单据类型 */
            get orderType(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_ORDERTYPE_NAME);
            }
            /** 设置-单据类型 */
            set orderType(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_ORDERTYPE_NAME, value);
            }

            /** 映射的属性名称-合同/协议 */
            static PROPERTY_AGREEMENTS_NAME: string = "Agreements";
            /** 获取-合同/协议 */
            get agreements(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_AGREEMENTS_NAME);
            }
            /** 设置-合同/协议 */
            set agreements(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_AGREEMENTS_NAME, value);
            }

            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string = "Branch";
            /** 获取-分支 */
            get branch(): string {
                return this.getProperty<string>(DownPaymentRequest.PROPERTY_BRANCH_NAME);
            }
            /** 设置-分支 */
            set branch(value: string) {
                this.setProperty(DownPaymentRequest.PROPERTY_BRANCH_NAME, value);
            }


            /** 映射的属性名称-预付款申请-行集合 */
            static PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME: string = "DownPaymentRequestItems";
            /** 获取-预付款申请-行集合 */
            get downPaymentRequestItems(): DownPaymentRequestItems {
                return this.getProperty<DownPaymentRequestItems>(DownPaymentRequest.PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME);
            }
            /** 设置-预付款申请-行集合 */
            set downPaymentRequestItems(value: DownPaymentRequestItems) {
                this.setProperty(DownPaymentRequest.PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.downPaymentRequestItems = new DownPaymentRequestItems(this);
                this.objectCode = ibas.config.applyVariables(DownPaymentRequest.BUSINESS_OBJECT_CODE);
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.documentCurrency = accounting.config.currency("LOCAL");
                this.documentDate = ibas.dates.today();
                this.deliveryDate = ibas.dates.today();
                this.rounding = ibas.emYesNo.NO;
                this.discount = 1;
            }

            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string = "ItemsTaxTotal";
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_ITEMSTAXTOTAL_NAME);
            }
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_ITEMSTAXTOTAL_NAME, value);
            }

            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string = "ItemsLineTotal";
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_ITEMSLINETOTAL_NAME);
            }
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_ITEMSLINETOTAL_NAME, value);
            }

            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string = "ItemsPreTaxTotal";
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number {
                return this.getProperty<number>(DownPaymentRequest.PROPERTY_ITEMSPRETAXTOTAL_NAME);
            }
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number) {
                this.setProperty(DownPaymentRequest.PROPERTY_ITEMSPRETAXTOTAL_NAME, value);
            }


            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 计算-舍入差异
                    new BusinessRuleRoundingAmount(DownPaymentRequest.PROPERTY_ROUNDING_NAME, DownPaymentRequest.PROPERTY_DIFFAMOUNT_NAME),
                    // 计算行-总计（含税）
                    new ibas.BusinessRuleSumElements(
                        DownPaymentRequest.PROPERTY_ITEMSLINETOTAL_NAME, DownPaymentRequest.PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME, DownPaymentRequestItem.PROPERTY_LINETOTAL_NAME,
                        (data: DownPaymentRequestItem): boolean => {
                            // 不计标记删除项
                            if (config.isStatisticsTagDeleted() === false && data.deleted === ibas.emYesNo.YES) {
                                return false;
                            }
                            return true;
                        }
                    ),
                    // 计算行-税总计
                    new ibas.BusinessRuleSumElements(
                        DownPaymentRequest.PROPERTY_ITEMSTAXTOTAL_NAME, DownPaymentRequest.PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME, DownPaymentRequestItem.PROPERTY_TAXTOTAL_NAME,
                        (data: DownPaymentRequestItem): boolean => {
                            // 不计标记删除项
                            if (config.isStatisticsTagDeleted() === false && data.deleted === ibas.emYesNo.YES) {
                                return false;
                            }
                            return true;
                        }
                    ),
                    // 计算行-税前总计
                    new ibas.BusinessRuleSumElements(
                        DownPaymentRequest.PROPERTY_ITEMSPRETAXTOTAL_NAME, DownPaymentRequest.PROPERTY_DOWNPAYMNETREQUESTITEMS_NAME, DownPaymentRequestItem.PROPERTY_PRETAXLINETOTAL_NAME,
                        (data: DownPaymentRequestItem): boolean => {
                            // 不计标记删除项
                            if (config.isStatisticsTagDeleted() === false && data.deleted === ibas.emYesNo.YES) {
                                return false;
                            }
                            return true;
                        }
                    ),
                    // 折扣后总计（含税） = 行-总计（含税）* 折扣
                    new BusinessRuleDeductionDiscountTotal(
                        DownPaymentRequest.PROPERTY_DISCOUNTTOTAL_NAME, DownPaymentRequest.PROPERTY_ITEMSLINETOTAL_NAME, DownPaymentRequest.PROPERTY_DISCOUNT_NAME
                    ),
                    // 单据总计 = 折扣后总计（含税）+ 运输-总计（含税） +  舍入
                    new BusinessRuleDeductionDocumentTotal(DownPaymentRequest.PROPERTY_DOCUMENTTOTAL_NAME,
                        DownPaymentRequest.PROPERTY_DISCOUNTTOTAL_NAME, undefined, DownPaymentRequest.PROPERTY_DIFFAMOUNT_NAME
                    ),
                ];
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.paidTotal = 0;
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.downPaymentRequestItems.forEach(c => c.lineStatus = ibas.emDocumentStatus.RELEASED);
            }
            /** 转换之前 */
            beforeConvert(): void { }
            /** 数据解析后 */
            afterParsing(): void {
                // 计算部分业务逻辑
                for (let rule of ibas.businessRulesManager.getRules(ibas.objects.typeOf(this))) {
                    if (rule instanceof ibas.BusinessRuleSumElements) {
                        rule.execute(this);
                    }
                }
            }
            /** 基于采购报价 */
            baseDocument(document: IPurchaseQuote): void;
            /** 基于采购订单 */
            baseDocument(document: IPurchaseOrder): void;
            /** 基于采购收货 */
            baseDocument(document: IPurchaseDelivery): void;
            /** 基于采购订单 */
            baseDocument(): void {
                if (ibas.objects.instanceOf(arguments[0], PurchaseQuote)) {
                    let document: PurchaseQuote = arguments[0];
                    if (!ibas.strings.equals(this.supplierCode, document.supplierCode)) {
                        return;
                    }
                    // 复制头信息
                    bo.baseDocument(this, document);
                    // 复制行项目
                    for (let item of document.purchaseQuoteItems) {
                        if (item.canceled === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.deleted === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.PLANNED) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.CLOSED) {
                            continue;
                        }
                        if (this.downPaymentRequestItems.firstOrDefault(
                            c => c.baseDocumentType === item.objectCode
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId) !== null) {
                            continue;
                        }
                        // 计算未清金额
                        let openAmount: number = item.lineTotal - item.closedAmount;
                        if (openAmount <= 0) {
                            continue;
                        }
                        let myItem: DownPaymentRequestItem = this.downPaymentRequestItems.create();
                        bo.baseDocumentItem(myItem, item);
                        if (openAmount !== item.lineTotal) {
                            // 未清金额不等于总额，计算数量
                            if (config.isInventoryUnitLinePrice()) {
                                if (myItem.price > 0) {
                                    let result: number = ibas.numbers.round(openAmount / myItem.price);
                                    if (ibas.numbers.isApproximated(result, item.inventoryQuantity,
                                        ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY), 0)
                                        || result > item.inventoryQuantity) {
                                        myItem.inventoryQuantity = item.inventoryQuantity;
                                    } else {
                                        if (ibas.config.get(ibas.CONFIG_ITEM_TRUNCATE_DECIMALS, false)) {
                                            myItem.inventoryQuantity = ibas.numbers.round(result, ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY));
                                        } else {
                                            myItem.inventoryQuantity = result;
                                        }
                                    }
                                } else {
                                    myItem.inventoryQuantity = 0;
                                }
                            } else {
                                if (myItem.price > 0) {
                                    let result: number = ibas.numbers.round(openAmount / myItem.price);
                                    if (ibas.numbers.isApproximated(result, item.quantity,
                                        ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY), 0)
                                        || result > item.quantity) {
                                        myItem.quantity = item.quantity;
                                    } else {
                                        if (ibas.config.get(ibas.CONFIG_ITEM_TRUNCATE_DECIMALS, false)) {
                                            myItem.quantity = ibas.numbers.round(result, ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY));
                                        } else {
                                            myItem.quantity = result;
                                        }
                                    }
                                } else {
                                    myItem.quantity = 0;
                                }
                            }
                        }
                    }
                }
                if (ibas.objects.instanceOf(arguments[0], PurchaseOrder)) {
                    let document: PurchaseOrder = arguments[0];
                    if (!ibas.strings.equals(this.supplierCode, document.supplierCode)) {
                        return;
                    }
                    // 复制头信息
                    bo.baseDocument(this, document);
                    // 复制行项目
                    for (let item of document.purchaseOrderItems) {
                        if (item.canceled === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.deleted === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.PLANNED) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.CLOSED) {
                            continue;
                        }
                        if (this.downPaymentRequestItems.firstOrDefault(
                            c => c.baseDocumentType === item.objectCode
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId) !== null) {
                            continue;
                        }
                        // 计算未清金额
                        let openAmount: number = item.lineTotal - item.closedAmount;
                        if (openAmount <= 0) {
                            continue;
                        }
                        let myItem: DownPaymentRequestItem = this.downPaymentRequestItems.create();
                        bo.baseDocumentItem(myItem, item);
                        if (openAmount !== item.lineTotal) {
                            // 未清金额不等于总额，计算数量
                            if (config.isInventoryUnitLinePrice()) {
                                if (myItem.price > 0) {
                                    let result: number = ibas.numbers.round(openAmount / myItem.price);
                                    if (ibas.numbers.isApproximated(result, item.inventoryQuantity,
                                        ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY), 0)
                                        || result > item.inventoryQuantity) {
                                        myItem.inventoryQuantity = item.inventoryQuantity;
                                    } else {
                                        if (ibas.config.get(ibas.CONFIG_ITEM_TRUNCATE_DECIMALS, false)) {
                                            myItem.inventoryQuantity = ibas.numbers.round(result, ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY));
                                        } else {
                                            myItem.inventoryQuantity = result;
                                        }
                                    }
                                } else {
                                    myItem.inventoryQuantity = 0;
                                }
                            } else {
                                if (myItem.price > 0) {
                                    let result: number = ibas.numbers.round(openAmount / myItem.price);
                                    if (ibas.numbers.isApproximated(result, item.quantity,
                                        ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY), 0)
                                        || result > item.quantity) {
                                        myItem.quantity = item.quantity;
                                    } else {
                                        if (ibas.config.get(ibas.CONFIG_ITEM_TRUNCATE_DECIMALS, false)) {
                                            myItem.quantity = ibas.numbers.round(result, ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY));
                                        } else {
                                            myItem.quantity = result;
                                        }
                                    }
                                } else {
                                    myItem.quantity = 0;
                                }
                            }
                        }
                    }
                }
                if (ibas.objects.instanceOf(arguments[0], PurchaseDelivery)) {
                    let document: PurchaseDelivery = arguments[0];
                    if (!ibas.strings.equals(this.supplierCode, document.supplierCode)) {
                        return;
                    }
                    // 复制头信息
                    bo.baseDocument(this, document);
                    // 复制行项目
                    for (let item of document.purchaseDeliveryItems) {
                        if (item.canceled === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.deleted === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.PLANNED) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.CLOSED) {
                            continue;
                        }
                        if (this.downPaymentRequestItems.firstOrDefault(
                            c => c.baseDocumentType === item.objectCode
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId) !== null) {
                            continue;
                        }
                        // 计算未清金额
                        let openAmount: number = item.lineTotal - item.closedAmount;
                        if (openAmount <= 0) {
                            continue;
                        }
                        let myItem: DownPaymentRequestItem = this.downPaymentRequestItems.create();
                        bo.baseDocumentItem(myItem, item);
                        if (openAmount !== item.lineTotal) {
                            // 未清金额不等于总额，计算数量
                            if (config.isInventoryUnitLinePrice()) {
                                if (myItem.price > 0) {
                                    let result: number = ibas.numbers.round(openAmount / myItem.price);
                                    if (ibas.numbers.isApproximated(result, item.inventoryQuantity,
                                        ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY), 0)
                                        || result > item.inventoryQuantity) {
                                        myItem.inventoryQuantity = item.inventoryQuantity;
                                    } else {
                                        if (ibas.config.get(ibas.CONFIG_ITEM_TRUNCATE_DECIMALS, false)) {
                                            myItem.inventoryQuantity = ibas.numbers.round(result, ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY));
                                        } else {
                                            myItem.inventoryQuantity = result;
                                        }
                                    }
                                } else {
                                    myItem.inventoryQuantity = 0;
                                }
                            } else {
                                if (myItem.price > 0) {
                                    let result: number = ibas.numbers.round(openAmount / myItem.price);
                                    if (ibas.numbers.isApproximated(result, item.quantity,
                                        ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY), 0)
                                        || result > item.quantity) {
                                        myItem.quantity = item.quantity;
                                    } else {
                                        if (ibas.config.get(ibas.CONFIG_ITEM_TRUNCATE_DECIMALS, false)) {
                                            myItem.quantity = ibas.numbers.round(result, ibas.config.get(ibas.CONFIG_ITEM_DECIMAL_PLACES_QUANTITY));
                                        } else {
                                            myItem.quantity = result;
                                        }
                                    }
                                } else {
                                    myItem.quantity = 0;
                                }
                            }
                        }
                    }
                }
            }
        }

        /** 预付款申请-行 集合 */
        export class DownPaymentRequestItems extends ibas.BusinessObjects<DownPaymentRequestItem, DownPaymentRequest> implements IDownPaymentRequestItems {
            /** 创建并添加子项 */
            create(): DownPaymentRequestItem {
                let item: DownPaymentRequestItem = new DownPaymentRequestItem();
                this.add(item);
                return item;
            }
            protected afterAdd(item: DownPaymentRequestItem): void {
                super.afterAdd(item);
                if (!this.parent.isLoading) {
                    if (item.isNew && ibas.strings.isEmpty(item.baseDocumentType)) {
                        item.agreements = this.parent.agreements;
                        item.rate = this.parent.documentRate;
                        item.currency = this.parent.documentCurrency;
                    }
                    if (item.isNew && ibas.objects.isNull(item.deliveryDate)) {
                        item.deliveryDate = this.parent.deliveryDate;
                    }
                    if (ibas.strings.isEmpty(this.parent.documentCurrency)
                        && !ibas.strings.isEmpty(item.currency)) {
                        this.parent.documentCurrency = item.currency;
                    }
                }
            }

            protected onParentPropertyChanged(name: string): void {
                super.onParentPropertyChanged(name);
                if (!this.parent.isLoading) {
                    if (ibas.strings.equalsIgnoreCase(name, DownPaymentRequest.PROPERTY_AGREEMENTS_NAME)) {
                        let argument: string = this.parent.agreements;
                        for (let item of this) {
                            if (item.isLoading) {
                                continue;
                            }
                            if (!ibas.strings.isEmpty(item.baseDocumentType) && !ibas.strings.isEmpty(item.agreements)) {
                                continue;
                            }
                            item.agreements = argument;
                        }
                    } else if (ibas.strings.equalsIgnoreCase(name, PurchaseOrder.PROPERTY_DOCUMENTRATE_NAME)) {
                        let rate: number = this.parent.documentRate;
                        for (let item of this) {
                            if (item.isLoading) {
                                continue;
                            }
                            if (!ibas.strings.isEmpty(item.baseDocumentType) && ibas.numbers.valueOf(item.rate) > 0) {
                                continue;
                            }
                            item.rate = rate;
                        }
                    } else if (ibas.strings.equalsIgnoreCase(name, PurchaseOrder.PROPERTY_DOCUMENTCURRENCY_NAME)) {
                        let currency: string = this.parent.documentCurrency;
                        for (let item of this) {
                            if (item.isLoading) {
                                continue;
                            }
                            if (!ibas.strings.isEmpty(item.baseDocumentType) && !ibas.strings.isEmpty(item.currency)) {
                                continue;
                            }
                            item.currency = currency;
                        }
                    }
                }
            }
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: DownPaymentRequestItem, name: string): void {
                // 标记删除触发集合行变化
                if (ibas.strings.equalsIgnoreCase(name, DownPaymentRequestItem.PROPERTY_DELETED_NAME)
                    || ibas.strings.equalsIgnoreCase(name, DownPaymentRequestItem.PROPERTY_CANCELED_NAME)) {
                    this.firePropertyChanged("length");
                }
            }
        }

        /** 预付款申请-行 */
        export class DownPaymentRequestItem extends ibas.BODocumentLine<DownPaymentRequestItem> implements IDownPaymentRequestItem {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-凭证编号 */
            get docEntry(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-凭证编号 */
            set docEntry(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-行号 */
            get lineId(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_LINEID_NAME);
            }
            /** 设置-行号 */
            set lineId(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string = "VisOrder";
            /** 获取-显示顺序 */
            get visOrder(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_VISORDER_NAME);
            }
            /** 设置-显示顺序 */
            set visOrder(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_VISORDER_NAME, value);
            }

            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-类型 */
            get objectCode(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-类型 */
            set objectCode(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequestItem.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(DownPaymentRequestItem.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string = "LineStatus";
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(DownPaymentRequestItem.PROPERTY_LINESTATUS_NAME);
            }
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_LINESTATUS_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(DownPaymentRequestItem.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(DownPaymentRequestItem.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequestItem.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequestItem.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
            /** 获取-基于类型 */
            get baseDocumentType(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_BASEDOCUMENTTYPE_NAME);
            }
            /** 设置-基于类型 */
            set baseDocumentType(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
            /** 获取-基于标识 */
            get baseDocumentEntry(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_BASEDOCUMENTENTRY_NAME);
            }
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
            /** 获取-基于行号 */
            get baseDocumentLineId(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_BASEDOCUMENTLINEID_NAME);
            }
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string = "OriginalDocumentType";
            /** 获取-原始类型 */
            get originalDocumentType(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME);
            }
            /** 设置-原始类型 */
            set originalDocumentType(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string = "OriginalDocumentEntry";
            /** 获取-原始标识 */
            get originalDocumentEntry(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_ORIGINALDOCUMENTENTRY_NAME);
            }
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ORIGINALDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string = "OriginalDocumentLineId";
            /** 获取-原始行号 */
            get originalDocumentLineId(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_ORIGINALDOCUMENTLINEID_NAME);
            }
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ORIGINALDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string = "ItemCode";
            /** 获取-物料编码 */
            get itemCode(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_ITEMCODE_NAME);
            }
            /** 设置-物料编码 */
            set itemCode(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ITEMCODE_NAME, value);
            }

            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string = "ItemDescription";
            /** 获取-物料/服务描述 */
            get itemDescription(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_ITEMDESCRIPTION_NAME);
            }
            /** 设置-物料/服务描述 */
            set itemDescription(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ITEMDESCRIPTION_NAME, value);
            }

            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string = "ItemSign";
            /** 获取-物料标识 */
            get itemSign(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_ITEMSIGN_NAME);
            }
            /** 设置-物料标识 */
            set itemSign(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ITEMSIGN_NAME, value);
            }

            /** 映射的属性名称-目录编码 */
            static PROPERTY_CATALOGCODE_NAME: string = "CatalogCode";
            /** 获取-目录编码 */
            get catalogCode(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_CATALOGCODE_NAME);
            }
            /** 设置-目录编码 */
            set catalogCode(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CATALOGCODE_NAME, value);
            }

            /** 映射的属性名称-物料版本 */
            static PROPERTY_ITEMVERSION_NAME: string = "ItemVersion";
            /** 获取-物料版本 */
            get itemVersion(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_ITEMVERSION_NAME);
            }
            /** 设置-物料版本 */
            set itemVersion(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_ITEMVERSION_NAME, value);
            }

            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string = "SerialManagement";
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequestItem.PROPERTY_SERIALMANAGEMENT_NAME);
            }
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_SERIALMANAGEMENT_NAME, value);
            }

            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string = "BatchManagement";
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DownPaymentRequestItem.PROPERTY_BATCHMANAGEMENT_NAME);
            }
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_BATCHMANAGEMENT_NAME, value);
            }

            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string = "Quantity";
            /** 获取-数量 */
            get quantity(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_QUANTITY_NAME);
            }
            /** 设置-数量 */
            set quantity(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_QUANTITY_NAME, value);
            }

            /** 映射的属性名称-单位 */
            static PROPERTY_UOM_NAME: string = "UOM";
            /** 获取-单位 */
            get uom(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_UOM_NAME);
            }
            /** 设置-单位 */
            set uom(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UOM_NAME, value);
            }

            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string = "InventoryUOM";
            /** 获取-库存单位 */
            get inventoryUOM(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_INVENTORYUOM_NAME);
            }
            /** 设置-库存单位 */
            set inventoryUOM(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_INVENTORYUOM_NAME, value);
            }

            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string = "UOMRate";
            /** 获取-单位换算率 */
            get uomRate(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_UOMRATE_NAME);
            }
            /** 设置-单位换算率 */
            set uomRate(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UOMRATE_NAME, value);
            }

            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string = "InventoryQuantity";
            /** 获取-库存数量 */
            get inventoryQuantity(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_INVENTORYQUANTITY_NAME);
            }
            /** 设置-库存数量 */
            set inventoryQuantity(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_INVENTORYQUANTITY_NAME, value);
            }

            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string = "Warehouse";
            /** 获取-仓库 */
            get warehouse(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_WAREHOUSE_NAME);
            }
            /** 设置-仓库 */
            set warehouse(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_WAREHOUSE_NAME, value);
            }

            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string = "Price";
            /** 获取-价格 */
            get price(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_PRICE_NAME);
            }
            /** 设置-价格 */
            set price(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_PRICE_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string = "Rate";
            /** 获取-汇率 */
            get rate(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_RATE_NAME);
            }
            /** 设置-汇率 */
            set rate(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_RATE_NAME, value);
            }

            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string = "LineTotal";
            /** 获取-行总计 */
            get lineTotal(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_LINETOTAL_NAME);
            }
            /** 设置-行总计 */
            set lineTotal(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_LINETOTAL_NAME, value);
            }

            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
            /** 获取-行交货日期 */
            get deliveryDate(): Date {
                return this.getProperty<Date>(DownPaymentRequestItem.PROPERTY_DELIVERYDATE_NAME);
            }
            /** 设置-行交货日期 */
            set deliveryDate(value: Date) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DELIVERYDATE_NAME, value);
            }

            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string = "ClosedQuantity";
            /** 获取-已清数量 */
            get closedQuantity(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_CLOSEDQUANTITY_NAME);
            }
            /** 设置-已清数量 */
            set closedQuantity(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CLOSEDQUANTITY_NAME, value);
            }

            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string = "Discount";
            /** 获取-行折扣 */
            get discount(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_DISCOUNT_NAME);
            }
            /** 设置-行折扣 */
            set discount(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DISCOUNT_NAME, value);
            }

            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string = "ClosedAmount";
            /** 获取-已清金额 */
            get closedAmount(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_CLOSEDAMOUNT_NAME);
            }
            /** 设置-已清金额 */
            set closedAmount(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_CLOSEDAMOUNT_NAME, value);
            }

            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string = "UnitPrice";
            /** 获取-折扣前价格 */
            get unitPrice(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_UNITPRICE_NAME);
            }
            /** 设置-折扣前价格 */
            set unitPrice(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UNITPRICE_NAME, value);
            }

            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string = "UnitLineTotal";
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_UNITLINETOTAL_NAME);
            }
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UNITLINETOTAL_NAME, value);
            }

            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string = "Tax";
            /** 获取-税定义 */
            get tax(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_TAX_NAME);
            }
            /** 设置-税定义 */
            set tax(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_TAX_NAME, value);
            }

            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string = "TaxRate";
            /** 获取-税率 */
            get taxRate(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_TAXRATE_NAME);
            }
            /** 设置-税率 */
            set taxRate(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_TAXRATE_NAME, value);
            }

            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string = "TaxTotal";
            /** 获取-税总额 */
            get taxTotal(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_TAXTOTAL_NAME);
            }
            /** 设置-税总额 */
            set taxTotal(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_TAXTOTAL_NAME, value);
            }

            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string = "PreTaxPrice";
            /** 获取-税前价格 */
            get preTaxPrice(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_PRETAXPRICE_NAME);
            }
            /** 设置-税前价格 */
            set preTaxPrice(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_PRETAXPRICE_NAME, value);
            }

            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string = "PreTaxLineTotal";
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_PRETAXLINETOTAL_NAME);
            }
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_PRETAXLINETOTAL_NAME, value);
            }

            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string = "DistributionRule1";
            /** 获取-成本中心1 */
            get distributionRule1(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE1_NAME);
            }
            /** 设置-成本中心1 */
            set distributionRule1(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE1_NAME, value);
            }

            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string = "DistributionRule2";
            /** 获取-成本中心2 */
            get distributionRule2(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE2_NAME);
            }
            /** 设置-成本中心2 */
            set distributionRule2(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE2_NAME, value);
            }

            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string = "DistributionRule3";
            /** 获取-成本中心3 */
            get distributionRule3(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE3_NAME);
            }
            /** 设置-成本中心3 */
            set distributionRule3(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE3_NAME, value);
            }

            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string = "DistributionRule4";
            /** 获取-成本中心4 */
            get distributionRule4(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE4_NAME);
            }
            /** 设置-成本中心4 */
            set distributionRule4(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE4_NAME, value);
            }

            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string = "DistributionRule5";
            /** 获取-成本中心5 */
            get distributionRule5(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE5_NAME);
            }
            /** 设置-成本中心5 */
            set distributionRule5(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_DISTRIBUTIONRULE5_NAME, value);
            }

            /** 映射的属性名称-合同/协议 */
            static PROPERTY_AGREEMENTS_NAME: string = "Agreements";
            /** 获取-合同/协议 */
            get agreements(): string {
                return this.getProperty<string>(DownPaymentRequestItem.PROPERTY_AGREEMENTS_NAME);
            }
            /** 设置-合同/协议 */
            set agreements(value: string) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_AGREEMENTS_NAME, value);
            }
            /** 映射的属性名称-价格（本币） */
            static PROPERTY_PRICELC_NAME: string = "PriceLC";
            /** 获取-价格（本币） */
            get priceLC(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_PRICELC_NAME);
            }
            /** 设置-价格（本币） */
            set priceLC(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_PRICELC_NAME, value);
            }

            /** 映射的属性名称-折扣前价格（本币） */
            static PROPERTY_UNITPRICELC_NAME: string = "UnitPriceLC";
            /** 获取-折扣前价格（本币） */
            get unitPriceLC(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_UNITPRICELC_NAME);
            }
            /** 设置-折扣前价格（本币） */
            set unitPriceLC(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_UNITPRICELC_NAME, value);
            }

            /** 映射的属性名称-税前价格（本币） */
            static PROPERTY_PRETAXPRICELC_NAME: string = "PreTaxPriceLC";
            /** 获取-税前价格（本币） */
            get preTaxPriceLC(): number {
                return this.getProperty<number>(DownPaymentRequestItem.PROPERTY_PRETAXPRICELC_NAME);
            }
            /** 设置-税前价格（本币） */
            set preTaxPriceLC(value: number) {
                this.setProperty(DownPaymentRequestItem.PROPERTY_PRETAXPRICELC_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
                this.currency = accounting.config.currency("LOCAL");
                this.discount = 1;
                this.taxRate = 0;
                this.uomRate = 1;
            }
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void {
                if (ibas.objects.isNull(source)) {
                    return;
                }
                bo.baseProduct(this, source);
            }

            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 计算本币价格
                    new BusinessRuleDeductionCurrencyAmount(
                        DownPaymentRequestItem.PROPERTY_UNITPRICELC_NAME, DownPaymentRequestItem.PROPERTY_UNITPRICE_NAME, DownPaymentRequestItem.PROPERTY_RATE_NAME
                    ),
                    new BusinessRuleDeductionCurrencyAmount(
                        DownPaymentRequestItem.PROPERTY_PRETAXPRICELC_NAME, DownPaymentRequestItem.PROPERTY_PRETAXPRICE_NAME, DownPaymentRequestItem.PROPERTY_RATE_NAME
                    ),
                    new BusinessRuleDeductionCurrencyAmount(
                        DownPaymentRequestItem.PROPERTY_PRICELC_NAME, DownPaymentRequestItem.PROPERTY_PRICE_NAME, DownPaymentRequestItem.PROPERTY_RATE_NAME
                    ),
                    // 计算库存数量 = 数量 * 换算率
                    new BusinessRuleCalculateInventoryQuantity(
                        DownPaymentRequestItem.PROPERTY_INVENTORYQUANTITY_NAME, DownPaymentRequestItem.PROPERTY_QUANTITY_NAME, DownPaymentRequestItem.PROPERTY_UOMRATE_NAME),
                    // 计算折扣前总计 = 数量 * 折扣前价格
                    new BusinessRuleDeductionPriceQtyTotal(
                        DownPaymentRequestItem.PROPERTY_UNITLINETOTAL_NAME, DownPaymentRequestItem.PROPERTY_UNITPRICE_NAME,
                        config.isInventoryUnitLinePrice() ? DownPaymentRequestItem.PROPERTY_INVENTORYQUANTITY_NAME : DownPaymentRequestItem.PROPERTY_QUANTITY_NAME
                    ),
                    // 计算 行总计 = 税前总计（折扣后） + 税总计；行总计 = 价格（税后） * 数量；税总计 = 税前总计（折扣后） * 税率
                    new BusinessRuleDeductionPriceTaxTotal(DownPaymentRequestItem.PROPERTY_LINETOTAL_NAME, DownPaymentRequestItem.PROPERTY_PRICE_NAME,
                        config.isInventoryUnitLinePrice() ? DownPaymentRequestItem.PROPERTY_INVENTORYQUANTITY_NAME : DownPaymentRequestItem.PROPERTY_QUANTITY_NAME,
                        DownPaymentRequestItem.PROPERTY_TAXRATE_NAME, DownPaymentRequestItem.PROPERTY_TAXTOTAL_NAME, DownPaymentRequestItem.PROPERTY_PRETAXLINETOTAL_NAME
                    ),
                    // 计算折扣后总计（税前） = 数量 * 折扣后价格（税前）
                    new BusinessRuleDeductionPriceQtyTotal(
                        DownPaymentRequestItem.PROPERTY_PRETAXLINETOTAL_NAME, DownPaymentRequestItem.PROPERTY_PRETAXPRICE_NAME,
                        config.isInventoryUnitLinePrice() ? DownPaymentRequestItem.PROPERTY_INVENTORYQUANTITY_NAME : DownPaymentRequestItem.PROPERTY_QUANTITY_NAME,
                    ),
                    // 计算折扣后总计 = 折扣前总计 * 折扣
                    new BusinessRuleDeductionDiscount(
                        DownPaymentRequestItem.PROPERTY_DISCOUNT_NAME, DownPaymentRequestItem.PROPERTY_UNITLINETOTAL_NAME, DownPaymentRequestItem.PROPERTY_PRETAXLINETOTAL_NAME
                    ),
                ];
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.closedAmount = 0;
                this.closedQuantity = 0;
            }
        }

    }
}
