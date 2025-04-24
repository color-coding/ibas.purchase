package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.bobas.repository.ITransaction;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

public abstract class PurchaseFetcher<T extends IDocumentOperatingTarget> implements IDocumentFetcher<T> {

	private BORepositoryPurchase repository;

	protected BORepositoryPurchase getRepository() {
		if (this.repository == null) {
			this.repository = new BORepositoryPurchase();
		}
		return this.repository;
	}

	@Override
	public void setTransaction(ITransaction transaction) {
		this.getRepository().setTransaction(transaction);
	}

	protected String userToken() {
		return OrganizationFactory.SYSTEM_USER.getToken();
	}
}
