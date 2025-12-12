import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-20">
        <h1 className="text-2xl font-bold text-indigo-700">
          <Link to="/">FOL Converts</Link>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg text-gray-700">
          {links.map((link) => (
            <li key={link.name} className="cursor-pointer hover:text-indigo-700 transition">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <HiOutlineMenu
            size={28}
            className="cursor-pointer text-gray-700"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <HiOutlineX
            size={28}
            className="cursor-pointer text-gray-700"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-6 px-6 text-lg text-gray-700">
          {links.map((link) => (
            <li key={link.name} className="cursor-pointer hover:text-indigo-700 transition">
              <Link to={link.path} onClick={() => setSidebarOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Background overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
