import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <>
      <div
        className="w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/some-facts-bg.png')" }}
      >
        <div className="flex justify-center items-center gap-40 py-[100px]">
          <div className="flex justify-center items-center flex-col gap-3">
            <CloudOutlinedIcon sx={{ color: "white", fontSize: "40px" }} />
            <p className="text-primaryColor text-7xl">
              <CountUp
                end={89}
                duration={3}
                start={0}
                enableScrollSpy
              ></CountUp>
            </p>
            <p className="text-white text-xl">HAPPY CLIENTS</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <FavoriteBorderOutlinedIcon
              sx={{ color: "white", fontSize: "40px" }}
            />
            <p className="text-primaryColor text-7xl">
              {" "}
              <CountUp
                end={231}
                duration={3}
                start={0}
                enableScrollSpy
              ></CountUp>
            </p>
            <p className="text-white text-xl">PROJECTS COMPLETED</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <PublicOutlinedIcon sx={{ color: "white", fontSize: "40px" }} />
            <p className="text-primaryColor text-7xl">
              {" "}
              <CountUp
                end={108}
                duration={3}
                start={0}
                enableScrollSpy
              ></CountUp>
            </p>
            <p className="text-white text-xl">FILES DOWNLOADED</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <PersonOutlineOutlinedIcon
              sx={{ color: "white", fontSize: "40px" }}
            />
            <p className="text-primaryColor text-7xl">
              {" "}
              <CountUp
                end={1446}
                duration={3}
                start={0}
                enableScrollSpy
              ></CountUp>
            </p>
            <p className="text-white text-xl">LINES OF CODE</p>
          </div>
        </div>
      </div>
    </>
  );
}
