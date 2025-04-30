"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
const hambergerMenuLine = "block h-1 w-full bg-black rounded";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

const centerVariants = {
  closed: {
    rotate: 1,
  },
  opened: {
    rotate: 0,
  },
};
const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

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

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full items-center justify-between px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden w-1/3 gap-4 md:flex">
        {/* LINK ITEMS */}
        {links.map((link) => (
          <NavLinks key={link.title} link={link} />
        ))}
      </div>
      <div className="justify-center md:hidden lg:flex xl:w-1/3"></div>
      <div className="hidden w-1/3 gap-4 md:flex">
        <Link href="www.github.com/mohamad8616">
          {/* <Image width={24} height={24} src="/github.png" alt="GitHub" /> */}
          <FaGithub className="text-[#415A77]" width={30} height={30} />
        </Link>

        <Link href="www.linkedin.com/in/mohamad-abdolahi">
          {/* <Image width={24} height={24} src="/linkedin.png" alt="LinkedIn" /> */}
          <FaLinkedin className="text-blue-600" width={30} height={30} />
        </Link>
        <Link href="instagram.com">
          {/* <Image width={24} height={24} src="/instagram.png" alt="Instagram" /> */}
          <FaInstagram className="text-red-600" width={30} height={30} />
        </Link>
      </div>
      {/* RESPOSIVE MENU */}
      <div className="md:hidden">
        <button
          className="relative z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            variants={topVariants}
            className={`${hambergerMenuLine} origin-left bg-[var(--btn-ternary)]`}
            animate={open ? "opened" : "closed"}
          ></motion.span>
          <motion.span
            variants={centerVariants}
            className={`${hambergerMenuLine} ${open ? "" : "bg-[var(--btn-ternary)]"} `}
            animate={open ? "opened" : "closed"}
          ></motion.span>
          <motion.span
            variants={bottomVariants}
            className={`${hambergerMenuLine} origin-left bg-[var(--btn-ternary)]`}
            animate={open ? "opened" : "closed"}
          ></motion.span>
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
    </div>
  );
}

export default Navbar;
