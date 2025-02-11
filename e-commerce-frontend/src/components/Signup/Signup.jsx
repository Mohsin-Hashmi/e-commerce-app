import { useState } from "react";
import loginImage from "../../assets/images/login-bg-image.webp";
import "./Signup.css";
import { SignupAPI } from "../../services/SignupAPI";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SignupAPI({ name, email, password, confirmPassword, role });
      if (response.status === 200) {
        console.log("Signup Successfully:", response.data);
      }
      return response;
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
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit" className="signupButton">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
