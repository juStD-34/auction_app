import { useQuery } from "react-query";
import axios from "axios";

export default function useSearch(type) {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/bidder/searchAuction?type="+type
    );
    return response.data;
  };

  const {
    data: auction,
    error,
    isLoading,
  } = useQuery("search", retrievePosts, {
    cacheTime: Infinity, //Thời gian cache data, ví dụ: 5000, sau 5s thì cache sẽ bị xóa, khi đó data trong cache sẽ là undefined
    refetchOnWindowFocus: false,
  });

  return { auction, error, isLoading };
}
