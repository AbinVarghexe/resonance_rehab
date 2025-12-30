import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/pages/Hero";
import AboutUs from "./components/pages/AboutUs";
import FrequentlyAsked from "./components/pages/FrequentlyAsked";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/frequently-asked" element={<FrequentlyAsked />} />
      </Routes>
    </>
  );
};

export default App;
