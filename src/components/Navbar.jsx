"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

const hambergerMenuLine = "block h-1 w-full bg-black rounded bg-white";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

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
      <div className="w-1/3 justify-center md:hidden lg:flex">
        {/* {LOGO} */}
        <Link
          href="/"
          className="flex items-center justify-center rounded-md bg-black p-1 text-sm font-semibold"
        >
          <span className="mr-1 text-white">Lama</span>
          <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-black">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden w-1/3 gap-4 md:flex">
        <Link href="/">
          <Image width={24} height={24} src="/github.png" alt="GitHub" />
        </Link>
        <Link href="/">
          <Image width={24} height={24} src="/facebook.png" alt="Facebook" />
        </Link>
        <Link href="/">
          <Image width={24} height={24} src="/linkedin.png" alt="LinkedIn" />
        </Link>
        <Link href="/">
          <Image width={24} height={24} src="/instagram.png" alt="Instagram" />
        </Link>
        <Link href="/">
          <Image width={24} height={24} src="/pinterest.png" alt="Pinterest" />
        </Link>
      </div>
      {/* RESPOSIVE MENU */}
      <div className="md:hidden">
        <button
          className="relative z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen(!open)}
        >
          <span className={hambergerMenuLine}></span>
          <span className={hambergerMenuLine}></span>
          <span className={hambergerMenuLine}></span>
        </button>
        {/* MENU ITEMS */}
        {open && (
          <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
