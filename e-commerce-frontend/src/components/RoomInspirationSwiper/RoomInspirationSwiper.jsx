import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles (optional)
import "swiper/css/pagination"; // Pagination styles (optional)
import './RoomInspirationSwiper.css';
import {} from "swiper/modules"; // Import Swiper modules
import firstImage from "../../assets/images/swiperImg01.webp";
import secondImage from "../../assets/images/swiperImg02.webp";
// import thirdImage from "../../assets/images/swiperImg03.webp";
// import fourthImage from "../../assets/images/swiperImg04.webp";
// import fifthImage from "../../assets/images/swiperImg05.webp";
// import sixthImage from "../../assets/images/swiperImg06.webp";
const RoomInspirationSwiper = () => {
  return (
    <Swiper className="swiper" modules={[]} spaceBetween={30} slidesPerView={2}>
      <SwiperSlide>
        <img src={firstImage} alt="first image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={secondImage} alt="second image" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={thirdImage} alt="third image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={fourthImage} alt="fourth image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={fifthImage} alt="fifth image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sixthImage} alt="sixth image" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default RoomInspirationSwiper;
