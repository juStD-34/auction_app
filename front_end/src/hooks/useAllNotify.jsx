import { useQuery } from "react-query";
import axios from "axios";

import { getUserID } from "./userID";

export default function useAllNotify() {
  const retrievePosts = async () => {
    const response = await axios.get(
      "http://localhost:3002/notifications/getNotification/"+"663b575555b75c1036c1075b"
    );
    return response.data;
  };

  const {
    data: auction,
    error,
    isLoading,
  } = useQuery("All-Notify", retrievePosts, {
  });

  return { auction, error, isLoading };
}
