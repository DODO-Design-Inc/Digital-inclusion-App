import Link from "next/link";
import Image from "next/image";

const HealthSlider1 = ({handleScrollTo}) => {
    return(
         <section className="font-helvetica tracking-[-0.03em] box-border grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] bg-[#fff] md:min-h-screen lg:min-h-screen w-screen">
            {/* Grid 1 */}
             <div className="h-full relative">
                {/* layer-1 */}
                
                <div className="block bg-[#ff8651] p-[24px] lg:p-[40px] h-full md:h-[52%] 2xl:h-[65%] relative cursor-pointer" onClick={() => handleScrollTo(1)}>
                    {/* this arrow only shows on mobile */}
                    <div className="flex md:hidden flex-col justify-end align-bottom cursor-pointer absolute top-[24px] right-[24px]">
                        <div className="relative w-[32px] h-[32px]">
                        <Image src="/Images/black-arrow.png" fill alt="Dodo-digital-inclusion" />
                        </div>
                    </div>
                        {/* end of the mobile arrow */}
                    <div className="flex flex-col md:flex-row items-start justify-start gap-[16px] md:gap-[13px]">
                        <div>
                            <h5 className="font-helvetica-medium  font-[500] text-[80px] md:text-[70px] xl:text-[118px] 2xl:text-[140px] leading-[100%] tracking-[-3.54px]">38%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[20px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[30px] leading-[120%]">Nigeria (n=295)</p>
                            </div>
                        </div>
                        <div className="font-[500] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[10px] xl:pt-[20px] hidden md:block">+</div>
                        <div>
                            <h5 className="font-helvetica-medium text-[80px] md:text-[70px] xl:text-[118px] 2xl:text-[140px] leading-[100%] tracking-[-3.54px]">49%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[20px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[30px] leading-[120%]">Ghana (n=33)</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-[24px] md:absolute md:bottom-[32px] xl:bottom-[40px] md:left-[24px] xl:left-[40px] 2xl:left-[48px] block md:w-[calc(100%-48px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-96px)]">
                        <div className="w-full flex flex-row justify-between items-end text-[18px] xl:text-[26px] 2xl:text-[32px] leading-[125%]">
                        <p className="w-[264px] lg:w-[423px] 2xl:w-[520.6px]">
                        are unemployed or self-employed which means that digital adoption depends on income security
                        </p>
                         <div className="relative w-[32px] h-[32px] hidden md:flex">
                        <Image src="/Images/black-arrow.png" fill alt="Dodo-digital-inclusion" />
                        </div>
                        </div>
                     </div>
                </div>
                
                {/* layer 2 */}
                {/* this layer doesn't show on mobile */}
                <div className="box-border hidden md:grid grid-cols-2 md:h-[48%] 2xl:h-[35%]">
                    <div className="p-[24px] xl:p-[40px] bg-[#1CC694]">
                        <p className="text-[28px] md:text-[16px] xl:text-[28px] 2xl:text-[34px] leading-[120%]">
                        Affordable, <br/>productive, and<br/> educational solutions
                        </p>

                        <div className="mt-[43px] xl:mt-[71px] 2xl:mt-[85px] border border-[#BF4804] border-x-0 border-b-0 pt-[10px] xl:pt-[16px]">
                            <p className="max-w-[121px] xl:max-w-[135px] 2xl:max-w-[170px] leading-[120%] text-[8px] xl:text-[16px] 2xl:text-[20px]">Untapped value for market growth</p>
                        </div>
                    </div>

                    <div className="bg-[#F8FE89] p-[24px] xl:p-[40px]">
                        <section className="flex items-center gap-[14px] xl:gap-[32px]">
                            <div className="space-y-[12px]">
                                <h5 className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium">500</h5>
                                <span className="block text-[12px] xl:text-[20px] 2xl:text-[24px]">Women</span>
                            </div>
                             <div className="w-[1px] border border-[#BF4804] border-l-0 min-h-[60px] xl:min-h-[80px] shrink-0"></div>
                            <div className="space-y-[12px]">
                                <h5 className="flex items-center">
                                    <span className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium">8</span>
                                    <div className="pt-[10px] 2xl:pt-[15px] text-[8px] leading-[100%] xl:text-[14px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px]">West African</div>
                                </h5>
                                <p className="text-[12px] xl:text-[20px] 2xl:text-[24px]">Countries</p>
                            </div>
                        </section>
                        <section className="text-[12px] xl:text-[18px] 2xl:text-[22px] mt-[40px] xl:mt-[70px] 2xl:mt-[85px] max-w-[270px] 2xl:max-w-[321px] leading-[120%]">
                            Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia · Côte d&#39;Ivoire.
                        </section>
                    </div>
                </div>
                {/* end of this layer that doesn't show on mobile */}
             </div>

             {/* grid 2 */}
             <section className="relative">
                {/* layer 1 */}
                <section className="grid grid-cols-1 md:grid-cols-[40%_60%] md:min-h-[30%]">
                    <div className="flex items-start py-[78px] px-[24px] md:px-[21px] xl:px-[35px] text-[24px] md:text-[14px] xl:text-[24px] 2xl:text-[28px] bg-[#F1EADA]">
                        <p className=" leading-[120%]">Ground insights driving health solutions for women in West Africa.</p>
                    </div>
                    <div onClick={() => handleScrollTo(2)} className="cursor-pointer flex items-start w-full bg-[#C596FE] px-[20px] md:px-[24px] xl:px-[40px] py-[78px] md:py-[24px] 2xl:py-[78px]">
                        <div className="space-y-[11px] w-full">
                        <h5 className="text-[88px] md:text-[48px] xl:text-[88px] 2xl:text-[100px] font-helvetica-medium leading-[100%]">45%</h5>
                        <div className="flex justify-between items-end w-full">
                        <p className="text-[18px] md:text-[12px] xl:text-[18px] 2xl:text-[22px] w-[235px] 2xl:w-[302px] leading-[120%]">Respondents in Ghana use digital platforms for learning or studying.</p>
                         <div className="relative w-[32px] h-[32px]">
                        <Image src="/Images/black-arrow.png" fill alt="Dodo-digital-inclusion" />
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* layer2 */}
                <section className="relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760906999/Healthtech_mobile_in6shz.png')] md:bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760907646/Healthtech_nvnsqj.png')] bg-cover bg-center min-h-[420px] md:min-h-[70%]">
                </section>
             </section>

             {/* this layer only appears on mobile */}
             <div className="grid grid-cols-1 md:hidden">
                    <div className="p-[24px] md:p-[40px] bg-[#1CC694]">
                        <p className="text-[28px] 2xl:text-[34px] leading-[120%] max-w-[300px] md:w-full">
                        Affordable, <br/>productive, and <br/> educational solutions
                        </p>

                        <div className="mt-[40px] md:mt-[71px] 2xl:mt-[85px] border border-[#BF4804] border-x-0 border-b-0 pt-[16px]">
                            <p className="max-w-[135px] 2xl:max-w-[170px] leading-[120%] text-[16px] 2xl:text-[20px]">Untapped value for market growth</p>
                        </div>
                    </div>

                    <div className="bg-[#F8FE89] px-[24px] md:px-[40px] py-[40px]">
                        <section className="flex items-center gap-[32px]">
                            <div className="space-y-[12px]">
                                <h5 className="text-[56px] 2xl:text-[68px]  leading-[100%] font-helvetica-medium">500</h5>
                                <span className="block text-[20px] 2xl:text-[24px]">Women</span>
                            </div>
                            <div className="w-[1px] border-[0.5px] border-[#BF4804] border-l-0 min-h-[80px] shrink-0"></div>

                            <div className="space-y-[12px] leading-[100%]">
                                <h5 className="flex items-center">
                                    <span className="text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium">8</span>
                                    <div className="text-[14px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px] pt-[9px]">West African</div>
                                    </h5>
                                <p className="text-[20px] 2xl:text-[24px]">Countries</p>
                            </div>
                        </section>
                        <section className="text-[18px] 2xl:text-[22px] mt-[40px] md:mt-[70px] 2xl:mt-[85px] max-w-[270px] 2xl:max-w-[321px] leading-[120%]">
                            Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia · Côte d&#39;Ivoire.
                        </section>
                    </div>
                </div>
                {/* end of this layer that appears only on mobile */}
        </section>
    )
}

export default HealthSlider1;