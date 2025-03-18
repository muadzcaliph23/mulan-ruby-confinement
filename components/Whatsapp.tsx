import Link from "next/link";
import React from "react";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <Link
      className="w-full"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=60143759441"
    >
      <div className="hidden md:flex">
        <Image
          src="/whatsapp.png"
          alt="whatsapp"
          className="z-10"
          width={40}
          height={20}
        />
        <div className="pl-12 pr-5 py-2 bg-white md:relative md:right-9 rounded-full text-black font-semibold border-primary border-2">
          Contact Us
        </div>
      </div>
      <Image
        src="/whatsapp.png"
        alt="whatsapp"
        className="flex md:hidden z-10"
        width={55}
        height={20}
      />
    </Link>
  );
};

export default Whatsapp;
