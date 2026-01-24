import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-right">
          <a href="https://www.instagram.com/Ki.ngsfurniture" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/search/top?q=kings%20furniture" target="\_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kings Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
