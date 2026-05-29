const Fleet = () => {
  return (
    <div className="pt-6 flex flex-wrap justify-center items-center gap-8 md:gap-20">
      <figure className="md:w-[30%] flex flex-col gap-2  rounded-md w-[97vw]   shadow px-2 shadow-black bg-[#a5811e] text-white">
        <img src="car2.jpg" alt="" className="h-[70%] w-full rounded-lg" />
      </figure>
      <figure className="md:w-[30%] pb-4  flex flex-col w-[97vw] rounded-md shadow shadow-black px-2 gap-8 md:gap-16 bg-[#a5811e] text-white">
        <img src="car3.jpg" alt="" className="h-[70%] w-full rounded-lg" />
      </figure>
      <figure className="md:w-[30%] flex flex-col items-center w-[97vw] text-white rounded-md px-2 shadow bg-[#a5811e]  gap-8 md:gap-16 ">
        <img src="car4.jpg" alt="" className="h-[70%] w-full rounded-lg" />
      </figure>
      <figure className="md:w-[30%] flex flex-col w-[97vw] rounded-md shadow  shadow-black px-2  gap-8 md:gap-16 bg-[#a5811e] text-white">
        <img src="car1.jpg" alt="" className="h-[70%] w-full rounded-lg" />
      </figure>
    </div>
  );
};

export default Fleet;
