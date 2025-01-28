import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode character for hamburger icon */}
      </div>
      {/* <div className="logo">Disney store</div> */}
      <Link to="/" className="logo">
        Disney store
      </Link>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li className="close-button" onClick={toggleMenu}>
          &times; {/* Unicode character for close icon */}
        </li>
        <li>
          <a href="#">新着商品</a>
        </li>
        <li>
          <a href="#">セール</a>
        </li>
        <li>
          <a href="#">ファッション・ビューティー</a>
        </li>
        <li>
          <a href="#">ぬいぐるみ・おもちゃ</a>
        </li>
        <li>
          <a href="#">生活雑貨</a>
        </li>
      </ul>
      {/* Cart and Favorite Icons */}
      <div className="nav-icons">
        <FontAwesomeIcon icon={faHeart} className="nav-icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
      </div>
      {/* Login and Signup Buttons */}
      <div className="auth-buttons">
        <a href="/login" className="login-btn">
          ログイン
        </a>
        <a href="/signup" className="signup-btn">
          新規登録
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
