import type { Metadata } from "next";
import BreakingNews from "@/components/breakingNews";
import HomeNews from "@/components/homeNews";
import { newsCategoriesGQL, websiteInfoGQL, allPosts } from "@/lib/getGQL";

export const generateMetadata = async (): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  return {
    title: `${webInfo.title}`,
    description: `${webInfo.tagLine}`,
    keywords: [
      "বিডি নিউজ ২০",
      "bdnews20.com",
      "বাংলা নিউজ",
      "খেলা",
      "রাজনীতি",
      "বাণিজ্য",
    ],
    openGraph: {
      title: `${webInfo.title}`,
      url: `${webInfo.url}`,
      description: `${webInfo.tagLine}`,
      siteName: `${webInfo.title}`,
      images: [
        {
          url: `${webInfo.newsThumbnail}`,
          width: 1200,
          height: 630,
        },
        {
          url: `${webInfo.newsThumbnail}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
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
