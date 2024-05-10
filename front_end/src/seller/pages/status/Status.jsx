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
      image:
        "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
    });
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
          QUẢN LÝ THÔNG BÁO
        </h1>

        <ol class="relative border-s border-gray-200 ">
          {obj.map((item, index) => (
            <>
              <li key={index} class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -start-3 ring-8 ring-white">
                  <svg
                    class="w-2.5 h-2.5 text-red-800 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <a href={item.detailPage} class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                  {item.message}
                </a>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                  {item.receivedTime}
                </time>
              </li>
            </>
          ))}
        </ol>
      </div>
    </div>
  );
}
