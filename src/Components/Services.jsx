import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillCalculatorFill } from "react-icons/bs";
import { BsClipboard2DataFill } from "react-icons/bs";
import { SiQuickbooks } from "react-icons/si";

const Services = () => {
  return (
    <div className="services-feature flex flex-wrap justify-center mr-20 ml-20 pt-20 pb-20">
      <a
        href="/services"
        className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
      >
        <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
          <BsFillPeopleFill className="individual text-6xl text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">
          Services for Individuals
        </h3>
        <p className="mt-2 text-center">
          Protecting your personal assets
          <br />
          has never been more important.
        </p>
      </a>
      <a
        href="/services"
        className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
      >
        <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
          <BsFillCalculatorFill className="business text-6xl text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">
          Business Services
        </h3>
        <p className="mt-2 text-center">
          Are you running your business
          <br />
          at peak performance?
        </p>
      </a>
      <a
        href="/services"
        className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
      >
        <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
          <BsClipboard2DataFill className="tax text-6xl text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">Tax Services</h3>
        <p className="mt-2 text-center">
          Don't pay more in taxes
          <br />
          than you have to!
        </p>
      </a>
      <a
        href="/services"
        className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center mt-6 hover:text-red-500 hover:scale-105 transition-transform"
      >
        <div className="rounded-full bg-gray-300 border-2 border-gray-600 p-4">
          <SiQuickbooks className="quickbooks text-6xl text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">
          QuickBooks Services
        </h3>
        <p className="mt-2 text-center">
          Put this robust software
          <br />
          to work for you.
        </p>
      </a>
    </div>
  );
};

export default Services;
