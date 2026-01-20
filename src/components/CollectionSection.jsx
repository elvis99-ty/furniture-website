import React from "react";
import { Link } from "react-router-dom";
import "./CollectionSection.css";


import bedImg from "../images/Bed-frame1.jpg";
import tvImg from "../images/Tv-console2.jpg";
import chairImg from "../images/Sofa-image3.jpg"


const Collection = () => {
  return (
    <section className="collection" id="products">
      <h2>Our Collection</h2>

      <div className="collection-grid">
        <div className="collection-item">
          <img src={bedImg} alt="bed" />
          <h3>Classic Bed</h3>
        </div>

        <div className="collection-item">
          <img src={tvImg} alt="tv image" />
          <h3>TV Stand</h3>
        </div>

        <div className="collection-item">
          <img src={chairImg} alt="Chair" />
          <h3>Modern Sofa</h3>
        </div>
      </div>

      <Link to="/products" className="view-btn">
        View Full Collection
      </Link>
    </section>
  );
};

export default Collection;