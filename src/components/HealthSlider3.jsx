"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { toast } from "react-toastify";
import DownloadPdf from "./DownloadPdf";

const HealthSlider3 = () => {
    const [industryInsight, setIndustryInsight] = useState(true) 

    const headingLinesDesktop = [
        ["PATIENTS"],
        ["to", "POWERHOUSES"],
    ];
    const headingWordsMobile = ["PATIENTS", "to", "POWERHOUSES"];

    const headingContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const linesContainer = {
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

    return(
        <section className="box-border relative grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] tracking-[-3%] md:min-h-screen lg:min-h-screen w-screen">
            <motion.h3
                className="max-w-[calc(100%-48px)] md:max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-0.03em] text-[#F1EADA]"
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.span className="hidden md:block" variants={linesContainer}>
                    {headingLinesDesktop.map((line, lineIdx) => (
                        <motion.span key={`healthslider3-line-${lineIdx}`} className="block" variants={linesContainer}>
                            {line.map((word, wordIdx) => (
                                <motion.span
                                    key={`healthslider3-word-${lineIdx}-${wordIdx}`}
                                    className="inline-block mr-4 xl:mr-6"
                                    variants={wordVariant}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.span>
                    ))}
                </motion.span>
                <motion.span className="block md:hidden" variants={linesContainer}>
                    {headingWordsMobile.map((word, idx) => (
                        <motion.span
                            key={`healthslider3-mobile-word-${idx}`}
                            className="inline-block mr-3"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h3>
            {/* grid1*/}
            <div className="box-border bg-[#C596FE] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] xl:pt-[305px] 2xl:pt-[384px] pb-[40px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] max-w-full lg:max-w-[479px] 2xl:max-w-[674px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%] tracking-[-0.03em]">
                    <p>
                    45% of respondents in Ghana (n=33) use digital platforms for learning or studying. 
                    This indicates that healthtech solutions may scale faster when framed not just as direct healthcare solutions, but also offering the added value of educating users in a variety of matters that interest them in the context of healthcare.  
                    Additionally, that aligns with women&apos;s existing use of digital tools for learning.
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1761203073/Rectangle_7_zscf1c.png')] bg-cover bg-bottom h-full pt-[40px] md:pt-[150px] xl:pt-[285px] 2xl:pt-[354px] pb-[20px] md:pb-[24px] xl:pb-[40px]">
               <div className="tracking-[-0.03em] font-lora text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[580px] 2xl:max-w-[696px] space-y-[24px] text-[20px] xl:text-[27px] 2xl:text-[32.5px] font-[500] leading-[156%]">
                 <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p>
                      What if healthtech platforms doubled as a learning & empowerment tool, 
                      by embedding educational content e.g., maternal health, wellness and preventive care, 
                      that reflects how women use digital tools to improve their livelihoods?
                    </p>
               </div>

                {/* download section */}
            <div className="px-[24px] z-50 w-full sm:w-[480px] cursor-pointer mt-[20px] sm:mt-0 relative sm:absolute sm:bottom-[20px] lg:bottom-[100px] 2xl:bottom-[100px] sm:right-[24px] xl:right-[40px] 2xl:right-[100px] mb-10 md:mb-0">
               { industryInsight ? 
               <div className="flex w-full md:justify-end gap-[10px] group" onClick={() => setIndustryInsight(false)}>
                <span className="font-[500] text-[16px] 2xl:text-[18px] leading-[125%] text-[#fff]">Get more insights for this industry</span>
                <div className="size-4 relative shrink-0 group-hover:animate-bounce">
                <Image src="/Images/download.png" fill alt="dodo-digital-inclusion"  />
                </div>
                </div>: <DownloadPdf downloadUrl="/pdfs/Healthtech.pdf" downloadFilename="Healthtech.pdf" />
                }
            </div> 
            </div>     
        </section>
    )
}

export default HealthSlider3;