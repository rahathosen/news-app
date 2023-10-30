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
import TopSectionGQL from "@/components/topSectionGQL";
export const metadata: Metadata = {
  title: "দৈনিক উদয়ন",
  description: "দৈনিক উদয়ন, একটি বাংলা পত্রিকা",
  keywords: [
    "দৈনিক উদয়ন",
    "Daily udayan",
    "বাংলা নিউজ",
    "খেলা",
    "রাজনীতি",
    "বাণিজ্য",
  ],
};
export default function Home() {
  return (
    <main>
      {/* <TopSectionGQL /> */}
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
