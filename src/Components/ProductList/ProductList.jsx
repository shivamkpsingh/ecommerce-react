import React from "react";
import './ProductList.css'

const ProductList = ({ imgUrl }) => {
  return (
    // <div className="ProductList ">
    <div className="ProductList__card   mr-3 mt-3 shadow ">
      <img
        src={imgUrl}
        alt=""
        className=""
      />
      <p className="">$250</p>
    </div>
    // </div>
  );
};

export default ProductList;
