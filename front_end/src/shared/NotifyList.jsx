import axios from "axios";
import { getUserID } from "../hooks/userID";
import { useQueryClient } from "react-query";
import Notifications from "react-notifications-menu";

import useAllNotify from "../hooks/useAllNotify";

export default function NotifyList() {
  const queryClient = useQueryClient();

  async function markAsAllRead() {
    console.log(
      await axios.post("http://localhost:3002/notifications/markAllAsRead", {
        userID: getUserID(),
      })
    );
    queryClient.invalidateQueries("All-Notify");
  }

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

  const datas = useAllNotify();
  var obj = [];
  if (datas.error)
    return (
      <Notifications
        data={{ message: "Error fetching data" }}
        icon="https://i.gifer.com/ZZ5H.gif"
      />
    );
  if (datas.isLoading) return <Notifications icon="https://i.gifer.com/ZZ5H.gif" data={{ message: "Loading..." }} />;
  var res = datas.auction.result;
  for (var i = res.length - 1; i >= 0; i--) {
    if (res[i].status === "read") continue;
    obj.push({
      receivedTime: formatDate(res[i].date),
      message: res[i].content,
      detailPage: `/historydetails/${res[i].auctionID}`,
      image: res[i].image,
    });
  }

  return (
    <Notifications
      data={obj}
      header={{
        title: "Notifications",
        option: {
          text: "Mark as all read",
          onClick: () => markAsAllRead(),
        },
      }}
    />
  );
}
