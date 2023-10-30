import Image from "next/image";
import HighlightNews from "@/components/reserveComponents/highlight-news";
import Section from "@/components/section";
import TopSection from "@/components/reserveComponents/topSection";
import SixthSection from "@/components/reserveComponents/sixthSection";
import SeventhSection from "@/components/reserveComponents/seventhSection";
import EighthSection from "@/components/reserveComponents/eighthSection";
import FifthSection from "@/components/reserveComponents/fifthSection";
import RowAd from "@/components/layouts/row-ad";
import type { Metadata } from "next";
import TopSectionGQL from "@/components/reserveComponents/topSectionGQL";
import BreakingNews from "@/components/breakingNews";
import HomeNews from "@/components/homeNews";
import {
  newsCategoriesGQL,
  websiteInfoGQL,
  allPosts,
} from "@/lib/getGQL";

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
export default async function Home() {
  const posts = await allPosts();
  return (
    <main>
      <BreakingNews posts={posts}/>
      {/* <RowAd /> */}
      <HomeNews />
    </main>
  );
}
