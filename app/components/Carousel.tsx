"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

const Carousel = () => {
  const backgroundImages = [
    {
      id: 0,
      src: "/slider-1.jpg",
      title: "Selamat Datang ke Mulan Ruby Confinement!",
      link: "Buat Tempahan",
    },
    {
      id: 1,
      src: "/slider-2.jpg",
      title: "Buat Tempahan Sekarang",
      link: "Hubungi Kami",
    },
  ];
  const [button, setButton] = useState(0);
  const router = useRouter();

  const clickPrev = () => {
    if (button === 0) {
      setButton(backgroundImages.length - 1);
    } else setButton(0);
  };

  const clickNext = () => {
    if (button === backgroundImages.length - 1) {
      setButton(0);
    } else setButton(button + 1);
  };

  return (
    <div className="w-full min-h-screen" id="top">
      {backgroundImages.map((img, idx) => (
        <div
          className={`bg-cover bg-center bg-fixed h-screen ${
            button === img.id ? "block" : "hidden"
          }`}
          key={idx}
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
          <div
            className="w-full h-screen flex flex-col gap-5 text-white justify-center items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <motion.div
              className="w-full h-screen flex flex-col gap-5 text-white justify-center items-center px-10 py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center w-1/2 space-y-5 mb-10">
                <h1 className="text-4xl font-bold drop-shadow-lg">
                  {img.title}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus ullam rem totam, ex, debitis amet nisi labore quaerat
                  placeat cumque, corrupti vitae iste quisquam mollitia officia
                  recusandae consequuntur est atque?
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center bg-primary text-white w-[180px] py-4 border-l-2 border-white font-semibold hover:bg-white hover:text-black"
                onClick={() => router.push("/tempah")}
              >
                {img.link}
              </motion.button>
              <div className="flex absolute bottom-10">
                <GoChevronLeft
                  size={35}
                  color="white"
                  className={`hover:cursor-pointer`}
                  onClick={clickPrev}
                />
                <GoChevronRight
                  size={35}
                  color="white"
                  className={`hover:cursor-pointer`}
                  onClick={clickNext}
                />
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
