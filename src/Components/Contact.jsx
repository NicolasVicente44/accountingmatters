import React from "react";
import CalendlyWidget from "../Components/CalendyWidget";

const ContactSection = () => {
  return (
    <section className="bg-white  flex justify-center">
      <div className="container px-6 pt-5 mx-auto">
        <div className="text-center">
          <p className="font-medium text-2xl text-black">Consult with us</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Get in touch
          </h1>

          <p className="mt-3 text-gray-500 text-2xl dark:text-gray-400">
            Our friendly team would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 pb-5 pt-5">
          {" "}
          <div className="text-center">
            <div className="inline-block p-3 text-black rounded-full border border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <h2 className="mt-2 text-base font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-1 text-md text-gray-500 text-xl dark:text-gray-400">
              Our friendly team is here to help.
            </p>
            <p className="mt-1 text-md text-black">hello@merakiui.com</p>
          </div>
          <div className="text-center">
            <div className="inline-block p-3 text-black rounded-full border border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>

            <h2 className="mt-2 text-base font-medium text-gray-800 dark:text-white">
              Office
            </h2>
            <p className="mt-1 text-md text-gray-500 text-xl dark:text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="mt-1 text-md text-black">
              100 mdith Street Collingwood VIC 3066 AU
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg mt-20 md:mt-5">
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
