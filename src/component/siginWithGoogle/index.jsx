import React from "react";
import "./index.css";
import googleicon from "../../assets/googleicon.png";

const SignWithGoogle = () => {
  return (
    <div className="SignwithgoogleContainner">
      <div className="googleIconContainner">
        <img src={googleicon} />
      </div>
      <p>Sign with the Google</p>
    </div>
  );
};

export default SignWithGoogle;
