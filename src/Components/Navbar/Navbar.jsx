import React, { useState ,useEffect} from "react";
import MyDrawer from "../Drawer/MyDrawer";
import "./Navbar.css";
import Notification from "./Notification";
import { NavLink } from "react-router-dom";
import ProfileDrop from "./ProfileDrop";
import { useSelector, useDispatch } from "react-redux";
import { deleteUse } from "../../redux/User/user.action";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  // const[userID,setUserId]=useState()
  const[userUrl,setUserUrl]=useState()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userdata.data.email);

   //console.log("navbar user is userdata", userdata);
  // console.log("navbar user is ", user.user);
  useEffect(() => {
    if(user.user){
      const userKey='googleId' in user.user;
      userKey?setUserUrl(user.user.imageUrl):setUserUrl(user.user.picture.data.url)
    }
  },[userUrl,user.user])
 

  const LogOut = () => {
    dispatch(deleteUse(null));
    localStorage.clear();
  };
  return (
    <div className="Navbar shadow-xl sticky top-0 z-50 bg-white">
      <div className="navTop flex  justify-between items-center  p-2 mt-2  lg:px-10 sm:flex-row">
        <img
          src={"../images/logo.png"}
          alt="logo"
          className="w-12 sm:w-24 md:w-36"
        />
        <div className="navbarSearch ml-2 w-full sm:w-3/5 ">
          <div className="search flex items-center border sm:py-1 rounded-full px-1">
            <img
              src={"../images/loca.png"}
              alt="location"
              className="bg-white w-4 sm:w-8 p-1 sm:p-2 rounded-full"
            />
            <input
              type="text"
              placeholder="Search Anything"
              className="border-none outline-none w-full flex-1 text-center"
            />
            <img
              src={"../images/navtabla.png"}
              alt=""
              className=" bg-white w-4 sm:w-8  p-1 sm:p-2 rounded-full"
            />
          </div>
        </div>
        <div className="md:hidden">
       
          <button className="bg-red-400 ml-5 py-1 text-white rounded-sm px-4">
            Login
          </button>
       
        </div>
        <div className="login">
          <div className=" hidden md:flex  items-center justify-between">
            <NavLink
              to="/a"
              className="mx-4 relative inline-block notification"
            >
              <img
                src={"../images/noti.png"}
                alt=""
                className=""
              />
              <div className=" hidden noticontent  right-0 absolute  w-64  -m-1 bg-white shadow-2xl border h-full z-10">
                <Notification />
              </div>
            </NavLink>
            <NavLink to="/favourite" className="mx-4">
              <img src={"../images/like.png"} alt="" />
            </NavLink>
            <NavLink to="/cart" className="mx-4">
              <img src={"../images/cart.png"} alt="" />
            </NavLink>
            {userdata !== null ? (
              <NavLink
                to="/"
                className="mx-4 relative inline-block notification"
              >
                {/* <img
                  src={userUrl}
                  alt=""
                  className="rounded-full w-8"
                /> */}
                 <Avatar alt="Remy Sharp" src={userUrl} />
                <div className=" hidden noticontent  right-0 absolute  w-56  -m-1 bg-white shadow-2xl border h-full z-10">
                  <ProfileDrop />
                </div>
              </NavLink>
            ) : (
              ""
            )}
            {userdata !== null ? (
              <NavLink to="/login">
                <button
                  onClick={LogOut}
                  className="mr-4 border px-3 py-2 border-dotted border-black text-black font-bold"
                >
                  Logout
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button className="mr-4 border px-3 py-2 border-dotted border-black text-black font-bold">
                  Login
                </button>
              </NavLink>
            )}
            {
              userdata ===null ? (
                <NavLink to="/register">
              <button className="mr-4 border px-3 py-2 border-dotted border-black text-black font-bold">
                Register
              </button>
            </NavLink>
              ):("")
            }
           
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MyDrawer />
      </div>
      <div className="navbarBottom  justify-between text-center md:px-20  xl:px-72 mt-2 pb-4 hidden md:flex text-black ">
        <NavLink to="/a" className="text-black">
          Her Products
        </NavLink>
        <NavLink to="/b" className="text-black">
          His Products
        </NavLink>
        <NavLink to="/c" className="text-black">
          Kiddo Product
        </NavLink>
        <NavLink to="/d" className="text-black">
          Her Product
        </NavLink>
        <NavLink to="/e" className="text-black">
          His Product
        </NavLink>
        <NavLink to="/f" className="text-black">
          Kiddo Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
