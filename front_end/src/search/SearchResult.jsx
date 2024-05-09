import { useParams } from "react-router-dom";
import NavigationBar from "../home/components/Navbar";
import Card from "../home/components/Cards";
import grid from "../home/assets/grid.png";
import row from "../home/assets/row.png";
import { useState } from "react";

import Banner from "./assets/banner.png";

import useSearch from "../hooks/useSearch";


export default function SearchResult() {
  const { keyword } = useParams();
  const [viewMode, setViewMode] = useState(false);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  };


  const { auction, error, isLoading } = useSearch(keyword);
  if (error) return <div>An error has occurred: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  const result = auction.searchResult;
  var obj = [];
  for (let i = 0; i < result.length; i++) {
    obj.push({
      id: result[i]._id,
      name: result[i].name,
      time: formatDate(result[i].timeStart),
      price: result[i].startPrice,
      image: result[i].product.img,
    });
  }

  const displayItems = obj.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="px-16">
        <div className="flex flex-row flex-1 border-y-2">
          <div className="py-8">
            <p className="text-3xl font-semibold">Kết quả tìm kiếm</p>
            <div className="flex pt-4 ">
              <a href="/home" className=" text-gray-500">
                Trang chủ{" "}
              </a>
              <p className="text-gray-500 font-semibold pl-2">
                {" "}
                / Kết quả tìm kiếm
              </p>
            </div>
          </div>
          <img src={Banner} alt="banner" className=" ml-auto h-40" />
        </div>
        <div>
          <p className="text-2xl pt-3">
            {result.length} kết quả tìm kiếm cho:{" "}
            <span className="font-semibold">{keyword}</span>
          </p>
        </div>
        <div className="flex mb-10">
          {/* Sidebar */}
          <div className="w-1/4 h-3/4 bg-white p-4 shadow-md rounded-lg ml-10">
            <div className="bg-white p-3 rounded-lg mb-5">
              {/* Ngày */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Từ Ngày
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Đến Ngày
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg mb-5">
              {/* Bộ lọc */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Trạng thái tài sản
                </label>
                {/* Example filter options */}
                <div>
                  <input className="mr-2" type="checkbox" />
                  <label>Option 1</label>
                </div>
                <div>
                  <input className="mr-2" type="checkbox" />
                  <label>Option 2</label>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg mb-5">
              {/* Bộ lọc */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Danh mục tài sản
                </label>
                {/* Example filter options */}
                <div>
                  <input className="mr-2" type="checkbox" />
                  <label htmlFor="filter1">Option 1</label>
                </div>
                <div>
                  <input className="mr-2" type="checkbox" />
                  <label>Option 2</label>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg mb-5">
              {/* Bộ lọc */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Tài sản mới
                </label>
                {/* Example filter options */}
                <div>
                  <input className="mr-2" type="checkbox" />
                  <label>Option 1</label>
                </div>
                <div>
                  <input className="mr-2" type="checkbox" />
                  <label>Option 2</label>
                </div>
              </div>
            </div>
            {/* Nút Lọc */}
            <div>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-black">
                Lọc
              </button>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-3/4 flex ml-10 mr-20">
            <div>
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setViewMode(true)}
                  className="bg-white shadow-md py-2 mr-2 px-2 rounded"
                >
                  <img className="w-5" src={grid} alt="img" />
                </button>
                <button
                  onClick={() => setViewMode(false)}
                  className="bg-white shadow-md py-2 px-2 rounded"
                >
                  <img className="w-5" src={row} alt="img" />
                </button>
              </div>
              <div
                className={
                  viewMode
                    ? "grid grid-cols-3 gap-10"
                    : "flex flex-wrap justify-center"
                }
              >
                {displayItems.map((item, index) =>
                  viewMode ? (
                    <Card object={item} />
                  ) : (
                    <div
                      key={index}
                      className="bg-gray-100 mt-5 p-4 mb-10 shadow-md rounded-lg transition duration-500 ease-in-out hover:transform
                            hover:translate-y-1 hover:scale-105 overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className={viewMode ? "w-full" : "w-1/5"}
                      />
                      <div className={!viewMode ? "" : "w-2/3"}>
                        <h2 className="text-sm font-semibold mb-3">
                          {item.name}
                        </h2>
                        <p className="text-sm">{item.time}</p>
                        <p>Giá khởi điểm: {item.price}</p>
                        <button className="bg-red-600 p-2 text-white rounded-lg hover:bg-black">
                          Chi tiết
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-center items-end mt-4">
                {[...Array(Math.ceil(obj.length / itemsPerPage)).keys()].map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handleClick(pageNumber + 1)}
                      className={`hover:bg-black text-white mx-1 ${
                        currentPage === pageNumber + 1
                          ? "bg-red-600 text-white"
                          : "bg-gray-300"
                      } py-2 px-4 rounded`}
                    >
                      {pageNumber + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
