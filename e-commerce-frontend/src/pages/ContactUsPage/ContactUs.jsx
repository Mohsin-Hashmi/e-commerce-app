import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
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
      <section className="contactForm">
        <div className="container">
          <div className="contactFormWrapper">
            <h2 className="contactFromHeading">Get In Touch With Us</h2>
            <p className="contactUsFormPara">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
