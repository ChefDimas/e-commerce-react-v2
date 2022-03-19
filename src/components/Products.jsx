import React from "react";
import { TopProductsApi } from "../api/TopProductsApi";
import Product from "./Product";

function Products() {
  return (
    <div>
      {TopProductsApi.map((product, index) => {
        return <Product item={product} key={index} />;
      })}
    </div>
  );
}

export default Products;
