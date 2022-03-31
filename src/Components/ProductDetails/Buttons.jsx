import React from 'react'

const Buttons = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5 sm:mt-0  sm:ml-5">
            <button className="flex bg-yellow-300 px-2 lg:px-8 py-3 shadow-lg  rounded-md font-light">
                PLACE ORDER 
                <img src={process.env.PUBLIC_URL + "../images/cart.png"} alt="" className="ml-3" />
            </button>
            <button className=" bg-red-400 px-3 lg:px-10 shadow-2xl py-3 mt-3 sm:mt-6 rounded-md font-light">
                VIRTUAL TRYON
            </button>
        </div>
    )
}

export default Buttons
