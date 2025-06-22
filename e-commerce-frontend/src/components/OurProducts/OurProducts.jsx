import "./OurProducts.css";

import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import ProductsAPI from "../../services/ProductsAPI";
import Loading from "../Loading/Loading";
import { addProduct } from "../../utils/productSlice";
const OurProducts = () => {
  const dispatch= useDispatch();
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const handleProducts = async () => {
    try {
      const response = await ProductsAPI(0);
      setProductsData(response); 
      console.log("Products Data", response);
      dispatch(addProduct(response));
      setLoading(false); 
    } catch (err) {
      setLoading(false);
      throw new Error("something went wrong ", err.message);
    }
  };
  useEffect(() => {
    handleProducts();
  }, []);
  console.log("Home", productsData);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
     
      {/* <div className="ourProducts">
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
      </div> */}
      <section className="productsSec">
         <h1 className="ourProductsHeading">Our Products</h1>
        <div className="container">
          <div className="productSecWrapper">
            {loading ? (
              <Loading />
            ) : productsData && productsData.length > 0 ? (
              productsData.map((product) => (
                <div key={product.id} className="productCard">
                  <Link
                    to={`/products-detail/${product.id}`}
                    className="productCardLink"
                  >
                    <img
                      src={product.image_path}
                      alt={product.name}
                      className="productImage"
                    />
                    <div className="productDetail">
                      <h3 className="productTitle">{product.name}</h3>
                      <p className="productPrice">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
         <Link to='/products' className="showMoreBtn">
      Show More
      </Link>
      </section>
     
    </>
  );
};

export default OurProducts;
