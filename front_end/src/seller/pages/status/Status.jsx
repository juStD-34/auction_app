import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import useAllNotify from "../../../hooks/useAllNotify";

export default function Status() {
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
  for (var i = 0; i < res.length; i++) {
    obj.push({
      receivedTime: formatDate(res[i].date),
      message: res[i].content,
      detailPage: `/historydetails/${res[i]._id}`,
      image: res[i].image,
    });
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7 ml-72">
        <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
          QUẢN LÝ THÔNG BÁO
        </h1>

        <ol class="relative border-s border-gray-200 ">
          {obj.map((item, index) => (
            <>
              <li key={index} className="flex mb-10 ms-6">
                <img src={item.image} alt="" className=" rounded-md mr-4"/>
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
