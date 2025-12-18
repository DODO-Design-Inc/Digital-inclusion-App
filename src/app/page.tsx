"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Ecomm from "@/components/Ecomm";
import EdTech from "@/components/EdTech";
import FinTech from "@/components/Fintech";
import Link from "next/link";
import HealthTech from "@/components/HealthTech";
import ContactModal from "@/components/ContactModal";
import { useAllContext } from "@/context/allContext";
import { ToastContainer } from "react-toastify";
import SnapResistSection from "@/components/SnapResistSection";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const { toggleContactModal = false, toggleContactModalFunction = () => {} } =
    useAllContext() as {
      toggleContactModal?: boolean;
      toggleContactModalFunction?: () => void;
    };

  const headingLines = [
    ["Voices", "of"],
    ["500", "Women"],
  ];

  const headingContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const lineContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".snap_section");
    let isSnapping = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (location.hash) return;
      if (isSnapping) return;

      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section as HTMLElement;
        }
      });

      // Snap when the closest section’s top is within ~100px from viewport top
      if (
        closestSection &&
        Math.abs((closestSection as HTMLElement).getBoundingClientRect().top) <
          100
      ) {
        isSnapping = true;

        const scrollY =
          window.scrollY +
          (closestSection as HTMLElement).getBoundingClientRect().top;

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });

        // Cooldown to prevent repeated triggers during the smooth scroll
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          isSnapping = false;
        }, 700); // slightly longer than scroll duration
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="font-inter min-h-screen bg-[#1E2329] pt-30 leading-[125%] font-normal overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // or "light"
      />
      <section
        id="home"
        className="snap_section text-[#E9EBF5] max-w-[1536px] mx-auto px-6 md:px-10 2xl:px-0"
      >
        <div className="mx-auto space-y-3.5">
          <motion.h1
            className="font-bold text-[56px] md:text-[96px] tracking-[-0.03em] leading-[125%] max-h-96"
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {headingLines.map((line, lineIdx) => (
              <motion.span
                key={`line-${lineIdx}`}
                className="block"
                variants={lineContainer}
              >
                {line.map((word, wordIdx) => (
                  <motion.span
                    key={`word-${lineIdx}-${wordIdx}`}
                    className="inline-block mr-4 md:mr-6"
                    variants={wordVariant as any}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-[24px] md:text-[32px] max-w-[737px] leading-[125%] tracking-[-0.03em]">
            What 500 Women across West Africa Revealed on Digital Adoption
            Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="my-10 2xl:my-14 w-full lg:max-w-[570px] lg:ml-auto space-y-5 font-medium text-[18px] 2xl:text-[20px] leading-[150%] tracking-[-3%]">
          <p>
            Over the past few months, DODO's research team engaged 500 women
            across 8 West African countries of Nigeria, Ghana, Togo, Benin,
            Senegal, Sierra Leone, Liberia, and Côte d&apos;Ivoire. Findings
            revealed digital adoption patterns, behaviours and drivers,
            providing actionable insights to inform strategic decisions and
            business growth.
          </p>
          <p>
            Insights emerged across the healthtech, e-commerce, edtech and
            fintech industries that highlight untapped consumer behaviours,
            market opportunities, and innovation pathways, that will inform
            business strategy and investment decisions across these sectors.
          </p>
        </div>
      </section>

      <section className="snap_section font-helvetica flex flex-col md:flex-row w-full gap-0 md:h-[300px] lg:h-[429px] text-[#1D2328] text-[32px] xl:text-[48px] tracking-[-0.96px] xl:tracking-[-1.44px] leading-[150%] font-medium">
        <Link
          href="#healthtech"
          className="group flex items-center justify-center md:block h-[140px] md:h-full bg-[#BF4804] pt-0 md:pt-[100px] text-center w-full md:w-1/4"
        >
          <span className="font-helvetica-semi_medium">Healthtech</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-5 w-5">
            <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
          <div className="hidden md:group-hover:block text-[24px]  leading-[120%] tracking-[-0.72px] text-[#1D2328] mt-40">
            View Insights
          </div>
        </Link>
        <Link
          href="#ecommerce"
          className="group bg-[#F2BA0F] flex items-center justify-center md:block h-[140px] md:h-full pt-0 md:pt-[100px] text-center w-full md:w-1/4"
        >
          <span className="font-helvetica-semi_medium">E-commerce</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-5 w-5">
            <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
          <div className="hidden md:group-hover:block text-[24px]  leading-[120%] tracking-[-0.72px] text-[#1D2328] mt-40">
            View Insights
          </div>
        </Link>
        <Link
          href="#edtech"
          className="group bg-[#D97A06] flex items-center justify-center md:block h-[140px] md:h-full pt-0 md:pt-[100px] text-center w-full md:w-1/4"
        >
          <span className="font-helvetica-semi_medium">Edtech</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-5 w-5">
            <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
          <div className="hidden md:group-hover:block text-[24px]  leading-[120%] tracking-[-0.72px] text-[#1D2328] mt-40">
            View Insights
          </div>
        </Link>
        <Link
          href="#fintech"
          className="group bg-[#BF4142] flex items-center justify-center md:block h-[140px] md:h-full pt-0 md:pt-[100px] text-center w-full md:w-1/4"
        >
          <span className="font-helvetica-semi_medium">Fintech</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-5 w-5">
            <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
          <div className="hidden md:group-hover:block text-[24px]  leading-[120%] tracking-[-0.72px] text-[#1D2328] mt-40">
            View Insights
          </div>
        </Link>
      </section>

      {/* <SnapResistSection> */}
      <HealthTech />
      {/* </SnapResistSection> */}
      {/* <SnapResistSection> */}
      <Ecomm />
      {/* </SnapResistSection> */}
      {/* <SnapResistSection> */}
      <EdTech />
      {/* </SnapResistSection> */}
      {/* <SnapResistSection> */}
      <FinTech />
      {/* </SnapResistSection> */}

      <ContactModal
        isOpen={toggleContactModal}
        onClose={toggleContactModalFunction}
      />
    </main>
  );
}
