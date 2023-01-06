import "./category-preview.styles.scss";
import React from "react";
import ProductCard from "../product-card/product-card.component";
export default function CategoryPreview({ title, products }) {

  return (
    <div className="category-preview-container ">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
          products
           
            .map((product,index) => {
              if(index<4){
                return  <ProductCard key={product.id} product={product} />;
              }  
          })}
      </div>
    </div>
  );
}
