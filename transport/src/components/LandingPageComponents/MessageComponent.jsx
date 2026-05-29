const MessageComponent = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full  mt-8 md:bg-[#0c1120] md:text-white md:py-8">
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <div className="flex flex-col items-center md:gap-2">
          <h3 className="text-3xl text-center md:text-4xl">
            Ready To Elevate Your Journey?
          </h3>
          <span className="md:text-xl">
            From Executive Sedans to First-Class Luxury
          </span>
        </div>
        <div className="flex  flex-col md:flex-row gap-4 text-white ">
          <div className="shadow shadow-black rounded-md bg-[#0f1117]  w-[98vw] md:w-150 py-6 px-2 leading-loose">
            Whether you need a
            <span className="text-[#C9A84C]"> reliable standard vehicle</span>,
            <span className="text-[#C9A84C]">
              a spacious people carrier for the whole family
            </span>
            ,
            <span className="text-[#C9A84C]">
              a luxury SUV, or a premium Luxury sedan
            </span>
            , Jojmo BlankLink has you covered.
          </div>
          <div className="shadow shadow-black rounded-md w-[98vw] bg-[#0f1117] md:bg-none md:w-150 py-6 leading-loose px-2">
            Whether you are in the world, our professional drivers guarantee a
            <span className="text-[#C9A84C]"> safe</span>,
            <span className="text-[#C9A84C]"> punctual</span>, and{" "}
            <span className="text-[#C9A84C]"> stress-free ride </span>, so you
            can focus on what matters.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  mt-8 md:mt-16 ">
        <h3 className="text-2xl md:text-3xl underline">
          Travel in Absolute Comfort{" "}
        </h3>
        <span className="leading-loose text-xl">
          Experience global travel the way it was meant to be. Our pristine
          fleet features only the latest vehicle models,
          <br className="hidden md:flex" /> driven by elite, multilingual
          chauffeurs trained in absolute safety and courtesy.
        </span>
      </div>
      <div className="w-full md:w-[80%] flex justify-center">
        <button className=" w-[95vw] md:w-[50%] py-3 animate-pulse bg-[#C9A84C] text-white rounded-md font-bold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MessageComponent;
