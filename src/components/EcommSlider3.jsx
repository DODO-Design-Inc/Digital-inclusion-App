"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "react-toastify";
import DownloadPdf from "./DownloadPdf";

const EcommSlider3 = () => {
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
        ["SECURITY", "BY"],
        ["SUPPORT"],
    ];
    const headingWordsMobile = ["SECURITY", "BY", "SUPPORT"];

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
                className="max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-0.03em] text-[#F2BA0F]"
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.span className="hidden md:block" variants={linesContainer}>
                    {headingLinesDesktop.map((line, lineIdx) => (
                        <motion.span key={`ecomm3-line-${lineIdx}`} className="block" variants={linesContainer}>
                            {line.map((word, wordIdx) => (
                                <motion.span
                                    key={`ecomm3-word-${lineIdx}-${wordIdx}`}
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
                            key={`ecomm3-mobile-word-${idx}`}
                            className="inline-block mr-3"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h3>
            {/* grid1*/}
            <div className="box-border bg-[#3C1518] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] xl:pt-[285px] 2xl:pt-[384px] pb-[40px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] max-w-full xl:max-w-[493px] 2xl:max-w-[654px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%] tracking-[-0.03em]">
                    <p>
                    50.8% of respondents in Nigeria (n=295), and 51.5% in Ghana (n=33) identified internet scams and harassment as the top barriers to their adoption of digital platforms. 
                    </p>
                    <p>
                    Alongside these risks, respondents also cited poor customer support as a major reason for abandoning platforms. 
                    </p>
                    <p>
                    These experiences fuel the perception that online shopping is unsafe, pushing women back to offline markets they consider more trustworthy.
                    </p>
                    <p>
                    This finding shows that there is an opportunity to strengthen women's trust on digital platforms. 
                    </p>
                </div>
            </div> 
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760917528/Ecommerce3_bpu0if.jpg')] bg-cover bg-center h-full pt-[40px] md:pt-[150px] xl:pt-[235px] 2xl:pt-[355px] pb-[20px] md:pb-[24px] xl:pb-[40px]">
                {/*Overlay*/}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3D000599] to-[#3D0005CC]"></div>

               <div className="font-lora text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[580px] 2xl:max-w-[696px] space-y-[24px] text-[20px] xl:text-[25px] 2xl:text-[30px] font-[500] leading-[156%] tracking-[-0.03em]">
                 <div>
                   <h4 className="font-helvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <div className="max-w-[550px] space-y-6 xl:mt-12 2xl:mt-0">
                    <p>How can you leverage key points in the customer's journey to further cement their trust and remove biases?</p>
                    <p>
                    How can you enhance customer support to counter fears of fraud as women use digital products and platforms. building the trust women need to stay and shop confidently, thereby improving retention on e-commerce platforms?
                    </p>
                    
                    </div>
               </div>

                  {/* download section */}
                <div className="px-[24px] z-50 w-full sm:w-[480px] cursor-pointer mt-[20px] sm:mt-0 relative sm:absolute sm:bottom-[20px] lg:bottom-[100px] xl:bottom-20 2xl:bottom-[80px] sm:right-[24px] xl:right-[40px] 2xl:right-[100px] mb-10 md:mb-0">
                    { industryInsight ? <div className="flex w-full md:justify-end gap-[10px] group" onClick={() => setIndustryInsight(false)}>
                    <span className="font-[500] text-[16px] 2xl:text-[18px] leading-[125%] text-[#fff]">Get more insights for this industry</span>
                    <div className="w-[16px] h-[16px] relative shrink-0 group-hover:animate-bounce">
                    <Image src="/Images/download.png" fill alt="dodo-digital-inclusion"  />
                    </div>
                    </div>: <DownloadPdf downloadUrl="/pdfs/E-commerce.pdf" downloadFilename="E-commerce.pdf"/>
                    }
                </div> 
            </div>
        </section>
    )
}

export default EcommSlider3;