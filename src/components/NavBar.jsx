"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useAllContext } from "@/context/allContext";

export default function NavBar() {
  const { toggleContactModalFunction } = useAllContext();
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!navRef.current) return;

      setShowSideBar(false);

      // Scroll down → hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      }
      // Scroll up → show navbar
      else {
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[500] bg-[#1E232933] backdrop-blur-[20px] transition-transform duration-300 tracking-[-0.03em]"
    >
      <nav className="relative py-[30px] md:py-[10px] flex justify-between items-center max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
        <Link href="/">
          <Image
            src="/Images/logo.svg"
            width={71}
            height={20}
            alt="DODO design africa"
            className="object-cover object-center"
          />
        </Link>

        <div className="flex justify-between gap-[40px] text-[#E9EBF5] text-[16px] font-[600] leading-[125%] ">
          <span
            onClick={toggleContactModalFunction}
            className="cursor-pointer font-inter"
          >
            Contact us
          </span>
          <span
            className="cursor-pointer font-inter"
            onClick={() => setShowSideBar((prev) => !prev)}
          >
            Menu
          </span>
        </div>

        {/* Side bar */}
        <nav
          className={`${
            showSideBar ? "block" : "hidden"
          } font-inter md:w-[220px] font-[400] absolute top-[100%] right-[24px] md:right-[40px] 2xl:right-0  text-[#E9EBF5]/40 text-[16px] leading-[125%] tracking-[-0.48px]`}
        >
          <div className="w-full h-full  space-y-[20px] py-[24px] px-[16px] bg-[#1D2328] mt-[8px]">
            <Link
              href="#home"
              className={`flex justify-end gap-[12px] items-center ${
                activeSection == "home" ? "font-[600] text-[#E9EBF5]" : ""
              }`}
            >
              <span>Back to Home</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>

            <Link
              href="#healthtech"
              className={`flex justify-end gap-[12px] items-center ${
                activeSection == "healthtech"
                  ? "font-[600] text-[#E9EBF5]/100"
                  : ""
              }`}
            >
              <span>Healthtech</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>

            <Link
              href="#ecommerce"
              className={`flex justify-end gap-[12px] items-center ${
                activeSection == "ecommerce"
                  ? "font-[600] text-[#E9EBF5]/100"
                  : ""
              }`}
            >
              <span>Ecommerce</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>

            <Link
              href="#edtech"
              className={`flex justify-end gap-[12px] items-center ${
                activeSection == "edtech" ? "font-[600] text-[#E9EBF5]/100" : ""
              }`}
            >
              <span>Edtech</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>

            <Link
              href="#fintech"
              className={`block flex justify-end gap-[12px] items-center ${
                activeSection == "fintech"
                  ? "font-[600] text-[#E9EBF5]/100"
                  : ""
              }`}
            >
              <span>Fintech</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
        </nav>
      </nav>
    </div>
  );
}
