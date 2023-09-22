"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  Popover,
  Tab,
  Transition,
  Disclosure,
} from "@headlessui/react";
import Link from "next/link";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
// test
const navigation = {
  categories: [
    {
      id: "News",
      name: "News",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "News",
          name: "News",
          items: [
            { name: "Bangladesh", href: "#" },
            { name: "Investigation Stories", href: "#" },
            { name: "Asia", href: "#" },
            { name: "World", href: "#" },
            { name: "Earth", href: "#" },
          ],
        },
      ],
    },
    {
      id: "More",
      name: "More",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "More",
          name: "More",
          items: [
            { name: "Environment", href: "#" },
            { name: "NRB", href: "#" },
            { name: "Supplements", href: "#" },
            { name: "Law & Our Rights", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Opinion", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Business", href: "#" },
    { name: "Life & Living", href: "#" },
    { name: "Tech & StartUp", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Feature  ", href: "#" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Test() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-stone-100 dark:bg-[#040D12] sticky top-0 z-10 ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-stone-100 dark:bg-[#040D12] pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="bg-stone-100 dark:bg-[#040D12] border-t border-stone-100 dark:border-gray-900">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-gray-600 text-gray-400"
                                : "border-transparent dark:text-gray-600 text-gray-900 ",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.slice(0,2).map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-stone-100 dark:bg-[#040D12] group-hover:opacity-75">
                                <Image
                                  src={"https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
                                  alt={item.imageAlt}
                                  fill={true}
                                  className="object-cover object-center"
                                />
                                {/* <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" /> */}
                              </div>
                              <Link
                                href={item.href}
                                className="mt-6 block font-medium dark:text-gray-600 text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                Govt move to check prices falls flat
                              </Link>
                              
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium dark:text-gray-600 text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-stone-200 dark:border-gray-900 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium dark:text-gray-600 text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative  z-50 ">
        <nav aria-label="Top">
          {/* Top navigation */}

          {/* Secondary navigation */}
          <div className="bg-stone-100 dark:bg-[#040D12] ">
            <div className="">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-center">
                  {/* Logo (lg+) */}
                  {/* <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <h1 className="font-bold text-gray-200">Desktop</h1>
                    </a>
                  </div> */}

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                      <div className="flex h-full space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-gray-600 font-semibold text-gray-400 dark:text-gray-200"
                                        : "border-transparent text-black  dark:text-gray-400  hover:text-gray-400 dark:hover:text-gray-600",
                                      "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium outline-none transition-colors duration-200 ease-out"
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/70 dark:bg-[#040D12]/90 text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2  bg-transparent shadow-2xl"
                                      aria-hidden="true"
                                    />
                                    {/* Fake border when menu is open */}
                                    <div
                                      className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className={classNames(
                                          open
                                            ? "bg-transparent"
                                            : "bg-transparent",
                                          "h-px w-full transition-colors duration-200 ease-out"
                                        )}
                                      />
                                    </div>

                                    <div className="relative">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-flow-col gap-x-8 gap-y-10 py-8">
                                          <div className="col-start-2 grid grid-cols-5 gap-x-2">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative text-base sm:text-sm"
                                              >
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                  <Image
                                                    src={
                                                      "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                                    }
                                                    alt={""}
                                                    width={240}
                                                    height={120}
                                                    className="object-cover  object-center"
                                                  />
                                                </div>
                                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                  <h3 className="text-sm font-medium leading-tight mb-2 text-black dark:text-gray-400">
                                                    <a href="#">
                                                      Govt move to check prices
                                                      falls flat
                                                    </a>
                                                  </h3>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
                                            {category.sections.map(
                                              (section) => (
                                                <div key={section.name}>
                                                  <Link href={section.name}>
                                                  
                                                  <p
                                                    id={`${section.name}-heading`}
                                                    className="font-semibold text-base dark:text-gray-200 text-black"
                                                  >
                                                    {section.name}
                                                  </p>
                                                  </Link>
                                                  <ul
                                                    role="list"
                                                    aria-labelledby={`${section.name}-heading`}
                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                  >
                                                    {section.items.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <Link
                                                            href={item.href}
                                                            className="hover:text-gray-900 dark:hover:text-gray-200 font-semibold dark:text-gray-400"
                                                          >
                                                            {item.name}
                                                          </Link>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400 "
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden ">
                    <button
                      type="button"
                      className="-ml-2 rounded-md text-gray-400  hover:bg-gray-100 dark:hover:bg-[#040D12] hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500/20 p-2"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3BottomLeftIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href="/">
                    <h1 className="bg-gradient-to-br from-gray-900 lg:hidden via-gray-800 to-gray-400 font-bold text-2xl lg:text-3xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
                      The Daily Morning
                    </h1>
                  </Link>

                  {/* Notification area */}
                  <div className="flex flex-1 items-center justify-end lg:hidden">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex"></div>

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
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
