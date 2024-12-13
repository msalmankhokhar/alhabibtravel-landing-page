import React from "react";

// Sample data for video testimonials
const videoData = [
  {
    videoLink: "/videoFiles/LP-Review.mp4",
  },
  // {
  //   videoLink: "/videoFiles/LP-Review.mp4", // Replace with actual video link
  // },
];

// Video Testimonial Component
function VideoTestimonial() {
  return (
    <>
      <div className="flex justify-center md:hidden items-center w-[90%] md:w-[60%] lg:w-[45%] mx-auto gap-3 my-5 flex-col md:flex-row ">
        {videoData.map((item, index) => (
          <video
            key={index} // Add a unique key for each video
            className="w-[90%]  md:w-[40%] h-96 object-contain rounded-lg"
            src={item.videoLink} // Correctly use item.videoLink
            controls
          ></video>
        ))}
      </div>
    </>
  );
}

export default VideoTestimonial;
