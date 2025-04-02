"use client";
import { pakej } from "@/lib/pakej";
import { Pakej } from "@/types/pakej";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Pilihan = ({ pakejPilihan }: { pakejPilihan: Pakej }) => {
  const router = useRouter();

  return (
    <div className="md:grid md:grid-cols-3 px-6 space-y-10 md:space-y-0 justify-center items-center gap-10 md:px-[130px]">
      {pakej.map((p, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.3 }}
          onClick={() => router.push(`/pakej/${p.link}`)}
          className={`${
            pakejPilihan?.link == p.link ? "bg-primary" : "bg-gray-300"
          } text-white text-lg rounded-lg drop-shadow-lg flex flex-col hover:cursor-pointer`}
        >
          <div className="px-5 py-3">{p.nama.toUpperCase()}</div>
          <div className="bg-white px-5 py-5 text-sm text-gray-500 rounded-b-lg">
            Harga sekitar {p.harga}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Pilihan;
