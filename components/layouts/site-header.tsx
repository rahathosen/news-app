import { ReactNode, HTMLProps } from "react";
import SiteHeaderNavigations from "./site-header-navigations";
import { newsCategoriesGQL, allPosts, opinionGQL,allArticlesGQL } from "@/lib/getGQL";

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

export default async function SiteHeader({ webInfo, navigations }: any) {
  const newsCategories = await newsCategoriesGQL();
  const posts = await allPosts();
  const opinions = await opinionGQL();
  const allArticles = await allArticlesGQL();
  const articles = allArticles.articlesPosts;
  return (
    <div className="bg-white dark:bg-[#040D12] sticky top-0 z-10 shadow-2xl mx-auto 2xl:container max-w-full ">
      <div>
        <div>
          <div>
            <SiteHeaderNavigations
              posts={posts}
              opinions={opinions}
              webInfo={webInfo}
              navigations={navigations}
              newsCategories={newsCategories}
              articles={articles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
