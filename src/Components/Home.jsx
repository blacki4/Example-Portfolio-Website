import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center overflow-hidden relative"
      style={{ backgroundImage: "url('/images/home-bg.png')" }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primaryColor rounded-full opacity-40 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="w-screen h-screen flex justify-center items-center flex-col px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hello text with slide from left */}
        <h1
          className={`
            text-white text-lg sm:text-xl md:text-2xl text-center
            transform transition-all duration-1000 ease-out
            ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
          id="Home"
        >
          Hello, I Am
        </h1>

        {/* Main title with typewriter + improved glow effect */}
        <div
          className={`
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primaryColor 
          mt-2 sm:mt-3 font-bold text-center relative
          transform transition-all duration-1200 ease-out delay-500
          ${isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"}
        `}
        >
          {/* Improved glow effect - less blur */}
          <div className="absolute inset-0 glow-effect opacity-60">
            <Typewriter
              options={{
                strings: ["EXAMPLE NAME", "WEB DEVELOPER", "UI/UX DESIGNER"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </div>

          {/* Main text */}
          <div className="relative z-10">
            <Typewriter
              options={{
                strings: ["EXAMPLE NAME", "WEB DEVELOPER", "UI/UX DESIGNER"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </div>

          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primaryColor/10 to-transparent transform -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
        </div>

        {/* Description with fade + slide from bottom */}
        <p
          className={`
          text-greyDark mt-4 sm:mt-6 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 
          text-center text-sm sm:text-base md:text-lg leading-relaxed
          transform transition-all duration-1000 ease-out delay-1000
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          delectus quae laudantium molestiae cupiditate officia, provident ullam
          laborum aperiam magni dolorem quo rerum? Nobis in, sed accusantium
          repellat rem eum?
        </p>

        {/* CTA Buttons */}
        <div
          className={`
          flex gap-4 sm:gap-6 mt-6 sm:mt-8
          transform transition-all duration-1000 ease-out delay-1200
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
        >
          <button className="border-2 border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View My Work
          </button>
          <button className="border-2 border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Download CV
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div
          className={`
          absolute bottom-8 left-1/2 transform -translate-x-1/2
          transition-all duration-1000 ease-out delay-1500
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        `}
        >
          <div
            className="flex flex-col items-center gap-2 cursor-pointer group animate-bounce-slow"
            onClick={() =>
              document
                .getElementById("About")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-white text-xs sm:text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center group-hover:border-primaryColor transition-colors duration-300">
              <div className="w-1 h-3 bg-primaryColor rounded-full mt-2 group-hover:bg-white transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for improved animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
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

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 8px rgba(224, 168, 13, 0.6);
          }
          50% {
            text-shadow: 0 0 12px rgba(224, 168, 13, 0.8);
          }
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

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .glow-effect {
          animation: glow 3s ease-in-out infinite;
          filter: blur(1px); /* Reduced blur */
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        /* Improved text shadow without excessive blur */
        .glow-text {
          text-shadow: 0 0 10px rgba(224, 168, 13, 0.5);
          animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
