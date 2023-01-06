import "./checkout.styles.scss";

import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../context/shop.Context";
import CheckoutItem from "../../context/checkout-item/checkout-item.component";

export default function Checkout() {
  const { cartItems,cartTotal } = useContext(CategoriesContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return <CheckoutItem key={id} cartItem={cartItem} />;
      })}
      <span className="total">Total: CAD${cartTotal}</span>
    </div>
  );
}
