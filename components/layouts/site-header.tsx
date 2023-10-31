import { ReactNode, HTMLProps } from "react";
import SiteHeaderNavigations from "./site-header-navigations";
import { newsCategoriesGQL, allPosts, websiteInfoGQL } from "@/lib/getGQL";
export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function SiteHeader({ webInfo, navigations }: any) {
  const newsCategories = await newsCategoriesGQL();

  return (
    <div className="bg-[#F5F5F4] dark:bg-[#040D12] sticky top-0 z-10 shadow-2xl mx-auto 2xl:container max-w-full ">
      <div>
        <div>
          <div>
            <SiteHeaderNavigations
              webInfo={webInfo}
              navigations={navigations}
              newsCategories={newsCategories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
