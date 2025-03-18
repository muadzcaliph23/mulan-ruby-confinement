"use client";
import React from "react";
import Template from "@/app/Template";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHouse } from "react-icons/fa6";

const HubungiTerus = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen px-[10%] py-10 items-center justify-center">
      <Template>
        <h2 className="font-semibold mb-6 text-3xl">
          <span className="text-secondary">Ada soalan?</span> <br />
          Hubungi kami
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
          <Link
            href="https://www.google.com/maps/dir//Bukit+Mas+Apartment,+2%2F4b,+Jalan+Bukit+Mas,+Taman+Melawati,+53100+Kuala+Lumpur,+Selangor/@3.2275089,101.7410187,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x31cc390014d31387:0xd86d6316bb352b2!2m2!1d101.7436482!2d3.2273556!3e0?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            className="w-full"
            target="_blank"
          >
            <motion.div
              className="rounded-lg border-secondary hover:bg-secondary border-2 px-3 py-2 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <FaHouse size={20} />
              <p>
                No36c-2-5, Bukit Mas,
                <br />
                Taman Melawati KL
              </p>
            </motion.div>
          </Link>
        </div>
      </Template>
    </div>
  );
};

export default HubungiTerus;
