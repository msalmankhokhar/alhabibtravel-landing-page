import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <section className="text-center bg-[#00454A]  py-6 mt-10 border-t-4 animate-fadeIn">
        <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
          Explore with Al Habib Travel Ltd.
        </h1>
        <h2 className="text-xl font-bold text-white mt-2">
          Seamless Adventures Await
        </h2>
      </section>

      <div className="container mx-auto px-4 lg:px-32 py-8 lg:py-16   flex flex-col lg:flex-row gap-10 items-center">
        {/* Video Section */}
        <div className="w-full lg:w-1/3 flex flex-col bg-white shadow-lg rounded-lg">
          <video
            src="/videoFiles/ad.mp4"
            className="w-full rounded-t-lg object-cover"
            controls
          />
          <button className="w-full py-4 bg-[#00454A] text-white font-bold text-lg hover:bg-[#d4A10F] rounded-b-lg transition-all duration-300">
            <a href="https://wa.me/+442035042344">CHAT NOW </a>
          </button>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2   min-h-[30rem]">
          <h3 className="text-lg text-[#D4A10F] mb-2">
            DISCOVER AL HABIB TRAVEL LTD.
          </h3>
          <h1 className="text-2xl font-bold mb-4">
            Experience <span className="text-[#D4A10F]">comfort</span> and care
          </h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            Welcome to Al Habib Travel UK, where journeys are tailored to
            perfection. Serving individuals and families from across the UK, we
            ensure that every Hajj or Umrah pilgrimage is designed with your
            unique needs in mind. From budget-friendly options to premium
            packages, our commitment to excellence guarantees an unparalleled
            experience for every traveler.
          </p>
          <div>
            <h2 className="text-lg font-bold text-gray-600 mb-3">
              What sets us apart:
            </h2>
            <ul className="list-disc pl-5 text-slate-600 leading-relaxed">
              <li>Customized travel solutions for every budget</li>
              <li>Authentic culinary experiences to delight your journey</li>
              <li>Round-the-clock assistance, wherever you are</li>
            </ul>
            <p className="text-lg font-bold text-gray-600 mt-4">
              Join us to turn your travel dreams into reality!
            </p>
          </div>
        </div>
      </div>

      <section className=" hidden lg:flex flex-col text-center py-6 bg-[#00454A]  shadow-md animate-fadeIn">
        <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
          Discover Destinations with Al Habib Travel Ltd.
        </h1>
        <h2 className="text-xl font-bold mt-2 text-white">
          Your Perfect Travel Partner Awaits
        </h2>
      </section>

      {/* about section with video  */}

      <div className=" hidden w-[93%] lg:w-full lg:px-32   mx-auto    flex-col-reverse  py-8 lg:py-16 lg:grid lg:bg-gray-100 lg:grid-cols-2 gap-8 items-center  lg:flex-row-reverse animate-fadeIn">
        <div className="transition-all transform lg:hover:scale-105 hover:duration-300 hover:ease-in-out">
          <h3 className="text-lg text-[#D4A10F] animate-fadeIn">
            AL HABIB TRAVEL LTD
          </h3>
          <h1 className="text-2xl font-bold  ">
            Collect moments <span className="text-[#D4A10F]">crafted</span> with
            perfection
          </h1>

          <p className="py-3 text-gray-700 leading-8 ">
            Al Habib Travel UK is a trusted travel agency for Muslims from
            British, European, Asian, and African communities living in the
            United Kingdom. With offices in London and Manchester, we offer Hajj
            and Umrah packages at prices that respect your budget. Whether you
            prefer simple comfort or luxurious stays, our 3-star, 4-star, and
            5-star packages are carefully crafted to make your spiritual journey
            stress-free and meaningful.
          </p>

          <h2 className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-700">
            We are a choice of many because of our:
          </h2>
          <ul className="list-disc text-slate-600 leading-8 pl-8 animate-fadeIn animate-delay-900">
            <li>Affordable services with exceptional value</li>
            <li>Flavorful meals that satisfy.</li>
            <li>Dedicated 24/7 support.</li>
          </ul>

          <p className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-1100">
            Let’s embrace the extraordinary together!
          </p>
        </div>

        <div className="   animate-fadeIn animate-delay-500">
          <Image
            src="/travelImages/travel1.png"
            alt="Travel Image"
            className="rounded-lg object-cover transition-transform h-[400px] transform lg:hover:scale-105 duration-300 ease-in-out"
            width={900}
            height={800}
            priority
          />
        </div>
      </div>
    </>
  );
}

export default About;
