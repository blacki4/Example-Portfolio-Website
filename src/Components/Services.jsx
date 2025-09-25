import { useState, useEffect, useRef } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import CodeIcon from "@mui/icons-material/Code";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: SettingsIcon,
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque voluptatibus dolorum, assumenda suscipit fugiat.",
      color: "#e0a80d",
      delay: 0,
    },
    {
      icon: CropRotateIcon,
      title: "Clean Code",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eligendi sapiente quas autem suscipit. Tempore.",
      color: "#e0a80d",
      delay: 200,
    },
    {
      icon: FormatSizeIcon,
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, aliquid odit quis perspiciatis est ea?",
      color: "#e0a80d",
      delay: 400,
    },
    {
      icon: DonutSmallRoundedIcon,
      title: "Material UI",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab maiores dignissimos, molestias voluptas delectus exercitationem.",
      color: "#e0a80d",
      delay: 600,
    },
    {
      icon: CodeIcon,
      title: "Material UI Icons",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laudantium veritatis nulla, fugiat harum vitae!",
      color: "#e0a80d",
      delay: 800,
    },
    {
      icon: BarChartIcon,
      title: "Awesome Support",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ex saepe, autem fugit error amet.",
      color: "#e0a80d",
      delay: 1000,
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
        threshold: 0.1,
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

  return (
    <div
      ref={sectionRef}
      className="bg-secondaryBackground flex flex-col justify-center items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 border border-primaryColor border-opacity-10 rounded-lg
              transform transition-all duration-[4000ms] ease-out
              ${
                isVisible
                  ? "rotate-45 scale-100 opacity-100"
                  : "rotate-0 scale-0 opacity-0"
              }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + (i % 2) * 40}%`,
              transitionDelay: `${i * 300}ms`,
            }}
          />
        ))}
      </div>

      {/* Title with wave animation */}
      <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20">
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
          id="Services"
        >
          Services
        </h1>

        {/* Animated underline wave */}
        <div
          className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primaryColor
            transition-all duration-800 ease-out
            ${isVisible ? "w-24 opacity-100" : "w-0 opacity-0"}`}
          style={{
            transitionDelay: "300ms",
            borderRadius: "2px",
            background:
              "linear-gradient(90deg, transparent, #e0a80d, transparent)",
          }}
        />
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className={`
                  group perspective-1000
                  transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-12 opacity-0 scale-90"
                  }
                `}
                style={{
                  transitionDelay: `${500 + service.delay}ms`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative bg-primaryBackground rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  {/* Card content */}
                  <div className="p-4 sm:p-5 md:p-6 lg:p-8 transform transition-all duration-500 group-hover:scale-105 relative z-10">
                    {/* Icon with pulse animation */}
                    <div className="relative mb-3 sm:mb-4 md:mb-5">
                      <div
                        className={`absolute inset-0 rounded-full bg-primaryColor opacity-0 
                          group-hover:opacity-20 group-hover:scale-150 
                          transition-all duration-500`}
                        style={{
                          width: "40px",
                          height: "40px",
                          filter: "blur(8px)",
                        }}
                      />
                      <IconComponent
                        sx={{
                          color: service.color,
                          fontSize: { xs: "24px", sm: "28px", md: "32px" },
                          transition: "all 0.5s ease",
                          "&:hover": {
                            transform: "rotate(360deg) scale(1.2)",
                          },
                        }}
                        className="relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <h2
                      className="text-white text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 
                      group-hover:text-primaryColor transition-colors duration-300"
                    >
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-greyDark text-sm sm:text-base leading-relaxed 
                      group-hover:text-white transition-colors duration-300"
                    >
                      {service.description}
                    </p>

                    {/* Learn More button (appears on hover) */}
                    <div
                      className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 
                      group-hover:translate-y-0 transition-all duration-300 delay-100"
                    >
                      <button
                        className="text-primaryColor text-sm font-semibold 
                        hover:text-white transition-colors duration-200 border-b border-transparent 
                        hover:border-primaryColor"
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>

                  {/* Animated gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 via-transparent to-primaryColor/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Corner decoration */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 bg-primaryColor opacity-5 
                      transform rotate-45 translate-x-8 -translate-y-8 
                      group-hover:scale-150 group-hover:opacity-10 transition-all duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating call-to-action */}
      <div
        className={`
          mt-12 md:mt-16 transform transition-all duration-800 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
        `}
        style={{ transitionDelay: "1800ms" }}
      >
        <button
          className="bg-primaryColor hover:bg-primaryColor/90 text-black font-semibold 
          px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg
          transform hover:-translate-y-1"
        >
          View All Services
        </button>
      </div>

      {/* Custom CSS for advanced effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(224, 168, 13, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(224, 168, 13, 0.6),
              0 0 30px rgba(224, 168, 13, 0.4);
          }
        }

        .group:hover .pulse-glow {
          animation: pulse-glow 2s infinite;
        }

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

        .slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
