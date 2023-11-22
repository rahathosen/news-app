import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { postByCategoryGQL } from "@/lib/getGQL";
import RelativeDate from "@/lib/relativeDate";
import LeaderboardAd from "./advertisement/leaderboardAd";
import CoverRectangleAd from "./advertisement/coverRectangleAd";
import SmallBannerAd from "./advertisement/smallBannerAd";
import MobileLeaderboardAd from "./advertisement/mobileLeaderboardAd";
import MPUAd from "./advertisement/mediumRectangleMPUAd";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default async function CategoryNews({
  categoryUId,
  categoryTitle,
}: any) {
  const categoryPosts = await postByCategoryGQL(categoryUId);
  const posts = categoryPosts.postByCategory;
  const startIndex = Math.max(0, posts.length - 10);

  return (
    <div className="bg-white dark:bg-[#040D12] pt-4 2xl:p-8 rounded-b-lg rounded-t-lg">
      <div className="mx-auto px-4">
        <div className="relative flex items-center justify-between pb-4">
          <h2 className="text-black dark:text-white lg:text-3xl text-xl font-bold">
            <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
            {categoryTitle}
          </h2>
          <Link
            href={`/category/${categoryUId}`}
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
        {/* 2 part */}
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-8 xl:gap-x-2">
          {/* part one */}
          <div className="col-span-5 ">
            {/* 4 part */}
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-2 lg:gap-4 lg:pb-2">
              {/* cover news */}
              <div className="group  overflow-hidden sm:col-span-2 sm:row-span-2">
                {posts.slice(0, 1).map((post: any) => (
                  <div
                    key={post.id}
                    className="relative hover-img dark:hover-img-dark   "
                  >
                    {/* <!--thumbnail--> */}
                    <Link href={`../news/${post.uniqueId}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={640}
                        height={427}
                        className="max-w-full w-full rounded-md mx-auto h-auto   object-cover"
                      />
                    </Link>
                    <div className="pt-4">
                      {/* <!--title--> */}
                      <Link href={`../news/${post.uniqueId}`}>
                        <h2 className="text-2xl font-bold capitalize text-black  dark:text-white ">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="mt-2 mb-2  text-sm  text-gray-600 dark:text-gray-400  hidden sm:inline-block">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.details.slice(0, 310) + "...",
                          }}
                        />
                      </p>
                      {/* <!-- author and date --> */}
                      <div className="">
                        <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                          <RelativeDate date={post.createdAt} />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* hilight news */}
              <div className="group  overflow-hidden rounded-md sm:aspect-none sm:relative sm:h-full">
                {posts.slice(0, 1).map((post: any) => (
                  <div
                    key={post.uniqueId}
                    className="flex flex-row sm:block hover-img dark:hover-img-dark"
                  >
                    <Link href={`../news/${post.uniqueId}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-base font-bold leading-tight text-black  dark:text-white mb-2">
                        <Link href={`../news/`}>{post.title}</Link>
                      </h3>
                      <p className="hidden md:block lg:line-clamp-2  text-sm  text-gray-600 dark:text-gray-400 mb-1">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.details.slice(0, 90) + "...",
                          }}
                        />
                      </p>

                      <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                        <RelativeDate date={post.createdAt} />{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ad */}
              <div>
                <MPUAd/>
              </div>
            </div>
            {/* 4 card */}
            <div className="flex flex-wrap md:pt-2 lg:-mt-14">
              {posts.slice(0, 4).map((post: any, index: number) => (
                <div
                key={post.uniqueId}
                className={`flex-shrink max-w-full w-full sm:w-1/4 pb-2 lg:pb-0 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900 
                  ${index !== 0 ? 'sm:pl-2' : ''} ${index !== posts.length - 1 ? 'sm:pr-2' : ''}`}
              >

                  <div className="flex flex-row sm:block hover-img dark:hover-img-dark">
                    <Link href={`../news/${post.uniqueId}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-base font-bold leading-tight text-black  dark:text-white mb-2">
                        <Link href={`../news/${post.uniqueId}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="hidden md:block lg:line-clamp-3  text-sm  text-gray-600 dark:text-gray-400 mb-1">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.details.slice(0, 45) + "...",
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
          {/* part two */}
          <div className="col-span-3 lg:pl-2">
          {/* Ad */}
          <div className="lg:mb-4">
          <SmallBannerAd />
          </div>
            <Tabs defaultValue="lastnews" className="w-full">
              <TabsList>
                <TabsTrigger value="lastnews">সর্বশেষ</TabsTrigger>
                <TabsTrigger value="mostpopular">সর্বাধিক পঠিত</TabsTrigger>
              </TabsList>
              {/* latest news */}
              <TabsContent value="lastnews">
                {posts.slice(0, 8).map((post: any) => (
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
                          href={`/category/${post.category.uniqueId}/${post.subcategory.uniqueId}`}
                          className="text-sm hover:text-red-900"
                        >
                          {post.subcategory.title}
                        </Link>
                        {" / "}
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
              {/* oldest news */}
              <TabsContent value="mostpopular">
                {posts
                  .slice(startIndex)
                  .reverse()
                  .map((post: any) => (
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
                      <div className="flex flex-1 items-center justify-between ">
                        <div className="  px-4 py-2 text-sm  text-red-600  font-semibold">
                          <Link
                            href={`/category/${post.category.uniqueId}/${post.subcategory.uniqueId}`}
                            className="text-sm hover:text-red-900"
                          >
                            {post.subcategory.title}
                          </Link>
                          {" / "}
                          <Link
                            href={`../news/${post.uniqueId}`}
                            className="font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
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
          </div>
        </div>
      </div>
    </div>
  );
}
