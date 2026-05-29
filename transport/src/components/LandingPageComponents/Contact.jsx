import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard,
  faLocationDot,
  faPhone,
  faEnvelope,
  faBuilding
 } from "@fortawesome/free-solid-svg-icons";
 import Footer from "../../components/LandingPageComponents/Footer";

const Contact = () => {
  return (
    <div className="pt-8 w-screen flex flex-col justify-center items-center gap-4 md:gap-8 h-full md:h-screen">
      <h3 className="text-2xl">Contact JOJMO BLANKLINK</h3>
      <div className="flex flex-col md:flex-row  md:items-center md:justify-center gap-8 md:gap-20  md:w-[70%] ">
        <div className="flex flex-col  items-center  gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="full-name"
              className="text-[#d49e08] font-bold text-xl"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="enter your name here..."
              className="border outline-[#0c1120] w-[95vw] md:w-100 py-2 rounded-md px-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#d49e08] font-bold text-xl">
              Email Address
            </label>
            <input
              type="emaiil"
              placeholder="example@gmail.com"
              className="border outline-[#0c1120]  w-[95vw] md:w-100 py-2 rounded-md px-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[#d49e08] font-bold text-xl"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="enter your message here..."
              className="border outline-[#0c1120]  w-[95vw] md:w-100 py-2 rounded-md px-4"
            />
          </div>
          <div>
            <button className="bg-[#0c1120] text-white px-4 w-[90vw] md:w-auto py-3 rounded-md shadow shadow-black">
              Send Message
            </button>
          </div>
        </div>
        <div className="flex justify-center "> 
          <h1>OR</h1>
        </div>
        <div>
          <div className="flex flex-col gap-2 leading-loose text-xl w-[95vw] md:w-auto">
            <span className="flex gap-4 items-center">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="text-[#C9A84C] text-2xl"
              />
              Address: Richards Foundation, East Avenue, 62 New
            </span>
            <span className="flex gap-4 items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#C9A84C] text-2xl"
              />
              Weija-Accra, Ghana For Reservations:{" "}
            </span>
            <span className="flex gap-4 items-center">
              <FontAwesomeIcon icon={faPhone} />
              +233 XXX XXX XXX
            </span>
            <span className="flex gap-4 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              Email: example@gmail.com{" "}
            </span>
            <span className="flex gap-4 items-center">
              <FontAwesomeIcon icon={faBuilding} />
              Office (Time: 9AM - 5PM){" "}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
