import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import useAuctionId from "../../hooks/useAuctionId";
import Loading from "../../shared/Loading";
export default function SellerDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const datas = useAuctionId(id);
  if (datas.error) return <div>An error has occurred: {datas.error.message}</div>;
  if (datas.isLoading) return <Loading/>;
  const data = datas.auction.result[0];

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("vi-VN", options);
  }
  
  return (
    <>
      <Sidebar />
      <div class="mx-16 ml-72">
        <div className="border-b-2 py-8 bg-[url('https://lacvietauction.vn/LVT/assets/images/bg/client-right.png')]">
          <p className="text-3xl font-semibold pl-8">{data.name}</p>
        </div>
        <div className="ml-16 my-10 grid grid-cols-5 gap-4 content-center">
          <img
            src={data.product.img}
            alt="Ảnh minh họa"
            className="w-full col-span-3 rounded-lg"
          />
          <div className="col-span-2 p-2 ml-2 border rounded-lg border-gray-300">
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Mã tài sản:</p>
              <p className="self-end ml-auto text-red-700 font-semibold">{id}</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Thời gian bắt đầu:</p>
              <p className="self-end ml-auto text-red-700 font-semibold">{formatDate(data.timeStart)}</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Thời gian kết thúc:</p>
              <p className="self-end ml-auto text-red-700 font-semibold">{formatDate(data.timeEnd)}</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Giá khởi điểm:</p>
              <p className="self-end ml-auto text-red-700 font-semibold">{data.startPrice}</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Giá chốt: </p>
              <p className="self-end ml-auto text-red-700 font-semibold">{data.highestPrice}</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Số bước giá tối đa/ lần trả:</p>
              <p className="self-end ml-auto text-red-700 font-semibold">Bước giá không giới hạn</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">Phương thức đấu giá</p>
              <p className="self-end ml-auto text-red-700 font-semibold">Trả giá lên và liên tục</p>
            </div>
            <div className="flex mx-1 mt-2">
              <p className="text-gray-700">ID người mua</p>
              {data.winnerID === null ? 
              <p className="self-end ml-auto text-red-700 font-semibold">Không có</p>
            : <p className="self-end ml-auto text-red-700 font-semibold">{data.winnerID}</p>} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
