import React from "react";
import InquiryComponent from "../components/InquiryComponent";
import Navbar from "../components/Navbar";
function page() {
  return (
    <>
      <div className=" hidden lg:block fixed top-0 z-10 w-full">
        <Navbar />
      </div>
      <div className=" md:h-screen md:pt-24 bg-gradient-to-r from-[#346063]   to-[#1b5858] via-[#0c5252]">
        <InquiryComponent />
      </div>
    </>
  );
}

export default page;
