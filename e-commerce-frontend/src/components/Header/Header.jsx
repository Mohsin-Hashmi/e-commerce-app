import logo from "../../assets/images/navbarLogo.webp";
import "./Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search 02.webp";
import profile from "../../assets/images/user-circle.webp";
import cart from "../../assets/images/shopping bag.webp";
import SearchModal from "../SearchModal/SearchModal";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [searchModal, setSearchModal] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleClose = () => {
    setSearchModal(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="headerNavbar">
            <Link to="/">
              <img src={logo} alt="logo icon" />
            </Link>
            <ul className="headerNavbarOptions">
              <li>
                <Link to="/" className="navbarLinks">
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className="navbarLinks">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/products" className="navbarLinks">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="navbarLinks">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="headerNavbarLogs">
              <Link onClick={() => setSearchModal(true)}>
                <img src={searchIcon} alt="search icon" />
              </Link>
              <Link to="/profile">
                <img src={profile} alt="profile icon" />
              </Link>
              <Link to="/cart" className="cartIconWrapper">
                <img src={cart} alt="cart icon" />
                {cartQuantity > 0 && (
                  <span className="cartBadge">{cartQuantity}</span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {searchModal && <SearchModal handleCloseModal={handleClose} />}
    </>
  );
};

export default Header;