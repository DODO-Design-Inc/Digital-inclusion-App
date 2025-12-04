"use client";
import Image from "next/image";

const EcommSlider1 = ({ handleScrollTo }) => {
  return (
    <section className="font-helvetica tracking-[-0.03em] box-border grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] bg-[#fff] md:min-h-[528px] lg:min-h-screen w-screen">
      {/* Grid 1 */}
      <div className="h-full relative bg-[#000]">
        {/* layer-1 */}
        <div
          onClick={() => handleScrollTo(1)}
          className="cursor-pointer bg-[#29524A] p-[24px] lg:p-[40px] h-full md:h-[60%] 2xl:min-h-[65%] relative"
        >
          {/* this arrow only shows on mobile */}
          <div className="flex md:hidden flex-col justify-end align-bottom cursor-pointer absolute top-[24px] right-[24px]">
            <div className="relative w-[32px] h-[32px]">
              <Image
                src="/Images/white-arrow.svg"
                fill
                alt="Dodo-digital-inclusion"
              />
            </div>
          </div>
          {/* end of the mobile arrow */}
          <div className="flex flex-col md:flex-row items-start justify-start gap-[16px] md:gap-[13px] ">
            <div>
              <h5 className="font-helvetica-medium text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3.54px]">
                84%
              </h5>
              <div className="leading-[120%]">
                <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">
                  Respondents in
                </span>
                <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">
                  Nigeria (n=295)
                </p>
              </div>
            </div>
            <div className="font-[500] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[5px] 2xl:pt-[15px] hidden md:block">
              +
            </div>
            {/* <div className="font-[500] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[10px] hidden md:block">+</div> */}
            <div>
              <h5 className="font-helvetica-medium text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3.54px]">
                86%
              </h5>
              <div className="leading-[120%]">
                <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">
                  Respondents in
                </span>
                <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">
                  Senegal (n=51)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[24px]">
            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3.54px]">
              83%
            </h5>
            <div className="leading-[120%]">
              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">
                Respondents in
              </span>
              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">
                Benin (n=50)
              </p>
            </div>
          </div>

          <div className="relative mt-[24px] md:absolute md:bottom-[32px] xl:bottom-[40px] md:right-[24px] xl:right-[40px] 2xl:right-[48px] block md:w-[358px] 2xl:w-[424px]">
            <div className="w-full flex flex-row justify-between items-end text-[16px] xl:text-[18px] 2xl:text-[24px] leading-[120%] tracking-[-0.03em]">
              <p className="w-[264px] lg:w-[278px] 2xl:w-[338px]">
                rely heavily on family and friends and social media to learn
                about new digital platforms.
              </p>
              <div className="hidden  md:flex">
                <div className="relative w-[32px] h-[32px]">
                  <Image
                    src="/Images/white-arrow.svg"
                    fill
                    alt="Dodo-digital-inclusion"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* layer 2 */}
        {/* this layer doesn't show on mobile */}
        <div className="box-border hidden md:grid grid-cols-2 min-h-[40%] 2xl:min-h-[35%]">
          <div className="p-[24px] xl:p-[40px] bg-[#A44200]">
            <p className="text-[28px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] leading-[120%] tracking-[-0.03em]">
              Social credibility and community trust may outperform paid
              advertising, in markets where brand loyalty is low.
            </p>
            <div className="mt-[43px] xl:mt-[71px] 2xl:mt-[85px] border border-[#F2BA0F] border-x-0 border-b-0 pt-[10px] xl:pt-[16px]"></div>
          </div>

          <div className="bg-[#866500] p-[24px] xl:p-[40px]">
            <section className="flex items-center gap-[14px] xl:gap-[32px]">
              <div className="space-y-[12px]">
                <h5 className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-[500] tracking-[-0.03em]">
                  500
                </h5>
                <span className="block text-[12px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.03em]">
                  Women
                </span>
              </div>
              <div className="w-[1px] border border-[#F2BA0F] border-l-0 min-h-[60px] xl:min-h-[80px] shrink-0"></div>
              <div className="space-y-[12px] leading-[100%]">
                <h5 className="flex items-center">
                  <span className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-[500]">
                    8
                  </span>
                  <div className="text-[8px] pt-[10px] 2xl:pt-[15px] xl:text-[14px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px]">
                    West African
                  </div>
                </h5>
                <p className="text-[12px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.03em]">
                  Countries
                </p>
              </div>
            </section>
            <section className="text-[12px] xl:text-[18px] 2xl:text-[22px] mt-[40px] xl:mt-[50px] 2xl:mt-[85px] max-w-[270px] 2xl:max-w-[321px] leading-[120%] tracking-[-0.03em]">
              Insights into how women across West Africa discover, trust, and
              adopt e-commerce platforms.
            </section>
          </div>
        </div>
        {/* end of this layer that doesn't show on mobile */}
      </div>

      {/* grid 2 */}
      <section className="relative">
        {/* layer 1 */}
        <section
          onClick={() => handleScrollTo(2)}
          className="cursor-pointer 2xl:min-h-[294px] p-5 xl:px-8 bg-[#3C1518] md:flex md:justify-center gap-4 2xl:justify-between items-end lg:items-center xl:gap-4"
        >
          <div className="flex flex-col md:flex-row items-start justify-start my-auto gap-[16px] md:gap-[13px]">
            <div>
              <h5 className="font-helvetical-medium text-[80px] md:text-[48px] xl:text-[80px] 2xl:text-[96px] leading-[100%] tracking-[-3.54px]">
                51%
              </h5>
              <div className="leading-[120%]">
                <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%] tracking-[-0.03em]">
                  Respondents in
                </span>
                <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%] tracking-[-0.03em]">
                  Nigeria (n=295)
                </p>
              </div>
            </div>
            <div className="font-[500] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[5px] 2xl:pt-[15px] hidden md:block">
              +
            </div>
            <div>
              <h5 className="font-helvetical-medium text-[80px] md:text-[48px] xl:text-[80px] 2xl:text-[96px] leading-[100%] tracking-[-3.54px]">
                51%
              </h5>
              <div className="leading-[120%]">
                <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%] tracking-[-0.03em]">
                  Respondents in
                </span>
                <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%] tracking-[-0.03em]">
                  Ghana (n=33)
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[240px] xl:w-[250px] text-[12px] 2xl:text-[18px] max-h-32 mt-6 md:mt-0">
            <p className="text-[16px] xl:text-[18px] 2xl:text-[24px] leading-[120%] tracking-[-0.03em] w-[240px] md:w-full ">
              Identified scams and harassment as the top barriers to their
              adoption of digital platforms.
            </p>
            <div className="w-full flex justify-end mt-3">
              <div className="relative size-8 -mt-10 md:mt-0 md:size-5 xl:size-8">
                <Image
                  src="/Images/white-arrow.svg"
                  fill
                  alt="Dodo-digital-inclusion"
                />
              </div>
            </div>
          </div>
        </section>
        {/* layer2 */}
        <section className="relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760915227/Frame_11_1_kwda7r.png')] md:bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760915227/Frame_11_1_kwda7r.png')] bg-cover bg-center min-h-[420px] md:min-h-[690px] "></section>
      </section>

      {/* this layer only appears on mobile */}
      <div className="grid grid-cols-1 md:hidden">
        <div className="p-[24px] md:p-[40px] bg-[#A44200]">
          <p className="tracking-[-0.03em] text-[28px] 2xl:text-[34px] leading-[120%] max-w-[300px] md:w-full">
            Social credibility and community trust may outperform paid
            advertising, in markets where brand loyalty is low.
          </p>
          <div className="mt-[40px] xl:mt-[71px] 2xl:mt-[85px] border border-[#F2BA0F] border-x-0 border-b-0 pt-[10px] xl:pt-[16px]"></div>
        </div>

        <div className="bg-[#866500] px-[24px] md:px-[40px] py-[40px]">
          <section className="flex items-center gap-[32px]">
            <div className="space-y-[12px]">
              <h5 className="text-[56px] 2xl:text-[68px]  leading-[100%] font-helvetica-medium tracking-[-0.03em]">
                500
              </h5>
              <span className="block text-[20px] 2xl:text-[24px] tracking-[-0.03em]">
                Women
              </span>
            </div>
            <div className="w-[1px] border border-[#F2BA0F] border-l-0 min-h-[80px] shrink-0"></div>
            <div className="space-y-[12px] leading-[100%]">
              <h5 className="flex items-center">
                <span className="text-[56px] 2xl:text-[68px] leading-[100%] font-helvetica-medium">
                  8
                </span>
                <div className="text-[14px] pt-[9px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px] tracking-[-0.03em]">
                  West African
                </div>
              </h5>
              <p className="text-[20px] 2xl:text-[24px] tracking-[-0.03em]">
                Countries
              </p>
            </div>
          </section>
          <section className="text-[18px] 2xl:text-[22px] mt-[40px] md:mt-[70px] 2xl:mt-[85px] max-w-[270px] 2xl:max-w-[321px] leading-[120%] tracking-[-0.03em]">
            Insights into how women across West Africa discover, trust, and
            adopt e-commerce platforms.
          </section>
        </div>
      </div>
      {/* end of this layer that appears only on mobile */}
    </section>
  );
};

export default EcommSlider1;
