import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

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
          ? "fixed left-0 top-0 w-[80%] md:hidden min-h-screen bg-primary border-r-2 border-white p-10 ease-in duration-500"
          : "fixed left-[-100%] min-h-screen top-0 p-10 ease-in duration-500"
      }
    >
      <div className="flex w-full justify-end items-center">
        <div className="cursor-pointer" onClick={handleNav}>
          <AiOutlineClose size={25} className="text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:hidden font-semibold text-lg items-center mt-10 text-white">
        <button
          className="hover:text-secondary transition-all duration-500"
          onClick={handleNav}
        >
          <Link href="/#tentang-kami">MENGENAI KAMI</Link>
        </button>
        <button
          className="hover:text-secondary transition-all duration-500"
          onClick={handleNav}
        >
          <Link href="/#pakej">PAKEJ</Link>
        </button>
        <button
          className="hover:text-secondary transition-all duration-500"
          onClick={() => router.push("/hubungi")}
        >
          HUBUNGI KAMI
        </button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-secondary text-black w-1/2 py-2 rounded-full"
          onClick={() => router.push("/tempah")}
        >
          TEMPAH
        </motion.button>
      </div>
    </div>
  );
};

export default NavbarOptionsMobile;
