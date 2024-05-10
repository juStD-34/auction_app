// PostCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function PostCard({ image, title, date, to }) {

  const navigate = useNavigate();
  function handleClick() {
    navigate(to);
  }

  return (
    <div className="bg-white rounded-lg shadow-md mb-6 flex">
      <img
        src={image}
        alt="Post"
        className="h-full w-32 rounded-l-lg object-cover mr-4"
      />
      <div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-gray-600 text-lg">{date}</p>
        <button
          onClick={() => handleClick(title)}
          className="bg-red-600 rounded-md p-2 text-white hover:bg-black mt-4"
        >
          Xem thêm chi tiết
        </button>
      </div>
    </div>
  );
}

export default PostCard;
