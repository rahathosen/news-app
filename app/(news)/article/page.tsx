import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allArticlesGQL, websiteInfoGQL } from "@/lib/getGQL";
import RelativeDate from "@/lib/relativeDate";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import OpnionNews from "@/components/opinion";

export const generateMetadata = async ({}): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  return {
    title: `মতামত - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `মতামত - ${webInfo.websiteInfo.title}`,
      // description: `${post.description.slice(0, 400)}`,
      url: `${webInfo.websiteInfo.url}`,
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
  const allArticles = await allArticlesGQL();
  const articles = allArticles.articlesPosts;

  return (
    <>
      <OpnionNews webInfo={webInfo} articles={articles} />
    </>
  );
}
