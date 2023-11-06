import React from "react";
import heroImage from "../Assests/accounting-hero/581.jpg";

const Hero = () => {
  return (
    <div className="bg-gray-200 border-t-2 border-b-2 border-gray-400">
      <div className="container mx-auto p-2 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Accounting Hero"
            className="w-full h-full rounded-full shadow-md hidden md:block"
            style={{ objectFit: "cover", transform: "scale(0.8)" }} // Adjust the scale value
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Welcome to <span className="text-red-500">Accounting Matters</span>
          </h1>
          <p className="text-lg text-center mt-4 text-gray-700">
            Your trusted partner for all your{" "}
            <span className="font-semibold">accounting</span> needs
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="#"
              className="bg-red-500 text-white py-2 px-6 rounded-full text-lg hover:bg-gray-500 transition duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
