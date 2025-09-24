import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    img: "/images/testimonials/team-1.jpeg",
    name: "Alamin Musa",
    job: "Front-End Developer",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt dolore, impedit obcaecati alias ullam nam illo. Voluptatibus, ipsa assumenda! Excellent work and professional approach.",
    id: 1,
  },
  {
    img: "/images/testimonials/team-2.jpeg",
    name: "Alex Ander",
    job: "Back-End Developer",
    testimonial:
      "Amazing experience working together. The quality of work exceeded our expectations and the delivery was on time. Highly recommend for any development project.",
    id: 2,
  },
  {
    img: "/images/testimonials/team-3.jpeg",
    name: "Kylian Mbappe",
    job: "React Developer",
    testimonial:
      "Professional, creative, and reliable. The project was completed with attention to detail and modern best practices. Will definitely work again in the future.",
    id: 3,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      ref={sectionRef}
      style={{ backgroundImage: "url('/images/testimonials-bg.png')" }}
      className="w-full bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center items-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/30"></div>

      {/* Floating quotes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-6xl sm:text-7xl md:text-8xl text-primaryColor opacity-5
              transform transition-all duration-3000 ease-in-out
              ${isVisible ? "scale-110 opacity-10" : "scale-100 opacity-0"}`}
            style={{
              left: `${15 + i * 25}%`,
              top: `${10 + (i % 2) * 70}%`,
              transitionDelay: `${i * 400}ms`,
            }}
          >
            "
          </div>
        ))}
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center relative z-10">
        {/* Title with animation */}
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
            id="Testimonials"
          >
            Testimonials
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

        <div className="w-full max-w-5xl">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4 sm:px-6 md:px-8">
                <div className="flex justify-center items-center flex-col text-center">
                  {/* Testimonial Text Container - WIDER */}
                  <div className="mb-8 sm:mb-10 md:mb-12 w-full max-w-4xl">
                    <p
                      className={`
                        text-greyDark text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed 
                        px-6 sm:px-8 md:px-12 lg:px-16 italic transform transition-all duration-700 ease-out
                        ${
                          currentSlide === index
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-4 opacity-0 scale-95"
                        }
                      `}
                      style={{ transitionDelay: "200ms" }}
                    >
                      "{testimonial.testimonial}"
                    </p>

                    {/* Decorative quotes */}
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-primaryColor text-4xl sm:text-5xl opacity-40 transform -translate-x-4">
                        "
                      </span>
                      <span className="text-primaryColor text-4xl sm:text-5xl opacity-40 transform translate-x-4">
                        "
                      </span>
                    </div>
                  </div>

                  {/* Profile Image with hover animation */}
                  <div className="mb-6 sm:mb-8 md:mb-10 relative">
                    <div
                      className={`
                        absolute inset-0 rounded-full bg-primaryColor opacity-20
                        transform transition-all duration-1000 ease-out
                        ${
                          currentSlide === index
                            ? "scale-150 opacity-30"
                            : "scale-100 opacity-0"
                        }
                      `}
                      style={{ filter: "blur(15px)" }}
                    />

                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className={`
                        rounded-full bg-primaryBackground p-0.5 border-4 sm:border-[5px] 
                        border-primaryColor border-solid w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 
                        object-cover mx-auto transition-all duration-500 ease-out
                        ${
                          currentSlide === index
                            ? "scale-110 rotate-0 opacity-100"
                            : "scale-90 rotate-5 opacity-70"
                        }
                        hover:scale-105 hover:rotate-3
                      `}
                    />

                    {/* Animated border pulse */}
                    <div
                      className={`
                        absolute inset-0 rounded-full border-2 border-primaryColor
                        transition-all duration-1000 ease-out
                        ${
                          currentSlide === index
                            ? "scale-125 opacity-50"
                            : "scale-100 opacity-0"
                        }
                      `}
                    />
                  </div>

                  {/* Name and Job with slide animation */}
                  <div
                    className={`
                      space-y-1 sm:space-y-2 transform transition-all duration-700 ease-out
                      ${
                        currentSlide === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }
                    `}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                      {testimonial.name}
                    </h2>
                    <h3 className="text-primaryColor text-base sm:text-lg md:text-xl relative">
                      {testimonial.job}
                      {/* Animated underline */}
                      <span
                        className={`
                          absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primaryColor
                          transition-all duration-500 ease-out
                          ${
                            currentSlide === index
                              ? "w-full opacity-100"
                              : "w-0 opacity-0"
                          }
                        `}
                        style={{ transitionDelay: "600ms" }}
                      />
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-slider .slick-dots {
          bottom: -50px;
        }

        .testimonial-slider .slick-dots li {
          margin: 0 6px;
        }

        .testimonial-slider .slick-dots li button:before {
          color: #e0a80d;
          font-size: 12px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #e0a80d;
          opacity: 1;
          transform: scale(1.3);
        }

        .testimonial-slider .slick-track {
          display: flex !important;
          align-items: center;
        }

        .testimonial-slider .slick-slide {
          opacity: 0.7;
          transform: scale(0.95);
          transition: all 0.5s ease;
        }

        .testimonial-slider .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
