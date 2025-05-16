import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import project1 from '@/app/project/Image/project1.png'
import project2 from '@/app/project/Image/project2.png'
import project3 from '@/app/project/Image/project3.png'
import project4 from '@/app/project/Image/project4.png'
import project5 from '@/app/project/Image/project5.png'
import project7 from '@/app/project/Image/project7.png'

const page = () => {
  return (
    <section className='pt-20 pb-[120px]'>
  <div className="container">
    <div>
      <div className="text-center pb-12">
        <p className="text-[#FF9330] font-bold text-[20px] font-syne">
          Portfolio
        </p>
        <h2 className="text-[40px] sm:text-[64px] font-bold font-syne relative after:absolute after:bg-[#FFB646] after:size-[40px] sm:after:size-[64px] after:rounded-full after:top-[12px] after:right-[20%] sm:after:right-[472px] z-[4] after:z-[-4]">
          My recent work
        </h2>
      </div>
      <div className='space-y-7'>
        <div className='flex flex-col md:flex-row items-center gap-6'>
          <div className='relative w-full md:w-auto'>
            <Image src={project1} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Dashboard design</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
          <div className='relative w-full md:w-auto'>
            <Image src={project2} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Dashboard design</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-6'>
          <div className='relative w-full md:w-auto'>
            <Image src={project3} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Dashboard</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
          <div className='relative w-full md:w-auto'>
            <Image src={project4} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Dashboard</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
          <div className='relative w-full md:w-auto'>
            <Image src={project5} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Apps</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-6'>
          <div className='relative w-full md:w-auto'>
            <Image src={project2} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Dashboard</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
          <div className='relative w-full md:w-auto'>
            <Image src={project7} alt='projectImg' className="w-full" />
            <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 left-0 right-0'>
              <p className='text-[24px] sm:text-[32px] font-syne font-bold'>Oxilex Dashboard design</p>
              <MdArrowOutward className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page