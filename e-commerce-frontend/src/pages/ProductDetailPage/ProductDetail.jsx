import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./ProductDetail.css";
import OurServices from "../../components/OurServices/OurServices";
import Loading from "../../components/Loading/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((store) => store.products);

  if (!products || products.length === 0) {
    return <Loading />; // Handle empty state
  }
  const product = products.find((item) => item.id.toString() === id);
  if (!product) {
    return <p>Product not found!</p>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

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
              <p className="selectedProductDescription">
                {product.description}
              </p>
              <p className="selectedProductWoodType">
                Wood Type: {product.wood_type}
              </p>
              <p className="selectedProductPrice">Price: ${product.price}</p>
              <Link
                onClick={() => dispatch(addToCart(product))}
                to="/cart"
                className="addToCartBtn"
              >
                Add to Cart
              </Link>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="relatedProducts">
              <h3>Related Products</h3>
              <div className="relatedProductList">
                {relatedProducts.map((related) => (
                  <div key={related.id} className="relatedProductCard">
                    <Link
                      to={`/products-detail/${related.id}`}
                      className="relatedProductLink"
                    >
                      <img
                        src={related.image_path}
                        alt={related.name}
                        className="relatedProductImage"
                      />
                      <div className="relatedProductDetail">
                        <h4>{related.name}</h4>
                        <p>${related.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Link to="/products" className="backBtn">
            Back
          </Link>
        </div>
      </section>
      <OurServices />
      <Footer />
    </>
  );
};

export default ProductDetail;
