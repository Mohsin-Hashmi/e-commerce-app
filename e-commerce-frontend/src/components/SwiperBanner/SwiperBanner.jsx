import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperBanner.css";
import bannerImageOne from "../../assets/images/bannerImage01.webp";
import bannerImageTwo from "../../assets/images/bannerImage02.webp";
import bannerImageThree from "../../assets/images/bannerImage03.webp";
import bannerImageFour from "../../assets/images/bannerImage04.webp";
import bannerImageFive from "../../assets/images/bannerImage05.webp";
const SwiperBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '100%', height: '500px' }}> {/* Fixed container height */}
      <Slider {...settings} style={{ height: '100%' }}>
        <div style={{ height: '500px' }}> {/* Fixed slide height */}
          <img 
            src={bannerImageOne}
            alt="Slide 1" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Prevents distortion
            }}
          />
        </div>
        <div style={{ height: '500px' }}>
          <img 
            src={bannerImageTwo}
            alt="Slide 2" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={{ height: '500px' }}>
          <img 
            src={bannerImageThree}
            alt="Slide 2" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={{ height: '500px' }}>
          <img 
            src={bannerImageFour}
            alt="Slide 2" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={{ height: '500px' }}>
          <img 
            src={bannerImageFive}
            alt="Slide 2" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SwiperBanner;
