import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import Home from "./home/Home"
import SignUp from "./home/signup/SignUp";
import Buyer from "./buyer/Buyer"
import ProductDetail from "./buyer/ProductDetail"
import SearchResult from "./search/SearchResult";
import History from "./history/History";
import HistoryDetail from "./history/HistoryDetail";

import Profile from "./user/Profile";
import Payment from "./user/Payment";
import Address from "./user/Address";
import Password from "./user/Password";
import Privacy from "./user/Privacy";

import Seller from "./seller/pages/sell_page/SellPage"
import Manager from "./seller/pages/manger/Maneger"
import SellerProfile from "./seller/pages/profile/Profile"
import Status from "./seller/pages/status/Status"

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="/productdetail/:id" element={<ProductDetail />} />
      
          <Route path="/search/:keyword" element={<SearchResult />} />
          <Route path="/history" element={<History />} />
          <Route path="/historydetails/:id" element={<HistoryDetail />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/seller/profile" element={<SellerProfile />} />
          <Route path="/seller/manager" element={<Manager />} />
          <Route path="/seller/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;