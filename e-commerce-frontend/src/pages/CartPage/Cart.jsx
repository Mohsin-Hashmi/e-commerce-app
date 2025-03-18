import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OurServices from "../../components/OurServices/OurServices";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { clearCart, removeFromCart } from "../../utils/cartSlice";
import deleteIcon from "../../assets/images/deleteItemIcon.webp";
import emptyCartImage from "../../assets/images/emptyCartImage.webp";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <section className="cartSection">
        <div className="container">
          <div className="cartSectionWrapper">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
               <img className="emptyCartImage" src={emptyCartImage} alt="empty cart image"/>
            ) : (
              <>
                {cartItems.map((product) => (
                  <table className="cartTable" key={product.id}>
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Quanity</th>
                      <th>Price</th>
                    </tr>
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
                      <td onClick={() => dispatch(removeFromCart(product))}>
                        <img
                          style={{ cursor: "pointer" }}
                          src={deleteIcon}
                          alt="delete icon"
                        />
                      </td>
                    </tr>
                  </table>
                ))}

                <button onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      <OurServices />
      <Footer />
    </>
  );
};

export default Cart;
