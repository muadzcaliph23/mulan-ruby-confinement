import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const NavbarOptionsMobile = ({
  menuOpen,
  handleNav,
}: {
  menuOpen: boolean;
  handleNav: () => void;
}) => {
  const router = useRouter();

  return (
    <div
      className={
        menuOpen
          ? "fixed left-0 top-0 w-[80%] md:hidden min-h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }
    >
      <div className="flex w-full justify-end items-center">
        <div className="cursor-pointer" onClick={handleNav}>
          <AiOutlineClose size={25} />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:hidden font-semibold text-lg items-center mt-10">
        <button
          className="hover:text-primary transition-all duration-500"
          onClick={() => router.push("/#tentang-kami")}
        >
          MENGENAI KAMI
        </button>
        <button
          className="hover:text-primary transition-all duration-500"
          onClick={() => router.push("/#pakej")}
        >
          PAKEJ
        </button>
        <button
          className="hover:text-primary transition-all duration-500"
          onClick={() => router.push("/hubungi-kami")}
        >
          HUBUNGI KAMI
        </button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-white w-1/2 py-2 rounded-full"
          onClick={() => router.push("/tempah")}
        >
          TEMPAH
        </motion.button>
      </div>
    </div>
  );
};

export default NavbarOptionsMobile;
