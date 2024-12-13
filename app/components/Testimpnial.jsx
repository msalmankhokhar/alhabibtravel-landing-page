// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import React from "react";

// // Sample data
// const carouselData = [
//   {
//     title: "Aisha Saddique",
//     quote:
//       "Al Habib travel is the best and trusted travel agency in London I search Umrah booking and then find them in You tube I talk to them and they gave me good advice for booking and provided furthur convenience in the procedure.  ",
//     gender: "female",
//     rating: 5,
//   },
//   {
//     title: "Seibar Wakefield",
//     quote:
//       "Assalam o Alaikum, Brother and sisters it is highly recommended company.We have dealt with them regarding some queries they have provided us very good services and in professional way.They are real gentlemans.",
//     gender: "male",
//     rating: 5,
//   },
//   {
//     title: "Zoya Ahmed",
//     quote:
//       "Al Habib travel is the best and trusted travel agency in London I search Umrah booking and then find them in You tube I talk to them and they gave me good advice for booking and provided furthur convenience in the procedure.",
//     gender: "female",
//     rating: 5,
//   },
// ];

// // Testimonial Component
// function Testimonial() {
//   return (
//     <div className="grid col-span-1 md:col-span-2 lg:col-span-3 w-[90%] md:w-[50%] mx-auto">
//       <div className="text-center text-3xl px-4 font-bold">
//         <h2 className="text-sm my-2 text-[#D4A10F]">TESTIMONIALS</h2>
//         What Our <span className="text-[#D4A10F]">Clients</span> Say!
//       </div>

//       <Carousel
//         plugins={[Autoplay({ delay: 2000 })]}
//         opts={{ align: "center" }}
//         className="w-full my-10 max-w-screen-lg"
//       >
//         <CarouselContent>
//           {carouselData.map((item, index) => (
//             <CarouselItem
//               key={index}
//               className="  basis-full   lg:basis-1/2 md:px-4"
//             >
//               <div className="p-4 bg-white rounded-lg shadow-lg md:min-h-[350px] border">
//                 {/* Avatar */}
//                 <div className="flex justify-center">
//                   <img
//                     src={
//                       item.gender === "female"
//                         ? "/femaleAvatar11.jpg"
//                         : "/maleAvatar.webp"
//                     }
//                     alt={`${item.title}'s avatar`}
//                     className="w-20 h-20 rounded-full border-2 border-[#D4A10F] mb-4"
//                   />
//                 </div>

// //                 {/* Content */}
// //                 <h3 className="text-xl font-semibold text-center">
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
// //                   “{item.quote}”
// //                 </p>

//                 {/* Star Rating */}
//                 <div className="flex justify-center mt-4">
//                   {[...Array(item.rating)].map((_, i) => (
//                     <span key={i} className="text-[#D4A10F] text-lg">
//                       ★
//                     </span>
//                   ))}
//                   {[...Array(5 - item.rating)].map((_, i) => (
//                     <span key={i} className="text-gray-300 text-lg">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// }

// export default Testimonial;
