"use client";

import Navbar from "./Navbar";
import { Suspense, useState, useEffect } from "react";
import Footer from "./Footer";
import TravelDetails from "./TravelDetails";
import About from "./About";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import HotelSection from "./HotelSection";
import VideoTestimonial from "./VideoTestimonial";
import Faqs from "./Faqs";
import PriceCard from "./PriceCard";
import InquiryComponent from "./InquiryComponent";

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const inquiryHandled = localStorage.getItem("inquiryFilled");

    if (!inquiryHandled) {
      let appearanceCount = 0; // Track number of popup appearances

      // Show the popup after 10 seconds
      const initialTimeout = setTimeout(() => {
        setShowPopup(true);
        appearanceCount++;
      }, 10000);

      // Reappear logic after 25 seconds
      const reappearTimeout = setTimeout(() => {
        if (appearanceCount === 1) {
          setShowPopup(true);
          appearanceCount++;
          // localStorage.setItem("inquiryHandled", "true"); // Set flag after second appearance
        }
      }, 30000); // 10s initial + 25s reappear = 35s total
      if (appearanceCount === 2) {
        setShowPopup(false);
      }
      // Cleanup timeouts
      return () => {
        clearTimeout(initialTimeout);
        clearTimeout(reappearTimeout);
      };
    }
  }, []);

  const handleFormSubmit = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="fixed top-0 z-10 w-full">
        <Navbar showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
      {/* test */}
      <Hero />
      <HotelSection />

      <Suspense>
        <PriceCard showPopup={showPopup} setShowPopup={setShowPopup} />
      </Suspense>

      <TravelDetails />
      <About />
      <Testimonial />
      <VideoTestimonial />
      <Faqs />
      <Footer />

      {/* Conditionally render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <InquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
}

export default HomePage;
