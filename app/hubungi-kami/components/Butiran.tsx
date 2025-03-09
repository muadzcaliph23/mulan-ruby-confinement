"use client";
import React from "react";
import Template from "@/app/Template";
import HubungiTerus from "./HubungiTerus";
import { useForm } from "react-hook-form";
import { Mesej } from "@/types/mesej";

const Butiran = () => {
  const form = useForm<Mesej>();
  const {
    handleSubmit,
    setError,
    register,
    setValue,
    formState: { isSubmitting, errors },
  } = form;

  return (
    <div
      className="bg-gray-200 min-h-screen md:grid md:grid-cols-2 flex flex-col gap-[50px] md:gap-[100px] justify-center items-center bg-no-repeat w-full px-[10%] py-10"
      style={{
        backgroundImage: "url(/wave.svg)",
      }}
    >
      <HubungiTerus />
      <form className="space-y-4 w-full">
        <Template>
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
          <button className="bg-secondary font-semibold w-full py-2 mt-4 rounded-md hover:bg-[#fdcccf] transition-all duration-500">
            Hantar
          </button>
        </Template>
      </form>
    </div>
  );
};

export default Butiran;
