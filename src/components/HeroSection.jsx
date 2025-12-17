import React from "react";
import "./HeroSection.css"
import heroImage from "../images/Hero2.jpg";

const HeroSection = () => {
  return (
    <section
    id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Furniture that rules quietly</h1>
          <p>
            Timeless design crafted for the modern space. Discover pieces built
            to be lived in and passed down.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;