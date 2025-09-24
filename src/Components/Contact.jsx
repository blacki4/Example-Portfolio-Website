import { useState, useEffect, useRef } from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: RoomOutlinedIcon,
      title: "Address",
      details: ["1234 Main Street, Suite 123", "Example, WA, 98101"],
      delay: 0,
    },
    {
      icon: PhoneAndroidOutlinedIcon,
      title: "Phone",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
      delay: 200,
    },
    {
      icon: EmailOutlinedIcon,
      title: "Email",
      details: ["hello@malek.com", "info@malek.io"],
      delay: 400,
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Message sent successfully! (Demo)");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-secondaryBackground min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 border border-primaryColor border-opacity-5 rounded-full
              transform transition-all duration-3000 ease-out
              ${
                isVisible
                  ? "scale-150 rotate-180 opacity-100"
                  : "scale-50 rotate-0 opacity-0"
              }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + (i % 3) * 40}%`,
              transitionDelay: `${i * 400}ms`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl flex flex-col items-center relative z-10">
        {/* Title with animation */}
        <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1
            className={`
              text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold text-center
              transform transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }
            `}
            id="Contact"
          >
            Keep In Touch
          </h1>

          {/* Animated underline */}
          <div
            className={`
              absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primaryColor
              transition-all duration-800 ease-out
              ${isVisible ? "w-32 opacity-100" : "w-0 opacity-0"}
            `}
            style={{
              transitionDelay: "300ms",
              background:
                "linear-gradient(90deg, transparent, #e0a80d, transparent)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
          {/* Contact Form with animations */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div
                    className={`
                    transform transition-all duration-700 ease-out
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }
                  `}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-gray-600 bg-primaryBackground text-white placeholder-gray-400 focus:border-primaryColor focus:outline-none text-sm sm:text-base transition-all duration-300 hover:border-gray-500 focus:scale-105"
                      required
                    />
                  </div>
                  <div
                    className={`
                    transform transition-all duration-700 ease-out
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }
                  `}
                    style={{ transitionDelay: "500ms" }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-gray-600 bg-primaryBackground text-white placeholder-gray-400 focus:border-primaryColor focus:outline-none text-sm sm:text-base transition-all duration-300 hover:border-gray-500 focus:scale-105"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div
                  className={`
                  transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
                  style={{ transitionDelay: "600ms" }}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-gray-600 bg-primaryBackground text-white placeholder-gray-400 focus:border-primaryColor focus:outline-none text-sm sm:text-base transition-all duration-300 hover:border-gray-500 focus:scale-105"
                    required
                  />
                </div>

                {/* Message */}
                <div
                  className={`
                  transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
                  style={{ transitionDelay: "700ms" }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-gray-600 bg-primaryBackground text-white placeholder-gray-400 focus:border-primaryColor focus:outline-none text-sm sm:text-base resize-none transition-all duration-300 hover:border-gray-500 focus:scale-105"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div
                  className={`
                  transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
                  style={{ transitionDelay: "800ms" }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primaryColor rounded-lg text-black text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4 md:py-5 transition-all duration-300 relative overflow-hidden group
                      ${
                        isSubmitting
                          ? "opacity-80 cursor-not-allowed"
                          : "hover:bg-opacity-90 hover:scale-105 hover:shadow-lg"
                      }
                    `}
                  >
                    {/* Button shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information with animations */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`
                      flex flex-col space-y-2 sm:space-y-3 transform transition-all duration-700 ease-out
                      ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }
                    `}
                    style={{ transitionDelay: `${600 + info.delay}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-2 group cursor-pointer">
                      <div className="bg-primaryColor bg-opacity-20 p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110 relative">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-primaryColor rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <IconComponent
                          sx={{
                            color: "#e0a80d",
                            fontSize: { xs: "20px", sm: "24px", md: "27px" },
                          }}
                          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-white text-lg sm:text-xl font-semibold transition-colors duration-300 group-hover:text-primaryColor">
                        {info.title}
                      </h3>
                    </div>
                    <div className="ml-2 sm:ml-3 space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-greyDark text-sm sm:text-base hover:text-primaryColor transition-all duration-300 cursor-pointer transform hover:translate-x-2 flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-primaryColor rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links or Additional Info */}
            <div
              className={`
              mt-8 p-6 bg-primaryBackground rounded-lg border border-gray-700 transform transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
              style={{ transitionDelay: "1000ms" }}
            >
              <p className="text-greyDark text-sm sm:text-base text-center">
                I typically respond within 24 hours. Let's create something
                amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
