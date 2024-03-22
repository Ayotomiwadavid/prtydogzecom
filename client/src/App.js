import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/user/login" element={<Registration />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
