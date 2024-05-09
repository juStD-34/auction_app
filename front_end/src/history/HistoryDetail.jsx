import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarUser from "../shared/Navbar";
import Footer from "../home/components/Footer";
import useAuctionId from "../hooks/useAuctionId";

const obj = {
  image:
    "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg",
  title: "Cu ca rot cua Le Ba Truong",
  startDate: "12/12/2021",
  endDate: "13/12/2021",
  startPrice: "1 ty dong",
  finalPrice: "2 ty dong",
  buyer: "Thang Tri Nhan",
  phone: "0123456789",
};

export default function HistoryDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const datas = useAuctionId(id);
  if (datas.error) return <div>An error has occurred: {datas.error.message}</div>;
  if (datas.isLoading) return <div>Loading...</div>;
  console.log(datas.auction.existAuction);
  const data = datas.auction.existAuction;

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
      <NavbarUser />
      <div class="mx-16">
        <div className="border-b-2 py-8 bg-[url('https://lacvietauction.vn/LVT/assets/images/bg/client-right.png')]">
          <p className="text-3xl font-semibold pl-8">{data.name}</p>
        </div>
        <div className="ml-16 my-10 grid grid-cols-5 gap-4 content-center">
          <img
            src={obj.image}
            alt="Ảnh minh họa"
            className="w-full col-span-3 rounded-lg"
          />
          <div className="col-span-2 p-4 ml-8 border rounded-lg border-gray-300">
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
              <p className="text-gray-700">Giá chốt:</p>
              <p className="self-end ml-auto text-red-700 font-semibold">{obj.finalPrice}</p>
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
              <p className="text-gray-700">Tên người mua</p>
              <p className="self-end ml-auto text-red-700 font-semibold">{obj.winnerID}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
