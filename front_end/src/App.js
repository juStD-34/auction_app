import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home"
import SignUp from "./home/signup/SignUp";
import Buyer from "./buyer/Buyer"
import AutionProducts from "./buyer/AutionProducts"

import Seller from "./seller/pages/sell_page/SellPage"
import Seller_Profile from "./seller/pages/profile/Profile"

import Manager from "./seller/pages/manger/Maneger"
import Status from "./seller/pages/status/Status"



import Profile from "./user/Profile";
import Payment from "./user/Payment";
import Address from "./user/Address";
import Password from "./user/Password";
import Privacy from "./user/Privacy";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/user/account/profile" element={<Profile />} />
        <Route path="/user/account/payment" element={<Payment />} />
        <Route path="/user/account/address" element={<Address />} />
        <Route path="/user/account/password" element={<Password />} />
        <Route path="/user/account/privacy" element={<Privacy />} />

        <Route path="/buyer" element={<Buyer />} />
        <Route path="/autionproducts" element={<AutionProducts />} />

        <Route path="/seller" element={<Seller />} />
        <Route path="seller/manager" element={<Manager />} />
        <Route path="seller/status" element={<Status />} />
        <Route path="seller/profile" element={<Seller_Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
