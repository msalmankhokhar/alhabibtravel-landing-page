import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add GTM Component */}
      <GoogleTagManager gtmId="GTM-WWRL452Q" />
      <head>
        <title>Umrah Booking | Al Habib Travel</title>
        <meta name="description" content="Welcome to Al Habib Travel UK, where journeys are tailored to perfection. Serving individuals and families from across the UK, we ensure that every Hajj or Umrah pilgrimage is designed with your unique needs in mind. From budget-friendly options to premium packages, our commitment to excellence guarantees an unparalleled experience for every traveler." />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}