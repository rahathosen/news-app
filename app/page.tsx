import Image from "next/image";
import HighlightNews from "@/components/highlight-news";
import MiddleSection from "@/components/middleSection";
import BottomSection from "@/components/bottomSection";
import TopSection from "@/components/topSection";
import SixthSection from "@/components/sixthSection";
import SeventhSection from "@/components/seventhSection";
import EighthSection from "@/components/eighthSection";
import FifthSection from "@/components/fifthSection";
import RowAd from "@/components/layouts/row-ad";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dailyudayan",
  description: "Dailyudayan",
};
export default function Home() {
  return (
    <main>
      <TopSection />
      <RowAd />
      <MiddleSection />
      <RowAd />
      <BottomSection />

      {/* <HighlightNews/> */}
      {/* <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection /> */}
    </main>
  );
}
