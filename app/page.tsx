import type { Metadata } from "next";
import BreakingNews from "@/components/breakingNews";
import HomeNews from "@/components/homeNews";
import { newsCategoriesGQL, websiteInfoGQL, allPosts } from "@/lib/getGQL";

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
  const newsCategory = await newsCategoriesGQL();
  return (
    <main>
      <BreakingNews posts={posts} />
      <HomeNews posts={posts} newsCategory={newsCategory} />
    </main>
  );
}
