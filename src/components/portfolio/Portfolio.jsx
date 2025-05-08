"use client";
import { items } from "@/utility/data";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import PortfolioHire from "./PortfolioHire";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <div className="relative mt-20 h-[200vh]" ref={ref}>
        <div className="sticky top-0 flex h-screen w-full items-center gap-2 overflow-hidden">
          <motion.div style={{ x }} className="flex" id="portfolio">
            {items.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
      <PortfolioHire />
    </>
  );
};

export default Portfolio;
