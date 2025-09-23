export default function About() {
  return (
    <div className="bg-secondaryBackground flex justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 gap-6 md:gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/man.png"
            alt="About Me"
            className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] max-w-full h-auto object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1
            className="text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10"
            id="About"
          >
            About Me
          </h1>

          <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-2xl">
            <p className="text-greyDark text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam tempore nobis dolor cumque est quia provident vitae veniam
              facere rerum, accusamus at voluptatum, optio, sed minus fuga
              voluptatibus. Nostrum Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque consequuntur error libero natus ad
              suscipit repudiandae minima dolorem esse ducimus? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Itaque consequuntur
              error libero natus ad suscipit repudiandae minima dolorem esse
              ducimus?
            </p>

            <p className="text-greyDark text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur error libero natus ad suscipit repudiandae minima
              dolorem esse ducimus Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque consequuntur error libero natus ad
              suscipit repudiandae minima dolorem esse ducimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
