"use client";
import Link from "next/link";
import Image from "next/image";
import { ReactNode, HTMLProps } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Siebar from "./sitebar";
import FeaturePosts from "./featurePosts";
import FeatureSubPosts from "./featureSubPosts";

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeaderNavigations({
  newsCategories,
  navigations,
  webInfo,
  posts,
}: any) {
  return (
    <div className="flex h-16 items-center justify-center relative ">
      <NavigationMenu.Root className="relative z-50 flex w-full justify-between">
        <div>
          {/* Desktop Logo (lg-) */}
          <Link href="/" className=" hidden lg:block  items-center">
            <h1 className="bg-gradient-to-br lg:pl-8  md:pl-2 pl-2 from-gray-900  via-gray-800 to-orange-400 font-bold text-xl lg:text-2xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-orange-200 dark:to-gray-900  md:leading-[5rem]">
              {webInfo.websiteInfo.title}
            </h1>
          </Link>
        </div>
        <div>
          {/* Mobile Logo (lg-hidden) */}
          <Link href="/">
            <h1 className="bg-gradient-to-br from-gray-900 lg:hidden via-gray-800 to-orange-400 font-bold text-2xl lg:text-3xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-orange-200 dark:to-gray-900  md:leading-[5rem]">
              {webInfo.websiteInfo.title}
            </h1>
          </Link>
          <NavigationMenu.List className="center hidden   shadow-blackA4 m-0 lg:flex  ">
            {/* start second category navigation */}
            <Link
              href={"/search"}
              className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none"
            >
              সর্বশেষ
            </Link>
            <Link
              href={"/opinion"}
              className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none"
            >
              মতামত
            </Link>
            {navigations.navigation.categories
              .slice(1, 10)
              .map((category: any) => (
                <NavigationMenu.Item key={category.id}>
                  <NavigationMenu.Trigger className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none">
                    {category.title}{" "}
                    <CaretDownIcon
                      className="text-gray-600 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight  top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/95 dark:bg-[#040D12]/100  text-sm text-gray-500 relative ">
                    <ul className="grid grid-flow-col  py-12 ">
                      <FeaturePosts posts={posts} categoryId={category.id} />
                      <li>
                        <div className="col-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm pl-8">
                          <ul
                            role="list"
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                          >
                            {" "}
                            <Link
                              href={`/category/${category.id}`}
                              className="font-semibold text-base dark:text-gray-200 text-black"
                            >
                              {category.title}
                            </Link>
                            {category.newssubcategorySet.map((item: any) => (
                              <li key={item.id} className="flex">
                                <Link
                                  href={`/category/${category.id}/${item.id}`}
                                  className="hover:text-gray-900 dark:hover:text-gray-200 font-semibold dark:text-gray-400"
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
            {/* Feature section */}
            {navigations.navigation.feature.map((post: any) => (
              <NavigationMenu.Item key={post.id}>
                <NavigationMenu.Trigger className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400   group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none">
                  ফিচার{" "}
                  <CaretDownIcon
                    className="text-gray-600 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight  top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/95 dark:bg-[#040D12]/100  text-sm text-gray-500 relative ">
                  <ul className="grid grid-flow-col  py-12 ">
                    <FeatureSubPosts subFeature={post.featurepostSet} />
                    <li>
                      <div className="col-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm pl-8">
                        <ul
                          role="list"
                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                        >
                          {" "}
                          <Link
                            href={`/category/${post.id}`}
                            className="font-semibold text-base dark:text-gray-200 text-black"
                          >
                            {post.title}
                          </Link>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
            {/* End Feature section */}
            <Link href="/search" className="flex items-center  pl-2 ">
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
        <Siebar newsCategories={newsCategories} />
        <div className=" absolute top-full left-0 flex w-full  justify-center ">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md drop-shadow-2xl  transition-[width,_height] duration-300 " />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}
