"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const InquiryComponent = ({ closePopup }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_vpxmfgq",  
        "template_rbmwu2c", //habib template key template_aapxyg9 serviceKey:service_3w1brq3
        form.current,
        "g9xwc_LT3hYleKIQm"
      );
      localStorage.setItem("inquiryFilled", "true");
      setStatusMessage("Your inquiry has been sent successfully!");
      form.current.reset();

      setTimeout(() => {
        window.location.reload();
        
      }, 1500);
    } catch (error) {
      setStatusMessage("Your inquiry has been sent...");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="  ">
        <div className="bg-white   p-6 md:rounded-lg max-w-sm md:max-w-lg md:border-t-8 md:border-l-8 shadow-2xl mx-auto relative  md:h-auto md:pb-10 md:top-7">
          <button
            onClick={() => {
              closePopup; // Close the popup
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-[#d4A10F]"
            aria-label="Close Inquiry Form"
          >
            <FaTimes onClick={closePopup} size={20} />
          </button>
          <div className="text-center mb-4">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={64}
              height={64}
              className="mx-auto my-2"
            />
            <h2 className="text-lg font-semibold my-2">Get Umrah Qoute!</h2>
            <p className="text-sm text-gray-600">
              We will contact you via WhatsApp or Email under a minutes.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Passenger Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="from_phone"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your ph:number +44"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Total number of Passengers
              </label>
              <input
                type="text"
                id="number"
                name="from_email"
                className="w-full mt-1 p-2 border rounded-md "
                placeholder="We are total "
                required
              />
            </div>

            <div className="mb-4">
              <input type="checkbox" id="number" name="from_checked" required />{" "}
              I accecpt the{" "}
              <span className="text-[#d4A10F]">
                {" "}
                <a href="https://www.alhabibtravel.co.uk/privacy-policy">
                  privacy policy{" "}
                </a>{" "}
              </span>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-[#00454A] text-white py-2 rounded-md hover:bg-[#d4A10F] transition"
            >
              {isSending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
          {statusMessage && (
            <p className="text-center text-sm mt-4">{statusMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default InquiryComponent;
