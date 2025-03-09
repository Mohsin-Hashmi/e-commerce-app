import "./Body.css";
const Body = () => {
  return (
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
  );
};

export default Body;
