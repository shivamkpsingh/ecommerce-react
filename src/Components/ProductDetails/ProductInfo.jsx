import React from "react";
import ProductForm from "./ProductForm";

const ProductInfo = () => {
  return (
    <div className="productInfo">
      <div className="pt-4 lg:pt-5 sm:pr-4">
        <h1 className="md:text-lg xl:text-2xl font-light">Round Neck Women Blouse</h1>
        <span className="font-bold sm:mt-2   text-lg inline-block">
          US$ 1,255.00
        </span>
        <small className="ml-5">Local taxes included</small>
        <div className="flex mt-3">
          <p>52 sales / 18</p>
          <div className="flex">
            <p> ⭐ ⭐ ⭐ ⭐</p>
            <small>4.9</small>
          </div>
        </div>
        <button className=" bg-red-300 px-2 py-1 outline-none mt-3 rounded">
          discounts / price / free delivery
        </button>
      </div>
      <div className="mt-5">
        {/* <form action="">
          <div className="flex flex-col pr-2  w-full">
            <div className="flex items-center w-full">
              <label htmlFor="" className="w-1/5">
                Measurment Profile
              </label>
              <input
                type="text"
                placeholder="Profile Name"
                className=" bg-gray-300 outline-none py-2 px-4 rounded-lg  w-full md:w-2/3 ml-10"
              />
            </div>
            <div className="flex sm:mt-2 md:mt-4 items-center">
              <label htmlFor="" className="w-1/5 ">
                Neck Type
              </label>
              <input
                type="text"
                placeholder="Round Nick Type"
                className=" bg-gray-300 outline-none py-2 px-4 rounded-lg w-full md:w-2/3"
              />
            </div>
            <div className="flex sm:mt-2 md:mt-4 items-center">
              <label htmlFor="" className="w-1/5">
                Sleeve Length
              </label>
              <input
                type="text"
                placeholder="Long Sleeve"
                className=" bg-gray-300 outline-none py-2 px-4 rounded-lg w-full md:w-2/3"
              />
            </div>
            <div className="flex sm:mt-2 md:mt-4 items-center">
              <label htmlFor="" className="w-1/5">
                Back Length
              </label>
              <input
                type="text"
                placeholder="Long"
                className=" bg-gray-300 outline-none py-2 px-4 rounded-lg w-full md:w-2/3"
              />
            </div>
          </div>
        </form> */}
        <ProductForm/>
      </div>
    </div>
  );
};

export default ProductInfo;
