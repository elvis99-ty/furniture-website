import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "../images/logo-removebg-preview.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Helper function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Kings Furniture Logo"/>
        </Link>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {/* Using /#id tells React: 
              "Go to the Home page (/) AND then find the section (#id)" 
          */}
          <li>
            <NavHashLink smooth to="/#home" onClick={closeMenu}>Home</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#about" onClick={closeMenu}>About</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#products" onClick={closeMenu}>Products</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#contact" onClick={closeMenu}>Contact</NavHashLink>
          </li>
        </ul>

        {/* Shop Now Button */}
        <Link to="/products" className="shop-btn" onClick={closeMenu}>
          Shop Now
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </header>
  );
};

export default Navbar;