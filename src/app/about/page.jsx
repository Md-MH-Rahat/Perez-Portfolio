
import Image from 'next/image';
import aboutimg from "@/app/about/Image/aboutimg.png"
import sign from "@/app/about/Image/sign.png"
import video from "@/app/about/Image/video.png"
import { GoArrowUpRight } from 'react-icons/go';
import { CiPlay1 } from "react-icons/ci";
import MyDetails from './MyDetails';
import Testimonial from '@/components/Testimonial/Testimonial';
import Brand from '@/components/Brand/Brand.jsx';
import "@/app/about/about.css"



const page = () => {
  return (
    <main>
      {/* about me sec start */}
      <section className='bg-[#FFE9D9]'>
        <div className='grid grid-cols-2 justify-between pt-[118px] pb-[120px] container'>
          <div className=''>
            <Image className='' src={aboutimg} alt="image" />
          </div>
          <div className=''>
            <p className='font-bold text-[20px] text-[#FF9330] font-syne'>About me</p>
            <h1 className='font-bold text-[64px] text-[#080808] font-syne'>Mark Henry</h1>
            <h3 className='font-bold text-[24px] text-[#080808] pb-[24px] font-syne'>Product Designer</h3>
            <p className='w-[526px] font-bold text-[20px] text-[#080808] pb-[30px] font-syne'>A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</p>
            <p className='w-[526px] font-normal text-[18px] text-[#08080899] pb-[48px] font-sans'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
            <Image  src={sign} alt='image'/>
          </div>
        </div>
      </section>
      {/* about me sec end */}
      {/* My vision sec start */}
      <section>
        <div className='container grid grid-cols-2 justify-between'>
          <div className='w-[526px]'>
            <h2 className='font-syne font-bold text-[64px] pt-[120px] pb-[24px]'>My vision is to create happy my clients</h2>
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
          </div>
          <div className='pt-[174px]'>
            <h2 className='font-syne font-bold text-[80px] leading-[88px] sun pb-7'>12+</h2>
            <h3 className=' strock-text pb-12'>Years of <br />experience</h3>
            <button className='w-[636px] h-[122px] rounded-[16px]  cursor-pointer bg-black animation duration-300 group'>
              <p className='text-orange-400 font-sans font-normal text-[18px] leading-7 text-start pt-[24px] pl-[24px] pb-[8px]'>SAY HELLO!</p>
              <div className='flex items-center gap-[172px] '>
                <div>
                  <h3 className='text-white font-syne font-bold text-[32px] leading-10 pl-[24px] pb-[22px]'>hello@henry.com</h3>
                </div>
                <div className='text-[#FFB646]  '>
                  <div className=' arrow-icon  '>
                    <GoArrowUpRight className='w-10 h-10'/>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className='container'>
          <div className='relative'>
            <Image  src={video} alt='image' className='rounded-[16px] mb-[120px] '/>
          <a href='https://www.youtube.com/watch?v=mSC6GwizOag' className="bg-[#FFB646] w-[100px] h-[100px] rounded-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hover:bg-[#FFE600] duration-300 group hover:scale-110">
             <CiPlay1 className='w-8 h-8 stroke-2 group-hover:text-white duration-300'/>
          </a>
          </div>
        </div>
      </section>
      {/* My vision sec end */}


      {/* Details sec start */}
        <section className='bg-[#0808080A]'>
          <div className='container'>
            <p className='font-syne font-bold text-[20px] leading-7 text-[#FF9330] text-center pt-[100px] pb-[10px]'>Resume</p>
            <h2 className='font-syne font-bold text-[64px] leading-[72px] text-center pb-[32px]'>All over my details find <span className='aboutsun2'>here</span>...</h2>
            <MyDetails/>
          </div>
        </section>

      {/* Details sec end */}


      {/* Testimonial sec start */}

        <section>
          <Testimonial/>
        </section>

      {/* Testimonial sec end */}


      {/* Brand sec start */}

        <section className='container pb-[120px]'>
          <div className='py-10 border-b-[1px] border-t-[1px] border-[#0808081A]'>
            <Brand/>
          </div>
        </section>

      {/* Brand sec end */}



    </main>
  )
}

export default page