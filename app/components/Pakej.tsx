"use client";
import React, { useState } from "react";

const Pakej = () => {
  const [choice, setChoice] = useState(0);
  return (
    <div className="grid py-[8%] text-white bg-gradient-to-b from-secondary to-white text-center">
      <h1 className="mb-[8%] text-4xl font-bold drop-shadow-lg">
        SENARAI PAKEJ & PERKHIDMATAN
      </h1>
      <div className="flex text-xl font-bold">
        <button
          className={`w-full rounded-tr-full ${
            choice === 0 ? "bg-white text-black" : "bg-transparent"
          } py-2 hover:bg-white hover:text-black transition-all duration-300 `}
          onClick={() => setChoice(0)}
        >
          PAKEJ BERPANTANG
        </button>
        <button
          className={`w-full rounded-t-full ${
            choice === 1 ? "bg-white text-black" : "bg-transparent"
          } hover:bg-white hover:text-black transition-all duration-300`}
          onClick={() => setChoice(1)}
        >
          KESEJAHTERAAN
        </button>
        <button
          className={`w-full rounded-tl-full ${
            choice === 2 ? "bg-white text-black" : "bg-transparent"
          } hover:bg-white hover:text-black transition-all duration-300`}
          onClick={() => setChoice(2)}
        >
          PERKHIDMATAN LAIN
        </button>
      </div>
      <div
        className={`w-full h-screen bg-white text-black ${
          choice === 0 ? "block" : "hidden"
        } py-10 transition-all duration-300`}
      >
        Test Pakej berpantang
      </div>
      <div
        className={`w-full h-screen bg-white text-black ${
          choice === 1 ? "block" : "hidden"
        } py-10 transition-all duration-300`}
      >
        Test Pakej kesejahteraan
      </div>
      <div
        className={`w-full h-screen bg-white text-black ${
          choice === 2 ? "block" : "hidden"
        } py-10 transition-all duration-300`}
      >
        Test Pakej perkhidmatan lain
      </div>
    </div>
  );
};

export default Pakej;
