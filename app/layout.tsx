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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
