package com.mastek.cart.model;

public class CartItems {


private String itemName;
private int quantity;
private double itemPrice;
public CartItems() {
	super();
	// TODO Auto-generated constructor stub
}
public CartItems(String itemName, int quantity, double itemPrice) {
	super();
	this.itemName = itemName;
	this.quantity = quantity;
	this.itemPrice = itemPrice;
}
public String getItemName() {
	return itemName;
}
public void setItemName(String itemName) {
	this.itemName = itemName;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
public double getItemPrice() {
	return itemPrice;
}
public void setItemPrice(double itemPrice) {
	this.itemPrice = itemPrice;
}
@Override
public String toString() {
	return "CartItems [itemName=" + itemName + ", quantity=" + quantity + ", itemPrice=" + itemPrice + "]";
}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((itemName == null) ? 0 : itemName.hashCode());
	long temp;
	temp = Double.doubleToLongBits(itemPrice);
	result = prime * result + (int) (temp ^ (temp >>> 32));
	result = prime * result + quantity;
	return result;
}
@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	CartItems other = (CartItems) obj;
	if (itemName == null) {
		if (other.itemName != null)
			return false;
	} else if (!itemName.equals(other.itemName))
		return false;
	if (Double.doubleToLongBits(itemPrice) != Double.doubleToLongBits(other.itemPrice))
		return false;
	if (quantity != other.quantity)
		return false;
	return true;
}

}

