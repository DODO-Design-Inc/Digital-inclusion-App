// app/layout.tsx
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AllContextProvider } from "@/context/allContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import React from "react";
import { Metadata } from "next";
import StrategicCallWrapper from "@/components/StrategicCallWrapper";

export const metadata: Metadata = {
  title: "Voices Of 500 Women",
  description: "Voices Of 500 Women",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
};

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Preload custom fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-Light.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-Roman.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeueBold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeueMedium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization"
            }),
          }}
        />
      </head>

      <body>
        <main className="font-inter tracking-[-0.03em]">
        <StrategicCallWrapper />
          <AllContextProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </AllContextProvider>
          {isProduction && <GoogleAnalytics />}
        </main>
      </body>
    </html>
  );
}
