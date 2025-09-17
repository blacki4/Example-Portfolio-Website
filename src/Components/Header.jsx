import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-scroll";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Home",
          "About",
          "Services",
          "Portfolio",
          "Testimonials",
          "Blog",
          "Contact",
        ].map((text) => (
          <Link
            key={text}
            to={text}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-primaryColor"
            className="w-full cursor-pointer"
          >
            <ListItemButton className="justify-center hover:bg-primaryColor">
              <ListItemText
                primary={text.charAt(0).toUpperCase() + text.slice(1)}
                className="text-center"
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="w-full h-20 bg-headingColor fixed z-10">
      <div className="w-4/6 mx-auto flex justify-between items-center h-full">
        <div className="text-4xl font-bold text-primaryColor">LOGO</div>
        <ul className="flex gap-8 text-xl text-greyDark max-xl:hidden">
          <li>
            <Link
              to={"Home"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-500}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"About"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"Services"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"Portfolio"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={"Testimonials"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={"Blog"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={"Contact"}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primaryColor"
              className="cursor-pointer hover:text-primaryColor duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="xl:hidden text-greyDark hover:text-primaryColor duration-300"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </button>
        <Drawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#2d2e2e",
              color: "#fff",
            },
          }}
        >
          {list()}
        </Drawer>
      </div>
    </div>
  );
}
