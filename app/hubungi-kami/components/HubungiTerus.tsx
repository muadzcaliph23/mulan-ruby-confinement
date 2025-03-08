import React from "react";
import Template from "@/app/Template";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const HubungiTerus = () => {
  return (
    <Template>
      <div className="flex flex-col">
        <h2 className="font-semibold mb-5">
          Sila gunakan borang di sebelah untuk menghubungi kami. Untuk mendapat
          respon yang cepat, anda boleh hubungi di:
        </h2>
        <div className="flex flex-col gap-3">
          <Link
            className="w-full"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=60143759441"
          >
            <motion.div
              className="rounded-lg border-secondary hover:bg-secondary border-2 px-3 py-1 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <IoCall size={20} />
              <p>+60143759441</p>
            </motion.div>
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfsdQQlmSJJPncGlqdPVSwNgMJjGhmfNHStvdmvdLVQPBPzZGbWBLflsxvDKKHXtHNQdRL"
            className="w-full"
            target="_blank"
          >
            <motion.div
              className="rounded-lg border-secondary hover:bg-secondary border-2 px-3 py-1 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <MdOutlineMail size={20} />
              <p>mulanrubyspa@gmail.com</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </Template>
  );
};

export default HubungiTerus;
