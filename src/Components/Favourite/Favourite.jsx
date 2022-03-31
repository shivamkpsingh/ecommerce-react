import React from "react";
import CartItem from "../Cart/CartItem";

const Favourite = () => {
  return (
    <div className="">
      <h1 className="text-2xl tracking-widest text-center mt-10">Favourites</h1>
      <div className="lg:px-10 px-4">
        <CartItem />
        <CartItem />
      </div>
      <div className="lg:px-10 px-4">
        <button className="bg-yellow-300 px-10 text-xl font-light mt-4 shadow-xl py-2 ml-auto block">
          Go To Cart
        </button>
      </div>
      <h1 className="text-2xl tracking-widest text-center mt-10">Save For Later</h1>
      <div className="lg:px-10 px-4">
        <CartItem />
        <CartItem />
      </div>
      <div className="lg:px-10 px-4">
        <button className="bg-yellow-300 px-10 text-xl font-light mt-4 shadow-xl py-2 ml-auto block mb-10">
          Go To Cart
        </button>
      </div>
    </div>
  );
};

export default Favourite;
