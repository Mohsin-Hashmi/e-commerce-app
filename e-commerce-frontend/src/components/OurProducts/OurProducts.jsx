import "./OurProducts.css";

import { Link, useLocation } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductsAPI from "../../services/ProductsAPI";
import Loading from "../Loading/Loading";
import { addProduct } from "../../utils/productSlice";
// import { addToCart } from "../../utils/cartSlice";
const OurProducts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  // handle product api function 
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
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const handleAddToCart = (e, product) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   dispatch(addToCart(product));
  // };
  return (
    <>
     
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
        <Link to="/products" className="showMoreBtn">
          Show More
        </Link>
      </section>
    </>
  );
};

export default OurProducts;
