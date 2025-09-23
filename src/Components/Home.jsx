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
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 animate-pulse"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primaryColor rounded-full opacity-30 animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
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

        {/* Main title with typewriter + glow effect */}
        <div
          className={`
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primaryColor 
          mt-2 sm:mt-3 font-bold text-center
          transform transition-all duration-1200 ease-out delay-500
          ${isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"}
        `}
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 text-primaryColor blur-sm animate-pulse opacity-50">
              <Typewriter
                options={{
                  strings: [
                    "MALEK HASSOUNEH",
                    "WEB DEVELOPER",
                    "UI/UX DESIGNER",
                  ],
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
                  strings: [
                    "MALEK HASSOUNEH",
                    "WEB DEVELOPER",
                    "UI/UX DESIGNER",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
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

        {/* Animated scroll indicator */}
        <div
          className={`
          absolute bottom-8 left-1/2 transform -translate-x-1/2
          transition-all duration-1000 ease-out delay-1500
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        `}
        >
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <span className="text-white text-xs sm:text-sm opacity-70 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primaryColor rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for additional animations */}
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
            text-shadow: 0 0 5px #e0a80d, 0 0 10px #e0a80d, 0 0 15px #e0a80d;
          }
          50% {
            text-shadow: 0 0 10px #e0a80d, 0 0 20px #e0a80d, 0 0 30px #e0a80d;
          }
        }

        .glow-text {
          animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
