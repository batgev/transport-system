
import Header from "../components/LandingPageComponents/Header";
import Footer from "../components/LandingPageComponents/Footer"
import MessageComponent from "../components/LandingPageComponents/MessageComponent"
import PickAService from "../components/LandingPageComponents/PickAService"
import useAuthStore from "../Store/authStore"
import AboutUs from "../components/AboutUsComponents/AboutUs"
import WhyChooseUs from "../components/LandingPageComponents/WhyChooseUs"
const LandingPage = () => {
  const {activeDashboard} = useAuthStore()
  const stats = [
    { id: 1, text: "3500+", subText: "Global Locations" },
    { id: 2, text: "5+ Years", subText: "Industry Experience" },
    { id: 3, text: "24/7", subText: "Customer Support" },
  ];
  return (
    <div className="flex flex-col gap-8 h-full pt-18 ">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className={`${activeDashboard === "HOME" ? "flex flex-col gap-8":"hidden"}`}>
        <div className=" flex w-full  md:h-full bg-[url('/pic.jpeg')] bg-cover ">
          <div className="flex-1 flex flex-col justify-center items-center h-[90vh]  bg-[#0c1120]/80 w-full">
            <div className="text-white md:w-[80%] flex flex-col justify-center md:items-start   h-full ">
              <h3 className="md:text-[40px] text-3xl text-center font-bold font-sans">
                YOUR LINK TO LUXURY. <br /> ON TIME. EVERYTIME.
              </h3>
              <span className="md:text-[20px] mt-4 font-semibold text-center md:text-left leading-loose md:w-[70%]">
                Exclusive Global Chauffeur & Ground Transportation Services
                across Africa, Europe, the GCC, America, and Asia. Airport
                Transfers, City Transfers, Full Day Chauffeur & VIP Meet and
                Greet.
              </span>
              <div className="flex justify-center">
                <button className="bg-[#C9A84C] mt-8  text-white  font-bold py-3 px-16 animate-pulse md:px-6 rounded-md  hover:bg-cyan-600">
                  Request for Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 100,
              padding: "5px 16px",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#C9A84C",
              marginBottom: "1.5rem",
            }}
          >
            ● 13,000+ LOCATIONS WORLDWIDE
          </div>
          <div className="flex flex-wrap gap-8 md:gap-16 justify-center">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-4xl"
              >
                <span className="text-[#C9A84C] font-bold italic">
                  {item.text}
                </span>
                <small>{item.subText}</small>
              </div>
            ))}
          </div>
        </div>
        <hr className="md:hidden" />
        {/* <div className="w-full flex justify-center">
        <PickAService />
      </div>
      */}

        <MessageComponent />
        <WhyChooseUs />
        <Footer />
      </div>
      <div className={`${activeDashboard === "ABOUT US" ? 'flex':'hidden'}`}>
        <AboutUs/>
      </div>
    </div>
  );
};

export default LandingPage;
