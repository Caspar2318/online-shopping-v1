import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <div className="shop">
      <div
        className="shopTitile"
        style={{ marginTop: "100px", textAlign: "center", fontSize: "40px" }}
      >
        <h1>Cas' Online Space</h1>
      </div>
      <div
        className="products"
        style={{
          width: "100%",
          height: "auto",
          display: "grid",
          gridTemplateColums: "1fr 1fr 1fr",
          placeItems: "center",
        }}
      >
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
