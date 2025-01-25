import Image from "next/image";
import React from "react";

// Sample data
const carouselData = [
  {
    title: "Sarah Khan",
    quote:
      "Alhabib Travel Pvt made my trip absolutely seamless. From booking flights to arranging luxurious accommodations, everything was handled professionally. I would highly recommend their services.",
    gender: "female",
    rating: 5,
  },
  {
    title: "Ali Raza",
    quote:
      "Booking through Alhabib Travel was the best decision! Their team is professional, and they ensure everything runs smoothly.",
    gender: "male",
    rating: 4,
  },
  {
    title: "Zoya Ahmed",
    quote:
      "Excellent customer service and attention to detail. Alhabib Travel made my vacation unforgettable!",
    gender: "female",
    rating: 5,
  },
];

// Testimonial Component
function Testimonial() {
  return (
    <div className=" w-[90%] md:w-[70%] mx-auto">
      {/* Heading */}
      {/* <div className="text-center text-3xl px-4 mt-7 font-bold">
        <h2 className=" hidden lg:block text-sm my-2 text-[#D4A10F] uppercase tracking-wider animate-bounce">
          TESTIMONIALS
        </h2>
        <span className="invisible lg:visible  "> What Our </span>
        <span className="text-[#D4A10F] invisible lg:visible   ">
          Clients
        </span>{" "}
        <p className="invisible lg:visible  ">Say!</p>
      </div> */}

      {/* Grid/Flex Content */}
      <div className="overflow-x-auto ">
        <div className="grid grid-cols-3 gap-2 my-10 ml-1 md:ml-0   min-w-[60rem]   ">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-95 hover:shadow-xl"
            >
              {/* SVG Icon */}
              <svg
                className="h-12 mb-4 text-gray-400 dark:text-gray-600 animate-pulse"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>

              {/* Quote */}
              <blockquote className="text-lg font-medium text-gray-900 dark:text-white text-center">
                &quot;{item.quote}&quot;
              </blockquote>

              {/* Client Info */}
              <figcaption className="mt-4 flex items-center">
                {/* Avatar */}
                <Image
                  src={
                    item.gender === "female"
                      ? "/femaleAvatar11.jpg"
                      : "/maleAvatar.webp"
                  }
                  alt={`${item.title}'s avatar`}
                  width={48} // Tailwind's w-12 (12 * 4 = 48px)
                  height={48} // Tailwind's h-12 (12 * 4 = 48px)
                  className="rounded-full border-2 border-[#D4A10F] mr-4"
                />
                <div>
                  {/* Name */}
                  <p className="font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </p>

                  {/* Star Rating */}
                  <div className="flex">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-[#D4A10F] text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
