"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FintechSlider1 from './FintechSlider1';
import FintechSlider2 from './FintechSlider2'
import FintechSlider3 from './FintechSlider3'

gsap.registerPlugin(ScrollTrigger);

const FinTech = () => {
     const sectionRef = useRef(null);
     const titleWords = ["Fintech"];

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
        id: "fintechTrigger",
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
  const st = ScrollTrigger.getById("fintechTrigger");

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
    scrollStart + (scrollEnd - scrollStart) * (targetIndex / (slidesCount - 1));

  gsap.to(window, {
    scrollTo: scrollTo,
    duration: 1.2,
    ease: "power2.inOut",
  });
};

    return(
        <section id="fintech">
            <section className="bg-[#BF4142] font-inter" > 
             <div className="pb-4 text-[#E9EBF5] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
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
                       key={`fintech-word-${idx}`}
                       className="inline-block"
                       variants={titleWord}
                     >
                       {word}
                     </motion.span>
                   ))}
                 </motion.h1>
                 <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%]  max-w-[680px] 2xl:max-w-[816px] tracking-[-0.03em]">
                  What Women&#39;s Financial Journeys Reveal About the Opportunities and Gaps in Digital Finance Across West Africa
                 </p>
               </div>
               <div className="my-[40px] max-w-full lg:max-w-[583px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-normal text-[20px] 2xl:text-2xl leading-[150%] tracking-[-0.03em]">
                 <p>
                 Fintech in West Africa is experiencing rapid growth, driven by mobile adoption and the increasing demand for accessible financial services. However, significant barriers persist for women as only 37% of women in sub-Saharan Africa have a bank account, compared to 48% of men, and 70% of women-owned businesses report inadequate access to growth capital IMF+1.  These challenges are compounded by limited digital literacy and reliance on informal financial systems. 
                  </p>
                  <p>
                  The opportunity is enormous: digital finance can bridge gaps for women, low-income households, and women-owned businesses who are underserved by traditional banking.
                  </p>
                  <p>
                  For fintech leaders, the mandate goes beyond digitizing payments. It includes delivering accessible, affordable, and trusted services that expand inclusion while driving sustainable revenue.
                 </p>
                 <p className="italic underline mt-8">*IMF+1</p>
               </div>
               {/* <h4 className="font-lora italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-[#ECC6C6] text-[#ECC6C6] tracking-[-0.03em]">
                 Fintech
               </h4> */}
             </div>
             </section>
            <section ref={sectionRef}  className='flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-screen'>
            <FintechSlider1 handleScrollTo={handleScrollTo} />
            <FintechSlider2 /> 
            <FintechSlider3 />
       </section>
        </section>

       
    )
}

export default FinTech;
