import React from "react";

// Sample data for video testimonials
const videoData = [
  {
    videoLink: "/videoFiles/WhatsApp Video 2025-01-24 at 18.04.45.mp4", // Replace with actual video link
  },

  {
    videoLink: "/videoFiles/LP-Review.mp4",
  },
];

// Video Testimonial Component
function VideoTestimonial() {
  return (
    <>
      {" "}
      <div className="  w-[90%] md:w-[70%] mx-auto">
        <div className="text-center text-3xl px-4 font-bold">
          <h2 className="text-sm my-2 text-[#D4A10F] uppercase tracking-wider animate-bounce">
            TESTIMONIALS
          </h2>
          What Our <span className="text-[#D4A10F]"> Clients</span> <br /> Say!
        </div>
      </div>
      <div className="flex justify-center   items-center w-[90%] md:w-[60%] lg:w-[45%] mx-auto gap-3 my-5 flex-col md:flex-row ">
        {videoData.map((item, index) => (
          <video
            key={index} // Add a unique key for each video
            className="w-[90%] border-2 p-1  md:w-[50%] h-96 object-contain rounded-lg"
            src={item.videoLink} // Correctly use item.videoLink
            controls
          ></video>
        ))}
      </div>
    </>
  );
}

export default VideoTestimonial;
