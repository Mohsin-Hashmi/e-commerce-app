import loginImage from "../../assets/images/login-bg-image.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import googleLogo from "../../assets/images/google-logo.webp";
import facebookLogo from "../../assets/images/fackbook-logo.webp";
import { LoginAPI } from "../../services/LoginAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { addUser } from "../../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const response = await LoginAPI({email, password});
      dispatch(addUser(response?.data));
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <section className="loginSec">
        <div className="loginSecWrapper">
          <div className="image-container">
            <img
              className="loginPageImage"
              src={loginImage}
              alt="login image"
            />
            <div className="overlay-text">
              The future belongs to those who
              <br />
              <span>believe</span> in the <span>beauty of their dreams.</span>
              <br />
              <p className="writerName">-Eleanor Roosevelt</p>
            </div>
          </div>
          <div className="loginFormWrapper">
            <h1 className="loginHeading">Log In</h1>
            <form className="loginForm" action="" onSubmit={handleSubmit}>
              <input
                className="inputField emailField"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Your email"
              />
              <input
                className="inputField"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
              />
              <button type="submit" className="loginButton">Login</button>
              <Link to="" className="forgetPasswordLink">
                Forgot password?
              </Link>
              <div className="divider">
                <span>or</span>
              </div>
              <div className="socialAccountsWrap">
                <Link to="" className="socialAccountCard">
                  <img src={googleLogo} alt="google logo" />
                  <p className="googleAccount">Google</p>
                </Link>

                <Link to="" className="socialAccountCard">
                  <img src={facebookLogo} alt="facebook logo" />
                  <p className="googleAccount">Facebook</p>
                </Link>
              </div>
              <p className="signUpLinkPara">
                Don’t have an account?
                <span>
                  <Link to="/signup" className="signupLink">
                    Sign Up
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
