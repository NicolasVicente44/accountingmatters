import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="" className="h-20 mr-3" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-gray-500  dark:text-black">
            Accounting Matters
          </span>
        </a>
         
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg md:dark:bg-white dark:border-gray-200">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl  text-black hover:text-gray-500  rounded md:bg-transparent md:text-xl md:black md:p-0 dark:text-black md:dark:text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-gray-500  text-black rounded md:bg-transparent md:text-xl md:text-black md:p-0 dark:text-black md:dark:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-gray-500  text-black  rounded md:bg-transparent md:text-xl md:text-black md:p-0 dark:text-black md:dark:text-black"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-gray-500  text-black  rounded md:bg-transparent md:text-xl md:text-black md:p-0 dark:text-black md:dark:text-black"
              >
                Resources
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-gray-500  text-black  rounded md:bg-transparent md:text-xl md:text-black md:p-0 dark:text-black md:dark:text-black"
              >
                Contact
              </a>
            </li>
          </ul>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
