import "./Product.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import ProductsAPI from "../../services/ProductsAPI";
import { Link } from "react-router-dom";
import OurServices from "../../components/OurServices/OurServices";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../utils/productSlice";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Banner from "../../components/Banner/Banner";

const Product = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  /**API Handler Function */
  const handleProducts = async () => {
    try {
      const response = await ProductsAPI(24);
      setProductsData(response); 
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

  return (
    <>
      <Header />
      <Banner image={bannerLogo} page="Products" home="Home" para="Products" />
      <section className="productsSec">
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
          <Link className="shoeMoreBtn02">Show More</Link>
        </div>
      </section>
      <OurServices />
      <Footer />
    </>
  );
};

export default Product;
