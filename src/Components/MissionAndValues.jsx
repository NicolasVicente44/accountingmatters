import React from "react";

const MissionAndValues = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Our Mission and Values
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At Accounting Matters, our mission is to provide professional and
          personal accounting services that meet our clients' individual and
          business needs.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We uphold core values of integrity, accuracy, and affordability in all
          our interactions and services.
        </p>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Quality Services Since 2004
        </h2>
        <p className="text-lg text-gray-700">
          We've been proudly providing quality bookkeeping and tax services
          since 2004. Count on us for all your financial needs.
        </p>
      </div>
    </div>
  );
};

export default MissionAndValues;
