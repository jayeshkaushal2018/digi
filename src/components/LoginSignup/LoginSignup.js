import React from "react";
import "./LoginSignup.css";
import User_icon from "../../pages/person.png";
import email_icon from "../../pages/email.png";
import password_icon from "../../pages/password.png";
import { useState } from "react";

const LoginSignUp = () => {
    const [action,setAction] = useState("Sign Up");
  return (
    <div className="logincontainer">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="signinputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={User_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        <div className="input">
          <img src={User_icon} alt="" />
          <label for="usertype">Choose a User       : </label>
          <select id="usertype" name="usertype">
            <option value="organizer">organizer</option>
            <option value="Attendee">Attendee</option>
          </select>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Lost Password? <span>Click here</span>
      </div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}> Submit</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}> Login</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
