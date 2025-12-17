import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CollectionSection from "../components/CollectionSection";
import Blog from "../components/Blog";
import Contact from "../components/Contatc";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;