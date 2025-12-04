"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Use <a> or router Link for navigation
import { useAllContext } from "@/context/allContext";

const Footer = () => {
  const segments = [
    { title: "Fintech", color: "bg-[#BF4142]", link: "#fintech" },
    { title: "Edtech", color: "bg-[#D97A06]", link: "#edtech" },
    { title: "E-commerce", color: "bg-[#F2BA0F]", link: "#ecommerce" },
    { title: "Healthtech", color: "bg-[#BF4804]", link: "#healthtech" },
  ];

  const socialLinks = [
    { name: "+234 809 522 1113 (Whatsapp)", url: "https://wa.me/234809522113" },
    { name: "Twitter (X)", url: "https://x.com/dodo_africa?t=9SCTuKJqWMIXQh-4TlxZLA&s=09" },
    { name: "Facebook", url: "https://www.facebook.com/dodo.africa" },
  ];

  const {toggleContactModalFunction} = useAllContext();

  return (
    <footer className="snap_section relative bg-[#1E2329] text-white overflow-hidden pt-[50px] md:pt-[65px] tracking-[-0.03em]">
      <div className="max-w-7xl px-[24px] sm:px-6 lg:px-10 h-full">
        {/* Main Content Grid */}
        <div className="flex justify-between h-full">
          {/* Left Content Column */}
          <div className="flex-1 max-w-2xl py-0 pr-8 flex flex-col justify-between">
            {/* Top Content (Call to Action) */}
            <div>
              <div className="mb-[24px] md:mb-[50px]">
              <h2 className="inline text-[18px] sm:text-[26px] font-helvetica-bold tracking-[0.03em] border border-[#fff] border-x-0 border-t-0 xl:font-bold">
                LOOKING FOR DEEPER INSIGHTS?
              </h2>
              </div>

              <p className="font-lora text-[20px] sm:text-[37px] text-white leading-[142%] tracking-[-0.03em] mb-[35px] md:mb-10">
                We would be glad to partner with your strategy and product team
                to uncover the needs of new markets, validate existing
                assumptions or refine opportunity areas for your current
                customers.
              </p>
              <span
                onClick={toggleContactModalFunction}
                className="flex items-center text-[20px] md:text-[26px] text-[#FFF] transition-colors cursor-pointer tracking-[-0.03em]"
              >
                Start a Conversation
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          {/* Bottom Content (Legal/Copyright) */}

          {/* Right Segmented Bar Column (Absolutely Positioned) */}
          <div className="hidden absolute top-[65px] right-0 h-[664px] w-[100px] md:flex flex-col justify-center items-center">
            {segments.map((segment, index) => (
              <Link
                key={segment.title}
                href={segment.link}
                className={`w-[100px] h-1/4 ${segment.color} fontHelvetica flex items-center justify-center text-xl font-medium text-[#1E2329] transition-all hover:opacity-90 hover:w-[140px]`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {segment.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[67px] md:mt-[267px]">
          <p className="text-[12px] leading-[140%] tracking-[-0.03em] md:text-[14px] text-white mb-[68px] md:mb-[80px] max-w-sm italic">
            Data reflects survey responses with unequal sample sizes by country.
            Results from Nigeria, Benin, and Ghana represent more robust
            samples, while findings from Liberia and Côte d'Ivoire should be
            viewed as exploratory signals.
          </p>
        </div>

      <div className="w-full h-[0.5px] border border-x-0 border-[#fff] border-b-0 mt-0 mb-[60px] block md:hidden"></div>
      </div>

      {/* Logo and Bottom Bar */}
      <div className="fontHelvetica hidden md:flex flex-col md:flex-row justify-between items-end w-full px-10 pt-4">
        <Link href="/voices-of-500-women/">
        <Image src="/Images/logo.svg" width={100} height={27} alt="DODO design africa" className="object-cover object-center" />
      </Link>

        <div className="text-lg text-gray-400">
          <a href="mailto:www.dododesign.africa" className="mr-4 hover:text-white">hello@dododesign.africa</a>
          <a href="https://www.linkedin.com/company/dodo-africa/" className="ml-4 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/dodo.africa?igsh=YzljYTk1ODg3Zg==" className="ml-4 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>

      <div className="fontHelvetica hidden md:flex justify-between items-end w-full px-10 pt-4 pb-[56px]">
        <div className="">
          <a href="https://dododesign.africa/" className="mr-4 fontHelvetica">www.dododesign.africa</a>
        </div>
        <div className="text-lg text-gray-400 fontHelvetica">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="ml-4 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

        {/* Dodo social for mobile */}
      <section className="block md:hidden px-[24px] fontHelvetica">
         <Image src="/Images/logo.png" width={100} height={27} alt="DODO design africa" className="object-cover object-center" />
          <div className="text-[16px] leading-[100%] mt-[16px]">
          <a href="https://dododesign.africa/" className="mr-4 fontHelvetica">www.dododesign.africa</a>
        </div>

        <div className="flex justify-between items-start text-[18px] leading-[120%] mt-[40px] fontHelvetica"> 
          <div className="space-y-[16px]">
             <a href="https://www.linkedin.com/company/dodo-africa/" className="block hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/dodo_africa?t=9SCTuKJqWMIXQh-4TlxZLA&s=09" className="block hover:text-white transition-colors">
            Twitter (X)
          </a>
          </div>

          <div className="space-y-[16px]">
             <a href="https://www.instagram.com/dodo.africa?igsh=YzljYTk1ODg3Zg==" className="block hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://www.facebook.com/dodo.africa" className="block hover:text-white transition-colors">
            Facebook
          </a>
          </div>
        </div>

        <div className="mt-[40px] text-[18px] leading-[120%] tracking-[-3%] fontHelvetica space-y-[16px] mb-[24px] ">
           <a href="mailto:www.dododesign.africa" className="block ">hello@dododesign.africa</a>
           <a href="https://wa.me/234809522113">+234 809 522 1113 (Whatsapp)</a>
        </div>



      </section>
    </footer>
  );
};

export default Footer;
