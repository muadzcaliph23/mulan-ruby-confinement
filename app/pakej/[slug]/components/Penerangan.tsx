import { Pakej } from "@/types/pakej";
import React from "react";

const Penerangan = ({ pakejPilihan }: { pakejPilihan: Pakej }) => {
  return (
    <div className="flex md:px-[130px] px-6 mb-[80px] justify-center items-center text-sm">
      <div className="flex flex-col gap-5 w-full px-10 md:px-[80px] py-10 justify-center rounded-lg drop-shadow-lg border-[1px] bg-white border-gray-200">
        <h1 className="font-medium md:text-2xl text-xl text-center">
          Kandungan Pakej
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium md:text-lg text-[17px]">
            Servis yang disediakan
          </h2>
          <ol className="pl-4 md:pl-5 text-[15px] space-y-1 text-gray-600">
            {pakejPilihan.pros.map((pro, idx) => (
              <li key={idx}>{pro}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Penerangan;
