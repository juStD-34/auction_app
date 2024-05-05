import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function useData(id) {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/seller/getAuctionByID/" + id
    );
    return response.data;
  };

  const {
    data: auction,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts, {
    cacheTime: Infinity, //Thời gian cache data, ví dụ: 5000, sau 5s thì cache sẽ bị xóa, khi đó data trong cache sẽ là undefined
    refetchOnWindowFocus: false,
  });

  return { auction, error, isLoading };
}
