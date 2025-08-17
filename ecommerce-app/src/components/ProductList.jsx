import React from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          productname={product.productname}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
