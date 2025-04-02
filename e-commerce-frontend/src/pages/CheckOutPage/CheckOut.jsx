import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OurServices from "../../components/OurServices/OurServices";
import "./CheckOut.css";
import Banner from "../../components/Banner/Banner";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import { useSelector } from "react-redux";
import emptyCartImage from "../../assets/images/emptyCart.webp";
const CheckOut = () => {
  const cartItem = useSelector((state) => state?.cart?.cartItems);
  console.log(cartItem);
  return (
    <>
      <Header />
      <Banner image={bannerLogo} page="Checkout" home="Home" para="Checkout" />
      <section className="checkOutSec">
        <div className="container">
          <div className="checkOutWrapper">
            <div className="billingDetailsForm">
              <h2 className="billingDetailsHeading">Billing Details</h2>
              <form action="">
                <div className="formNameGroup">
                  <span>
                    <label htmlFor="firstName">Fist Name</label>
                    <input type="text" name="firstName" />
                  </span>
                  <span>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" />
                  </span>
                  <label htmlFor="compantName">Company Name (Optional)</label>
                  <input type="text" name="" id="compantName" />
                  <label htmlFor="countryName">Country / Region</label>
                  <input type="text" name="countryName" id="countryName" />
                  <label htmlFor="streetAddress">Street address</label>
                  <input type="text" name="streetAddress" id="streetAddress" />
                  <label htmlFor="zipCode">ZIP code</label>
                  <input type="number" name="zipCode" id="zipCode" />
                  <label htmlFor="phoneNumber">Phone</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" />
                  <label htmlFor="emailAddress">Email Address</label>
                  <input type="email" name="emailAddress" id="emailAddress" />
                </div>
              </form>
            </div>
            <div className="subTotalWrap">
              {cartItem.length === 0 ? (
                <img src={emptyCartImage} alt="empty cart image" />
              ) : (
                <>
                  <table >
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItem.map((product)=>(
                          <tr key={product.id}>
                            <td>{product.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <OurServices />
      <Footer />
    </>
  );
};

export default CheckOut;
