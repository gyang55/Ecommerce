import React, { Fragment } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../context/shop.Context";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import "./shop.styles.scss";

export default function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>;
      })}
    </div>
  );
}
