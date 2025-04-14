import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full flex justify-center text-center items-center text-gray-400 border-t py-[5%] px-5">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex gap-10 text-gray-500 text-[16px]">
          <Link href="/">Utama</Link>
          <Link href="/#pakej">Pakej</Link>
          <Link href="/#servis">Servis</Link>
          <Link href="/hubungi">Hubungi Kami</Link>
        </div>
        <div className="flex justify-center items-center gap-x-8 my-2">
          <Link
            href="https://www.instagram.com/mulan_ruby_confinement/"
            className="hover:scale-110 transition-all duration-300"
          >
            <FaInstagramSquare size={25} />
          </Link>
          <Link
            href="https://www.facebook.com/MulanRubySpaofficial/"
            className="hover:scale-110 transition-all duration-300"
          >
            <FaFacebookSquare size={25} />
          </Link>
          <Link
            href="https://www.tiktok.com/@mulan_ruby_confinement"
            className="hover:scale-110 transition-all duration-300"
          >
            <AiFillTikTok size={30} />
          </Link>
        </div>
        <div className="text-center text-sm">
          © 2025{" "}
          <span className="border-b-2 border-gray-300">Mulan Ruby Spa</span> All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
