import React, { Fragment } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../context/shop.Context";
import CategoryPreview from "../../component/category-preview/category-preview.component";


export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>;
      })}
    </Fragment>
  );
}
