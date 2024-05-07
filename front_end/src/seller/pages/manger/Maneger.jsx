import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import useSellerAuctions from "../../../hooks/useSellerAuctions";

import { useMutation } from "react-query";
import axios from "axios";

export default function Maneger() {
  
  const mutation = useMutation(
    {
      mutationFn: (id) => {
        return axios.get("http://localhost:3002/seller/stopAuction/"+id);
      },
    },
    {
      onSuccess: (data) => {
        console.log("asouidy aiouywoiw ayd");
      },
      onError: (error) => {
        console.log("asoiudh aiwouyh oiwaydai hwaiuyh");
      },
    }
  );

  const datas = useSellerAuctions("6635dfdc6817a433256fc4f8");
  if (datas.isLoading) return <p>Loading...</p>;
  var res = datas.auction.ownerAuction;
  var obj = [];

  function handleStopAuction(id) {
    console.log(id);
    mutation.mutate(id);
  }


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

  for (var i = 0; i < res.length; i++) {
    obj.push({
      id: res[i]._id,
      name: res[i].product.name,
      time: formatDate(res[i].timeStart),
      price: res[i].startPrice,
    });
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
          QUẢN LÝ PHIÊN ĐẤU GIÁ
        </h1>
        <section class="bg-gray-50 light:bg-gray-900 py-3 sm:py-5">
          <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
            <div class="relative overflow-hidden bg-white shadow-md light:bg-gray-800 sm:rounded-lg">
              <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4"></div>
              <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 light:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400 border-b light:border-neutral-600">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <label htmlFor="">STT</label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Tên sản phẩm
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Thời gian đấu giá còn lại
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Giá khởi điểm
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Giá hiện tại
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Chấp nhận đấu giá sớm
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3 border-x light:border-neutral-600"
                      >
                        Hủy đấu giá
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {obj.map((item, index) => (
                      <tr class="light:border-gray-600 hover:bg-gray-100 light:hover:bg-gray-700 border-b light:border-neutral-600">
                        <td class="w-4 px-4 py-3">
                          <div class="flex items-center">
                            <label htmlFor="">{index}</label>
                          </div>
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                          {item.name}
                        </td>
                        <td class="px-4 py-2">
                          <span class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white">
                            {item.id}
                          </span>
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                          <div class="ml-1 text-gray-500 light:text-gray-400">
                            <label className="time">11:20</label>
                          </div>
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                          {item.price}
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                          160000
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                          <div class="flex items-center">
                            <button
                              type="button"
                              class="text-red-600 hover:text-white border border-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                              Chấp nhận giá đấu
                            </button>
                          </div>
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                          <div class="flex items-center">
                            <button
                              onClick={() => handleStopAuction(item.id)}
                              type="button"
                              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                              Hủy đấu giá
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
