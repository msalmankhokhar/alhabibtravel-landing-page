"use client";

import React, { useState, useRef, Suspense } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/compat/router";
import { useEffect } from "react";
import { Bars, ColorRing, TailSpin, ThreeDots } from "react-loader-spinner";

const Component = ({ closePopup }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  // const router = useRouter();
  const [utm_source, setutm_source] = useState("")
  const [utm_medium, setutm_medium] = useState("")
  const [utm_campaign, setutm_campaign] = useState("")
  const [utm_term, setutm_term] = useState("")
  const [gclid, setgclid] = useState("")
  useEffect(() => {

    // Log all inputs within the form when the page loads
    if (form.current) {
      const inputs = form.current.querySelectorAll('input:not([type="hidden"])');
      inputs.forEach((input) => {
        const idSelector = input.id ? `#${input.id}` : "(no id)";
        const cssSelector = input.name
          ? `input[name="${input.name}"]`
          : "(no name)";
        console.log(`CSS Selector for ${input.name}: ${idSelector}`);
      });
    }

    const params = new URLSearchParams(window.location.search);
    // console.log(params.get('utm_source'));
    setutm_source(params.get('utm_source'))
    setutm_campaign(params.get('utm_campaign'))
    setutm_medium(params.get('utm_medium'))
    setutm_term(params.get('utm_term'))
    setgclid(params.get('gclid'))

    const handleBeforeUnload = (event) => {
      if (isSending) {
        // Prompt the user if the request is being sent
        const message = 'Your query is being processed. Are you sure you want to leave?';
        event.returnValue = message; // Standard for most browsers
        return message; // For some browsers
      }
    };

    // Add the event listener when the component is mounted
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };



  }, [isSending])

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("submitted");
    setIsSending(true);

    try {
      // await emailjs.sendForm(
      //   "service_vpxmfgq",  
      //   "template_rbmwu2c", //habib template key template_aapxyg9 serviceKey:service_3w1brq3
      //   form.current,
      //   "g9xwc_LT3hYleKIQm"
      // )

      // using backend API to send mail
      const formData = new FormData(form.current)
      const data = Object.fromEntries(formData.entries());
      console.log(data);

      // sending request to backend using fetch
      // await fetch('http://localhost/api/landing_form', {
      await fetch('https://backend.alhabibtravel.co.uk/api/v1/mail/landing_page_form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })

      localStorage.setItem("inquiryFilled", "true");
      setStatusMessage("Your inquiry has been sent successfully!");
      form.current.reset();

      setTimeout(() => {
        window.location.reload();

      }, 1500);
    } catch (error) {
      setStatusMessage("Your inquiry has been sent...");
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>

    {/* 
    brand colors: 
    yellow: #D4A10F
    teal:   #00454A
    */}

    {
      isSending && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <Bars
            visible={true}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            color="#00454A"
          />
        </div>
      )
    }

      <div className="">
        <div className="bg-white p-6 md:rounded-lg max-w-sm md:max-w-lg md:border-t-8 md:border-l-8 shadow-2xl mx-auto relative md:h-auto md:pb-10 md:top-7">
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
          <form ref={form} onSubmit={sendEmail} >
            <div className="mb-4">
              <label htmlFor="name-input" className="block text-sm font-medium">
                Passenger Name
              </label>
              <input
                type="text"
                id="name-input"
                name="name"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile-input" className="block text-sm font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                id="mobile-input"
                name="phone"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your ph:number +44"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email-input" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="passengers-input" className="block text-sm font-medium">
                Total number of Passengers
              </label>
              <input
                min={1}
                max={10}
                type="number"
                id="passengers-input"
                name="passengers"
                className="w-full mt-1 p-2 border rounded-md "
                placeholder="We are total "
                required
              />
            </div>

            <div className="mb-4">
              <input type="checkbox" id="privacypolicy-checkbox" name="privacy_policy_checked" required />{" "}
              I accept the{" "}
              <span className="text-[#d4A10F]">
                {" "}
                <a target="_blank" href="https://www.alhabibtravel.co.uk/privacy-policy">
                  privacy policy{" "}
                </a>{" "}
              </span>
            </div>

            {/* Hidden inputs */}
            <input type="hidden" name="utm_source" value={utm_source} />
            <input type="hidden" name="utm_medium" value={utm_medium} />
            <input type="hidden" name="utm_campaign" value={utm_campaign} />
            <input type="hidden" name="utm_term" value={utm_term} />
            <input type="hidden" name="gclid" value={gclid} />

            <button
              id="landing-form-submit-btn"
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

export default Component

// export default function InquiryComponent(){
//   (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component />
//     </Suspense>
//   );
// }
