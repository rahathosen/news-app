import type { Metadata } from "next";
import HomeNews from "@/components/homeNews";
import HeadlineNews from "@/components/headlineNews";
import BreakingNews from "@/components/breakingNews";
import {
  newsCategoriesGQL,
  websiteInfoGQL,
  breakingNewsGQL,
  allPosts,
  mainNewsGQL,
  homeHighlightedNewsGQL,
  headLinesGQL,
  allArticlesGQL,
  divisionsGQL,
} from "@/lib/getGQL";
import HighlightNews from "@/components/highlightNews";
import OpnionNews from "@/components/opinion";
import CoverLeaderboardAd from "@/components/advertisement/coverLeaderboardAd";
import HomeBillboardAd from "@/components/advertisement/homeBillboardAd";
import MobileHomeBillboardAd from "@/components/advertisement/mobileHomeBillboardAd";
import MPUAd from "@/components/advertisement/mediumRectangleMPUAd";
import MobileCoverLeaderboardAd from "@/components/advertisement/mobileCoverLeaderboardAd";
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
  const mainNews = await mainNewsGQL();
  const homeHighlightedNews = await homeHighlightedNewsGQL();
  const allArticles = await allArticlesGQL();
  const articles = allArticles.articlesPosts;
  const webInfo = await websiteInfoGQL();

  const division = await divisionsGQL();

  return (
    <main>
      <HeadlineNews headlines={headLineNews.headLine} />
      {/*Billboard Ad  */}
      <div className="my-2 hidden md:block">
        <HomeBillboardAd />
      </div>
      <div className="my-2 block md:hidden">
        <MobileHomeBillboardAd />
      </div>

      {breakingNews.breakingNews ? (
        <BreakingNews breakingNews={breakingNews.breakingNews} />
      ) : null}

      <HighlightNews
        mainNews={mainNews}
        homeHighlightedNews={homeHighlightedNews}
      />

      {/* LearBoard Ad*/}
      <div>
        <div className="my-2 hidden md:block">
          <CoverLeaderboardAd />
        </div>
        <div className="my-2 block md:hidden">
          <MobileCoverLeaderboardAd />
        </div>
      </div>

      <OpnionNews webInfo={webInfo} articles={articles} />
      {/* LearBoard */}
      <div>
        <div className="my-2 hidden md:block">
          <CoverLeaderboardAd />
        </div>
        <div className="my-2 block md:hidden">
          <MobileCoverLeaderboardAd />
        </div>
      </div>

      <HomeNews posts={posts} newsCategory={newsCategory} />
    </main>
  );
}
