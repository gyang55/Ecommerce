import "./product-card.styles.scss";
import React from "react";
import Button from "../button/button.component";
import {CategoriesContext} from '../../context/shop.Context'
import { useContext } from "react";
export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const {addItemToCart}=useContext(CategoriesContext)
  const addProductToCart = ()=>addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </div>
  );
}
