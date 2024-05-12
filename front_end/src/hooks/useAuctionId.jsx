import { useQuery } from "react-query";
import axios from "axios";

export default function useAuctionId(id) {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/seller/getAuctionByID/"+id
    );
    return response.data;
  };

  const {
    data: auction,
    error,
    isLoading,
  } = useQuery("AuctionId", retrievePosts, {
    refetchOnWindowFocus: false,
  });

  return { auction, error, isLoading };
}
