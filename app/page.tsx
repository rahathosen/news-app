import type { Metadata } from "next";
import CoverNews from "@/components/coverNews";
import HomeNews from "@/components/homeNews";
import HeadlineNews from "@/components/headlineNews";
import BreakingNews from "@/components/breakingNews";

import {
  newsCategoriesGQL,
  websiteInfoGQL,
  breakingNewsGQL,
  allPosts,
  coverGQL,
  headLinesGQL,
} from "@/lib/getGQL";
import RowAd from "@/components/advertisement/row-ad";

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
  const breakingNews = await breakingNewsGQL();
  const headLineNews = await headLinesGQL();
  const coverNews = await coverGQL();
  // const webInfo = await websiteInfoGQL();
  // console.log(webInfo.websiteInfo.newsThumbnail)
  // console.log(coverNews);
  // console.log(breakingNews);
  return (
    <main>
      <HeadlineNews headLineNews={headLineNews} />
      <RowAd />
      <BreakingNews breakingNews={breakingNews} />
      <CoverNews
        coverNews={coverNews}
        posts={posts}
        breakingNews={breakingNews}
      />
      <HomeNews posts={posts} newsCategory={newsCategory} />
    </main>
  );
}
