import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemsVariant = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

export default function ResponsiveMenu({ open, setOpen, links }) {
  return (
    <div className="z-50 md:hidden">
      <button
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center"
        onClick={() => setOpen((open) => (open = !open))}
      >
        {open ? (
          <FaTimes
            className={`text-3xl text-slate-800 dark:text-slate-200 ${open ? "text-slate-200" : ""}`}
          />
        ) : (
          <FiMenu
            className={`text-5xl font-semibold text-slate-800 dark:text-slate-200`}
          />
        )}
      </button>
      {/* MENU ITEMS */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="text-var(--btn-ternary)] absolute left-0 top-0 z-30 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl"
        >
          {links.map((link) => (
            <motion.div variants={listItemsVariant} key={link.title}>
              <NavLinks link={link} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
