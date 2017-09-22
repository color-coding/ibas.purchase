/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emYesNo,
    emDocumentStatus,
    emBOStatus,
    emApprovalStatus,
    BusinessObject,
    BusinessObjects,
    BOMasterData,
    BOMasterDataLine,
    BODocument,
    BODocumentLine,
    BOSimple,
    BOSimpleLine,
    config,
    strings,
    objects,
} from "ibas/index";
import {
    emItemType
} from "../../3rdparty/materials/index";
import {
    IPurchaseReturn,
    IPurchaseReturnItems,
    IPurchaseReturnItem,
    BO_CODE_PURCHASERETURN,
} from "../../api/index";

/** 采购退货 */
export class PurchaseReturn extends BODocument<PurchaseReturn> implements IPurchaseReturn {

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

    /** 映射的属性名称-期间编号 */
    static PROPERTY_DOCNUM_NAME: string = "DocNum";
    /** 获取-期间编号 */
    get docNum(): number {
        return this.getProperty<number>(PurchaseReturn.PROPERTY_DOCNUM_NAME);
    }
    /** 设置-期间编号 */
    set docNum(value: number) {
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
    get canceled(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturn.PROPERTY_CANCELED_NAME);
    }
    /** 设置-取消 */
    set canceled(value: emYesNo) {
        this.setProperty(PurchaseReturn.PROPERTY_CANCELED_NAME, value);
    }

    /** 映射的属性名称-状态 */
    static PROPERTY_STATUS_NAME: string = "Status";
    /** 获取-状态 */
    get status(): emBOStatus {
        return this.getProperty<emBOStatus>(PurchaseReturn.PROPERTY_STATUS_NAME);
    }
    /** 设置-状态 */
    set status(value: emBOStatus) {
        this.setProperty(PurchaseReturn.PROPERTY_STATUS_NAME, value);
    }

    /** 映射的属性名称-审批状态 */
    static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
    /** 获取-审批状态 */
    get approvalStatus(): emApprovalStatus {
        return this.getProperty<emApprovalStatus>(PurchaseReturn.PROPERTY_APPROVALSTATUS_NAME);
    }
    /** 设置-审批状态 */
    set approvalStatus(value: emApprovalStatus) {
        this.setProperty(PurchaseReturn.PROPERTY_APPROVALSTATUS_NAME, value);
    }

    /** 映射的属性名称-单据状态 */
    static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
    /** 获取-单据状态 */
    get documentStatus(): emDocumentStatus {
        return this.getProperty<emDocumentStatus>(PurchaseReturn.PROPERTY_DOCUMENTSTATUS_NAME);
    }
    /** 设置-单据状态 */
    set documentStatus(value: emDocumentStatus) {
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
    get referenced(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturn.PROPERTY_REFERENCED_NAME);
    }
    /** 设置-已引用 */
    set referenced(value: emYesNo) {
        this.setProperty(PurchaseReturn.PROPERTY_REFERENCED_NAME, value);
    }

