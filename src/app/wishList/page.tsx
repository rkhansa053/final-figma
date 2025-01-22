"use client";
import React, { useState } from "react";

const ProductsPage = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToWishlist = (item: string) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const products = ["Product 1", "Product 2", "Product 3"];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
