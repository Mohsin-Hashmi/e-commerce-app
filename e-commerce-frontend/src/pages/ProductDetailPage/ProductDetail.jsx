import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!products || products.length === 0) {
    return <p>Loading products...</p>; // Handle empty state
  }
  const product = products.find((item) => item.id.toString() === id); // Convert id to string
  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <Header />
      <section className="productDetailSec">
        <div className="container">
          <div className="productDetailSecWrapper">
            <img
              src={product.image_path}
              alt={product.name}
              className="productImageDetail"
            />
            <div>
              <h2 className="selectedProductName">{product.name}</h2>
              <p className="selectedProductDescription">{product.description}</p>
              <p className="selectedProductWoodType">Wood Type: {product.wood_type}</p>
              <p className="selectedProductPrice">Price: ${product.price}</p>
              <Link to='' className="addToCartBtn">Add to Cart</Link>
            </div>
          </div>
          <Link to='/products' className="backBtn">Back</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
