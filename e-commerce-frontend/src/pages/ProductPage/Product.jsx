import "./Product.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import ProductsAPI from "../../services/ProductsAPI";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../utils/productSlice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const handleProducts = async () => {
    try {
      const response = await ProductsAPI();
      dispatch(addProduct(response?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleProducts();
  }, []);
  return (
    <>
      <Header />
      <section className="contactUsSec">
        <div className="container">
          <div className="contactUsSecWrapper">
            <img src={bannerLogo} alt="benner Logo" />
            <h3 className="contactUsHeading">Products</h3>
          </div>
          <div className="contactUsPara">
            <p className="home">Home</p>
            <p className="contact">Product</p>
          </div>
        </div>
      </section>
      <section className="productsSec">
        <div className="container">
          <div className="productSecWrapper">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="productCard">
                  <Link to="" className="productCardLink">
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
              <p>Loading products...</p>
            )}
          </div>
          <Link className="shoeMoreBtn02">Show More</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
