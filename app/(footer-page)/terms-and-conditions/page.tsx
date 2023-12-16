import {
  websiteInfoGQL,
} from "@/lib/getGQL";
import CoverLeaderboardAd from "@/components/advertisement/coverLeaderboardAd";
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  return {
    title: `শার্তাবলি ও নীতিমালা | ${webInfo.websiteInfo.title}`,
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
      title: `শার্তাবলি ও নীতিমালা | ${webInfo.websiteInfo.title}`,
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

export default async function Page() {
  const webInfo = await websiteInfoGQL();
  return (
    <>
      <CoverLeaderboardAd />
      <div className="bg-white dark:bg-[#040D12] 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 px-4 pb-4">
        <h1 className="font-bold text-2xl"> শার্তাবলি ও নীতিমালা </h1>
        <p className="mt-6 text-lg leading-8 dark:text-gray-400">
          <div
            dangerouslySetInnerHTML={{
              __html: webInfo.websiteInfo.commentPolicy,
            }}
          />
        </p>
      </div>
      <CoverLeaderboardAd />
    </>
  );
}
