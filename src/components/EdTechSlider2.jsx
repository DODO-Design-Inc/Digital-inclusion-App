"use client";
import { motion } from "framer-motion";

const headingLinesDesktop = [
    ["LEARNING"],
    ["WITHOUT", "LIMITS"],
];

const headingWordsMobile = ["LEARNING", "WITHOUT", "LIMITS"];

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

const EdTechSlider2 = () => {
    return(
        <section className="tracking-[-0.03em] box-border relative grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] tracking-[-3%] md:min-h-screen w-screen">
            <motion.h3
                className="max-w-[calc(100%-48px)] md:max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-0.03em] text-[#F1EADA]"
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.span className="hidden md:block" variants={linesContainer}>
                    {headingLinesDesktop.map((line, lineIdx) => (
                        <motion.span key={`edtech2-line-${lineIdx}`} className="block" variants={linesContainer}>
                            {line.map((word, wordIdx) => (
                                <motion.span
                                    key={`edtech2-word-${lineIdx}-${wordIdx}`}
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
                            key={`edtech2-mobile-word-${idx}`}
                            className="inline-block mr-3"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h3>
            {/* grid1*/}
            <div className="box-border bg-[#3E2F5B] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[205px] sm:pt-[172px] md:pt-[215px] xl:pt-[305px] 2xl:pt-[364px] pb-[40px] mb:px-[24px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] w-full lg:max-w-[478px] 2xl:max-w-[552px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%] ">
                    <p>
                    While many women have smartphones, high data costs and device limitations still restrict consistent use. 64% of respondents in Nigeria (n=295), 70% in Benin (n=50), 73% in Ghana (n=33) and all respondents in Senegal (n=51) cited excessive data use as a major barrier. 
                    </p>
                    <p>
                    For Edtech, this implies that scaling participation would require platforms that consume less data, remain affordable, and are compatible with the devices women already own.    
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760924369/Edtech2_y25lhp.jpg')] bg-cover bg-center h-full pt-[40px] md:pt-[195px] xl:pt-[270px] 2xl:pt-[314px] pb-[40px] md:pb-[24px] xl:pb-[40px] xl:pb-[110px]">
                {/*Overlay*/}
                <div className="absolute inset-0 bg-gradient-to-b from-[#14003D66] to-[#14003DB2]"></div>

               <div className="font-lora text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[560px] 2xl:max-w-[675px] space-y-[20px] xl:space-y-[34px] text-[20px] xl:text-[27px] 2xl:text-[32px] font-[500] leading-[156%] text-[-0.03em]">
                   <div>
                   <h4 className="font-helvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p className="2xl:max-w-[672px] max-w-[560px]">
                       Could Edtech platforms combine low-data operations on everyday devices, with offline features like downloadable lessons 
                       to ensure women can learn consistently, even when connectivity is unreliable or data is costly?
                    </p>
                    
               </div>

            </div>
            

        </section>
    )
}

export default EdTechSlider2;