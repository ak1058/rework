"use client";
import React from "react";
import Image from "next/image";
import MobileImage from '@/app/assets/hero-image.svg';; // Replace with your actual image path

const Pricing = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-white">
      <div className="w-full max-w-4xl border border-gray-300 rounded-lg p-8 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <p className="text-gray-500 text-lg">No Package</p>
          <h3 className="text-gray-800 text-2xl font-bold">No Hidden Charges</h3>
          <p className="text-gray-500 text-lg">No Bond</p>
        </div>

        {/* Center Image */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image
            src={MobileImage}
            alt="Mobile Illustration"
            width={200}
            height={300}
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-gray-800 text-xl font-medium mb-2">
            Price you never see before
          </h3>
          <h2 className="text-gray-900 text-3xl font-bold mb-2">
            Just @ ₹ 15*
          </h2>
          <p className="text-gray-700 text-lg">per student per month</p>
          <p className="text-gray-700 text-lg">and all yours</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
