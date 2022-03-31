import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[firstname,setfirstName]=useState("")
  const[lastname,setlastName]=useState("")
  const[phone,setPhone]=useState("")
  const[address,setAddress]=useState("")
  const[confirmPassword,setConfirmPassword]=useState("")
  const history = useHistory();
  
  const Register=async(e)=>{
    e.preventDefault()
    // console.log('im resister button')
    const data={"email":email,"password":password,"phone":phone,"firstname":lastname,"lastname":firstname,"confirmpassword":confirmPassword,"address":address}
    console.log(data)
    const result=await fetch(process.env.REACT_APP_BASEURL+'api/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(data),
    });
    const newResult = await result.json();
    console.log("my result data is", newResult);
    if (newResult.statusCode === 202) {
      window.alert("Aready email address is there !");
    } 
    else if (newResult.statusCode === 200) {
      window.alert("successfully register");
      history.push("/login");
    }
    else{
      window.alert("Please fill form properly");

    }
    // localStorage.setItem("user-info", JSON.stringify(newResult));
  };
  return (
    <div className="login flex px-24  items-center  justify-between ">
      <div className="loginLeft w-1/3  ">
        <form action="">
          <div className="flex loginLeft__first items-center border border-gray-300 rounded-md px-6 py-2 mt-5">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>
          <div className="flex loginLeft__first items-center border border-gray-300  rounded-md px-6 py-2 mt-5">
            <input
              type="text"
              id="firstname"
              placeholder="FirstName"
              name="firstname"
              value={firstname}
              onChange={(e)=>setfirstName(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"/>
          </div>
          <div className="flex loginLeft__first items-center border border-gray-300  rounded-md px-6 py-2 mt-5">
            <input
              type="text"
              placeholder="LastName"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e)=>setlastName(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>
          <div className="flex loginLeft__first items-center border border-gray-300  rounded-md px-6 py-2 mt-5">
            <input
              type="text"
              placeholder="PhoneNumber"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>       
          <div className="flex loginLeft__first items-center border border-gray-300  rounded-md px-6 py-2 mt-5">
            <input
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>       
                    
          <div className="flex loginLeft__first items-center border border-gray-300  rounded-md px-6 py-2 mt-5">
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>
          <div className="flex loginLeft__first items-center border border-gray-300  rounded-md px-6 py-2 mt-5">
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="flex-1 border-none outline-none text-black login__input tracking-widest text-2xl"
            />
          </div>
          <button onClick={Register} className="mx-auto text-white px-20 py-2 block mt-10 mb-10 rounded-full text-2xl loginButton tracking-widest">
            Register
          </button>
        </form>
      </div>
      <div className="loginRight w-6/12">
        <img
          src={process.env.PUBLIC_URL + "../images/login.png"}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Register;
