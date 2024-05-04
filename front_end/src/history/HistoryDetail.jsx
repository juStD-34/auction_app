import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../home/components/Cards";
import NavbarUser from "../shared/Navbar";
import Footer from "../home/components/Footer";
import row from "../home/assets/row.png";
import grid from "../home/assets/grid.png";
import code from "../home/assets/code.png";
import clock from "../home/assets/clock.png";
import user from "../home/assets/user.png";

var obj = [
  {
    name: "sCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
    time: "12/04/2004 09:30:00",
    price: "8.910.410.400 VNĐ",
    image:
      "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg",
  },
];

export default function HistoryDetail() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentChoice1, setCurrentChoice1] = useState(1);
  const [currentChoice2, setCurrentChoice2] = useState(1);
  const [viewMode, setViewMode] = useState(false);
  const itemsPerPage = 6;

  const { id } = useParams();

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayItems = obj.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <NavbarUser />
      <div class="my-10 bg-[url('https://lacvietauction.vn/LVT/assets/images/bg/client-right.png')]">
        <div class="w-4/5 mx-auto mt-10 grid grid-cols-5 gap-4 content-center">
          <div class="col-span-3 p-4">
            <p className="text-3xl mb-5 font-semibold">{id}</p>
            <p className="text-xl opacity-50">Thời gian bắt đầu:</p>
            <p className="text-xl opacity-50 mb-5">Thời gian kết thúc:</p>
            <p className="text-xl mb-5 opacity-50">Cuộc đấu giá bắt đầu sau:</p>
            <button
              class="bg-red-600 text-white rounded-md p-2 font-semibold "
              onClick={() => setShowPopup(true)}
            >
              ĐẤU GIÁ NGAY!!!
            </button>
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
      (
        <div class="grid grid-cols-2 mb-20">
          <div class="w=1/2 ml-20">
            <img class="w-5 h-auto" src={code} alt="img" />
            <p class="font-semibold text-lg">Mã cuộc đấu giá</p>
            <p class="mb-20">abcd1234 lmao bủh bủh</p>
            <img class="w-5 h-auto" src={clock} alt="img" />
            <p class="font-semibold text-lg">Thời gian bắt đầu</p>
            <p>Mười hai giờ</p>
          </div>
          <div class="w-1/2 ml-20">
            <img class="w-5 h-auto" src={user} alt="img" />
            <p class="font-semibold text-lg">Đấu giá viên</p>
            <p class="mb-20">KevinLe</p>
            <img class="w-5 h-auto" src={clock} alt="img" />
            <p class="font-semibold text-lg">Thời gian kết thúc</p>
            <p>Mười hai giờ</p>
          </div>
        </div>
      )
      <Footer />
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
              <p>Giá ban đầu:</p>
              <p>Giá cao nhất được trả:</p>
              <p>Khoảng cách giá:</p>
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
    </>
  );
}
