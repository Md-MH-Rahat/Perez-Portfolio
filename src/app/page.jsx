import React from 'react'
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image';
import perezhero from "@/components/Image/perezhero.png"

const page = () => {
  return (
    <main className='absolute top-0 left-0 w-full z-[-1]'>
      <section className='bg-[#FFE9D9]  banner'>
        <div className='flex justify-between items-center h-full container'>
          <div className=''>
            <div className='flex'>
              <div className='w-[110px] h-[2px] bg-black '></div>
              <p>Hello, I’m✌</p>
            </div>
            <h1>MarkHenry</h1>
            <p>Product Designer | Based in Germany</p>
            <div className='flex'>
              <button>
                <p>Let’s Talk</p>
              </button>
              <button>
                <p>My Work</p>
              </button>
            </div>
            <div className='flex gap-[11px]'>
              <p className='text-black font-bold text-[20px] leading-7 font-syne'>Based in Germany |</p>
              <div className='flex items-center gap-4'>
                <button className='cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaBehance /></button>
                <button className='cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaLinkedinIn /></button>
                <button className='cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaDribbble /></button>
                <button className='cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaGithub /></button>
              </div>
            </div>
          </div>
          <div className='perezhero'>
            <Image src={perezhero} alt='image'/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
