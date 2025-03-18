"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Pakej = () => {
  const pakej = [
    {
      nama: "Mulan Ruby Mama Glow",
      harga: "RM2,500",
      pros: [
        "Training Fee",
        "Tuition Fee",
        "Professional Fee",
        "Examination Fee",
      ],
      cons: ["Allowance"],
      link: "/mama-glow",
    },
    {
      nama: "Mulan Ruby Mama Light",
      harga: "RM2,000",
      pros: [
        "Training Fee",
        "Tuition Fee",
        "Professional Fee",
        "Examination Fee",
      ],
      cons: ["Allowance"],
      link: "/mama-light",
    },
    {
      nama: "Mulan Ruby Mama White",
      harga: "RM2,000",
      pros: [
        "Training Fee",
        "Tuition Fee",
        "Professional Fee",
        "Examination Fee",
      ],
      cons: ["Allowance"],
      link: "/mama-white",
    },
  ];
  return (
    <div className="grid py-5 text-black" id="pakej">
      <h1 className="md:mb-[5%] mb-[10%] text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
        Senarai <span className="text-secondary">Pakej</span> Kami
      </h1>
      <div className="grid md:grid-cols-3 gap-7 px-[10%]">
        {pakej.map((p, idx) => (
          <div
            key={idx}
            className="rounded-lg border-[1px] flex flex-col gap-10 px-10 py-10 bg-white border-gray-200 text drop-shadow-md"
          >
            <h2 className="font-semibold text-xl">{p.nama}</h2>
            <div className="grid gap-4">
              <h3 className="text-3xl text-secondary font-semibold">
                {p.harga}
              </h3>
              <ol className="grid gap-5">
                {p.pros.map((pro, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <FaCheck className="text-secondary" />
                    <li className="text-sm">{pro}</li>
                  </div>
                ))}
                {p.cons.map((con, i) => (
                  <div key={i} className="flex gap-5 items-center opacity-50">
                    <RxCross2 strokeWidth={1} className="text-secondary" />
                    <li className="text-sm">{con}</li>
                  </div>
                ))}
              </ol>
            </div>
            <button className="w-full text-center font-semibold text-white px-5 py-3 text-sm bg-secondary rounded-lg">
              Baca Lanjut
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pakej;
