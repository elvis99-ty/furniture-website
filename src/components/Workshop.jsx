import React from "react";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import "./Workshop.css";

// VIDEOS
import video1 from "../assets/videos/Bed-structure.mp4";
import video2 from "../assets/videos/Door-pressing-machine.mp4";
import video3 from "../assets/videos/Kitchen-cabinet.mp4";
import video4 from "../assets/videos/Kitchen-cabinet2.mp4";
import video5 from "../assets/videos/Kitchen-cabinet3.mp4";
import video6 from "../assets/videos/Wadrobe.mp4";
import video7 from "../assets/videos/Wadrobe2.mp4";
import video8 from "../assets/videos/Cutting-of-kitchen-cabinet.mp4";
import video9 from "../assets/videos/Kitchen-setting.mp4";
import video10 from "../assets/videos/Leaping-of-doors-and-frames.mp4";


const workshopVideos = [
  {
    id: 1,
    title: "Bed Structure Processing",
    videoSrc: video1,
    description: "Watch as we produce the best comfort for you."
  },
  {
    id: 2,
    title: "Door Pressing Machine",
    videoSrc: video2,
    description: "A behind the scene look at the recent door structure in our catalogue."
  },
  {
    id: 3,
    title: "Kitchen Cabinet Crafting",
    videoSrc: video3,
    description: "Precision engineering for the heart of your home."
  },
  {
    id: 4,
    title: "Kitchen Cabinet Crafting",
    videoSrc: video4,
    description: "Precision engineering for the heart of your home."
  },
  {
    id: 5,
    title: "Kitchen Cabinet Crafting",
    videoSrc: video5,
    description: "Precision engineering for the heart of your home."
  },
  {
    id: 6,
    title: "Kitchen Cabinet Crafting",
    videoSrc: video6,
    description: "Precision engineering for the heart of your home."
  },
  {
    id: 7,
    title: "Kitchen Cabinet Crafting",
    videoSrc: video7,
    description: "Precision engineering for the heart of your home."
  },
  {
    id : 8,
    title : "Cutting of kitchen cabinet",
    videoSrc : video8,
    description: "Cutting-of-kitchen-cabinet"
  },
  {
    id : 9,
    title : "Kitchen setting",
    videoSrc : video9,
    description: "Kitchen-setting"
  },
  {
    id : 10,
    title : "Leaping of doors and frames",
    videoSrc : video10,
    description: "Leaping-of-doors-and-frames"
  }
];

const Workshop = () => {
  return (
    <PageTransition>
      <section className="workshop-section">
        <header className="workshop-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Workshop
          </motion.h1>
          <div className="header-accent-line"></div>
          <p>Experience the craftsmanship behind every piece of Kings Furniture.</p>
        </header>

        <div className="workshop-grid">
          {workshopVideos.map((item) => (
            <motion.div 
              className="workshop-card" 
              key={item.id}
              whileHover={{ y: -10 }}
            >
              <div className="video-container">
                <video 
                  width="100%" 
                  controls 
                  preload="metadata"
                  className="workshop-video"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="workshop-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Workshop;