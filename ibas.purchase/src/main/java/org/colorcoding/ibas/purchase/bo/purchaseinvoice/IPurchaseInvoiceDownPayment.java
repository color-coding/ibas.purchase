package org.colorcoding.ibas.purchase.bo.purchaseinvoice;

import java.math.*;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.data.*;

/**
* 采购发票-预付款 接口
* 
*/
public interface IPurchaseInvoiceDownPayment extends IBODocumentLine {

    /**
    * 获取-凭证编号
    * 
    * @return 值
    */
    Integer getDocEntry();

    /**
    * 设置-凭证编号
    * 
    * @param value 值
    */
    void setDocEntry(Integer value);


    /**
    * 获取-行号
    * 
    * @return 值
    */
    Integer getLineId();

    /**
    * 设置-行号
    * 
    * @param value 值
    */
    void setLineId(Integer value);


    /**
    * 获取-显示顺序
    * 
    * @return 值
    */
    Integer getVisOrder();

    /**
    * 设置-显示顺序
    * 
    * @param value 值
    */
    void setVisOrder(Integer value);


    /**
    * 获取-类型
    * 
    * @return 值
    */
    String getObjectCode();

    /**
    * 设置-类型
    * 
    * @param value 值
    */
    void setObjectCode(String value);


    /**
    * 获取-实例号（版本）
    * 
    * @return 值
    */
    Integer getLogInst();

    /**
    * 设置-实例号（版本）
    * 
    * @param value 值
    */
    void setLogInst(Integer value);


    /**
    * 获取-数据源
    * 
    * @return 值
    */
    String getDataSource();

    /**
    * 设置-数据源
    * 
    * @param value 值
    */
    void setDataSource(String value);


    /**
    * 获取-状态
    * 
    * @return 值
    */
    emBOStatus getStatus();

    /**
    * 设置-状态
    * 
    * @param value 值
    */
    void setStatus(emBOStatus value);


    /**
    * 获取-单据状态
    * 
    * @return 值
    */
    emDocumentStatus getLineStatus();

    /**
    * 设置-单据状态
    * 
    * @param value 值
    */
    void setLineStatus(emDocumentStatus value);


    /**
    * 获取-创建日期
    * 
    * @return 值
    */
    DateTime getCreateDate();

    /**
    * 设置-创建日期
    * 
    * @param value 值
    */
    void setCreateDate(DateTime value);


    /**
    * 获取-创建时间
    * 
    * @return 值
    */
    Short getCreateTime();

    /**
    * 设置-创建时间
    * 
    * @param value 值
    */
    void setCreateTime(Short value);


    /**
    * 获取-修改日期
    * 
    * @return 值
    */
    DateTime getUpdateDate();

    /**
    * 设置-修改日期
    * 
    * @param value 值
    */
    void setUpdateDate(DateTime value);


    /**
    * 获取-修改时间
    * 
    * @return 值
    */
    Short getUpdateTime();

    /**
    * 设置-修改时间
    * 
    * @param value 值
    */
    void setUpdateTime(Short value);


    /**
    * 获取-创建用户
    * 
    * @return 值
    */
    Integer getCreateUserSign();

    /**
    * 设置-创建用户
    * 
    * @param value 值
    */
    void setCreateUserSign(Integer value);


    /**
    * 获取-修改用户
    * 
    * @return 值
    */
    Integer getUpdateUserSign();

    /**
    * 设置-修改用户
    * 
    * @param value 值
    */
    void setUpdateUserSign(Integer value);


    /**
    * 获取-创建动作标识
    * 
    * @return 值
    */
    String getCreateActionId();

    /**
    * 设置-创建动作标识
    * 
    * @param value 值
    */
    void setCreateActionId(String value);


    /**
    * 获取-更新动作标识
    * 
    * @return 值
    */
    String getUpdateActionId();

    /**
    * 设置-更新动作标识
    * 
    * @param value 值
    */
    void setUpdateActionId(String value);


    /**
    * 获取-参考1
    * 
    * @return 值
    */
    String getReference1();

    /**
    * 设置-参考1
    * 
    * @param value 值
    */
    void setReference1(String value);


    /**
    * 获取-参考2
    * 
    * @return 值
    */
    String getReference2();

    /**
    * 设置-参考2
    * 
    * @param value 值
    */
    void setReference2(String value);


    /**
    * 获取-预付款类型
    * 
    * @return 值
    */
    String getPaymentType();

    /**
    * 设置-预付款类型
    * 
    * @param value 值
    */
    void setPaymentType(String value);


    /**
    * 获取-预付款编号
    * 
    * @return 值
    */
    Integer getPaymentEntry();

    /**
    * 设置-预付款编号
    * 
    * @param value 值
    */
    void setPaymentEntry(Integer value);


    /**
    * 获取-预付款行号
    * 
    * @return 值
    */
    Integer getPaymentLineId();

    /**
    * 设置-预付款行号
    * 
    * @param value 值
    */
    void setPaymentLineId(Integer value);


    /**
    * 获取-预付款总计
    * 
    * @return 值
    */
    BigDecimal getPaymentTotal();

    /**
    * 设置-预付款总计
    * 
    * @param value 值
    */
    void setPaymentTotal(BigDecimal value);


    /**
    * 获取-预付款货币
    * 
    * @return 值
    */
    String getPaymentCurrency();

    /**
    * 设置-预付款货币
    * 
    * @param value 值
    */
    void setPaymentCurrency(String value);


    /**
    * 获取-预付款汇率
    * 
    * @return 值
    */
    BigDecimal getPaymentRate();

    /**
    * 设置-预付款汇率
    * 
    * @param value 值
    */
    void setPaymentRate(BigDecimal value);


    /**
    * 获取-提取金额
    * 
    * @return 值
    */
    BigDecimal getDrawnTotal();

    /**
    * 设置-提取金额
    * 
    * @param value 值
    */
    void setDrawnTotal(BigDecimal value);


    /**
    * 获取-基于类型
    * 
    * @return 值
    */
    String getBaseDocumentType();

    /**
    * 设置-基于类型
    * 
    * @param value 值
    */
    void setBaseDocumentType(String value);


    /**
    * 获取-基于标识
    * 
    * @return 值
    */
    Integer getBaseDocumentEntry();

    /**
    * 设置-基于标识
    * 
    * @param value 值
    */
    void setBaseDocumentEntry(Integer value);


    /**
    * 获取-基于行号
    * 
    * @return 值
    */
    Integer getBaseDocumentLineId();

    /**
    * 设置-基于行号
    * 
    * @param value 值
    */
    void setBaseDocumentLineId(Integer value);


    /**
    * 获取-原始类型
    * 
    * @return 值
    */
    String getOriginalDocumentType();

    /**
    * 设置-原始类型
    * 
    * @param value 值
    */
    void setOriginalDocumentType(String value);


    /**
    * 获取-原始标识
    * 
    * @return 值
    */
    Integer getOriginalDocumentEntry();

    /**
    * 设置-原始标识
    * 
    * @param value 值
    */
    void setOriginalDocumentEntry(Integer value);


    /**
    * 获取-原始行号
    * 
    * @return 值
    */
    Integer getOriginalDocumentLineId();

    /**
    * 设置-原始行号
    * 
    * @param value 值
    */
    void setOriginalDocumentLineId(Integer value);



}
