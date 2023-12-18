import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RelativeDate from "@/lib/relativeDate";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { featurePostsGQL, websiteInfoGQL, allfeatureGQL } from "@/lib/getGQL";
import OtherPageSuperLeadeAd from "@/components/advertisement/otherPageSuperLeadeAd";
import OtherPageLeaderboardAd from "@/components/advertisement/OtherPageLeaderboardAd";
import SmallBannerAd from "@/components/advertisement/smallBannerAd";

export const generateMetadata = async ({}): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  return {
    title: `ফিচার - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `ফিচার - ${webInfo.websiteInfo.title}`,
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
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default async function Page() {
  const webInfo = await websiteInfoGQL();
  const featurelist = await allfeatureGQL();
  const features = featurelist.allFeature;
  const allFeaturePosts = await featurePostsGQL();
  const allposts = allFeaturePosts.featurePosts;
  return (
    <>
    <OtherPageSuperLeadeAd/>
      <div className=" dark:bg-[#040D12]  2xl:p-8 rounded-b-lg rounded-t-lg   pt-4 mb-4 pb-4">
        <div className="px-4 ">
          <h2 className="text-black dark:text-gray-400 lg:text-3xl text-xl font-bold">
            <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
            ফিচার
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
                  {features.map((tab: any) => (
                    <Link
                      key={tab.uniqueId}
                      href={`/feature/${tab.uniqueId}`}
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

          <div className="grid grid-cols-1  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
            <div className="col-span-5">
              <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                  <div className="flex flex-row flex-wrap ">
                    {allposts.map((post: any) => (
                      <div
                        key={post.uniqueId}
                        className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                      >
                        <div className="flex flex-row sm:block hover-img max-h-18">
                          <Link href={`../feature/details/${post.uniqueId}`}>
                            <Image
                              src={
                                post.image || webInfo.websiteInfo.newsThumbnail
                              }
                              alt={post.title}
                              width={640}
                              height={427}
                              className="sm:max-w-full aspect-[3/4]  mx-auto object-cover max-w-[140px] max-h-20 sm:w-full  sm:max-h-[12.7rem] rounded-md"
                            />
                          </Link>
                          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                              <Link
                                href={`../feature/${post.feature.uniqueId}/${post.category.uniqueId}`}
                              >
                                <span className="text-red-600 dark:text-red-800">
                                  {" "}
                                  {post.category.title}
                                </span>
                              </Link>{" "}
                              {" / "}
                              <Link href={`../feature/details/${post.uniqueId}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="hidden md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                              <div>
                                {post.description.slice(0, 100) + "..."}
                              </div>
                            </p>
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
                <TabsContent value="mostpopular">
                  সর্বাধিক পঠিত here.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd/>
    </>
  );
}
