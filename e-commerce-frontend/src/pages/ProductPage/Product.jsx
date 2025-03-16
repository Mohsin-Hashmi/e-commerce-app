import "./Product.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
// import ProductsAPI from "../../services/ProductsAPI";

// import { useDispatch } from "react-redux";
// import { addProduct } from "../../utils/productSlice";
// import { useEffect } from "react";

const Product = () => {
//   const dispatch= useDispatch();
//   const allProducts = async () => {
//     const response= await ProductsAPI();
//     dispatch(addProduct(response?.data))
//   };
//   useEffect(()=>{
//     allProducts();
//   })
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
          {/* <div className="productSecWrapper">{allProducts()}</div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
