"use client";
import { Pakej } from "@/types/pakej";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Tempah = ({ pakejPilihan }: { pakejPilihan: Pakej }) => {
  return (
    <div className="flex md:px-[130px] px-6 md:h-[200px] justify-center items-center text-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="md:flex grid md:gap-10 h-full w-full items-center rounded-lg bg-secondary overflow-hidden px-10 py-8 md:py-1 md:pl-[100px]"
      >
        <Image
          src="/spa.png"
          alt="spa"
          className="bg-cover"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-2 md:pl-[90px] text-center items-center md:items-start">
          <h1 className="font-semibold text-lg">{pakejPilihan?.nama}</h1>
          <p className=" mt-4">Untuk pakej ini, harga boleh dibincangkan</p>
          <div className="flex gap-2">
            <Link
              href="/tempah"
              className="bg-primary text-center text-white py-1.5 px-2 rounded-lg hover:bg-red-800"
            >
              Tempah Sekarang
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=60143759441&message=Test"
              target="_blank"
              className="bg-primary text-center text-white py-1.5 px-2 rounded-lg hover:bg-red-800"
            >
              Nak Tanya?
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tempah;
