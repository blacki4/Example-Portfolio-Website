import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
          <a href={`#${text.toLowerCase()}`} className="w-full">
            <ListItemButton className="justify-center hover:bg-primaryColor hover:text-primaryColor">
              <ListItemText primary={text} className="text-center" />
            </ListItemButton>
          </a>
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
            <a href="#" className="hover:text-primaryColor duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primaryColor duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primaryColor duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primaryColor duration-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primaryColor duration-300">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primaryColor duration-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primaryColor duration-300">
              Contact
            </a>
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
