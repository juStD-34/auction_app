import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home"
import SignUp from "./home/signup/SignUp";
import Buyer from "./buyer/Buyer"
import Seller from "./seller/Seller"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
