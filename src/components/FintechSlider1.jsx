import Image from "next/image";
const FintechSlider1 = ({handleScrollTo}) => {
    return(
         <section className="font-helvetica tracking-[-0.03em] box-border grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] md:min-h-screen w-screen">
            {/* Grid 1 */}
             <div className="h-full relative">
                {/* layer-1 */}
                <div onClick={() => handleScrollTo(1)} className="cursor-pointer bg-[#D6F6DD] p-[24px] lg:p-[40px] h-full md:h-[55%] 2xl:h-[66%] relative">
                    {/* this arrow only shows on mobile */}
                     <div className="flex md:hidden flex-col justify-end align-bottom cursor-pointer absolute top-[24px] right-[24px]">
                        <div className="relative w-[32px] h-[32px]">
                        <Image src="/Images/black-arrow.png" fill alt="Dodo-digital-inclusion" />
                        </div>
                    </div>
                        {/* end of the mobile arrow */}
                    <div className="flex flex-col md:flex-row items-start justify-start gap-[16px] md:gap-[13px]">
                        <div>
                            <h5 className="font-helvetica-medium text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3.54px]">100%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%] tracking-[-0.03em]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%] tracking-[-0.03em]">Senegal (n=51)</p>
                            </div>
                        </div>
                        <div className="font-[500] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[5px] 2xl:pt-[15px] hidden md:block">+</div>
                        <div>
                            <h5 className="font-helvetica-medium text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3.54px]">70%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%] tracking-[-0.03em]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%] tracking-[-0.03em]">Benin (n=50)</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-[24px] md:absolute md:bottom-[32px] xl:bottom-[40px] md:right-[24px] xl:right-[40px] 2xl:right-[48px] block md:w-[358px] lg:w-[90%]">
                        <div className="w-full flex flex-row justify-between items-end text-[18px] xl:text-[26px] 2xl:text-[26px] leading-[125%]">
                        <p className="w-[264px] lg:w-[323px] 2xl:w-[338px] tracking-[-0.03em]">
                        identified high data cost as a major barrier to sustained use of digital platforms
                        </p>
                            <div className="relative w-[32px] h-[32px] hidden md:flex">
                            <Image src="/Images/black-arrow.png" fill alt="Dodo-digital-inclusion" />
                            </div>
                        </div>
                     </div>
                </div>
                {/* layer 2 */}
                {/* this layer doesn't show on mobile */}
                <div className="box-border hidden md:grid grid-cols-2 md:min-h-[45%] 2xl:min-h-[34%]">
                    <div className="p-[24px] xl:p-[40px] bg-[#DAC4F7]">
                        <p className="text-[28px] leading-[120%] tracking-[-0.03em]">
                        Low cost financial platforms that drive lasting engagement
                        </p>
                        <div className="mt-[43px] xl:mt-[71px] 2xl:mt-[85px] border border-[#BF4142] border-x-0 border-b-0 pt-[10px] xl:pt-[16px] tracking-[-0.03em]">
                        <p className="max-w-[146px] text-[16px]">Revenue potential for fintechs</p>
                        </div>
                    </div>

                    <div className="bg-[#ADECF7] p-[24px] xl:p-[40px]">
                        <section className="flex items-center gap-[14px] xl:gap-[32px]">
                            <div className="space-y-[12px]">
                                <h5 className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium tracking-[-0.03em]">500</h5>
                                <span className="block text-[12px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.03em]">Women</span>
                            </div>
                             <div className="w-[1px] border border-l-0 border-[#BF4142] min-h-[60px] xl:min-h-[80px] shrink-0"></div>
                            <div className="space-y-[12px]">
                                <h5 className="flex items-center leading-[100%]">
                                    <span className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium">8</span>
                                    <div className="text-[8px] pt-[10px] 2xl:pt-[15px] xl:text-[14px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px] tracking-[-0.03em]">West African</div>
                                    </h5>
                                <p className="text-[12px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.03em]">Countries</p>
                            </div>
                        </section>
                        <section className="tracking-[-0.03] text-[12px] xl:text-[18px] 2xl:text-[22px] mt-[40px] xl:mt-[70px] 2xl:mt-[85px] max-w-[280px] 2xl:max-w-[321px] leading-[120%]">
                           Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia · Côte d&#39;Ivoire.
                        </section>
                    </div>
                </div>
                {/* end of this layer that doesn't show on mobile */}
             </div>

             {/* grid 2 */}
             <section className="relative">
                {/* layer 1 */}
                <section onClick={() => handleScrollTo(2)} className="cursor-pointer md:min-h-[26%] p-[24px] md:p-[40px] bg-[#EBD2B3] flex justify-between items-start relative">
                     <div className="flex flex-col md:flex-row items-start md:items-end justify-start gap-[16px] md:gap-[40px]">
                        <div>
                            <h5 className="font-helvetica-medium text-[80px] md:text-[70px] xl:text-[80px] 2xl:text-[96px] leading-[100%] tracking-[-3%]">56%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Benin (n=50)</p>
                            </div>
                        </div>

                        <div className="w-[138px] 2xl:w-[168px] text-[18px] 2xl:text-[18px]">
                        <p>are unemployed or self-employed </p>
                        </div>
                    </div>

                        <div className="absolute bottom-[28px] md:bottom-[40px] 2xl:bottom-[48px] right-[28px] md:right-[40px] 2xl:right-[48px]">
                        <div className="relative w-[32px] h-[32px]">
                            <Image src="/Images/black-arrow.png" fill alt="Dodo-digital-inclusion" />
                        </div>
                        </div>
                </section>
                {/* layer2 */}
                <section className="relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760953410/Frame_11_3_ltb1g5.png')] md:bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760953410/Frame_11_3_ltb1g5.png')] bg-cover bg-center min-h-[420px] md:min-h-[74%]">
                </section>
             </section>

             {/* this layer only appears on mobile */}
             <div className="grid grid-cols-1 md:hidden">
                    <div className="p-[24px] md:p-[40px] bg-[#DAC4F7]">
                        <p className="text-[28px] 2xl:text-[34px] leading-[120%] max-w-[300px] md:w-full tracking-[-0.03em]">
                         Low cost financial platforms that drive lasting engagement
                        </p>

                        <div className="mt-[40px] md:mt-[71px] 2xl:mt-[85px] border border-[#BF4142] border-x-0 border-b-0 pt-[16px]">
                            <p className="max-w-[155px] 2xl:max-w-[170px] leading-[120%] text-[18px] 2xl:text-[20px] tracking-[-0.03em]">Revenue potential for fintechs</p>
                        </div>
                    </div>

                    <div className="bg-[#ADECF7] px-[24px] md:px-[40px] py-[40px]">
                        <section className="flex items-center gap-[32px]">
                            <div className="space-y-[12px]">
                                <h5 className="text-[56px] 2xl:text-[68px]  leading-[100%] font-helvetica-medium tracking-[-0.03em]">500</h5>
                                <span className="block text-[20px] 2xl:text-[24px] tracking-[-0.03em]">Women</span>
                            </div>
                            <div className="w-[1px] border border-[#BF4142] border-l-0 min-h-[80px] shrink-0"></div>

                            <div className="space-y-[12px]">
                                <h5 className="flex items-center leading-[100%]">
                                    <span className="text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium">8</span>
                                    <div className="text-[14px] pt-[10px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px] tracking-[-0.03em]">West African</div>
                                    </h5>
                                <p className="text-[20px] 2xl:text-[24px] tracking-[-0.03em]">Countries</p>
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

export default FintechSlider1;