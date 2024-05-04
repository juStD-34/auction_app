import PostCard from "./components/PostCard";
import NavbarUser from "../shared/Navbar";
export default function History() {
    const savedPosts = [
        {
          id: 1,
          image: 'https://via.placeholder.com/150',
          title: 'Sample Post 1',
          description: 'This is a sample post description.',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/150',
          title: 'Sample Post 2',
          description: 'This is another sample post description.',
        },
        // Add more sample posts as needed
      ];
    
      return (
        <div>
            <NavbarUser />
            <div className="container mx-auto mt-8">
              <h1 className="text-2xl font-bold mb-4">Saved Posts</h1>
              <div>
                {savedPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                  />
                ))}
              </div>
            </div>
        </div>
      );
}