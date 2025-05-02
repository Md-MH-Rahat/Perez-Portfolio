import React from 'react';
import Image from 'next/image';
import Logo from '@/Image/Logo.png'; 
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import 'animate.css';

const NavBar = () => {
  return (
    <nav className='border-[#08080866] border-b-[1px] ml-12'>
      <div className='flex justify-between '>
        <a href='#' className=' py-6'>
          <Image className='logoimg' src={Logo} alt="Logo"  />
        </a>
        <div className='flex '>
          <div>
            <a className='flex items-center mt-1.5 py-6 px-[41px] gap-2 talk-link duration-300 group ' href="#">
              <p>Let's Talk</p>
              <span className=' arrow-icon '>
                <GoArrowUpRight />
              </span>
            </a>
          </div>
          <div>
            <button className='cursor-pointer bg-black py-8 px-[41px] text-white'><HiOutlineMenuAlt4/></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;