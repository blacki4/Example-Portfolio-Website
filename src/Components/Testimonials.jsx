import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    img: "/images/testimonials/team-1.jpeg",
    name: "Alamin Musa",
    job: "Front-End Developer",
    id: 1,
  },
  {
    img: "/images/testimonials/team-2.jpeg",
    name: "Alex Ander",
    job: "Back-End Developer",
    id: 2,
  },
  {
    img: "/images/testimonials/team-3.jpeg",
    name: "Kylian Mbappe",
    job: "React Developer",
    id: 3,
  },
];

export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      style={{ backgroundImage: "url('/images/testimonials-bg.png')" }}
      className="w-full bg-cover bg-center py-16 flex justify-center items-center h-[900px]"
    >
      <div className="w-full max-w-4xl flex flex-col items-center -mt-[120px]">
        <h1
          className="text-primaryColor text-3xl font-bold my-20"
          id="Testimonials"
        >
          Testimonials
        </h1>
        <Slider {...settings} className="w-[1200px]">
          {testimonials.map((t) => (
            <div key={t.id}>
              <div className="flex justify-center items-center flex-col">
                <p className="text-greyDark text-lg text-center mb-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil incidunt dolore, impedit obcaecati alias ullam nam illo.
                  Voluptatibus, ipsa assumenda!
                </p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-full bg-primaryBackground p-0.5 border-[5px] border-primaryColor border-solid w-44 mb-10"
                />
                <h2 className="text-white text-xl mb-0.5">{t.name}</h2>
                <h3 className="text-primaryColor text-lg">{t.job}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
