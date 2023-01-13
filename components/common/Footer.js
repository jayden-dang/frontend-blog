"use client";

import { footerVariants } from "@utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-4 relative bg-white backdrop-blur-lg bg-opacity-20"
    >
      <div className="grid md:grid-cols-3 grid-cols-1 items-center space-x-2 2xl:max-w-[1280px] w-full mx-auto">
        <div className="grid grid-cols-1">
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
        </div>
        <div className="flex justify-between">
          <SocialIcon
            url="https://www.youtube.com/@blockofvu"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://t.me/dangquangvu"
            fgColor="gray"
            bgColor="transparent"
          />

          <SocialIcon
            url="https://twitter.com/vugomars"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/dangquangvu94/"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="justify-end flex">
          <h2 className="font-extrabold hidden lg:flex text-xl leading-[24px] text-primary items-center">
            <span className="text-light font-bold text-xl items-center">_</span>
            <span className="text-secondary font-bold text-3xl items-center">
              .
            </span>
            HOME{" "}
          </h2>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
