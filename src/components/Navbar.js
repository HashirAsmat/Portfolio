"use client";

import {useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  // Default darkMode to true
  const [darkMode, setDarkMode] = useState(true);
  const currentPath = usePathname(); // Get the current path

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("light");
  };

  const links = [
    { name: "Work", path: "/" }, // Set the path for "Work" to "/"
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="p-4 flex items-end justify-between md:p-10 sm:w-full">
      {/* Container for 'Hashir.' text, dark mode toggle, and moon icon */}
      <div className="flex items-end space-x-3">
        <span className="hidden md:block text-3xl font-bold text-color_h1">Hashir.</span>

        {/* Dark mode toggler button */}
        <label className="flex items-baseline cursor-pointer pb-1">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="hidden"
          />
          <span className="bg-gray-700 w-8 h-5 rounded-full relative flex items-center">
            <span
              className={`w-3 h-3 bg-white rounded-full transition-transform ${
                darkMode ? "translate-x-1" : "translate-x-4"
              }`}
            ></span>
          </span>
        </label>

        {/* Moon icon and Sun icon */}
      
        {darkMode ?  <FontAwesomeIcon icon={faMoon} className="text-purple-700 text-xl pb-1" /> :  <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-xl pb-1" /> }
      </div>

      {/* Container for navigation links */}
      <div className="flex space-x-6 md:space-x-20 items-end pr-2 ">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              currentPath === link.path
                ? `border-t-4 ${darkMode ? "border-white" : "border-black"}`
                : ""
            } hover:text-gray-400 text-color_link font-bold min-h-[50px] flex items-end`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
