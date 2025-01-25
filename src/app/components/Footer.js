"use client";

import React, { useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = ({ onLinkClick }) => {
  return (
    <footer className="bg-[#455A64] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onLinkClick("feature")}
                  className="hover:text-gray-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLinkClick("hero")}
                  className="hover:text-gray-300"
                >
                  Services
                </button>
              </li>
              <li>
                <a
                  href="mailto:deskmateai@gmail.com?subject=Query"
                  className="hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://x.com/deskmateai?lang=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/deskmate-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-500 pt-6">
          <p className="text-sm">
            © 2024 DeskMate AI Technologies LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
