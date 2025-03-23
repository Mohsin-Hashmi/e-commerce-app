import React from 'react'
import "./Banner.css"
const Banner = ({image, page, home, para}) => {
  return (
    <>
     <section className="bannerSec">
        <div className="container">
          <div className="bannerWrapper">
            <img src={bannerLogo} alt="banner Logo" />
            <h3 className="bannerHeading">Products</h3>
          </div>
          <div className="bannerPara">
            <p className="home">Home</p>
            <p className="para">Product</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;