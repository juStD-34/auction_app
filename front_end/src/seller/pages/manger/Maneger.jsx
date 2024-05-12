import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import useSellerAuctions from "../../../hooks/useSellerAuctions";
import { Button, Modal } from "flowbite-react";
import { FcHighPriority } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import Loading from "../../../shared/Loading";

import { useQueryClient } from "react-query";
import axios from "axios";

export default function Maneger() {
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openCancel, setOpenCancel] = React.useState(false);
  const [currentID, setCurrentID] = React.useState("");
  const queryClient = useQueryClient();

  const datas = useSellerAuctions();
  if (datas.isLoading) return <Loading/>;
  var res;
  if (datas.isError) {
    res = [];
  } else {
    res = datas.auction.result;
  }
  let obj = [];

  async function handleStopAuction(id) {
    await axios.get("http://localhost:3002/seller/deleteAuction/" + id);
    await queryClient.invalidateQueries('SellerAuction');
    setOpenCancel(false);
  }

  async function acceptAuction(id) {
    await axios.get("http://localhost:3002/seller/stopAuction/" + id);
    await axios.get("http://localhost:3002/admin/payForAuction/" + id);
    await queryClient.invalidateQueries('SellerAuction');
    setOpenAccept(false);
  }

  for (var i = 0; i < res.length; i++) {
    if (res[i].status === "CLOSED") continue;
    obj.push({
      id: res[i]._id,
      name: res[i].product.name,
      time: res[i].timeStart,
      endTime: res[i].timeEnd,
      price: res[i].startPrice,
      highestPrice: res[i].highestPrice,
    });
  }

  function getRemainingTime(endTime) {
    const end = new Date(endTime);
    const now = new Date();
    const diff = end - now;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    return `${hours}h:${minutes}m`;
  }

  function checkStart(startTime) {
    const start = new Date(startTime);
    const now = new Date();
    return start - now < 0;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7 ml-60">
        <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
          QUẢN LÝ PHIÊN ĐẤU GIÁ
        </h1>
        <section className="bg-gray-50 light:bg-gray-900 py-3 sm:py-5">
          <div className="px-4 mx-auto max-w-screen-2xl">
            <div className="relative overflow-hidden bg-white shadow-md light:bg-gray-800 sm:rounded-lg">
              <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4"></div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400 border-b light:border-neutral-600">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <label htmlFor="">STT</label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Tên sản phẩm
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Thời gian đấu giá còn lại
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Giá khởi điểm
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Giá hiện tại
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Chấp nhận đấu giá sớm
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Hủy đấu giá
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {obj.length !== 0 ? (
                      obj.map((item, index) => (
                        <tr
                          key={index}
                          className="light:border-gray-600 hover:bg-gray-100 light:hover:bg-gray-700 border-b light:border-neutral-600"
                        >
                          <td className="w-4 px-4 py-3">
                            <div className="flex items-center">
                              <label htmlFor="">{index}</label>
                            </div>
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                            {item.name}
                          </td>
                          <td className="px-4 py-2">
                            <span className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white">
                              {item.id}
                            </span>
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                            <div className="ml-1 text-gray-500 light:text-gray-400">
                              {checkStart(item.time) ? (
                                <label className="time">
                                  {getRemainingTime(item.endTime)}
                                </label>
                              ) : (
                                "Chưa bắt đầu"
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                            {item.price}
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                            {item.highestPrice}
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                            <div className="flex items-center">
                              {checkStart(item.time) ? (
                                <button
                                  onClick={() => {
                                    setOpenAccept(true);
                                    setCurrentID(item.id);
                                  }}
                                  type="button"
                                  className="text-red-600 hover:text-white border border-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                  Chấp nhận giá đấu
                                </button>
                              ) : (
                                "Chưa bắt đầu"
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                            <div className="flex items-center">
                              <button
                                onClick={() => {
                                  setOpenCancel(true);
                                  setCurrentID(item.id);
                                }}
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                              >
                                Hủy đấu giá
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>Không có phiên đấu giá nào</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal show={openAccept} popup size="md">
        <Modal.Header/>
        <Modal.Body>
        <div className="text-center">
            <FcCurrencyExchange className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Bạn có chắc chắn muốn chấp nhận giá này không?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => acceptAuction(currentID)}>
                Có, tôi chắc chắn
              </Button>
              <Button color="gray" onClick={() => setOpenAccept(false)}>
                Không
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={openCancel} popup size="md">
      <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <FcHighPriority className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Bạn có chắc chắn muốn hủy phiên đấu giá này không?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleStopAuction(currentID)}>
                Có, tôi chắc chắn
              </Button>
              <Button color="gray" onClick={() => setOpenCancel(false)}>
                Không
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
