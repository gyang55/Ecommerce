import React from "react";
import { useContext } from "react";

import Button from "../button/button.component";
import { ProductsContext } from "../../context/shop.Context";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.scss";
export default function CartDropdown() {
  const { cartItems } = useContext(ProductsContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button >Check Out</Button>
    </div>
  );
}
