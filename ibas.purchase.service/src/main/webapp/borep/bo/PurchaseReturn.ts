/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 采购退货 */
        export class PurchaseReturn extends ibas.BODocument<PurchaseReturn> implements IPurchaseReturn, ibas.IConvertedData {

            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_PURCHASERETURN;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-凭证编号 */
            get docEntry(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-凭证编号 */
            set docEntry(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-单据编码 */
            static PROPERTY_DOCNUM_NAME: string = "DocNum";
            /** 获取-单据编码 */
            get docNum(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_DOCNUM_NAME);
            }
            /** 设置-单据编码 */
            set docNum(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCNUM_NAME, value);
            }

            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string = "Period";
            /** 获取-期间 */
            get period(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_PERIOD_NAME);
            }
            /** 设置-期间 */
            set period(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_PERIOD_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturn.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturn.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(PurchaseReturn.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(PurchaseReturn.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(PurchaseReturn.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(PurchaseReturn.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(PurchaseReturn.PROPERTY_DOCUMENTSTATUS_NAME);
            }
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCUMENTSTATUS_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(PurchaseReturn.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(PurchaseReturn.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(PurchaseReturn.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(PurchaseReturn.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string = "TeamMembers";
            /** 获取-团队成员 */
            get teamMembers(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_TEAMMEMBERS_NAME);
            }
            /** 设置-团队成员 */
            set teamMembers(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_TEAMMEMBERS_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string = "PostingDate";
            /** 获取-过账日期 */
            get postingDate(): Date {
                return this.getProperty<Date>(PurchaseReturn.PROPERTY_POSTINGDATE_NAME);
            }
            /** 设置-过账日期 */
            set postingDate(value: Date) {
                this.setProperty(PurchaseReturn.PROPERTY_POSTINGDATE_NAME, value);
            }

            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
            /** 获取-到期日 */
            get deliveryDate(): Date {
                return this.getProperty<Date>(PurchaseReturn.PROPERTY_DELIVERYDATE_NAME);
            }
            /** 设置-到期日 */
            set deliveryDate(value: Date) {
                this.setProperty(PurchaseReturn.PROPERTY_DELIVERYDATE_NAME, value);
            }

            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string = "DocumentDate";
            /** 获取-凭证日期 */
            get documentDate(): Date {
                return this.getProperty<Date>(PurchaseReturn.PROPERTY_DOCUMENTDATE_NAME);
            }
            /** 设置-凭证日期 */
            set documentDate(value: Date) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCUMENTDATE_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_REMARKS_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturn.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturn.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturn.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturn.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string = "SupplierCode";
            /** 获取-供应商代码 */
            get supplierCode(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_SUPPLIERCODE_NAME);
            }
            /** 设置-供应商代码 */
            set supplierCode(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_SUPPLIERCODE_NAME, value);
            }

            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string = "SupplierName";
            /** 获取-供应商名称 */
            get supplierName(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_SUPPLIERNAME_NAME);
            }
            /** 设置-供应商名称 */
            set supplierName(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_SUPPLIERNAME_NAME, value);
            }

            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string = "ContactPerson";
            /** 获取-联系人 */
            get contactPerson(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_CONTACTPERSON_NAME);
            }
            /** 设置-联系人 */
            set contactPerson(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_CONTACTPERSON_NAME, value);
            }

            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string = "Discount";
            /** 获取-折扣 */
            get discount(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DISCOUNT_NAME);
            }
            /** 设置-折扣 */
            set discount(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DISCOUNT_NAME, value);
            }

            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string = "DiscountTotal";
            /** 获取-折扣后总计 */
            get discountTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DISCOUNTTOTAL_NAME);
            }
            /** 设置-折扣后总计 */
            set discountTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DISCOUNTTOTAL_NAME, value);
            }

            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string = "DocumentCurrency";
            /** 获取-单据货币 */
            get documentCurrency(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_DOCUMENTCURRENCY_NAME);
            }
            /** 设置-单据货币 */
            set documentCurrency(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCUMENTCURRENCY_NAME, value);
            }

            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string = "DocumentRate";
            /** 获取-单据汇率 */
            get documentRate(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DOCUMENTRATE_NAME);
            }
            /** 设置-单据汇率 */
            set documentRate(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCUMENTRATE_NAME, value);
            }

            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string = "DocumentTotal";
            /** 获取-单据总计 */
            get documentTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DOCUMENTTOTAL_NAME);
            }
            /** 设置-单据总计 */
            set documentTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DOCUMENTTOTAL_NAME, value);
            }

            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string = "PaidTotal";
            /** 获取-已付款总计 */
            get paidTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_PAIDTOTAL_NAME);
            }
            /** 设置-已付款总计 */
            set paidTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_PAIDTOTAL_NAME, value);
            }

            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string = "PriceList";
            /** 获取-价格清单 */
            get priceList(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_PRICELIST_NAME);
            }
            /** 设置-价格清单 */
            set priceList(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_PRICELIST_NAME, value);
            }

            /** 映射的属性名称-付款条款 */
            static PROPERTY_PAYMENTCODE_NAME: string = "PaymentCode";
            /** 获取-付款条款 */
            get paymentCode(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_PAYMENTCODE_NAME);
            }
            /** 设置-付款条款 */
            set paymentCode(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_PAYMENTCODE_NAME, value);
            }

            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string = "Rounding";
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturn.PROPERTY_ROUNDING_NAME);
            }
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturn.PROPERTY_ROUNDING_NAME, value);
            }

            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string = "DiffAmount";
            /** 获取-舍入差额 */
            get diffAmount(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_DIFFAMOUNT_NAME);
            }
            /** 设置-舍入差额 */
            set diffAmount(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_DIFFAMOUNT_NAME, value);
            }

            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string = "Project";
            /** 获取-项目代码 */
            get project(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_PROJECT_NAME);
            }
            /** 设置-项目代码 */
            set project(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_PROJECT_NAME, value);
            }

            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string = "Consumer";
            /** 获取-终端客户 */
            get consumer(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_CONSUMER_NAME);
            }
            /** 设置-终端客户 */
            set consumer(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_CONSUMER_NAME, value);
            }

            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string = "OrderType";
            /** 获取-单据类型 */
            get orderType(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_ORDERTYPE_NAME);
            }
            /** 设置-单据类型 */
            set orderType(value: string) {
                this.setProperty(PurchaseReturn.PROPERTY_ORDERTYPE_NAME, value);
            }

            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string = "Agreements";
            /** 获取-合同 */
            get agreements(): string {
                return this.getProperty<string>(PurchaseReturn.PROPERTY_AGREEMENTS_NAME);
            }
            /** 设置-合同 */
            set agreements(value: string) {
                this.setProperty(PurchaseQuote.PROPERTY_AGREEMENTS_NAME, value);
            }

            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string = "Branch";
            /** 获取-分支 */
            get branch(): string {
                return this.getProperty<string>(PurchaseQuote.PROPERTY_BRANCH_NAME);
            }
            /** 设置-分支 */
            set branch(value: string) {
                this.setProperty(PurchaseQuote.PROPERTY_BRANCH_NAME, value);
            }
            /** 映射的属性名称-反向行折扣 */
            static PROPERTY_INVERSEDISCOUNT_NAME: string = "InverseDiscount";
            /** 获取-反向行折扣 */
            get inverseDiscount(): number {
                return this.getProperty<number>(PurchaseQuote.PROPERTY_INVERSEDISCOUNT_NAME);
            }
            /** 设置-反向行折扣 */
            set inverseDiscount(value: number) {
                this.setProperty(PurchaseQuote.PROPERTY_INVERSEDISCOUNT_NAME, value);
            }


            /** 映射的属性名称-采购退货-行集合 */
            static PROPERTY_PURCHASERETURNITEMS_NAME: string = "PurchaseReturnItems";
            /** 获取-采购退货-行集合 */
            get purchaseReturnItems(): PurchaseReturnItems {
                return this.getProperty<PurchaseReturnItems>(PurchaseReturn.PROPERTY_PURCHASERETURNITEMS_NAME);
            }
            /** 设置-采购退货-行集合 */
            set purchaseReturnItems(value: PurchaseReturnItems) {
                this.setProperty(PurchaseReturn.PROPERTY_PURCHASERETURNITEMS_NAME, value);
            }

            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string = "ShippingAddresss";
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss {
                return this.getProperty<ShippingAddresss>(PurchaseReturn.PROPERTY_SHIPPINGADDRESSS_NAME);
            }
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss) {
                this.setProperty(PurchaseReturn.PROPERTY_SHIPPINGADDRESSS_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
                this.purchaseReturnItems = new PurchaseReturnItems(this);
                this.shippingAddresss = new ShippingAddresss(this);
                this.objectCode = ibas.config.applyVariables(PurchaseReturn.BUSINESS_OBJECT_CODE);
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.documentCurrency = accounting.config.currency("LOCAL");
                this.documentDate = ibas.dates.today();
                this.deliveryDate = ibas.dates.today();
                this.rounding = ibas.emYesNo.YES;
                this.discount = 1;
            }

            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string = "ItemsTaxTotal";
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_ITEMSTAXTOTAL_NAME);
            }
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_ITEMSTAXTOTAL_NAME, value);
            }

            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string = "ItemsLineTotal";
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_ITEMSLINETOTAL_NAME);
            }
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_ITEMSLINETOTAL_NAME, value);
            }

            /** 映射的属性名称-项目的税前行总计 */
            static PROPERTY_ITEMSPRETAXTOTAL_NAME: string = "ItemsPreTaxTotal";
            /** 获取-项目的税前行总计 */
            get itemsPreTaxTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_ITEMSPRETAXTOTAL_NAME);
            }
            /** 设置-项目的税前行总计 */
            set itemsPreTaxTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_ITEMSPRETAXTOTAL_NAME, value);
            }

            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string = "ShippingsTaxTotal";
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_SHIPPINGSTAXTOTAL_NAME);
            }
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_SHIPPINGSTAXTOTAL_NAME, value);
            }

            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string = "ShippingsExpenseTotal";
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number {
                return this.getProperty<number>(PurchaseReturn.PROPERTY_SHIPPINGSEXPENSETOTAL_NAME);
            }
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number) {
                this.setProperty(PurchaseReturn.PROPERTY_SHIPPINGSEXPENSETOTAL_NAME, value);
            }

            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 计算行-总计（含税）
                    new ibas.BusinessRuleSumElements(
                        PurchaseReturn.PROPERTY_ITEMSLINETOTAL_NAME, PurchaseReturn.PROPERTY_PURCHASERETURNITEMS_NAME, PurchaseReturnItem.PROPERTY_LINETOTAL_NAME),
                    // 计算行-税总计
                    new ibas.BusinessRuleSumElements(
                        PurchaseReturn.PROPERTY_ITEMSTAXTOTAL_NAME, PurchaseReturn.PROPERTY_PURCHASERETURNITEMS_NAME, PurchaseReturnItem.PROPERTY_TAXTOTAL_NAME),
                    // 计算行-税前总计
                    new ibas.BusinessRuleSumElements(
                        PurchaseReturn.PROPERTY_ITEMSPRETAXTOTAL_NAME, PurchaseReturn.PROPERTY_PURCHASERETURNITEMS_NAME, PurchaseReturnItem.PROPERTY_PRETAXLINETOTAL_NAME),
                    // 计算运输-总计（含税）
                    new ibas.BusinessRuleSumElements(
                        PurchaseReturn.PROPERTY_SHIPPINGSEXPENSETOTAL_NAME, PurchaseReturn.PROPERTY_SHIPPINGADDRESSS_NAME, ShippingAddress.PROPERTY_EXPENSE_NAME),
                    // 计算运输-税总计
                    new ibas.BusinessRuleSumElements(
                        PurchaseReturn.PROPERTY_SHIPPINGSTAXTOTAL_NAME, PurchaseReturn.PROPERTY_SHIPPINGADDRESSS_NAME, ShippingAddress.PROPERTY_TAXTOTAL_NAME),
                    // 折扣后总计（含税） = 行-总计（含税）* 折扣
                    new BusinessRuleDeductionDiscountTotal(
                        PurchaseReturn.PROPERTY_DISCOUNTTOTAL_NAME, PurchaseReturn.PROPERTY_ITEMSLINETOTAL_NAME, PurchaseReturn.PROPERTY_DISCOUNT_NAME
                    ),
                    // 单据总计 = 折扣后总计（含税）+ 运输-总计（含税）
                    new BusinessRuleDeductionDocumentTotal(PurchaseReturn.PROPERTY_DOCUMENTTOTAL_NAME,
                        PurchaseReturn.PROPERTY_DISCOUNTTOTAL_NAME, PurchaseReturn.PROPERTY_SHIPPINGSEXPENSETOTAL_NAME),
                    // 计算正反折扣
                    new BusinessRuleNegativeDiscount(
                        PurchaseReturn.PROPERTY_DISCOUNT_NAME, PurchaseReturn.PROPERTY_INVERSEDISCOUNT_NAME
                    ),
                ];
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.paidTotal = 0;
                this.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.purchaseReturnItems.forEach(c => c.lineStatus = ibas.emDocumentStatus.RELEASED);
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
            /** 基于采购订单 */
            baseDocument(document: IPurchaseOrder): void;
            /** 基于采购收货 */
            baseDocument(document: IPurchaseDelivery): void;
            /** 基于采购收货 */
            baseDocument(document: IPurchaseReturnRequest): void;
            /** 基于单据 */
            baseDocument(): void {
                // 基于采购订单
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
                        if (this.purchaseReturnItems.firstOrDefault(
                            c => c.baseDocumentType === item.objectCode
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId) !== null) {
                            continue;
                        }
                        if (!(item.closedQuantity > 0)) {
                            continue;
                        }
                        let myItem: PurchaseReturnItem = this.purchaseReturnItems.create();
                        bo.baseDocumentItem(myItem, item);
                        myItem.quantity = item.closedQuantity;
                        // 复制批次
                        for (let batch of item.materialBatches) {
                            let myBatch: materials.bo.IMaterialBatchItem = myItem.materialBatches.create();
                            myBatch.batchCode = batch.batchCode;
                            myBatch.quantity = batch.quantity;
                        }
                        // 复制序列
                        for (let serial of item.materialSerials) {
                            let mySerial: materials.bo.IMaterialSerialItem = myItem.materialSerials.create();
                            mySerial.serialCode = serial.serialCode;
                        }
                    }
                    // 复制地址
                    for (let address of document.shippingAddresss) {
                        // 不复制重名的
                        if (this.shippingAddresss.firstOrDefault(c => c.name === address.name) !== null) {
                            continue;
                        }
                        let myAddress: IShippingAddress = address.clone();
                        this.shippingAddresss.add(<ShippingAddress>myAddress);
                    }
                }
                // 基于采购收货
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
                        if (this.purchaseReturnItems.firstOrDefault(
                            c => c.baseDocumentType === item.objectCode
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId) !== null) {
                            continue;
                        }
                        // 计算未发票数量
                        let openQty: number = item.quantity - item.closedQuantity;
                        if (openQty <= 0) {
                            continue;
                        }
                        let myItem: PurchaseReturnItem = this.purchaseReturnItems.create();
                        bo.baseDocumentItem(myItem, item);
                        myItem.quantity = openQty;
                        // 复制批次
                        openQty = myItem.quantity * (item.uomRate > 0 ? item.uomRate : 1);
                        let closeQty: number = item.closedQuantity * (item.uomRate > 0 ? item.uomRate : 1);
                        for (let batch of item.materialBatches) {
                            closeQty -= batch.quantity;
                            if (closeQty >= 0 || openQty <= 0) {
                                continue;
                            }
                            let myBatch: materials.bo.IMaterialBatchItem = myItem.materialBatches.create();
                            myBatch.batchCode = batch.batchCode;
                            myBatch.quantity = batch.quantity;
                            if (myBatch.quantity > openQty) {
                                myBatch.quantity = openQty;
                            }
                            openQty -= myBatch.quantity;
                            if (openQty <= 0) {
                                break;
                            }
                        }
                        // 复制序列
                        openQty = myItem.quantity * (item.uomRate > 0 ? item.uomRate : 1);
                        closeQty = item.closedQuantity * (item.uomRate > 0 ? item.uomRate : 1);
                        for (let serial of item.materialSerials) {
                            closeQty -= 1;
                            if (closeQty >= 0 || openQty <= 0) {
                                continue;
                            }
                            let mySerial: materials.bo.IMaterialSerialItem = myItem.materialSerials.create();
                            mySerial.serialCode = serial.serialCode;
                            openQty -= 1;
                            if (openQty <= 0) {
                                break;
                            }
                        }
                    }
                    // 复制地址
                    for (let address of document.shippingAddresss) {
                        // 不复制重名的
                        if (this.shippingAddresss.firstOrDefault(c => c.name === address.name) !== null) {
                            continue;
                        }
                        let myAddress: IShippingAddress = address.clone();
                        this.shippingAddresss.add(<ShippingAddress>myAddress);
                    }
                }
                // 基于采购退货申请
                if (ibas.objects.instanceOf(arguments[0], PurchaseReturnRequest)) {
                    let document: PurchaseReturnRequest = arguments[0];
                    if (!ibas.strings.equals(this.supplierCode, document.supplierCode)) {
                        return;
                    }
                    // 复制头信息
                    bo.baseDocument(this, document);
                    // 复制行项目
                    for (let item of document.purchaseReturnRequestItems) {
                        if (item.canceled === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.deleted === ibas.emYesNo.YES) {
                            continue;
                        }
                        if (item.lineStatus === ibas.emDocumentStatus.PLANNED) {
                            continue;
                        }
                        if (this.purchaseReturnItems.firstOrDefault(
                            c => c.baseDocumentType === item.objectCode
                                && c.baseDocumentEntry === item.docEntry
                                && c.baseDocumentLineId === item.lineId) !== null) {
                            continue;
                        }
                        // 计算未发票数量
                        let openQty: number = item.quantity - item.closedQuantity;
                        if (openQty <= 0) {
                            continue;
                        }
                        let myItem: PurchaseReturnItem = this.purchaseReturnItems.create();
                        bo.baseDocumentItem(myItem, item);
                        myItem.quantity = openQty;
                        // 复制批次
                        openQty = myItem.quantity * (item.uomRate > 0 ? item.uomRate : 1);
                        let closeQty: number = item.closedQuantity * (item.uomRate > 0 ? item.uomRate : 1);
                        for (let batch of item.materialBatches) {
                            closeQty -= batch.quantity;
                            if (closeQty >= 0 || openQty <= 0) {
                                continue;
                            }
                            let myBatch: materials.bo.IMaterialBatchItem = myItem.materialBatches.create();
                            myBatch.batchCode = batch.batchCode;
                            myBatch.quantity = batch.quantity;
                            if (myBatch.quantity > openQty) {
                                myBatch.quantity = openQty;
                            }
                            openQty -= myBatch.quantity;
                            if (openQty <= 0) {
                                break;
                            }
                        }
                        // 复制序列
                        openQty = myItem.quantity * (item.uomRate > 0 ? item.uomRate : 1);
                        closeQty = item.closedQuantity * (item.uomRate > 0 ? item.uomRate : 1);
                        for (let serial of item.materialSerials) {
                            closeQty -= 1;
                            if (closeQty >= 0 || openQty <= 0) {
                                continue;
                            }
                            let mySerial: materials.bo.IMaterialSerialItem = myItem.materialSerials.create();
                            mySerial.serialCode = serial.serialCode;
                            openQty -= 1;
                            if (openQty <= 0) {
                                break;
                            }
                        }
                    }
                    // 复制地址
                    for (let address of document.shippingAddresss) {
                        // 不复制重名的
                        if (this.shippingAddresss.firstOrDefault(c => c.name === address.name) !== null) {
                            continue;
                        }
                        let myAddress: IShippingAddress = address.clone();
                        this.shippingAddresss.add(<ShippingAddress>myAddress);
                    }
                }
            }
        }

        /** 采购退货-行 集合 */
        export class PurchaseReturnItems extends ibas.BusinessObjects<PurchaseReturnItem, PurchaseReturn> implements IPurchaseReturnItems {

            /** 创建并添加子项 */
            create(): PurchaseReturnItem {
                let item: PurchaseReturnItem = new PurchaseReturnItem();
                this.add(item);
                return item;
            }
            protected afterAdd(item: PurchaseReturnItem): void {
                super.afterAdd(item);
                if (!this.parent.isLoading) {
                    if (item.isNew && !item.isLoading) {
                        if (ibas.strings.isEmpty(item.baseDocumentType)) {
                            item.agreements = this.parent.agreements;
                            item.rate = this.parent.documentRate;
                            item.currency = this.parent.documentCurrency;
                        }
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
                    if (ibas.strings.equalsIgnoreCase(name, PurchaseOrder.PROPERTY_AGREEMENTS_NAME)) {
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
        }

        /** 采购退货-行 */
        export class PurchaseReturnItem extends ibas.BODocumentLine<PurchaseReturnItem> implements IPurchaseReturnItem {

            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-编码 */
            get docEntry(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-编码 */
            set docEntry(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-行号 */
            get lineId(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_LINEID_NAME);
            }
            /** 设置-行号 */
            set lineId(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string = "VisOrder";
            /** 获取-显示顺序 */
            get visOrder(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_VISORDER_NAME);
            }
            /** 设置-显示顺序 */
            set visOrder(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_VISORDER_NAME, value);
            }

            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-类型 */
            get objectCode(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-类型 */
            set objectCode(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturnItem.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string = "Status";
            /** 获取-状态 */
            get status(): ibas.emBOStatus {
                return this.getProperty<ibas.emBOStatus>(PurchaseReturnItem.PROPERTY_STATUS_NAME);
            }
            /** 设置-状态 */
            set status(value: ibas.emBOStatus) {
                this.setProperty(PurchaseReturnItem.PROPERTY_STATUS_NAME, value);
            }

            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string = "LineStatus";
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(PurchaseReturnItem.PROPERTY_LINESTATUS_NAME);
            }
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus) {
                this.setProperty(PurchaseReturnItem.PROPERTY_LINESTATUS_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(PurchaseReturnItem.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(PurchaseReturnItem.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string = "Reference1";
            /** 获取-参考1 */
            get reference1(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_REFERENCE1_NAME);
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_REFERENCE1_NAME, value);
            }

            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string = "Reference2";
            /** 获取-参考2 */
            get reference2(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_REFERENCE2_NAME);
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_REFERENCE2_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturnItem.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturnItem.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturnItem.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
            /** 获取-基于类型 */
            get baseDocumentType(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_BASEDOCUMENTTYPE_NAME);
            }
            /** 设置-基于类型 */
            set baseDocumentType(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
            /** 获取-基于标识 */
            get baseDocumentEntry(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_BASEDOCUMENTENTRY_NAME);
            }
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
            /** 获取-基于行号 */
            get baseDocumentLineId(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_BASEDOCUMENTLINEID_NAME);
            }
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string = "OriginalDocumentType";
            /** 获取-原始类型 */
            get originalDocumentType(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME);
            }
            /** 设置-原始类型 */
            set originalDocumentType(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ORIGINALDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string = "OriginalDocumentEntry";
            /** 获取-原始标识 */
            get originalDocumentEntry(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_ORIGINALDOCUMENTENTRY_NAME);
            }
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ORIGINALDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string = "OriginalDocumentLineId";
            /** 获取-原始行号 */
            get originalDocumentLineId(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_ORIGINALDOCUMENTLINEID_NAME);
            }
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ORIGINALDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string = "ItemCode";
            /** 获取-物料编码 */
            get itemCode(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ITEMCODE_NAME);
            }
            /** 设置-物料编码 */
            set itemCode(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ITEMCODE_NAME, value);
            }

            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string = "ItemDescription";
            /** 获取-物料/服务描述 */
            get itemDescription(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ITEMDESCRIPTION_NAME);
            }
            /** 设置-物料/服务描述 */
            set itemDescription(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ITEMDESCRIPTION_NAME, value);
            }

            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string = "ItemSign";
            /** 获取-物料标识 */
            get itemSign(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ITEMSIGN_NAME);
            }
            /** 设置-物料标识 */
            set itemSign(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ITEMSIGN_NAME, value);
            }

            /** 映射的属性名称-目录编码 */
            static PROPERTY_CATALOGCODE_NAME: string = "CatalogCode";
            /** 获取-目录编码 */
            get catalogCode(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_CATALOGCODE_NAME);
            }
            /** 设置-目录编码 */
            set catalogCode(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CATALOGCODE_NAME, value);
            }

            /** 映射的属性名称-物料版本 */
            static PROPERTY_ITEMVERSION_NAME: string = "ItemVersion";
            /** 获取-物料版本 */
            get itemVersion(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ITEMVERSION_NAME);
            }
            /** 设置-物料版本 */
            set itemVersion(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_ITEMVERSION_NAME, value);
            }

            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string = "SerialManagement";
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME);
            }
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME, value);
            }

            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string = "BatchManagement";
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME);
            }
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo) {
                this.setProperty(PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME, value);
            }

            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string = "Quantity";
            /** 获取-数量 */
            get quantity(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_QUANTITY_NAME);
            }
            /** 设置-数量 */
            set quantity(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_QUANTITY_NAME, value);
            }

            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string = "UOM";
            /** 获取-计量单位 */
            get uom(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_UOM_NAME);
            }
            /** 设置-计量单位 */
            set uom(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UOM_NAME, value);
            }

            /** 映射的属性名称-库存单位 */
            static PROPERTY_INVENTORYUOM_NAME: string = "InventoryUOM";
            /** 获取-库存单位 */
            get inventoryUOM(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_INVENTORYUOM_NAME);
            }
            /** 设置-库存单位 */
            set inventoryUOM(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_INVENTORYUOM_NAME, value);
            }

            /** 映射的属性名称-单位换算率 */
            static PROPERTY_UOMRATE_NAME: string = "UOMRate";
            /** 获取-单位换算率 */
            get uomRate(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_UOMRATE_NAME);
            }
            /** 设置-单位换算率 */
            set uomRate(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UOMRATE_NAME, value);
            }

            /** 映射的属性名称-库存数量 */
            static PROPERTY_INVENTORYQUANTITY_NAME: string = "InventoryQuantity";
            /** 获取-库存数量 */
            get inventoryQuantity(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_INVENTORYQUANTITY_NAME);
            }
            /** 设置-库存数量 */
            set inventoryQuantity(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_INVENTORYQUANTITY_NAME, value);
            }

            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string = "Warehouse";
            /** 获取-仓库 */
            get warehouse(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_WAREHOUSE_NAME);
            }
            /** 设置-仓库 */
            set warehouse(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_WAREHOUSE_NAME, value);
            }

            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string = "Price";
            /** 获取-价格 */
            get price(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_PRICE_NAME);
            }
            /** 设置-价格 */
            set price(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_PRICE_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string = "Rate";
            /** 获取-汇率 */
            get rate(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_RATE_NAME);
            }
            /** 设置-汇率 */
            set rate(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_RATE_NAME, value);
            }

            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string = "LineTotal";
            /** 获取-行总计 */
            get lineTotal(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_LINETOTAL_NAME);
            }
            /** 设置-行总计 */
            set lineTotal(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_LINETOTAL_NAME, value);
            }

            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string = "DeliveryDate";
            /** 获取-行交货日期 */
            get deliveryDate(): Date {
                return this.getProperty<Date>(PurchaseReturnItem.PROPERTY_DELIVERYDATE_NAME);
            }
            /** 设置-行交货日期 */
            set deliveryDate(value: Date) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DELIVERYDATE_NAME, value);
            }

            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string = "ClosedQuantity";
            /** 获取-已清数量 */
            get closedQuantity(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_CLOSEDQUANTITY_NAME);
            }
            /** 设置-已清数量 */
            set closedQuantity(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CLOSEDQUANTITY_NAME, value);
            }

            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string = "Discount";
            /** 获取-行折扣 */
            get discount(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_DISCOUNT_NAME);
            }
            /** 设置-行折扣 */
            set discount(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DISCOUNT_NAME, value);
            }

            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string = "ClosedAmount";
            /** 获取-已清金额 */
            get closedAmount(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_CLOSEDAMOUNT_NAME);
            }
            /** 设置-已清金额 */
            set closedAmount(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_CLOSEDAMOUNT_NAME, value);
            }

            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string = "UnitPrice";
            /** 获取-折扣前价格 */
            get unitPrice(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_UNITPRICE_NAME);
            }
            /** 设置-折扣前价格 */
            set unitPrice(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UNITPRICE_NAME, value);
            }

            /** 映射的属性名称-折扣前行总计 */
            static PROPERTY_UNITLINETOTAL_NAME: string = "UnitLineTotal";
            /** 获取-折扣前行总计 */
            get unitLineTotal(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_UNITLINETOTAL_NAME);
            }
            /** 设置-折扣前行总计 */
            set unitLineTotal(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_UNITLINETOTAL_NAME, value);
            }

            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string = "Tax";
            /** 获取-税定义 */
            get tax(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_TAX_NAME);
            }
            /** 设置-税定义 */
            set tax(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_TAX_NAME, value);
            }

            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string = "TaxRate";
            /** 获取-税率 */
            get taxRate(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_TAXRATE_NAME);
            }
            /** 设置-税率 */
            set taxRate(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_TAXRATE_NAME, value);
            }

            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string = "TaxTotal";
            /** 获取-税总额 */
            get taxTotal(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_TAXTOTAL_NAME);
            }
            /** 设置-税总额 */
            set taxTotal(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_TAXTOTAL_NAME, value);
            }

            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string = "PreTaxPrice";
            /** 获取-税前价格 */
            get preTaxPrice(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_PRETAXPRICE_NAME);
            }
            /** 设置-税前价格 */
            set preTaxPrice(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_PRETAXPRICE_NAME, value);
            }

            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string = "PreTaxLineTotal";
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_PRETAXLINETOTAL_NAME);
            }
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_PRETAXLINETOTAL_NAME, value);
            }

            /** 映射的属性名称-成本中心1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string = "DistributionRule1";
            /** 获取-成本中心1 */
            get distributionRule1(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE1_NAME);
            }
            /** 设置-成本中心1 */
            set distributionRule1(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE1_NAME, value);
            }

            /** 映射的属性名称-成本中心2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string = "DistributionRule2";
            /** 获取-成本中心2 */
            get distributionRule2(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE2_NAME);
            }
            /** 设置-成本中心2 */
            set distributionRule2(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE2_NAME, value);
            }

            /** 映射的属性名称-成本中心3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string = "DistributionRule3";
            /** 获取-成本中心3 */
            get distributionRule3(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE3_NAME);
            }
            /** 设置-成本中心3 */
            set distributionRule3(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE3_NAME, value);
            }

            /** 映射的属性名称-成本中心4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string = "DistributionRule4";
            /** 获取-成本中心4 */
            get distributionRule4(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE4_NAME);
            }
            /** 设置-成本中心4 */
            set distributionRule4(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE4_NAME, value);
            }

            /** 映射的属性名称-成本中心5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string = "DistributionRule5";
            /** 获取-成本中心5 */
            get distributionRule5(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE5_NAME);
            }
            /** 设置-成本中心5 */
            set distributionRule5(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE5_NAME, value);
            }

            /** 映射的属性名称-合同 */
            static PROPERTY_AGREEMENTS_NAME: string = "Agreements";
            /** 获取-合同 */
            get agreements(): string {
                return this.getProperty<string>(PurchaseReturnItem.PROPERTY_AGREEMENTS_NAME);
            }
            /** 设置-合同 */
            set agreements(value: string) {
                this.setProperty(PurchaseReturnItem.PROPERTY_AGREEMENTS_NAME, value);
            }

            /** 映射的属性名称-反向行折扣 */
            static PROPERTY_INVERSEDISCOUNT_NAME: string = "InverseDiscount";
            /** 获取-反向行折扣 */
            get inverseDiscount(): number {
                return this.getProperty<number>(PurchaseReturnItem.PROPERTY_INVERSEDISCOUNT_NAME);
            }
            /** 设置-反向行折扣 */
            set inverseDiscount(value: number) {
                this.setProperty(PurchaseReturnItem.PROPERTY_INVERSEDISCOUNT_NAME, value);
            }
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string = "MaterialBatches";
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems {
                return this.getProperty<materials.bo.MaterialBatchItems>(PurchaseReturnItem.PROPERTY_MATERIALBATCHES_NAME);
            }
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems) {
                this.setProperty(PurchaseReturnItem.PROPERTY_MATERIALBATCHES_NAME, value);
            }

            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string = "MaterialSerials";
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems {
                return this.getProperty<materials.bo.MaterialSerialItems>(PurchaseReturnItem.PROPERTY_MATERIALSERIALS_NAME);
            }
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems) {
                this.setProperty(PurchaseReturnItem.PROPERTY_MATERIALSERIALS_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.materialBatches = new materials.bo.MaterialBatchItems(this);
                this.materialSerials = new materials.bo.MaterialSerialItems(this);
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
                    // 计算库存数量 = 数量 * 换算率
                    new BusinessRuleCalculateInventoryQuantity(
                        PurchaseReturnItem.PROPERTY_INVENTORYQUANTITY_NAME, PurchaseReturnItem.PROPERTY_QUANTITY_NAME, PurchaseReturnItem.PROPERTY_UOMRATE_NAME),
                    // 计算折扣前总计 = 数量 * 折扣前价格
                    new BusinessRuleDeductionPriceQtyTotal(
                        PurchaseReturnItem.PROPERTY_UNITLINETOTAL_NAME, PurchaseReturnItem.PROPERTY_UNITPRICE_NAME,
                        config.isInventoryUnitLinePrice() ? PurchaseReturnItem.PROPERTY_INVENTORYQUANTITY_NAME : PurchaseReturnItem.PROPERTY_QUANTITY_NAME
                    ),
                    // 计算 行总计 = 税前总计（折扣后） + 税总计；行总计 = 价格（税后） * 数量；税总计 = 税前总计（折扣后） * 税率
                    new BusinessRuleDeductionPriceTaxTotal(PurchaseReturnItem.PROPERTY_LINETOTAL_NAME, PurchaseReturnItem.PROPERTY_PRICE_NAME,
                        config.isInventoryUnitLinePrice() ? PurchaseReturnItem.PROPERTY_INVENTORYQUANTITY_NAME : PurchaseReturnItem.PROPERTY_QUANTITY_NAME,
                        PurchaseReturnItem.PROPERTY_TAXRATE_NAME, PurchaseReturnItem.PROPERTY_TAXTOTAL_NAME, PurchaseReturnItem.PROPERTY_PRETAXLINETOTAL_NAME
                    ),
                    // 计算折扣后总计（税前） = 数量 * 折扣后价格（税前）
                    new BusinessRuleDeductionPriceQtyTotal(
                        PurchaseReturnItem.PROPERTY_PRETAXLINETOTAL_NAME, PurchaseReturnItem.PROPERTY_PRETAXPRICE_NAME,
                        config.isInventoryUnitLinePrice() ? PurchaseReturnItem.PROPERTY_INVENTORYQUANTITY_NAME : PurchaseReturnItem.PROPERTY_QUANTITY_NAME
                    ),
                    // 计算折扣后总计 = 折扣前总计 * 折扣
                    new BusinessRuleDeductionDiscount(
                        PurchaseReturnItem.PROPERTY_DISCOUNT_NAME, PurchaseReturnItem.PROPERTY_UNITLINETOTAL_NAME, PurchaseReturnItem.PROPERTY_PRETAXLINETOTAL_NAME
                    ),
                    // 计算正反折扣
                    new BusinessRuleNegativeDiscount(
                        PurchaseReturnItem.PROPERTY_DISCOUNT_NAME, PurchaseReturnItem.PROPERTY_INVERSEDISCOUNT_NAME
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
