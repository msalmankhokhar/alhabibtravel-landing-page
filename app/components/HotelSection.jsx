"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  EmaarHotel,
  AnjumHotel,
  GoldenHotel,
  Transport,
  PullmanHotel,
  OdestHotel,
  EmaarGrandHotel,
  Food,
} from "./ImagesGalary";
import { TransportService } from "../data/images";

function HotelSection() {
  // Reusable Dropdown Button Component
  const DropdownButton = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-black py-2 lg:py-4 px-5 md:px-6 rounded-sm hover:shadow-2xl transition-transform duration-300 hover:scale-105 ${
        isActive
          ? "bg-[#00454A] text-white font-bold"
          : "bg-white text-black border py-4 hover:bg-[#D4A10F] hover:text-white"
      }`}
    >
      <span>{label}</span>
      <IoMdArrowDropdown className="ml-2" />
    </button>
  );

  const [activeTab, setActiveTab] = useState("makkah");
  const [activeHotel, setActiveHotel] = useState("emaarKhalilMakkah");

  return (
    <section className="w-full md:w-[70%] mx-auto md:mt-10">
      <div>
        <div className="p-5">
          <p className="text-[#d4A10F] text-2xl">Your Comfort, Our Priority</p>
          <h1 className="text-2xl md:text-4xl mt-2 font-bold">
            Hotels / Accommodations
          </h1>
        </div>

        <div className="px-5 py-1 overflow-x-auto">
          <div className="flex gap-2">
            <DropdownButton
              label="Makkah"
              isActive={activeTab === "makkah"}
              onClick={() => setActiveTab("makkah")}
            />
            <DropdownButton
              label="Madinah"
              isActive={activeTab === "madina"}
              onClick={() => setActiveTab("madina")}
            />

            <DropdownButton
              label="Transport"
              isActive={activeTab === "Transport"}
              onClick={() => setActiveTab("Transport")}
            />

            <DropdownButton
              label="Food"
              isActive={activeTab === "food"}
              onClick={() => setActiveTab("food")}
            />
          </div>
        </div>

        {/* Makkah Tab */}
        {activeTab === "makkah" && (
          <>
            <div className=" p-5 mt-3  hover:shadow-2xl transition-transform duration-300  ">
              <div className="overflow-x-auto whitespace-nowrap flex gap-3">
                <button
                  className={`  px-4 border-2 hover:bg-[#d4A10F] hover:text-white py-2  ${
                    activeHotel === "emaarKhalilMakkah"
                      ? "bg-[#00454A] text-white font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveHotel("emaarKhalilMakkah")}
                >
                  Emaar Al Khalil Makkah
                </button>
                <div></div>

                <button
                  className={`px-4 border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                    activeHotel === "emaarGrandMakkah"
                      ? "bg-[#00454A] text-white font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveHotel("emaarGrandMakkah")}
                >
                  Emaar Grand Makkah Hotel
                </button>
                <button
                  className={`px-4 border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                    activeHotel === "anjumMakkah"
                      ? "bg-[#00454A] text-white font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveHotel("anjumMakkah")}
                >
                  Anjum Makkah
                </button>
              </div>
            </div>

            {/* Hotel Details */}
            {activeHotel === "emaarKhalilMakkah" && (
              <>
                <div className="py-5">
                  <span className="font-bold text-lg text-[#00454A] px-5">
                    Emaar Al Khalil Makkah
                  </span>
                  <div className="py-2 px-5 text-gray-500">
                    <p>
                    Emaar Al Khalil is ideally located on Ibrahim Khalil Street, just 400 meters from Haram Sharif. Enjoy air-conditioned rooms with flat-screen TVs, a kettle, and 24/7 front desk service in Arabic and English. Our dedicated staff ensures a comfortable stay for all guests. Book now!

                    </p>
                    <p>
                      <span className="font-bold text-[#d4A10F]">
                        Location:
                      </span>{" "}
                      Ibrahim Al Khalil Street - Mesfala, 34452 Makkah, Saudi Arabia

                    </p>
                  </div>
                </div>
                <EmaarHotel />
              </>
            )}

            {activeHotel === "emaarGrandMakkah" && (
              <>
                <div className="py-5 px-5">
                  <span className="font-bold text-lg text-[#00454A]">
                    Emaar Grand Makkah Hotel
                  </span>
                  <div className="py-2 text-gray-500">
                    <p>
                    Experience comfort at Emaar Grand Makkah Hotel, a 4-star hotel just 4-5 minutes’ walk to Haram, proudly partnered with Al Habib Travel Ltd for your Umrah. Enjoy modern rooms with stunning views of Al Haram and Makkah city.

                    </p>
                    <p>
                      <span className="font-bold text-[#d4A10F]">
                        Location:
                      </span>{" "}
                      Ibrahim Al Khalil Street - Mesfala, 24231 Makkah, Saudi Arabia
                    </p>
                  </div>
                </div>
                <EmaarGrandHotel />
              </>
            )}
            {activeHotel === "anjumMakkah" && (
              <>
                <div className="py-5 px-4">
                  <span className="font-bold text-lg text-[#00454A]">
                    Anjum Makkah
                  </span>
                  <div className="py-2 text-gray-500">
                    <p>
                    Anjum Makkah, just a 2-minute walk from Masjid Al Haram, offers modern accommodations with stunning Haram views. Guests can savor local and international cuisine at the on-site restaurant or enjoy 24/7 room service. With a 24-hour front desk, Al Habib Travel ensures a seamless and comfortable Umrah experience.

                    </p>
                    <p>
                      <span className="font-bold text-[#d4A10F]">
                        Location:
                      </span>{" "}
                        Umm Al Qura Street, Jabal Al Kaaba District, Makkah, Saudi Arabia 

                    </p>
                  </div>
                </div>

                <AnjumHotel />
              </>
            )}
          </>
        )}

        {/* Madinah Tab */}
        {activeTab === "madina" && (
          <div className="p-5 hover:shadow-2xl transition-transform duration-300  ">
            <div className="overflow-x-auto  whitespace-nowrap flex gap-3">
              <button
                className={`px-4    border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "odstMadinah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("odstMadinah")}
              >
                Odst Al Madinah
              </button>
              <button
                className={`px-4  border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "goldenTulipMadinah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("goldenTulipMadinah")}
              >
                Golden Tulip Al Mektan Madinah Hotel
              </button>
              <button
                className={`px-4  border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "pullmanMadinah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("pullmanMadinah")}
              >
                Pullman Zam Zam Madinah
              </button>
            </div>

            {/* Hotel Details */}
            {activeHotel === "odstMadinah" && (
              <>
                <div className="py-5">
                  <span className="font-bold text-lg text-[#00454A]">
                    Odst Al Madinah
                  </span>
                  <div className="py-2 text-gray-500">
                    <p>
                    Odst Al Madinah is just 150 meters from the Prophet’s Mosque and 250 meters from the Old Bazaar, offering unmatched convenience for pilgrims. Each room features a private bathroom, bathtub, slippers, free toiletries, and a hairdryer. Located 13 km from Prince Mohammed Airport, it’s the perfect Umrah stay!
 

                    </p>
                    <p>
                      <span className="font-bold text-[#d4A10F]">
                        Location:
                      </span>{" "}
                      Odst, Madinah 42311, Saudi Arabia

                    </p>
                  </div>
                </div>

                <OdestHotel />
              </>
            )}

            {activeHotel === "goldenTulipMadinah" && (
              <>
                <div className="py-5">
                  <span className="font-bold text-lg text-[#00454A]">
                    Golden Tulip Al Mektan Madinah Hotel
                  </span>
                  <div className="py-2 text-gray-500">
                    <p>
                    Golden Tulip Al Mektan, on Bab Al Salam Street, is just 200 meters and a 2-minute walk from Haram Sharif, offering stunning views of the Prophet’s Mosque. Enjoy comfort and style at this premier Madinah hotel, proudly partnered with Al Habib Travel Ltd for your Hajj and Umrah tours.

                    </p>
                    <p>
                      <span className="font-bold text-[#d4A10F]">
                        Location:
                      </span>{" "}
                      As Salam Rd, Al Manakhah, Madinah 42311, Saudi Arabia
                    </p>
                  </div>
                </div>

                <GoldenHotel />
              </>
            )}
            {activeHotel === "pullmanMadinah" && (
              <>
                <div className="py-5">
                  <span className="font-bold text-lg text-[#00454A]">
                    Pullman Zam Zam Madinah
                  </span>
                  <div className="py-2 text-gray-500">
                    <p>
                    Pullman Zam Zam is just 100 meters from Bab Al Salam at Masjid Al Nabawi, offering unparalleled convenience. Enjoy air-conditioned rooms with free WiFi, flat-screen TVs, and select rooms with seating areas and sofa beds. With 4 unique restaurants, Al Habib Travel ensures a luxurious and comfortable Umrah stay.

                    </p>
                    <p>
                      <span className="font-bold text-[#d4A10F]">
                        Location:
                      </span>{" "}
                       Amr Bin Al Gmoh Street, Bani Khidrah, Madinah 41499, Saudi Arabia
                    </p>
                  </div>
                </div>
                <PullmanHotel />
              </>
            )}
          </div>
        )}

        {/* Food Tab */}
        {activeTab === "food" && (
          <>
            <div className="p-5 hover:shadow-2xl  transition-transform duration-300  ">
              <span className="font-bold text-xl text-[#00454A]">
                Explore Delicious Food Options
              </span>
              <div className="py-2 text-gray-500">
                <p>
                At Al Habib Travel Ltd, we cater to the diverse tastes of Pakistani, Indian, Bangladeshi, British, and European Muslims. From flavorful biryanis and curries to familiar international dishes, our meals are crafted with care, including a special Zabiha dish every week to make your journey even more comforting.

                </p>
              </div>
            </div>
            <Food />
          </>
        )}

        {activeTab === "Transport" && (
          <>
            <div className="p-5 hover:shadow-2xl  transition-transform duration-300  ">
              <span className="font-bold text-xl text-[#00454A]">
                Explore transport Options
              </span>
              <div className="py-2 text-gray-500">
                <p>
                  Transport: Our driver will pick you up at Jeddah airport, take
                  you to your Makkah hotel, then to Madinah, and finally to the
                  airport for departure. Enjoy private transport and a friendly
                  guide for Ziyarats in both cities. Comfort and care, every
                  step of the way!
                </p>
              </div>

              <Transport />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default HotelSection;
