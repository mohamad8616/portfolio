"use client";
import Portfolio from "@/components/Portfolio";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-[calc(100vh-6rem)] w-screen items-center justify-center text-center text-8xl">
        My Works
      </div>
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;
