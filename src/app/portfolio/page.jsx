"use client";
import { motion } from "framer-motion";
function PortFlio() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>Contact Us</div>
    </motion.div>
  );
}

export default PortFlio;
