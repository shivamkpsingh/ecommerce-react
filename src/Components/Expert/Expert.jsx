import React from "react";
// import { useLocation } from 'react-router-dom'
import './Expert.css'
const Expert = ({imgUrl}) => {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="expert flex items-center flex-col m-2  z-0">
      <img src={imgUrl} alt="" className="rounded-full"  />
      <p className="flex">⭐</p>
    </div>
  );
};

export default Expert;
