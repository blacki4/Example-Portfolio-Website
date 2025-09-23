import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

export default function Portfolio() {
  const [projectType, setProjectType] = useState("All");

  const projects = [
    {
      title: "Marketing Project",
      img: "/images/port/port1.jpg",
      type: "Marketing",
      id: 1,
    },
    {
      title: "Marketing Project",
      img: "/images/port/port2.jpg",
      type: "Marketing",
      id: 2,
    },
    {
      title: "Design Project",
      img: "/images/port/port3.jpg",
      type: "Design",
      id: 3,
    },
    {
      title: "Design Project",
      img: "/images/port/port4.jpg",
      type: "Design",
      id: 4,
    },
    {
      title: "Development Project",
      img: "/images/port/port5.jpg",
      type: "Development",
      id: 5,
    },
    {
      title: "Development Project",
      img: "/images/port/port6.jpg",
      type: "Development",
      id: 6,
    },
  ];

  const filteredProjects =
    projectType === "All"
      ? projects
      : projects.filter((p) => p.type === projectType);

  const categories = ["All", "Marketing", "Design", "Development"];

  return (
    <div className="bg-secondaryBackground flex flex-col justify-center items-center min-h-screen py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1
        className="text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center"
        id="Portfolio"
      >
        Portfolio
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16">
        {categories.map((category) => (
          <button
            key={category}
            className={`
              px-4 sm:px-6 md:px-8 lg:px-10 
              py-2 sm:py-3 md:py-4 lg:py-5 
              rounded-full border border-solid border-primaryColor 
              text-sm sm:text-base md:text-lg 
              transition-all duration-300 
              hover:scale-105 hover:bg-primaryColor hover:text-black
              ${
                projectType === category
                  ? "bg-primaryColor text-black"
                  : "bg-secondaryBackground text-white"
              }
            `}
            onClick={() => setProjectType(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 place-items-center">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{ backgroundImage: `url(${project.img})` }}
              className="
                w-full max-w-[350px] aspect-[7/8] 
                bg-cover bg-center rounded-lg 
                group duration-300 hover:scale-105 
                shadow-lg hover:shadow-2xl
              "
            >
              <div
                className="
                rounded-lg bg-primaryColor w-full h-full 
                opacity-0 group-hover:opacity-95 
                group-hover:cursor-pointer duration-300 
                flex justify-center items-center flex-col gap-3 sm:gap-4
              "
              >
                <h3 className="text-white text-lg sm:text-xl md:text-xl font-semibold text-center px-4">
                  {project.title}
                </h3>
                <p className="text-white text-base sm:text-lg opacity-90 text-center">
                  {project.type}
                </p>
                <RemoveRedEyeOutlinedIcon
                  sx={{
                    color: "white",
                    fontSize: { xs: "20px", sm: "25px", md: "30px" },
                    mt: 1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-greyDark text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
