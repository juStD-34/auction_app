import { useQuery } from "react-query";
import axios from "axios";
import { getUserID } from "./userID";

export default function useSellerAuctions() {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/seller/getAllAuctionByID/"+getUserID()
    );
    return response.data;
  };
  console.log(getUserID());

  const {
    data: auction,
    error,
    isLoading,
    isError,
  } = useQuery('SellerAuction', retrievePosts, {
    retry: 1,
  });

  return { auction, error, isLoading, isError };
}
