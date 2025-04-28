"use client";
import { motion, useInView } from "framer-motion";

function AboutSkills({ skillRef }) {
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: true,
  });
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      className="flex flex-wrap gap-4"
    >
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        JavaScript
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        TypeScript
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        React.js
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Next.js
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        SCSS
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Tailwind CSS
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Node.js
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        GraphQL
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Apollo
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Redux
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Framer Motion
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Three.js
      </div>

      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Webpack
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Vite
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Docker
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Git
      </div>
      <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
        Figma
      </div>
    </motion.div>
  );
}

export default AboutSkills;
