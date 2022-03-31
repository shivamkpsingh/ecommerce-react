import React from "react";
import "./Floric.css";

const Floric = ({imgUrl}) => {
  return (
        <img
          src={imgUrl}
          alt=""
          className="mr-2 w-20 h-20 "
        />
  );
};

export default Floric;
