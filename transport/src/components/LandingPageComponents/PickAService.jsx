

const PickAService = () => {
  const SERVICES = [
    {
      id: "airport",
      icon: "✈",
      title: "Airport Transfer",
      desc: "Seamless pickups & drop-offs at all major airports",
    },
    {
      id: "city",
      icon: "🏙",
      title: "City Transfer",
      desc: "Precise point-to-point transfers across the city",
    },
    {
      id: "chauffeur",
      icon: "👔",
      title: "Chauffeur Drive",
      desc: "Premium full-day or hourly professional driver",
    },
    {
      id: "vip",
      icon: "⭐",
      title: "VIP Meet & Greet",
      desc: "Exclusive meet & greet at 3,500+ locations worldwide",
    },
  ];
  return (
    <div className=" flex flex-col items-center  mt-8 gap-4 md:gap-8 md:w-[70%] p-4 bg-[#0f1117] rounded-lg   text-[rgba(255,255,255,0.4)] border border-[rgba(201,168,76,0.2)]">
      <div className="text-center  ">
        <h2 className="text-xl text-white">Select Your Service</h2>
        <span>Choose the transfer type that suits your journey</span>
      </div>
      <div className="flex flex-wrap md:grid md:grid-cols-2 md:place-content-center  md:p-4 md:px-8 justify-center  gap-8 md:gap-2 ">
        {SERVICES.map((service) => (
          <div
            className="flex flex-col gap-2 md:w-auto border-2 leading-loose border-[rgba(255,255,255,0.1)] rounded-md hover:border-[rgba(201,168,76,0.4)] active:bg-[rgba(255,255,255,0.1)] cursor-pointer  items-center w-[90vw]  p-4 "
            key={service.id}
          >
            <span className="text-white text-4xl">{service.icon}</span>
            <span className="text-white">{service.title}</span>
            <span
              className="text-center"
              style={{
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {service.desc}
            </span>
          </div>
        ))}
      </div>
      <div>
        <button
          className="px-8 cursor-pointer py-3 rounded-md"
          style={{
            background: "linear-gradient(135deg,#C9A84C,#8B6914)",
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default PickAService
