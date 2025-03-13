import "./OurServices.css";
import trophy from "../../assets/images/trophy.webp";
import protectionIcon from "../../assets/images/guarantee.webp";
import shippingIcon from "../../assets/images/shipping.webp";
import supportIcon from "../../assets/images/customer-support.webp";
const OurServices = () => {
  return (
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
  );
};

export default OurServices;
