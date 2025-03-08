import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondary w-full flex justify-center text-white">
      <div className="py-10 px-5 grid grid-cols-3 justify-between gap-y-5">
        <div className="justify-start space-y-2">
          <div className="flex gap-2">
            <IoCall size={25} />
            <h2>+60143759441</h2>
          </div>
          <div className="flex gap-2">
            <MdOutlineMail size={25} />
            <h2 className="underline">mulanrubyspa@gmail.com</h2>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">ALAMAT KAMI: </h2>
          <h2>
            No 36c-2-5,
            <br />
            Bukit Mas Taman Melawati,
            <br />
            Kuala Lumpur.
          </h2>
        </div>
        <div>
          <h3 className="font-bold">HUBUNGI KAMI</h3>
          <div className="flex justify-start items-center gap-x-3 my-2">
            <Link
              href="https://www.instagram.com/mulan_ruby_confinement/"
              className="hover:scale-110 transition-all duration-300"
            >
              <FaInstagramSquare size={30} />
            </Link>
            <Link
              href="https://www.facebook.com/MulanRubySpaofficial/"
              className="hover:scale-110 transition-all duration-300"
            >
              <FaFacebookSquare size={30} />
            </Link>
            <Link
              href="https://www.tiktok.com/@mulan_ruby_confinement"
              className="hover:scale-110 transition-all duration-300"
            >
              <AiFillTikTok size={35} />
            </Link>
          </div>
          <div className="text-center">
            © Mulan Ruby Spa 2025 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
