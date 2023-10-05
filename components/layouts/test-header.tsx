"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState, ReactNode, HTMLProps } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import ListItem from "./ListItem";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import {navigation} from '../../lib/navigations'

// const navigation = {
//   categories: [
//     {
//       id: "news",
//       url: "news",
//       name: "News",

//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//       ],
//       sections: [
//         {
//           id: "news",
//           name: "News",
//           items: [
//             { name: "Bangladesh", href: "#" },
//             { name: "Investigation Stories", href: "#" },
//             { name: "Asia", href: "#" },
//             { name: "World", href: "#" },
//             { name: "Earth", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "opinion",
//       url: "opinion",
//       name: "Opinion",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "opinion",
//           name: "Opinion",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "sports",
//       url: "sports",
//       name: "Sports",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "sports",
//           name: "Sports",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
//     {
//       id: "business",
//       url: "business",
//       name: "Business",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "business",
//           name: "Business",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
//     {
//       id: "life-living",
//       url: "life-living",
//       name: "Life & Living",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "life-living",
//           name: "Life & Living",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
//     {
//       id: "tech-startup",
//       url: "tech-startup",
//       name: "Tech & StartUp",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "tech-startup",
//           name: "Tech & StartUp",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
//     {
//       id: "analytics",
//       url: "analytics",
//       name: "Analytics",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "analytics",
//           name: "Analytics",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
//     {
//       id: "feature",
//       url: "feature",
//       name: "Feature",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "feature",
//           name: "Feature",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
   
    
//     {
//       id: "More",
//       url: "more",
//       name: "More",
//       featured: [
        
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "More",
//           name: "More",
//           items: [
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
//             { name: "Environment", href: "#" },
//             { name: "Supplements", href: "#" },
//             { name: "Law & Our Rights", href: "#" },
           
//           ],
//         },
//       ],
//     },
//   ],

// };

export interface ListItemProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TestHeader() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] sticky top-0 z-10 ">
      <div>
        <div className="mx-auto ">
          <div className="flex h-16 items-center justify-center">
            {/* Logo (lg-) */}

            <NavigationMenu.Root className="relative  z-50 flex w-screen justify-between">
              <div>
                <Link href="/" className=" hidden lg:block  items-center">
                  <h1 className="bg-gradient-to-br lg:pl-8  md:pl-2 pl-2 from-gray-900  via-gray-800 to-gray-400 font-bold text-xl lg:text-2xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
                    DailyUdayan
                  </h1>
                </Link>
                
                <Link href="/" className="flex lg:hidden items-center">
                  <h1 className=" lg:pl-8  md:pl-2 pl-2 md:pr-2  font-bold text-xl lg:text-2xl bg-clip-text text-center font-heading  tracking-[-0.02em]  drop-shadow-sm   md:leading-[5rem]">
                  <button
                    type="button"
                    className="rounded-md text-gray-400  hover:bg-gray-100 dark:hover:bg-[#040D12] hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500/20"
                  >
                    <span className="sr-only">Open menu</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  </h1>
                </Link>
              </div>
              <div>
                {/* Logo (lg-) */}
                <Link href="/">
                  <h1 className="bg-gradient-to-br from-gray-900 lg:hidden via-gray-800 to-gray-400 font-bold text-2xl lg:text-3xl bg-clip-text text-center font-heading  tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900  md:leading-[5rem]">
                    The Daily Morning
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
                      <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 shadow-2xl backdrop-blur-xl dark:backdrop-blur-xl bg-white/90 dark:bg-[#040D12]/100  text-sm text-gray-500 w-screen  ">
                        <ul className="grid grid-flow-col gap-x-10 gap-y-10 py-12 pr-20  ">
                          <li className="col-start-2 grid grid-cols-5 gap-x-2">
                            {category.featured.slice(0, 10).map((item) => (
                              <Link key={item.name} href="/">
                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
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
                            <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm pl-8">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <Link
                                    href={section.name}
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
                  {/* rest of pages */}
                  {/* {navigation.pages.map((page) => (
                    <div key={page.name}>
                      <NavigationMenu.Item>
                        <div className="text-sm font-medium text-black hover:dark:text-gray-600 hover:text-gray-400 dark:text-gray-400 block select-none rounded-[4px] px-3 py-2 text-[15px]  leading-none ">
                          <Link href={page.href}>{page.name}</Link>
                        </div>
                      </NavigationMenu.Item>
                    </div>
                  ))} */}
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

              <div className="flex  items-center ">
                <button
                  type="button"
                  className="rounded-md text-gray-400 lg:pr-8  md:pr-2 pr-2 hover:bg-gray-100 dark:hover:bg-[#040D12] hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-500/20 p-2"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* <div className="lg:pr-8  md:pr-2 pr-2 text-center tracking-[-0.02em]  lg:leading-[5rem]">
                <Bars3BottomLeftIcon className="h-6 w-6  text-gray-400" />
              </div> */}
              {/* <Link href="/">
                <h1 className=" lg:pr-8  md:pr-2 pr-2   text-center   tracking-[-0.02em]    md:leading-[5rem]">
                  DailyUdayan
                </h1>
              </Link> */}
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
