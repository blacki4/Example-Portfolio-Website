import { useState, useEffect, useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionRef]);

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://facebook.com",
      label: "Facebook",
      id: "facebook",
      color: "#1877F2",
      delay: 0,
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com",
      label: "Instagram",
      id: "instagram",
      color: "#E4405F",
      delay: 100,
    },
    {
      icon: XIcon,
      href: "https://twitter.com",
      label: "X (Twitter)",
      id: "twitter",
      color: "#000000",
      delay: 200,
    },
    {
      icon: GitHubIcon,
      href: "https://github.com",
      label: "GitHub",
      id: "github",
      color: "#6CC644",
      delay: 300,
    },
  ];

  const currentYear = new Date().getFullYear();

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Blog",
    "Contact",
  ];

  return (
    <footer
      ref={sectionRef}
      className="bg-primaryBackground flex flex-col justify-center items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] gap-4 sm:gap-5 md:gap-6 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primaryColor rounded-full opacity-0
              ${isVisible ? "animate-float opacity-30" : ""}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primaryColor/5 via-transparent to-transparent"></div>
      </div>

      {/* Brand/Name with animation */}
      <div
        className={`
        text-center mb-2 sm:mb-4 transform transition-all duration-1000 ease-out relative z-10
        ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }
      `}
      >
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold relative">
          <span className="relative inline-block">
            MALEK HASSOUNEH
            {/* Animated underline */}
            <span
              className={`
              absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor 
              transition-all duration-1000 ease-out
              ${isVisible ? "w-full opacity-100" : "opacity-0"}
            `}
              style={{ transitionDelay: "300ms" }}
            ></span>
          </span>
        </h3>
        <p
          className={`
          text-greyDark text-sm sm:text-base mt-1 sm:mt-2 transform transition-all duration-700 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        `}
          style={{ transitionDelay: "500ms" }}
        >
          Web Developer & UI/UX Designer
        </p>
      </div>

      {/* Social Media Icons with creative animations */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 relative z-10">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <div
              key={social.id}
              className={`
                group relative transform transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-6 opacity-0 scale-90"
                }
              `}
              style={{ transitionDelay: `${600 + social.delay}ms` }}
              onMouseEnter={() => setHoveredSocial(social.id)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {/* Animated ring */}
              <div
                className={`
                absolute inset-0 rounded-full border-2 border-primaryColor opacity-0
                transition-all duration-500 ease-out
                ${
                  hoveredSocial === social.id
                    ? "scale-125 opacity-100"
                    : "scale-100 opacity-0"
                }
              `}
              ></div>

              {/* Glow effect */}
              <div
                className={`
                  absolute inset-0 rounded-full opacity-0 blur-md
                  transition-all duration-500 ease-out
                  ${hoveredSocial === social.id ? "scale-150 opacity-40" : ""}
                `}
                style={{ backgroundColor: social.color }}
              ></div>

              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-secondaryBackground transition-all duration-300 relative z-10 overflow-hidden"
              >
                {/* Hover background fill */}
                <div
                  className={`
                    absolute inset-0 rounded-full transition-all duration-300 ease-out
                    ${
                      hoveredSocial === social.id
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }
                  `}
                  style={{ backgroundColor: social.color }}
                ></div>

                <IconComponent
                  sx={{
                    color: hoveredSocial === social.id ? "white" : "#e0a80d",
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "28px",
                      lg: "30px",
                    },
                    transition: "all 0.3s ease",
                  }}
                  className={`
                    relative z-10 transition-all duration-300
                    ${
                      hoveredSocial === social.id
                        ? "scale-110 rotate-12"
                        : "scale-100 rotate-0"
                    }
                  `}
                />
              </a>

              {/* Tooltip */}
              <div
                className={`
                absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded 
                opacity-0 transition-all duration-300 ease-out
                ${
                  hoveredSocial === social.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
              `}
              >
                {social.label}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-black rotate-45"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Links with stagger animation */}
      <nav
        className={`
        flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-center relative z-10
        transform transition-all duration-700 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
      `}
        style={{ transitionDelay: "1000ms" }}
      >
        {navItems.map((item, index) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className={`
              text-greyDark text-sm sm:text-base transition-all duration-300 relative
              hover:text-primaryColor transform hover:scale-110
              group
            `}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item}
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Divider with animation */}
      <div
        className={`
        w-full max-w-md border-t border-greyDark transition-all duration-1000 ease-out relative z-10
        ${isVisible ? "opacity-30 scale-x-100" : "opacity-0 scale-x-0"}
      `}
        style={{ transitionDelay: "1200ms" }}
      ></div>

      {/* Copyright with animation */}
      <div
        className={`
        text-center transform transition-all duration-700 ease-out relative z-10
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
      `}
        style={{ transitionDelay: "1300ms" }}
      >
        <p className="text-greyDark text-xs sm:text-sm md:text-base">
          © {currentYear} Malek Hassouneh. All Rights Reserved.
        </p>
        <p className="text-greyDark text-xs mt-1 opacity-70">
          Crafted with passion and attention to detail
        </p>
      </div>

      {/* Back to Top Button with creative animation */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`
          mt-2 sm:mt-4 bg-primaryColor text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full 
          text-xs sm:text-sm font-medium transition-all duration-300 relative z-10 overflow-hidden group
          transform
          ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-4 opacity-0 scale-90"
          }
        `}
        style={{ transitionDelay: "1400ms" }}
        aria-label="Back to top"
      >
        {/* Button shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>

        <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Back to Top
          <span className="transform group-hover:-translate-y-1 transition-transform duration-300">
            ↑
          </span>
        </span>
      </button>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-3px) rotate(1deg);
          }
          66% {
            transform: translateY(2px) rotate(-1deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}
