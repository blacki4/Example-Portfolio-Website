import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="bg-primaryBackground flex-col flex justify-center items-center h-[300px] gap-5">
      <ul className="flex gap-2">
        <li>
          <a href="#">
            <FacebookIcon sx={{ color: "#e0a80d", fontSize: "30px" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <InstagramIcon sx={{ color: "#e0a80d", fontSize: "30px" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <XIcon sx={{ color: "#e0a80d", fontSize: "30px" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <GitHubIcon sx={{ color: "#e0a80d", fontSize: "30px" }} />
          </a>
        </li>
      </ul>
      <p className="text-greyDark text-[15px]">All Right Resceved 2018</p>
    </div>
  );
}
