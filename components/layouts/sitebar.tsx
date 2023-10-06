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
import { ScrollArea } from "@/components/ui/scroll-area";
import { navigation } from "../../lib/navigations";

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Siebar() {
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
              <div className="absolute left-4 top-6 rounded-sm opacity-70 dark:text-gray-400 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                <BellIcon className="h-5 w-5" />
                <span className="sr-only">notification area</span>
              </div>
              <SheetDescription>
                {/*search  */}
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-lg border-0 bg-white dark:bg-[#040D12] py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-[#0c2525f8] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#0c2525f8] sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pt-8 pl-6">
              <div className="pl-1 pr-7">
                <Accordion
                  type="multiple"
                  defaultValue={navigation.categories.map((item) => item.name)}
                  className="w-full"
                >
                  {navigation.categories?.map((item, index) => (
                    <AccordionItem value={item.name} key={index}>
                      <AccordionTrigger className="text-sm capitalize font-semibold dark:text-gray-400">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2">
                          {item.sections?.map((subItem, index) => (
                            <div
                              key={index}
                              className="text-foreground/70 transition-colors"
                            >
                              {subItem.items?.map((sub, index) => (
                                <div
                                  key={index}
                                  className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-gray-400"
                                >
                                  <Link href={sub.name}>{sub.name}</Link>
                                </div>
                              ))}
                            </div>
                          ))}
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
