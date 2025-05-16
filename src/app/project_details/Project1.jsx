import React from "react";
import smartphone from "@/app/project_details/Image/phone.png";
import eventTicket from "@/app/project_details/Image/event.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Project1 = () => {
  return (
    <section className="py-[100px]">
      <div className="container">
        <div>
          <div className="text-center pb-8">
            <p className="text-[#FF9330] font-bold text-[20px] font-syne">
              Portfolio
            </p>
            <h2 className="text-[64px] font-bold font-syne relative after:absolute after:bg-[#FFB646] after:size-[64px] after:rounded-full after:top-[12px] after:right-[450px] z-[4] after:z-[-4]">
              My related work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image src={smartphone} alt="image" className="pb-6" />
              <div className="flex gap-2">
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  APP
                </button>
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  DEVELOPMENT
                </button>
              </div>
              <div>
                <a className="flex justify-between mb-12 py-5 rounded-2xl text-[32px] font-bold font-syne leading-[40px] hover:duration-75 hover:text-[#FF9330] duration-75 items-center ">
                  Basinik Finance App{" "}
                  <span>
                    <MdArrowOutward />
                  </span>
                </a>
              </div>
            </div>
            <div>
              <Image src={eventTicket} alt="image" className="pb-6" />
              <div className="flex gap-2">
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  APP
                </button>
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  DEVELOPMENT
                </button>
              </div>
              <div>
                <a className="flex justify-between mb-12 py-5 rounded-2xl text-[32px] font-bold font-syne leading-[40px] hover:duration-75 hover:text-[#FF9330] duration-75 items-center ">
                  Oxilex Dashboard design{" "}
                  <span>
                    <MdArrowOutward />
                  </span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Project1;