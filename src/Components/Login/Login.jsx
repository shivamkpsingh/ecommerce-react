import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleLog from "./GoogleLog";
import FacebookLog from "./FacebookLog";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const Login = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    
    const result = await fetch(process.env.REACT_APP_BASEURL+"api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const newResult = await result.json();
    console.log(newResult);
    if(newResult.statusCode === 200){
       if(newResult.data.status === 1){
        localStorage.setItem("userInfo", JSON.stringify(newResult.data));
        history.push("/");
       }
       else if(newResult.data.status === 2){ 
       localStorage.setItem("adminInfo", JSON.stringify(newResult.data));
        history.push("/admin/dashboard");
       }
    }
  };

  return (
    <div className="login flex px-24 items-center  justify-between ">
      <div className="loginLeft w-1/3 h-full  mt-20">
        <form action="">
          <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2">
            <input
              type="email"
              id="email"
              autoComplete="on"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>
          <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="flex-1 border-none outline-none w-full text-black login__input tracking-widest text-2xl"
            />
          </div>
          <button
            type="submit"
            onClick={Login}
            className="mx-auto text-white px-20 py-2 block mt-10 mb-10 rounded-full text-2xl loginButton tracking-widest"
          >
            Login
          </button>
          <p className="text-center  text-gray-500 tracking-widest mb-10">
            --------------or-------------
          </p>
        </form>
        <div className="flex flex-col items-center">
          <FacebookLog />
          <div className="google__log mt-5">
            <GoogleLog />
          </div>
        </div>
      </div>
      <div className="loginRight w-1/2">
        <img
          src={process.env.PUBLIC_URL + "../images/login.png"}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Login;
