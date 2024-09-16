"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between py-3 bg-[tomato]">
        <h1 className=" text-2xl text-gray-900 ml-5">
          <span className="italic font-bold text-gray-100 text-3xl mr-2">
            NOHAMA
          </span>
          Pest Control
        </h1>
        <div className="flex md:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            <img
              className={`${isMenuOpen ? "hidden" : "block"}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="48"
              height="48"
              alt="Open Menu"
            />
            <img
              className={`${isMenuOpen ? "block" : "hidden"}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="48"
              height="48"
              alt="Close Menu"
            />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-1/2 md:flex text-right mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none justify-end mr-10 text-lg `}
        >
          <Link
            href="/"
            className="block md:inline-block text-gray-900 hover:text-white px-7 py-3 border-b-2 border-teal-900 md:border-none"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block md:inline-block text-gray-900 hover:text-white px-7 py-3 border-b-2 border-teal-900 md:border-none"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block md:inline-block text-gray-900 hover:text-white px-7 py-3 border-b-2 border-teal-900 md:border-none"
          >
            Services
          </Link>
          <Link
            href="/teams"
            className="block md:inline-block text-gray-900 hover:text-white px-7 py-3 border-b-2 border-teal-900 md:border-none"
          >
            Teams
          </Link>
        </div>
      </nav>
    </>
  );
}

// why is it overlapping
