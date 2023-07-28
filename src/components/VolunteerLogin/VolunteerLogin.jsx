import "./VolunteerLogin.css";
import React from "react";
import { Link } from "react-router-dom";

const VolunteerLogin = () => {
  return (
    <>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="./BgLoginSignup.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <button className="signInBtn">Sign In</button>
                  </div>
                  <div className="text sign-up-text" style={{fontSize: 18, position: "relative", right: 8}}>
                    <span>Don't have an account?</span>{" "}
                    <label for="flip">
                      <Link to="/volunteer-register">Sign Up</Link>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default VolunteerLogin;
