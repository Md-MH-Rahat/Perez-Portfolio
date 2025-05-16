import React from 'react'
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image';
import perezhero from "@/components/Image/perezhero.png"
import SpinBtn from '@/components/SpinBtn/SpinBtn';
import Contactbtn from '@/components/Buttons/Contactbtn';
import Projectbtn from '@/components/Buttons/ProjectBtn';
import { GoArrowUpRight } from 'react-icons/go';
import mobile from '@/components/Image/mobile.png';
import ui from '@/components/Image/ui.png';
import web from '@/components/Image/web.png';
import webflow from '@/components/Image/webflow.png';
import brand from '@/components/Image/brand.png';
import ticket from '@/components/Image/ticket.png';
import blackphone from '@/components/Image/blackphone.png';
import interaction from '@/components/Image/interaction.png';
import about4 from '@/components/Image/about4.png';
import MyDetails2 from '@/components/MyDetails2';
import { MdArrowOutward } from 'react-icons/md';
import Testimonial from '@/components/Testimonial/Testimonial';
import Brand from '@/components/Brand/Brand';
import BlogForHome from '@/components/blog/BlogForHome';

const page = () => {
  return (
    <main className='relative top-0 left-0 w-full '>
      <section className='bg-[#FFE9D9]  banner'>
        <div className='flex justify-between items-center h-full container'>
          <div className='pt-[140px]'>
            <div className='flex items-center gap-6'>
              <div className='w-[65px] h-[1px] bg-[#080808] '></div>
              <p className='font-bold font-syne text-[32px] leading-10 pb-2'>Hello, I’m ✌</p>
            </div>
            <h1 className='font-bold font-syne text-[140px] leading-[110px] text-[#080808] '><span className='marksun'>Mark</span> <br />Henry</h1>
            <p className='font-syne font-bold text-[24px] leading-8 pt-6 pb-[30px]'>Product Designer | Based in Germany</p>
            <div className='flex gap-[17px] pb-[120px]'>
              
                <Contactbtn label="Let’s Talk"  className = "w-[163px] h-[56px]"/>
              
              
                <Projectbtn label="My Work"  className = "w-[163px] h-[56px]"/>
              
            </div>
            <div className='flex gap-[64px]'>
              <p className='text-black font-bold text-[44px] leading-6 font-syne'>1.2k+ <span className='font-sans font-normal text-[#08080866] text-[18px] leading-7'>Worldwide client |</span></p>
              <div className='flex items-center gap-4'>
                <button className='text-[24px] cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaBehance /></button>
                <button className='text-[24px] cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaLinkedinIn /></button>
                <button className='text-[24px] cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaDribbble /></button>
                <button className='text-[24px] cursor-pointer text-black transition-all duration-300 hover:text-[#FFB646]'><FaGithub /></button>
              </div>
            </div>
          </div>
          <div className='perezhero relative'>
            <Image src={perezhero} alt='image'/>
            <div className='absolute top-[200px] right-[200px]'>
              <SpinBtn />
            </div>
          </div>
        </div>
        
      </section>

      <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-12 gap-6 2xl:gap-0 mb-12 items-center">
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <div className="font-bold font-[Syne] leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">Services</span>
              <h3 className="text-black text-[64px] relative after:absolute after:rounded-full after:size-[32px] sm:after:size-[60px] after:top-[6px] sm:after:top-[5px] after:left-[10px] sm:after:left-[-3px] after:bg-[#FFB646] z-[10] after:z-[-20]">
                My specialties
              </h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <p className="text-[18px] font-sans text-[#08080899]">
              Synergistically seize front-end methods of empowerment without extensive core competencies.
              Progressively repurpose alternative platforms
            </p>
          </div>
        </div>

        {/* Services sec start */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              
              {/* Service Item 1 */}
              <div className="px-6 py-7 bg-[#0808080A] rounded-lg transition-all hover:shadow-2xl hover:bg-white group ">
                {/* Icon */}
                <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-[#0808080A] mb-8">
                  <Image src={mobile} alt='mobile'/>
                </div>

                {/* Title */}
                <h4 >
                  <a href="/projects" className="flex flex-wrap items-end justify-between font-bold text-xl font-[Syne] text-black  transition-all  talk-link duration-300 group">
                    Mobile Apps <br /> design
                    <span className="text-black-text-600  arrow-icon">
                      <GoArrowUpRight/>
                    </span>
                  </a>
                </h4>
              </div>

              {/* Service Item 2 */}
              <div className="px-6 py-7 bg-[#0808080A] rounded-lg transition-all hover:shadow-2xl hover:bg-white group">
                {/* Icon */}
                <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-[#0808080A] mb-8">
                  <Image src={ui} alt='mobile'/>
                </div>

                {/* Title */}
                <h4>
                  <a href="/projects" className="flex flex-wrap items-end justify-between font-bold text-xl font-[Syne] text-black talk-link duration-300 group transition-all">
                    UI/UX <br /> design
                    <span className="text-black-text-600  arrow-icon">
                      <GoArrowUpRight/>
                    </span>
                  </a>
                </h4>
              </div>

              {/* Service Item 3 */}
              <div className="px-6 py-7 bg-[#0808080A] rounded-lg transition-all hover:shadow-2xl hover:bg-white group">
                {/* Icon */}
                <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-[#0808080A] mb-8">
                  <Image src={web} alt='mobile'/>
                </div>

                {/* Title */}
                <h4>
                  <a href="/projects" className="flex flex-wrap items-end justify-between font-bold text-xl font-[Syne] text-black talk-link duration-300 group transition-all">
                    Website <br /> design
                    <span className="text-black-text-600  arrow-icon">
                      <GoArrowUpRight/>
                    </span>
                  </a>
                </h4>
              </div>

              {/* Service Item 4 */}
              <div className="px-6 py-7 bg-[#0808080A] rounded-lg transition-all hover:shadow-2xl hover:bg-white group">
                {/* Icon */}
                <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-[#0808080A] mb-8">
                  <Image src={webflow} alt='mobile'/>
                </div>

                {/* Title */}
                <h4>
                  <a href="/projects" className="flex flex-wrap items-end justify-between font-bold text-xl font-[Syne] text-black talk-link duration-300 transition-all">
                    Webflow <br /> development
                    <span className="text-black-text-600  arrow-icon">
                      <GoArrowUpRight/>
                    </span>
                  </a>
                </h4>
              </div>

              {/* Service Item 5 */}
              <div className="px-6 py-7 bg-[#0808080A] rounded-lg transition-all hover:shadow-2xl hover:bg-white group">
                {/* Icon */}
                <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-[#0808080A] mb-8">
                  <Image src={brand} alt='mobile'/>
                </div>

                {/* Title */}
                <h4>
                  <a href="/projects" className="flex flex-wrap items-end justify-between font-bold text-xl font-[Syne] text-black talk-link duration-300 transition-all">
                    Brand <br /> identity
                    <span className="text-black-text-600  arrow-icon">
                      <GoArrowUpRight/>
                    </span>
                  </a>
                </h4>
              </div>

              {/* Service Item 6 */}
              <div className="px-6 py-7 bg-[#0808080A] rounded-lg transition-all hover:shadow-2xl hover:bg-white group">
                {/* Icon */}
                <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-[#0808080A] mb-8">
                  <Image src={interaction} alt='mobile'/>
                </div>

                {/* Title */}
                <h4>
                  <a href="/projects" className="flex flex-wrap items-end justify-between font-bold text-xl font-[Syne] text-black talk-link duration-300 transition-all">
                    Interaction <br /> design
                    <span className="text-black-text-600  arrow-icon">
                      <GoArrowUpRight/>
                    </span>
                  </a>
                </h4>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="col-span-12 xl:col-span-4">
            <div className="px-6 py-9 bg-black rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full talk-link duration-300">
              <div className="flex flex-wrap justify-end relative ">
                <a href="" className="text-[#FFB646] text-6xl arrow-icon">
                  <GoArrowUpRight/>
                </a>
              </div>

              <div className="flex flex-col flex-wrap gap-y-2 ">
                <span className="text-[#FFB646] text-lg font-normal leading-none">SAY HELLO!</span>
                <h4 className="text-white text-2xl xl:text-[32px] font-bold font-syne leading-none">
                  hello@henry.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Services sec end */}

    {/* Hello sec start */}    

    <section className=' pb-[50px]'>
      <div className='container grid grid-cols-2 justify-between'>
          
          <div className=''>
            <div className='pb-[24px]'>
              <Image src={about4} alt='image'/>
            </div>
            <div className='pl-[30%]'>
              <h2 className='font-syne font-bold text-[80px] leading-[88px] sun pb-7'>12+</h2>
              <h3 className=' strock-text pb-12'>Years of <br />experience</h3>
            </div>
          </div>
          <div className='w-[526px]'>
            <p className='font-syne font-bold text-[20px]  text-[#FF9330]'>Hello I'm</p>
            <h2 className='font-syne font-bold text-[64px]  pb-[24px]'><span className='marksun2'>Mark</span> Henry, Product Designer</h2>
            <p className='font-sans text-[18px] leading-7 text-[#08080899] pb-[43px]'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making
            them want more.</p>
            <ul className='flex gap-[41px] pb-[108px]'>
              <li>
                <h3 className='font-syne font-bold text-[32px] leading-10'>08</h3>
                <p className='font-sans text-[18px] leading-7'>Award winner</p>
              </li>
              <li>
                <h3 className='font-syne font-bold text-[32px] leading-10'>1.2k</h3>
                <p className='font-sans text-[18px] leading-7'>Worldwide client</p>
              </li>
              <li>
                <h3 className='font-syne font-bold text-[32px] leading-10'>3.5k</h3>
                <p className='font-sans text-[18px] leading-7'>Job done successfully</p>
              </li>
            </ul>
            <Contactbtn label='Download my resume' className='w-[253px] h-[56px]'/>
          </div>
        </div>
    </section>


    {/* Hello sec end */}    


    {/* MyDetails sec start */}

    <section className=' bg-[#0808080A] pt-[50px] pb-[50px]'>
      <div className='container'>
        <MyDetails2/>
      </div>
    </section>

    {/* MyDetails sec end */}


    {/* My work sec start */}

      <section className="py-[100px] bg-[#FFE9D9]">
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
                    <Image src={blackphone} alt="image" className="pb-6" />
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
                    <Image src={ticket} alt="image" className="pb-6" />
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
              <Projectbtn label='View All Project' className='w-full h-[56px]'/>
            </div>
          </section>

    {/* My work sec end */}  


    {/* feedback sec start */}

    <section>
      <Testimonial/>
    </section>

    {/* feedback sec end */}  

     {/* Brand sec start */}

        <section className='container pb-[50px]'>
          <div className='py-10 border-b-[1px] border-t-[1px] border-[#0808081A]'>
            <Brand/>
          </div>
        </section>

      {/* Brand sec end */}  


      {/* My Blog sec start */}  

      <BlogForHome/>

      {/* My Blog sec end */}  


      {/* Stay chill sec start */}  

        <section className="bg-white pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
              <div 
                className=""
              >
                <span className="text-[#FF9330] font-syne font-bold text-[20px] leading-7 ">Pricing</span>
                <h3 className="text-black font-syne font-bold text-[64px] leading-[72px] w-[527px] ">
                  Stay chill and pick your <span className="relative after:absolute after:bg-[#FFB646] after:size-[64px] after:rounded-full after:top-[10px] after:right-[8px] z-[4] after:z-[-4]">pl</span>an
                </h3>
              </div>

              <div className="flex mt-8 md:mt-0">
                <Contactbtn label='Contact for Custom Project' className='w-[296px] h-[56px]'/>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Pricing Item 1 */}
          <div 
            className="p-6 lg:p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 talk-link duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-normal font-sans leading-none text-[#08080899]">Basic</span>
              <span className="font-bold text-[20px] font-syne text-[#FF9330]">$48/h</span>
            </div>

            <div className="flex flex-wrap justify-between items-end ">
              <div>
                <h4 className="font-bold font-syne leading-10 text-[32px] text-black mb-1">
                  20 hrs
                </h4>
                <p className="text-[18px] font-normal font-sans leading-7 text-[#08080899]">
                  10 hours per week
                </p>
              </div>

              <button href="#" className="arrow-icon text-[25px]">
                <MdArrowOutward/>
              </button>
            </div>
          </div>

          {/* Pricing Item 2 */}
          <div 
            className="p-6 lg:p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 talk-link duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-normal font-sans leading-none text-[#08080899]">Premium</span>
              <span className="font-bold text-[20px] font-syne text-[#FF9330]">$60/h</span>
            </div>

            <div className="flex flex-wrap justify-between items-end ">
              <div>
                <h4 className="font-bold font-syne leading-10 text-[32px] text-black mb-1">
                  30 hrs
                </h4>
                <p className="text-[18px] font-normal font-sans leading-7 text-[#08080899]">
                  15 hours per week
                </p>
              </div>

              <button href="#" className="arrow-icon text-[25px]">
                <MdArrowOutward/>
              </button>
            </div>
          </div>

          {/* Pricing Item 3 */}
          <div 
            className="p-6 lg:p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 talk-link duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-normal font-sans leading-none text-[#08080899]">Platinum</span>
              <span className="font-bold text-[20px] font-syne text-[#FF9330]">$80/h</span>
            </div>

            <div className="flex flex-wrap justify-between items-end ">
              <div>
                <h4 className="font-bold font-syne leading-10 text-[32px] text-black mb-1">
                  40 hrs
                </h4>
                <p className="text-[18px] font-normal font-sans leading-7 text-[#08080899]">
                  20 hours per week
                </p>
              </div>

              <button href="#" className="arrow-icon text-[25px]">
                <MdArrowOutward/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Stay chill sec end */}  




    </main>
  )
}

export default page
