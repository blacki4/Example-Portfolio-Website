import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of component is visible
        rootMargin: "0px 0px -100px 0px",
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
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-secondaryBackground flex justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] py-8 md:py-12 lg:py-16 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 gap-6 md:gap-8 lg:gap-12 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating geometric shapes */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-primaryColor border-opacity-20 
                transition-all duration-[3000ms] ease-out
                ${
                  isVisible
                    ? "scale-100 opacity-30 rotate-180"
                    : "scale-0 opacity-0 rotate-0"
                }`}
              style={{
                width: `${60 + i * 40}px`,
                height: `${60 + i * 40}px`,
                right: `${10 + i * 15}%`,
                top: `${20 + i * 20}%`,
                transitionDelay: `${i * 400}ms`,
              }}
            />
          ))}
        </div>

        {/* Image Section with 3D rotation effect */}
        <div className="w-full lg:w-1/2 flex justify-center relative perspective-1000">
          <div
            className={`
              transform transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-x-0 rotate-y-0 scale-100 opacity-100"
                  : "-translate-x-16 rotate-y-45 scale-75 opacity-0"
              }
            `}
            style={{
              transformStyle: "preserve-3d",
              transitionDelay: "300ms",
            }}
          >
            {/* Image glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-primaryColor to-primaryColor rounded-full blur-xl 
                transition-all duration-1000 ease-out
                ${
                  imageLoaded && isVisible
                    ? "opacity-20 scale-110"
                    : "opacity-0 scale-100"
                }`}
              style={{ transitionDelay: "800ms" }}
            />

            <img
              src="/images/man.png"
              alt="About Me"
              className={`
                w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] max-w-full h-auto object-contain
                relative z-10 rounded-2xl
                transition-all duration-700 ease-out
                ${imageLoaded ? "filter-none" : "filter blur-sm"}
              `}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* Content Section with typewriter effect */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          {/* Animated title */}
          <div className="relative mb-6 md:mb-8 lg:mb-10">
            <h1
              className={`
                text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold
                transform transition-all duration-800 ease-out
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
              id="About"
              style={{ transitionDelay: "600ms" }}
            >
              About Me
            </h1>

            {/* Animated underline */}
            <div
              className={`h-1 bg-gradient-to-r from-primaryColor to-transparent rounded-full
                transform transition-all duration-700 ease-out origin-left
                ${
                  isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              style={{ transitionDelay: "900ms" }}
            />
          </div>

          {/* Animated text paragraphs */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-2xl">
            {[
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ullam tempore nobis dolor cumque est quia provident vitae veniam facere rerum, accusamus at voluptatum, optio, sed minus fuga voluptatibus. Nostrum Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur error libero natus ad suscipit repudiandae minima dolorem esse ducimus?`,
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur error libero natus ad suscipit repudiandae minima dolorem esse ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur error libero natus ad suscipit repudiandae minima dolorem esse ducimus?`,
            ].map((text, index) => (
              <p
                key={index}
                className={`
                  text-greyDark text-sm sm:text-base md:text-lg leading-relaxed
                  transform transition-all duration-600 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{ transitionDelay: `${1200 + index * 300}ms` }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Animated CTA button */}
          <button
            className={`
              mt-6 md:mt-8 bg-transparent border-2 border-primaryColor text-primaryColor
              px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold
              hover:bg-primaryColor hover:text-black transition-all duration-300
              transform
              ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-4 opacity-0 scale-95"
              }
            `}
            style={{ transitionDelay: "1800ms", transitionDuration: "500ms" }}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Custom CSS for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-45 {
          transform: rotateY(45deg);
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes scaleRotateIn {
          from {
            transform: scale(0.8) rotate(-10deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
