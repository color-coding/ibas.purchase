/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "de9278d9-4914-45a5-8418-9c609118d03f";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "Purchase";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace config {
        /** 配置项目-价格清单改变是否强制刷新价格 */
        export const CONFIG_ITEM_FORCE_UPDATE_PRICE_FOR_PRICE_LIST_CHANGED: string = "forcedUpdateForPriceListChanged";
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        export function get<T>(key: string, defalut?: T): T {
            return ibas.config.get(ibas.strings.format("{0}|{1}", CONSOLE_ID, key), defalut);
        }
    }
    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_PURCHASE: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-采购收货 */
        export const BO_CODE_PURCHASEDELIVERY: string = "${Company}_PH_PURCHDELIVERY";
        /** 业务对象编码-采购订单 */
        export const BO_CODE_PURCHASEORDER: string = "${Company}_PH_PURCHORDER";
        /** 业务对象编码-采购退货 */
        export const BO_CODE_PURCHASERETURN: string = "${Company}_PH_PURCHRETURN";
        /** 业务对象编码-送货地址 */
        export const BO_CODE_SHIPPINGADDRESS: string = "${Company}_PH_SHIPADDRESS";
        /** 业务对象编码-采购报价 */
        export const BO_CODE_PURCHASEQUOTE: string = "${Company}_PH_PURCHQUOTE";
        /** 业务对象编码-采购申请 */
        export const BO_CODE_PURCHASEREQUEST: string = "${Company}_PH_PURCHREQUEST";
        /** 业务对象编码-采购贷项 */
        export const BO_CODE_PURCHASECREDITNOTE: string = "${Company}_PH_PURCHCREDIT";
        /** 业务对象编码-采购发票 */
        export const BO_CODE_PURCHASEINVOICE: string = "${Company}_PH_PURCHINVOICE";
        /** 业务对象编码-一揽子协议 */
        export const BO_CODE_BLANKETAGREEMENT: string = "${Company}_PH_BLANKETAGT";
        /** 业务对象编码-预付款申请 */
        export const BO_CODE_DOWNPAYMNETREQUEST: string = "${Company}_PH_PAYREQUEST";

        /** 运输状态 */
        export enum emShippingStatus {
            /**
             * 等待
             */
            WAITING,
            /**
             * 运输中
             */
            SHIPPING,
            /**
             * 已送达
             */
            SHIPPED,
        }
        export enum emAgreementType {
            GENERAL,
            SPECIFIC
        }

        export enum emAgreementMethod {
            ITEM,
            MONETARY
        }
    }
    export namespace app {

        /** 采购申请目标单据服务契约 */
        export interface IPurchaseRequestToContract extends ibas.IServiceContract {
            /** 采购申请内容 */
            content: bo.IPurchaseRequestItem;
            /**
             * 操作完成
             * @param result 转换数量或错误
             */
            onDone(result?: {
                documentType: string,
                docmentEntry: number,
                documentLineId?:
                number, quantity: number,
                warehouse?: string
            } | Error): void;
        }
        /** 采购申请目标单据服务代理 */
        export class PurchaseRequestToServiceProxy extends ibas.ServiceProxy<IPurchaseRequestToContract> {

        }
    }
}