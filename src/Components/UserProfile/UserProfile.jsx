import React from "react";
import "./UserProfile.css";
import UserRight from "./UserRight";
import UserSidebar from "./UserSidebar";

const UserProfile = () => {
  return (
    <div className="userProfile">
        <UserSidebar/>
        <UserRight/>
    </div>
  );
};

export default UserProfile;
