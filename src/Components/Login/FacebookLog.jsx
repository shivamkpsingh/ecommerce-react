import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addUser } from "../../redux/User/user.action";

const FacebookLog = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const componentClicked = (res) => {
    console.log("my res is", res);
  };
  const responseFacebook = (res) => {
    dispatch(addUser(res));
  };
  console.log("my user is persisr", user);
  if (user.user != null) {
    history.push("/");
  }
  return (
    <div>
      <FacebookLogin
        appId="3038950279681462"
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};
export default FacebookLog;
