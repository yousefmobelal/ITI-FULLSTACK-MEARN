"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-[#1A1A1A] text-white py-4 px-6 md:px-20 fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-white text-lg font-semibold">Estate</h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md transition duration-300 ${
                  pathname === link.href
                    ? "bg-[#262626] text-white"
                    : "hover:bg-[#262626] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-[#141414] p-4 rounded-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                pathname === link.href
                  ? "bg-[#262626] text-white"
                  : "hover:bg-[#262626] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
