<div align="center">

# IBAS Purchase

**采购管理模块**

IBAS 系统的采购管理模块，提供采购申请、采购订单、采购交货、退货、贷项通知单、预留发票等全流程采购业务管理。

Purchase management module for the IBAS system — purchase requests, orders, deliveries, returns, credit notes, and reserve invoices with full procurement cycle support.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Java](https://img.shields.io/badge/Java-1.8+-orange.svg)](https://www.oracle.com/java/)
[![Maven](https://img.shields.io/badge/Maven-3.x-red.svg)](https://maven.apache.org/)
[![Version](https://img.shields.io/badge/version-0.2.0-green.svg)](pom.xml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-贡献--contributing)

</div>

---

## 📖 目录 | Table of Contents

- [✨ 特性 | Features](#-特性--features)
- [📦 模块结构 | Modules](#-模块结构--modules)
- [🚀 快速开始 | Quick Start](#-快速开始--quick-start)
- [📋 业务对象 | Business Objects](#-业务对象--business-objects)
- [📚 相关项目 | Related Projects](#-相关项目--related-projects)
- [🤝 贡献 | Contributing](#-贡献--contributing)
- [📄 许可证 | License](#-许可证--license)

---

## ✨ 特性 | Features

- **📋 采购申请** — 采购申请单（Purchase Request），支持额外明细行
- **📦 采购订单** — 采购订单（Purchase Order）管理
- **🚚 采购交货** — 采购交货单（Purchase Delivery）管理
- **↩️ 退货管理** — 采购退货申请（Purchase Return Request）管理
- **📝 贷项通知单** — 采购贷项通知单（Purchase Credit Note）管理
- **📄 预留发票** — 采购预留发票（Purchase Reserve Invoice）管理
- **📍 收货地址** — 收货地址（Shipping Address）管理

---

## 📦 模块结构 | Modules

| 模块 | 类型 | 说明 |
|------|------|------|
| `ibas.purchase` | JAR | **核心模块** — 业务对象定义、仓储层、业务逻辑 |
| `ibas.purchase.service` | WAR | **REST 服务** — Jersey 端点（DataService、FileService） |

---

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- **JDK** 1.8+
- **Maven** 3.x
- [ibas-framework](https://github.com/color-coding/ibas-framework)（BOBAS 框架）

### 构建 | Build

```bash
# 克隆仓库
git clone https://github.com/color-coding/ibas.purchase.git
cd ibas.purchase

# 编译全部模块
./compile_packages.sh            # Linux / macOS
compile_packages.bat             # Windows

# 编译单个模块
mvn clean package install -Dmaven.test.skip=true -f ibas.purchase/pom.xml

# 运行测试
mvn test -f ibas.purchase/pom.xml

# 部署
./deploy_packages.sh
```

### Maven 依赖

```xml
<dependency>
    <groupId>org.colorcoding.apps</groupId>
    <artifactId>ibas.purchase</artifactId>
    <version>0.2.0</version>
</dependency>
```

---

## 📋 业务对象 | Business Objects

| 业务对象 | 说明 |
|----------|------|
| `PurchaseRequest` / `PurchaseRequestItem` / `PurchaseRequestItemExtra` | 采购申请 |
| `PurchaseOrder` | 采购订单 |
| `PurchaseDelivery` / `PurchaseDeliveryItem` | 采购交货 |
| `PurchaseReturnRequest` / `PurchaseReturnRequestItem` | 采购退货申请 |
| `PurchaseCreditNote` / `PurchaseCreditNoteItem` | 采购贷项通知单 |
| `PurchaseReserveInvoice` / `PurchaseReserveInvoiceItem` | 采购预留发票 |
| `ShippingAddress` | 收货地址 |

---

## 📚 相关项目 | Related Projects

| 项目 | 说明 |
|------|------|
| [ibas-framework](https://github.com/color-coding/ibas-framework) | BOBAS 业务对象框架 |
| [ibas.businesspartner](https://github.com/color-coding/ibas.businesspartner) | 业务伙伴模块 |
| [ibas.materials](https://github.com/color-coding/ibas.materials) | 物料与库存模块 |
| [ibas.receiptpayment](https://github.com/color-coding/ibas.receiptpayment) | 收付款模块 |

---

## 🤝 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 发起 Pull Request

---

## 📄 许可证 | License

本项目基于 [Apache License 2.0](LICENSE) 开源。
---

## 🙏 鸣谢 | Thanks

<div align="center">

**[Color-Coding Studio](http://colorcoding.org/)** · 咔啦工作室

</div>
