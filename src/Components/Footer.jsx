import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update the year every minute (you can adjust the interval as needed)



    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-20" style={{ background: "rgb(44, 44, 44)" }}>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 gap-8 text-white md:p-20">
        <div className="md:col-span-1">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <ul>
            <li>
              <a href="#">Portal Login</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-2xl font-semibold">Contact Information</h1>
          <ul>
            <li>Company Name</li>
            <li>92 Commerce Park Drive</li>
            <li>Barrie, Ontario, Canada</li>
            <li>Phone: (800) 896-4500</li>
            <li>Fax:</li>
            <li>
              <a href="mailto:support@cpasitesolutions.com">
                support@cpasitesolutions.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 items-center text-center">
          <div className="">
            <iframe src="https://maps.google.com/?q=92 Commerce Park Drive, Barrie, Ontario, Canada&iwloc=near&z=15&output=embed&layer=svpano&maptype=hybrid&dirflg=d&z=15"></iframe>
          </div>
        </div>
      </div>
      <p className="text-white flex items-center justify-center">
  &copy; {currentYear} Accounting Matters. All rights reserved.
  
</p>

    </div>
  );
};

export default Footer;
