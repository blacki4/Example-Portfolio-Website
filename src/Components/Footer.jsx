import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://facebook.com",
      label: "Facebook",
      id: "facebook",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com",
      label: "Instagram",
      id: "instagram",
    },
    {
      icon: XIcon,
      href: "https://twitter.com",
      label: "X (Twitter)",
      id: "twitter",
    },
    {
      icon: GitHubIcon,
      href: "https://github.com",
      label: "GitHub",
      id: "github",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primaryBackground flex flex-col justify-center items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] gap-4 sm:gap-5 md:gap-6 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Brand/Name */}
      <div className="text-center mb-2 sm:mb-4">
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
          MALEK HASSOUNEH
        </h3>
        <p className="text-greyDark text-sm sm:text-base mt-1 sm:mt-2">
          Web Developer
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <div key={social.id} className="group">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-secondaryBackground hover:bg-primaryColor transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <IconComponent
                  sx={{
                    color: "#e0a80d",
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "28px",
                      lg: "30px",
                    },
                    transition: "color 0.3s ease",
                  }}
                  className="group-hover:text-black"
                />
              </a>
            </div>
          );
        })}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-center">
        {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-greyDark text-sm sm:text-base hover:text-primaryColor transition-colors duration-300 hover:underline"
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Divider */}
      <div className="w-full max-w-md border-t border-greyDark border-opacity-30 mt-2 sm:mt-4"></div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-greyDark text-xs sm:text-sm md:text-base">
          © {currentYear} Malek Hassouneh. All Rights Reserved.
        </p>
        <p className="text-greyDark text-xs sm:text-sm mt-1 opacity-75">
          Made with ❤️ in Palestine
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-2 sm:mt-4 bg-primaryColor hover:bg-opacity-90 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Back to top"
      >
        Back to Top ↑
      </button>
    </footer>
  );
}
