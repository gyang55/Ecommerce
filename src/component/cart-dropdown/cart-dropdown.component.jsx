import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { CategoriesContext } from "../../context/shop.Context";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.scss";
export default function CartDropdown() {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Check Out</Button>
    </div>
  );
}
