"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const currentPath = usePathname();

  // 🔥 sync DOM class with state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const isLight = !darkMode;

  const links = [
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative overflow-hidden p-4 md:p-10 flex items-end justify-between w-full">

      {/* 🌗 LIGHT MODE GRADIENT */}
      {isLight && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.85) 30%,
                rgba(255,255,255,0.05) 55%,
                rgba(255,255,255,0.25) 100%
              )
            `,
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex items-end justify-between w-full">

        {/* LEFT */}
        <div className="flex items-center space-x-3 h-[50px]">
          <Link href="/" aria-label="Go to homepage" className="flex items-center h-full">
            <img
              src="/logos/NewStellarWhiteLogo.png"
              alt="Stellar logo"
              className="h-14 w-auto object-contain self-center"
            />
          </Link>

          {/* TOGGLE */}
          <label className="flex items-center cursor-pointer h-full">
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

          {/* ICON */}
          {darkMode ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="text-purple-600 text-xl pb-1"
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="text-yellow-400 text-xl pb-1"
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="flex space-x-10 items-end pr-2">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                currentPath === link.path
                  ? `border-t-4 ${
                      darkMode ? "border-white" : "border-black"
                    }`
                  : ""
              } text-color_link font-bold min-h-[50px] flex items-end hover:text-gray-400`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}