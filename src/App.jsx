import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Section/Hero";
import SecondPage from "./Components/Pages/SecondPage";
import Navbar from "./Components/Common/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </>
  );
};

export default App;
