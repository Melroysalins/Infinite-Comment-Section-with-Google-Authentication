import React from "react";
import "./index.css";
import ProfileIcon from "../profileIcon";
import LogOut from "../logOut";
import SignWithGoogle from "../siginWithGoogle";

const NavigationBar = () => {
  return (
    <div className="NavigationBarContainner">
      <ProfileIcon />
      <SignWithGoogle />
      {/* <LogOut /> */}
    </div>
  );
};

export default NavigationBar;
