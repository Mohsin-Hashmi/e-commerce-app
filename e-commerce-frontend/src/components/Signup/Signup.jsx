import { useState } from "react";
import loginImage from "../../assets/images/login-bg-image.webp";
import "./Signup.css";
import { Link } from "react-router-dom";
import { SignupAPI } from "../../services/SignupAPI";
import googleLogo from "../../assets/images/google-logo.webp";
import facebookLogo from "../../assets/images/fackbook-logo.webp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../utils/userSlice";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SignupAPI({
        name,
        email,
        password,
        confirmPassword,
        role,
      });
      dispatch(addUser(response?.data));
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="signupSec">
        <div className="signupSecWrapper">
          <div className="imageContainer">
            <img
              className="signupPageImage"
              src={loginImage}
              alt="signup image"
            />
            <div className="overlay-text">
              The only way to
              <span>to great wrok</span> is to <span>love what you do.</span>
              <br />
              <p className="writerName">- Steve Jobs</p>
            </div>
          </div>
          <div className="signupFormWrapper">
            <h1 className="signupHeading">Sign Up</h1>
            <form className="signupForm" onSubmit={handleSubmit}>
              <input
                className="inputField"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
              <input
                className="inputField"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
              <input
                className="inputField"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                className="inputField"
                value={confirmPassword}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat Password"
              />
              <select
                id="role"
                name="role"
                className="inputField"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option className="options" value="">
                  Select a role
                </option>
                <option className="options" value="user">
                  User
                </option>
                <option className="options" value="admin">
                  Admin
                </option>
              </select>
              <button type="submit" className="signupButton">
                Sign Up
              </button>

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
                Already have an account
                <span>
                  <Link to="/login" className="signupLink">
                    Login
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

export default Signup;
