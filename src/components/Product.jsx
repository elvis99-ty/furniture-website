import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import "./Product.css";

// BED FRAME

import bed1 from "../images/Bed-frame1.jpg";
import bed2 from "../images/Bed-frame2.jpg";
import bed3 from "../images/Bed-frame3.jpg";
import bed4 from "../images/Bed-frame4.jpg";
import bed5 from "../images/Bed-frame5.jpg";
import bed6 from "../images/Bed-frame01.jpg";

// DINNING

import din1 from "../images/Dinning-image1.jpg";
import din2 from "../images/Dinning-image2.jpg";
import din3 from "../images/Dinning-image3.jpg";
import din4 from "../images/Dinning-image4.jpg";
import din5 from "../images/Dinning-image5.jpg";
import din6 from "../images/Dinning-image6.jpg";
import din7 from "../images/Dinning-image7.jpg";

// DOOR

import door1 from "../images/Door-image1.jpg";
import door2 from "../images/Door-image2.jpg";
import door3 from "../images/Door-image3.jpg";
import door4 from "../images/Door-image4.jpg";
import door5 from "../images/Door-image5.jpg";
import door6 from "../images/Door-image6.jpg";
import door7 from "../images/Door-image7.jpg";

// KITCHEN

import kit1 from "../images/Kitchen-image1.jpeg";
import kit2 from "../images/Kitchen-image2.jpeg";
import kit3 from "../images/Kitchen-image3.jpeg";
import kit4 from "../images/Kitchen-image4.jpeg";
import kit5 from "../images/Kitchen-image5.jpeg";
import kit6 from "../images/Kitchen-image6.jpeg";
import kit7 from "../images/Kitchen-image7.jpeg";

// OFFICE SETUP

import off1 from "../images/Office-setup1.jpg";
import off2 from "../images/Office-setup2.jpg";
import off3 from "../images/Office-setup3.jpg";
import off4 from "../images/Office-setup4.jpg";

// SCHOOL FURNITURE

import sch1 from "../images/School-furniture1.jpg";
import sch2 from "../images/School-furniture2.jpg";
import sch3 from "../images/School-furniture3.jpg";
import sch4 from "../images/School-furniture4.jpg";
import sch5 from "../images/School-furniture5.jpg";
import sch6 from "../images/School-furniture6.jpg";

// SOFA IMAGE

import sofa1 from "../images/Sofa-image1.jpg";
import sofa2 from "../images/Sofa-image2.jpg";
import sofa3 from "../images/Sofa-image3.jpg";
import sofa4 from "../images/Sofa-image4.jpg";
import sofa5 from "../images/Sofa-image5.jpg";
import sofa6 from "../images/Sofa-image6.jpg";
import sofa7 from "../images/Sofa-image7.jpg";

// TV CONSOLE

import tv1 from "../images/Tv-console1.jpg";
import tv2 from "../images/Tv-console2.jpg";
import tv3 from "../images/Tv-console3.jpg";
import tv4 from "../images/Tv-console4.jpg";

// WADROPE 
import ward1 from "../images/Wadrope-image1.jpg";
import ward2 from "../images/Wadrope-image2.jpg";
import ward3 from "../images/Wadrope-image3.jpg";
import ward4 from "../images/Wadrope-image4.jpg";
import ward5 from "../images/Wadrope-image5.jpg";
import ward6 from "../images/Wadrope-image6.jpg";
import ward7 from "../images/Wadrope-image7.jpg";

