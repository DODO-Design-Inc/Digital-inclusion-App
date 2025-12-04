"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HealthSlider1 from './HealthSlider1';
import HealthSlider2 from './HealthSlider2'
import HealthSlider3 from './HealthSlider3'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Healthcare = () => {
     const sectionRef = useRef(null);
     const titleWords = ["Healthtech"];

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
        id: "productBooster",
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

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      gsap.set(slides, { clearProps: "all" });
    };
  });

  return () => mm.revert();
}, []);

    const handleScrollTo = (index) => {
  const st = ScrollTrigger.getById("productBooster");

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
        <section id="healthtech" className="">
            <section className="bg-[#BF4804]" > 
             <div className="pb-4 text-[#E9EBF5] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
               <div className="mx-auto pt-[56px] md:pt-[100px] 2xl:pt-[132px] space-y-[10px]">
                 <motion.h1
                   className="font-[700] text-[56px] md:text-[96px] 2xl:text-[100px] leading-[125%]"
                   variants={titleContainer}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.6 }}
                 >
                   {titleWords.map((word, idx) => (
                     <motion.span
                       key={`healthtech-word-${idx}`}
                       className="inline-block"
                       variants={titleWord}
                     >
                       {word}
                     </motion.span>
                   ))}
                 </motion.h1>
                 <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%] max-w-[640px] 2xl:max-w-[823px]">
                   What 500 Women&#39;s Experiences Reveal About the Future of Digital Health in West Africa
                 </p>
               </div>
               <div className="my-[40px] max-w-full lg:max-w-[570px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-[500] text-[18px] leading-[150%] 2xl:[22px]-xl 2xl:tracking-tight">
                 <p>
                 In many communities, women still navigate crowded clinics, paper records, and out-of-pocket fees that make accessing health services, and wellness guidance slow, costly, and sometimes out of reach. At the same time, mobile phones and digital tools are reshaping what healthcare access can look like, from messaging a nurse on WhatsApp for advise on symptoms, to following online for nutrition, maternal health, or self-care tutorials, or even learning new skills that support their livelihoods.
                 </p>
                 <p>
                 This creates both urgency and opportunity: how do we expand access to timely, reliable, and affordable healthcare services without overburdening fragile health systems, while creating solutions that women trust and find genuinely valuable? How do we design healthtech to be affordable, efficient, and supportive of women’s daily lives; including their learning, productivity, and side hustles, in the way that helps transform women from passive patients into informed, empowered decision-makers in their own health journeys.
                 </p>
               </div>
               {/* <h4 className="font-lora italic text-[32px] text-[#FFB992] leading-[120%] font-[500] pb-[8px] border-b w-fit border-b-[#FFB992]">
                 Healthtech
               </h4> */}
             </div>
             </section>
            <section ref={sectionRef}  className='flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-[528px] lg:min-h-screen 2xl:min-h-[960px] '>
            <HealthSlider1 handleScrollTo={handleScrollTo} />
            <HealthSlider2 /> 
            <HealthSlider3 />
       </section>
        </section>

    )
}

export default Healthcare;
