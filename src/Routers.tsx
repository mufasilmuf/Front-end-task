import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default Routers;
