import {iconVariants} from "@utils/motion";
import BlogPage from "./blog/page";
import Explore from "./Explore";
import {motion} from "framer-motion";
import Hero from "./hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <BlogPage />
    </>
  );
}
