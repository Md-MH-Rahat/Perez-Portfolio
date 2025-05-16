"use client";

import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";

const Contactbtn = ({ label = "", href = "/contact", className = "" }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center flex-wrap rounded-[8px] gap-2  transition-colors duration-200 bg-black text-white border border-black hover:text-black hover:bg-transparent text-[15px] font-sans font-bold animation group ${className}`}
      type="button"
    >
      {label}
      <span className="arrow-icon text-[18px]">
        <GoArrowUpRight />
      </span>
    </button>
  );
};

export default Contactbtn;
