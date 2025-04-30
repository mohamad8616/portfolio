"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavLinks({ link }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <Link
      href={link.href}
      className={` ${isActive ? "bg-[#E0E1DD] text-[#0D1B2A]" : ""} rounded p-1`}
    >
      {link.title}
    </Link>
  );
}

export default NavLinks;
