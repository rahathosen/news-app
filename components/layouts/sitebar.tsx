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
import { navigation } from "../../lib/navigations";
import ThemeToggle from "./theme-toggle-sitebar";
import RelativeDate from "@/lib/relativeDate";

const notifications = [
  {
    id: 1,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Oct 11, 2023",
    datetime: "2023-03-16",
  },
  {
    id: 2,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Oct 10, 2023",
    datetime: "2023-03-16",
  },
  {
    id: 3,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
  },
  {
    id: 4,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Feb 16, 2023",
    datetime: "2023-03-16",
  },
  {
    id: 5,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
  },
  {
    id: 6,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Mar 16, 2022",
    datetime: "2023-03-16",
  },
  {
    id: 7,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Mar 16, 2021",
    datetime: "2023-03-16",
  },
  {
    id: 8,
    title: "5 Reasons Why You Should Eat More Fruit Every Day",
    href: "/news",
    date: "Mar 16, 2020",
    datetime: "2023-03-16",
  },
];

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Siebar() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
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
                  <button className="absolute left-4 top-6 rounded-sm opacity-70 dark:text-gray-400 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800">
                    <BellIcon className="h-5 w-5" />
                    <span className="sr-only">notification area</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Notification area</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <ScrollArea className="h-[calc(40vh-4rem)]">
                    <div>
                      {notifications.map((post) => (
                        <div
                          key={post.id}
                          className="flex flex-col gap-2  rounded-md text-sm p-2 "
                        >
                          <Link
                            className="dark:bg-[#071720] bg-gray-100 hover:bg-gray-200 dark:hover:bg-[#0e232e] p-3 rounded-md"
                            href={"/news"}
                          >
                            <p>{post.title}</p>
                            <div className="text-neutral-400 font-medium text-sm  dark:text-neutral-600">
                              <RelativeDate date={post.date} />{" "}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-center">
                    <Link
                      className="rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
                      href="/notification"
                    >
                      View All Notification
                    </Link>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
              <SheetDescription>
                <ThemeToggle />
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
                              className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-gray-400"
                            >
                              {/* <SheetFooter > */}
                              <SheetClose asChild>
                                <Link href={item.id}>All {`${item.name}`}</Link>
                              </SheetClose>
                              {subItem.items?.map((sub, index) => (
                                <div
                                  key={index}
                                  className="transition-colors dark:text-gray-500 py-[1px] hover:dark:text-gray-400"
                                >
                                  <SheetClose asChild>
                                    <Link href={sub.name}>{sub.name}</Link>
                                  </SheetClose>
                                </div>
                              ))}
                              {/* </SheetFooter> */}
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
