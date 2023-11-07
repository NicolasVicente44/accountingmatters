import React from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidGroup } from "react-icons/bi";

const TeamAndExpertise = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Our Team and Expertise
        </h2>
        <p className="text-lg text-black mb-6">
          Our dedicated team of experts brings a wealth of experience and
          knowledge to every client engagement.
        </p>
        <p className="text-lg text-gray-700">
          With qualifications in accounting, tax, and financial management,
          we're here to make your financial matters simple and stress-free.
        </p>

        <div className="services-feature flex flex-wrap justify-center mr-20 ml-20 pt-20 pb-20">
          <a
            href="/"
            className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
          >
            <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
              <BsFillBarChartFill className="quickbooks text-6xl text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-center">
              Business Efficiency
            </h3>
            <p className="mt-2 text-center">
              We boost business insights
              <br />
              to work for you.
            </p>
          </a>
          <a
            href="/"
            className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
          >
            <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
              <AiOutlineSearch className="quickbooks text-6xl text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-center">
              In your backyard{" "}
            </h3>
            <p className="mt-2 text-center">
              Local to barrie and <br />
              serving since 2004.{" "}
            </p>
          </a>
          <a
            href="/"
            className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
          >
            <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
              <BiSolidGroup className="quickbooks text-6xl text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-center">
              Experienced Professionals{" "}
            </h3>
            <p className="mt-2 text-center">
              Robust and personal team <br />
              with decades of experience.{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamAndExpertise;
