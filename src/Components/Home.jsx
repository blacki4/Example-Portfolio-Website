import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/home-bg.png')" }}
    >
      <div className="w-screen h-screen flex justify-center items-center flex-col px-4 sm:px-6 lg:px-8">
        <h1
          className="text-white text-lg sm:text-xl md:text-2xl text-center"
          id="Home"
        >
          Hello, I Am
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primaryColor mt-2 sm:mt-3 font-bold text-center">
          <Typewriter
            options={{
              strings: ["MALEK HASSOUNEH", "WEB DEVELOPER", "UI/UX DESIGNER"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p className="text-greyDark mt-4 sm:mt-6 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 text-center text-sm sm:text-base md:text-lg leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          delectus quae laudantium molestiae cupiditate officia, provident ullam
          laborum aperiam magni dolorem quo rerum? Nobis in, sed accusantium
          repellat rem eum?
        </p>
      </div>
    </div>
  );
}
