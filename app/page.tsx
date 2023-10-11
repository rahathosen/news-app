import Image from "next/image";
import HighlightNews from "@/components/highlight-news";
import SecondSection from "@/components/secondSection";
import ThirdSection from "@/components/thirdSection";
import ForthSection from "@/components/forthSection";
import SixthSection from "@/components/sixthSection";
import SeventhSection from "@/components/seventhSection";
import EighthSection from "@/components/eighthSection";
import FifthSection from "@/components/fifthSection";
import RowAd from "@/components/layouts/row-ad";

export default function Home() {
  return (
    <main>
      <ForthSection />
      <RowAd />
      <SecondSection />
      <RowAd />
      <ThirdSection />

      {/* <HighlightNews/> */}
      {/* <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection /> */}
    </main>
  );
}
