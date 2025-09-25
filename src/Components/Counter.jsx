import { useState, useEffect, useRef } from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CountUp from "react-countup";

export default function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
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
  }, [hasAnimated, sectionRef]);

  const counterItems = [
    {
      icon: CloudOutlinedIcon,
      value: 89,
      text: "HAPPY CLIENTS",
      color: "#4FC3F7",
      delay: 0,
    },
    {
      icon: FavoriteBorderOutlinedIcon,
      value: 231,
      text: "PROJECTS COMPLETED",
      color: "#F06292",
      delay: 200,
    },
    {
      icon: PublicOutlinedIcon,
      value: 108,
      text: "FILES DOWNLOADED",
      color: "#4DB6AC",
      delay: 400,
    },
    {
      icon: PersonOutlineOutlinedIcon,
      value: 1446,
      text: "LINES OF CODE",
      color: "#FFB74D",
      delay: 600,
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center overflow-hidden relative"
      style={{ backgroundImage: "url('/images/some-facts-bg.png')" }}
      ref={sectionRef}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primaryColor rounded-full opacity-40
              ${isVisible ? "animate-float opacity-70" : "opacity-0"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-40 w-full max-w-7xl">
          {counterItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="flex justify-center items-center flex-col gap-2 sm:gap-3 text-center relative"
              >
                {/* Animated icon container */}
                <div
                  className={`
                    relative mb-2 sm:mb-3
                    transform transition-all duration-1000 ease-out
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100 scale-100 rotate-0"
                        : "translate-y-10 opacity-0 scale-50 rotate-45"
                    }
                  `}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  {/* Icon glow effect */}
                  <div
                    className={`
                      absolute inset-0 rounded-full bg-primaryColor opacity-0 
                      transition-all duration-700 ease-out
                      ${isVisible ? "opacity-20 scale-150" : "scale-100"}
                    `}
                    style={{
                      width: "60px",
                      height: "60px",
                      filter: "blur(12px)",
                      margin: "-10px",
                    }}
                  />

                  <IconComponent
                    sx={{
                      color: "white",
                      fontSize: {
                        xs: "30px",
                        sm: "35px",
                        md: "40px",
                        lg: "45px",
                      },
                      transition: "all 0.5s ease",
                      position: "relative",
                      zIndex: 10,
                    }}
                    className={`
                      ${isVisible ? "hover:scale-110 hover:rotate-12" : ""}
                      transition-transform duration-300
                    `}
                  />
                </div>

                {/* Counter number with pop-in effect */}
                <div
                  className={`
                    overflow-hidden
                    transform transition-all duration-800 ease-out
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-8 opacity-0 scale-90"
                    }
                  `}
                  style={{ transitionDelay: `${item.delay + 200}ms` }}
                >
                  <p className="text-primaryColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative">
                    {/* Subtle text shadow for depth */}
                    <span className="absolute inset-0 text-black opacity-20 blur-sm">
                      <CountUp end={item.value} duration={3} start={0} />
                    </span>

                    <CountUp
                      end={isVisible ? item.value : 0}
                      duration={3}
                      start={0}
                      className="relative z-10"
                    />
                  </p>
                </div>

                {/* Text description with slide-up effect */}
                <div
                  className={`
                    transform transition-all duration-700 ease-out
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                  style={{ transitionDelay: `${item.delay + 400}ms` }}
                >
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide relative">
                    {item.text}

                    {/* Animated underline */}
                    <span
                      className={`
                        absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor 
                        transition-all duration-500 ease-out
                        ${isVisible ? "w-full opacity-100" : "opacity-0"}
                      `}
                      style={{ transitionDelay: `${item.delay + 800}ms` }}
                    />
                  </p>
                </div>

                {/* Floating particles around each item */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-white rounded-full opacity-0
                        ${isVisible ? "animate-ping opacity-30" : ""}`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + (i % 2) * 80}%`,
                        animationDelay: `${i * 0.7 + item.delay / 1000}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-5px) rotate(1deg);
          }
          66% {
            transform: translateY(3px) rotate(-1deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(224, 168, 13, 0.3);
          }
          50% {
            box-shadow: 0 0 15px rgba(224, 168, 13, 0.6),
              0 0 25px rgba(224, 168, 13, 0.4);
          }
        }

        @keyframes numberPop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .number-pop {
          animation: numberPop 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
