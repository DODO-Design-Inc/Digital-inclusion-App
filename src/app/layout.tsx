import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AllContextProvider } from "@/context/allContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import React from "react";
import { html } from "framer-motion/client";

export const metadata = {
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
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon_new.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon_new.png"
          sizes="512x512"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon_new.svg" />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://dododesign.africa/",
              logo: "https://dododesign.africa/favicon.svg",
              name: "Dodo Design Africa",
            }),
          }}
        />
      </head>

      <body>
        <main className="font-inter tracking-[-0.03em]">
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
