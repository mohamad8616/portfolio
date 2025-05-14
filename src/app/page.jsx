"use client";
import { motion } from "framer-motion";
import Portfolio from "@/components/portfolio/Portfolio";
import Hero from "@/components/Hero";
import WhatIOffer from "@/components/WhatIOffer";
// import Home from "@/components/Home";

export default function Page() {
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
}
