import React from "react";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import Banner from "@/app/project_details/Image/banner.png";
import android from "@/app/project_details/Image/android.png";
import laptop from "@/app/project_details/Image/laptop.png";
import Project1 from "./Project1";

const page = () => {
  return (
    <>
      <section className="bg-[#FFE9D9] pt-[100px] md:pt-[100px]">
        <div className="container">
          <div className="max-w-[1075px] mx-auto pb-[200px] md:pb-[354px] relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
              <div>
                <div className="flex md:flex-row justify-center md:justify-start items-center gap-3 text-[14px] pt-6 pb-3">
                  <span className="flex items-center text-[#080808CC] gap-1">
                    <BsDot />
                    <p>UI Design</p>
                  </span>
                  <span className="flex font-bold items-center text-[#FF9330] gap-1">
                    <BsDot />
                    <p>03 May 2019</p>
                  </span>
                </div>
                <h1 className="text-[28px] sm:text-[32px] md:text-[44px] font-syne font-bold leading-[38px] sm:leading-[46px] md:leading-[54px]">
                  Mendero fintech dashboard design
                </h1>
              </div>

              <div className="px-4 md:pr-[34px] flex justify-between md:flex-col">
                <div className="flex flex-col md:flex-row gap-6 pb-6 items-center md:items-start">
                  <div className="w-[148px]">
                    <p className="pb-2 text-[14px] text-[#080808CC]">Client</p>
                    <p className="text-[15px] font-bold font-sans">Mashorom</p>
                  </div>
                  <div className="w-[148px]">
                    <p className="pb-2 text-[14px] text-[#080808CC]">Category</p>
                    <p className="text-[15px] font-bold font-sans">User Experience</p>
                  </div>
                  <div className="w-[148px]">
                    <p className="pb-2 text-[14px] text-[#080808CC]">Tools</p>
                    <p className="text-[15px] font-bold font-sans">Figma, Webflow</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-[142px]">
                    <p className="pb-2 text-[14px] text-[#080808CC]">Start date</p>
                    <p className="text-[15px] font-bold font-sans">09/01/ 2020</p>
                  </div>
                  <div className="w-[148px]">
                    <p className="pb-2 text-[14px] text-[#080808CC]">End date</p>
                    <p className="text-[15px] font-bold font-sans">09/01/ 2020</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] w-[90%] md:left-0 md:translate-x-0 md:w-auto">
              <Image className="rounded-2xl w-full" src={Banner} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffff] pt-[200px] md:pt-[322px]">
        <div className="container">
          <div className="max-w-[1075px] mx-auto text-center md:text-left">
            <div>
              <h2 className="text-[28px] md:text-[32px] pb-4 font-bold font-syne">Overview</h2>

              <p className="text-[#08080899] text-[16px] md:text-[18px] leading-7 pb-[30px] md:pb-[40px] font-sans">
                Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
              </p>

              <p className="text-[#08080899] text-[16px] md:text-[18px] leading-7 pb-[30px] md:pb-[40px] font-sans">
                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
              </p>

              <ul className="custom-square list-inside text-[#080808CC] font-syne font-bold text-left md:text-left inline-block">
                <li>Advantage</li>
                <li>Accomplished</li>
                <li>Marketplace startups</li>
                <li>SaaS startups</li>
              </ul>
            </div>

            <div className="pt-12">
              <h2 className="text-[28px] md:text-[32px] font-bold font-syne">Typography</h2>
              <p className="text-[16px] md:text-[18px] text-[#08080899] leading-7 pb-8 md:pb-12 font-sans">
                The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierarchy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 pb-12">
                <Image src={android} alt="image" className="w-full h-full mx-auto" />
                <Image src={laptop} alt="image" className="w-full h-full mx-auto" />
              </div>
            </div>

            <div>
              <h2 className="text-[28px] md:text-[32px] font-bold font-syne">Conclusion</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <p className="text-[16px] md:text-[18px] text-[#08080899] leading-7 pb-8 md:pb-12">
                  The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#08080899] leading-7 pb-8 md:pb-12">
                  We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierarchy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Project1/>
        
      </section>
    </>

  );
};

export default page;