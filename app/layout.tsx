import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/layouts/site-header";
import MainNav from "@/components/layouts/main-nav";
import SiteFooter from "@/components/layouts/site-footer";
import { Provider } from "@/components/layouts/provider";
import BackToTopButton from "@/components/ui/backToTopButton";
import { cn } from "@/lib/utils";
import TopBottomAd from "@/components/advertisement/topBottom-ad copy";
const inter = Inter({ subsets: ["latin"] });
import { websiteInfoGQL, navigationGQL } from "@/lib/getGQL";

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const webInfo = await websiteInfoGQL();
  const navigations = await navigationGQL();
  return (
    <html lang="en">
      <body className={cn("", inter.className)}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {/* <MainNav /> */}
          <SiteHeader navigations={navigations} webInfo={webInfo} />
          <TopBottomAd />
          <div className="2xl:container mx-auto max-w-[85rem]">{children}</div>
          <BackToTopButton />
          <TopBottomAd />
          <SiteFooter webInfo={webInfo} />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