    /** 映射的属性名称-已删除 */
    static PROPERTY_DELETED_NAME: string = "Deleted";
    /** 获取-已删除 */
    get deleted(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturn.PROPERTY_DELETED_NAME);
    }
    /** 设置-已删除 */
    set deleted(value: emYesNo) {
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

    /** 映射的属性名称-税率 */
    static PROPERTY_TAXRATE_NAME: string = "TaxRate";
    /** 获取-税率 */
    get taxRate(): number {
        return this.getProperty<number>(PurchaseReturn.PROPERTY_TAXRATE_NAME);
    }
    /** 设置-税率 */
    set taxRate(value: number) {
        this.setProperty(PurchaseReturn.PROPERTY_TAXRATE_NAME, value);
    }

    /** 映射的属性名称-税总额 */
    static PROPERTY_TAXTOTAL_NAME: string = "TaxTotal";
    /** 获取-税总额 */
    get taxTotal(): number {
        return this.getProperty<number>(PurchaseReturn.PROPERTY_TAXTOTAL_NAME);
    }
    /** 设置-税总额 */
    set taxTotal(value: number) {
        this.setProperty(PurchaseReturn.PROPERTY_TAXTOTAL_NAME, value);
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

    /** 映射的属性名称-折扣总计 */
    static PROPERTY_DISCOUNTTOTAL_NAME: string = "DiscountTotal";
    /** 获取-折扣总计 */
    get discountTotal(): number {
        return this.getProperty<number>(PurchaseReturn.PROPERTY_DISCOUNTTOTAL_NAME);
    }
    /** 设置-折扣总计 */
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

    /** 映射的属性名称-单据交换率 */
    static PROPERTY_DOCUMENTRATE_NAME: string = "DocumentRate";
    /** 获取-单据交换率 */
    get documentRate(): number {
        return this.getProperty<number>(PurchaseReturn.PROPERTY_DOCUMENTRATE_NAME);
    }
    /** 设置-单据交换率 */
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

    /** 映射的属性名称-付款条款代码 */
    static PROPERTY_PAYMENTCODE_NAME: string = "PaymentCode";
    /** 获取-付款条款代码 */
    get paymentCode(): string {
        return this.getProperty<string>(PurchaseReturn.PROPERTY_PAYMENTCODE_NAME);
    }
    /** 设置-付款条款代码 */
    set paymentCode(value: string) {
        this.setProperty(PurchaseReturn.PROPERTY_PAYMENTCODE_NAME, value);
    }

    /** 映射的属性名称-舍入 */
    static PROPERTY_ROUNDING_NAME: string = "Rounding";
    /** 获取-舍入 */
    get rounding(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturn.PROPERTY_ROUNDING_NAME);
    }
    /** 设置-舍入 */
    set rounding(value: emYesNo) {
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


    /** 初始化数据 */
    protected init(): void {
        this.purchaseReturnItems = new PurchaseReturnItems(this);
        this.objectCode = config.applyVariables(PurchaseReturn.BUSINESS_OBJECT_CODE);
    }
}

/** 采购退货-行 集合 */
export class PurchaseReturnItems extends BusinessObjects<PurchaseReturnItem, PurchaseReturn> implements IPurchaseReturnItems {

    /** 创建并添加子项 */
    create(): PurchaseReturnItem {
        let item: PurchaseReturnItem = new PurchaseReturnItem();
        this.add(item);
        return item;
    }
    /** 监听父项属性改变 */
    protected onParentPropertyChanged(name: string): void {
        super.onParentPropertyChanged(name);
        /** 父项中单据状态改变，影响行中状态 */
        if (strings.equalsIgnoreCase(name, PurchaseReturn.PROPERTY_DOCUMENTSTATUS_NAME)) {
            for (let purchaseReturnItem of this.filterDeleted()) {
                purchaseReturnItem.lineStatus = this.parent.documentStatus;
            }
        }
    }
    /** 监听子项属性改变 */
    protected onChildPropertyChanged(item: PurchaseReturnItem, name: string): void {
        super.onChildPropertyChanged(item, name);
        if (strings.equalsIgnoreCase(name, PurchaseReturnItem.PROPERTY_LINETOTAL_NAME)) {
            let total: number = 0;
            let discount: number = 0;
            for (let purchaseReturnItem of this.filterDeleted()) {
                if (objects.isNull(purchaseReturnItem.lineTotal)) {
                    purchaseReturnItem.lineTotal = 0;
                }
                total = Number(total) +  Number(purchaseReturnItem.lineTotal);
                discount = Number(discount) +
                Number(purchaseReturnItem.price * purchaseReturnItem.quantity - purchaseReturnItem.lineTotal);
            }
            this.parent.documentTotal = total;
            this.parent.discountTotal = discount;
            this.parent.discount = discount / total;
        }
        if(strings.equalsIgnoreCase(name,PurchaseReturnItem.PROPERTY_TAXTOTAL_NAME)) {
            let taxTotal: number = 0;
            for(let purchaseReturnItem of this.filterDeleted()) {
                if (objects.isNull(purchaseReturnItem.taxTotal)) {
                    purchaseReturnItem.lineTotal = 0;
                }
                taxTotal = Number(taxTotal) + Number(purchaseReturnItem.taxTotal);
            }
            this.parent.taxTotal = taxTotal;
            this.parent.taxRate = taxTotal / (this.parent.documentTotal + this.parent.discountTotal);
        }
        // 折扣总计为NaN时显示为0
        if (isNaN(this.parent.discountTotal)) {
            this.parent.discountTotal = 0;
        }
        if(isNaN(this.parent.discount)) {
            this.parent.discount = 0;
        }
    }
    protected afterRemove(item: PurchaseReturnItem): void {
        super.afterRemove(item);
        if(this.parent.purchaseReturnItems.length === 0) {
            this.parent.taxTotal = 0;
            this.parent.documentTotal = 0;
            this.parent.taxRate = 0;
            this.parent.discountTotal = 0;
            this.parent.discount = 0;
        }else {
            this.parent.documentTotal -=   item.lineTotal;
            this.parent.discountTotal -= (item.quantity*item.price-item.lineTotal) ;
            this.parent.taxTotal -= item.taxTotal;
            this.parent.taxRate = this.parent.taxTotal / (this.parent.documentTotal + this.parent.discountTotal);
            this.parent.discount = this.parent.discountTotal / (this.parent.documentTotal + this.parent.discountTotal);
        }
    }
}

/** 采购退货-行 */
export class PurchaseReturnItem extends BODocumentLine<PurchaseReturnItem> implements IPurchaseReturnItem {

    /** 构造函数 */
    constructor() {
        super();
    }
    protected onPropertyChanged(name: string): void {
        super.onPropertyChanged(name);
        if (strings.equalsIgnoreCase(name, PurchaseReturnItem.PROPERTY_QUANTITY_NAME) ||
            strings.equalsIgnoreCase(name, PurchaseReturnItem.PROPERTY_PRICE_NAME) ||
            strings.equalsIgnoreCase(name, PurchaseReturnItem.PROPERTY_DISCOUNT_NAME)) {
            this.lineTotal = this.quantity * this.price;
        }
        if(strings.equalsIgnoreCase(name,PurchaseReturnItem.PROPERTY_TAXRATE_NAME) ||
            strings.equalsIgnoreCase(name,PurchaseReturnItem.PROPERTY_PRICE_NAME) ||
            strings.equalsIgnoreCase(name,PurchaseReturnItem.PROPERTY_TAXTOTAL_NAME) ||
            strings.equalsIgnoreCase(name, PurchaseReturnItem.PROPERTY_QUANTITY_NAME)) {
                this.taxTotal = this.quantity * this.price * this.taxRate;
         }
        // 行总计为NaN时显示为0
        if (isNaN(this.lineTotal)) {
            this.lineTotal = 0;
        }
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
    get canceled(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturnItem.PROPERTY_CANCELED_NAME);
    }
    /** 设置-取消 */
    set canceled(value: emYesNo) {
        this.setProperty(PurchaseReturnItem.PROPERTY_CANCELED_NAME, value);
    }

    /** 映射的属性名称-状态 */
    static PROPERTY_STATUS_NAME: string = "Status";
    /** 获取-状态 */
    get status(): emBOStatus {
        return this.getProperty<emBOStatus>(PurchaseReturnItem.PROPERTY_STATUS_NAME);
    }
    /** 设置-状态 */
    set status(value: emBOStatus) {
        this.setProperty(PurchaseReturnItem.PROPERTY_STATUS_NAME, value);
    }

    /** 映射的属性名称-单据状态 */
    static PROPERTY_LINESTATUS_NAME: string = "LineStatus";
    /** 获取-单据状态 */
    get lineStatus(): emDocumentStatus {
        return this.getProperty<emDocumentStatus>(PurchaseReturnItem.PROPERTY_LINESTATUS_NAME);
    }
    /** 设置-单据状态 */
    set lineStatus(value: emDocumentStatus) {
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
    get referenced(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturnItem.PROPERTY_REFERENCED_NAME);
    }
    /** 设置-已引用 */
    set referenced(value: emYesNo) {
        this.setProperty(PurchaseReturnItem.PROPERTY_REFERENCED_NAME, value);
    }

    /** 映射的属性名称-已删除 */
    static PROPERTY_DELETED_NAME: string = "Deleted";
    /** 获取-已删除 */
    get deleted(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturnItem.PROPERTY_DELETED_NAME);
    }
    /** 设置-已删除 */
    set deleted(value: emYesNo) {
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

    /** 映射的属性名称-物料编号 */
    static PROPERTY_ITEMCODE_NAME: string = "ItemCode";
    /** 获取-物料编号 */
    get itemCode(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ITEMCODE_NAME);
    }
    /** 设置-物料编号 */
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

    /** 映射的属性名称-物料类型 */
    static PROPERTY_ITEMTYPE_NAME: string = "ItemType";
    /** 获取-物料类型 */
    get itemType(): emItemType {
        return this.getProperty<emItemType>(PurchaseReturnItem.PROPERTY_ITEMTYPE_NAME);
    }
    /** 设置-物料类型 */
    set itemType(value: emItemType) {
        this.setProperty(PurchaseReturnItem.PROPERTY_ITEMTYPE_NAME, value);
    }

    /** 映射的属性名称-序号管理 */
    static PROPERTY_SERIALMANAGEMENT_NAME: string = "SerialManagement";
    /** 获取-序号管理 */
    get serialManagement(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME);
    }
    /** 设置-序号管理 */
    set serialManagement(value: emYesNo) {
        this.setProperty(PurchaseReturnItem.PROPERTY_SERIALMANAGEMENT_NAME, value);
    }

    /** 映射的属性名称-批号管理 */
    static PROPERTY_BATCHMANAGEMENT_NAME: string = "BatchManagement";
    /** 获取-批号管理 */
    get batchManagement(): emYesNo {
        return this.getProperty<emYesNo>(PurchaseReturnItem.PROPERTY_BATCHMANAGEMENT_NAME);
    }
    /** 设置-批号管理 */
    set batchManagement(value: emYesNo) {
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

    /** 映射的属性名称-剩余未清数量 */
    static PROPERTY_OPENQUANTITY_NAME: string = "OpenQuantity";
    /** 获取-剩余未清数量 */
    get openQuantity(): number {
        return this.getProperty<number>(PurchaseReturnItem.PROPERTY_OPENQUANTITY_NAME);
    }
    /** 设置-剩余未清数量 */
    set openQuantity(value: number) {
        this.setProperty(PurchaseReturnItem.PROPERTY_OPENQUANTITY_NAME, value);
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

    /** 映射的属性名称-未清金额 */
    static PROPERTY_OPENAMOUNT_NAME: string = "OpenAmount";
    /** 获取-未清金额 */
    get openAmount(): number {
        return this.getProperty<number>(PurchaseReturnItem.PROPERTY_OPENAMOUNT_NAME);
    }
    /** 设置-未清金额 */
    set openAmount(value: number) {
        this.setProperty(PurchaseReturnItem.PROPERTY_OPENAMOUNT_NAME, value);
    }

    /** 映射的属性名称-科目代码 */
    static PROPERTY_ACCOUNTCODE_NAME: string = "AccountCode";
    /** 获取-科目代码 */
    get accountCode(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_ACCOUNTCODE_NAME);
    }
    /** 设置-科目代码 */
    set accountCode(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_ACCOUNTCODE_NAME, value);
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

    /** 映射的属性名称-项目代码 */
    static PROPERTY_PROJECT_NAME: string = "Project";
    /** 获取-项目代码 */
    get project(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_PROJECT_NAME);
    }
    /** 设置-项目代码 */
    set project(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_PROJECT_NAME, value);
    }

    /** 映射的属性名称-分配规则1 */
    static PROPERTY_DISTRIBUTIONRULE1_NAME: string = "DistributionRule1";
    /** 获取-分配规则1 */
    get distributionRule1(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE1_NAME);
    }
    /** 设置-分配规则1 */
    set distributionRule1(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE1_NAME, value);
    }

    /** 映射的属性名称-分配规则2 */
    static PROPERTY_DISTRIBUTIONRULE2_NAME: string = "DistributionRule2";
    /** 获取-分配规则2 */
    get distributionRule2(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE2_NAME);
    }
    /** 设置-分配规则2 */
    set distributionRule2(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE2_NAME, value);
    }

    /** 映射的属性名称-分配规则3 */
    static PROPERTY_DISTRIBUTIONRULE3_NAME: string = "DistributionRule3";
    /** 获取-分配规则3 */
    get distributionRule3(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE3_NAME);
    }
    /** 设置-分配规则3 */
    set distributionRule3(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE3_NAME, value);
    }

    /** 映射的属性名称-分配规则4 */
    static PROPERTY_DISTRIBUTIONRULE4_NAME: string = "DistributionRule4";
    /** 获取-分配规则4 */
    get distributionRule4(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE4_NAME);
    }
    /** 设置-分配规则4 */
    set distributionRule4(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE4_NAME, value);
    }

    /** 映射的属性名称-分配规则5 */
    static PROPERTY_DISTRIBUTIONRULE5_NAME: string = "DistributionRule5";
    /** 获取-分配规则5 */
    get distributionRule5(): string {
        return this.getProperty<string>(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE5_NAME);
    }
    /** 设置-分配规则5 */
    set distributionRule5(value: string) {
        this.setProperty(PurchaseReturnItem.PROPERTY_DISTRIBUTIONRULE5_NAME, value);
    }



    /** 初始化数据 */
    protected init(): void {
        this.objectCode = config.applyVariables(PurchaseReturn.BUSINESS_OBJECT_CODE);
    }
}

