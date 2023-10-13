"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState, ReactNode, HTMLProps } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import GetNavigation from "@/lib/getNavigations";

// interface Categories {
//   id: number;
//   url: string;
//   name: string;
//   featured: {
//     name: string;
//     href: string;
//     slug: string;
//     imageSrc: string;
//     imageAlt: string;
//     title: string;
//   };
//   sections: {
//     id: number;
//     name: string;
//     items: {
//       name: string;
//       href: string;
//     };
//   };
// }

// interface Category {
//   name: string;
//   featured: {
//     name: string;
//     imageSrc: string;
//     imageAlt: string;
//   }[];
//   sections: {
//     name: string;
//     id: string;
//     items: {
//       name: string;
//       href: string;
//     }[];
//   }[];
// }

import { navigation } from "../../lib/navigations";
import Siebar from "./sitebar";

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader() {
  // const navigation = GetNavigation()
  return (
    <div className="bg-[#F5F5F4] dark:bg-[#040D12] sticky top-0 z-10 shadow-2xl mx-auto 2xl:container max-w-full ">
      <div>
        <div>
          <div className="flex h-16 items-center justify-center relative ">
            <NavigationMenu.Root className="relative z-50 flex w-full justify-between">
              <div>
                {/* Desktop Logo (lg-) */}
                <Link href="/" className=" hidden lg:block  items-center">
                  <h1 className="bg-gradient-to-br lg:pl-8  md:pl-2 pl-2 from-gray-900  via-gray-800 to-gray-400 font-bold text-xl lg:text-2xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
                    Dailyudayan
                  </h1>
                </Link>

                {/* Mobile Notification bell icon (lg-) */}
                {/* <Link href="/" className="flex lg:hidden items-center">
                  <h1 className=" lg:pl-8  md:pl-2 pl-2 md:pr-2  font-bold text-xl lg:text-2xl bg-clip-text text-center font-heading  tracking-[-0.02em]  drop-shadow-sm   md:leading-[5rem]">
                    <button
                      type="button"
                      className="rounded-md text-gray-400 dark:text-gray-400  hover:bg-gray-100 dark:hover:bg-[#040D12] hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500/20"
                    >
                      <span className="sr-only">Open menu</span>
                      <BellIcon className="h-6 w-6 " aria-hidden="true" />
                    </button>
                  </h1>
                </Link> */}
              </div>
              <div>
                {/* Mobile Logo (lg-hidden) */}
                <Link href="/">
                  <h1 className="bg-gradient-to-br from-gray-900 lg:hidden via-gray-800 to-gray-400 font-bold text-2xl lg:text-3xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
                    Dailyudayan
                  </h1>
                </Link>
                <NavigationMenu.List className="center hidden   shadow-blackA4 m-0 lg:flex  ">
                  {navigation.categories.map((category) => (
                    <NavigationMenu.Item key={category.name}>
                      {/* nev page */}
                      <NavigationMenu.Trigger className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400 hover:font-semibold  group flex select-none items-center justify-between gap-0 rounded-md px-3 py-2 text-[15px] leading-none">
                        {category.name}{" "}
                        <CaretDownIcon
                          className="text-gray-600 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>
                      {/* nav sub page */}
                      <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight  top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/95 dark:bg-[#040D12]/100  text-sm text-gray-500 relative ">
                        <ul className="grid grid-flow-col  py-12 ">
                          <li className="col-start-2 grid grid-cols-5 gap-x-2 gap-y-6 pr-8">
                            {category.featured.slice(0, 10).map((item) => (
                              <Link key={item.name} href="/">
                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    width={240}
                                    height={120}
                                    className="object-cover  object-center"
                                  />
                                </div>
                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                  <h3 className="text-sm font-medium leading-tight  text-black dark:text-gray-400">
                                    <Link href="#">
                                      Govt move to check prices falls flat
                                    </Link>
                                  </h3>
                                </div>
                              </Link>
                            ))}
                          </li>
                          <li>
                            <div className="col-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm pl-8">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <Link
                                    href={section.id}
                                    className="font-semibold text-base dark:text-gray-200 text-black"
                                  >
                                    {section.name}
                                  </Link>
                                  {/* </Link> */}
                                  <ul
                                    role="list"
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <Link
                                          href={item.href}
                                          className="hover:text-gray-900 dark:hover:text-gray-200 font-semibold dark:text-gray-400"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </li>
                        </ul>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  ))}
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
              <Siebar />
              <div className=" absolute top-full left-0 flex w-full  justify-center ">
                <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md drop-shadow-2xl  transition-[width,_height] duration-300 " />
              </div>
            </NavigationMenu.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
