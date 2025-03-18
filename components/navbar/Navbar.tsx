"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarOptionsWeb from "./NavbarOptionsWeb";
import NavbarOptionsMobile from "./NavbarOptionsMobile";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [bgColor, setBgColor] = useState(
    "bg-gradient-to-t from-transparent to-black"
  );
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
          className={`flex justify-between ${textColor} ${bgColor} drop-shadow-lg items-center transition-all duration-300 px-[10%]`}
        >
          <Image
            src="/Profile/Logo-nobg.png"
            onClick={() => router.push("/")}
            className="hover:cursor-pointer"
            width={80}
            height={40}
            alt="logo"
          />
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
