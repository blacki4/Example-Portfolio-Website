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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
      style={{ backgroundImage: "url('/images/testimonials-bg.png')" }}
      className="w-full bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center items-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1
          className="text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center"
          id="Testimonials"
        >
          Testimonials
        </h1>

        <div className="w-full max-w-4xl">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2 sm:px-4">
                <div className="flex justify-center items-center flex-col text-center">
                  {/* Testimonial Text */}
                  <div className="mb-8 sm:mb-10 md:mb-12 max-w-3xl">
                    <p className="text-greyDark text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-6 md:px-8 italic">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* Profile Image */}
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="rounded-full bg-primaryBackground p-0.5 border-4 sm:border-[5px] border-primaryColor border-solid w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover mx-auto hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Name and Job */}
                  <div className="space-y-1 sm:space-y-2">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                      {testimonial.name}
                    </h2>
                    <h3 className="text-primaryColor text-base sm:text-lg md:text-xl">
                      {testimonial.job}
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

        .testimonial-slider .slick-dots li button:before {
          color: #e0a80d;
          font-size: 12px;
        }
        }
      `}</style>
    </div>
  );
}
