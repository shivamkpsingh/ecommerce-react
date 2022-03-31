import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useDispatch ,useSelector} from "react-redux";
import { addUser } from "../../redux/User/user.action";

const GoogleLog = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const clientId = "819429015842-tp3mush49ra6rt41kvjo1favolh2ln05.apps.googleusercontent.com";
  const responseGoogle = (res) => {
    console.log("login success response", res.profileObj);
    dispatch(addUser(res.profileObj))
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };
  const responseFailGoogle = (res) => {
    console.log("login fail ", res);
  };
  const logout = () => {
    console.log("logout successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };
  console.log('google user is',user);
  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseFailGoogle}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      ) : null}
    </div>
  );
};

export default GoogleLog;
