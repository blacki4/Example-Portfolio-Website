import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div
      className="w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/some-facts-bg.png')" }}
    >
      <div className="flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-40 w-full max-w-7xl">
          {/* Counter Item 1 */}
          <div className="flex justify-center items-center flex-col gap-2 sm:gap-3 text-center">
            <CloudOutlinedIcon
              sx={{
                color: "white",
                fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
              }}
            />
            <p className="text-primaryColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <CountUp end={89} duration={3} start={0} enableScrollSpy />
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
              HAPPY CLIENTS
            </p>
          </div>

          {/* Counter Item 2 */}
          <div className="flex justify-center items-center flex-col gap-2 sm:gap-3 text-center">
            <FavoriteBorderOutlinedIcon
              sx={{
                color: "white",
                fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
              }}
            />
            <p className="text-primaryColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <CountUp end={231} duration={3} start={0} enableScrollSpy />
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
              PROJECTS COMPLETED
            </p>
          </div>

          {/* Counter Item 3 */}
          <div className="flex justify-center items-center flex-col gap-2 sm:gap-3 text-center">
            <PublicOutlinedIcon
              sx={{
                color: "white",
                fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
              }}
            />
            <p className="text-primaryColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <CountUp end={108} duration={3} start={0} enableScrollSpy />
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
              FILES DOWNLOADED
            </p>
          </div>

          {/* Counter Item 4 */}
          <div className="flex justify-center items-center flex-col gap-2 sm:gap-3 text-center">
            <PersonOutlineOutlinedIcon
              sx={{
                color: "white",
                fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "45px" },
              }}
            />
            <p className="text-primaryColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <CountUp end={1446} duration={3} start={0} enableScrollSpy />
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
              LINES OF CODE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
