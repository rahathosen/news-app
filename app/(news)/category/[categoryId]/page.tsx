import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { newsCategoriesGQL, allPosts, websiteInfoGQL,postByCategoryGQL,newsCategorygGQL } from "@/lib/getGQL";
import Category from "@/components/layouts/category";
import OtherPageLeaderboardAd from "@/components/advertisement/OtherPageLeaderboardAd";
import OtherPageSuperLeadeAd from "@/components/advertisement/otherPageSuperLeadeAd";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const newsCategory = await newsCategorygGQL(params.categoryId);
  const category = newsCategory.newsCategory

  return {
    title: `${category.title} - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `${category.title} - ${webInfo.websiteInfo.title}`,
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  params: { categoryId: string };
};

export default async function Page({ params }: Props) {
  const webInfo = await websiteInfoGQL();
  const newsCategory = await newsCategorygGQL(params.categoryId);
  const category = newsCategory.newsCategory

  const postByCategory = await postByCategoryGQL(category.uniqueId);
  const categoryPosts = postByCategory.postByCategory
  return (
    <div>
      <OtherPageSuperLeadeAd/>
      
      <div className="bg-white dark:bg-[#040D12] 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
        <div>
          <div className="relative xl:container mx-auto px-3 sm:px-4 xl:px-2 py-4 ">
            <div className="relative">
              <h2 className=" text-gray-500 dark:text-gray-400 lg:text-2xl pb-4 text-xl font-bold">
                <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                {category.title}
              </h2>
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                </div>
                <div className="no-scrollbar overflow-x-auto">
                  <div className="border-b border-gray-200 dark:border-[#071720]">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {category.newssubcategorySet.map((tab: any) => (
                        <Link
                          key={tab.title}
                          href={`${category.uniqueId}/${tab.uniqueId}`}
                          className={classNames(
                            tab.current
                              ? "dark:border-gray-500 border-black text-black dark:text-gray-200"
                              : "border-transparent text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                          
                        >
                          {tab.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
              {/* Tab end */}
              <Category webInfo={webInfo} categoryPosts={categoryPosts} />
            </div>
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd/>
    </div>
  );
}
