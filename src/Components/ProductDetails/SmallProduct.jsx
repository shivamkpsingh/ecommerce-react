import React from "react";
import "./SmallProduct.css";
const SmallProduct = ({imgUrl, setImage, id}) => {
  return (
    <div className="smallProduct  mt-12 mr-2 ">
      <img
        src={imgUrl}
        alt={id}
        className="shadow bg-white"
        id={id}
        onClick={(e) => setImage(e.target.id)}
      />
    </div>
  );
};

export default SmallProduct;