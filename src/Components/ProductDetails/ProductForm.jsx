import React from 'react'

const ProductForm = () => {
    return (
        <div>
            <form action="">
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
        </form>
        </div>
    )
}

export default ProductForm
