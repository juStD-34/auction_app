import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import useAllNotify from "../../../hooks/useAllNotify";
import axios from "axios";
import { getUserID } from "../../../hooks/userID";
import { useQueryClient } from "react-query";

export default function Status() {
  const queryClient = useQueryClient();
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

  const datas = useAllNotify();
  var obj = [];
  if (datas.error)
    return <div>An error has occurred: {datas.error.message}</div>;
  if (datas.isLoading) return <div>Loading...</div>;
  var res = datas.auction.result;
  for (var i = res.length - 1; i >= 0; i--) {
    if (res[i].status === "read") continue;
    console.log(res[i]);
    obj.push({
      receivedTime: formatDate(res[i].date),
      message: res[i].content,
      detailPage: `/sellerdetail/${res[i].auctionID}`,
      image: res[i].image,
    });
  }

  async function markAsAllRead() {
    console.log(await axios.post(
      "http://localhost:3002/notifications/markAllAsRead", {    
          userID: getUserID(),
      }
    ));
    queryClient.invalidateQueries("All-Notify");
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7 ml-72">
        <div className="flex">
          <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
            QUẢN LÝ THÔNG BÁO
          </h1>
          <button
            onClick={markAsAllRead}
            className="mb-4 ml-auto px-4 py-2 text-white bg-red-600 rounded-md"
          >
            Đánh dấu tất cả đã đọc
          </button>
        </div>
        <ol class="relative border-s border-gray-200 ">
          {obj.map((item, index) => (
            <>
              <li key={index} className="flex mb-10 ms-6">
                <img src={item.image} alt="" className=" rounded-md mr-4 w-60 h-40"/>
                <div className="my-auto">
                  <a href={item.detailPage} className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                    {item.message}
                  </a>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    {item.receivedTime}
                  </time>
                </div>
              </li>
            </>
          ))}
        </ol>
      </div>
    </div>
  );
}
