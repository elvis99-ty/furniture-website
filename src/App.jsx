import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CollectionSection from "./components/CollectionSection";
import Blog from "./components/Blog";
import Contact from "./components/Contatc";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <CollectionSection/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default App;