import React from "react";

import NavbarUser from "../shared/Navbar";
import Footer from "../home/components/Footer";
import Preview from "../home/components/Preview";
import Introduction from "../home/components/Introduction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "flowbite-react";

import {FreeMode, Pagination} from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';

var obj = [
  {
    id: "1",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-10.png"
  },
  {
    id: "2",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-1.png"
  },
  {
    id: "3",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-4.png"
  },
  {
    id: "4",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-2.svg"
  },
  {
    id: "5",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-5.png"
  },
  {
    id: "6",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-7.png"
  },
  {
    id: "7",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-6.png"
  },
  {
    id: "8",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-8.png"
  },
  {
    id: "9",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-9.png"
  },
  {
    id: "10",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-13.png"
  },
  {
    id: "11",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-3.png"
  },
  {
    id: "12",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-11.png"
  },
  {
    id: "13",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-10.png"
  },
  {
    id: "14",
    image: "https://lacvietauction.vn/LVT/assets/images/bg/client-14.png"
  }
]

export default function Buyer () {
  return (
    <>
        <NavbarUser />
        <Introduction/>
        <Preview/>
        <div className="bg-gray-200 p-20">
          <h2 className="text-4xl text-center font-semibold">
          Khách hàng & đối tác tiêu biểu
          </h2>
          <div>
            <Swiper
              style={{ '--swiper-pagination-color': 'red'}}
              spaceBetween={5}
              slidesPerView={4}
              slidesPerGroup={8}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              speed={750}
              modules={[FreeMode, Pagination]}
            >
            {obj.map((object) => (
                <SwiperSlide key={object.id}>
                  <Card
                    class="flex items-center justify-center ml-5 bg-white mb-20 mt-10 transition duration-500 ease-in-out hover:transform  
                    hover:translate-y-1 hover:scale-105  
                    rounded-lg p-4 border border-red-900"
                    style={{ width: '300px', height: '200px' }}
                  >
                    <img src={object.image} style={{maxHeight: "180px", maxWidth: "150px"}} alt="img"/>
                  </Card>
                </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>

        <Footer />
    </>
  );
}

