"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {iconVariants, navVariants} from "@utils/motion";
import Link from "next/link";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className=" sm:px-16 px-6 py-4 relative bg-white backdrop-blur-lg bg-opacity-20"
      >
        <div className="flex items-center space-x-2">
          <div className=" 2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
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
            <div className="flex items-center space-x-4">
              <div className="items-center space-x-4 hidden md:flex mr-4">
                <Link
                  href="#"
                  className="cursor-pointer z-10 justify-end flex flex-col text-right hover:text-primary"
                >
                  <p className="text-[10px] items-end justify-end font-light text-gray-300">
                    01
                  </p>
                  <p className="font-medium">// home</p>
                </Link>
                <Link
                  href="/about"
                  className="cursor-pointer z-10 justify-end flex flex-col text-right hover:text-primary"
                >
                  <p className="text-[10px] items-end justify-end font-light text-gray-300">
                    02
                  </p>
                  <p>// about</p>
                </Link>
                <Link
                  href="#"
                  className="cursor-pointer z-10 justify-end flex flex-col text-right hover:text-primary"
                >
                  <p className="text-[10px] items-end justify-end font-light text-gray-300">
                    03
                  </p>
                  <p>// courses</p>
                </Link>
              </div>
              <img
                src="/menu.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain cursor-pointer flex lg:hidden items-center"
              />
              <button className="font-extrabold px-4 py-2 bg-white backdrop-blur-lg bg-opacity-20 rounded-md z-10 text-primary-black hover:bg-opacity-60 hover:text-pome-dark">
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 inset-0 gradient-01 select-none" />
        <div className="absolute w-[50%] inset-0 gradient-01 select-none" />
      </motion.nav>
      <motion.div
        variants={iconVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="relative -z-20"
      >
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-primary to-pome absolute -right-40 md:-right-30 lg:-right-10 -top-60 -z-20 animate-pulse" />
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute rotate-15 -top-32 -left-20 md:-top-40 -z-20" />
      </motion.div>
    </header>
  );
};

export default Header;
