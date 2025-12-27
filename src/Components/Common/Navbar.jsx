import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../ui/HamburgerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar relative">
      <Link
        className="text-primary-color font-editorial text-2xl md:absolute md:left-1/2 md:-translate-x-1/2"
        to="/"
      >
        Resonance Rehab
      </Link>
      <HamburgerButton
        className="md:ml-auto md:pr-7"
        isOpen={isOpen}
        toggle={toggleMenu}
      />

      {/* Mobile Menu Overlay (Optional, for visualization) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full p-4 border-t border-primary-color/10">
          {/* Menu items would go here. For now, just showing the state change visually. */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
