import Image from "next/image";
import Link from "next/link";
import RelativeDate from "@/lib/relativeDate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmallBannerAd from "@/components/advertisement/smallBannerAd";

export default function Category({ categoryPosts,webInfo }: any) {
  return (
    <div className="bg-white dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <div className="grid grid-cols-1 px-2  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
        <div className="col-span-5">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full overflow-hidden">
              <div className="flex flex-row flex-wrap ">
                {categoryPosts.map((post: any) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img max-h-18">
                      <Link href={`../news/${post.uniqueId}`}>
                        <Image
                          src={post.image || webInfo.websiteInfo.newsThumbnail}
                          alt={post.title}
                          width={640}
                          height={427}
                          className="sm:max-w-full aspect-[3/4]  mx-auto object-cover max-w-[140px] max-h-20 sm:w-full  sm:max-h-[12.7rem] rounded-md"
                        />
                      </Link>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight line-clamp-3 mb-2 text-black dark:text-white">
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
  );
}
