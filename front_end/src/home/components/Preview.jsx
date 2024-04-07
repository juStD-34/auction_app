//Trang hien 1 vai san pham dang dau gia
import { Swiper, SwiperSlide } from "swiper/react";

import {FreeMode, Pagination} from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';

import Cards from "./Cards";

//fake data
var obj = [
    {
        name: "sCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    },
    {
        name: "qCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    },
    {
        name: "eCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    },
    {
        name: "xCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    },
    {
        name: "zCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    },
    {
        name: "vCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    }
]


export default function Preview() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl text-center font-semibold">
        Tài sản sắp được đấu giá
      </h2>
      <div className="px-16 py-16">
        <Swiper
        style={{ '--swiper-pagination-color': 'red' }}
          spaceBetween={50}
          slidesPerView={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          speed={750}
          modules={[FreeMode, Pagination]}
        >
        {obj.map((object) => (
            <SwiperSlide key={object.name}>
                <Cards object={object}/>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
}
