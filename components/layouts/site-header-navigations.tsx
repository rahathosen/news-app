"use client";
import Link from "next/link";
import Image from "next/image";
import { ReactNode, HTMLProps } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Siebar from "./sitebar";
import FeaturePosts from "./featurePosts";

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

export default function SiteHeaderNavigations({
  newsCategories,
  navigations,
  webInfo,
  opinions,
  posts,
  articles,
}: any) {
  return (
    <div className="flex h-16 items-center justify-center relative ">
      <NavigationMenu.Root className="relative z-50 flex w-full justify-between">
        <div>
          {/* Desktop Logo (lg-) */}
          <Link href="/" className=" hidden lg:block  items-center">
            <div className="flex lg:flex-1">
              <div className=" pl-4">
                <span className="sr-only"> {webInfo.websiteInfo.title}</span>
                <Image
                  className="h-10 w-auto rounded-md"
                  src={webInfo.websiteInfo.logo}
                  alt={webInfo.websiteInfo.title}
                  width={384}
                  height={127}
                />
              </div>
            </div>
          </Link>
        </div>
        <div>
          {/* Mobile Logo (lg-hidden) */}
          <Link href="/">
            <div className="lg:hidden flex">
              <div className="">
                <span className="sr-only">{webInfo.websiteInfo.title}</span>
                <Image
                  className="h-14 w-auto rounded-md"
                  src={webInfo.websiteInfo.logo}
                  alt={`Logo of ${webInfo.websiteInfo.title}`}
                  width={640}
                  height={211}
                />
              </div>
            </div>
          </Link>
          <NavigationMenu.List className="center hidden   shadow-blackA4 m-0 lg:flex  ">
            {/* start second category navigation */}
            <Link
              href={"/search"}
              className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-white   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none"
            >
              সর্বশেষ
            </Link>
            {/* Opinion section */}

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-white   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none">
                <Link href={`/article`}>মতামত</Link>
                <CaretDownIcon
                  className="text-gray-600 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight  top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/95 dark:bg-[#040D12]/100  text-sm text-gray-500 relative ">
                <ul className="grid grid-flow-col  py-12 ">
                  <li className="col-start-2 grid grid-cols-5 gap-x-2 gap-y-6 pr-8">
                    {articles.slice(0, 8).map((item: any) => (
                      <div key={item.uniqueId}>
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                          <Link href={`/article/details/${item.uniqueId}`}>
                            <Image
                              src={
                                item.image || webInfo.websiteInfo.newsThumbnail
                              }
                              alt={item.title}
                              width={240}
                              height={120}
                              className="object-cover  object-center"
                            />
                          </Link>
                        </div>
                        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                          <h3 className="text-sm font-medium leading-tight  text-black dark:text-gray-400">
                            <Link href={`/article/details/${item.uniqueId}`}>
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </li>

                  <li className="col-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm pl-8">
                    <ul
                      role="list"
                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                    >
                      <Link
                        href={`/article`}
                        className="font-semibold text-base dark:text-gray-200 text-black"
                      >
                        মতামত
                      </Link>
                      {opinions.articleCategories.map((item: any) => (
                        <li key={item.id} className="flex">
                          <Link
                            href={`/article/${item.uniqueId}`}
                            className="dark:hover:text-gray-200  dark:text-gray-400 hover:text-gray-900 font-semibold"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* End Opinion section */}
            {navigations.navigation.categories
              .slice(0, 10)
              .map((category: any) => (
                <NavigationMenu.Item key={category.id}>
                  <NavigationMenu.Trigger className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-white   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none">
                    <Link href={`/category/${category.uniqueId}`}>
                      {category.title}
                    </Link>
                    <CaretDownIcon
                      className="text-gray-600 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight  top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/95 dark:bg-[#040D12]/100  text-sm text-gray-500 relative ">
                    <ul className="grid grid-flow-col  py-12 ">
                      <FeaturePosts
                        webInfo={webInfo}
                        posts={posts}
                        categoryId={category.id}
                      />
                      <li>
                        <div className="col-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm pl-8">
                          <ul
                            role="list"
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                          >
                            {" "}
                            <Link
                              href={`/category/${category.uniqueId}`}
                              className="font-semibold text-base dark:text-gray-200 text-black"
                            >
                              {category.title}
                            </Link>
                            {category.newssubcategorySet.map((item: any) => (
                              <li key={item.id} className="flex">
                                <Link
                                  href={`/category/${category.uniqueId}/${item.uniqueId}`}
                                  className=" dark:hover:text-gray-200  dark:text-gray-400 hover:text-gray-900 font-semibold"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ))}
            {/* end category navigation */}

            {/* Feature section start*/}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-white   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none">
                <Link href={`/feature`}>ফিচার</Link>{" "}
                <CaretDownIcon
                  className="text-gray-600 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight  top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/95 dark:bg-[#040D12]/100  text-sm text-gray-500 relative ">
                <ul className=" py-4 px-4 ">
                  <li className="relative overflow-hidden col-start-2 grid grid-cols-5 gap-x-2 gap-y-6 ">
                    {navigations.navigation.feature.map((item: any) => (
                      <Link key={item.id} href={`/feature/${item.uniqueId}`}>
                        <div className="relative aspect-h-1 aspect-w-2 rounded-md bg-gray-100 group-hover:opacity-75">
                          <Image
                            src={
                              item.image || webInfo.websiteInfo.newsThumbnail
                            }
                            alt={item.title}
                            width={440}
                            height={320}
                            className="absolute inset-0 object-cover object-center brightness-50 rounded-md"
                          />
                          <h3 className="absolute inset-0 flex items-center justify-center w-full h-full text-lg font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* End Feature section */}
            <Link
              href="/search"
              aria-label="Search The News"
              className="flex items-center  pl-2 "
            >
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400 "
                aria-hidden="true"
              />
            </Link>
            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-[#071720]" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>
        </div>
        {/* sitebar hamburger menu */}
        <Siebar
          newsCategories={newsCategories}
          posts={posts}
          opinions={opinions}
          navigations={navigations}
        />
        <div className=" absolute top-full left-0 flex w-full  justify-center ">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md drop-shadow-2xl  transition-[width,_height] duration-300 " />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}
