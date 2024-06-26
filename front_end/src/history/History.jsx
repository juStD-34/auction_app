import PostCard from "./components/PostCard";
import NavbarUser from "../shared/Navbar";

import useAllNotify from "../hooks/useAllNotify";
import Loading from "../shared/Loading";
const savedPosts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Cu ca rot cua Le Ba Truong',
    description: 'Ngày chốt giá',
    date: '12/12/2021',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Cu su hao cua Le Ba Truong',
    description: 'Ngày chốt giá',
    date: '12/12/2021',  
  },
  // Add more sample posts as needed
];

export default function History() {
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
  if (datas.error) return <div>An error has occurred: {datas.error.message}</div>;
  if (datas.isLoading) return <Loading/>;
  var res = datas.auction.result;
  for (var i = 0; i < res.length; i++) {
    obj.push({
      receivedTime: formatDate(res[i].date),
      message: res[i].content,
      detailPage: `/historydetails/${res[i].auctionID}`,
      image: res[i].image,
    });
  }

      return (
        <div>
            <NavbarUser />
            <div className="mx-48 mt-8">
              <h2 className="text-3xl font-bold mb-6">Succeeded Auction</h2>
              <div>
                {obj.map((post) => (
                  <PostCard
                    key={post.message}
                    image={post.image}
                    title={post.message}
                    date={post.receivedTime}
                    to={post.detailPage}
                  />
                ))}
              </div>
            </div>
        </div>
      );
}