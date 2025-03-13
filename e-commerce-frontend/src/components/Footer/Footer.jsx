import "./Footer.css";
import funiroLogo from "../../assets/images/funiroLogo.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footerWrapper">
            <div className="footerInfo">
              <Link to="">
                <img src={funiroLogo} alt="funiro logo" />
              </Link>
              <p className="address">
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className="location">FL 33134 USA</p>
            </div>
            <div className="footerPagesLinks">
              <div>
                <h4 className="footerPagesLinksHeading">Links</h4>
                <ul>
                  <li>
                    <Link to="" className="footerPagesLinksOptions">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="footerPagesLinksOptions">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="footerPagesLinksOptions">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="footerPagesLinksOptions">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="footerPagesLinksHeading">Help</h4>
                <ul>
                  <li>
                    <Link className="footerPagesLinksOptions">
                      Payment Options
                    </Link>
                  </li>
                  <li>
                    <Link className="footerPagesLinksOptions">Return</Link>
                  </li>
                  <li>
                    <Link className="footerPagesLinksOptions">
                      Privacy Policies
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="footerPagesLinksHeading">Newsletter</h4>

                <input
                  className="emailInput"
                  type="email"
                  placeholder="Enter Your Email Address"
                  required
                />
                <button className="subscribeBtn">SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <hr />
          <p className="crPara">2023 furino. All rights reverved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
