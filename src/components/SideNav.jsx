"use client";
import { logout } from "@/lib/form-action";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPlus, FiFolder } from "react-icons/fi";

const SideNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Create Project", icon: FiPlus },
    { href: "/admin/projects", label: "Projects", icon: FiFolder },
  ];

  return (
    <aside className="hidden h-auto w-4/12 flex-col items-start justify-start bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-8 md:flex">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-400">Manage your projects</p>
      </div>

      <nav className="w-full">
        <ul className="flex w-full flex-col space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <form action={logout}>
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white transition-all duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2"
          >
            logout
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default SideNav;
