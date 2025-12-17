import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import "./Product.css";

import Doorimage from "../images/Door image 2.jpg"
import Dinningimage from "../images/Dinning image .jpg"
import Tvconsole from "../images/Tv console.jpg"
import Wadropeimage from "../images/Wadrope image .jpg"
import Shelfimage from "../images/Shelf image .jpg"
import Officeimage from "../images/Office image .jpg"
import LivingRoom from "../images/Living Room 3.jpg"
import Kitchenimage from "../images/Kitchen image 4.jpg"
import Studyarea from "../images/Study area.jpg"

const products = [
  { id: 1, name: "Door Image", category: "Living Room", image: Doorimage},
  { id: 2, name: "Dinning Image", category: "Living Room", image: Dinningimage},
  { id: 3, name: "TV Console", category: "Living Room", image: Tvconsole},
  { id: 4, name: "Wadrope", category: "Bedroom", image: Wadropeimage},
  { id: 5, name: "Wadrope", category: "Bedroom", image: Shelfimage},
  { id: 6, name: "Wardrobe", category: "Bedroom", image: Officeimage},
  { id: 7, name: "Office Setting", category: "Office", image:LivingRoom},
  { id: 8, name: "Dinning", category: "Living Room", image:Kitchenimage},
  { id: 9, name: "Study setting", category: "Study area", image:Studyarea},
];

const Products = () => {
  // Hardcoded details as requested
  const phoneNumber = "2348035059077"; 
  const email = "kingsfurniture68@gmail.com";

  const getWhatsappLink = (productName) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hello Kings Furniture, I’m interested in the ${productName}. Please share more details.`
    )}`;

  const getEmailLink = (productName) =>
    `mailto:${email}?subject=Inquiry for ${productName}&body=${encodeURIComponent(
      `Hello Kings Furniture,\n\nI am interested in the ${productName} I saw on your website. Please share more details regarding availability and delivery.\n\nThank you.`
    )}`;

  return (
    <PageTransition>
      <section className="products">
        <header className="products-header">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Collection
          </motion.h1>
          <div className="header-accent-line"></div>
          <p className="single-description">
            Handcrafted furniture pieces designed for modern elegance.
          </p>
        </header>

        <div className="products-grid">
          {products.map((item, index) => (
            <motion.div 
              className="product-card" 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="product-image-wrapper">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-info">
                <span className="product-cat">{item.category}</span>
                <h3>{item.name}</h3>
                
                <div className="product-actions">
                  <a
                    href={getWhatsappLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn whatsapp-btn"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={getEmailLink(item.name)}
                    className="action-btn email-btn"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Products;