import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const NavbarOptionsWeb = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex gap-5 font-semibold items-center">
      <button
        className="hover:text-secondary transition-all duration-500"
        onClick={() => router.push("/#tentang-kami")}
      >
        MENGENAI KAMI
      </button>
      <button
        className="hover:text-secondary transition-all duration-500"
        onClick={() => router.push("/#pakej")}
      >
        PAKEJ
      </button>
      <button
        className="hover:text-secondary transition-all duration-500"
        onClick={() => router.push("/hubungi-kami")}
      >
        HUBUNGI KAMI
      </button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-white text-black px-5 py-2 rounded-full"
        onClick={() => router.push("/tempah")}
      >
        TEMPAH
      </motion.button>
    </div>
  );
};

export default NavbarOptionsWeb;
