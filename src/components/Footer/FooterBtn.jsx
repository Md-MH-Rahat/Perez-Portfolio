'use client'; // ⬅️ this tells Next.js it's a client component

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const FooterBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div className="">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#FFB646] cursor-pointer transition">
          <p>Back to Top</p>
          <FaArrowUp />
        </button>
      </div>
    )
  );
};

export default FooterBtn;
