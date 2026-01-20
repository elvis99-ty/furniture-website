import React from "react";
import { useNavigate } from "react-router-dom"; // Hook import
import "./Blog.css";

import blog1 from "../images/Dinning-image3.jpg";
import blog2 from "../images/Wadrope-image2.jpg";
import blog3 from "../images/Wadrope-image3.jpg";

const Blog = () => {
    // 1. ADD THE PARENTHESES HERE: useNavigate() 
    const navigate = useNavigate(); 

    return (
        <section className="blog-section">
            <div className="blog-container">
                <h2 className="blog-title">From Our Blog</h2>
                <p className="blog-subtitle">
                    Explore inspiring stories, timeless tips, and the art of modern living.
                </p>

                <div className="blog-grid">
                    <div className="blog-card">
                        <img src={blog1} alt="blog1"/>
                        <h3>Designing Furniture that Speaks Comfort</h3>
                        <p>Discover how thoughtful design can transform ordinary spaces into timeless sanctuaries</p>
                    </div>

                    <div className="blog-card">
                        <img src={blog2} alt="Blog 2" />
                        <h3>Minimalism Meets Elegance</h3>
                        <p>How simplicity and craftsmanship merge to create furniture that rules quietly.</p>
                    </div>

                    <div className="blog-card">
                        <img src={blog3} alt="Blog 3" />
                        <h3>Minimalism Meets Elegance</h3>
                        <p>How simplicity and craftsmanship merge to create furniture that rules quietly.</p>
                    </div>
                </div>

                {/* 2. THE UPDATED BUTTON CONTAINER */}
                <div className="blog-btn-container">
                    <button 
                        className="view-all-btn" 
                        onClick={() => navigate("/workshop")}
                    >
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Blog;