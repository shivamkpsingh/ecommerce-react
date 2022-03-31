import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
 
  return (
    <div className=" mt-10">
      <h1 className="text-center text-3xl font-medium tracking-widest">Cart</h1>
      <div className="main__div flex px-4 lg:px-10">
        <div className=" w-3/5  flex flex-col">
          <CartItem/>
          <CartItem/>
        </div>
        <div className="secondDiv w-2/5  flex flex-col items-center">
          <p className="text-xl">
            Total items : <small className="ml-5 text-green-400 font-light tracking-widest">1250 USD</small>
          </p>
          <p className="text-xl mt-4">
            Delivery : <small className="ml-5 font-light text-green-400">free</small>
          </p>
          <div className="mt-4">
            <form action="">
                <small className="text-lg">Apply Cuppon Code</small>
                <input type="text" name="" id=""  className=" bg-gray-200 tracking-widest mx-2 outline-none"/>
                <button className=" bg-gray-500 text-white px-5 tracking-widest py-1 mr-2">Apply  </button>
                :
                <small className="ml-7 text-md">255 USD off</small>
            </form>
          </div>
          <p className="mt-4 text-xl">Grand Total :  <small className="ml-5 text-green-400 tracking-widest">1000.00 USD</small></p>
          <button className="bg-yellow-300 px-10 text-xl font-light mt-4 shadow-xl py-2">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
