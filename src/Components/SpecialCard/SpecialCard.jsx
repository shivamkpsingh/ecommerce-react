import React from "react";
import "./SpecialCard.css";

const SpecialCard = ({ imgUrl }) => {
  return (
    <div className="speImg mr-3 ">
      <img src={imgUrl} alt="" className="rounded-lg border object-contain shadow" />
      {/* <img src="https://cdn.shopify.com/s/files/1/1760/4649/products/KRGR-SM001-KALIKA-61005_1_353x@3x.progressive.jpg?v=1610999677" alt="" /> */}
    </div>
  );
};

export default SpecialCard;
