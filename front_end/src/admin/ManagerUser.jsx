import React, { useState } from 'react';
import useSeller from "../hooks/useSeller"
import useBidder from "../hooks/useBidder"
import useAllAuction from "../hooks/useAllAuction"

export default function ManagerUser(){
  const [activeTab, setActiveTab] = useState('seller'); 
  const {setLogin} = require('../home/login/Auth');
    const {setUserID} = require('../hooks/userID');
    const handleLogout = () => {
        setLogin("Logout");
        setUserID(null);
    };
  var objSellers = [];
  var objBidders = [];
  var objAuctions = [];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const datas = useSeller();
  const datas1 = useBidder();
  const datas2 = useAllAuction();
  if (datas.isLoading) return <p>Loading...</p>;
  var res = datas.auction.allSeller;
  if (datas1.isLoading) return <p>Loading...</p>;
  var res1 = datas1.auction.allBidder;
  if (datas2.isLoading) return <p>Loading...</p>;
  var res2 = datas2.auction.allAuction;
  

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  for (var i = 0; i < res.length; i++) {
    objSellers.push({
      id: res[i]._id,
      email: res[i].email,
      username: res[i].username,
      time: formatDate(res[i].createdAt)
    });
  }
  for (var i = 0; i < res1.length; i++) {
    objBidders.push({
      id: res1[i]._id,
      email: res1[i].email,
      username: res1[i].username,
      time: formatDate(res1[i].createdAt)
    });
  }
  for (var i = 0; i < res1.length; i++) {
    objAuctions.push({
      id: res2[i]._id,
      name: res2[i].name,
      timeStart: formatDate(res2[i].timeStart),
      timeEnd: formatDate(res2[i].timeEnd),
      startPrice: res2[i].startPrice,
      sellerID: res2[i].sellerID,
      winnerID: res2[i].winnerID,
      productName: res2[i].product.name,
      productType: res2[i].product.type,
      status: res2[i].status
    });
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <div className="flex">
          <button
            className={`mr-4 px-4 py-2 ${activeTab === 'seller' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-700 hover:bg-blue-400'} rounded`}
            onClick={() => handleTabChange('seller')}
          >
            Seller
          </button>
          <button
            className={`mr-4 px-4 py-2 ${activeTab === 'bidder' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-700 hover:bg-blue-400'} rounded`}
            onClick={() => handleTabChange('bidder')}
          >
            Bidder
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'auction' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-700 hover:bg-blue-400'} rounded`}
            onClick={() => handleTabChange('auction')}
          >
            Auction
          </button>
        </div>
        <a href="/home" className="">
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Đăng Xuất</button>
        </a>
      </div>
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-4">{activeTab === 'seller' ? 'Danh sách Seller' : activeTab === 'bidder' ? 'Danh sách Bidder' : 'Danh sách Auction'}</h2>
        <div className="max-w-full overflow-x-auto">
        <table className="w-full">
          <thead>
          {activeTab !== 'auction' && (
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Create at</th>
            </tr>
          )}
          {activeTab === 'auction' && (
            <tr>
              <th className="border px-2 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Time start</th>
              <th className="border px-4 py-2">Time end</th>
              <th className="border px-4 py-2">Start Price</th>
              <th className="border px-5 py-2">seller ID</th>
              <th className="border px-4 py-2">Winner ID</th>
              <th className="border px-4 py-2">status</th>
              <th className="border px-4 py-2">Product name</th>
              <th className="border px-4 py-2">type</th>
            </tr>
          )}
          </thead>
          <tbody>
          {activeTab === 'seller' && objSellers.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.time}</td>
              </tr>
            ))}
            {activeTab === 'bidder' && objBidders.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.time}</td>
              </tr>
            ))}
            {activeTab === 'auction' && objAuctions.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.timeStart}</td>
                <td className="border px-4 py-2">{item.timeEnd}</td>
                <td className="border px-4 py-2">{item.startPrice}</td>
                <td className="border px-4 py-2">{item.sellerID}</td>
                <td className="border px-4 py-2">{item.winnerID}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">{item.productName}</td>
                <td className="border px-4 py-2">{item.productType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};


