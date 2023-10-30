import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/layouts/site-header";
import MainNav from "@/components/layouts/main-nav";
import SiteFooter from "@/components/layouts/site-footer";
import { Provider } from "@/components/layouts/provider";
import BackToTopButton from "@/components/ui/backToTopButton";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Test from "@/components/layouts/test";
import RowAd from "@/components/layouts/row-ad";
import {
  newsCategoriesGQL,
  websiteInfoGQL,
  allPosts,
} from "@/lib/getGQL";

export const metadata: Metadata = {
  title: "দৈনিক উদয়ন",
  description: "দ্রুততম সময়ে সর্বশেষ খবর পেতে - দৈনিক উদয়ন",
  keywords: [
    "দৈনিক উদয়ন",
    "Daily udayan",
    "বাংলা নিউজ",
    "খেলা",
    "খবর",
    "রাজনীতি",
    "সর্বশেষ খবর",
    "বাণিজ্য",
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  // const data = await websiteInfoGQL();
  // console.log(data);
  return (
    <html lang="en">
      <body className={cn("", inter.className)}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {/* <MainNav /> */}
          <SiteHeader />
          <RowAd />

          {/* <Test/> */}
          <div className="2xl:container mx-auto max-w-[85rem]">{children}</div>
          <BackToTopButton />
          <RowAd />
          <SiteFooter />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
