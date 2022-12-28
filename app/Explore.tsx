"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import styles from "./stytes";
import {staggerContainer} from "@utils/motion";
import {exploreWorlds} from "contants";
import ExploreCard from "@components/common/ExplorerCard";

const Explore = () => {
  const [active, setActive] = useState("category-3");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
