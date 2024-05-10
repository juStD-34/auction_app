import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./home/Home"
import SignUp from "./home/signup/SignUp";

import IncomingAuction from "./buyer/IncomingAuction";
import OccuringAuction from "./buyer/OccuringAuction";
import ProductDetail from "./buyer/ProductDetail";
import TransportAuction from "./buyer/TransportAuction";
import OtherAuction from "./buyer/OtherAuction";
import CommonAuction from "./buyer/CommonAuction";

import SearchResult from "./search/SearchResult";
import History from "./history/History";
import HistoryDetail from "./history/HistoryDetail";

import Profile from "./user/Profile";
import Payment from "./user/Payment";
import Address from "./user/Address";
import Password from "./user/Password";
import Privacy from "./user/Privacy";

import ManagerUser from "./admin/ManagerUser";

import Seller from "./seller/pages/sell_page/SellPage"
import Manager from "./seller/pages/manger/Maneger"
import SellerProfile from "./seller/pages/profile/Profile"
import Status from "./seller/pages/status/Status"

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

          <Route path="/manageruser" element={<ManagerUser />}/>

          <Route path="/incoming" element={<IncomingAuction />}/>
          <Route path="/occuring" element={<OccuringAuction />}/>
          <Route path="/transport" element={<TransportAuction />}/>
          <Route path="/other" element={<OtherAuction />}/>
          <Route path="/common" element={<CommonAuction />}/>
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
  );
}

export default App;