"use client";
import { motion } from "framer-motion";

const headingLinesDesktop = [
    ["CONVERSATIONS"],
    ["THAT", "CONVERT"],
];

const headingWordsMobile = ["CONVERSATIONS", "THAT", "CONVERT"];

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

const EcommSlider2 = () => {
    return(
        <section className="tracking-[-0.03em] box-border relative grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] tracking-[-3%] md:h-screen w-screen">
            <motion.h3
                className="max-w-[calc(100%-48px)] md:max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[38px] text-[40px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-0.03em] text-[#F2BA0F]"
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.span className="hidden md:block" variants={linesContainer}>
                    {headingLinesDesktop.map((line, lineIdx) => (
                        <motion.span key={`ecomm2-line-${lineIdx}`} className="block" variants={linesContainer}>
                            {line.map((word, wordIdx) => (
                                <motion.span
                                    key={`ecomm2-word-${lineIdx}-${wordIdx}`}
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
                            key={`ecomm2-mobile-word-${idx}`}
                            className="inline-block mr-3"
                            variants={wordVariant}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h3>
            {/* grid1*/}
            <div className="box-border bg-[#29524A] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] md:pt-[175px] xl:pt-[305px] 2xl:pt-[364px] pb-[40px] mb:px-[24px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] w-full xl:max-w-[488] 2xl:max-w-[701px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%] tracking-[-0.03em]">
                    <p>
                    Our survey uncovered the principle of Social proof, highlighting family and friends and social media to be the strongest drivers of digital platforms for women, with 84.4% of respondents in Nigeria (n=295), 85.7% in Senegal (n=51) and 83.3% in Benin (n=50) relying heavily on these channels. 
                    </p>
                    <p>
                    Similar trends exist in smaller sample sizes with about 98% of respondents in Togo, Sierra Leone and Liberia relying on family and friends, meanwhile in Ghana, the medium of Radio and TV remain important to 72.7% of respondents (n=33), in the area of learning about new digital platforms. 
                    </p>
                    <p>
                    This demonstrates that e-commerce adoption may grow faster when platforms position discovery around trusted word-of-mouth networks.
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760915026/Ecommerce2_tyr8oj.jpg')] bg-cover bg-center h-full pt-[40px] md:pt-[150px] xl:pt-[270px] 2xl:pt-[314px] pb-[40px] md:pb-[24px] xl:pb-[110px]">
                {/*Overlay*/}
              <div className="absolute inset-0 bg-gradient-to-b from-[#003D3199] to-[#003D31CC]"></div>

               <div className="font-lora text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[560px] 2xl:max-w-[675px] space-y-[20px] xl:space-y-[34px] text-[20px] xl:text-[27px] 2xl:text-[32px] font-[500] leading-[156%] tracking-[-0.03em]">
                   <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p className="max-w-[550px]">
                    Instead of standard referral programs or mass-media ads, how might we leverage family conversations and social sharing as the primary engine of discovery, while using mass media to widen the circle of those conversations to amplify reach?
                    </p>
                    {/* <p>
                    What if digital health solutions were framed as productivity and income enablers, helping women with irregular income, supporting side hustles, and protecting their ability to earn while still scaling effectively for clinics and providers?
                    </p> */}
                    
               </div>

            </div>
            

        </section>
    )
}

export default EcommSlider2;