import "./OurProducts.css";
import cardImageOne from "../../assets/images/card1img.webp";
import cardImageTwo from "../../assets/images/card2img.webp";
import cardImageThree from "../../assets/images/card3img.webp";
import cardImageFour from "../../assets/images/card4img.webp";
import cardImageFive from "../../assets/images/card5img.webp";
import cardImageSix from "../../assets/images/card6img.webp";
import cardImageSeven from "../../assets/images/card7img.webp";
import { Link } from "react-router-dom";
const OurProducts = () => {
  return (
    <>
      <h1 className="ourProductsHeading">Our Products</h1>
      <div className="ourProducts">
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img className="productImage" src={cardImageOne} alt="item image" />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Syltherine</h3>
              <p className="cardPara">Stylish cafe chair</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 2.500.000</p>
                <p className="discountPrice">Rp 3.500.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img className="productImage" src={cardImageTwo} alt="item image" />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Lolito</h3>
              <p className="cardPara">Luxury big sofa</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 7.000.000</p>
                <p className="discountPrice">Rp 14.000.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img
              className="productImage"
              src={cardImageThree}
              alt="item image"
            />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Respira</h3>
              <p className="cardPara">Outdoor bar table and stool</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 500.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img
              className="productImage"
              src={cardImageFour}
              alt="item image"
            />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Grifo</h3>
              <p className="cardPara">Night lamp</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 1.500.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img
              className="productImage"
              src={cardImageFive}
              alt="item image"
            />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Muggo</h3>
              <p className="cardPara">Small mug</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 150.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img className="productImage" src={cardImageSix} alt="item image" />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Pingky</h3>
              <p className="cardPara">Cute bed set</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 7.000.000</p>
                <p className="discountPrice">Rp 14.000.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img
              className="productImage"
              src={cardImageSeven}
              alt="item image"
            />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Potty</h3>
              <p className="cardPara">Minimalist flower pot</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 500.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img
              className="productImage"
              src={cardImageFour}
              alt="item image"
            />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Grifo</h3>
              <p className="cardPara">Night lamp</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 1.500.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="ourProducrsCard">
          <Link to="" className="ourProductLink">
            <img className="productImage" src={cardImageTwo} alt="item image" />
            <div className="ourProducrsCardInfo">
              <h3 className="cardHeading">Lolito</h3>
              <p className="cardPara">Luxury big sofa</p>
              <div className="cardPricing">
                <p className="actualPrice">Rp 7.000.000</p>
                <p className="discountPrice">Rp 14.000.000</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Link to='/products' className="showMoreBtn">
      Show More
      </Link>
    </>
  );
};

export default OurProducts;
