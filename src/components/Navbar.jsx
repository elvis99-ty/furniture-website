import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "../images/logo-removebg-preview.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false); 
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleShopClick = (e) => {
    e.preventDefault();
    setIsBtnLoading(true); 
    
    setTimeout(() => {
      setIsBtnLoading(false); 
      closeMenu();
      navigate("/products"); 
    }, 800);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Kings Furniture Logo" />
        </Link>

        <div className={`nav-overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu}></div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><NavHashLink smooth to="/#home" onClick={closeMenu}>Home</NavHashLink></li>
          <li><NavHashLink smooth to="/#about" onClick={closeMenu}>About</NavHashLink></li>
          <li><NavHashLink smooth to="/#products" onClick={closeMenu}>Products</NavHashLink></li>
          {/* Added Workshop link so it's accessible everywhere */}
          <li><Link to="/workshop" onClick={closeMenu}>Workshop</Link></li>
          <li><NavHashLink smooth to="/#contact" onClick={closeMenu}>Contact</NavHashLink></li>
          
          <li className="mobile-only-item">
            <button 
              onClick={handleShopClick} 
              className="shop-btn mobile-btn"
              disabled={isBtnLoading}
            >
              {isBtnLoading ? <span className="btn-spinner"></span> : "Shop Now"}
            </button>
          </li>
        </ul>

        <button 
          onClick={handleShopClick} 
          className="shop-btn desktop-only-btn"
          disabled={isBtnLoading}
        >
          {isBtnLoading ? <span className="btn-spinner"></span> : "Shop Now"}
        </button>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </header>
  );
};

export default Navbar;