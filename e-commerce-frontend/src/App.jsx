import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Layout from "./components/Layout/Layout";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import ProdectedRoute from "./utils/ProtectedRoute";
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
            <Route
              path="/"
              element={
                <ProdectedRoute>
                  <Layout />
                </ProdectedRoute>
              }
            ></Route>

            <Route
              path="/contact-us"
              element={
                <ProdectedRoute>
                  <ContactUs />
                </ProdectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
