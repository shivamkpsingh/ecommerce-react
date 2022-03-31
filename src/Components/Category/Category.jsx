import React from "react";
import topCatData from "../../Json/topCatData";
import CategoryCard from "../CategoryCard/CategoryCard";
import Merchant from "../Merchant/Merchant";
import merchantData from "../../Json/merchantData";
import "./Category.css";
const Category = () => {
  return (
    <div className="category flex flex-col sm:flex-row w-full px-2 h-full  lg:px-10 mt-8 z-10">
      <div className="categoryLeft w-full sm:w-4/6 md:w-5/6   ">
        <h1 className="text-center text-2xl">Top Category in your location</h1>
        <div className="categoryLeft__up flex  mt-4   overflow-x-scroll    z-30 ">
          {topCatData.map((props) => {
            return (
              <div className="" key={props.id}>
                <CategoryCard imgUrl={props.img} key={props.id} />
              </div>
            );
          })}
        </div>
        <div className="categoryLeft__down  mt-4 ">
          <img
            // src={process.env.PUBLIC_URL + "../images/banner1.png"}
            src="https://i2.wp.com/www.thehlabel.com/wp-content/uploads/2020/04/Saree-Banner.jpg?fit=1583%2C674&ssl=1"
            alt=""
            className=" rounded-lg"
          />
        </div>
      </div>
      <div className="CategoryRight mt-5 sm:mt-0 overflow-x-scroll sm:overflow-y-scroll w-full sm:ml-10 sm:w-2/6 md:w-1/6">
        <h1 className="text-center sticky top-0 z-10 bg-white">
          Our Top merchant
        </h1>
        <div className="merchant flex   sm:items-center sm:justify-center sm:flex-col   overflow-x-scroll   ">
          {merchantData.map((props) => {
            return <Merchant imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
