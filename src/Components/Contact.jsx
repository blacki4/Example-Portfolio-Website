import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  const contactInfo = [
    {
      icon: RoomOutlinedIcon,
      title: "Address",
      details: ["1234 Main Street, Suite 123", "Example, WA, 98101"],
    },
    {
      icon: PhoneAndroidOutlinedIcon,
      title: "Phone",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
    },
    {
      icon: EmailOutlinedIcon,
      title: "Email",
      details: ["hello@malek.com", "info@malek.io"],
    },
  ];

  return (
    <div className="bg-secondaryBackground min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Title */}
        <h1
          className="text-primaryColor text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center"
          id="Contact"
        >
          Keep In Touch
        </h1>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="w-full">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-transparent focus:border-primaryColor focus:outline-none text-sm sm:text-base transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-transparent focus:border-primaryColor focus:outline-none text-sm sm:text-base transition-colors duration-300"
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-transparent focus:border-primaryColor focus:outline-none text-sm sm:text-base transition-colors duration-300"
                />

                {/* Message */}
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-3 sm:p-4 md:p-5 rounded-lg border-2 border-transparent focus:border-primaryColor focus:outline-none text-sm sm:text-base resize-none transition-colors duration-300"
                />

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={() => alert("Message sent! (Demo only)")}
                  className="w-full bg-primaryColor hover:bg-opacity-90 rounded-lg text-black text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4 md:py-5 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col space-y-2 sm:space-y-3"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primaryColor bg-opacity-20 p-2 sm:p-3 rounded-full">
                        <IconComponent
                          sx={{
                            color: "#e0a80d",
                            fontSize: { xs: "20px", sm: "24px", md: "27px" },
                          }}
                        />
                      </div>
                      <h3 className="text-white text-lg sm:text-xl font-semibold">
                        {info.title}
                      </h3>
                    </div>
                    <div className="ml-2 sm:ml-3 space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-greyDark text-sm sm:text-base hover:text-primaryColor transition-colors duration-300 cursor-pointer"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
