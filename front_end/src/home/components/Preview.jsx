//Trang hien 1 vai san pham dang dau gia
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Cards from "./Cards";

import useData from "../../hooks/useData";


export default function Preview() {
  const datas = useData("66360bd155eacc9304c44f61");
  if (datas.isLoading) return <p>Loading...</p>;
  console.log(datas.auction.existAuction[0]);
  var obj = [];

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

  for (var i = 0; i < 8; i++) {
    obj.push({
      name: datas.auction.existAuction[0].product.name,
      time: formatDate(datas.auction.existAuction[0].timeStart),
      price: datas.auction.existAuction[0].startPrice,
      image:
        "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg",
    });
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl text-center font-semibold">
        Tài sản sắp được đấu giá
      </h2>
      <div className="px-16 py-16">
        <Swiper
          style={{ "--swiper-pagination-color": "red" }}
          spaceBetween={50}
          slidesPerView={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          speed={750}
          modules={[FreeMode, Pagination]}
        >
          {obj.map((object, index) => (
            <SwiperSlide key={index}>
              <Cards object={object} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
