import { useQuery } from "react-query";
import axios from "axios";

export default function useOccuringAuction() {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/admin/getOccuringAuction"
    );
    return response.data;
  };

  const {
    data: auction,
    error,
    isLoading,
  } = useQuery("OccuringId", retrievePosts, {
    cacheTime: Infinity, //Thời gian cache data, ví dụ: 5000, sau 5s thì cache sẽ bị xóa, khi đó data trong cache sẽ là undefined
    refetchOnWindowFocus: false,
  });

  return { auction, error, isLoading };
}
