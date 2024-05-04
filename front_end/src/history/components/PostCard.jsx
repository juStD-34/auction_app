// PostCard.js
import React from 'react';

const PostCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 flex items-center">
      <img
        src={image}
        alt="Post"
        className="h-full w-16 rounded-l-lg object-cover mr-4"
      />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
