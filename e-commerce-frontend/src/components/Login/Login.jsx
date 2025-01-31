import loginImage from "../../assets/images/login-bg-image.webp";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/images/google-logo.webp";
import facebookLogo from "../../assets/images/fackbook-logo.webp";
import "./Login.css";
const Login = () => {
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
                  <Link to="" className="signupLink">
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
