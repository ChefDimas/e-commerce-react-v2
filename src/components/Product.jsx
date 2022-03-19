import React from "react";

function Product({ item }) {
  return (
    <div>
      <img src={item.src} alt="product-img" />
      <div>{/* Icons */}</div>
    </div>
  );
}

export default Product;
