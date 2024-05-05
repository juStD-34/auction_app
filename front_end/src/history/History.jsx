import PostCard from "./components/PostCard";
import NavbarUser from "../shared/Navbar";

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
      return (
        <div>
            <NavbarUser />
            <div className="mx-48 mt-8">
              <h2 className="text-3xl font-bold mb-6">Succeeded Auction</h2>
              <div>
                {savedPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                  />
                ))}
              </div>
            </div>
        </div>
      );
}