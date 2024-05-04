import React, { useState } from 'react';
import NavbarUser from "../shared/Navbar";
import Footer from "../home/components/Footer";
import Card from "../home/components/Cards";

import banner from "../home/assets/banner.png"
import row from "../home/assets/row.png"
import grid from "../home/assets/grid.png"
import "swiper/css";
import 'swiper/css/pagination';

var obj = [
  {
      name: "sCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
      time: "12/04/2004 09:30:00",
      price: "8.910.410.400 VNĐ",
      image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
      name: "qCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
      time: "12/04/2004 09:30:00",
      price: "8.910.410.400 VNĐ",
      image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
      name: "eCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
      time: "12/04/2004 09:30:00",
      price: "8.910.410.400 VNĐ",
      image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
      name: "xCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
      time: "12/04/2004 09:30:00",
      price: "8.910.410.400 VNĐ",
      image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
      name: "zCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
      time: "12/04/2004 09:30:00",
      price: "8.910.410.400 VNĐ",
      image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
      name: "vCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
      time: "12/04/2004 09:30:00",
      price: "8.910.410.400 VNĐ",
      image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
    name: "vCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
    time: "12/04/2004 09:30:00",
    price: "8.910.410.400 VNĐ",
    image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
  },
  {
    name: "vCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
    time: "12/04/2004 09:30:00",
    price: "8.910.410.400 VNĐ",
    image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
}
]


export default function Buyer () {
  const [viewMode, setViewMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

const displayItems = obj.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <>
        <NavbarUser />
        <div className="w-6/7 flex justify-center">
          <div className="flex items-center justify-center mb-10 border-b-2">
              <div>
                <div className="mb-3 justify-center font-semibold text-3xl">
                Danh mục tài sản
                </div>
                <div className="opacity-50">
                  Trang chủ
                </div>
              </div>
              <img className="w-4/6 h-auto" src={banner} alt="img"/>
          </div>
        </div>
        <div className="flex mb-10">
          {/* Sidebar */}
          <div className="w-1/4 h-3/4 bg-white p-4 shadow-md rounded-lg ml-10">
              <div className="bg-white p-3 rounded-lg mb-5">
                {/* Ngày */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Từ Ngày</label>
                    <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Đến Ngày</label>
                    <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg mb-5">
                {/* Bộ lọc */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Trạng thái tài sản</label>
                    {/* Example filter options */}
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label>Option 1</label>
                    </div>
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label>Option 2</label>
                    </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg mb-5">
                {/* Bộ lọc */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Danh mục tài sản</label>
                    {/* Example filter options */}
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label htmlFor="filter1">Option 1</label>
                    </div>
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label>Option 2</label>
                    </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg mb-5">
                {/* Bộ lọc */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Tài sản mới</label>
                    {/* Example filter options */}
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label>Option 1</label>
                    </div>
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label>Option 2</label>
                    </div>
                </div>
              </div>
              {/* Nút Lọc */}
              <div>
                  <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-black">Lọc</button>
              </div>
          </div>
          {/* Main Content */}
          <div className="w-3/4 flex ml-10 mr-20">
            <div>
              <div className="flex justify-end mb-4">
                  <button onClick={() => setViewMode(true)} className="bg-white shadow-md py-2 mr-2 px-2 rounded">
                    <img className="w-5" src={grid} alt="img"/>
                  </button>
                  <button onClick={() => setViewMode(false)} className="bg-white shadow-md py-2 px-2 rounded">
                    <img className="w-5" src={row} alt="img"/>
                  </button>
              </div>
              <div className={viewMode ? "grid grid-cols-3 gap-10" : "flex flex-wrap flex justify-center"}>
              {displayItems.map((item, index) =>
                viewMode ? (
                  <div className="transition duration-500 ease-in-out hover:transform hover:translate-y-1 hover:scale-105 overflow-hidden">
                    <Card object={item} />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex flex-row bg-gray-100 mt-5 mb-10 shadow-md rounded-lg transition duration-500 ease-in-out hover:transform
                            hover:translate-y-1 hover:scale-105 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={viewMode ? "" : "w-1/3"}
                    />
                    <div className={viewMode ? "" : "w-2/3 mt-3 ml-3"}>
                      <h2 className="text-md font-semibold mb-3">
                        {item.name}
                      </h2>
                      <div className="flex">
                        <p className="text-sm">Thời gian đấu giá:</p>
                        <p className="text-sm font-bold ml-1">{item.time}</p>
                      </div>
                      <div className="flex">
                        <p className="text-sm">Giá khởi điểm: </p>
                        <p className='text-sm font-bold ml-1 mb-3'>{item.price}</p>
                      </div>
                      
                      <button className="bg-red-600 p-2 text-white rounded-lg font-semibold hover:bg-black">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                )
              )}
              </div>
              <div className="flex justify-center items-end mt-4">
                  {[...Array(Math.ceil(obj.length / itemsPerPage)).keys()].map((pageNumber) => (
                      <button key={pageNumber} onClick={() => handleClick(pageNumber + 1)} className={`hover:bg-black text-white mx-1 ${currentPage === pageNumber + 1 ? 'bg-red-600 text-white' : 'bg-gray-300'} py-2 px-4 rounded`}>
                          {pageNumber + 1}
                      </button>
                  ))}
              </div>
            </div>
          </div>
        </div>


        <Footer />
    </>
  );
}
