import React from "react";
import Image from "next/image"; // Importing Next.js Image component

function Hero() {
  return (
    <>
      {/* Hero Section for Smaller Screens */}
      <main className="lg:hidden relative mt-0  top-[-39] items-center justify-center bg-gradient-to-r from-[#0c091d] via-[#0e5243] to-[#093833]">
        <div className="">
          <Image
            src="/banner-home.jpg"
            alt="banner image"
            layout="responsive"
            width={1920}
            height={1280}
            priority
          />
        </div>
      </main>

      {/* Hero Section for Larger Screens */}
      <main className="relative hidden mt-0 lg:block font-serif bg-gradient-to-r">
        <div className="banner-image w-full h-auto relative top-[-39]">
          <Image
            src="/DD-Recovered.jpg"
            alt="banner image"
            layout="responsive"
            width={1920}
            height={1480}
            priority
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
