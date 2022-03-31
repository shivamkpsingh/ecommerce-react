import React from "react";
import "./UserSidebar.css";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="userProfile__sidebar shadow-2xl">
    <div className="mt-10 pl-8  userSidebar bg-white ">
      <div className="flex items-center">
        <img
          src={process.env.PUBLIC_URL + "../images/profile.png"}
          alt=""
          className=""
        />
        <a href="/no" className="ml-5">
          Profile
        </a>
      </div>
      <div className="flex items-center mt-3">
        <img
          src={process.env.PUBLIC_URL + "../images/profile.png"}
          alt=""
          className=""
        />
        <a href="/a" className="ml-5">
          Manual Measurnment
        </a>
      </div>
      <div className="flex items-center mt-3">
        <img
          src={process.env.PUBLIC_URL + "../images/profile.png"}
          alt=""
          className=""
        />
        <a href="/c" className="ml-5">
          Virtual Measurnment
        </a>
      </div>
      <div className="flex items-center mt-3">
        <img
          src={process.env.PUBLIC_URL + "../images/profile.png"}
          alt=""
          className=""
        />
        <Link to="/userprofile/shipingaddress" className="ml-5">
          Shiping Address List
        </Link>
      </div>
      <div className="flex items-center mt-3">
        <img
          src={process.env.PUBLIC_URL + "../images/profile.png"}
          alt=""
          className=""
        />
        <a href="/t" className="ml-5">
          Subscribed Designers
        </a>
      </div>
      <img
        src={process.env.PUBLIC_URL + "../images/ms1.png"}
        alt=""
        className=" mt-10"
      />
      <img
        src={process.env.PUBLIC_URL + "../images/ms2.png"}
        alt=""
        className="mt-5"
      />
    </div>
    </div>
  );
};

export default UserSidebar;
