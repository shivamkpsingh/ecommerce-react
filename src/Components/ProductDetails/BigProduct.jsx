import React from "react";
import "./BigProduct.css";

const BigProduct = ({displayImage}) => {
  return (
    <img
      src={displayImage}
      alt=""
      className="bigProduct w-full object-contain shadow-2xl"
    />
  );
};

export default BigProduct;
