import React from "react";
import "./Color.css";
const Color = ({imgUrl}) => {
  return (
    <img
      src={imgUrl}
      alt=""
      className="mr-2 h-20 w-20"
    />
  );
};

export default Color;
