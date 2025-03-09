"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarOptionsWeb from "./NavbarOptionsWeb";
import NavbarOptionsMobile from "./NavbarOptionsMobile";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBgColor("bg-primary"); // Change to any color you want
        setTextColor("text-white");
      } else {
        setBgColor("bg-gradient-to-t from-transparent to-black");
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed z-10">
      <nav>
        <div
          className={`flex justify-between ${textColor} ${bgColor} item-center transition-all duration-300 py-3 px-[10%]`}
        >
          <Image src="/Profile/Logo.png" width={60} height={40} alt="logo" />
          <NavbarOptionsWeb />
          <div className="md:hidden flex items-center" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <NavbarOptionsMobile menuOpen={menuOpen} handleNav={handleNav} />
      </nav>
    </header>
  );
};

export default Navbar;
