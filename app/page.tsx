import Image from "next/image";
import HighlightNews from "@/components/highlight-news";
import SecondSection from "@/components/secondSection";
import ThirdSection from "@/components/thirdSection";
import ForthSection from "@/components/forthSection";
import SixthSection from "@/components/sixthSection";
import SeventhSection from "@/components/seventhSection";
import EighthSection from "@/components/eighthSection";
import FifthSection from "@/components/fifthSection";

export default function Home() {
  return (
    <main>
      <ForthSection />
      <SecondSection />
      <ThirdSection />

      {/* <HighlightNews/> */}
      {/* <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection /> */}
    </main>
  );
}
