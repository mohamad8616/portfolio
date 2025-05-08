"use client";

import Portfolio from "@/components/portfolio/Portfolio";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import WhatIOffer from "@/components/WhatIOffer";

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-auto w-full"
    >
      <Hero />
      <WhatIOffer />
      <Portfolio />
    </motion.div>
  );
};

export default Homepage;
