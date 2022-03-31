import React from "react";

const ProductNav = () => {
  return (
    <div className="ProductNav px-2 sm:px-10  shadow-2xl sticky bg-white top-0 pb-2">
      <div className="productNav__item flex justify-between">
        <button className="flex flex-col sm:flex-row">
          <h1 className=" mr-1 sm:mr-3">Filter</h1>
          <img src={process.env.PUBLIC_URL + "../images/filter.png"} alt="" />
        </button>
        <h1 className="">Category Name</h1>
        <button className="flex flex-col sm:flex-row">
          <h1 className="mr-1 sm:mr-3">Sort</h1>
          <img src={process.env.PUBLIC_URL + "../images/filter.png"} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductNav;
