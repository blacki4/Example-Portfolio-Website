import SettingsIcon from "@mui/icons-material/Settings";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import CodeIcon from "@mui/icons-material/Code";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Services() {
  return (
    <div className="bg-secondaryBackground flex flex-col justify-center items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <h1
        className="text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center"
        id="Services"
      >
        Services
      </h1>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
          {/* Service Card 1 */}
          <div className="bg-primaryBackground p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
            <SettingsIcon
              sx={{
                color: "#e0a80d",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            />
            <h2 className="text-white text-lg sm:text-xl md:text-xl mt-3 sm:mt-4 md:mt-5 font-semibold">
              Creative Design
            </h2>
            <p className="text-greyDark mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              atque voluptatibus dolorum, assumenda suscipit fugiat.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-primaryBackground p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
            <CropRotateIcon
              sx={{
                color: "#e0a80d",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            />
            <h2 className="text-white text-lg sm:text-xl md:text-xl mt-3 sm:mt-4 md:mt-5 font-semibold">
              Clean Code
            </h2>
            <p className="text-greyDark mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              eligendi sapiente quas autem suscipit. Tempore.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-primaryBackground p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
            <FormatSizeIcon
              sx={{
                color: "#e0a80d",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            />
            <h2 className="text-white text-lg sm:text-xl md:text-xl mt-3 sm:mt-4 md:mt-5 font-semibold">
              Responsive Design
            </h2>
            <p className="text-greyDark mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, aliquid odit quis perspiciatis est ea?
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-primaryBackground p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
            <DonutSmallRoundedIcon
              sx={{
                color: "#e0a80d",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            />
            <h2 className="text-white text-lg sm:text-xl md:text-xl mt-3 sm:mt-4 md:mt-5 font-semibold">
              Material UI
            </h2>
            <p className="text-greyDark mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              maiores dignissimos, molestias voluptas delectus exercitationem.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-primaryBackground p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
            <CodeIcon
              sx={{
                color: "#e0a80d",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            />
            <h2 className="text-white text-lg sm:text-xl md:text-xl mt-3 sm:mt-4 md:mt-5 font-semibold">
              Material UI Icons
            </h2>
            <p className="text-greyDark mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              laudantium veritatis nulla, fugiat harum vitae!
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-primaryBackground p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
            <BarChartIcon
              sx={{
                color: "#e0a80d",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
              }}
            />
            <h2 className="text-white text-lg sm:text-xl md:text-xl mt-3 sm:mt-4 md:mt-5 font-semibold">
              Awesome Support
            </h2>
            <p className="text-greyDark mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ex
              saepe, autem fugit error amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
