
import React from "react";
import FirstImg from "@/components/blog/Image/blog1.png";
import SecondImg from "@/components/blog/Image/blog2.png";
import forthImg from "@/components/blog/Image/blog4.png";
import ThirdImg from "@/components/blog/Image/blog3.png";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

const BlogForHome = () => {
  return (
    <section className="pb-[80px] sm:pb-[120px]  mt-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="pb-12">
            <div className="font-syne text-center font-bold pb-12">
              <p className="text-[#FF9330] text-[16px] sm:text-[20px]">Blog</p>
              <h2 className="text-[32px] sm:text-[64px] relative after:absolute after:rounded-full after:size-[32px] sm:after:size-[64px] after:top-[6px] sm:after:top-[18px] after:right-[140px] sm:after:right-[480px] after:bg-[#FFB646] z-[20] after:z-[-32]">
                My blog post
              </h2>
            </div>

            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div>
                <span>
                  <Image src={FirstImg} alt="image" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[13px] md:text-[14px] pt-4 sm:pt-6 pb-2 sm:pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex justify-between items-end hover:text-[#FF9330] transition duration-700">
                    <p className="text-xl sm:text-2xl font-syne font-bold">
                      Right-lo-left behind development in mobile web design
                    </p>
                    <span>
                      <MdArrowOutward className="w-6 sm:w-8 h-6 sm:h-8" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="mt-7">
                <span>
                  <Image src={SecondImg} alt="image" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] pt-4 sm:pt-6 pb-2 sm:pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex justify-between items-end hover:text-[#FF9330] transition duration-700">
                    <p className="text-xl sm:text-2xl font-syne font-bold">
                      Connect craft: Reading the smart experiencen
                    </p>
                    <span>
                      <MdArrowOutward className="w-6 sm:w-8 h-6 sm:h-8" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div>
                <span>
                  <Image src={ThirdImg} alt="image" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] pt-4 sm:pt-6 pb-2 sm:pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex justify-between items-end hover:text-[#FF9330] transition duration-700">
                    <p className="text-xl sm:text-2xl font-syne font-bold">
                      Ecoglow: Sustainable skincare a brighter tomorrow
                    </p>
                    <span>
                      <MdArrowOutward className="w-6 sm:w-8 h-6 sm:h-8" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="mt-7">
                <span>
                  <Image src={forthImg} alt="image" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] pt-4 sm:pt-6 pb-2 sm:pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex justify-between items-end hover:text-[#FF9330] transition duration-700">
                    <p className="text-xl sm:text-2xl font-syne font-bold">
                      Right-lo-left behind development in mobile web design
                    </p>
                    <span>
                      <MdArrowOutward className="w-6 sm:w-8 h-6 sm:h-8" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BlogForHome;