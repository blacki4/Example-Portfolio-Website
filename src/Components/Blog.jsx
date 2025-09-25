import { useState, useEffect, useRef, useMemo } from "react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPosts, setAnimatedPosts] = useState([]);
  const sectionRef = useRef(null);

  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        image: "/images/blog/b1.png",
        title: "Master These Awesome",
        author: "Dorin Gray",
        date: "Jun 27, 2025",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore, voluptatem commodi inventore omnis aperiam dolorem placeat",
        delay: 0,
      },
      {
        id: 2,
        image: "/images/blog/b2.png",
        title: "Best Design Items To Appeal",
        author: "Dorin Gray",
        date: "Jun 27, 2025",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore, voluptatem commodi inventore omnis aperiam dolorem placeat",
        delay: 200,
      },
      {
        id: 3,
        image: "/images/blog/b3.png",
        title: "The 20 Best Lightroom Presets",
        author: "Dorin Gray",
        date: "Jun 27, 2025",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore, voluptatem commodi inventore omnis aperiam dolorem placeat",
        delay: 400,
      },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  useEffect(() => {
    if (isVisible) {
      blogPosts.forEach((post, index) => {
        setTimeout(() => {
          setAnimatedPosts((prev) => [...prev, post.id]);
        }, post.delay);
      });
    }
  }, [isVisible, blogPosts]);

  return (
    <div
      ref={sectionRef}
      className="min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] bg-secondaryBackground flex justify-center items-center flex-col py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-24 h-24 border border-primaryColor border-opacity-5 rounded-lg
              transform transition-all duration-2000 ease-out
              ${
                isVisible
                  ? "rotate-45 scale-125 opacity-100"
                  : "rotate-0 scale-50 opacity-0"
              }`}
            style={{
              left: `${5 + i * 18}%`,
              top: `${10 + (i % 2) * 60}%`,
              transitionDelay: `${i * 300}ms`,
            }}
          />
        ))}
      </div>

      {/* Title with animation */}
      <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20 z-10">
        <h1
          className={`
            text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold text-center
            transform transition-all duration-1000 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }
          `}
          id="Blog"
        >
          Blog
        </h1>

        {/* Animated underline */}
        <div
          className={`
            absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primaryColor
            transition-all duration-800 ease-out
            ${isVisible ? "w-16 opacity-100" : "w-0 opacity-0"}
          `}
          style={{
            transitionDelay: "300ms",
            background:
              "linear-gradient(90deg, transparent, #e0a80d, transparent)",
          }}
        />
      </div>

      {/* Blog Posts Grid with creative animations */}
      <div className="w-full max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`
                bg-primaryBackground w-full max-w-[350px] rounded-lg overflow-hidden 
                shadow-lg transition-all duration-500 ease-out
                transform
                ${
                  animatedPosts.includes(post.id)
                    ? "translate-y-0 opacity-100 scale-100 rotate-0"
                    : "translate-y-12 opacity-0 scale-90 rotate-3"
                }
                hover:shadow-2xl hover:transform hover:scale-105 hover:-translate-y-2
                group
              `}
              style={{ transitionDelay: `${post.delay}ms` }}
            >
              {/* Blog Image Container */}
              <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden relative">
                {/* Image shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out z-10" />

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primaryColor opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-primaryColor text-black px-3 py-1 rounded-full text-sm font-medium transform translate-y-0 group-hover:translate-y-1 transition-transform duration-300">
                  {post.date}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-5 md:p-6 relative">
                {/* Content background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 via-transparent to-primaryColor/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-lg" />

                <div className="relative z-10">
                  <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight transition-all duration-300 group-hover:text-primaryColor cursor-pointer transform translate-y-0 group-hover:translate-y-[-2px]">
                    {post.title}
                  </h2>

                  <div className="flex items-center text-primaryColor text-sm sm:text-base mb-3 sm:mb-4 transform translate-y-0 group-hover:translate-y-[-1px] transition-transform duration-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primaryColor rounded-full"></span>
                      By {post.author}
                    </span>
                  </div>

                  <p className="text-greyDark text-sm sm:text-base md:text-lg leading-relaxed transform translate-y-0 group-hover:translate-y-[-1px] transition-transform duration-300">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="mt-4 sm:mt-5 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                    <button className="text-primaryColor text-sm sm:text-base font-medium hover:text-white transition-all duration-300 border-b border-transparent hover:border-primaryColor group/btn flex items-center gap-2">
                      Read More
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primaryColor opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 rounded-br-lg" />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primaryColor rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${15 + (i % 2) * 70}%`,
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button with animation */}
      <div
        className={`
        mt-8 sm:mt-12 md:mt-16 transform transition-all duration-700 ease-out z-10
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
      `}
        style={{ transitionDelay: "800ms" }}
      >
        <button className="bg-transparent border-2 border-primaryColor text-primaryColor px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-primaryColor hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
          {/* Button shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">View All Posts</span>
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes contentSlide {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes imageZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        .group:hover .card-float {
          animation: cardFloat 3s ease-in-out infinite;
        }

        .content-slide {
          animation: contentSlide 0.6s ease-out forwards;
        }

        .image-zoom {
          animation: imageZoom 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
