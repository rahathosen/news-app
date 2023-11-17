import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featurePostsGQL, websiteInfoGQL } from "@/lib/getGQL";
import RelativeDate from "@/lib/relativeDate";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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

export default async function Page() {
  const webInfo = await websiteInfoGQL();
  const allFeaturePosts = await featurePostsGQL();
  const allposts = allFeaturePosts.featurePosts;
  return (
    <>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-8  sm:mt-4 2xl:p-8 rounded-b-lg rounded-t-lg   pt-4 mb-4 pb-4">
        <div className="">
          <h2 className="text-black dark:text-gray-400 lg:text-3xl text-xl font-bold pl-4 pb-2">
            <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
            ফিচার
          </h2>
          <div className="grid grid-cols-1 px-2  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
            <div className="col-span-5">
              <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                  <div className="flex flex-row flex-wrap ">
                    {allposts.map((post: any) => (
                      <div
                        key={post.id}
                        className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                      >
                        <div className="flex flex-row sm:block hover-img max-h-18">
                          <Link href={`../feature/${post.uniqueId}`}>
                            <Image
                              src={
                                post.image || webInfo.websiteInfo.newsThumbnail
                              }
                              alt={""}
                              width={640}
                              height={427}
                              className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                            />
                          </Link>
                          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-gray-400">
                              <Link href={`../feature-category/${post.category.uniqueId}`}>
                                <span className="text-red-600 dark:text-red-800">
                                  {" "}
                                  {post.category.title}
                                </span>
                              </Link>{" "}
                              {" / "}
                              <Link href={`../feature/${post.uniqueId}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="hidden md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                              <div>
                                {post.description.slice(0, 100) + "..."}
                              </div>
                              <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                                <RelativeDate date={post.createdAt} />{" "}
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-auto col-span-2 ">
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
    </>
  );
}
