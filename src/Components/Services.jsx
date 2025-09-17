import SettingsIcon from "@mui/icons-material/Settings";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import CodeIcon from "@mui/icons-material/Code";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Services() {
  return (
    <div className="bg-secondaryBackground flex flex-col justify-center items-center h-[800px]">
      <h1
        className="text-primaryColor text-3xl font-bold mb-20 -mt-10"
        id="Services"
      >
        Services
      </h1>
      <div>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 w-2/3 mx-auto">
          <div className="bg-primaryBackground px-5 py-9">
            <SettingsIcon sx={{ color: "#e0a80d", fontSize: "25px" }} />
            <h2 className="text-white text-xl mt-5">Creative Design</h2>
            <p className="text-greyDark mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              atque voluptatibus dolorum, assumenda suscipit fugiat.
            </p>
          </div>
          <div className="bg-primaryBackground px-5 py-9">
            <CropRotateIcon sx={{ color: "#e0a80d", fontSize: "25px" }} />
            <h2 className="text-white text-xl mt-5">Clean Code</h2>
            <p className="text-greyDark mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              eligendi sapiente quas autem suscipit. Tempore.
            </p>
          </div>
          <div className="bg-primaryBackground px-5 py-9">
            <FormatSizeIcon sx={{ color: "#e0a80d", fontSize: "25px" }} />
            <h2 className="text-white text-xl mt-5">Responsive Design</h2>
            <p className="text-greyDark mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, aliquid odit quis perspiciatis est ea?
            </p>
          </div>
          <div className="bg-primaryBackground px-5 py-9">
            <DonutSmallRoundedIcon
              sx={{ color: "#e0a80d", fontSize: "25px" }}
            />
            <h2 className="text-white text-xl mt-5">Material UI</h2>
            <p className="text-greyDark mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              maiores dignissimos, molestias voluptas delectus exercitationem.
            </p>
          </div>
          <div className="bg-primaryBackground px-5 py-9">
            <CodeIcon sx={{ color: "#e0a80d", fontSize: "25px" }} />
            <h2 className="text-white text-xl mt-5">Material UI Icons</h2>
            <p className="text-greyDark mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              laudantium veritatis nulla, fugiat harum vitae!
            </p>
          </div>
          <div className="bg-primaryBackground px-5 py-9">
            <BarChartIcon sx={{ color: "#e0a80d", fontSize: "25px" }} />
            <h2 className="text-white text-xl mt-5">Awesome Spport</h2>
            <p className="text-greyDark mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ex
              saepe, autem fugit error amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
