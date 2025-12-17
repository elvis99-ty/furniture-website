import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Product";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
    <Navbar/>

    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
      </Routes>
    </AnimatePresence>

    <Footer/>
    </>
  );
}

export default App;