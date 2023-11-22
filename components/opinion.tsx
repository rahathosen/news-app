import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RelativeDate from "@/lib/relativeDate";
import Image from "next/image";
import Link from "next/link";
import SmallBannerAd from "./advertisement/smallBannerAd";
import MPUAd from "./advertisement/mediumRectangleMPUAd";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function OpnionNews({ webInfo, articles }: any) {


  const startIndex = Math.max(0, articles.length - 4);
  return (
    <>
      <div className="bg-white dark:bg-[#040D12]  2xl:p-8 rounded-b-lg rounded-t-lg pt-4">
        <div className="mx-auto ">
          <div className="relative flex items-center justify-between px-4 pb-4">
            <h2 className="text-black dark:text-white lg:text-3xl text-xl font-bold">
              <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
              মতামত
            </h2>
            <Link
              href={`/article`}
              className="inline-flex items-center gap-x-1.5 rounded-full  px-3 text-sm lg:text-base font-semibold text-gray-900 "
            >
              <div className="group text-black dark:text-gray-400 hover:text-[#5C8374] dark:hover:text-[#5C8374]  transition ease-in-out duration-200">
                আরো দেখুন{" "}
                <span
                  aria-hidden="true"
                  className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
                >
                  →
                </span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 px-2  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
            <div className="col-span-5">
              <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full overflow-hidden">
                  <div className="flex flex-row flex-wrap ">
                    {articles.map((post: any) => (
                      <div
                        key={post.uniqueId}
                        className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                      >
                        <div className="flex flex-row sm:block hover-img max-h-18">
                          <Link href={`/article/details/${post.uniqueId}`}>
                            <Image
                              src={
                                post.image || webInfo.websiteInfo.newsThumbnail
                              }
                              alt={post.title}
                              width={640}
                              height={427}
                              className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                            />
                          </Link>
                          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                              <Link href={`/article/${post.category.uniqueId}`}>
                                <span className="text-red-600 dark:text-red-800">
                                  {" "}
                                  {post.category.title}
                                </span>
                              </Link>{" "}
                              {" / "}
                              <Link href={`/article/details/${post.uniqueId}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="hidden md:block  text-gray-800 dark:text-gray-400 leading-tight mb-1">
                              
                              <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                                <RelativeDate date={post.createdAt} />{" "}
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {articles.map((post: any) => (
                      <div
                        key={post.uniqueId}
                        className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                      >
                        <div className="flex flex-row sm:block hover-img max-h-18">
                          <Link href={`/article/details/${post.uniqueId}`}>
                            <Image
                              src={
                                post.image || webInfo.websiteInfo.newsThumbnail
                              }
                              alt={post.title}
                              width={640}
                              height={427}
                              className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                            />
                          </Link>
                          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                              <Link href={`/article/${post.category.uniqueId}`}>
                                <span className="text-red-600 dark:text-red-800">
                                  {" "}
                                  {post.category.title}
                                </span>
                              </Link>{" "}
                              {" / "}
                              <Link href={`/article/details/${post.uniqueId}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="hidden md:block  text-gray-800 dark:text-gray-400 leading-tight mb-1">
                              
                              <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                                <RelativeDate date={post.createdAt} />{" "}
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {articles.slice(0,2).map((post: any) => (
                      <div
                        key={post.uniqueId}
                        className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                      >
                        <div className="flex flex-row sm:block hover-img max-h-18">
                          <Link href={`/article/details/${post.uniqueId}`}>
                            <Image
                              src={
                                post.image || webInfo.websiteInfo.newsThumbnail
                              }
                              alt={post.title}
                              width={640}
                              height={427}
                              className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                            />
                          </Link>
                          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                              <Link href={`/article/${post.category.uniqueId}`}>
                                <span className="text-red-600 dark:text-red-800">
                                  {" "}
                                  {post.category.title}
                                </span>
                              </Link>{" "}
                              {" / "}
                              <Link href={`/article/details/${post.uniqueId}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="hidden md:block  text-gray-800 dark:text-gray-400 leading-tight mb-1">
                              
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
              <div className="-mt-2">
              <MPUAd/>
              </div>
              <Tabs defaultValue="lastnews" className="w-full">
                <TabsList>
                  <TabsTrigger value="lastnews">সর্বশেষ</TabsTrigger>
                  <TabsTrigger value="mostpopular">সর্বাধিক পঠিত</TabsTrigger>
                </TabsList>
                <TabsContent value="lastnews">
                {articles.slice(0, 4).map((post: any) => (
                  <div
                    key={post.id}
                    className="col-span-1 flex rounded-md shadow-sm py-2"
                  >
                    <div
                      className={classNames(
                        "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                      )}
                    >
                      <Link href={`../news/${post.uniqueId}`}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={200}
                          height={160}
                          className="mx-auto object-cover h-16 w-16 rounded-md"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-between  ">
                      <div className="  px-4 py-2 line-clamp-3 text-sm  text-red-600  font-semibold">
                        <Link
                          href={`../news/${post.uniqueId}`}
                          className="font-medium  text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                        >
                          {post.title}
                        </Link>
                        <div className="flex  justify-between text-sm text-red-600 hover:text-red-900 font-semibold">
                          <div className="text-gray-600 font-medium text-sm pt-2  dark:text-gray-600">
                            <RelativeDate date={post.createdAt} />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </TabsContent>
                <TabsContent value="mostpopular">
                {articles.slice(startIndex)
                  .reverse().map((post: any) => (
                  <div
                    key={post.id}
                    className="col-span-1 flex rounded-md shadow-sm py-2"
                  >
                    <div
                      className={classNames(
                        "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                      )}
                    >
                      <Link href={`../news/${post.uniqueId}`}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={200}
                          height={160}
                          className="mx-auto object-cover h-16 w-16 rounded-md"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-between  ">
                      <div className="  px-4 py-2 line-clamp-3 text-sm  text-red-600  font-semibold">
                        <Link
                          href={`../news/${post.uniqueId}`}
                          className="font-medium  text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                        >
                          {post.title}
                        </Link>
                        <div className="flex  justify-between text-sm text-red-600 hover:text-red-900 font-semibold">
                          <div className="text-gray-600 font-medium text-sm pt-2  dark:text-gray-600">
                            <RelativeDate date={post.createdAt} />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </TabsContent>
              </Tabs>
              {/* <SmallBannerAd /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
