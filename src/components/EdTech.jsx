"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import EdTechSlider1 from "./EdTechSlider1";
import EdTechSlider2 from "./EdTechSlider2";
import EdTechSlider3 from "./EdTechSlider3";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const EdTech = () => {
  const sectionRef = useRef(null);
  const titleWords = ["Edtech"];

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
          id: "edTechTrigger",
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
    const st = ScrollTrigger.getById("edTechTrigger");

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
    <section id="edtech">
      <section className="bg-[#D97A06] tracking-[-0.03em] font-inter">
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
                  key={`edtech-word-${idx}`}
                  className="inline-block"
                  variants={titleWord}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%]  max-w-[680px] 2xl:max-w-[830px] tracking-[-0.03em]">
              How Women&#39;s Learning Habits Are Shaping the Next Wave of
              Digital Education in West Africa
            </p>
          </div>
          <div className="my-[40px] max-w-full lg:max-w-[570px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-normal text-[18px] 2xl:text-2xl leading-[150%] tracking-[-0.03em]">
            <p>
              The West African online education market was valued at USD 715.96
              million in 2024 and is projected to reach USD 5,108.24 million by
              2033, growing at a 24.40% CAGR*. A rapidly growing youth
              population and widespread mobile adoption make digital education a
              natural pathway for expanding access to learning.
            </p>
            <p>
              Yet affordability, unreliable infrastructure, and uneven digital
              literacy continue to shape how, when, and where learners can
              engage with technology.
            </p>
            <p>
              The mandate is to design platforms that are both inclusive and
              sustainable, enabled by strong partnerships and scalable
              technology that balance affordability, business viability, and the
              realities of women across the region.
            </p>
            <p className="mt-8 italic underline">*imarcgroup</p>
          </div>
          {/* <h4 className="tracking-[-0.03em] font-lora italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-[#FBC37E] text-[#FBC37E]">
                 Edtech
               </h4> */}
        </div>
      </section>
      <section
        ref={sectionRef}
        className="flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-screen lg:min-h-screen"
      >
        <EdTechSlider1 handleScrollTo={handleScrollTo} />
        <EdTechSlider2 />
        <EdTechSlider3 />
      </section>
    </section>
  );
};

export default EdTech;
