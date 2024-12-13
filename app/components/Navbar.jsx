"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineContactPhone } from "react-icons/md";
import InquiryComponent from "./InquiryComponent";
import { useRouter } from "next/navigation";
function Navbar({ showPopup, setShowPopup }) {
  const [toggle, isToggle] = useState(false);
  const router = useRouter();

  function onToggleClick() {
    isToggle(!toggle);
  }

  const onClickedContactButton = () => {
    //router.push("/enquiry-form");
    setShowPopup(true);
  };

  const gotoHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <nav className="w-full py-1 flex  justify-between relative items-center bg-slate-100 bg-gradient-to-  from-[#0c091d] via-[#0e5243] to-[#093833]  shadow-xl  px-10 md:px-32">
        {/* Toggle Buttons */}
        <div className="md:hidden ">
          {toggle ? (
            <>
              <GiTireIronCross onClick={onToggleClick} className="w-8 h-10 " />
              <div className="contact">
                <button
                  onClick={onClickedContactButton} // Open InquiryForm when clicked
                  className="absolute bg-[#d4A10F] top-[5rem] w-[100%] left-0 py-3 text-white   font-bold text-lg flex items-center justify-center gap-3"
                >
                  <MdOutlineContactPhone /> CONTACT US
                </button>
              </div>
            </>
          ) : (
            <RxHamburgerMenu onClick={onToggleClick} className="w-10 h-10  " />
          )}
        </div>

        {/* Logo */}
        <div className="cursor-pointer">
          <Image
            onClick={gotoHomePage}
            src="/logo.webp"
            alt="Logo"
            width={80} // Adjust width as needed
            height={1200} // Adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Contact Button for Larger Screens */}
        <div className="hidden md:flex contact">
          <button
            onClick={onClickedContactButton}
            className="flex items-center gap-3 bg-[#00454A] rounded-sm hover:bg-[#d4A10F] px-5 py-3  animate-pulse  text-white font-bold text-lg"
          >
            <MdOutlineContactPhone /> CONTACT US
          </button>
        </div>
      </nav>

      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <InquiryComponent />
        </div>
      )}
    </>
  );
}

export default Navbar;
