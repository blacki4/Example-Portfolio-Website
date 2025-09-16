import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-bg.png')" }}
    >
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className="text-white text-2xl">Hello, We Are</h1>
        <h1 className="text-6xl text-primaryColor mt-3 font-bold">
          <Typewriter
            options={{
              strings: [
                "AI Company",
                "Marketing Company",
                "Development Company",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p className="text-greyDark mt-6 w-4/12 text-center text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          delectus quae laudantium molestiae cupiditate officia, provident ullam
          laborum aperiam magni dolorem quo rerum? Nobis in, sed accusantium
          repellat rem eum?
        </p>
      </div>
    </div>
  );
}
