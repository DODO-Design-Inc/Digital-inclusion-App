"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "react-toastify";
import DownloadPdf from "./DownloadPdf";

const EdTechSlider3 = () => {
    const [industryInsight, setIndustryInsight] = useState(true)
    const [downloaded, setDownloaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [downloadEmail, setDownloadEmail] = useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onChangeDownloadEmail = (e) => {
        setDownloaded(false);
        setDownloadEmail(e.target.value)
    }

    const headingLinesDesktop = [
        ["PATHWAYS", "TO"],
        ["LIVELIHOOD"],
    ];
    const headingWordsMobile = ["PATHWAYS", "TO", "LIVELIHOOD"];

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

    const onClickDownload = (e) => {
        e.preventDefault();
        setLoading(true)
        if(!downloadEmail){
            setLoading(false)
            //  toast.error("please, add your email")
        }
         else if(!emailRegex.test(downloadEmail)){
            setLoading(false)
            //   toast.error("invalid email")
        }
        else{
            setLoading(false)
            //Trigger file download from /public
            const link = document.createElement("a");
            link.href = "/pdfs/common-mistakes-in-african-fintech-and-how-to-prevent-them.pdf";
            link.download = "common-mistakes-in-african-fintech-and-how-to-prevent-them.pdf";
            document.body.appendChild(link);
            link.click();
            link.remove();
            setDownloadEmail("")
            // toast.success("Email sent, Dowlonding")
            setDownloaded(true)
        }
        
    } 
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
                        <motion.span key={`edtech3-line-${lineIdx}`} className="block" variants={linesContainer}>
                            {line.map((word, wordIdx) => (
                                <motion.span
                                    key={`edtech3-word-${lineIdx}-${wordIdx}`}
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
                            key={`edtech3-mobile-word-${idx}`}
                            className="inline-block mr-3"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h3>
            {/* <h3 className="block sm:hidden max-w-[calc(100%-48px)] md:max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] font-[800] leading-[100%] uppercase tracking-[-0.03em] text-[#F1EADA]">
                PATHWAYS TO<br/> LIVELIHOOD
            </h3> */}
            {/* grid1*/}
            <div className="box-border bg-[#000F07] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] xl:pt-[305px] 2xl:pt-[384px] pb-[40px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] max-w-full lg:max-w-[540px] 2xl:max-w-[540px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%] tracking-[-0.03em]">
                    <p>
                    In Ghana, (n=33), 45% of respondents use smartphones for education or job search, revealing that digital tools are significantly becoming a part of how women grow their skills and explore new income opportunities. 
                    </p>
                    <p>
                    Edtech can leverage this by connecting direct learning to real-world career and income generating outcomes, not just certificates.
                    </p>
                    <p>
                    Though the sample size was smaller, trends show that women in Liberia also use digital tools for learning.             
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760925020/Edtech3_ywcafk.jpg')] bg-cover bg-center h-full pt-[40px] sm:pt-[40px] md:pt-[150px] xl:pt-[285px] 2xl:pt-[354px] pb-[20px] xl:pb-[40px] md:pb-[110px]">
                {/*Overlay*/}
              <div className="absolute inset-0 bg-gradient-to-b from-[#000000B2] to-[#000000B2]"></div>


               <div className="font-lora text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[450px] 2xl:max-w-[696px] space-y-[24px] text-[20px] xl:text-[27px] 2xl:text-[32.5px] font-[500] leading-[156%] tracking-[-0.03em]">
                 <div>
                   <h4 className="font-helvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p className="max-w-[560px] 2xl:max-w-[672px]">
                    What would it take for edtech certificates to carry true market value? What additional elements of value can be added, 
                    to successfully engage women who are seeking to expand their knowledge and grow their careers? 
                    </p>
               </div>

                {/* download section */}
                <div className="px-[24px] sm:px-0 w-full sm:w-[480px] cursor-pointer  mb-10 md:mb-0 mt-[20px] sm:mt-0 relative sm:absolute sm:bottom-[20px] lg:bottom-[100px] xl:bottom-20 2xl:bottom-[80px] sm:right-[24px] xl:right-[40px] 2xl:right-[100px]">
                    { industryInsight ? <div className="flex w-full md:justify-end gap-[10px] group" onClick={() => setIndustryInsight(false)}>
                    <span className="font-[500] text-[16px] 2xl:text-[18px] leading-[125%] text-[#fff]">Get more insights for this industry</span>
                    <div className="w-[16px] h-[16px] relative shrink-0 group-hover:animate-bounce">
                    <Image src="/Images/download.png" fill alt="dodo-digital-inclusion"  />
                    </div>
                    </div>: <DownloadPdf downloadUrl="/pdfs/Edtech.pdf" downloadFilename="Edtech.pdf" />
                    }
                </div> 
            </div>
           
        </section>
    )
}

export default EdTechSlider3;