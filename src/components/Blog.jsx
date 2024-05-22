import MaxWidthWrapper from "./MaxWidWrapper";

const blogPosts = [
  {
    id: 1,
    title: "Why you should aim to win a remote job?",
    createdDate: "April 30 2022",
    category: "Monday's Advice",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtb3RlJTIwam9ifGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "This is how James landed a 200k a year job through Jobly",
    createdDate: "April 30 2024",
    category: "Inspiration",
    imgSrc:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtb3RlJTIwam9ifGVufDB8fDB8fHww",
  },
];

const Blog = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-8 md:py-16">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl text-green-800 font-bold">From Blog</h3>
            <p className="text-green-800 mt-2">
              Check out our latest blog posts
            </p>
          </div>
          <button className="bg-green-800 text-white px-8 py-3 rounded text-sm hover:bg-green-700">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between mt-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundImage: `linear-gradient(rgba(26, 91, 7, 0.5), rgba(8, 43, 2, 0.5)), url(${post.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "none",
                height: "300px",
                width: "100%",
              }}
              className="rounded relative cursor-pointer hover:scale-105 hover:shadow-lg transition"
            >
              <h2 className="w-full absolute bottom-[25%] left-[50%] translate-x-[-50%] text-center text-3xl text-white px-4 font-bold">
                <a href="/">{post.title.slice(0, 65)}</a>
              </h2>
              <div className="flex gap-4 font-bold text-sm absolute bottom-[55%] left-[50%] translate-x-[-50%]">
                <span className="text-white">{post.createdDate}</span>
                <span className="text-white">{post.category}</span>
              </div>
              <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-green-800 px-8 py-2 rounded hover:bg-green-800 hover:text-white">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default Blog;
