"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavLinks({ link }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <Link
      href={link.href}
      className={` ${isActive ? "hover: bg-slate-900 text-slate-100 hover:scale-105 dark:bg-purple-600" : ""} rounded p-1 transition-all duration-300 hover:bg-[#E0E1DD] hover:text-[#0D1B2A]`}
    >
      {link.title}
    </Link>
  );
}

export default NavLinks;
