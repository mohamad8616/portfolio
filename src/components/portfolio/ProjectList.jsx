"use client";
import { items } from "@/utility/data";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
import { useEffect, useRef, useState } from "react";

export default function ProjectList() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const { data, success } = await res.json();
        if (!success) {
          throw new Error("Failed to fetch projects");
        }
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error loading projects: {error}</div>;
  }

  if (!projects.length) {
    return <div>No projects found.</div>;
  }

  return (
    <div className="relative mt-20 h-[200vh]" ref={ref}>
      <div className="sticky top-0 flex h-screen w-full items-center gap-2 overflow-hidden">
        <motion.div style={{ x }} className="flex" id="portfolio">
          {projects.map((project) => (
            <PortfolioItem key={project.id} item={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
