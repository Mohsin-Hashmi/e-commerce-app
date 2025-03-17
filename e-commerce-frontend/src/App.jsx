import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Layout from "./components/Layout/Layout";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import Product from "./pages/ProductPage/Product";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
// import ProdectedRoute from "./context/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Protected routes */}
            <Route path="/" element={<Layout />}></Route>

            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products-detail" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
