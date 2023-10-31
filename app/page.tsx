import type { Metadata } from "next";
import BreakingNews from "@/components/breakingNews";
import HomeNews from "@/components/homeNews";
import { newsCategoriesGQL, websiteInfoGQL, allPosts } from "@/lib/getGQL";

export const generateMetadata = async (): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  return {
    title: `${webInfo.websiteInfo.title}`,
    description: `${webInfo.websiteInfo.tagLine}`,
    keywords: [
      "বিডি নিউজ ২০",
      "bdnews20.com",
      "বাংলা নিউজ",
      "খেলা",
      "রাজনীতি",
      "বাণিজ্য",
    ],
    openGraph: {
      title: `${webInfo.websiteInfo.title}`,
      url: `${webInfo.websiteInfo.url}`,
      description: `${webInfo.websiteInfo.tagLine}`,
      siteName: `${webInfo.websiteInfo.title}`,
      images: [
        {
          url: `${webInfo.websiteInfo.newsThumbnail}`,
          width: 1200,
          height: 630,
        },
        {
          url: `${webInfo.websiteInfo.newsThumbnail}`,
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
  // const webInfo = await websiteInfoGQL();
  // console.log(webInfo.websiteInfo.newsThumbnail)
  return (
    <main>
      <BreakingNews posts={posts} />
      <HomeNews posts={posts} newsCategory={newsCategory} />
    </main>
  );
}
