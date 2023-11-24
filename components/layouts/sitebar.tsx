"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState, ReactNode, HTMLProps } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  BellIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import ThemeToggle from "./theme-toggle-sitebar";
import RelativeDate from "@/lib/relativeDate";
import { Separator } from "../ui/separator";
import NotificationPosts from "../notificationPosts";

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

export default function Siebar({
  newsCategories,
  posts,
  opinions,
  navigations,
}: any) {
  return (
    <div className="flex  items-center lg:pr-6  md:pr-2 pr-0">
      <button
        type="button"
        className="rounded-md text-gray-400  hover:bg-gray-100 dark:hover:bg-[#040D12] hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500/20 p-2"
      >
        <span className="sr-only">Open menu</span>
        <Sheet>
          <SheetTrigger asChild>
            <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="absolute left-4 top-6 rounded-md opacity-70 dark:text-white ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800">
                    <BellIcon className="h-5 w-5" />
                    <span className="sr-only">notification area</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Notification area</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <ScrollArea className="h-[calc(50vh-4rem)] py-2 rounded-2xl ">
                    <div>
                      <NotificationPosts posts={posts.allPosts} />
                    </div>
                  </ScrollArea>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-center">
                    <SheetClose asChild>
                      <Link
                        className="rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
                        href="/search"
                      >
                        View All Notification
                      </Link>
                    </SheetClose>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
              <SheetDescription>
                <ThemeToggle />
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pt-8 pl-6">
              <div className="pl-1 pr-7 mb-6 ">
                <Link
                  href={"/search"}
                  className="text-sm capitalize font-semibold dark:text-white"
                >
                  সর্বশেষ
                </Link>
                <Separator className=" mt-4" />
                <Accordion
                  type="multiple"
                  defaultValue={opinions.articleCategories.map(
                    (item: any) => item.title
                  )}
                  className="w-full"
                >
                  {opinions.articleCategories
                    ?.slice(0, 1)
                    .map((item: any, index: any) => (
                      <AccordionItem value={item.title} key={item.uniqueId}>
                        <AccordionTrigger className="text-sm capitalize font-semibold dark:text-white">
                          মতামত
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            <div
                              key={item.uniqueId}
                              className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-white"
                            >
                              <SheetClose asChild>
                                <Link href={`/article`}>সকল মতামত</Link>
                              </SheetClose>
                              {opinions.articleCategories?.map(
                                (sub: any, index: any) => (
                                  <div
                                    key={sub.uniqueId}
                                    className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-white"
                                  >
                                    <SheetClose asChild>
                                      <Link href={`/article/${sub.uniqueId}`}>
                                        {sub.title}
                                      </Link>
                                    </SheetClose>
                                  </div>
                                )
                              )}
                              {/* </SheetFooter> */}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
                <Accordion
                  type="multiple"
                  defaultValue={newsCategories.newsCategories.map(
                    (item: any) => item.title
                  )}
                  className="w-full"
                >
                  <div className="flex flex-col"></div>
                  {newsCategories.newsCategories?.map(
                    (item: any, index: any) => (
                      <AccordionItem value={item.title} key={item.uniqueId}>
                        <AccordionTrigger className="text-sm capitalize font-semibold dark:text-white">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            <div
                              key={item.uniqueId}
                              className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-white"
                            >
                              {/* <SheetFooter > */}
                              <SheetClose asChild>
                                <Link href={`/category/${item.uniqueId}`}>
                                  সকল {`${item.title}`}
                                </Link>
                              </SheetClose>
                              {item.newssubcategorySet?.map(
                                (sub: any, index: any) => (
                                  <div
                                    key={sub.uniqueId}
                                    className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-white"
                                  >
                                    <SheetClose asChild>
                                      <Link
                                        href={`/category/${item.uniqueId}/${sub.uniqueId}`}
                                      >
                                        {sub.title}
                                      </Link>
                                    </SheetClose>
                                  </div>
                                )
                              )}
                              {/* </SheetFooter> */}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  )}
                </Accordion>
                <Accordion
                  type="multiple"
                  defaultValue={navigations.navigation.feature.map(
                    (item: any) => item.title
                  )}
                  className="w-full"
                >
                  {navigations.navigation.feature
                    ?.slice(0, 1)
                    .map((item: any, index: any) => (
                      <AccordionItem value={item.title} key={item.uniqueId}>
                        <AccordionTrigger className="text-sm capitalize font-semibold dark:text-white">
                          ফিচার
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            <div
                              key={item.uniqueId}
                              className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-white"
                            >
                              <SheetClose asChild>
                                <Link href={`/feature`}>সকল ফিচার</Link>
                              </SheetClose>
                              {navigations.navigation.feature?.map(
                                (sub: any, index: any) => (
                                  <div
                                    key={sub.uniqueId}
                                    className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-white"
                                  >
                                    <SheetClose asChild>
                                      <Link href={`/feature/${sub.uniqueId}`}>
                                        {sub.title}
                                      </Link>
                                    </SheetClose>
                                  </div>
                                )
                              )}
                              {/* </SheetFooter> */}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </button>
    </div>
  );
}
