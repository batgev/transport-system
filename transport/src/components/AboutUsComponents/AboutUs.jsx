const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#0c1120] text-white flex flex-col items-center py-12 px-4">
      <div className=" w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl text-center italic font-bold mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-8">
          Delivering premium transport solutions for over 5 years. <br />
          Choose your perfect ride from our Standard, Premium, and Luxury people
          carrier fleets.
        </p>
        <p className="text-base md:text-lg mb-6 text-center leading-loose">
          Designed for travelers who refuse to compromise on comfort. With our
          fleet of top-class vehicles, your safety and relaxation are always
          guaranteed.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2 leading-loose bg-[#d4a113] p-4 rounded-md">
          <li>
            <span className="font-semibold">
              Elite, Professionally Trained Chauffeurs
            </span>{" "}
            – Experience hospitality and expertise at the wheel.
          </li>
          <li>
            <span className="font-semibold">24/7 Premium Transportation</span> –
            Reliable, full-service travel solutions whenever you need them.
          </li>
          <li>
            <span className="font-semibold">Seamless Worldwide Network</span> –
            Access our trusted transportation partners across the globe.
          </li>
        </ul>
        <p className="mb-6 text-center">
          Our main headquarters is in{" "}
          <span className="font-semibold">Accra, Ghana</span> with a satellite
          office in <span className="font-semibold">Guangzhou, China</span>.
        </p>
        <p className="mb-6 text-center md:w-[70%] leading-loose">
          With a robust global network of transportation partners, we provide
          premium ground travel services for individuals and groups of all
          sizes. Whether you are hosting a special event or traveling with loved
          ones, your comfort is our priority. Leave the driving to our
          professional chauffeurs and focus on enjoying your journey, no matter
          the city.
        </p>
        <ul className="list-disc list-inside mb-8 space-y-2 md:w-[70%] ">
          <li>Elite, Professionally Trained Chauffeurs</li>
          <li>24/7 Premium Transportation</li>
          <li>Seamless Worldwide Network</li>
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-center">OUR SERVICES</h3>
        <h4 className="text-xl font-semibold mb-2 text-center">
          WHAT WE OFFER
        </h4>
        <p className="mb-4 text-center">See What We Can Do For You</p>
        <div className="flex flex-col md:flex-row w-full gap-6 justify-center items-center mt-8">
          {/* Card 1 */}
          <div className="bg-[#1a2236] rounded-xl shadow-lg flex flex-col items-center p-6 w-full md:w-1/4 max-w-xs transition-transform hover:scale-105">
            <img
              src="/IMG-20260526-WA0059.jpg"
              alt="Airport Transfer"
              className="rounded-lg h-32 w-full object-cover mb-4"
            />
            <h5 className="text-lg font-bold mb-2">AIRPORT TRANSFER</h5>
            <p className="text-sm text-center">
              Seamless, punctual rides to and from the airport, ensuring a
              stress-free travel experience.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#1a2236] rounded-xl shadow-lg flex flex-col items-center p-6 w-full md:w-1/4 max-w-xs transition-transform hover:scale-105">
            <img
              src="/IMG-20260526-WA0062.jpg"
              alt="City Transfer"
              className="rounded-lg h-32 w-full object-cover mb-4"
            />
            <h5 className="text-lg font-bold mb-2">CITY TRANSFER</h5>
            <p className="text-sm text-center">
              Comfortable and reliable city-to-city transfers for business or
              leisure, tailored to your schedule.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#1a2236] rounded-xl shadow-lg flex flex-col items-center p-6 w-full md:w-1/4 max-w-xs transition-transform hover:scale-105">
            <img
              src="/IMG-20260526-WA0064.jpg"
              alt="Chauffeur Service"
              className="rounded-lg h-32 w-full object-cover mb-4"
            />
            <h5 className="text-lg font-bold mb-2">CHAUFFEUR SERVICE</h5>
            <p className="text-sm text-center">
              Professional chauffeurs at your service, delivering luxury,
              privacy, and peace of mind on every journey.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1a2236] rounded-xl shadow-lg flex flex-col items-center p-6 w-full md:w-1/4 max-w-xs transition-transform hover:scale-105">
            <img
              src="/pic.jpeg"
              alt="VIP Meet & Greet"
              className="rounded-lg h-32 w-full object-cover mb-4"
            />
            <h5 className="text-lg font-bold mb-2">VIP MEET & GREET</h5>
            <p className="text-sm text-center">
              Exclusive meet & greet services for VIPs, ensuring a smooth and
              distinguished arrival or departure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
