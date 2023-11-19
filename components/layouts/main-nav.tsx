"use client"

import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  Bars3Icon,
  Bars3BottomRightIcon,
  ChartPieIcon,
  BellIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CurrentTIme from "../ui/currentTime";
import Link from "next/link";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  
export default function MainNav() {


  return (
    <Disclosure
      as="header"
      className="bg-white dark:bg-[#040D12] rounded-t-lg dark:text-stone-400 drop-shadow-2xl xs:sticky hidden lg:block  xs:top-0 xs:z-10 es:sticky es:top-0 es:z-10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200  lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className=" hidden relative z-10 lg:flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <div className="text-sm tracking-tight">
                    <CurrentTIme/>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <div className="lg:hidden lg:relative lg:z-10 lg:ml-4 lg:items-center">
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full bg-stone-100 dark:bg-[#040D12] p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-[#071720] focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6 " aria-hidden="true" />

                    </button>
                  </div>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
               <Link href="/">
               <h1 className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 font-bold text-2xl lg:text-3xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
                The Daily Morning
          </h1>
               </Link>
                
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:bg-gray-100 dark:hover:bg-[#040D12] hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500/20 ">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3BottomRightIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Desktop Notification button */}
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="flex-shrink-0 rounded-full bg-stone-100 dark:bg-[#040D12] p-1 text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-[#071720] focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6 " aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel as="nav" className="lg:hidden shadow-2xl rounded-2xl" aria-label="Global">
            {/* search */}
            <div className="lg:hidden  w-full md:px-7 px-4">
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
                  className="block w-full rounded-md border-0 bg-white dark:bg-[#040D12]  py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            {/* end search */}
            {/*  */}
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div>
                <div className="divide-y  divide-gray-500/10 ">
                  <div className="space-y-2 py-6 ">
                    <Disclosure as="div" className="">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-400 hover:dark:bg-[#071720]">
                            News
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-400 hover:dark:bg-[#071720]"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className=" block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-400 hover:dark:bg-[#071720]"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className=" block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-400 hover:dark:bg-[#071720]"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className=" block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-400 hover:dark:bg-[#071720]"
                    >
                      Company
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
