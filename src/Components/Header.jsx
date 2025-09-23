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
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    // Trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Testimonials",
    "Blog",
    "Contact",
  ];

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <div
            key={text}
            className={`
              transform transition-all duration-500 ease-out
              ${
                open
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link
              to={text}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primaryColor"
              className="w-full cursor-pointer"
            >
              <ListItemButton className="justify-center hover:bg-primaryColor transition-colors duration-300">
                <ListItemText
                  primary={text.charAt(0).toUpperCase() + text.slice(1)}
                  className="text-center"
                />
              </ListItemButton>
            </Link>
          </div>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div
      className={`
      w-full h-20 fixed top-0 left-0 transition-all duration-500 ease-out z-50
      ${
        isScrolled
          ? "bg-headingColor/95 backdrop-blur-md shadow-2xl"
          : "bg-headingColor"
      }
      ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
    `}
    >
      <div className="w-4/6 mx-auto flex justify-between items-center h-full">
        {/* Animated Logo */}
        <div
          className={`
          text-4xl font-bold text-primaryColor cursor-pointer
          transform transition-all duration-700 ease-out delay-300
          hover:scale-110 hover:rotate-3
          ${
            isLoaded
              ? "translate-x-0 opacity-100 rotate-0"
              : "-translate-x-8 opacity-0 rotate-12"
          }
        `}
        >
          <span className="relative inline-block">
            LOGO
            {/* Glowing underline */}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="flex gap-8 text-xl text-greyDark max-xl:hidden max-2xl:text-lg">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className={`
                transform transition-all duration-600 ease-out
                hover:scale-110
                ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }
              `}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={item === "Home" ? -500 : -100}
                activeClass="text-primaryColor"
                className="cursor-pointer hover:text-primaryColor duration-300 relative group"
              >
                {item}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`
            xl:hidden text-greyDark hover:text-primaryColor duration-300
            transform transition-all ease-out delay-700
            hover:scale-110 hover:rotate-180
            ${
              isLoaded
                ? "translate-x-0 opacity-100 rotate-0"
                : "translate-x-8 opacity-0 rotate-45"
            }
          `}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </button>

        {/* Mobile Drawer */}
        <Drawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#2d2e2e",
              color: "#fff",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            },
          }}
          className="z-50"
        >
          {list()}
        </Drawer>
      </div>

      {/* Animated border bottom */}
      <div
        className={`
        absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-primaryColor to-transparent
        transform transition-all duration-1000 ease-out delay-1000
        ${isLoaded ? "w-full opacity-100" : "w-0 opacity-0"}
      `}
      ></div>

      {/* Custom styles for enhanced animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        .menu-item-enter {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .logo-bounce {
          animation: bounceIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
