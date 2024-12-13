import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data for Inclusions
const inclusionData = [
  {
    title: "Return Flight",
    content:
      "Round-trip flights from one of our preferred partners. Travel with reputable airlines that offer quality services and comfort.",
  },
  {
    title: "Accommodation",
    content:
      "Stay in hotels close to the Haram in Makkah and Medina, as per your booked package. Provides enough time to perform your prayers & rituals or to explore the city.",
  },
  {
    title: "Visa Processing",
    content:
      "Al Habib Travel Ltd will process the Umrah Visa application. You have to just provide the documents which are required and you are good to go.",
  },
  {
    title: "Ground Transport",
    content:
      "The private ground transport is included in between Jeddah - Makkah - Madinah - Airport in the package.",
  },
  {
    title: "Rawdah Permit",
    content:
      "To pray in the Rawdah, you will need a Rawdah permit which we will help you to get it without any delay.",
  },
  {
    title: "Zam Zam 5 Ltr",
    content:
      "Receive a 5-litre bottle of Zam-Zam water as a return gift from us. Drink from it or bring it back home with you.",
  },
  {
    title: "Checked Baggage",
    content:
      "The 1st checked baggage is included in your package which is 28kg, 20kg baggage and 8kg hand carry.",
  },
  {
    title: "Umrah Kit",
    content:
      "An Umrah kit will be provided that contains essential items for the journey, such as different essential bags, 3-point Travel Adapter, and more.",
  },
];

// Data for Exclusions
const exclusionData = [
  {
    title: "Meal",
    content:
      "The meal is not included in the packages, you can add into your package by requesting to our agent. The charges will be £7 per person per day for breakfast only.",
  },
  {
    title: "Laundry",
    content: "Laundry services are not included in the package.",
  },
  {
    title: "TCS & GST",
    content:
      "GST & TCS are applicable taxes not included in your Umrah Package Price.",
  },
  {
    title: "Ziyarat's Transport",
    content:
      "The transport for ziyarat's for Makkah & Madinah is not included. You can add into the package by paying £25 per person for both cities.",
  },
  {
    title: "Additional Checked Baggage",
    content:
      "If the luggage exceeds the 1st checked baggage which is 28kg, then you will have to pay at airport. Additional baggages are not included.",
  },
  {
    title: "Room Service",
    content:
      "Room service is the service of delivering food, drinks, or other items to your hotel room, which is not included in the Umrah package and has to be paid directly to the hotel on a per-use basis.",
  },
];

function TravelDetails() {
  return (
    <div className="w-[80%] mx-auto">
      {/* Inclusion Section */}
      <h1 className="text-3xl mt-10 font-serif font-bold text-[#D4A10F]">
        Inclusion
      </h1>
      {inclusionData.map((item, index) => (
        <Accordion
          key={`inclusion-${index}`}
          type="single"
          collapsible
          className="mb-2" // Add gap between items
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium py-3 px-5 text-black rounded-t-md hover:bg-yellow-500 hover:text-white hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base pl-4 py-2 text-[#676060] bg-gray-100 leading-8">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      {/* Exclusion Section */}
      <h1 className="text-3xl mt-10 font-bold text-[#D4A10F]">Exclusion</h1>
      {exclusionData.map((item, index) => (
        <Accordion
          key={`exclusion-${index}`}
          type="single"
          collapsible
          className="mb-2" // Add gap between items
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium py-3 px-5 text-black rounded-t-md hover:bg-yellow-500 hover:text-white hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base pl-4 py-2 text-[#676060] bg-gray-100 leading-8">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default TravelDetails;
