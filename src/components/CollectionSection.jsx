import React from "react";
import "./CollectionSection.css";

import bedImg from "../images/Bed frame2.jpg";
import tvImg from "../images/Tv console.jpg"
import chairImg from "../images/Collection1.jpg";

const Collection = () => {
  return (
    <section className="collection">
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

      <button className="view-btn">View Full Collection</button>
    </section>
  );
};

export default Collection;