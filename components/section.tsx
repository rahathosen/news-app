import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";
import RowAd from "./advertisement/row-ad";
import {
  postByCategoryGQL,
} from "@/lib/getGQL";

export default async function Section({
  categoryTitle,
  categoryUId,
}: any) {

  const categoryPosts = await postByCategoryGQL(categoryUId);
  const categoryLength = categoryPosts.postByCategory.length

  return (
    <div>
      {categoryLength > 0 ? (
        <div>
          {/* <RowAd /> */}
          <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
            <Divider categoryTitle={categoryTitle} categoryUId={categoryUId} />
            <div className="px-4">
              <div>
                <div className="flex flex-row flex-wrap">
                  {/* <!-- Left --> */}
                  <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                    <div className="flex flex-row flex-wrap -mx-3">
                      {categoryPosts.postByCategory.slice(0, 1).map((post: any) => (
                        <div
                          key={post.id}
                          className="flex-shrink max-w-full w-full px-3 pb-5 lg:pb-20 md:pb-20 sm:pb-20"
                        >
                          <div className="relative hover-img dark:hover-img-dark max-h-98  ">
                            {/* <!--thumbnail--> */}
                            <Link href={`../news/${post.uniqueId}`}>
                              <Image
                                src={post.image}
                                alt={""}
                                width={640}
                                height={427}
                                className="max-w-full w-full mx-auto h-auto max-h-[18.2rem] pb-2  object-cover rounded-md"
                              />
                            </Link>
                            <div className="">
                              {/* <!--title--> */}
                              <Link href={`../news/${post.uniqueId}`}>
                                <h2 className="text-2xl font-bold capitalize text-black  dark:text-gray-400 ">
                                  {post.title}
                                </h2>
                              </Link>
                              <p className="text-gray-800 font-medium text-base  dark:text-gray-500  hidden sm:inline-block">
                                {post.description.slice(0, 100) + "..."}
                              </p>
                              {/* <!-- author and date --> */}
                              <div className="">
                                <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                                  <RelativeDate date={post.createdAt} />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {categoryPosts.postByCategory.slice(1, 7).map((post: any) => (
                        <div
                          key={post.id}
                          className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                        >
                          <div className="flex flex-row sm:block hover-img">
                            <Link href={`../news/${post.uniqueId}`}>
                              <Image
                                src={post.image}
                                alt={""}
                                width={640}
                                height={427}
                                className="max-w-full w-full mx-auto rounded-md"
                              />
                            </Link>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 className="text-lg font-bold leading-tight text-black  dark:text-gray-400 mb-2">
                                <Link href={`../news/${post.uniqueId}`}>
                                  {post.title}
                                </Link>
                              </h3>
                              <p className="hidden md:block  dark:text-gray-400 text-gray-800 leading-tight mb-1">
                                {post.description.slice(0, 100) + "..."}
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
                  {/* <!-- right --> */}
                  <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 order-first lg:order-last">
                    <div className="w-full bg-stone-100 dark:bg-[#040D12] ">
                      <div className="mb-6">
                        <div className="p-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
                          <h2 className="lg:text-xl text-lg font-bold text-black dark:text-gray-400">
                            Most Popular
                          </h2>
                        </div>
                        <ul className="post-number">
                          {categoryPosts.postByCategory.slice(0, 12).map((post: any) => (
                            <li
                              key={post.id}
                              className="border-b border-gray-100 dark:border-gray-900 hover:bg-stone-300 rounded-lg dark:hover:bg-[#030b10]"
                            >
                              <Link
                                href={`../news/${post.uniqueId}`}
                                className="text-lg font-bold pl-2 py-3 flex flex-row items-center text-gray-800 dark:text-gray-400"
                              >
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
