"use client";
import { motion, useInView } from "framer-motion";
const skilItemStyles =
  "cursor-pointer rounded dark:bg-[var(--btn-ternary)] p-2 text-sm dark:text-[var(--primary)] hover:bg-white hover:text-black bg-stone-800 text-stone-200 duration-200 transition-colors";
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
      <div className={skilItemStyles}>JavaScript</div>
      <div className={skilItemStyles}>TypeScript</div>
      <div className={skilItemStyles}>React.js</div>
      <div className={skilItemStyles}>Next.js</div>
      <div className={skilItemStyles}>SCSS</div>
      <div className={skilItemStyles}>Tailwind CSS</div>
      <div className={skilItemStyles}>Node.js</div>
      <div className={skilItemStyles}>GraphQL</div>
      <div className={skilItemStyles}>Apollo</div>
      <div className={skilItemStyles}>Redux</div>
      <div className={skilItemStyles}>Framer Motion</div>
      <div className={skilItemStyles}>Three.js</div>

      <div className={skilItemStyles}>Webpack</div>
      <div className={skilItemStyles}>Vite</div>
      <div className={skilItemStyles}>Docker</div>
      <div className={skilItemStyles}>Git</div>
      <div className={skilItemStyles}>Figma</div>
    </motion.div>
  );
}

export default AboutSkills;
