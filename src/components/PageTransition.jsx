import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        minHeight: "100vh",
        /* Adjusted paddingTop to bring content closer to the Navbar */
        paddingTop: "20px", 
        width: "100%"
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;