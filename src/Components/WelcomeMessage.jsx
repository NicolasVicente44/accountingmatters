import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="bg-gray-200 border-t-2 border-b-2 border-gray-400 p-20 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome to Accounting Matters
      </h2>
      <p className="text-lg text-gray-700 mt-4">
        We are a local firm licensed in barrie offering a broad range of
        services for business owners, executives, and independent professionals.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        We are affordable, experienced, and friendly.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Please call us today at (800) 896-4500. We'll be happy to offer you a
        free initial consultation.
      </p>
      <button>
        <p className="text-lg text-white bg-red-500 hover:bg-gray-500 transition duration-300 ease-in-out p-4 font-semibold mt-8 rounded-full">
          Consult With Us
        </p>
      </button>
    </div>
  );
};

export default WelcomeMessage;
