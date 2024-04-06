//Su dung trong Preview.jsx

import { Card } from "flowbite-react";

export default function Cards({object}) {
  return (
    <Card
      className="max-w-xs mb-16"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={object.image}
    >
      <a href="www.facebook.com">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {object.name}
        </h5>
      </a>
      <span className="text-md text-gray-900 dark:text-white">
          Thời gian đấu giá <p className="font-bold">{object.time}</p>
        </span>
      <div className="flex">
        <span className="text-md text-gray-900 dark:text-white">
          Giá khởi điểm: <p className="font-bold">{object.price}</p>
        </span>
        <button
          href="#"
          className="rounded-lg bg-red-600 px-5 py-3 ml-auto text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-0"
        >
          Chi tiết
        </button>
      </div>
    </Card>
  );
}
