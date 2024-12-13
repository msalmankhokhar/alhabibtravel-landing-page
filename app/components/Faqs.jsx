import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data for the homepage
const accordionData = [
  {
    title: "What is the baggage allowance for my flight?",
    content:
      "The first checked baggage is included in all our packages. You’re allowed 28kg per person, which includes 20kg for your main luggage and 8kg for your hand carry. This ensures you can comfortably pack everything you need for your journey.",
  },
  {
    title: "What is your refund policy in case of cancellation?",
    content:
      "Our refund policy is designed to be as fair and straightforward as possible. If you need to cancel, the amount refunded will depend on how close the cancellation is to your travel date, as airline tickets and hotel reservations have specific terms. We'll guide you through the process and do our best to minimize any inconvenience. Feel free to contact us for detailed terms when booking.",
  },
  {
    title: "Will you provide assistance if I face any issues during my trip?",
    content:
      "Absolutely, we’re here to support you every step of the way. We provide free assistance throughout your journey and will stay in touch until your trip concludes. If needed, we can even offer in-person assistance to ensure a smooth and worry-free experience for you.",
  },
  {
    title: "Will I be traveling with a group, or is it an individual package?",
    content:
      "We offer both options! You can choose a private package if you prefer a personalized experience or join a group package, which is a great way to connect with other pilgrims. Group packages depend on availability, so let us know your preference, and we’ll arrange accordingly.",
  },
  {
    title: "Are there any discounts for families or groups?",
    content:
      "Yes, we’re pleased to offer special discounted rates for families and groups. This makes it more affordable to share this spiritual journey with your loved ones. Let us know the number of people traveling, and we’ll provide a customized package for you.",
  },
  {
    title: "Do you offer installment plans or flexible payment options?",
    content:
      "Yes, we provide flexible installment plans to make it easier for you to manage the cost of your trip. You can secure your package with an initial deposit, and the remaining balance can be paid in installments. Let us know what works best for you, and we’ll guide you through the process.",
  },
];

// FAQ Section Component
function Faqs() {
  return (
    <div className="w-full md:w-[90%] mx-auto py-10">
      {/* Heading */}
      <div className="text-center text-3xl px-4 font-bold mb-8">
        <h2 className="text-sm my-2 text-[#D4A10F] uppercase tracking-wider animate-bounce">
          FAQ&apos;s
        </h2>
        Frequently <span className="text-[#D4A10F]">Asked</span> Questions
      </div>

      {/* FAQ Accordion */}
      <div className="w-[80%] mx-auto">
        {accordionData.map((item, index) => (
          <Accordion
            key={`accordion-${index}`}
            type="single"
            collapsible
            className="mb-6" // Increase the gap between questions
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-lg  font-medium py-3 px-5 text-black rounded-t-md  hover:bg-yellow-500 hover:text-white hover:no-underline">
                {" "}
                {/* Smaller text size */}
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-8 p-6 py-2 text-[#676060] bg-gray-100  ">
                {" "}
                {/* Smaller content text */}
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
