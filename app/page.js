"use client";

import { Web3 } from "../context/Web3Provider";
import BlogPage from "./blog/page";
import Explore from "./Explore";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <BlogPage />
    </>
  );
}
