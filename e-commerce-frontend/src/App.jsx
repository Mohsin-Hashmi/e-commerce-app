import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Layout from "./components/Layout/Layout";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import Product from "./pages/ProductPage/Product";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
import Cart from "./pages/CartPage/Cart";
import CheckOut from "./pages/CheckOutPage/CheckOut";
import TopWindow from "./components/TopToWindow/TopWindow";
import Profile from "./pages/ProfilePage/Profile";
// import ProdectedRoute from "./context/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
         <TopWindow />
          <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Protected routes */}
            <Route path="/" element={<Layout />}></Route>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products-detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/check-out" element={<CheckOut />}/>
            <Route path='/profile' element= {<Profile />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
