"use client";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>About Us</div>
    </motion.div>
  );
}

export default About;
