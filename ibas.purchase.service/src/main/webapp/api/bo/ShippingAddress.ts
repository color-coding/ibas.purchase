/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 送货地址 */
        export interface IShippingAddress extends ibas.IBOSimple, ibas.IBOUserFields {

            /** 基于类型 */
            baseDocumentType: string;

            /** 基于标识 */
            baseDocumentEntry: number;

            /** 名称 */
            name: string;

            /** 顺序 */
            order: number;

            /** 送货状态 */
            shippingStatus: emShippingStatus;

            /** 收货人 */
            consignee: string;

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

            /** 联系电话 */
            mobilePhone: string;

            /** 电话  */
            telephone: string;

            /** 备注 1 */
            remark1: string;

            /** 备注 2 */
            remark2: string;

            /** 费用 */
            expense: number;

            /** 货币 */
            currency: string;

            /** 汇率 */
            rate: number;

            /** 快递单号 */
            trackingNumber: string;

            /** 税定义 */
            tax: string;

            /** 税率 */
            taxRate: number;

            /** 税总额 */
            taxTotal: number;

            /** 税前费用 */
            preTaxExpense: number;

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

            /** 来源编号 */
            sourceKey: number;

        }


        /** 送货地址 集合 */
        export interface IShippingAddresss extends ibas.IBusinessObjects<IShippingAddress> {

            /** 创建并添加子项 */
            create(): IShippingAddress;
        }
    }
}