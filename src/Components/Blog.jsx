export default function Blog() {
  return (
    <div className="h-[900px] bg-secondaryBackground flex justify-center items-center flex-col">
      <h1
        className="text-primaryColor text-3xl font-bold mb-20 -mt-[20px]"
        id="Blog"
      >
        Blog
      </h1>
      <div className="flex justify-center items-center flex-wrap w-2/3 space-x-10">
        <div className="bg-primaryBackground w-[350px] rounded-lg">
          <img src="/images/blog/b1.png" alt="" />
          <h2 className="px-3 text-white text-xl mt-5 mb-2">
            Master These Awesome
          </h2>
          <h3 className="px-3 text-primaryColor text-lg mb-4">
            By Dorin Gray jun 27, 2025
          </h3>
          <p className="p-3 text-lg text-greyDark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis labore, voluptatem commodi inventore omnis aperiam
            dolorem placeat
          </p>
        </div>
        <div className="bg-primaryBackground w-[350px] rounded-lg">
          <img src="/images/blog/b2.png" alt="" />
          <h2 className="px-3 text-white text-xl mt-5 mb-2">
            Best Design Items To Appeal
          </h2>
          <h3 className="px-3 text-primaryColor text-lg mb-4">
            By Dorin Gray jun 27, 2025
          </h3>
          <p className="p-3 text-lg text-greyDark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis labore, voluptatem commodi inventore omnis aperiam
            dolorem placeat
          </p>
        </div>
        <div className="bg-primaryBackground w-[350px] rounded-lg">
          <img src="/images/blog/b3.png" alt="" />
          <h2 className="px-3 text-white text-xl mt-5 mb-2">
            The 20 Best Lightroom Presets
          </h2>
          <h3 className="px-3 text-primaryColor text-lg mb-4">
            By Dorin Gray jun 27, 2025
          </h3>
          <p className="p-3 text-lg text-greyDark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis labore, voluptatem commodi inventore omnis aperiam
            dolorem placeat
          </p>
        </div>
      </div>
    </div>
  );
}
