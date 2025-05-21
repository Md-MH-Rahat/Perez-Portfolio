'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import about4 from "@/app/about/Image/about4.png"
import vscode from "@/app/about/Image/vscode.png"
import figma from "@/app/about/Image/figma.png"
import framer from "@/app/about/Image/framer.png"
import wdot from "@/app/about/Image/wdot.png"
import "@/app/about/about.css"


export default function MyDetails2() {
  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
  ];

  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className=" flex justify-between ">
      {/* Tab Buttons */}
      <div className='pt-[50px]'>
        <p className='font-syne font-bold text-[20px]  text-[#FF9330]'>Resume</p>
            <h2 className='font-syne font-bold text-[64px] text-black w-[416px] pb-[24px]'><span className='marksun2'>All</span>  over my details find here...</h2>
        <div className=" flex flex-wrap flex-col gap-2   ">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex justify-between items-center px-6 rounded-[8px] gap-2 w-[416px] h-[56px] transition-colors duration-200 bg-[#FFFFFF] text-black text-[15px] font-sans font-bold ${
              activeTab === tab.id
                ? 'text-white bg-black '
                : 'text-[#080808] border-transparent hover:text-white hover:bg-black'
            }`}
          >
            {tab.label}
            <GoArrowUpRight className='text-[20px]'/>
          </button>
        ))}
      </div>
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === 'about' && (
          <div className="">
            <div>
              <h3 className='font-bold text-black font-syne text-[32px] pt-[50px] pb-[32px]'>
                Product Designer
              </h3>
              <p className='text-[#08080899] text-[18px] pb-[30px] font-sans leading-[28px] w-[530px]'>Mark Henry, <span className='text-[#080808]'>Product Designer</span>, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,</p>
              <p className='text-[#08080899] text-[18px] pb-[56px] font-sans leading-[28px] w-[530px]'>
                but words that truly land with those that read them, calling your audience in and making them want more.
              </p>
              <ul className=" flex-col gap-3 inline-flex pb-[100px]">
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Name</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    Mark Henry</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Nationality</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    Germany</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Phone</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    +(2) 870 174 302</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Email</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    hello@henry.com</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Experience</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    12+ years</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Freelance</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    Available</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Skype</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    henry.halk23</span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="w-[110px] font-sans text-[18px] text-[#080808CC] font-normal">
                    Language</span>
                  <span className="text-[#080808] text-[24px] font-bold font-syne leading-8">
                    German, English</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className='pb-[100px]'>
            <h3 className='text-[#080808] text-2xl lg:text-[32px] font-bold font-syne pb-6 pt-14'>Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <div className="pt-8 px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col gap-8 justify-between">
              <span className="text-sm font-normal font-sans text-[#080808CC]">03/2016 – Running</span>
              <div>
                <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                </p>
                <h4 className="text-2xl font-bold font-syne text-[#080808] leading-normal">Lead Digital Marketer</h4>
              </div>
            </div>
            <div className="pt-8 px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col gap-8 justify-between">
              <span className="text-sm font-normal font-sans text-[#080808CC]">03/2008 – 07/2011</span>
              <div>
                <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                </p>
                <h4 className="text-2xl font-bold font-syne text-[#080808] leading-normal">JavaScript Developer</h4>
              </div>
            </div>
            <div className="pt-8 px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col gap-8 justify-between">
              <span className="text-sm font-normal font-sans text-[#080808CC]">03/2008 – 07/2011</span>
              <div>
                <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                </p>
                <h4 className="text-2xl font-bold font-syne text-[#080808] leading-normal">Product Designer</h4>
              </div>
            </div>
            <div className="pt-8 px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col gap-8 justify-between">
              <span className="text-sm font-normal font-sans text-[#080808CC]">03/2008 – 07/2011</span>
              <div>
                <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                </p>
                <h4 className="text-2xl font-bold font-syne text-[#080808] leading-normal">UX Researcher</h4>
              </div>
            </div>
          </div>
          </div>

        )}

        {activeTab === 'education' && (
          <div className='pb-[100px]'>
            <h3 className='font-bold text-black font-syne text-[32px] pt-[50px] pb-[32px]'>Education</h3>
            <div className='grid grid-cols-1 gap-6'>
              <div className="pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[104px]">
                <span className="text-sm font-normal font-sans leading-tight text-[#080808CC]">
                  003/2008–07/2011
                </span>
                <div className="flex-1">
                  <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                  </p>
                  <h4 className="font-bold font-syne leading-normal text-2xl text-[#080808]">BA Business
                    Management
                  </h4>
                </div>
              </div>
              <div className="pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[104px]">
                <span className="text-sm font-normal font-sans leading-tight text-[#080808CC]">
                  003/2008–07/2011
                </span>
                <div className="flex-1">
                  <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                  </p>
                  <h4 className="font-bold font-syne leading-normal text-2xl text-[#080808]">BA Business
                    Management
                  </h4>
                </div>
              </div>
              <div className="pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[104px]">
                <span className="text-sm font-normal font-sans leading-tight text-[#080808CC]">
                  003/2008–07/2011
                </span>
                <div className="flex-1">
                  <p className="text-lg font-sans text-[#080808]  z-[1] pl-4 axtra ">
                  Axtra
                  </p>
                  <h4 className="font-bold font-syne leading-normal text-2xl text-[#080808]">BA Business
                    Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className='pb-[100px]'>
            <h3 className='text-[#080808] text-2xl lg:text-[32px] font-bold font-syne pb-6 pt-14'>Skills</h3>
            <div className='grid grid-cols-3 gap-5'>
              <div className='pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start'>
                <Image src={vscode} alt='exp' className='items-start'/>
                <div className='flex flex-wrap gap-1 flex-1 flex-col'>
                  <h4 className='font-bold font-syne leading-normal text-xl text-[#080808]'>React JS</h4>
                  <p className='text-[#080808CC] text-sm font-sans leading-none'>(90%)</p>
                </div>
              </div>
              <div className='pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start'>
                <Image src={figma} alt='figma' className='items-start'/>
                <div className='flex flex-wrap gap-1 flex-1 flex-col'>
                  <h4 className='font-bold font-syne leading-normal text-xl text-[#080808]'>Figma</h4>
                  <p className='text-[#080808CC] text-sm font-sans leading-none'>(70%)</p>
                </div>
              </div>
              <div className='pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start'>
                <Image src={framer} alt='exp' className='items-start'/>
                <div className='flex flex-wrap gap-1 flex-1 flex-col'>
                  <h4 className='font-bold font-syne leading-normal text-xl text-[#080808]'>Farmer</h4>
                  <p className='text-[#080808CC] text-sm font-sans leading-none'>(80%)</p>
                </div>
              </div>
              <div className='pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start'>
                <Image src={vscode} alt='exp' className='items-start'/>
                <div className='flex flex-wrap gap-1 flex-1 flex-col'>
                  <h4 className='font-bold font-syne leading-normal text-xl text-[#080808]'>React JS</h4>
                  <p className='text-[#080808CC] text-sm font-sans leading-none'>(90%)</p>
                </div>
              </div>
              <div className='pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start'>
                <Image src={vscode} alt='exp' className='items-start'/>
                <div className='flex flex-wrap gap-1 flex-1 flex-col'>
                  <h4 className='font-bold font-syne leading-normal text-xl text-[#080808]'>React JS</h4>
                  <p className='text-[#080808CC] text-sm font-sans leading-none'>(90%)</p>
                </div>
              </div>
              <div className='pt-[30px] px-7 pb-7 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start'>
                <Image src={vscode} alt='exp' className='items-start'/>
                <div className='flex flex-wrap gap-1 flex-1 flex-col'>
                  <h4 className='font-bold font-syne leading-normal text-xl text-[#080808]'>React JS</h4>
                  <p className='text-[#080808CC] text-sm font-sans leading-none'>(90%)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'awards' && (
          <div className='pb-[100px]'>
            <h3 className='text-[#080808] text-2xl lg:text-[32px] font-bold font-syne pb-6 pt-14'>Experience</h3>
            <div className='grid grid-cols-2 gap-6'>
              <div className='p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 '>
                <div className='flex items-start justify-between'>
                  <Image src={wdot} alt='wdot' className=''/>
                  <span className='font-normal text-sm font-sans text-[#080808CC]'>2018</span>
                </div>
                <div>
                  <p className='text-lg font-sans text-[#080808]  z-[1] pl-4 axtra'>Winner</p>
                  <h4 className='text-xl font-bold font-syne text-[#080808] leading-normal'>01X Developer Award</h4>
                </div>
              </div>
              <div className='p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 '>
                <div className='flex items-start justify-between'>
                  <Image src={wdot} alt='wdot' className=''/>
                  <span className='font-normal text-sm font-sans text-[#080808CC]'>2018</span>
                </div>
                <div>
                  <p className='text-lg font-sans text-[#080808]  z-[1] pl-4 axtra'>Winner</p>
                  <h4 className='text-xl font-bold font-syne text-[#080808] leading-normal'>01X Developer Award</h4>
                </div>
              </div>
              <div className='p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 '>
                <div className='flex items-start justify-between'>
                  <Image src={wdot} alt='wdot' className=''/>
                  <span className='font-normal text-sm font-sans text-[#080808CC]'>2018</span>
                </div>
                <div>
                  <p className='text-lg font-sans text-[#080808]  z-[1] pl-4 axtra'>Winner</p>
                  <h4 className='text-xl font-bold font-syne text-[#080808] leading-normal'>01X Developer Award</h4>
                </div>
              </div>
              <div className='p-8 bg-[#0808080A] rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 '>
                <div className='flex items-start justify-between'>
                  <Image src={wdot} alt='wdot' className=''/>
                  <span className='font-normal text-sm font-sans text-[#080808CC]'>2018</span>
                </div>
                <div>
                  <p className='text-lg font-sans text-[#080808]  z-[1] pl-4 axtra'>Winner</p>
                  <h4 className='text-xl font-bold font-syne text-[#080808] leading-normal'>01X Developer Award</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

