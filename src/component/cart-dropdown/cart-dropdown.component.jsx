import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { CategoriesContext } from "../../context/shop.Context";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

export default function CartDropdown() {
  const { cartItems, isCartOpen, setIsCartOpen } =
    useContext(CategoriesContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Check Out</Button>
    </CartDropdownContainer>
  );
}
