"use client";
import React from "react";
import Template from "@/app/Template";
import HubungiTerus from "./HubungiTerus";

const Butiran = () => {
  return (
    <div
      className="bg-gray-200 min-h-screen grid grid-cols-2 gap-[100px] justify-center items-center bg-no-repeat w-full px-[10%] py-10"
      style={{
        backgroundImage: "url(/wave.svg)",
      }}
    >
      <HubungiTerus />
      <Template>
        <div className="space-y-4">
          <div className="grid gap-1 items-center">
            <p className="font-semibold text-white drop-shadow-md">Email:</p>
            <input
              type="text"
              name="name"
              className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
            />
          </div>
          <div className="grid gap-1 items-center">
            <p className="font-semibold text-white drop-shadow-md">Mesej:</p>
            <textarea
              placeholder="Tulis mesej anda di sini..."
              name="name"
              className="px-3 py-2 h-40 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
            />
          </div>
          <button className="bg-secondary font-semibold w-full py-2 rounded-md hover:bg-[#fdcccf] transition-all duration-500">
            Hantar
          </button>
        </div>
      </Template>
    </div>
  );
};

export default Butiran;
