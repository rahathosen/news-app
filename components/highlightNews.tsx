import Link from "next/link";
import Image from "next/image";
// import DropdownSelect from "./dropdownSelect";
import LocationDropdowns from "./dropdownSelect";
import RelativeDate from "@/lib/relativeDate";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import CoverRectangleAd from "./advertisement/coverRectangleAd";
import SmallBannerAd from "./advertisement/smallBannerAd";
import { divisionsGQL, districtsGQL } from "@/lib/getGQL";
import { PollForm } from "./poll";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface Division {
  name: string;
  uniqueId: string;
}
export default async function HighlightNews({
  mainNews,
  homeHighlightedNews,
  webInfo,
}: any) {
  const mainPost = mainNews.mainNews.headNews;
  const homePosts = homeHighlightedNews.homeHighlightedNews.highlightedNews;
  const Divisions = await divisionsGQL();
  const allDivision = Divisions.divisions;
  const alldistricts = await districtsGQL();
  const allDis = alldistricts.districts;

  return (
    <div className="bg-white dark:bg-[#040D12] pt-4  2xl:p-8 rounded-b-lg rounded-t-lg">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-9 xl:gap-x-2">
          <div className="col-span-4 pt-2">
            <article className="flex flex-col ">
              <Link
                href={`/news/${mainPost.uniqueId}`}
                className="mb-3 text-2xl font-semibold leading-6 text-black dark:text-white  hover:text-gray-600 dark:hover:text-gray-500"
              >
                {mainPost.title}
              </Link>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500 dark:text-gray-400">
                  <RelativeDate date={mainPost.createdAt} />{" "}
                </time>
                <p className="text-red-600  dark:text-red-800 hover:text-red-800 dark:hover:text-red-600 font-semibold">
                  <Link href={`/category/${mainPost.category.uniqueId}`}>
                    {mainPost.category.title}/
                  </Link>{" "}
                  <Link href={`/category/${mainPost.category.uniqueId}/${mainPost.subcategory.uniqueId}`}>
                    {mainPost.subcategory.title}
                  </Link>
                </p>
              </div>
              <div className="group relative">
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400 ">
                  {mainPost.description}
                </p>
              </div>
              <div className=" mt-3 flex items-center hover-img dark:hover-img-dark">
                <Link href={`/news/${mainPost.uniqueId}`}>
                  <Image
                    src={mainPost.image || webInfo.websiteInfo.newsThumbnail}
                    alt={mainPost.title}
                    width={640}
                    height={427}
                    quality={75}
                    priority={true}
                    className="max-w-full w-full mx-auto rounded-md bg-gray-50"
                  />
                </Link>
              </div>
              <p className="mt-4  text-sm leading-6 text-gray-600 dark:text-gray-400 ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: mainPost.details.slice(0, 300) + "...",
                  }}
                />
              </p>
            </article>
          </div>
          <div className="col-span-3 pt-2">
            {homePosts.slice(0, 5).map((post: any) => (
              <div
                key={post.uniqueId}
                className="col-span-1 flex rounded-md shadow-sm pb-5"
              >
                <div className="flex flex-1 items-center justify-between  ">
                  <div className="flex-1  lg:px-4 text-sm">
                    <Link
                      href={`../news/${post.uniqueId}`}
                      className="font-bold text-base line-clamp-2 text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                    >
                      {post.title}
                    </Link>
                    <p className="text-red-600  dark:text-red-800 hover:text-red-800 dark:hover:text-red-600 text-xs font-semibold">
                      <Link href={`/category/${post.category.uniqueId}`}>
                        {post.category.title}/
                      </Link>{" "}
                      <Link href={`/category/${post.category.uniqueId}/${post.subcategory.uniqueId}`}>
                        {post.subcategory.title}
                      </Link>
                    </p>
                    <time className="text-gray-500 text-xs dark:text-gray-400">
                      <RelativeDate date={post.createdAt} />{" "}
                    </time>
                  </div>
                </div>
                <div
                  className={classNames(
                    "flex w-32 flex-shrink-0 items-center top-0 justify-center rounded-l-md text-sm font-medium text-white"
                  )}
                >
                  <Link
                    href={`../news/${post.uniqueId}`}
                    className="hover-img dark:hover-img-dark"
                  >
                    <Image
                      src={post.image || webInfo.websiteInfo.newsThumbnail}
                      alt={post.title}
                      width={200}
                      height={160}
                      quality={75}
                      priority={true}
                      className="mx-auto object-cover h-24 w-60 rounded-md"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col col-span-2 lg:pl-4 ">
            <div className="">
              <SmallBannerAd />
            </div>
            <div className="pt-4">
              <div className="p-2 mb-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
                <h2 className=" text-lg font-bold text-center text-black dark:text-white">
                  নিজ এলাকার সংবাদ
                </h2>
              </div>

              <LocationDropdowns allDivision={allDivision} />
            </div>
            {/* poll */}
            {/* <div className="mt-4 border rounded-md dark:border-gray-950 border-gray-300 pl-4 py-4 ">
              <PollForm />
            </div> */}

            {/* Ad */}
            <div className="mt-4">
              <CoverRectangleAd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
