//Su dung trong Preview.jsx
import { useNavigate } from "react-router-dom";

import { Card } from "flowbite-react";

export default function Cards({ object }) {
  const navigate = useNavigate();
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
  function openDetail() {
    navigate(`/productdetail/${object.id}`);
  }

  return (
    <Card
      className=" max-w-sm mb-16"
      renderImage={() => (
        <img
          className="object-cover max-h-56 rounded-t-lg"
          src={object.image}
          alt={object.name}
        />
      )}
    >
      <a href={"/productdetail/" + object.name}>
        <h5 className="text-xl overflow-hidden max-w-60 font-bold tracking-tight text-gray-900 dark:text-white">
          {object.name}
        </h5>
      </a>
      <span className="text-md text-gray-900 dark:text-white">
        Thời gian đấu giá <p className="font-bold">{formatDate(object.time)}</p>
      </span>
      <div className="flex">
        <span className="text-md text-gray-900 dark:text-white">
          Giá khởi điểm: <p className="font-bold">{object.price}</p>
        </span>
        <button
          onClick={openDetail}
          className="rounded-lg bg-red-600 px-5 py-3 ml-auto text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-0"
        >
          Chi tiết
        </button>
      </div>
    </Card>
  );
}
