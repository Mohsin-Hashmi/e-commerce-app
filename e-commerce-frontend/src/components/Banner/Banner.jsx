
import "./Banner.css"
import PropTypes from 'prop-types';
const Banner = ({image, page, home, para}) => {
  return (
    <>
     <section className="pageBannerSec">
        <div className="container">
          <div className="pageBannerWrapper">
            <img src={image} alt="banner Logo" />
            <h3 className="bannerHeading">{page}</h3>
          </div>
          <div className="bannerPara">
            <p className="home">{home}</p>
            <p className="para">{para}</p>
          </div>
        </div>
      </section>
    </>
  )
}
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  home: PropTypes.string,
  para: PropTypes.string
};

export default Banner;
