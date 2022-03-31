import React from "react";
import "./Pic.css";
const Pic = ({ imgUrl }) => {
  return (
    <div className="">
    <div className="pic mr-2 rounded-xl cursor-pointer">
      <img
        src={imgUrl}
        alt=""
        className="object-contain rounded-xl"
      />
    </div>
    </div>
  );
};

export default Pic;
