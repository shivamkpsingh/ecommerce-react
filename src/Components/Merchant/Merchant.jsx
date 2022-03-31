import React from "react";
import "./Merchant.css";

const Merchant = ({ imgUrl }) => {
  return (
    <div className="">
      <div className=" merchant__box__1 sm:w-full flex flex-col  items-center mt-4  ">
        <img src={imgUrl} alt="" className="" />
        <p className="">⭐</p>
      </div>
    </div>
  );
};

export default Merchant;
