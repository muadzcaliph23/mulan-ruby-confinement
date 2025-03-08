"use client";
import React from "react";
import Image from "next/image";
import {
  HandCoins,
  ListChecks,
  MousePointerClick,
  Smile,
  UserSearch,
} from "lucide-react";
import { TbMassage } from "react-icons/tb";
import Link from "next/link";

const Steps = () => {
  const steps = [
    {
      step: "1) Layar",
      description: "Layari Mulan Ruby Spa",
      icon: <UserSearch size={40} />,
    },
    {
      step: "2) Pilih",
      description: "Pilih pakej dan masukkan butiran",
      icon: <MousePointerClick size={40} />,
    },
    {
      step: "3) Bayar",
      description: "Laksanakan pembayaran",
      icon: <HandCoins size={40} />,
    },
    {
      step: "4) Siap",
      description: "Nikmati perkhidmatan kami",
      icon: <TbMassage size={40} />,
    },
    {
      step: "5) Nilai",
      description: "Isikan borang penilaian",
      icon: <ListChecks size={40} />,
    },
    {
      step: "6) Tamat",
      description: "Terima kasih dari Mulan Ruby Spa",
      icon: <Smile size={40} />,
    },
  ];
  return (
    <div className="py-[8%] px-[5%] min-h-screen">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold drop-shadow-lg mb-[7%]">
          CARA PENGGUNAAN LAMAN WEB
        </h1>
        <div className="grid grid-cols-6 gap-10 mb-[7%]">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`border-2 flex hover:text-white flex-col gap-6 items-center px-3 pt-3 pb-8 rounded-xl w-[150px] hover:scale-105 transition-all duration-300 ${
                idx % 2 === 0
                  ? "border-primary hover:bg-primary"
                  : "border-secondary hover:bg-secondary"
              }`}
            >
              <h2 className="font-semibold">{s.step}</h2>
              <div className="py-2">{s.icon}</div>
              <p className="font-extralight leading-5">{s.description}</p>
            </div>
          ))}
        </div>
        <Link
          className="bg-primary font-semibold text-white px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-500"
          href="/#top"
        >
          Back to top
        </Link>
      </div>
    </div>
  );
};

export default Steps;
