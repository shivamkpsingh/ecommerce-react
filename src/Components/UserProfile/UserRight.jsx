import React from "react";
import "./UserRight.css";

const UserRight = () => {
  return (
    <div className="userProfile__right px-10 mt-10">
      <form action="">
      <div className="flex">
        <div className="userRight__left   flex flex-col items-center w-1/2">
          <div className="flex flex-col  userRight__leftImg items-center">
            <img
              // src={process.env.PUBLIC_URL + "../images/uphoto.png"}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className=""
            />
            <h1 className="mt-2 text-lg tracking-widest">User Name</h1>
          </div>
          <div className=" w-4/5 mt-10">
              <div className="flex rounded-full bg-gray-400 useRight__leftInput">
                <input
                  type="text"
                  placeholder="Name"
                  className=" border-none  outline-none  rounded-full flex-1 text-white bg-gray-400 bg-none  pl-4 tracking-widest"
                />
                <img
                  src={process.env.PUBLIC_URL + "../images/profile.png"}
                  alt=""
                  className=" pr-2 py-2"
                />
              </div>
              <div className="flex rounded-full bg-gray-400 useRight__leftInput  mt-4">
                <input
                  type="text"
                  placeholder="Email"
                  className=" border-none  outline-none flex-1  rounded-full text-white bg-gray-400 bg-none  pl-4 tracking-widest"
                />
                <img
                  src={process.env.PUBLIC_URL + "../images/email.png"}
                  alt=""
                  className=" pr-2 py-3"
                />
              </div>
              <div className="genderOption mt-5 flex justify-between ">
                <div className="">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male" className="ml-3 text-lg">
                    Male
                  </label>
                </div>
                <div className="">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="femail" className="ml-3 text-lg">
                    Female
                  </label>
                </div>
                <div className="">
                  <input type="radio" name="gender" id="none" value="none" />
                  <label htmlFor="none" className="ml-3 text-lg">
                    prefer not to say
                  </label>
                </div>
              </div>
              <div className="flex rounded-full bg-gray-400 useRight__leftInput  mt-8">
                <input
                  type="text"
                  placeholder="Updated Password"
                  className=" border-none  outline-none text-white flex-1  rounded-full bg-gray-400 bg-none  pl-4 tracking-widest"
                />
                <img
                  src={process.env.PUBLIC_URL + "../images/email.png"}
                  alt=""
                  className=" pr-2 py-3"
                />
              </div>
              <div className="flex rounded-full bg-gray-400 useRight__leftInput  mt-6">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className=" border-none  outline-none flex-1  text-white rounded-full bg-gray-400 bg-none  pl-4 tracking-widest"
                />
                <img
                  src={process.env.PUBLIC_URL + "../images/email.png"}
                  alt=""
                  className=" pr-2 py-3"
                />
              </div>
          </div>
        </div>
        <div className="userRight__right w-1/2  flex flex-col items-center">
          <div className=" bg-gray-300 w-52 p-3">
            <h1 className="text-2xl tracking-widest font-light">
              Wallet Points
            </h1>
            <div className="flex items-center mt-3">
              <img
                src={process.env.PUBLIC_URL + "../images/wall.png"}
                alt=""
                className=""
              />
              <h1 className="ml-5  font-bold">50 USD</h1>
            </div>
          </div>
          <div className="flex flex-col userRight__input mt-16">
            <input
              type="text"
              placeholder="Country"
              className=" bg-gray-400 outline-none border-none tracking-widest  text-white py-3 px-4 rounded-full "
            />
            <input
              type="text"
              placeholder="Street address"
              className="bg-gray-400 outline-none border-none tracking-widest  text-white py-3 px-4 rounded-full mt-4 "
            />
            <input
              type="text"
              placeholder="Flat Num"
              className="bg-gray-400 outline-none border-none tracking-widest  text-white py-3 px-4 rounded-full mt-4 "
            />
            <div className="half__input">
              <input
                type="text"
                placeholder="Zip Code"
                className="bg-gray-400 outline-none border-none tracking-widest  text-white py-3 px-4 rounded-full mt-4 "
              />
              <input
                type="text"
                placeholder="city"
                className="bg-gray-400 outline-none border-none tracking-widest  text-white py-3 px-4 rounded-full mt-4 ml-2 "
              />
            </div>
            <input
              type="text"
              placeholder="State"
              className=" bg-gray-400 outline-none mt-4 border-none tracking-widest  text-white py-3 px-4 rounded-full "
            />
          </div>
        </div>
      </div>
      <button className="text-xl bg-gray-400 py-2  w-48 rounded-full block ml-auto mt-4 text-white tracking-widest">Update</button>
      </form>
      <div className="categoryLeft__down  mt-4 mb-4 ">
          <img
            src="https://i2.wp.com/www.thehlabel.com/wp-content/uploads/2020/04/Saree-Banner.jpg?fit=1583%2C674&ssl=1"
            alt=""
            className=" rounded-lg"
          />
        </div>
    </div>
  );
};

export default UserRight;
