import React, { useState } from "react";
import ResisterStep from "./ResisterStep";
import { useHistory } from "react-router";

const VendorResister = () => {
  const [shopname, setShopname] = useState();
  const [location, setLocation] = useState();
  const [language, setLanguage] = useState();
  const [currency, setCurrency] = useState();
  const [id1, setId1] = useState();
  const [id2, setId2] = useState();
  const history = useHistory();
  const VenderResister = async (e) => {
    e.preventDefault();
    const data = { shopname: shopname, location: location, language:language,currency:currency,id1:id1,id2:id2};
    console.log(data);
    const result = await fetch("http://localhost:5000/api/vendorregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const newResult = await result.json();
    console.log('my newResult is',newResult)
    localStorage.setItem("user-loginInfo", JSON.stringify(newResult));
    history.push("/");
  };
  return (
    <>
      <div className="mt-20">
        <ResisterStep />
      </div>
     
      <div className="login flex px-24 items-center  justify-between ">
        <div className="loginLeft w-1/3 h-full">
        <div className="px-24 mt-10  flex flex-col items-center">
         <h1 className="text-4xl font-extrabold">Vendor Resister</h1>
         <img
            src={process.env.PUBLIC_URL + "../images/vHo.png"}
            alt=""
            className="mb-5"
          />
      </div>
          <form action="">
            <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2">
              <input
                type="text"
                id="shopname"
                autoComplete="on"
                name="shopname"
                value={shopname}
                onChange={(e) => setShopname(e.target.value)}
                placeholder="Shop Name"
                className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
              />
            </div>
            <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
              <input
                type="location"
                placeholder="Location"
                id="location"
                name="loaction"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                className="flex-1 border-none outline-none w-full text-black login__input tracking-widest text-2xl"
              />
            </div>
            <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
              <input
                type="text"
                placeholder="Language"
                id="language"
                name="language"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                className="flex-1 border-none outline-none w-full text-black login__input tracking-widest text-2xl"
              />
            </div>
            <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
              <input
                type="number"
                placeholder="currency"
                id="currency"
                name="currency"
                value={currency}
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
                className="flex-1 border-none outline-none w-full text-black login__input tracking-widest text-2xl"
              />
            </div>
            <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
              <input
                type="text"
                placeholder="Id Proof 1"
                id="id1"
                name="id1"
                value={id1}
                onChange={(e) => {
                  setId1(e.target.value);
                }}
                className="flex-1 border-none outline-none w-full text-black login__input tracking-widest text-2xl"
              />
            </div>
            <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
              <input
                type="text"
                placeholder="Id Proof 2"
                id="id2"
                name="id2"
                value={id2}
                onChange={(e) => {
                  setId2(e.target.value);
                }}
                className="flex-1 border-none outline-none w-full text-black login__input tracking-widest text-2xl"
              />
            </div>
            <button
            onClick={VenderResister}
              type="submit"
              className="mx-auto text-white px-20 py-2 block mt-10 mb-10 rounded-full text-2xl loginButton tracking-widest"
            >
              Next
            </button>
          </form>
        </div>
        <div className="loginRight w-1/2">
          <img
            src={process.env.PUBLIC_URL + "../images/vendorR.png"}
            alt=""
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default VendorResister;
