import logo from "../../assets/images/navbarLogo.webp";
import "./Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search 02.webp";
import profile from "../../assets/images/user-circle.webp";
import cart from "../../assets/images/shopping bag.webp";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="headerNavbar">
            <Link to='/'>
              <img src={logo} alt="logo icon" />
            </Link>
            <ul className="headerNavbarOptions">
              <li>
                <Link to='/' className="navbarLinks">Home</Link>
              </li>
              <li>
                <Link to='' className="navbarLinks">Shop</Link>
              </li>
              <li>
                <Link to='' className="navbarLinks">Product</Link>
              </li>
              <li>
                <Link to='/contact-us' className="navbarLinks">Contact Us</Link>
              </li>
            </ul>
            <div className="headerNavbarLogs">
              <Link>
                <img src={searchIcon} alt="search icon" />
              </Link>
              <Link>
                <img src={profile} alt="profile icon" />
              </Link>
              <Link>
                <img src={cart} alt="cart icon" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
