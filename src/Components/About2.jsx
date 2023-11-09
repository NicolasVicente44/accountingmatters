import React from "react";

const About2 = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-5 pt-5">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary lg:text-lg">
                Meet With us to Address your needs.{" "}
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark  sm:text-4xl md:text-[40px]">
                Our Consultation Fee
              </h2>
              <p className="text-base text-body-color lg:text-lg">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              price="$0"
              description="Perfect for addressing your needs as a client."
              buttonText="Free Consultation"
              active
            >
              <List>Industry leading software access</List>
              <List>Decades of experience</List>
              <List>Local team and office</List>
              <List>Free adjustments</List>
              <List>Fully licensed</List>
              <List>Regular support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-full lg:w-full">
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing  sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <span className="mb-3 block text-lg font-semibold text-primary">
            {type}
          </span>
          <h2 className="mb-5 text-[42px] font-bold text-dark ">
            {price}
            <span className="text-base font-medium text-body-color ">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color ">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <a
            href="/consult"
            className={` ${
              active
                ? "block w-full rounded-md border border-primary p-3 text-center text-base font-medium  transition hover:bg-opacity-90"
                : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary "
            } `}
          >
            {buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return <p className="text-base text-body-color">{children}</p>;
};
