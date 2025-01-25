"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Cap from "@/app/assets/cap.svg";
import HeroImage from "@/app/assets/hero-image.svg";

const Hero = ({onLinkClick}) => {
  const featureRef = useRef(null);

  // Handle scroll to Feature section
  

  return (
    <section className="bg-yellow-400 min-h-screen flex items-center justify-center rounded-b-2xl">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <Image
              src={Cap} // Graduation cap image
              alt="Graduation Cap"
              width={85}
              height={68}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Streamline Your <br />
            <span className="text-gray-900">School Operations</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Integrated tools for smarter school administration and improved
            educational experiences.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            {/* Talk with Us Button (mailto) */}
            <a
              href="mailto:deskmateai@gmail.com?subject=Query"
              className="bg-gray-800 text-white py-2 px-5 rounded hover:bg-gray-700 flex items-center"
            >
              Talk with us
              <span className="ml-2">→</span>
            </a>

            {/* Features Button (scroll to Feature section) */}
            <button
              onClick={() => onLinkClick("feature")}
              className="bg-yellow-300 text-gray-900 py-2 px-5 rounded hover:bg-yellow-200 flex items-center border"
            >
              Features
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={HeroImage} // Hero illustration
            alt="Hero Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
