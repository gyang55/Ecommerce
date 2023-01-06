import "./cart-icon.styles.scss";
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CategoriesContext } from "../../context/shop.Context";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CategoriesContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
