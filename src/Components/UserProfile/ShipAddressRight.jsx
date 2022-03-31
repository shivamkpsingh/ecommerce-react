import React from "react";
import { Link } from "react-router-dom";
import "./ShipAddress.css";

const ShipAddressRight = () => {
  return (
    <div className="userProfile__right px-10 mt-10">
      <h1 className=" text-3xl tracking-widest text-center font-light">
        Shiping Address List
      </h1>
      <div className="flex mt-10   justify-around">
        <div className="w-1/3">
          <h1 className="text-center text-xl font-light">Saved Address List</h1>
          <div className="mt-8">
            <form action="">
              <div className="flex items-center justify-between">
                <img src={process.env.PUBLIC_URL + "../images/cr.png"} alt="" />
                <label htmlFor="home" className="text-lg tracking-widest">
                  Home
                </label>
                <input type="radio" name="address" id="home" value="home" />
              </div>
              <div className="flex items-center justify-between">
                <img src={process.env.PUBLIC_URL + "../images/cr.png"} alt="" />
                <label htmlFor="office" className=" text-lg tracking-widest">
                  Office
                </label>
                <input type="radio" name="address" id="office" value="office" />
              </div>
              <div className="flex items-center justify-between">
                <img src={process.env.PUBLIC_URL + "../images/cr.png"} alt="" />
                <label htmlFor="relative" className="text-lg tracking-widest">
                  Relatives
                </label>
                <input
                  type="radio"
                  name="address"
                  id="relative"
                  value="relative"
                />
              </div>
              <div className="flex items-center justify-between">
                <img src={process.env.PUBLIC_URL + "../images/cr.png"} alt="" />
                <label htmlFor="friend" className="text-lg tracking-widest">
                  Friend
                </label>
                <input type="radio" name="address" id="friend" value="friend" />
              </div>
              
              <button className="bg-gray-400  text-center mx-auto block w-52 mt-8 py-2 rounded-full text-white">
                Continue
              </button>
              <Link>
                <button className="bg-gray-400 mx-auto block w-52 mt-8 py-2 rounded-full text-white">
                  New
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="w-1/3 ">
          <form action="">
            <div className="shipaddress w-full">
              <input
                type="text"
                placeholder="Location Name "
                className="outline-none bg-gray-400 border-none rounded-full text-white tracking-widest w-full py-2 px-5 font-light"
              />
              <input
                type="text"
                placeholder="Country "
                className="outline-none bg-gray-400 border-none rounded-full text-white tracking-widest w-full py-2 px-5 font-light mt-6"
              />
              <input
                type="text"
                placeholder="Street Address "
                className="outline-none bg-gray-400 border-none rounded-full text-white tracking-widest w-full py-2 px-5 font-light mt-3"
              />
              <input
                type="text"
                placeholder="Flat Num "
                className="outline-none bg-gray-400 border-none rounded-full text-white tracking-widest w-full py-2 px-5 font-light mt-3"
              />
              <div className="flex">
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="bg-gray-400 outline-none border-none font-light tracking-widest  text-white py-2 px-5 rounded-full mt-3 w-1/2 "
                />
                <input
                  type="text"
                  placeholder="city"
                  className="bg-gray-400 outline-none font-light border-none tracking-widest  text-white py-2 px-5 rounded-full mt-3 ml-2 w-1/2 "
                />
              </div>
              <input
                type="text"
                placeholder="State"
                className="outline-none bg-gray-400 border-none rounded-full text-white tracking-widest w-full py-2 px-5 font-light mt-3"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="categoryLeft__down  mt-10 mb-4 ">
        <img
          src="https://i2.wp.com/www.thehlabel.com/wp-content/uploads/2020/04/Saree-Banner.jpg?fit=1583%2C674&ssl=1"
          alt=""
          className=" rounded-lg"
        />
      </div>
    </div>
  );
};

export default ShipAddressRight;
