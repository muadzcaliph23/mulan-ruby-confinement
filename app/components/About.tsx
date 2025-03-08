"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <motion.div
      id="tentang-kami"
      className="min-h-screen flex items-center justify-center"
      initial={{ background: "linear-gradient(45deg, #FBA6AA, #860F0F)" }}
      animate={{
        background: [
          "linear-gradient(45deg, #f4e0e0, #fba6aa)",
          "linear-gradient(45deg, #000000, #860F0F)",
        ],
      }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      <h1 className="text-white text-4xl font-bold">Tentang Kami</h1>
    </motion.div>
  );
};

export default About;
