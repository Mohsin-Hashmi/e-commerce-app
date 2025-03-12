import "./RoomInspiration.css";
import { Link } from "react-router-dom";
import RoomInspirationSwiper from "../RoomInspirationSwiper/RoomInspirationSwiper";
const RoomInspiration = () => {
  return (
    <>
      <div className="roomInspirationWrapper">
        <div className="roomInspirationInfo">
          <h2 className="infoHeading">50+ Beautiful rooms inspiration</h2>
          <p className="infoPara">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link className="exploreMoreBtn" to="">
            Explore More
          </Link>
        </div>
        <div>
            <RoomInspirationSwiper />
        </div>
      </div>
    </>
  );
};

export default RoomInspiration;
