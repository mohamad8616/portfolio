// import PortfolioHire from "./PortfolioHire";
// import ProjectList from "./ProjectList";
// // import { getAllProjects } from "@/lib/db";
// export default function Portfolio() {
//   // const projects = db.prepare("SELECT * FROM projects").all();

//   return (
//     <>
//       <ProjectList />
//       <PortfolioHire />
//     </>
//   );
// }
"use client";
import { items } from "@/utility/data";
import { motion, useScroll, useTransform } from "framer-motion";

import { Suspense, useEffect, useRef, useState } from "react";

import PortfolioHire from "./PortfolioHire";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [dbItems, setDbItems] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const { count, data, success } = await res.json();
        setDbItems(data);
        setCount(count);
        console.log("Fetched dbItems:", data);
        if (!success) {
          throw new Error("Failed to fetch projects");
        }

        console.log(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);
  const ref = useRef();
  console.log(dbItems);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <div className={`relative mt-20 h-[200vh]`} ref={ref}>
        <div className="sticky top-0 flex h-screen w-full items-center gap-2 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full items-center"
            id="portfolio"
          >
            <Suspense>
              {dbItems &&
                dbItems.map((item) => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
            </Suspense>
          </motion.div>
        </div>
      </div>
      <PortfolioHire />
    </>
  );
};

export default Portfolio;
