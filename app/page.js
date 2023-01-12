import ButtonRM from "@components/common/ButtonReadMore";
import Explore from "./Explore";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ButtonRM signed={"Read More Blog"} />
      <Explore />
    </>
  );
}
