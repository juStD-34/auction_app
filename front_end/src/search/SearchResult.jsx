import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../home/components/Navbar";
import Card from "../home/components/Cards";
import grid from "../home/assets/grid.png";
import row from "../home/assets/row.png";
import React, { useState } from "react";
import NavbarUser from "../shared/Navbar";

import Banner from "./assets/banner.png";

import useSearch from "../hooks/useSearch";


export default function SearchResult() {
  const { keyword } = useParams();
  const [viewMode, setViewMode] = useState(true);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [loginPopup, setLoginPopup] = React.useState(false);
  const toggleLoginPopup = () => setLoginPopup(!loginPopup);
  const {getLogin} = require('../home/login/Auth');
  const isLoggedIn = getLogin();

  const [searchPopup, setSearchPopup] = React.useState(false);
  const toggleSearch = () => setSearchPopup(!searchPopup);
  const [filters, setFilters] = useState({
    status: [],
    type: [],
    startTime: "",
    endTime: ""
  });

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const navigate = useNavigate();

  function openDetail(id) {
    navigate(`/productdetail/${id}`);
  }

  const { auction, error, isLoading } = useSearch(keyword);
  if (error) return <div>An error has occurred: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  const result = auction.searchResult;
  var obj = [];
  for (let i = 0; i < result.length; i++) {
    obj.push({
      id: result[i]._id,
      name: result[i].name,
      time: result[i].timeStart,
      price: result[i].startPrice,
      image: result[i].product.img,
      type: result[i].product.type,
      status: result[i].status
    });
  }

  const filteredProducts = obj.filter(product => {
    return (
      (filters.status.length === 0 || filters.status.includes(product.status)) &&
      (filters.type.length === 0 || filters.type.includes(product.type)) &&
      (filters.startTime === "" || new Date(product.time) >= new Date(filters.startTime)) &&
      (filters.endTime === "" || new Date(product.time) <= new Date(filters.endTime))
    );
  });
  console.log(filteredProducts)
  const toggleFilter = (filterType, value) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (filterType === "time") {
        updatedFilters[filterType] = value;
      } else {
        const filterIndex = updatedFilters[filterType].indexOf(value);
        if (filterIndex !== -1) {
          updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
        } else {
          updatedFilters[filterType] = [...updatedFilters[filterType], value];
        }
      }
      return updatedFilters;
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };
  const displayItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {isLoggedIn === "Login" ? <NavbarUser /> : <NavigationBar toggleLoginPopup={toggleLoginPopup} toggleSearch={toggleSearch}/>}
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
                input type="datetime-local" name="startTime"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={filters.startTime} onChange={handleInputChange} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Đến Ngày
                </label>
                <input
                input type="datetime-local" name="endTime"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={filters.endTime} onChange={handleInputChange} 
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
                  <input className="mr-2" type="checkbox" 
                  onChange={() => toggleFilter('status', 'OPEN')} checked={filters.status.includes('OPEN')}
                  />
                  <label>Đang diễn ra</label>
                </div>
                <div>
                <input className="mr-2" type="checkbox" 
                  onChange={() => toggleFilter('status', 'INCOMING')} checked={filters.status.includes('INCOMING')}
                  />
                  <label>Sắp diễn ra</label>
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
                <input className="mr-2" type="checkbox" 
                onChange={() => toggleFilter('type', 'Type 1')} checked={filters.type.includes('Type 1')}/>
                <label>Tài sản gia dụng</label>
              </div>
              <div>
                <input className="mr-2" type="checkbox" 
                onChange={() => toggleFilter('type', 'Type 2')} checked={filters.type.includes('Type 2')}/>
                <label>Tài sản phương tiện</label>
              </div>
              <div>
                <input className="mr-2" type="checkbox" 
                onChange={() => toggleFilter('type', 'Type 3')} checked={filters.type.includes('Type 3')}/>
                <label>Khác</label>
              </div>
              </div>
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
                      className="flex flex-row bg-white mt-5 mb-10 shadow-md rounded-lg transition duration-500 ease-in-out hover:transform
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
                          <p className="text-sm font-bold ml-1">{formatDate(item.time)}</p>
                        </div>
                        <div className="flex">
                          <p className="text-sm">Giá khởi điểm: </p>
                          <p className="text-sm font-bold ml-1 mb-3">
                            {item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            openDetail(item.id);
                          }}
                          className="bg-red-600 p-2 text-white rounded-lg font-semibold hover:bg-black"
                        >
                          Chi tiết
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-center items-end mt-4">
                {[...Array(Math.ceil(filteredProducts.length / itemsPerPage)).keys()].map(
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