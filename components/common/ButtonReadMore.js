"use client";

import styles from "@app/styles";
import { useWeb3 } from "@context/Web3Provider";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@utils/motion";
import Link from "next/link";

const ButtonRM = ({ signed }) => {
  const { isSignedIn, wallet } = useWeb3();
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col pt-4`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div
          variants={textVariant(0.8)}
          viewport={{ once: true }}
          className={`flex flex-row justify-center items-center`}
        >
          {isSignedIn ? (
            <Link
              href="/blog"
              className="font-extrabold px-4 py-2 bg-white backdrop-blur-lg bg-opacity-20 rounded-md z-10 text-primary-black hover:bg-opacity-60 hover:text-pome-dark"
            >
              {signed}
            </Link>
          ) : (
            <button
              className="font-extrabold px-4 py-2 bg-white backdrop-blur-lg bg-opacity-60 rounded-md z-10 text-primary-black hover:bg-opacity-60 hover:text-pome-dark"
              onClick={() => wallet.signIn()}
            >
              Connect To Read More
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ButtonRM;
