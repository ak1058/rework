import React from "react";
import Image from "next/image";
import TablePerson from '@/app/assets/img2.svg';

const FeaturePage = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
            <Image
              src={TablePerson}
              alt="Person at Table"
              width={400}
              height={400}
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#E6AE0E] mb-4">About us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              We deliver: Quality
            </h3>
            <p className="text-gray-700 mb-6">
              Scoul Mate by Deskmate AI Technologies provides you world-class
              management software for your school, allowing you to handle
              everything you need.
            </p>
            <button className="bg-yellow-400 text-gray-900 py-3 px-6 rounded hover:bg-yellow-300">
              Get the Quotation Today →
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h4 className="text-2xl font-bold text-gray-800 mb-6">
            Some of the Top Featues
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-300">
            {[
              {
                title: "Attendance Tracking",
                description:
                  "Teacher will update, parent and admin take updates.",
              },
              {
                title: "Exams / Tests",
                description:
                  "From scheduling to grading, we cover a lot in compact.",
              },
              {
                title: "Homework / Assignments",
                description:
                  "Assign it and yes this time parent will know what needs to be done.",
              },
              {
                title: "Fees Submissions",
                description:
                  "Well, we know it is important to get the fee on time, so we provide this feature :)",
              },
              {
                title: "Custom features you want",
                description:
                  "We gave an application where you can add any feature you are missing.",
              },
              {
                title: "Custom Messages to parents",
                description:
                  "Helps teachers communicate with parents to achieve better results.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 ${
                  index % 3 !== 2 ? "border-r border-gray-300" : ""
                } ${index < 3 ? "border-b border-gray-300" : ""}`}
              >
                <h5 className="text-xl font-bold text-gray-800 mb-2">
                  0{index + 1}. {feature.title}
                </h5>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
