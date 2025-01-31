import React, { useState } from "react";
import loginImage from "../../assets/images/login-bg-image.webp";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <>
      <section className="loginSec">
        <div className="loginSecWrapper">
          <img className="loginPageImage" src={loginImage} alt="login image" />
          <div className="loginFormWrapper">
            <h1 className="loginHeading">Log In</h1>
            <form className="loginForm" action="">
              <input
                className="inputField emailField"
                type="email"
                placeholder="Your email"
              />
              <input
                className="inputField"
                type="password"
                placeholder="Password"
              />
              <button className="loginButton">Login</button>
              <Link to="" className="forgetPasswordLink">
                Forgot password?
              </Link>
              <div class="divider">
                <span>or</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
