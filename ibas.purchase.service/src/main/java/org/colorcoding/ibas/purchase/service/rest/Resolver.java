package org.colorcoding.ibas.purchase.service.rest;

import javax.ws.rs.Produces;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;

import org.colorcoding.ibas.bobas.bo.UserFieldProxy;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.purchase.bo.purchasecreditnote.PurchaseCreditNote;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.PurchaseInvoice;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.bo.shippingaddress.ShippingAddress;

/**
 * 序列化解释器
 */
@Provider
@Produces({ "application/json" })
public class Resolver implements ContextResolver<JAXBContext> {

	private static JAXBContext jaxbContext = null;

	public JAXBContext getContext(Class<?> type) {
		try {
			if (jaxbContext == null) {
				jaxbContext = JAXBContext.newInstance(Criteria.class, OperationResult.class, UserFieldProxy.class,
						PurchaseDelivery.class, PurchaseOrder.class, PurchaseReturn.class, PurchaseQuote.class,
						ShippingAddress.class, PurchaseCreditNote.class, PurchaseInvoice.class);
			}
		} catch (JAXBException e) {
			e.printStackTrace();
		}
		return jaxbContext;
	}

}
