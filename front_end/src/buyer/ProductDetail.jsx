import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarUser from "../shared/Navbar";
import NavigationBar from "../home/components/Navbar";
import Footer from "../home/components/Footer";
import LoginModal from "../home/login/LoginModal";
import SearchModal from "../search/SearchModal";

import useAuctionId from "../hooks/useAuctionId";

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [loginPopup, setLoginPopup] = React.useState(false);
  const toggleLoginPopup = () => setLoginPopup(!loginPopup);

  const [searchPopup, setSearchPopup] = React.useState(false);
  const toggleSearch = () => setSearchPopup(!searchPopup);
  const {getLogin} = require('../home/login/Auth');
  const isLoggedIn = getLogin();


  const { id } = useParams();
  const datas = useAuctionId(id);
  if (datas.isLoading) return <p>Loading...</p>;
  var res = datas.auction.existAuction[0];

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

  var obj = {
    id: res._id,
    name: res.product.name,
    timeStart: formatDate(res.timeStart),
    timeEnd: formatDate(res.timeEnd),
    price: res.startPrice,
    image:
      "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg",
  };

  return (
    <>
    <div className={loginPopup ? "blur-sm " : ""}>
      {isLoggedIn === "Login" ? <NavbarUser /> : <NavigationBar toggleLoginPopup={toggleLoginPopup} toggleSearch={toggleSearch}/>}
      <div class="my-10 bg-[url('https://lacvietauction.vn/LVT/assets/images/bg/client-right.png')]">
        <div class="w-4/5 mx-auto mt-10 grid grid-cols-5 gap-4 content-center">
          <div class="col-span-3 p-4">
            <p className="text-3xl mb-5 font-semibold">{obj.name}</p>
            <p className="text-xl opacity-50">Thời gian bắt đầu: {obj.timeStart}</p>
            <p className="text-xl opacity-50 mb-5">Thời gian kết thúc: {obj.timeEnd}</p>
            <p className="text-xl mb-5 opacity-50">Cuộc đấu giá bắt đầu sau: </p>
            {isLoggedIn ? <button
              class="bg-red-600 text-white rounded-md p-2 font-semibold "
              onClick={() => setShowPopup(true)}
            >
              ĐẤU GIÁ NGAY!!!
            </button> : null}
          </div>
          <div class="col-span-2">
            <img
              src="https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
              alt="Ảnh minh họa"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-1 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <div className="bg-white p-8 rounded">
              <p className="text-2xl mb-5">Đấu giá sản phẩm</p>
              <p>Giá ban đầu: {obj.price}</p>
              <p>Giá cao nhất được trả:</p>
              <input
                class="rounded-md mr-2 p-2 border border-pgray-300"
                placeholder="Giá đấu..."
              />
              <button
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowPopup(false)}
              >
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      <LoginModal loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
      <SearchModal searchPopup={searchPopup} toggleSearch={toggleSearch} />
    </>
  );
}
