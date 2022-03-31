import React from "react";

const CustomeInfo = () => {
  return (
    <div className="customInfo">
      <h1 className="md:text-lg xl:text-2xl font-light">
        Round Neck Women Blouse
      </h1>
      <span className="font-bold sm:mt-2   text-lg inline-block">
        US$ 1,255.00
      </span>
      <span className="ml-4">Local taxes include</span>

      <button className="ml-auto  text-red-500 mt-3 flex item center">
        <img src={process.env.PUBLIC_URL + "../images/reset.png"} alt="" />
        reset
      </button>
      <div className="flex  items-center flex-wrap">
        <button className=" bg-red-200 px-2 py-1 outline-none mt-3 rounded">
          discounts / price / free delivery
        </button>
        <a href="/no" className="ml-5 mt-3">
          Measurement Profile
        </a>
        <a href="/yes" className="bg-gray-300 ml-5 px-4 py-2 rounded mt-3">
          Person Profile
        </a>
      </div>
    </div>
  );
};

export default CustomeInfo;
