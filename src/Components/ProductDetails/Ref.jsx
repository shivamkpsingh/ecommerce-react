import React from "react";

const Ref = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div className=" w-full">
        <form action="">
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Add Notes If Any"
            className="bg-gray-300 w-full resize-none outline-none px-4 py-4"
          ></textarea>
          <div className="flex flex-col sm:flex-row mt-4 sm:mt-0 sm:justify-between items-center">
            <div className="flex flex-col">
              <div className="">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="ml-6">
                  Do you have fabric ? Stich with your Fabric ?
                </label>
              </div>
              <div className="">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="ml-6">
                  Measurments are upto date and Matching to my profile
                </label>
              </div>
            </div>
            <button className="bg-blue-500 px-4  py-3 mt-3 sm:mt-0 text-white shadow-xl rounded-md">
              Attach referance images
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ref;
