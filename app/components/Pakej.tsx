"use client";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { pakej } from "../../lib/pakej";
import { motion } from "framer-motion";

const Pakej = () => {
  return (
    <div className="grid py-5 text-black" id="pakej">
      <h1 className="md:mb-[5%] mb-[10%] text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
        Senarai <span className="text-secondary">Pakej</span> Kami
      </h1>
      <div className="grid md:grid-cols-2 gap-12 px-[12%]">
        {pakej.map((p, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg border-[1px] flex flex-col gap-10 px-10 py-10 bg-white border-gray-200 text drop-shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 * idx }}
          >
            <h2 className="font-semibold text-xl">{p.nama}</h2>
            <div className="grid gap-4">
              <div className="grid gap-5">
                {p.pros.map((pro, i) => (
                  <div key={i} className="flex gap-5 items-center">
                    <FaCheck className="text-secondary" />
                    <p className="text-sm w-full">{pro}</p>
                  </div>
                ))}
                {p.cons?.map((con, i) => (
                  <div key={i} className="flex gap-5 items-center opacity-50">
                    <RxCross2 strokeWidth={1} className="text-secondary" />
                    <p className="text-sm w-full">{con}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`/pakej/${p.link}`}
              className="w-full text-center font-semibold text-white px-5 py-3 text-sm bg-secondary rounded-lg"
            >
              Baca Lanjut
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pakej;
