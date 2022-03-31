import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="vendorBg relative ">
      <div className=" absolute top-2/3 right-16 pr-5 sm:pr-0">
        <div className="flex flex-col items-center profileV__img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJU9snsuIzky2rqgQs9hkMho2BifVPQLgJaw&usqp=CAU"
            alt=""
            className="border"
          />
          <div className="flex item-center mt-4">
            <img src={process.env.PUBLIC_URL + "../images/loca1.png"} alt="" />
            <p className="ml-5">Hydrabad , India</p>
          </div>
          <div className="flex mt-2">
            <p>4567 sales</p>
            <p className="ml-5 "> ⭐ ⭐ ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
