import Image from "next/image";

import IconCard from "@/components/cards/IconCard";
import IconCard2 from "@/components/cards/IconCard2";

import SectionA from "@/components/sections/home/SectionA";
import SectionB from "@/components/sections/home/SectionB";
import SectionC from "@/components/sections/home/SectionC";
import SectionD from "@/components/sections/home/SectionD";
import SectionE from "@/components/sections/home/SectionE";
import SectionF from "@/components/sections/home/SectionF";

export default function Home() {
  return (
    <>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
    </>
  );
}
