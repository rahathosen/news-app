"use client"

import Image from "next/image";
import Divider from "./ui/divider";

const posts = [
  {
    id: 1,
    title: "Amazon Shoppers Are Ditching Designer Belts for This Best-Selling",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 2,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 3,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 4,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 5,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 6,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 7,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 8,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
  {
    id: 9,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
  },
];

const popularPosts = [
  {
    id: 1,
    title: " Why the world would end without political polls",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 2,
    title: " Meet The Man Who Designed The Ducati Monster",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 3,
    title: "2020 Audi R8 Spyder spy shots release",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 4,
    title: " Lamborghini makes Huracán GT3 racer faster for 2019",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 5,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 6,
    title: " Why the world would end without political polls",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 7,
    title: " Meet The Man Who Designed The Ducati Monster",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 8,
    title: "2020 Audi R8 Spyder spy shots release",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 9,
    title: " Lamborghini makes Huracán GT3 racer faster for 2019",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 10,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 11,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 12,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
];

export default function SecondSection() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <Divider />
      <div>
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="flex flex-row flex-wrap -mx-3">
                {posts.slice(0, 1).map((post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full px-3 pb-5"
                  >
                    <div className="relative hover-img max-h-98 overflow-hidden">
                      {/* <!--thumbnail--> */}
                      <a href="#">
                        <Image
                          src={post.imageUrl}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto h-auto rounded-md"
                        />
                      </a>
                      <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                        {/* <!--title--> */}
                        <a href="#">
                          <h2 className="text-3xl font-bold capitalize text-white mb-3">
                            {post.title}
                          </h2>
                        </a>
                        <p className="text-gray-100 hidden sm:inline-block">
                          {post.description}
                        </p>
                        {/* <!-- author and date --> */}
                        <div className="pt-2">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                            {post.tag}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {posts.slice(1, 7).map((post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                          }
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto rounded-md"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight text-black  dark:text-gray-400 mb-2">
                          <a href="#">{post.title}</a>
                        </h3>
                        <p className="hidden md:block  dark:text-gray-400 text-gray-800 leading-tight mb-1">
                          {post.description}
                        </p>
                        <a
                          className="text-gray-800 font-medium  dark:text-gray-400"
                          href="#"
                        >
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          {post.tag}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 order-first lg:order-last">
              <div className="w-full bg-stone-100 dark:bg-[#040D12] ">
                <div className="mb-6">
                  <div className="p-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
                    <h2 className="lg:text-xl text-lg font-bold text-black dark:text-gray-400">
                      Most Popular
                    </h2>
                  </div>
                  <ul className="post-number">
                    {popularPosts.slice(0, 12).map((post) => (
                      <li
                        key={post.id}
                        className="border-b border-gray-100 dark:border-gray-900 hover:bg-stone-300 rounded-lg dark:hover:bg-[#030b10]"
                      >
                        <a
                          className="text-lg font-bold px-6 py-3 flex flex-row items-center text-gray-800 dark:text-gray-400"
                          href="#"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
