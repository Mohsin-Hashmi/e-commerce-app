import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import locationIcon from "../../assets/images/locationIcon.webp";
import phoneIcon from "../../assets/images/cellPhoneIcon.webp";
import clockIcon from "../../assets/images/timeClockIcon.webp";
import trophy from "../../assets/images/trophy.webp";
import protectionIcon from "../../assets/images/guarantee.webp"
import shippingIcon from "../../assets/images/shipping.webp";
import supportIcon from "../../assets/images/customer-support.webp";
const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="contactUsSec">
        <div className="container">
          <div className="contactUsSecWrapper">
            <img src={bannerLogo} alt="benner Logo" />
            <h3 className="contactUsHeading">Contact Us</h3>
          </div>
          <div className="contactUsPara">
            <p className="home">Home</p>
            <p className="contact">Contact</p>
          </div>
        </div>
      </section>
      <section className="contactFormSec">
        <div className="container">
          <div className="contactFormWrapper">
            <h2 className="contactFromHeading">Get In Touch With Us</h2>
            <p className="contactUsFormPara">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
            <div className="contactForm">
              <div className="contactFormInfo">
                <div className="infoCard">
                  <img
                    className="infoIcon"
                    src={locationIcon}
                    alt="location icon"
                  />
                  <div className="infoCardText">
                    <h3>Address</h3>
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                  </div>
                </div>
                <div className="infoCard">
                  <img
                    className="infoIcon"
                    src={phoneIcon}
                    alt="location icon"
                  />
                  <div className="infoCardText">
                    <h3>Phone</h3>
                    <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                  </div>
                </div>
                <div className="infoCard">
                  <img
                    className="infoIcon"
                    src={clockIcon}
                    alt="location icon"
                  />
                  <div className="infoCardText">
                    <h3>Working Time</h3>
                    <p>
                      Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="formContainer">
                <form action="">
                  <div className="formInputField">
                    <label className="fieldLabel" htmlFor="">Your name</label>
                    <input className="fieldInput" type="text" placeholder="Your Name"/>
                  </div>
                  <div className="formInputField">
                    <label className="fieldLabel" htmlFor="">Email address</label>
                    <input className="fieldInput" type="email" placeholder="your-email@gmail.com" />
                  </div>
                  <div className="formInputField">
                    <label className="fieldLabel" htmlFor="">Message</label>
                    <input className="fieldInput messageInput" type="text" placeholder="Hi! i’d like to ask about" />
                  </div>
                  <button type="submit" className="submitBtn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="serviceSec">
        <div className="container">
          <div className="serviceSecWrapper">
            <div className="serviceCard">
              <img src={trophy} alt="trophy icon" />
              <div className="serviceCardContent">
                <h4>High Quality</h4>
                <p>crafted from top materials</p>
              </div>
            </div>
            <div className="serviceCard">
              <img src={protectionIcon} alt="trophy icon" />
              <div className="serviceCardContent">
                <h4>Warranty Protection</h4>
                <p>Over 2 years</p>
              </div>
            </div>
            <div className="serviceCard">
              <img src={shippingIcon} alt="trophy icon" />
              <div className="serviceCardContent">
                <h4>Free Shipping</h4>
                <p>Order over 150 $</p>
              </div>
            </div>
            <div className="serviceCard">
              <img src={supportIcon} alt="trophy icon" />
              <div className="serviceCardContent">
                <h4>24 / 7 Support</h4>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
