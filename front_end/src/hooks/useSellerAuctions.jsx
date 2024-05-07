import { useQuery } from "react-query";
import axios from "axios";

export default function useSellerAuctions(userId) {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/seller/getAllAuctionByID/"+userId
    );
    return response.data;
  };

  const {
    data: auction,
    error,
    isLoading,
  } = useQuery("SellerAuction", retrievePosts);

  return { auction, error, isLoading };
}
