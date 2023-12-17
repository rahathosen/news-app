import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import RelativeDate from "@/lib/relativeDate";
import type { Metadata, ResolvingMetadata } from "next";
import {
  articleCategoryGQL,
  opinionGQL,
  websiteInfoGQL,
  articleByCategoryGQL,
} from "@/lib/getGQL";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OtherPageSuperLeadeAd from "@/components/advertisement/otherPageSuperLeadeAd";
import OtherPageLeaderboardAd from "@/components/advertisement/OtherPageLeaderboardAd";
import SmallBannerAd from "@/components/advertisement/smallBannerAd";

type Props = {
  params: { articlecuId: string };
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const articleCategory = await articleCategoryGQL(params.articlecuId);
  return {
    title: `মতামত - ${articleCategory.articleCategory.title}`,
    openGraph: {
      title: ` মতামত - ${articleCategory.articleCategory.title}`,
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

export default async function Page({ params }: Props) {
  const webInfo = await websiteInfoGQL();
  const opinions = await opinionGQL();
  const articleByCategory = await articleByCategoryGQL(params.articlecuId);
  const articleCategory = await articleCategoryGQL(params.articlecuId);

  return (
    <div>
      <OtherPageSuperLeadeAd />
      <div className="bg-stone-100 dark:bg-[#040D12]  2xl:p-8 rounded-b-lg rounded-t-lg   pt-4 mb-4 pb-4">
        <div className="px-4 ">
          <h2 className="text-black dark:text-gray-400 lg:text-3xl text-xl font-bold">
            <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
            <Link href={"/article"}>মতামত</Link>
            <span className="inline-block lg:px-4 px-2 lg:h-[28px] h-[25px] items-center ">
              {" "}
              <ChevronRightIcon
                className="lg:h-10 h-8 w-8 lg:w-10 text-gray-300 dark:text-[#071720]"
                aria-hidden="true"
              />
            </span>
            {articleCategory.articleCategory.title}
          </h2>
          <div className="pb-4">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
            </div>
            <div className="no-scrollbar overflow-x-auto">
              <div className="border-b border-gray-200 dark:border-[#071720]">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {opinions.articleCategories.map((tab: any) => (
                    <Link
                      key={tab.uniqueId}
                      href={`/article/${tab.uniqueId}`}
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
        </div>
        <div className="grid grid-cols-1 px-2  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
          <div className="col-span-5">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full overflow-hidden">
                <div className="flex flex-row flex-wrap ">
                  {articleByCategory.articleByCategory.map((post: any) => (
                    <div
                      key={post.uniqueId}
                      className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                    >
                      <div className="flex flex-row sm:block hover-img max-h-18">
                        <Link href={`../article/details/${post.uniqueId}`}>
                          <Image
                            src={
                              post.image || webInfo.websiteInfo.newsThumbnail
                            }
                            alt={""}
                            width={640}
                            height={427}
                            className="sm:max-w-full aspect-[3/4]  mx-auto object-cover max-w-[140px] max-h-20 sm:w-full  sm:max-h-[12.7rem] rounded-md"
                          />
                        </Link>
                        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                          <h3 className="text-lg font-bold leading-tight line-clamp-3 mb-2 text-black dark:text-white">
                            <Link href={`../article/details/${post.uniqueId}`}>
                              {post.title}
                            </Link>
                          </h3>
                          <div className="hidden  md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.details.slice(0, 50) + "...",
                              }}
                            />
                          </div>
                            <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                              <RelativeDate date={post.createdAt} />{" "}
                            </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-auto col-span-2 ">
            <div className="lg:mb-4">
              <SmallBannerAd />
            </div>
            <Tabs defaultValue="lastnews" className="w-full">
              <TabsList>
                <TabsTrigger value="lastnews">সর্বশেষ</TabsTrigger>
                <TabsTrigger value="mostpopular">সর্বাধিক পঠিত</TabsTrigger>
              </TabsList>
              <TabsContent value="lastnews">সর্বশেষ সংবাদ here.</TabsContent>
              <TabsContent value="mostpopular">সর্বাধিক পঠিত here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd />
    </div>
  );
}
