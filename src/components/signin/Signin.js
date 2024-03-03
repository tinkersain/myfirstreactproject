import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [imgName, setImgName] = useState("show");
  const handlePassword = () => {
    if (showPass === false) {
      setShowPass(true);
      setImgName("hide");
    } else {
      setImgName("show");
      setShowPass(false);
    }
  };

  const handleSignin = () => {
    navigate("/Homepage");
  };
  return (
    <div className="main">
      <h1>Enter Your Credentials</h1>
      <div className="namepass">
        <input type="text" placeholder="Name" />
        <div className="password-hide">
          <input
            type={showPass === false ? "password" : "text"}
            placeholder="Password"
          />
          <img
            onClick={handlePassword}
            src={`/images/${imgName}.jpeg`}
            alt="hide"
          />
        </div>
      </div>
      <div className="bottom">
        <button onClick={handleSignin} className="signin-button">
          Signin
        </button>
        <p className="dont">Don't have an Account?</p>
      </div>
    </div>
  );
};

export default Signin;
