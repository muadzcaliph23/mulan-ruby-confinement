"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const router = useRouter();

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
          className={`flex justify-between ${textColor} ${bgColor} transition-all duration-300 py-3 px-[10%]`}
        >
          <Image src="/Profile/Logo.png" width={60} height={40} alt="logo" />
          <div className="flex gap-5 font-semibold">
            <button
              className="hover:text-primary transition-all duration-500"
              onClick={() => router.push("/")}
            >
              UTAMA
            </button>
            <button
              className="hover:text-primary transition-all duration-500"
              onClick={() => router.push("#tentang-kami")}
            >
              MENGENAI KAMI
            </button>
            <button
              className="hover:text-primary transition-all duration-500"
              onClick={() => router.push("#pakej")}
            >
              PAKEJ
            </button>
            <button
              className="hover:text-primary transition-all duration-500"
              onClick={() => router.push("/hubungi-kami")}
            >
              HUBUNGI KAMI
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
