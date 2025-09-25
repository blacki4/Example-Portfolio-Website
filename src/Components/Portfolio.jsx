import { useState, useEffect, useRef } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

export default function Portfolio() {
  const [projectType, setProjectType] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProjects, setAnimatedProjects] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Marketing Project",
      img: "/images/port/port1.jpg",
      type: "Marketing",
      id: 1,
    },
    {
      title: "Marketing Project",
      img: "/images/port/port2.jpg",
      type: "Marketing",
      id: 2,
    },
    {
      title: "Design Project",
      img: "/images/port/port3.jpg",
      type: "Design",
      id: 3,
    },
    {
      title: "Design Project",
      img: "/images/port/port4.jpg",
      type: "Design",
      id: 4,
    },
    {
      title: "Development Project",
      img: "/images/port/port5.jpg",
      type: "Development",
      id: 5,
    },
    {
      title: "Development Project",
      img: "/images/port/port6.jpg",
      type: "Development",
      id: 6,
    },
  ];

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
      // Animate projects sequentially
      filteredProjects.forEach((project, index) => {
        setTimeout(() => {
          setAnimatedProjects((prev) => [...prev, project.id]);
        }, index * 150);
      });
    }
  }, [isVisible, projectType, filteredProjects]);

  const filteredProjects =
    projectType === "All"
      ? projects
      : projects.filter((p) => p.type === projectType);

  const categories = ["All", "Marketing", "Design", "Development"];

  return (
    <div
      ref={sectionRef}
      className="bg-secondaryBackground flex flex-col justify-center items-center min-h-screen py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-20 h-20 border border-primaryColor border-opacity-5 rounded-full
              transform transition-all duration-2000 ease-out
              ${
                isVisible
                  ? "scale-150 rotate-180 opacity-100"
                  : "scale-50 rotate-0 opacity-0"
              }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + (i % 3) * 30}%`,
              transitionDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>

      {/* Title with wave animation */}
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
          id="Portfolio"
        >
          Portfolio
        </h1>

        {/* Animated underline */}
        <div
          className={`
            absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primaryColor
            transition-all duration-800 ease-out
            ${isVisible ? "w-24 opacity-100" : "w-0 opacity-0"}
          `}
          style={{
            transitionDelay: "300ms",
            background:
              "linear-gradient(90deg, transparent, #e0a80d, transparent)",
          }}
        />
      </div>

      {/* Filter Buttons with stagger animation - FIXED TRANSITION */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16 z-10">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`
              px-4 sm:px-6 md:px-8 lg:px-10 
              py-2 sm:py-3 md:py-4 lg:py-5 
              rounded-full border border-solid border-primaryColor 
              text-sm sm:text-base md:text-lg 
              duration-300 ease-out
              hover:scale-110 hover:bg-primaryColor hover:text-black
              transform
              ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-90"
              }
              ${
                projectType === category
                  ? "bg-primaryColor text-black shadow-lg scale-105"
                  : "bg-secondaryBackground text-white hover:shadow-lg"
              }
            `}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              transitionProperty: "background-color, color, opacity, transform",
            }}
            onClick={() => {
              setProjectType(category);
              setAnimatedProjects([]);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid with creative animations - FIXED TRANSITION */}
      <div className="w-full max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 place-items-center">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                w-full max-w-[350px] aspect-[7/8] 
                bg-cover bg-center rounded-lg 
                group duration-300 ease-out
                shadow-lg relative overflow-hidden
                transform transition-all cursor-pointer
                ${
                  animatedProjects.includes(project.id)
                    ? "translate-y-0 opacity-100 scale-100 rotate-0"
                    : "translate-y-12 opacity-0 scale-90 rotate-5"
                }
                hover:scale-105 hover:shadow-2xl hover:-translate-y-2
              `}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${project.img})`,
                transitionProperty: "transform, opacity",
              }}
            >
              {/* Image overlay with gradient */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                "
              />

              {/* Project info overlay */}
              <div
                className="
                  absolute inset-0 rounded-lg bg-primaryColor
                  opacity-0 group-hover:opacity-95 
                  transition-all duration-300 ease-out
                  flex justify-center items-center flex-col gap-3 sm:gap-4
                  transform translate-y-4 group-hover:translate-y-0
                "
              >
                <h3 className="text-white text-lg sm:text-xl md:text-xl font-semibold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200">
                  {project.title}
                </h3>
                <p className="text-white text-base sm:text-lg opacity-90 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200 delay-75">
                  {project.type}
                </p>
                <RemoveRedEyeOutlinedIcon
                  sx={{
                    color: "white",
                    fontSize: { xs: "20px", sm: "25px", md: "30px" },
                    mt: 1,
                  }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200 delay-150"
                />

                {/* Hover effect border */}
                <div className="absolute inset-2 border-2 border-white border-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
              </div>

              {/* Quick info badge (visible without hover) */}
              <div
                className="
                  absolute bottom-4 left-4 bg-black/70 text-white 
                  px-3 py-1 rounded-full text-sm opacity-100 group-hover:opacity-0
                  transition-all duration-200 transform translate-y-0 group-hover:translate-y-2
                "
              >
                {project.type}
              </div>

              {/* Shine effect on hover */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]
                  transition-transform duration-500 ease-in-out
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Empty State with animation */}
      {filteredProjects.length === 0 && (
        <div
          className={`
          text-center py-12 transform transition-all duration-500 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
        >
          <p className="text-greyDark text-lg">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* View More Button */}
      <div
        className={`
        mt-12 md:mt-16 transform transition-all duration-500 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
      `}
        style={{ transitionDelay: "600ms" }}
      >
        <button
          className="
            bg-primaryColor hover:bg-primaryColor/90 text-black font-semibold 
            px-8 py-3 rounded-full transition-all duration-200 
            hover:scale-105 hover:shadow-lg transform hover:-translate-y-1
            border-2 border-transparent hover:border-primaryColor/50
          "
        >
          View All Projects
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3) rotate(5deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) rotate(-2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-12deg);
          }
          100% {
            transform: translateX(150%) skewX(-12deg);
          }
        }

        .project-item {
          animation: bounceIn 0.4s ease-out forwards;
        }

        .shimmer-effect {
          animation: shimmer 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
