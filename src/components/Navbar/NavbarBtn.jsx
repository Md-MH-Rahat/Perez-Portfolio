"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import NavMenu from "./NavMenu";

const NavbarBtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="relative">
      <button
        onClick={toggle}
        className="cursor-pointer bg-black py-8 px-[41px] text-white"
      >
        <HiOutlineMenuAlt4 size={24} />
      </button>

      <div
        className={`fixed z-50 top-0 right-0 w-screen h-screen overflow-x-hidden  transition-transform duration-400 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavMenu menuToggle={toggle} />
      </div>
    </section>
  );
};

export default NavbarBtn;



