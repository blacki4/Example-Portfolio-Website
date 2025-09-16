export default function About() {
  return (
    <div className="bg-secondaryBackground flex justify-center h-[800px]">
      <div className="flex justify-center items-center w-2/3 gap-5">
        <div>
          <img src="/images/man.png" alt="Non" className="w-[100rem]" />
        </div>
        <div className="flex flex-col justify-center items-center mb-20">
          <h1 className="text-primaryColor text-3xl font-bold my-10">
            About Us
          </h1>
          <p className="text-greyDark text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ullam tempore nobis dolor cumque est quia provident vitae veniam
            facere rerum, accusamus at voluptatum, optio, sed minus fuga
            voluptatibus. Nostrum Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque consequuntur error libero natus ad suscipit
            repudiandae minima dolorem esse ducimus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Itaque consequuntur error libero natus
            ad suscipit repudiandae minima dolorem esse ducimus?
          </p>
          <p className="text-greyDark mt-10 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequuntur error libero natus ad suscipit repudiandae minima
            dolorem esse ducimus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque consequuntur error libero natus ad suscipit
            repudiandae minima dolorem esse ducimus?
          </p>
        </div>
      </div>
    </div>
  );
}
