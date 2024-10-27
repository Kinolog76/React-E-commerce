import styles from "./Navbar.module.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
        <p>R-Shop</p>
      </Link>
      <div className={styles.menu}>
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/mens">Men</NavLink>
        </li>
        <li>
          <NavLink to="/womens">Women</NavLink>
        </li>
        <li>
          <NavLink to="/kids">Kids</NavLink>
        </li>
      </div>
      <div className={styles.cart_icon}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart" className={styles.cart_icon_cart}>
          <img src={cart_icon} alt="cart" />
          <span className={styles.cart_icon_cart_count}>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
