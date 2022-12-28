"use client";
import {motion} from "framer-motion";
import styles from "@app/stytes";
import {staggerContainer, textVariant} from "@utils/motion";

interface IHeroProps {}

const Hero = (props: IHeroProps) => {
  return (
    <section className={`sm:py-8 xs:py-6 py-8 sm:pl-16 pl-6 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div
            variants={textVariant(1.0)}
            className={`flex flex-row justify-center items-center`}
          >
            <div className={styles.heroDText} />
            <h1 className={`${styles.heroHeading} select-none`}>ANG VU</h1>
          </motion.div>
          <motion.div
            variants={textVariant(1.2)}
            className={`flex flex-row justify-center items-center`}
          >
            <h1 className="text-2xl tracking-[0.5em] select-none">
              FULLSTACK BLOCKCHAIN DEVELOPER
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
