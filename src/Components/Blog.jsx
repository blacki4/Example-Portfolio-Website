export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/b1.png",
      title: "Master These Awesome",
      author: "Dorin Gray",
      date: "Jun 27, 2025",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore, voluptatem commodi inventore omnis aperiam dolorem placeat",
    },
    {
      id: 2,
      image: "/images/blog/b2.png",
      title: "Best Design Items To Appeal",
      author: "Dorin Gray",
      date: "Jun 27, 2025",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore, voluptatem commodi inventore omnis aperiam dolorem placeat",
    },
    {
      id: 3,
      image: "/images/blog/b3.png",
      title: "The 20 Best Lightroom Presets",
      author: "Dorin Gray",
      date: "Jun 27, 2025",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore, voluptatem commodi inventore omnis aperiam dolorem placeat",
    },
  ];

  return (
    <div className="min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] bg-secondaryBackground flex justify-center items-center flex-col py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1
        className="text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center"
        id="Blog"
      >
        Blog
      </h1>

      {/* Blog Posts Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-primaryBackground w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Blog Image */}
              <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight hover:text-primaryColor transition-colors duration-300 cursor-pointer">
                  {post.title}
                </h2>

                <div className="flex items-center text-primaryColor text-sm sm:text-base mb-3 sm:mb-4">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                <p className="text-greyDark text-sm sm:text-base md:text-lg leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="mt-4 sm:mt-5">
                  <button className="text-primaryColor text-sm sm:text-base font-medium hover:text-white transition-colors duration-300 border-b border-transparent hover:border-primaryColor">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <button className="bg-transparent border-2 border-primaryColor text-primaryColor px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-primaryColor hover:text-black transition-all duration-300 hover:scale-105">
          View All Posts
        </button>
      </div>
    </div>
  );
}
