import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Product";
import Footer from "./components/Footer";
import Workshop from "./components/Workshop";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* FIX 2: Changed path from '/Workshop' to '/workshop' to match your button */}
          <Route path="/workshop" element={<Workshop />} /> 
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;