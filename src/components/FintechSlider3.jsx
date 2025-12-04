"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
//import { toast } from "react-toastify";
import DownloadPdf from "./DownloadPdf";

const FintechSlider3 = () => {
    const [industryInsight, setIndustryInsight] = useState(true)
    const [downloaded, setDownloaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [downloadEmail, setDownloadEmail] = useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const headingLinesDesktop = [
        ["SEAMLESS"],
        ["FINANCE"],
    ];
    const headingWordsMobile = ["SEAMLESS", "FINANCE"];

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

    const onChangeDownloadEmail = (e) => {
        setDownloaded(false);
        setDownloadEmail(e.target.value)
    }

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
        <section className="relative grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] tracking-[-0.03em] md:min-h-screen overflow-y-hidden w-screen">
            <motion.h3
                className="absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-0.03em] text-[#BF4142]"
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.span className="hidden md:block" variants={linesContainer}>
                    {headingLinesDesktop.map((line, lineIdx) => (
                        <motion.span key={`fintech3-line-${lineIdx}`} className="block" variants={linesContainer}>
                            {line.map((word, wordIdx) => (
                                <motion.span
                                    key={`fintech3-word-${lineIdx}-${wordIdx}`}
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
                            key={`fintech3-mobile-word-${idx}`}
                            className="inline-block mr-3"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h3>
            {/* grid1*/}
            <div className="box-border bg-[#EBD2B3] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] md:pt-[215px] xl:pt-[305px] 2xl:pt-[364px] pb-[40px] mb:px-[24px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] w-full lg:max-w-[512px] 2xl:max-w-[620px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%] tracking-[-0.03em]">
                    <p>
                    Findings from our survey revealed a strong opportunity and need for financial services to tailor offerings to answer to the needs of women who are building their own businesses or actively seeking employment. 
                    </p>
                    <p>
                    38% of the 295 Nigerian women reported being unemployed or self-employed, along with slightly half of the respondents surveyed in Benin (56%, n=50).
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760954691/Fintech3_xroxwc.jpg')] bg-center bg-cover h-full pt-[40px] md:pt-[185px] xl:pt-[164px] 2xl:pt-[324px] pb-[20px] md:pb-[24px] xl:pb-[110px]">
                {/*Overlay*/}
               <div className="absolute inset-0 bg-gradient-to-b from-[#3D2200CC] to-[#3D2200CC]"></div>

               <div className="font-lora text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[560px] 2xl:max-w-[675px] space-y-[20px] xl:space-y-[34px] text-[20px] xl:text-[27px] 2xl:text-[32px] font-[500] leading-[156%] tracking-[-0.03em]">
                   <div>
                   <h4 className="font-helvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p className="xl:mt-32 2xl:mt-0">
                     Can financial services, in their search for new revenue streams, develop offerings, 
                     through partnerships or other models, in the areas of career advancement and business growth, that women can benefit from?
                    </p>
               </div>

                {/* download section */}
                <div className="px-[24px] sm:px-0 w-full sm:w-[480px] cursor-pointer mt-[20px] sm:mt-0 relative sm:absolute sm:bottom-[20px] lg:bottom-[100px] xl:bottom-20 2xl:bottom-[80px] sm:right-[24px] xl:right-[40px] 2xl:right-[100px] mb-10 md:mb-0">
                    { industryInsight ? <div className="flex w-full md:justify-end gap-[10px] group" onClick={() => setIndustryInsight(false)}>
                    <span className="font-[500] text-[16px] 2xl:text-[18px] leading-[125%] text-[#fff]">Get more insights for this industry</span>
                    <div className="w-[16px] h-[16px] relative shrink-0 group-hover:animate-bounce">
                    <Image src="/Images/download.png" fill alt="dodo-digital-inclusion"  />
                    </div>
                    </div>: <DownloadPdf downloadUrl="/pdfs/Fintech.pdf" downloadFilename="Fintech.pdf" />
                    }
                </div> 
            </div>
        </section>
    )
}

export default FintechSlider3;