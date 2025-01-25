"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";

const Navbar = ({ onLinkClick }) => {
  return (
    <nav className="bg-yellow-400 py-4 px-6 flex items-center justify-between fixed top-0 w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={32} height={32} className="mr-2" />
        <span className="text-gray-800 font-bold text-lg">Scoul Mate</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
        <li>
          <a href="" className="hover:text-gray-600">
            For Schools
          </a>
        </li>
        <li>
          <a href="" className="hover:text-gray-600">
            Parents and Teachers
          </a>
        </li>
        <li></li>
        <li>
          <button
            className="hover:text-gray-600"
            onClick={() => onLinkClick("feature")}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            className="hover:text-gray-600"
            onClick={() => onLinkClick("pricing")}
          >
            Pricing
          </button>
        </li>
      </ul>

      {/* Get In Touch Button */}
      <div>
        <a
              href="mailto:deskmateai@gmail.com?subject=Query"
              className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700"
            >
              Get In Touch
            </a>
      </div>
    </nav>
  );
};

export default Navbar;
