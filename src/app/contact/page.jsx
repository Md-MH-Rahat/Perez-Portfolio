'use client';

import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { GoArrowUpRight } from 'react-icons/go';

import "@/app/contact/contact.css"
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <section className=" pt-20 pb-[120px] bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Contact Info */}
          <div className="col-span-12 lg:col-span-6" data-aos="fade-up">
            <div className="font-bold font-syne leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-[#FF9330] text-xl">Contact</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="consun">Le</span>t's
                <br className="hidden lg:block" />
                connect
              </h3>
            </div>

            <div className="flex flex-wrap flex-col gap-7">
              {/* Email Contact */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                <span className='text-[32px]'>
                  <MdOutlineEmail/>
                </span>
                <div className="flex flex-wrap flex-col flex-1">
                  <span className=" font-sans font-normal text-[18px] text-[#05050599]  !leading-none">Email us</span>
                  <h5 className="text-[20px] font-bold font-syne text-[#080808] leading-7">hello@henry.com</h5>
                </div>
              </div>
              
              {/* Phone Contact */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                <span className='text-[32px]'>
                  <FiPhoneCall />
                </span>
                <div className="flex flex-wrap flex-col flex-1">
                  <span className="font-sans font-normal text-[18px] text-[#05050599] !leading-none">Call us</span>
                  <h5 className="text-[20px] font-bold font-syne text-[#080808] leading-7">
                    +1 234 567 890 | +1 234 567 890
                  </h5>
                </div>
              </div>
              
              {/* Office Address */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                <span className='text-[32px]'>
                  <IoLocationOutline />
                </span>
                <div className="flex flex-wrap flex-col flex-1">
                  <span className="font-sans font-normal text-[18px] text-[#05050599] !leading-none">Office address</span>
                  <h5 className="text-[20px] font-bold font-syne text-[#080808] leading-7">
                    2715 Ash Dr. San Joe, South Dakota 6548
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-span-12 lg:col-span-6" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-[18px]">
              {/* Name Field */}
              <div className="col-span-12 md:col-span-6">
                <label className="text-sm font-normal font-sans leading-tight mb-3 block" htmlFor="name">Name</label>
                <input 
                  id="name" 
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                  type="text" 
                  required 
                  placeholder="Your name*" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              {/* Email Field */}
              <div className="col-span-12 md:col-span-6">
                <label className="text-sm font-normal font-sans leading-tight mb-3 block" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                  type="email" 
                  required 
                  placeholder="Your email*" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              {/* Phone Field */}
              <div className="col-span-12 md:col-span-6">
                <label className="text-sm font-normal font-sans leading-tight mb-3 block" htmlFor="phone">Phone</label>
                <input 
                  id="phone" 
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                  type="text" 
                  placeholder="Your number" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              {/* Subject Field */}
              <div className="col-span-12 md:col-span-6">
                <label className="text-sm font-normal font-sans leading-tight mb-3 block" htmlFor="subject">Subject*</label>
                <input 
                  id="subject" 
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                  type="text" 
                  required 
                  placeholder="Your subject*" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              {/* Message Field */}
              <div className="col-span-12">
                <label className="text-sm font-normal font-sans leading-tight mb-3 block" htmlFor="message">Message</label>
                <textarea 
                  className="h-[100px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none resize-none"
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  required 
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              {/* Submit Button */}
              <div className="col-span-12">
                <button className="flex justify-center items-center flex-wrap  rounded-[8px] gap-2 w-[149px] h-[56px] transition-colors duration-200 bg-black text-white border-1 hover:text-black hover:bg-white text-[15px] font-sans font-bold animation group" type="submit">
                  Submit
                  <span className="arrow-icon">
                    <GoArrowUpRight />
                  </span>
                </button>
                <p className="form-message mt-3"></p>
              </div>
              
              {/* Social Media Section */}
              <div className="col-span-12">
                <div className="justify-start sm:items-center gap-[23px] inline-flex mt-14 flex-col sm:flex-row">
                  {/* Horizontal line */}
                  <div className="w-[110px] h-[1px] bg-[#0808081A] bg-opacity-10"></div>
                  
                  <div className="flex flex-wrap gap-[23px]">
                    <h4 className="text-[#080808] text-xl font-bold font-syne leading-7">Follow me</h4>
                    
                    <ul className="flex flex-wrap gap-x-4 items-center">
                      <li>
                        <a href="#" className="text-[#080808E5] transition-all duration-300 hover:text-[#FFB646]">
                          <FaBehance/>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#080808E5] transition-all duration-300 hover:text-[#FFB646]">
                          <FaLinkedinIn/>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#080808E5] transition-all duration-300 hover:text-[#FFB646]">
                          <FaDribbble/>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#080808E5] transition-all duration-300 hover:text-[#FFB646]">
                          <FaGithub/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}