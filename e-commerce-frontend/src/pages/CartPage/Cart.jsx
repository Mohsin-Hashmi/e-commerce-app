import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OurServices from "../../components/OurServices/OurServices";
import './Cart.css';
const Cart = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <p>cart</p>
        </div>
      </section>
      <OurServices />
      <Footer />
    </>
  );
};

export default Cart;
