"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { iconVariants, navVariants, textVariant } from "@utils/motion";

const Infomation = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Fullname's Dang Quang Vu",
      "My Channel Youtube is @blockofvu",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      variants={textVariant(0.9)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-2 pt-2"
    >
      <div className="flex flex-col w-full lg:w-1/3 items-center justify-center max-w-[1280px] mx-auto text-xs md:text-lg font-bold md:font-extrabold px-4 py-2 bg-white backdrop-blur-lg bg-opacity-20 rounded-md z-10 text-white">
        <h1>
          <span>
            {text}
            <Cursor cursorColor="#f7ab0a" />
          </span>
        </h1>

        <span className="text-[14px] md:text-lg text-gray-400 font-light text-center">
          I made my entrance into the world on Nov 21, 1994, in Vietnam. I'm the
          founder of 2 platform is W3 E-Learning and W3 Social Outsourcing, both
          are all web 3 platform. Currently, I am still a lecturer on blockchain
          programming of Vietnam Blockchain Innovation and a expert member of
          Near Vietnam Hub & Golden Finance Innovation (GFI Venture) with the
          main task is evaluating and analyzing technical aspects of approved
          grant.
        </span>
      </div>
    </motion.div>
  );
};

export default Infomation;
