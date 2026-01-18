import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen h-auto sm:h-screen bg-background flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-12 sm:py-0"
    >
      {/* Scribble Decoration */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-[40%] -translate-y-[20%] w-[200px] sm:w-[250px] md:w-[335px] pointer-events-none z-0 opacity-60 sm:opacity-80">
        <svg
          viewBox="0 0 335 335"
          className="w-full rotate-[347deg]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 167.5C50 100 100 50 167.5 50C235 50 285 100 285 167.5C285 235 235 285 167.5 285C100 285 50 235 50 167.5Z"
            stroke="#6942B5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Text */}
      <div className="relative z-10 text-center mb-6 sm:mb-8">
        <h2 className="font-autumn text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-tight text-primary-color px-2">
          <span>Every </span>
          <span className="text-secondary-color">small step</span>
          <span> leads</span>
          <br />
          <span>to a </span>
          <span className="text-secondary-color">brighter </span>
          <span>tomorrow.</span>
        </h2>

        <p className="font-urbanist font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-secondary-color mt-5 sm:mt-6 md:mt-8 px-4">
          Let's take that step together.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 w-full sm:w-auto max-w-sm sm:max-w-none">
        <button
          className="bg-button-main text-primary-color font-urbanist font-bold text-[14px] sm:text-[15px] md:text-[16px] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-ring w-full sm:w-auto"
          aria-label="Book a therapy session"
        >
          Book a Session
        </button>
        <button
          className="bg-[#bbb5fd] text-primary-color font-urbanist font-medium text-[14px] sm:text-[15px] md:text-[16px] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-ring w-full sm:w-auto"
          aria-label="Talk to our team"
        >
          Talk to Us
        </button>
      </div>
    </div>
  );
});

export default Contact;