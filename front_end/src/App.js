import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home"
import SignUp from "./home/signup/SignUp";
import Buyer from "./buyer/Buyer"
import AutionProducts from "./buyer/AutionProducts"
import ProductDetail from "./buyer/ProductDetail"
import Seller from "./seller/pages/sell_page/SellPage"
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
        <Route path="/productdetail" element={<ProductDetail />} />

        <Route path="/seller" element={<Seller />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/status" element={<Status />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
