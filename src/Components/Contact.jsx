import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  return (
    <div className="bg-secondaryBackground h-[800px] flex justify-center items-center gap-10 flex-col w-full">
      <h1
        className="text-primaryColor text-3xl font-bold mb-20 -mt-[150px]"
        id="Contact"
      >
        Keep In Touch
      </h1>
      <div className="flex justify-center items-center gap-10">
        <form>
          <div className="grid grid-cols-2 grid-rows-5 gap-5 w-[700px] -mt-10">
            <input
              type="text"
              placeholder="Name"
              className="col-span-1 row-span-1 p-5 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 row-span-1 p-5 rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-2 row-span-1 p-5 rounded-lg"
            />
            <input
              type="search"
              className="col-span-2 row-span-2 p-5 rounded-lg"
            />
            <button
              type="submit"
              className="col-span-2 row-span-1 bg-primaryColor rounded-lg text-white text-lg"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-10 -mt-20">
          <div className="space-y-1">
            <RoomOutlinedIcon
              sx={{ color: "white", marginBottom: "10px", fontSize: "27px" }}
            />
            <p className="text-greyDark text-[15px]">
              1234 Main streat, Suit 123
            </p>
            <p className="text-greyDark text-[15px]">Example, WA, 98101</p>
          </div>
          <div className="space-y-1">
            <PhoneAndroidOutlinedIcon
              sx={{ color: "white", marginBottom: "10px", fontSize: "27px" }}
            />
            <p className="text-greyDark text-[15px]">123456789</p>
            <p className="text-greyDark text-[15px]">987654321</p>
          </div>
          <div className="space-y-1">
            <EmailOutlinedIcon
              sx={{ color: "white", marginBottom: "10px", fontSize: "27px" }}
            />
            <p className="text-greyDark text-[15px]">hello@Malek.com</p>
            <p className="text-greyDark text-[15px]">info@Malek.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}
