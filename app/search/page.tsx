import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import NewsGridTemplate from "@/components/layouts/newsGridTemplate";
const tabs = [
  { name: "Views", href: "#", current: true },
  { name: "Editorial", href: "#", current: false },
  { name: "In Focus", href: "#", current: false },
  { name: "Letters to the Editor", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
      <div>
        <div className="relative xl:container mx-auto px-3 sm:px-4  py-4 bg-stone-100 dark:bg-[#040D12] ">
          <div className="relative">
            <div className=" flex-1 lg:px-0 ">
              <div className="flex items-center  py-4 xl:px-0">
                <div className="w-full">
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
                      className="block w-full rounded-md border-0 bg-white dark:bg-black
                       py-2.5 pl-10 pr-3 text-gray-900 dark:text-gray-200 text-lg ring-1 font-medium ring-inset ring-gray-300 dark:ring-[#071720]
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-400
                        sm:text-sm sm:leading-6"
                      placeholder="enter your Word"
                      type="search"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center ml-4 gap-x-1.5 
                  rounded-md bg-[#071720] px-2.5 py-2.5 text-sm font-medium
                  text-white dark:text-gray-400  shadow-sm hover:bg-[#071720]/60 focus-visible:outline
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  search
                  {/* <MagnifyingGlassIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  /> */}
                </button>
              </div>
            </div>
            {/* search end */}
            <h2 className="text-black dark:text-gray-400 lg:text-3xl pb-4 text-xl font-bold">
              <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
              Search result for: {"Dhaka Today"}
            </h2>
            <NewsGridTemplate />
          </div>
        </div>
      </div>
    </div>
  );
}
