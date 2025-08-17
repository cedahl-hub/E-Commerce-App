import React from "react";
import "./ProductList";
import "./ProductItem.css";

function ProductItem({ productname, price, description, image }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className="product-item">
      <h2>{productname}</h2>
      <img src={image} alt={productname} className="product-image" />
      <p className="price">{formattedPrice}</p>
      <p className="description">
        {description || "No description available."}
      </p>
    </div>
  );
}

export default ProductItem;
