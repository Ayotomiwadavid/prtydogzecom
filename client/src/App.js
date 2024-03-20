import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
