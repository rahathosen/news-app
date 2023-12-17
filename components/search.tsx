import Image from "next/image";
import Link from "next/link";
import { allPosts, divisionsGQL, websiteInfoGQL   } from "@/lib/getGQL";
import RelativeDate from "@/lib/relativeDate";
import SmallBannerAd from "./advertisement/smallBannerAd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LocationDropdowns from "./dropdownSelect";
import MPUAd from "./advertisement/mediumRectangleMPUAd";
import OtherPageLeaderboardAd from "./advertisement/OtherPageLeaderboardAd";
import OtherPageSuperLeadeAd from "./advertisement/otherPageSuperLeadeAd";

export default async function Search() {
  const webInfo = await websiteInfoGQL();
  const posts = await allPosts();
  const Divisions = await divisionsGQL();
  const allDivision = Divisions.divisions;
  return (
    <>
      <OtherPageSuperLeadeAd />
      <div className="bg-white dark:bg-[#040D12] 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 my-2 pb-4">
        <div className="grid grid-cols-1 px-2  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
          <div className="col-start-auto col-span-2 ">
            <LocationDropdowns allDivision={allDivision} />
            <div className="lg:pt-4">
              <MPUAd />
            </div>
            <Tabs
              defaultValue="lastnews"
              className="w-full lg:pt-4 hidden lg:block"
            >
              <TabsList>
                <TabsTrigger value="lastnews">সর্বশেষ</TabsTrigger>
                <TabsTrigger value="mostpopular">সর্বাধিক পঠিত</TabsTrigger>
              </TabsList>
              <TabsContent value="lastnews">সর্বশেষ সংবাদ here.</TabsContent>
              <TabsContent value="mostpopular">সর্বাধিক পঠিত here.</TabsContent>
            </Tabs>
          </div>
          <div className="col-span-5">
            <div className="">
              <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                  <div className="flex flex-row flex-wrap ">
                    {posts.allPosts.slice(0, 8).map((post: any) => (
                      <div
                        key={post.id}
                        className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                      >
                        <div className="flex flex-row sm:block hover-img max-h-18">
                          <Link href={`../news/${post.uniqueId}`}>
                            <Image
                              src={post.image || webInfo.websiteInfo.newsThumbnail}
                              alt={""}
                              width={640}
                              height={427}
                              className="sm:max-w-full aspect-[3/4]  mx-auto object-cover max-w-[140px] max-h-20 sm:w-full  sm:max-h-[12.7rem] rounded-md"
                            />
                          </Link>
                          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                              <Link href={`../news/${post.uniqueId}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="hidden md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: post.details.slice(0, 50) + "...",
                                }}
                              />
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
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd />
    </>
  );
}
