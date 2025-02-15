import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperBanner.css';
import bannerImageOne from '../../assets/images/bannerImage01.webp';
import bannerImageTwo from '../../assets/images/bannerImage02.webp';
import bannerImageThree from '../../assets/images/bannerImage03.webp';
import bannerImageFour from '../../assets/images/bannerImage04.webp';
import bannerImageFive from '../../assets/images/bannerImage05.webp';
const SwiperBanner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='bannerImages' src={bannerImageOne} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='bannerImages' src={bannerImageTwo} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='bannerImages' src={bannerImageThree} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='bannerImages' src={bannerImageFour} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='bannerImages' src={bannerImageFive} alt="banner image" />
      </SwiperSlide>
    
    </Swiper>
  )
}

export default SwiperBanner