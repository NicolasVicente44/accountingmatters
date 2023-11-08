import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/nicolas-a-vicente44/30min"
      style={{ minWidth: "200px", height: "900px" }}
    >
      {/* You can add any additional content or styling here if needed */}
    </div>
  );
};

export default CalendlyWidget;
