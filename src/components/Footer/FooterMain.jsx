import React from 'react'
import { FaBehance, FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';
import footerimg from "@/components/Footer/image/mark.png"
import FooterBtn from './FooterBtn';
import "@/components/Footer/footer.css"


const FooterMain = () => {
  return (
    <footer className='bg-black'>
        <div className='container'>
              <div className='grid grid-cols-3 gap-6 justify-between pt-[119px]'>
                  <div className='aboutsun '>
                      <h2 className='text-white w-[416px] font-bold text-[64px] leading-[72px] font-syne pb-10 relative  z-10'>Let's work together</h2>
                      <div className='flex gap-[11px]'>
                        <p className='text-white font-bold text-[20px] leading-7 font-syne'>Based in Germany |</p>
                         <div className='flex items-center gap-4'>
                         <button className='cursor-pointer text-white transition-all duration-300 hover:text-[#FFB646]'><FaBehance/></button>
                         <button className='cursor-pointer text-white transition-all duration-300 hover:text-[#FFB646]'><FaLinkedinIn/></button>
                         <button className='cursor-pointer text-white transition-all duration-300 hover:text-[#FFB646]'><FaDribbble/></button>
                         <button className='cursor-pointer text-white transition-all duration-300 hover:text-[#FFB646]'><FaGithub/></button>
                         </div>
                      </div>
                  </div>
                  <button className='text-white cursor-pointer border-1 rounded-[16px]  border-[#FFFFFF33]'>
                    <div className='py-9 px-7'>
                      <p className='font-bold text-start text-[20px] leading-7 pb-[92px] font-syne'>Looking for a hectic <br /> designer?</p>
                      <div className='flex items-center talk-link duration-300 group'>
                        <p className='font-bold text-[24px] leading-8 pr-12 font-syne'>hello@henry.com</p>
                        <div className=' arrow-icon text-[20px]'>
                          <GoArrowUpRight />
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className='text-white cursor-pointer border-1 rounded-[16px]  border-[#FFFFFF33]'>
                    <div className='py-9 px-7'>
                      <p className='font-bold text-start  text-[20px] leading-7 pb-[86px] font-syne'>Want a more in-depth look at <br />my history?</p>
                    <div className='flex items-center talk-link duration-300 group'>
                      <p className='font-bold text-[24px] leading-8 pr-12 font-syne'>+598 6879 9874</p>
                      <div className=' arrow-icon text-[20px]'>
                        <GoArrowUpRight />
                      </div>
                    </div>
                    </div>
                  </button>
              </div>
              <div className='py-[72px] '>
                <Image src={footerimg} alt='image'/>
              </div>
              <div className='border-t-1 border-[#FFFFFF33]'>
                <div className=' text-white flex justify-between pt-5 pb-[59px]'>
                <p className='text-[18px] leading-7 font-sans'>©2023 Mark Henry, All Rights Reserved</p>
                <FooterBtn/>
              </div>
              </div>
        </div>
    </footer>
  )
}

export default FooterMain