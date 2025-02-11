
import signupImage from "../../assets/images/signup-bg-image.webp";
import './Signup.css';
const Signup = () => {
  return (
    <>
    <section className="signupSec">
      <div className="signupSecWrapper">
        <div className="imageContainer">
          <img className="signupPageImage" src={signupImage} alt="signup image"/>
        </div>
        <div className="signupFormWrapper">
          <h1 className="signupHeading">Sign Up</h1>
          <form className="signupForm" action="">
            <input className="inputField emailField" type="email" placeholder="Your email"/>
            <input className="inputField" type="password" placeholder="Password" />
            <input className="inputField" type="password" placeholder="Repeat Password" />
            <button className="signupButton">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Signup