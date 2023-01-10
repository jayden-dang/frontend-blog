"use client";

import { footerVariants } from "@utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-4 relative bg-white backdrop-blur-lg bg-opacity-20"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 items-center space-x-2 2xl:max-w-[1280px] w-full mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <Link href="/" className="flex items-center space-x-2 z-10">
              <Image
                src="/images/logo.jpg"
                width={40}
                height={40}
                alt="logo"
                className="rounded-full"
              />
              <h2 className="font-extrabold hidden lg:flex text-xl leading-[24px] text-primary items-center">
                VUGOMARS{" "}
                <span className="text-secondary font-bold text-3xl items-center">
                  .
                </span>
                <span className="text-light font-bold text-xl items-center">
                  _
                </span>
              </h2>
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-xl">Resources</h1>
            <p className="font-light text-sm cursor-pointer">Project</p>
            <p className="font-light text-sm cursor-pointer">Articles</p>
            <p className="font-light text-sm cursor-pointer">Blog</p>
            <p className="font-light text-sm cursor-pointer">Video</p>
            <p className="font-light text-sm cursor-pointer">Courses</p>
          </div>
        </div>
        <div className="justify-end flex">
          <h1 className="font-bold text-xl">Resources</h1>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
