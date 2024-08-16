/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 业务对象仓库 */
        export class BORepositoryPurchase extends ibas.BORepositoryApplication implements IBORepositoryPurchase {

            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter;
            }

            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.upload("upload", caller);
            }
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.download("download", caller);
            }
            /**
             * 查询 采购贷项
             * @param fetcher 查询者
             */
            fetchPurchaseCreditNote(fetcher: ibas.IFetchCaller<bo.PurchaseCreditNote>): void {
                super.fetch(bo.PurchaseCreditNote.name, fetcher);
            }
            /**
             * 保存 采购贷项
             * @param saver 保存者
             */
            savePurchaseCreditNote(saver: ibas.ISaveCaller<bo.PurchaseCreditNote>): void {
                super.save(bo.PurchaseCreditNote.name, saver);
            }
            /**
             * 查询 采购发票
             * @param fetcher 查询者
             */
            fetchPurchaseInvoice(fetcher: ibas.IFetchCaller<bo.PurchaseInvoice>): void {
                super.fetch(bo.PurchaseInvoice.name, fetcher);
            }
            /**
             * 保存 采购发票
             * @param saver 保存者
             */
            savePurchaseInvoice(saver: ibas.ISaveCaller<bo.PurchaseInvoice>): void {
                super.save(bo.PurchaseInvoice.name, saver);
            }
            /**
             * 查询 采购收货
             * @param fetcher 查询者
             */
            fetchPurchaseDelivery(fetcher: ibas.IFetchCaller<bo.PurchaseDelivery>): void {
                super.fetch(bo.PurchaseDelivery.name, fetcher);
            }
            /**
             * 保存 采购收货
             * @param saver 保存者
             */
            savePurchaseDelivery(saver: ibas.ISaveCaller<bo.PurchaseDelivery>): void {
                super.save(bo.PurchaseDelivery.name, saver);
            }

            /**
             * 查询 采购订单
             * @param fetcher 查询者
             */
            fetchPurchaseOrder(fetcher: ibas.IFetchCaller<bo.PurchaseOrder>): void {
                super.fetch(bo.PurchaseOrder.name, fetcher);
            }
            /**
             * 保存 采购订单
             * @param saver 保存者
             */
            savePurchaseOrder(saver: ibas.ISaveCaller<bo.PurchaseOrder>): void {
                super.save(bo.PurchaseOrder.name, saver);
            }

            /**
             * 查询 采购退货
             * @param fetcher 查询者
             */
            fetchPurchaseReturn(fetcher: ibas.IFetchCaller<bo.PurchaseReturn>): void {
                super.fetch(bo.PurchaseReturn.name, fetcher);
            }
            /**
             * 保存 采购退货
             * @param saver 保存者
             */
            savePurchaseReturn(saver: ibas.ISaveCaller<bo.PurchaseReturn>): void {
                super.save(bo.PurchaseReturn.name, saver);
            }

            /**
             * 查询 采购报价
             * @param fetcher 查询者
             */
            fetchPurchaseQuote(fetcher: ibas.IFetchCaller<bo.PurchaseQuote>): void {
                super.fetch(bo.PurchaseQuote.name, fetcher);
            }
            /**
             * 保存 采购报价
             * @param saver 保存者
             */
            savePurchaseQuote(saver: ibas.ISaveCaller<bo.PurchaseQuote>): void {
                super.save(bo.PurchaseQuote.name, saver);
            }
            /**
             * 查询 采购申请
             * @param fetcher 查询者
             */
            fetchPurchaseRequest(fetcher: ibas.IFetchCaller<bo.PurchaseRequest>): void {
                super.fetch(bo.PurchaseRequest.name, fetcher);
            }
            /**
             * 保存 采购申请
             * @param saver 保存者
             */
            savePurchaseRequest(saver: ibas.ISaveCaller<bo.PurchaseRequest>): void {
                super.save(bo.PurchaseRequest.name, saver);
            }
            /**
             * 查询 一揽子协议
             * @param fetcher 查询者
             */
            fetchBlanketAgreement(fetcher: ibas.IFetchCaller<bo.BlanketAgreement>): void {
                super.fetch(bo.BlanketAgreement.name, fetcher);
            }
            /**
             * 保存 一揽子协议
             * @param saver 保存者
             */
            saveBlanketAgreement(saver: ibas.ISaveCaller<bo.BlanketAgreement>): void {
                super.save(bo.BlanketAgreement.name, saver);
            }
            /**
             * 查询 预付款申请
             * @param fetcher 查询者
             */
            fetchDownPaymentRequest(fetcher: ibas.IFetchCaller<bo.DownPaymentRequest>): void {
                super.fetch(bo.DownPaymentRequest.name, fetcher);
            }
            /**
             * 保存 预付款申请
             * @param saver 保存者
             */
            saveDownPaymentRequest(saver: ibas.ISaveCaller<bo.DownPaymentRequest>): void {
                super.save(bo.DownPaymentRequest.name, saver);
            }
            /**
             * 查询 采购预留发票
             * @param fetcher 查询者
             */
            fetchPurchaseReserveInvoice(fetcher: ibas.IFetchCaller<bo.PurchaseReserveInvoice>): void {
                super.fetch(bo.PurchaseReserveInvoice.name, fetcher);
            }
            /**
             * 保存 采购预留发票
             * @param saver 保存者
             */
            savePurchaseReserveInvoice(saver: ibas.ISaveCaller<bo.PurchaseReserveInvoice>): void {
                super.save(bo.PurchaseReserveInvoice.name, saver);
            }
            /**
             * 查询 采购退货请求
             * @param fetcher 查询者
             */
            fetchPurchaseReturnRequest(fetcher: ibas.IFetchCaller<bo.PurchaseReturnRequest>): void {
                super.fetch(bo.PurchaseReturnRequest.name, fetcher);
            }
            /**
             * 保存 采购退货请求
             * @param saver 保存者
             */
            savePurchaseReturnRequest(saver: ibas.ISaveCaller<bo.PurchaseReturnRequest>): void {
                super.save(bo.PurchaseReturnRequest.name, saver);
            }

        }
    }
}