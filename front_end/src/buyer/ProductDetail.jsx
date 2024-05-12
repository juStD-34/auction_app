import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarUser from "../shared/Navbar";
import NavigationBar from "../home/components/Navbar";
import Footer from "../home/components/Footer";
import LoginModal from "../home/login/LoginModal";
import SearchModal from "../search/SearchModal";
import CountdownTimer from "./components/Timer";

import useAuctionId from "../hooks/useAuctionId";
import { getUserID } from "../hooks/userID";

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const queryClient = useQueryClient();
  const { id } = useParams();
  const mutation = useMutation(
    {
      mutationFn: (props) => {
        return axios.post("http://localhost:3002/bidder/createBid", {
          auctionID: id,
          userID: getUserID(),
          price: props.price,
        });
      },
    },
  );

  const [showPopup, setShowPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const priceRef = React.createRef();
  const toggleLoginPopup = () => setLoginPopup(!loginPopup);

  const [searchPopup, setSearchPopup] = useState(false);
  const toggleSearch = () => setSearchPopup(!searchPopup);
  const {getLogin} = require('../home/login/Auth');
  const isLoggedIn = getLogin();

  const datas = useAuctionId(id);
  if (datas.isLoading) return <p>Loading...</p>;
  var res = datas.auction.result[0];

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("vi-VN", options);
  };

  var obj = {
    name: res.product.name,
    timeStart: formatDate(res.timeStart),
    timeEnd: formatDate(res.timeEnd),
    price: res.startPrice,
    highestPrice: res.highestPrice,
    image: res.product.img,
    status: res.status,
  };
  console.log(obj.highestPrice);

  async function handleBid(props) {
    await mutation.mutateAsync({
      price: props.price,
    });
    queryClient.invalidateQueries("AuctionId");
  }

  function checkAvailable() {
    if (isLoggedIn !== "Login") return false;
    if (new Date(res.timeStart).getTime() - Date.now() > 0) return false;
    // if (new Date(res.timeEnd).getTime() - Date.now() < 0) return false;
    return true;
  }

  function checkIsTimeOut() {
    if (new Date(res.timeStart).getTime() - Date.now() < 0) return false;
    return true;
  }

  return (
    <>
    <div className={loginPopup ? "blur-sm " : ""}>
      {isLoggedIn === "Login" ? <NavbarUser /> : <NavigationBar toggleLoginPopup={toggleLoginPopup} toggleSearch={toggleSearch}/>}
      <div className="my-10 bg-[url('https://lacvietauction.vn/LVT/assets/images/bg/client-right.png')]">
        <div className="w-4/5 mx-auto mt-10 grid grid-cols-5 gap-4 content-center">
          <div className="col-span-3 p-4">
            <p className="text-3xl mb-5 font-semibold">{obj.name}</p>
            <p className="text-xl opacity-50">Thời gian bắt đầu {obj.timeStart}</p>
            <p className="text-xl opacity-50 mb-5">Thời gian kết thúc {obj.timeEnd}</p>
            {checkIsTimeOut() && <p className="text-xl mb-5 opacity-50">Cuộc đấu giá bắt đầu sau: </p>}
            <CountdownTimer targetDate={res.timeStart}></CountdownTimer> 
            {checkAvailable() ? (obj.status === "CLOSED") ? null : <button
              className="bg-red-600 text-white rounded-md p-2 font-semibold "
              onClick={() => setShowPopup(true)}
            >
              ĐẤU GIÁ NGAY!!!
            </button> : null}
          </div>
          <div className="col-span-2">
            <img
              src={obj.image}
              alt="Ảnh minh họa"
              className="w-full"
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
              <p>Giá cao nhất được trả: {obj.highestPrice}</p>
              <input
                className="rounded-md mr-2 p-2 border border-pgray-300"
                placeholder="Giá đấu..."
                ref={priceRef}
              />
              <button
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleBid({price: priceRef.current.value})}
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
