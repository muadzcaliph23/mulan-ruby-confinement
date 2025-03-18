"use client";
import React from "react";
import Template from "@/app/Template";
import Link from "next/link";
import Image from "next/image";

const TempahanBasic = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen px-[10%] py-10 items-center justify-center">
      <Template>
        <div className="flex flex-col gap-[100px]">
          <div>
            <h2 className="font-semibold mb-6 text-3xl">
              <span className="text-secondary">Untuk tempahan,</span> <br />
              tekan link di bawah
            </h2>
            <Link
              href="https://forms.gle/3CeWAKgPVspux76S6"
              className="border-b-4 border-secondary hover:text-secondary"
              target="_blank"
            >
              https://forms.gle/3CeWAKgPVspux76S6
            </Link>
          </div>
          <div>
            <h2 className="font-semibold mb-6 text-3xl">QR Payment</h2>
            <div>
              <Image
                src="/Tempahan/QR_payment.jpg"
                alt="QR"
                width={200}
                height={400}
                className="border-secondary w-full p-1 border-4 rounded-t-xl"
              />
              <p className="text-center text-xl text-white p-1 font-semibold rounded-b-xl bg-black">
                Mulan Ruby Spa
              </p>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default TempahanBasic;
