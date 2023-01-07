
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CategoriesContext } from "../../context/shop.Context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CategoriesContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
