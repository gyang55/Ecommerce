import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../context/shop.Context";
import "./category.styles.scss";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../component/product-card/product-card.component";
export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}
