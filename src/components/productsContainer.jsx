import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";

function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="products row justify-content-between flex-wrap  gap-3 row-gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
