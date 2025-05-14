"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Logo from '@/components/Image/Logo.png';
import { GoArrowUpRight } from "react-icons/go";
import 'animate.css';
import NavbarBtn from './NavbarBtn';

const NavBarMain = () => {
  const router = useRouter();
  
  const handleClick = (e) => {
    e.preventDefault(); 
    router.push('/contact');
  };
  
  return (
    <nav className='border-[#08080866] border-b-[1px] ml-12 bg-transparent relative   mb-[1000px]'>
      <div className='flex justify-between'>
        <a href='/' className='py-6'>
          <Image className='logoimg' src={Logo} alt="Logo" />
        </a>
        <div className='flex'>
          <div>
            <button 
              onClick={handleClick}
              className='flex items-center mt-1.5 py-6 px-[41px] gap-2 talk-link duration-300 group font-sans font-bold text-[15px] cursor-pointer'
            >
              <p>Let's Talk</p>
              <span className='arrow-icon text-[17px]'>
                <GoArrowUpRight />
              </span>
            </button>
          </div>
          <div>
            <NavbarBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMain;