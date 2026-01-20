import React from "react";
import "./Product.css"; // We'll put the skeleton styles here

const SkeletonCard = () => {
  return (
    <div className="product-card skeleton-card">
      <div className="product-image-wrapper skeleton-shimmer"></div>
      <div className="product-info">
        <div className="skeleton-line skeleton-shimmer short"></div>
        <div className="skeleton-line skeleton-shimmer long"></div>
        <div className="product-actions">
          <div className="skeleton-btn skeleton-shimmer"></div>
          <div className="skeleton-btn skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;