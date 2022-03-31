import React, { useState }  from 'react'

const CartItem = () => {
    const [totalItem, setTotalItem] = useState(1);
    const [totalAmont] = useState(100);
    const Decrement = () => {
      setTotalItem(totalItem - 1);
    };
    const Increment = () => {
      setTotalItem(totalItem + 1);
    };
    return (
        <div className="firstDiv flex mt-5 mb-10 justify-between">
        <div className="subFirstDiv flex">
          <img
            // src={process.env.PUBLIC_URL + "../images/cartImg.png"}
            src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Pick-Any-1-Kanjeevaram-Inspired-South-Silk-Saree-2.jpg"
            alt=""
            className="cart__img"
          />
          <div className="p-4">
            <div className="">
              <h1 className="md:text-lg xl:text-2xl font-light">
                Round Neck Women Blouse
              </h1>
              <button className="discount__button px-2 py-1 outline-none mt-3 rounded">
                discounts / price / free delivery
              </button>
              <button className="text-red-600 ml-10">Remove item</button>
            </div>
            <div className="flex mt-14">
              <button className="text-blue-500">Save For Later</button>
              <button className="flex ml-10 items-center">
                <img
                  src={process.env.PUBLIC_URL + "../images/gift.png"}
                  alt=""
                  className="mr-3"
                />
                <h1 className="text-yellow-800">Gift wrap it</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="subSecondDiv flex flex-col justify-between p-5 items-center">
          <div className="">
            <input
              type="text"
              placeholder="select profile"
              className="login__input outline-none px-4  py-2 bg-gray-400  text-center   text-white"
            />
          </div>
          <div className="flex  items-center mb-9">
            <button
              onClick={Decrement}
              className="bg-gray-400 px-4 py-2 mr-5"
            >
              -
            </button>
            <h1>{totalItem}</h1>
            <button
              onClick={Increment}
              className="bg-gray-400 px-4 py-2 ml-5"
            >
              +
            </button>
          </div>
        </div>
        <div className="subThirdDiv mt-7  ml-10">
          <h1 className="font-light">USD {totalItem * totalAmont}</h1>
        </div>
      </div>
    )
}

export default CartItem
