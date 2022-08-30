package org.colorcoding.ibas.purchase.bo.blanketagreement;

import java.math.*;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.data.*;

/**
* 一揽子协议-项目 接口
* 
*/
public interface IBlanketAgreementItem extends IBODocumentLine {

    /**
    * 获取-编码
    * 
    * @return 值
    */
    Integer getDocEntry();

    /**
    * 设置-编码
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
    * 获取-取消
    * 
    * @return 值
    */
    emYesNo getCanceled();

    /**
    * 设置-取消
    * 
    * @param value 值
    */
    void setCanceled(emYesNo value);


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
    * 获取-已引用
    * 
    * @return 值
    */
    emYesNo getReferenced();

    /**
    * 设置-已引用
    * 
    * @param value 值
    */
    void setReferenced(emYesNo value);


    /**
    * 获取-已删除
    * 
    * @return 值
    */
    emYesNo getDeleted();

    /**
    * 设置-已删除
    * 
    * @param value 值
    */
    void setDeleted(emYesNo value);


    /**
    * 获取-产品编号
    * 
    * @return 值
    */
    String getItemCode();

    /**
    * 设置-产品编号
    * 
    * @param value 值
    */
    void setItemCode(String value);


    /**
    * 获取-产品/服务描述
    * 
    * @return 值
    */
    String getItemDescription();

    /**
    * 设置-产品/服务描述
    * 
    * @param value 值
    */
    void setItemDescription(String value);


    /**
    * 获取-产品标识
    * 
    * @return 值
    */
    String getItemSign();

    /**
    * 设置-产品标识
    * 
    * @param value 值
    */
    void setItemSign(String value);


    /**
    * 获取-数量
    * 
    * @return 值
    */
    BigDecimal getQuantity();

    /**
    * 设置-数量
    * 
    * @param value 值
    */
    void setQuantity(BigDecimal value);


    /**
    * 获取-单位
    * 
    * @return 值
    */
    String getUOM();

    /**
    * 设置-单位
    * 
    * @param value 值
    */
    void setUOM(String value);


    /**
    * 获取-价格
    * 
    * @return 值
    */
    BigDecimal getPrice();

    /**
    * 设置-价格
    * 
    * @param value 值
    */
    void setPrice(BigDecimal value);


    /**
    * 获取-货币
    * 
    * @return 值
    */
    String getCurrency();

    /**
    * 设置-货币
    * 
    * @param value 值
    */
    void setCurrency(String value);


    /**
    * 获取-汇率
    * 
    * @return 值
    */
    BigDecimal getRate();

    /**
    * 设置-汇率
    * 
    * @param value 值
    */
    void setRate(BigDecimal value);


    /**
    * 获取-行总计
    * 
    * @return 值
    */
    BigDecimal getLineTotal();

    /**
    * 设置-行总计
    * 
    * @param value 值
    */
    void setLineTotal(BigDecimal value);


    /**
    * 获取-已清数量
    * 
    * @return 值
    */
    BigDecimal getClosedQuantity();

    /**
    * 设置-已清数量
    * 
    * @param value 值
    */
    void setClosedQuantity(BigDecimal value);


    /**
    * 获取-已清金额
    * 
    * @return 值
    */
    BigDecimal getClosedAmount();

    /**
    * 设置-已清金额
    * 
    * @param value 值
    */
    void setClosedAmount(BigDecimal value);


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



}
