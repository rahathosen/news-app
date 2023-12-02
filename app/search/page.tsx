import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/search";
import OtherPageLeaderboardAd from "@/components/advertisement/OtherPageLeaderboardAd";
import OtherPageSuperLeadeAd from "@/components/advertisement/otherPageSuperLeadeAd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmallBannerAd from "@/components/advertisement/smallBannerAd";
import RelativeDate from "@/lib/relativeDate";
import {
  postByDivisionGQL,
  postByDistrictGQL,
  postByUpozilatGQL,
  divisionsGQL,
} from "@/lib/getGQL";
import LocationDropdowns from "@/components/dropdownSelect";

export default async function Page({ searchParams }: any) {
  const Divisions = await divisionsGQL();
  const allDivision = Divisions.divisions;

  if (
    !searchParams ||
    !searchParams.selectedValue ||
    searchParams.selectedValue.length !== 3
  ) {
    // Handle the case where searchParams is not provided or doesn't have the expected structure
    return (
      <div>
        <Search />
      </div>
    );
  }

  const postByDivision = await postByDivisionGQL(
    searchParams.selectedValue[0].charAt(0).toUpperCase() +
      searchParams.selectedValue[0].slice(1)
  );
  const postByDistric = await postByDistrictGQL(
    searchParams.selectedValue[1].charAt(0).toUpperCase() +
      searchParams.selectedValue[1].slice(1)
  );
  const postByUpozila = await postByUpozilatGQL(
    searchParams.selectedValue[2].charAt(0).toUpperCase() +
      searchParams.selectedValue[2].slice(1)
  );

  const upzilaPosts = postByUpozila.postByUpozila;
  const districtPosts = postByDistric.postByDistrict;
  const divisionPosts = postByDivision.postByDivision;

  return (
    <div>
      <OtherPageSuperLeadeAd />

      <div className="bg-white dark:bg-[#040D12] 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 px-4 pb-4">
        <div className="grid grid-cols-1 px-2  gap-y-2 lg:grid-cols-7 xl:gap-x-2">
          <div className="col-span-5">
            {/* উপজেলা start */}

            {upzilaPosts && upzilaPosts.length > 0 ? (
              <div>
                <div>
                  <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full overflow-hidden">
                      <div className="flex flex-row flex-wrap ">
                        {upzilaPosts.map((post: any) => (
                          <div
                            key={post.id}
                            className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                          >
                            <div className="flex flex-row sm:block hover-img max-h-18">
                              <Link href={`/news/${post.uniqueId}`}>
                                <Image
                                  src={post.image}
                                  alt={""}
                                  width={640}
                                  height={427}
                                  className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                                />
                              </Link>
                              <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                                  <span className="text-red-600 dark:text-red-800">
                                    {post.upozila.name} {"/ "}
                                  </span>

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
            ) : districtPosts && districtPosts.length > 0 ? (
              <div>
                <div className="flex flex-row flex-wrap">
                  <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="flex flex-row flex-wrap ">
                      {districtPosts.map((post: any) => (
                        <div
                          key={post.id}
                          className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                        >
                          <div className="flex flex-row sm:block hover-img max-h-18">
                            <Link href={`/news/${post.uniqueId}`}>
                              <Image
                                src={post.image}
                                alt={""}
                                width={640}
                                height={427}
                                className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                              />
                            </Link>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                                <span className="text-red-600 dark:text-red-800">
                                  {post.district.name} {"/ "}
                                </span>

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
            ) : divisionPosts && divisionPosts.length > 0 ? (
              <div>
                <div className="flex flex-row flex-wrap">
                  <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="flex flex-row flex-wrap ">
                      {divisionPosts.map((post: any) => (
                        <div
                          key={post.id}
                          className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                        >
                          <div className="flex flex-row sm:block hover-img max-h-18">
                            <Link href={`/news/${post.uniqueId}`}>
                              <Image
                                src={post.image}
                                alt={""}
                                width={640}
                                height={427}
                                className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                              />
                            </Link>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                              <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-white">
                                <span className="text-red-600 dark:text-red-800">
                                  {post.division.name} {"/ "}
                                </span>

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
            ) : (
              <div>No posts found</div>
            )}
          </div>
          <div className="col-start-auto col-span-2 ">
            <div className="">
              <SmallBannerAd />
            </div>
            <LocationDropdowns allDivision={allDivision} />
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd />
    </div>
  );
}