const products = [
  // BED FRAME
  {id: 1, name : "Luxury Bed 1", category : "BED FRAME", image : bed1 },
  {id: 2, name : "Luxury Bed 2", category : "BED FRAME", image : bed2 },
  {id: 3, name : "Luxury Bed 3", category : "BED FRAME", image : bed3 },
  {id: 4, name : "Luxury Bed 4", category : "BED FRAME", image : bed4 },
  {id: 5, name : "Luxury Bed 5", category : "BED FRAME", image : bed5 },
  {id: 6, name : "Luxury Bed 6", category : "BED FRAME", image : bed6 },

  // DINNING
  {id: 7, name : "Dinning set", category : "DINNING IMAGE", image : din1},
  {id: 8, name : "Dinning set", category : "DINNING IMAGE", image : din2},
  {id: 9, name : "Dinning set", category : "DINNING IMAGE", image : din3},
  {id: 10, name : "Dinning set", category : "DINNING IMAGE", image : din4},
  {id: 11, name : "Dinning set", category : "DINNING IMAGE", image : din5},
  {id: 12, name : "Dinning set", category : "DINNING IMAGE", image : din6},
  {id: 13, name : "Dinning set", category : "DINNING IMAGE", image : din7},

  //DOOR IMAGE
  {id : 14, name : "Door image", category : "DOOR IMAGE", image : door1},
  {id : 15, name : "Door image", category : "DOOR IMAGE", image : door2},
  {id : 16, name : "Door image", category : "DOOR IMAGE", image : door3},
  {id : 17, name : "Door image", category : "DOOR IMAGE", image : door4},
  {id : 18, name : "Door image", category : "DOOR IMAGE", image : door5},
  {id : 19, name : "Door image", category : "DOOR IMAGE", image : door6},
  {id : 20, name : "Door image", category : "DOOR IMAGE", image : door7},

  // KITCHEN IMAGE
  {id : 21, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit1},
  {id : 22, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit2},
  {id : 23, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit3},
  {id : 24, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit4},
  {id : 25, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit5},
  {id : 26, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit6},
  {id : 27, name : "Kitchen image", category : "KITCHEN IMAGE", image : kit7},

  // OFFICE SETUP
  {id : 28, name : "Office setup", category : "OFFICE SETUP", image : off1},
  {id : 29, name : "Office setup", category : "OFFICE SETUP", image : off2},
  {id : 30, name : "Office setup", category : "OFFICE SETUP", image : off3},
  {id : 31, name : "Office setup", category : "OFFICE SETUP", image : off4},

  //SCHOOL FURNITURE
  {id : 32, name : "School furniture", category : "SCHOOL FURNITURE", image : sch1},
  {id : 33, name : "Schoo2 furniture", category : "SCHOOL FURNITURE", image : sch2},
  {id : 34, name : "Schoo3 furniture", category : "SCHOOL FURNITURE", image : sch3},
  {id : 35, name : "Schoo4 furniture", category : "SCHOOL FURNITURE", image : sch4},
  {id : 36, name : "Schoo5 furniture", category : "SCHOOL FURNITURE", image : sch5},
  {id : 37, name : "Schoo6 furniture", category : "SCHOOL FURNITURE", image : sch6},

  // SOFA IMAGE
  {id : 38, name : "Sofa image", category : "SOFA IMAGE", image : sofa1},
  {id : 39, name : "Sofa image", category : "SOFA IMAGE", image : sofa2},
  {id : 40, name : "Sofa image", category : "SOFA IMAGE", image : sofa3},
  {id : 41, name : "Sofa image", category : "SOFA IMAGE", image : sofa4},
  {id : 42, name : "Sofa image", category : "SOFA IMAGE", image : sofa5},
  {id : 43, name : "Sofa image", category : "SOFA IMAGE", image : sofa6},
  {id : 44, name : "Sofa image", category : "SOFA IMAGE", image : sofa7},

  // TV CONSOLE 
  {id : 45, name : "Tv console", category : "TV CONSOLE", image : tv1},
  {id : 46, name : "Tv console", category : "TV CONSOLE", image : tv2},
  {id : 47, name : "Tv console", category : "TV CONSOLE", image : tv3},
  {id : 48, name : "Tv console", category : "TV CONSOLE", image : tv4},
  
  //
  {id : 49, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward1},
  {id : 50, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward2},
  {id : 51, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward3},
  {id : 52, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward4},
  {id : 53, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward5},
  {id : 54, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward6} ,
  {id : 55, name : "Wadrope Image", category : "WADROPE IMAGE", image : ward7},
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    "ALL", "BED FRAME", "DINNING IMAGE", "KITCHEN IMAGE", "OFFICE SETUP", 
    "SCHOOL FURNITURE", "SOFA IMAGE", "TV CONSOLE", "WADROPE IMAGE"
  ];

  // 1. Filter the big list first
  const filteredProducts = selectedCategory === "ALL"
    ? products
    : products.filter(item => item.category === selectedCategory);

  // 2. Create the smaller "Slice" for the screen
  const displayProducts = filteredProducts.slice(0, visibleCount);

  // 3. Logic to show more
  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  // 4. Logic to switch categories and reset count
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(12); // Always go back to 12 when switching
  };

  const phoneNumber = "2348035059077"; 
  const email = "kingsfurniture68@gmail.com";
  const getWhatsappLink = (name) => `https://wa.me/${phoneNumber}?text=Inquiry: ${name}`;
  const getEmailLink = (name) => `mailto:${email}?subject=Inquiry: ${name}`;

  return (
    <PageTransition>
      <section className="products">
        <header className="products-header">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our Collection
          </motion.h1>
          <div className="header-accent-line"></div>
          
          <div className="filter-bar">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                // FIXED: Use the handler function here!
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="products-grid">
          <AnimatePresence mode="popLayout">
            {/* FIXED: Map over displayProducts, not filteredProducts! */}
            {displayProducts.map((item) => (
              <motion.div 
                layout
                className="product-card" 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="product-image-wrapper">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="product-info">
                  <span className="product-cat">{item.category}</span>
                  <h3>{item.name}</h3>
                  <div className="product-actions">
                    <a href={getWhatsappLink(item.name)} target="_blank" rel="noopener noreferrer" className="action-btn whatsapp-btn">WhatsApp</a>
                    <a href={getEmailLink(item.name)} className="action-btn email-btn">Email</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FIXED: Added the Load More Button UI here */}
        {visibleCount < filteredProducts.length && (
          <div className="load-more-container" style={{ textAlign: "center", padding: "40px 0" }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="view-all-btn" // Using your existing class
              onClick={loadMore}
            >
              Show More Designs
            </motion.button>
          </div>
        )}
      </section>
    </PageTransition>
  );
};

export default Products;