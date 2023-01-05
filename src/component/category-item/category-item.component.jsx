import "./category-item.component.scss";

import React from "react";

export default function CategoryItem({ category }) {
  const { imageUrl, id, title } = category;
  return (
    <div id={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
