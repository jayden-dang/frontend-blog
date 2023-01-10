"use client";
import { motion } from "framer-motion";
import styles from "@app/styles";
import { staggerContainer, textVariant } from "@utils/motion";

const Hero = () => {
  return (
    <section className={`sm:py-8 xs:py-6 py-8 sm:pl-16 pl-6 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div
            variants={textVariant(0.5)}
            viewport={{ once: true }}
            className={`flex flex-row justify-center items-center`}
          >
            <div className={styles.heroDText} />
            <h1 className={`${styles.heroHeading} select-none`}>ANG VU</h1>
          </motion.div>
          <motion.div
            variants={textVariant(0.7)}
            viewport={{ once: true }}
            className={`flex flex-row justify-center items-center text-center`}
          >
            <h1 className="text-2xl tracking-[0.5em] select-none text-center">
              FULLSTACK BLOCKCHAIN DEVELOPER
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
