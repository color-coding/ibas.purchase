package org.colorcoding.ibas.purchase.logic.journalentry;

import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialInventory;
import org.colorcoding.ibas.materials.bo.materialinventory.IMaterialInventoryJournal;
import org.colorcoding.ibas.materials.bo.materialinventory.MaterialInventory;
import org.colorcoding.ibas.materials.logic.journalentry.MaterialReceiptReverse;
import org.colorcoding.ibas.purchase.bo.purchaseinvoice.IPurchaseInvoiceItem;

public class PurchaseInvoiceMaterialsCost extends MaterialReceiptReverse {

	public PurchaseInvoiceMaterialsCost(Object sourceData) {
		super(sourceData);
	}

	@Override
	public void caculate() {
		if (this.getSourceData() instanceof IPurchaseInvoiceItem) {
			IPurchaseInvoiceItem item = (IPurchaseInvoiceItem) this.getSourceData();
			IMaterialInventory inventory = null;
			IMaterialInventoryJournal inventoryJournal = this.getMaterialJournal(item.getObjectCode(),
					item.getDocEntry(), item.getLineId());
			if (inventoryJournal != null) {
				inventory = new MaterialInventory();
				inventory.setItemCode(inventoryJournal.getItemCode());
				inventory.setOnHand(inventoryJournal.getInventoryQuantity());
				inventory.setAvgPrice(inventoryJournal.getCalculatedPrice());
				inventory.setInventoryValue(inventoryJournal.getInventoryValue());
			} else {
				inventory = this.getMaterialInventory(item.getItemCode(), item.getWarehouse());
			}
			if (inventory.getOnHand().compareTo(item.getQuantity()) <= 0
					|| inventory.getInventoryValue().compareTo(this.getAmount().abs()) < 0) {
				this.setAmount(inventory.getInventoryValue().negate());
			}
		}
	}
}
