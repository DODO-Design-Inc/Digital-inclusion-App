"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import EcommSlider1 from "./EcommSlider1";
import EcommSlider2 from "./EcommSlider2";
import EcommSlider3 from "./EcommSlider3";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Ecommerce = () => {
  const sectionRef = useRef(null);
  const titleWords = ["E-commerce"];

  const titleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleWord = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 760px)", () => {
      const section = sectionRef.current;
      const slides = gsap.utils.toArray(section.children);
      const totalSlides = slides.length - 1;

      // ✅ ensure first slide is perfectly aligned
      gsap.set(slides, { xPercent: 0 });

      // ✅ main horizontal scroll animation
      const tl = gsap.to(slides, {
        xPercent: -100 * totalSlides,
        ease: "none",
        scrollTrigger: {
          id: "ecommTrigger",
          trigger: section,
          start: "top top+=1", // 👈 tiny offset to prevent jump
          end: `+=${slides.length * 120}%`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
          markers: false,

          // ✅ smooth snapping
          snap: {
            snapTo: (rawProgress, scrollTrigger) => {
              const totalSlides = scrollTrigger.animation.targets().length - 1;
              const step = 1 / totalSlides;
              const slideIndex = Math.floor(rawProgress / step);
              const progressInSlide = (rawProgress - slideIndex * step) / step;

              const direction = scrollTrigger.direction; // 1 = scrolling down, -1 = scrolling up

              if (direction === 1 && progressInSlide > 0.8) {
                // scroll down: move forward only after 80%
                return (slideIndex + 1) * step;
              }

              if (direction === -1 && progressInSlide < 0.2) {
                // scroll up: move backward only after passing 20% mark in reverse
                return slideIndex * step; // stay until you're past 20%
              }

              // otherwise, remain on current slide
              // return slideIndex * step;
            },
            duration: 1.2,
            ease: "power2.inOut",
          },
        },
      });

      // ✅ cleanup
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        gsap.set(slides, { clearProps: "all" });
      };
    });

    return () => mm.revert();
  }, []);

  const handleScrollTo = (index) => {
    const st = ScrollTrigger.getById("ecommTrigger");

    if (window.innerWidth < 760 || !st) {
      // Mobile fallback → just scroll to the section normally
      const section = sectionRef.current;
      const slides = section?.children;

      if (slides && slides[index]) {
        gsap.to(window, {
          scrollTo: { y: slides[index], offsetY: 80 }, // optional offset
          duration: 1.2,
          ease: "power2.inOut",
        });
      }
      return;
    }

    // Desktop horizontal scroll version
    const scrollStart = st.start;
    const scrollEnd = st.end;
    const slidesCount = 3;
    const targetIndex = index;

    const scrollTo =
      scrollStart +
      (scrollEnd - scrollStart) * (targetIndex / (slidesCount - 1));

    gsap.to(window, {
      scrollTo: scrollTo,
      duration: 1.2,
      ease: "power2.inOut",
    });
  };

  return (
    <section id="ecommerce">
      <section className="bg-[#F2BA0F]">
        <div className="pb-4 text-[#1D2328] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
          <div className="mx-auto pt-[56px] md:pt-[100px] 2xl:pt-[132px] space-y-[10px]">
            <motion.h1
              className="font-[700] text-[56px] md:text-[96px] 2xl:text-[100px] leading-[125%] tracking-[-0.03em]"
              variants={titleContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={`ecommerce-word-${idx}`}
                  className="inline-block"
                  variants={titleWord}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%] xl:max-w-[671px] 2xl:max-w-[737px] tracking-[-0.03em]">
            What Women’s Digital Experiences Tell Us About Trust, Choice, and Opportunity in West Africa’s Digital Marketplaces
            </p>
          </div>
          <div className="my-[40px] max-w-full lg:max-w-[570px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-normal text-[18px] 2xl:text-[22px] leading-[150%] tracking-[-0.03em]">
            <p>
            E-commerce in West Africa is experiencing significant growth. The market size reached USD 216.85 billion in 2024 and is projected to reach USD 1,711.12 billion by 2033, exhibiting a compound annual growth rate (CAGR) of 25.80% during 2025–2033* This expansion is driven by factors such as improved digital connectivity, increased smartphone penetration, and government investment in digital infrastructure.
            </p>
            <p>
            However, this growth coexists with significant challenges as trust remains fragile, with concerns around online scams, product quality, and delivery reliability shaping how people engage with online platforms. The goal would be to balance scale with trust, by creating reliable, transparent, and localized experiences that build long-term confidence in online shopping.
            </p>
            <p className="mt-6 italic underline">
            *Imarcgroup
            </p>
          </div>
          {/* <h4 className="font-lora text-[#664D00] italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-[#664D00] text-[#664D00]">
                 E-commerce
               </h4> */}
        </div>
      </section>
      <section
        ref={sectionRef}
        className="flex flex-col md:flex-row w-[100vw] md:w-[300vw] min-h-screen"
      >
        <EcommSlider1 handleScrollTo={handleScrollTo} />
        <EcommSlider2 />
        <EcommSlider3 />
      </section>
    </section>
  );
};

export default Ecommerce;
