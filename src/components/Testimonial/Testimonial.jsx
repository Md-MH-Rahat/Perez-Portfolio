// components/TestimonialSlider.tsx
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import jhon from "@/components/Testimonial/Image/jhon.png"
import comaImage from "@/components/Testimonial/Image/coma.png"
import "@/components/Testimonial/testimonial.css"

const Testimonial = () => {
  return (
    <div className='px-8 xl:pr-0 xl:pl-[4%] 2xl:pl-[6%] 3xl:pl-[17%] py-[120px] bg-white'>
      <div className='grid grid-cols-2'>
      <div className='pl-[250px]'>
        <p className='font-syne font-bold text-[20px] leading-7 text-[#FF9330]'>Testimonial</p>
        <h4 className='font-syne font-bold text-[64px] text-black leading-[72px] test'>Client <br /> feedback</h4>
      </div>
      <div>
       <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide className='pr-[20px]'>
          <Image src={comaImage} alt='coma' className='pb-[40px]'/>
          <p className='font-syne font-bold text-[20px leading-7 text-[#080808CC] pb-6'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</p>
          <h4 className='flex items-center font-[800] text-[18px] leading-7 text-[#080808] font-syne '> 
            <span>
              <Image src={jhon} alt='jhon'/>
            </span>
            Jhon Smith
          </h4>
        </SwiperSlide>
        <SwiperSlide className='pr-[20px]'>
          <Image src={comaImage} alt='coma' className='pb-[40px]'/>
          <p className='font-syne font-bold text-[20px leading-7 text-[#080808CC] pb-6'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</p>
          <h4 className='flex items-center font-[800] text-[18px] leading-7 text-[#080808] font-syne '> 
            <span>
              <Image src={jhon} alt='jhon'/>
            </span>
            Jhon Smith
          </h4>
        </SwiperSlide>
        <SwiperSlide className='pr-[20px]'>
          <Image src={comaImage} alt='coma' className='pb-[40px]'/>
          <p className='font-syne font-bold text-[20px leading-7 text-[#080808CC] pb-6'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</p>
          <h4 className='flex items-center font-[800] text-[18px] leading-7 text-[#080808] font-syne '> 
            <span>
              <Image src={jhon} alt='jhon'/>
            </span>
            Jhon Smith
          </h4>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={comaImage} alt='coma' className='pb-[40px]'/>
          <p className='font-syne font-bold text-[20px leading-7 text-[#080808CC] pb-6'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</p>
          <h4 className='flex items-center font-[800] text-[18px] leading-7 text-[#080808] font-syne '> 
            <span>
              <Image src={jhon} alt='jhon'/>
            </span>
            Jhon Smith
          </h4>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
