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
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kings Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
