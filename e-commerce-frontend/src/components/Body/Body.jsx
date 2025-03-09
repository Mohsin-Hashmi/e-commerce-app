import "./Body.css";
import itemOne from "../../assets/images/item01.webp";
import itemTwo from "../../assets/images/item02.webp";
import itemThree from "../../assets/images/item03.webp";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <>
      <section className="bannerSec">
        <div className="container">
          <div className="bannerSecWrapper">
            <p className="newArrivalPara">New Arrival</p>
            <h1 className="collectionHeading">Discover Our New Collection</h1>
            <p className="collectionPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="buyNowBtn">BUY NOW</button>
          </div>
        </div>
      </section>
      {/* Rasnge Section */}
      <section className="rangeSec">
        <div className="container">
          <div className="rangeSecWrapper">
            <h2 className="rangeSecHeading">Browse The Range </h2>
            <p className="rangeSecPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="rangeItems">
              <Link to="" className="rangeItemLink">
                <img src={itemOne} alt="item one" />
                <p className="ranfeItemsName">Dining</p>
              </Link>
              <Link to="" className="rangeItemLink">
                <img src={itemTwo} alt="item two" />
                <p className="ranfeItemsName">Living</p>
              </Link>
              <Link to="" className="rangeItemLink">
                <img src={itemThree} alt="item three" />
                <p className="ranfeItemsName">Bedroom</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
