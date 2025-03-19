import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OurServices from "../../components/OurServices/OurServices";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { clearCart, removeFromCart } from "../../utils/cartSlice";
import deleteIcon from "../../assets/images/deleteItemIcon.webp";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import emptyCartImage from "../../assets/images/emptyCart.webp";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <section className="contactUsSec">
        <div className="container">
          <div className="contactUsSecWrapper">
            <img src={bannerLogo} alt="benner Logo" />
            <h3 className="contactUsHeading">Cart</h3>
          </div>
          <div className="contactUsPara">
            <p className="home">Home</p>
            <p className="contact">Cart</p>
          </div>
        </div>
      </section>
      <section className="cartSection">
        <div className="container">
          <div className="cartSectionWrapper">
            <h2 className="cartHeading">Your Cart</h2>
            {cartItems.length === 0 ? (
              <img
                className="emptyCartImage"
                src={emptyCartImage}
                alt="empty cart image"
              />
            ) : (
              <>
                {cartItems.map((product) => (
                  <table className="cartTable" key={product.id}>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quanity</th>
                        <th>Price</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={product.id}>
                        <td>
                          <img
                            className="cartProductImage"
                            src={product.image_path}
                            alt={product.name}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>${product.price}</td>
                        <td
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <img
                            style={{ cursor: "pointer" }}
                            src={deleteIcon}
                            alt="delete icon"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
                <section className="cartTotal">
                  <div className="cartTotalWrapper">
                    <h3 className="cartTotalHeading">Cart Totals</h3>
                    <div className="cartTotalContent">
                      <div className="cartTotalData">
                        <p>Subtotal</p>
                        <p>$190</p>
                      </div>
                      <div className="cartTotalData">
                        <p>Total</p>
                        <p>$190</p>
                      </div>
                    </div>
                    <Link to='' className="checkOutButton">Check Out</Link>
                  </div>
                </section>

                <button
                  className="clearCartBtn"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              </>
            )}
            <Link className="backtoProductPageLink" to="/products">
              Back to Products
            </Link>
          </div>
        </div>
      </section>

      <OurServices />
      <Footer />
    </>
  );
};

export default Cart;
