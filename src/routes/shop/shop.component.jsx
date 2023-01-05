import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/shop.Context";
import ProductCard from "../../component/product-card/product-card.component";
import './shop.styles.scss'

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-containers">
      {products.map(( product ) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
