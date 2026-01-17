import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../ui/HamburgerButton";
import Sidebar from "../ui/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`navbar main-navbar fixed top-0 left-0 w-full z-[9999] bg-transparent px-4 sm:px-6 md:px-0 py-3 sm:py-4 md:py-0 ${
        isOpen ? "nav-open" : ""
      }`}
    >
      <Link
        className={`text-primary-color mt-0 md:mt-3 font-editorial text-lg sm:text-xl md:text-2xl relative md:absolute md:left-1/2 md:-translate-x-1/2 z-[10002] transition-opacity duration-300 inline-block ${
          isOpen
            ? "md:opacity-0 pointer-events-none !text-[#19083b]"
            : "md:opacity-100"
        }`}
        to="/"
      >
        Resonance Rehab
      </Link>
      <HamburgerButton
        className={`md:ml-auto md:pr-7 z-[10001] ml-auto ${
          isOpen ? "[&_span]:!bg-[#19083b]" : ""
        }`}
        isOpen={isOpen}
        toggle={toggleMenu}
      />

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;