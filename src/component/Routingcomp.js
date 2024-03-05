import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import Home from './Home';
import Cart from "./Cart";

const Routingcomp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<CheckoutPage />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
};

export default Routingcomp;
