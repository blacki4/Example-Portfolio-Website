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

  const filterdProjects =
    projectType === "All"
      ? projects
      : projects.filter((p) => p.type === projectType);

  return (
    <div className="bg-secondaryBackground flex flex-col justify-center items-center h-[1500px]">
      <h1 className="text-primaryColor text-3xl font-bold my-20" id="Portfolio">
        Portfolio
      </h1>
      <div className="flex justify-center items-center gap-20">
        <button
          className="w-fit px-10 py-5 rounded-full border border-solid border-primaryColor bg-secondaryBackground text-white text-lg hover:scale-110 duration-300"
          onClick={() => {
            setProjectType("All");
          }}
        >
          All
        </button>
        <button
          className="w-fit px-10 py-5 rounded-full border border-solid border-primaryColor bg-secondaryBackground text-white text-lg hover:scale-110 duration-300"
          onClick={() => {
            setProjectType("Marketing");
          }}
        >
          Marketing
        </button>
        <button
          className="w-fit px-10 py-5 rounded-full border border-solid border-primaryColor bg-secondaryBackground text-white text-lg hover:scale-110 duration-300"
          onClick={() => {
            setProjectType("Design");
          }}
        >
          Design
        </button>
        <button
          className="w-fit px-10 py-5 rounded-full border border-solid border-primaryColor bg-secondaryBackground text-white text-lg hover:scale-110 duration-300"
          onClick={() => {
            setProjectType("Development");
          }}
        >
          Development
        </button>
      </div>
      <div className="flex flex-wrap w-2/3 gap-10 pt-16 justify-center items-center">
        {filterdProjects.map((p) => {
          return (
            <div
              key={p.id}
              style={{ backgroundImage: `url(${p.img})` }}
              className="w-[350px] h-[400px] bg-cover rounded-lg bg-center group duration-300"
            >
              <div className="rounded-lg bg-primaryColor w-[350px] h-[400px] opacity-0 group-hover:opacity-100 group-hover:cursor-pointer duration-300 flex justify-center items-center flex-col">
                {" "}
                <h3 className="text-white text-xl">{p.title}</h3>
                <p className="text-white text-lg">{p.type}</p>
                <RemoveRedEyeOutlinedIcon
                  sx={{ color: "white", fontSize: "25px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
