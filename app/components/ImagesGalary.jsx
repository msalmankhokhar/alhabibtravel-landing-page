import React from "react";
import {
  AnjumMakkah,
  EmaarAlKhalilMakkah,
  EmaarGrandMakkahHotel,
  OdstAlMadinah,
  PullmanZamZamMadinah,
  GoldenTulipAlMektanMadinah,
  TransportService,
  Foods,
} from "../data/images";

import Image from "next/image";
import { useState } from "react";

export function AnjumHotel() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/anjum/anjumDT/1.jpg"
  );
  return (
    <section className="w-full  mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {AnjumMakkah.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1200}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function EmaarHotel() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/emmar/Alkhalil/EmaarDT/4.jpg"
  );

  return (
    <section className="w-full   mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {EmaarAlKhalilMakkah.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1200}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function EmaarGrandHotel() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/emmar/AmaarGrand/EmaarGrandDT/1.jpg"
  );
  return (
    <section className="w-full   mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {EmaarGrandMakkahHotel.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1200}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function OdestHotel() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/odest/OdstAlMadinahDT/1.jpg"
  );
  return (
    <section className="w-full   mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {OdstAlMadinah.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1200}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function PullmanHotel() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/pullman/PullmanZamZamdt/1.jpg"
  );
  return (
    <section className="w-full  mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {PullmanZamZamMadinah.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1200}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function Transport() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/transport/TransportDT/1car.jpg"
  );
  return (
    <section className="w-full   mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-1 mt-7">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {TransportService.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1200}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function GoldenHotel() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/Golden/AlMektanDT/1.jpg"
  );
  return (
    <section className="w-full   mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {GoldenTulipAlMektanMadinah.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg object-contain cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1600}
            height={900}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function Food() {
  const [selectedImage, setSelectedImage] = useState(
    "/alhabib-assets/Foods/6.jpg"
  );
  return (
    <section className="w-full   mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        {/* Thumbnail Images */}
        <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
          {Foods.map((image, index) => (
            <Image
              key={index}
              src={image.small}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg object-contain cursor-pointer hover:border-gray-400 hover:shadow-2xl hover:border-4 transition-transform duration-300"
              width={100}
              height={100}
              onClick={() => setSelectedImage(image.large)}
            />
          ))}
        </div>

        {/* Larger Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={selectedImage}
            alt="Selected large image"
            className="rounded-xl object-cover lg:max-h-[40rem] hover:shadow-2xl transition-transform duration-300 hover:scale-95"
            width={1600}
            height={900}
            priority
          />
        </div>
      </div>
    </section>
  );
}
